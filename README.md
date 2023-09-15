# Stock Mentor

![6sp milestone 2](https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/2f3b5d91-0909-44d1-9ef1-b08494ac41f1)

# Problem

Despite considering financial statements, market trends, economic conditions, and company news, investors cannot accurately predict the exact timing to buy, sell, or hold stocks.
The stock market is characterized by sudden and unpredictable changes, which can result in substantial financial losses for investors.
To mitigate risks, investors should conduct thorough research and seek professional advice before making any investment decisions in the stock market.

# Solution

We are developing a web application specifically designed to provide investors with recommendations on stock trading decisions for different companies. The application will offer daily suggestions on whether to buy, sell, or hold stocks, assisting investors in making informed choices. By leveraging this application, investors can gain valuable insights to navigate the dynamic stock market effectively.

# Challenges & remedies
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

# Project Progression

![6sp milestone 2 (1)](https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/5057cd30-7ff9-4691-aead-30f3b250c61f)

We completed our project following this workflow:

- In the 7th week, we identified the problem.
- From the 8th to the 11th week, we defined the ML model and dataset, while simultaneously developing the web application.
- During weeks 12 to 13, we created the ML model and integrated it into the application.
- Finally, we completed our project in the last week, which was the 14th week.

Throughout each development phase, we adhered to the Agile methodology and conducted testing every week.

# Process
We divided the project into smaller tasks and allocated them among our team members. To facilitate this process, we utilized a Kanban board. For the discussion, we have used Slack workspace.

# ML Evaluation

Our data set is imbalanced distribution Normally in stock data set is like this. Here the image shows that

<img width="549" alt="Screenshot 2023-09-15 at 22 20 46" src="https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/1f7414a7-c32a-4c5b-8ff0-153950461ece">


Here we are using SMOTE technique on training data, SMOTE algorithm synthetically produces samples using KNN(K nearest neighbour) algorithm, so it understands the local behaviour of a particular class label and try to produce synthetic rows according to that behaviour.

It is classification problem so we are using random forest model with smote train data. Here our model perform with train dataset and test data set

<img width="923" alt="Screenshot 2023-09-15 at 22 21 34" src="https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/d4f7c3af-8c20-4ab9-b314-5ff31be40cdb">

# Testing
We conducted API testing using the Postman application, where we tested the endpoints. 
Additionally, we performed unit testing for each frontend component both manually and by employing test cases.
Model Selection: We tested multiple machine learning models and selected the one with the highest F1 score, indicating superior overall performance.

<img width="640" alt="Screenshot 2023-09-15 at 22 23 11" src="https://github.com/cepdnaclk/e18-6sp-Stock-Mentor/assets/74037052/abcb9fd9-6b05-4550-b611-f3bbec031962">


