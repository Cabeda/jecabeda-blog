---
title: "Global view in a regional world"
date: "2021-01-05"
---

As a data engineer my main goal is to create a single and complete source of truth. This has brought me into the cloud and the ELT architecture where we can easily bring all data into a single source (usually a data warehouse) for later usage. However, in recent years we've seen a bigger awareness on where the data is stored and in some cases a requirement to hold it and keep it on a specific region. For teams like BI, this trend becomes a challenge. How can we produce an analysis with data that can't be moved away from another region?

## Possible solutions

To solve this we have two options:

1. Pre aggregation of data
2. SQL Query Engine

The first option quickly becomes unfeasible. For teams with existing infrastructure, global analysis would require to process all our existing data into a global database and then adjust all existing reports to the new sources. This would require a stop on all new developments for months.

But, for the second one, using engines like Trino (former prestosql), we could leverage it's ability to query multiple databases, add views that automatically query the same data on different regions and we could do simple adjustments to our reports to read from the slightly adjusted sources. This type of abstraction also has the plus of abstratcting away the addition of further regions.

## Challenges

This kind of approach has some drawbacks however:

* If you aren't using a SQL query engine already it can be difficult to just replace one engine with another. Luckily in my professional case we were already moving into a data lake architecture and all components were already set.
* Different regions can have different schemas. This type of abstraction can be done manually but in case you automate this, you might find that the regions don't match, it's important to set data alerts for missing data and to set a default region which will always be your go-to 
* You must make sure that the output of the SQL query engine isn't stored anywhere (some temporary cache might be allowed for performance reasons). If this isn't the case your architecture might become non-compliant.

## Conclusion

This new type of challenge can appear even for small data teams as the clients, the owners of their data, set these as a requirement from the start. As such, for all data teams that might have the goal of going international you should start thinking on either adding a SQL query engine (there multiple good options on all cloud providers) or on architeting your data models to accomodate this. 