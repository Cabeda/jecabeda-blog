---
title: "Data platform on a budget"
date: "2022-10-11"
---

Readers: Data engineers starting to build a data platform and without setting up too much costs. Bit of focus on AWS

Why: Creating a data platform can be expensive, specially considering that we are frequently asked to create a generic solution without internal users. And if we have initial users we can create a too specific solution. So what would be a good approach?

Concepts:

- Modern Data Stack
- Lakehouse
- AWS
- Presto/Trino
- Streaming
- Batch

## Intro

I'm a data engineer starting from the ground up a data platform. The company can grow from 1 internal user to millions of events being processed. How can I scale?

Rules:

- Data platform stack should scale, not the team
- No major architecture rewrites
- No reinvent the wheel
- Avoid payed, close source solutions
- 100$ stack
- 1000$ stack
- 10000$ stack

### How can I start (aka 100$ stack)

So we are starting the data platform, we need to setup an MVP and need to convince the company to move to data driven. Should we store everything and consider how to use it later?

### 1000$ stack

We got a data product and got recurrent users. But I'm getting some trouble scaling. We can update some of our infra to tackle this.

### 10000$ stack

Some issue scaling:

- Performance/cost: we need to optimize the queries for usage as scaling can take us for so long
- Data management: improve quality, transparency and management of data platform

### Future ahead

If you've reached this point congratulations! You are on a good direction and there will be a lot of challenges ahead
