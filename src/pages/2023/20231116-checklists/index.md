---
title: "Power of checklists"
date: "2023-11-16"
tags: 
    - development
    - agile
---

So, I've been one to be methodic on my practice and I truly thing automation in software engineering is one of the secret powers of the industry. Taking inspiration from an article I read many years ago, I find that for any given repeating task this is the expected lifecycle:

1. Document the process
2. Improve the documents on each iteration
3. Automate small bits of the process with scripts
4. Automate the entire process/Deprecate the process

Looking back at this I see two kinds of jobs that I don't see being automated that much and that don't often have very good documentation. Development and peer review. And as I get bored very quickly, I think I should be taking a step of documenting how I go with each one of these. Depending on the project there might be bigger or less degrees of automations but here goes my checklist

## Development checklist

- [ ] What are the requirements?
- [ ] Is there an architecture design?
- [ ]

## Peer review checklist

- [ ] Read the description of the task
- [ ] Skim the entire code. Take notes on things you find odd
- [ ] List resource changes
- [ ] Given the description list the tests you think would better match this
- [ ] Run the tests locally
- [ ] Check if your expectation of the tests are matched by the test suite
- [ ] Format the code

Given the checklist above I see that these are very high levels steps which can be further documented (step 2) and the scripts to facilitate them can also be identified. As I've been worked across multiple languages (python, JS, TS, terraform) each project will have diferent processes but I think that just shows that I'm moving  between steps 1-3.

If I'll be seeing step anytime soon? Not really. Tools like copilot are easing up the process but they are not removing the human in the loop.

But something I find interesting is write on what I think are the types of tests and define checklists of tests I would run for each type of development (i.e. test API integration requires testing the responses for any input).
