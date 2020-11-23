---
title: "Tale of better analytics"
date: "2020-10-28"
tags: ""
---

- Objetives
  - How to improve analytics pipelines
- Target
  - Junior Data Engineers
  - Data Analysts
  - Small teams
- TLDR

## Structure

The daily work of a typical data team is to, given a question find the best way to answer it. Somedays you might be asked how much the company is making (with metrics like Anual Contract Value or the Monthly Recurring Value) or which is the bottleneck of the sales team (to which salesforce data might become handy) but essentially that's it.

At first, you might be tempted to go to the source data, be it operational databases, external services like salesforce or Zuora, extract it to local files and wrangle with the data until you are able to answer the question. You present your outputs and you call it a day. Finito! The end.

But you come the next day and you get a new question. You start the process and start it from scratch. Find the data, extract, clean, transform and present the results. And you do it every single day.

After a while you start to find problems. Some sources require some cleaning, some questions are asked yearly, other monthly and some are even daily reports that require you to start your day an hour earlier so that when the manager returns he has all the information he needs. These reports become such a huge portion of your day that you simply can't cope with existing and new requests. Your clients start to worry as a question that would be answered in hours or in a day, now takes weeks or even months.

This becomes so unbearable that you decide to take action. You start to use your computer skills and schedule tasks in a server to periodically runs your so carefully created scripts. Now, what would take almost a full day is being done without requiring your so precious time!

Days pass, your clients are all happy as they find themselves with their beautiful and so useful reports until one day they come back kinda mad. They start to ask difficult questions. Why does person A say that we have X and I get Y? This should be the same!

Calmly, as usual, you set yourself to the task of finding the issue. After looking for some hours you find it! One of the clients had the newest version where the same metric had to take into account new sources and, as such the old versions showed a different number. Happy with yourself for finding the bug you decide to look for all the places that need fixing and... there are so many! What would take some hours starts to take a few days as you need to make sure that no unexpected changes occur. This was unexpected but it would be okay if not for the other bugs that start to appear. What looked like a fortress, starts to look more like a castle of cards, ready to be blown away.

The requests are so many that you decide to action. You look at your work and start to look for patterns. After some careful investigation of some patterns start to emerge. Duplicated metrics, data cleaning all over the place, code and SQL that could be refactored and even better refactored. Worst of all you don't realize that all your tests are manual which means that if you introduce an error into the system and you miss it on your manual tests, you will again hear your highly payed boss. And it sure won't be about a pay raise.

This clearly isn't a way to live a life. You need to factor in not only a data schema but you also need to check the data during and after development. Constantly. First you start planning your freshly and greatly improved data model around a standard (maybe Kimball). You start by finding the metrics you need and from these separate the dimensions. There are some corner cases and the granularity might vary but in the end you find yourself with a snowflake schema. The easy part is done.

Because know you need a way to reuse your code and SQL, and your scripts on a server sure won't cut it, you do some research and decide to apply some of your software engineering skills. You install an orchestrator to replace your cron jobs, create a git repo and start to migrate everything to either airflow dags or DBT models. Regarding testing you easily add DBT tests during development and start running these periodically to alert you if anything is going wrong. New requests start being processed by the new data model and you start to see in no time the results of your hard labour.

Fewer mistakes happen and when they do, you fix them and often it's a one place thing which won't repeat again as you add a new data test. Other times, as soon as garbage data tries to enter your models, you receive an alert and fix it before anyone finds it.

Of course you see other improvements that need to be made, you are a one-man team and would greatly appreciate more help. You could also start to proactively look for questions from your clients. You could even create some documentation of your models for your clients to be more aware and even become independent when looking for new answers. New challenges would rise from all of these but now, when the day ends, you leave confident on your model and that your company is on the road to become data-driven :-)
