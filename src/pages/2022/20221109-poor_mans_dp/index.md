---
title: Poor's man Data Platform
---

## Introduction

Going through the last years I've gotten through some data architectures. First, I was proudly presented to Kimball and ETL (Extract, Transform and Load). As storage and computing were expensive we need to keep our costs low. Kimball presented a batch/offline processing to get data into a clean schema which enabled carefully thought analysis. I was very interested in this and quickly got working on using the provided license for using SSIS to get data from some files into a Postgres database. The given datasets were big enough that my teacher was proud to present an amazing tool that we would need to make the tables usable. Indexes! This was a fun project but I was getting an odd feeling. The Microsoft interface was kinda clunky and it took us a lot of time to load the data and correct transform it into the correct format.

Some years later I got introduced to DBT. And what a load fresh of air this was. Storage is way cheaper so why not load everything into the database and clean it later? This was called an ELT architecture and it removed a load of time doing conversions between systems that couldn't even agree on what an Integer was. With this new piece of technology, I also got introduced to another new architecture. Something the industry was calling the Modern Data Stack. As DBT is focused on the transformation stack, we still need to load the data into the data warehouse. For this, we could create custom (and error-prone) scripts or use tools especially made for this. And this is where Fivetran and Stitch entered. It was so easy to connect to a salesforce account or Postgres and get data on a daily bases.

And for a while I was truly happy, I set up an orchestrator to manage all transformations, started to slowly implement data testing and make the data platform more reliable, and was quite happy as most of the problems, at the scale we had were solvable by a small team.

But then I decided to move companies and got hit by something that had been a minor problem up until then. Budget. I had been working somewhere where we had a budget so big that it had never been a major problem. But here I was, where we needed to set up a system where I should start small, prove that a data platform could bring value to the company, and then maybe get an investment for more expensive tools. I spent a couple of months on this and learned a lot about Terraform but something that bothered me a lot was how quickly things got expensive. Athena looked great at first but the truth is that the performance wasn't that great and don't get me started on their federated connectors. I had previously worked with Trino connectors and that gave me a lot of freedom. And this got me thinking about all the issues we were having and how the Modern Data Stack which I seriously thought could resolve most of the data challenges. But then again, this architecture was only partly open source and required using expensive data warehouses and other tools like Fivetran.

So, in an economy that requires all budgets to be optimized, convincing investment in a data platform can be a daunting task. What if we could build a data platform with 100$? Is this possible? How much data could we handle?

> It's important to note that while all of this is happening there's a kinda parallel evolution happening on the streaming world. Systems like kafka and flink are getting simpler and simpler and merging the boundaries between batch and real time while not breaking your bank account. However we are not quite there yet so I'll be focusing on the main goal of this article.

## What are our options?

100$ might seem a lot if you never got a production data system running but when you can spend this by simply having a Redshift instance running, it can present itself as a daunting task. Looking at [AWS calculator](https://calculator.aws/#/addService/Redshift) we can quickly see we need to go over our budget just to pay for the smallest instance dc2.large.

![Redshift estimated costs](images/2022-11-08-09-56-36.png)

We could consider stopping the instance and resuming only during working hours (~8 hours per day). This might not seem much but hey hard times require hard decisions. One big issue however to take into account is the data pipelines which require running off hours.

And this reminds me. We need more than a data warehouse!

For running a complete data platform using an ELT approach we need at the minimum the following:

- an Extractor to retrieve external data
- a data warehouse or OLAP database
- an orchestrator to schedule the data transformation and data management jobs
- a tool to visualize

Aside from all this, there is something that bothered me a bit and made me add another requirement. The fact is that when using cloud platforms we can't just deploy locally on our machine and work from there. This leads to either poor development experience or to need to connect directly to the instances in the cloud which can either lead to bigger costs (just the past month I got a 500$ bill for testing some systems on AWS) or impact production if we are running expensive queries on the data warehouse.

These are a lot of requirements but, after some research, I found an interesting stack that might be exactly what we need. Picking again on the requirements above I propose we pick the following stack and "glue" it all together using [meltano](https://meltano.com/), an ELT CLI framework:

- extractor: singer taps
- data warehouse: duckdb
- orchestrator: airflow
- viz: superset

The stack above is all open source and has the great benefit of being deployable in a single instance on any machine.

## Demo

Github repo with the code. Test with a big dataset. Planes? I could test this locally to show but as we want to test this on an instance below 100$.

## Meltano

### Extractor

One of my big complains regarding the modern data stack is the reliance on third party and quickly expensive companies like Fivetran. Airbyte is looking very promising with their open core approach which allows someone to use develop their own connectors and deploy it on their personal instances. However, singer has been one of the first to propose this open-source extractor. As it's the only builtin to meltano and seems to be active in terms of maintenance.

Furthermore, in case we need to switch, we can easily deploy a separate instance of airbyte and send the data to our data warehouse.

### Data warehouse

The data warehouse is a very crucial part of the data platform, it needs to fast to process a large number of rows for analytical use cases and can be very hard to replace. However something I've recently been thinking about, most companies don't have datasets of terabytes which could be considered as too big for processing in a single instance. If this wasn't the case it would be very difficult to keep the data platform under our reduced budget but if we are able to store everything in a single instance there's a new intro to the market that shows a lot of potential which is Duckdb.

This open-source database is, in their words "in-process SQL OLAP database management system". If we want to do some comparisons, this would be the equivalent of SQLite for data warehousing.

In this talk I want to test if we can orchestrate our pipelines to write to this database while having some readers and even do some heavy testing of some real world data.

### Orchestrator

Something great from having using Meltano is the fact that we can use airflow scheduler. There are a lot of niceties about this but, at the moment one of those is that most of the complexity of airflow can be postponed until we might needed it. For now, to run a job we need to do the following:

Add the demo here

### Viz [extra]

With the data platform itself, we could decide to stop here and technically we would have a very viable data platform. However, let's take an additional step and provide a way for the users to access this.

## Ec2 instance

After the demo, I'll show a version running on EC2 and will present the graphs with cost and memory and storage usage. I'll run some queries to show how to connect. The instance will be a t4g.medium with 100 GB (EBS Gp3) with 3000 IOPS and 125 MPbs of throughput of storage (23 USD). If we want to increase to 1TB this puts the cost at 95 USD ([source](https://calculator.aws)).

## Wrap-up

There are multiple improvements we need to make for this to be production ready such as setting a separate Postgres instance for the meltano and airflow metadata but I hope this demo/talk/article shows a new venue on how to deploy a data platform without breaking the bank. I'll be working on these improvements and on deploying this on a docker image which should make it easier to test and deploy on the cloud.
