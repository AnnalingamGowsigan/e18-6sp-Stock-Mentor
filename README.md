# Stock-Prediction-Project

# Business Objective

There have been surge in people investing in stock from last few years and specially when people can invest from our their own smartphone, they have started understanding the importance of investment whether its stocks, real estate or metals.

Lots of people who do not know much about how stocks behave or at what time they should buy/sell a particular stock keeping the risk involved in mind, a Recommendation model can help them to choose the right stock.

A Model which can recommend users what to buy or what to sell in real time is our Business Objective.

# Constraints

1.Low Latency(In Real time within in few nano seconds the model should be able to classify the stocks according to the market )

2.Errors can be very costly, people can loose their money by one wrong prediction though the model can't be 100% accurate.

3.Interpretablity is important.

4.Probablity of a particular stock belonging to each class is needed.

# Machine Learning Formulation

This Recommendation model should classify a particular stock, whether its a "STRONG_BUY" "STRONG_SELL" "BUY" "SELL" "HOLD".

The major challenge of this classification problem is imabalance natures of class labels, most of times user has to HOLD the stocks and very few times STRONG BUY and STRONG SELL Signal is there.

# DATA

Scraped data for 10 Companies from Yahoo Finance website, Recommendation column has been added to data as the target class.

# PERFORMANCE METRIC

It is a simple multiclass classification problem, we can just use Multi-Class log loss for checking the performance.

Other than that we will use accuracy(after checking if data is balanced or not), here the important thing is we care equally about Precision and Recall because we care equall about False Positives and False Negatives.

Example1

Let's say we have a case when actually stock is "NOT A STRONG SELL" at that moment and model predicted it to be "STRONG SELL", here user will sell the stocks and after some time price of that stock rises and user won't be happy with the model and he/she might not use it afterwards. This is a case of False Positive.

Example2

let's say we have a case when actually stock is a "STRONG SELL" at the moment and model predicted it to be "NOT A STRONG SELL", Now in this case user can loose money because trend may change after some time and stocks price will decrease, User will definitely won't use the model. This is the case of False Negative.

So the best perfomance metric would be F1 score because F1 score is the harmonic mean between precision and recall and it will be high when both precision and recall will be high.
