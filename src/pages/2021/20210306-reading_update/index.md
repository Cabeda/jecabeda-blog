---
title: "Reading Update"
date: "2021-03-06"
---

![<span>Photo by <a href="https://unsplash.com/@nicki_schinow?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Nicki Eliza Schinow</a> on <a href="https://unsplash.com/s/photos/japan?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>](./nicki-eliza-schinow-BjJP2TN8WoI-unsplash.jpg)

## Data visualization

The creator of D3 writes a good summary of his last 10 years in [10 Years of Open-Source Visualization](https://observablehq.com/@mbostock/10-years-of-open-source-visualization).

## Data Warehouse

Clickhouse is starting to look like a good alternative to closed source datawarehouses and in this article it's presented some pros and cons in [Clickhouse as an alternative to ElasticSearch and MySQL, for log storage and analysis, in 2021](https://pixeljets.com/blog/clickhouse-vs-elasticsearch/)) for using it as an alternative to elasticsearch (one of them the simplicity of the cluster with and increase in performance). Uber has also published an article proposing clickhouse as a good solution for this specific use case in [Fast and Reliable Schema-Agnostic Log Analytics Platform](https://eng.uber.com/logging/)

## Data Pipelines

This article presents an interesting view of [A Data Pipeline is a Materialized View](https://nchammas.com/writing/data-pipeline-materialized-view).
Materialize has developed an adapter to DBTas stated in [Introducing: dbt + Materialize](https://materialize.com/introducing-dbt-materialize/) which at first sight might not seem much but it introduces streaming data pipelines into DBT through improved materialized views. With the possibility of one day being able to declare in SQL both a batch or a stream like shown in the paper [One SQL to Rule them all](https://arxiv.org/abs/1905.12133) SQL starts to become a really good skill to have even as a data engineer.

## Data Architectures

A good bird view of an up-to-date analtytics stack in [https://technically.dev/posts/what-your-data-team-is-using](https://technically.dev/posts/what-your-data-team-is-using).

Netflix also presented their data processing of a data mesh through apache flink on [Netflix Data Mesh: Composable Data Processing](https://www.youtube.com/watch?v=TO_IiN06jJ4)

Have a nice day and stay safe :-) 