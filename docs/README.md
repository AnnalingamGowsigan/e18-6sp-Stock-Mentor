---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: eYY-XXX-project-template
title:
---

# Stock Mentor

---

## Team
-  E/18/013, Abhilash R., [email](mailto:e18013@eng.pdn.ac.lk)
-  E/18/058, De Alwis K. K. M., [email](mailto:e18058@eng.pdn.ac.lk)
-  E/18/115, Gowsigan A., [email](mailto:e18115@eng.pdn.ac.lk)

![6sp milestone 2](https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/c2f39235-d763-44b8-951c-7c1421cc680d)


## Table of Contents
1. [Background](#backgroung)
2. [Problem](#problem)
3. [Solution](#solution)
4. [Impact](#impact)
5. [User view](#user_view)
6. [Timeline](#timeline)
7. [Links](#links)

---

## Background

<img src="./images/background.png"  width="50%" height="50%">

<img src="./images/stock_chart.png"  width="50%" height="50%">

According to the above image in the stock market when a person;
                    - buy stocks for a lower price and sell it to a higher price = Long ,
                    - sell stocks for a higher price first and then buy stocks for a lower price = Shorts,
                    - not buying or selling stocks = hold
 
## Problem

In stock market investors buy, sell or, hold data on daily basis.
        - Investors engage in daily buying, selling, or holding of stock market data.
        - Predicting market movements accurately is challenging, leading to potential losses and risk.
        - Investors should conduct thorough research and seek professional advice before making investment decisions.

## Solution

Developing a web application specifically designed to provide investors with recommendations on stock trading decisions for different companies. The application will offer daily suggestions on whether to buy, sell, or hold stocks, assisting investors in making informed choices. By leveraging this application, investors can gain valuable insights to navigate the dynamic stock market effectively.

Following are the facts that were taken into consideration when designing the solution

1. Classification

   Three key categories
    - Long
    - Hold
    - Short
  
2. Imbalanced data

   An imbalanced data set refers to a dataset where the distribution of classes or labels is heavily skewed.

## Impact

There are hundreds of models available, but unfortunately, more than 70% of them make incorrect predictions for the stock market. This is primarily because these models are solely based on software knowledge without considering the crucial aspect of business knowledge. However, our application will stand out by incorporating the business ideas from the project owner, resulting in higher accuracy and a greater impact.

1. Investor Confidence: Accurate predictions can enhance investor confidence in the stock market. If investors have access to reliable predictions of hold, buy, or sell periods, they may make more informed decisions, leading to increased participation and potentially higher trading volumes.

2. Increased accuracy in trading decisions refers to the potential for algorithmic trading systems to make more precise and data-driven choices when executing trades

## Challenges & remedies
### Difficulties in finding a suitable dataset for the project

* Utilizing ParseHub web scraping tool.
* Obtaining historical data from Yahoo Finance.

### The data set contained unclear data, unwanted columns, and duplicated values.
Used set for the solution

* Explore the data here and see what story data tells us about the stocks.
* Check for null values and try to impute them.
* Check each and every feature and see whether it is useful to us or not.
* Plot various plots to understand the relationship between different features.
* Check whether there is a correlation between data or not.

### Unable to obtain the target class for the dataset

* Leverage predefined stock market indicators.
* Served as a basis for determining the target class for each data entry.


## User view

<img width="1728" alt="Screenshot 2023-09-15 at 22 44 19" src="https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/9be351a8-1939-4c20-90fb-b6da8e9be0e1">

<img width="1728" alt="Screenshot 2023-09-15 at 22 44 07" src="https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/1450be50-ecec-4ba9-87bc-156b3c9e2841">





## Project Progression

![6sp milestone 2 (1)](https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/5057cd30-7ff9-4691-aead-30f3b250c61f)

We completed our project following this workflow:

- In the 7th week, we identified the problem.
- From the 8th to the 11th week, we defined the ML model and dataset, while simultaneously developing the web application.
- During weeks 12 to 13, we created the ML model and integrated it into the application.
- Finally, we completed our project in the last week, which was the 14th week.

Throughout each development phase, we adhered to the Agile methodology and conducted testing every week.

## Process
We divided the project into smaller tasks and allocated them among our team members. To facilitate this process, we utilized a Kanban board. For the discussion, we have used Slack workspace.

## ML Evaluation

Our data set is imbalanced distribution Normally in stock data set is like this. Here the image shows that

<img width="549" alt="Screenshot 2023-09-15 at 22 20 46" src="https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/1f7414a7-c32a-4c5b-8ff0-153950461ece">


Here we are using SMOTE technique on training data, SMOTE algorithm synthetically produces samples using KNN(K nearest neighbour) algorithm, so it understands the local behaviour of a particular class label and try to produce synthetic rows according to that behaviour.

It is classification problem so we are using random forest model with smote train data. Here our model perform with train dataset and test data set

<img width="923" alt="Screenshot 2023-09-15 at 22 21 34" src="https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/d4f7c3af-8c20-4ab9-b314-5ff31be40cdb">

## Testing
We conducted API testing using the Postman application, where we tested the endpoints. 
Additionally, we performed unit testing for each frontend component both manually and by employing test cases.
Model Selection: We tested multiple machine learning models and selected the one with the highest F1 score, indicating superior overall performance.

<img width="640" alt="Screenshot 2023-09-15 at 22 23 11" src="https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/abcb9fd9-6b05-4550-b611-f3bbec031962">


## Links

- [Project Repository](https://github.com/cepdnaclk/{{ page.repository-name }}){:target="_blank"}
- [Project Page](https://cepdnaclk.github.io/{{ page.repository-name}}){:target="_blank"}
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
