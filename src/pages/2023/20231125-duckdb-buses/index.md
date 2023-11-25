---
title: Duckdb data platform
date: 2023-11-25
tags:
  - duckdb
---

So I'm going to be doing the data stream presentation and I think a blog post to accompany it would be great.

## Introduction

So, we have a very real problem where Porto public transportation is constantly arriving either late or not appearing at all. In a time where we want to be less dependent on the car and help the environment, this becomes a very real problem. We just can't leave our car and go to work on the bus if we aren't absolutely sure that we'll be able to arrive on the scheduled time. But to solve an issue we need to be able to measure it. In this presentation that's exactly my goal

## Explore Porto data

While on other European cities we are able to see the public transportation in realtime through google maps, in Porto we got a separate platform, explore.porto.pt. Taking a bit of time analysing it I figured out that behind the scenes there is an open graphql API (check `https://otp.services.porto.digital/otp/routers/default/index/graphql`).

This is great as we can look at the graphql documentation and extract for all bus stops the next arriving buses.

## DuckDB data platform

In this stage we see that we have 2576 stops. If we request the realtime data for each stop every minute it means we'll have around 3.709.440 rows every day. This is a significant amount of data so at this point we have two concerns. How can we extract and store this data reliably and how can we analyze this data?

For the first case we don't need nothing very complicated, we have a graphql query and we need to execute it regularly. In the end it should be able to store the retrieved data. But the storage format is relevant. As I'm interested on testing DuckDB as an alternative to tradicional databases and data warehouses we can look at the external data it supports.

Looking at [data imports section](https://duckdb.org/docs/archive/0.9.2/data/overview) we can see that some formats it supports are:

* sqlite
* csv
* json
* parquet
* hive tables
* iceberg tables
* postgres

There are many more but for this presentation I've decided to test json, sqlite, parquet and iceberg.

## Json

For data that isn't going to change a lot like stops and routes we can extract it and store it on json. This becomes quite easy as we can run the graphql query, download the data into a json file (using insomnia), and query it with duckdb.

## dbt

To store the sql code for duckdb and easily manage the transformations, we are using dbt. An open core cli framework that can execute jinjasql agaisnt the database. We setup the profiles file to point to our local duckdb instance and we are good to go!
