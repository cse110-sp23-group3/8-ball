# 8-ball

## Website Info

- Website Link: https://cse110-sp23-group3.github.io/8-ball/
- Project slides: https://docs.google.com/presentation/d/1d1kxv6KMosrcdN_mtuxBd-KzHd8hcqui-LANHAJvJoE/edit?usp=sharing 

## Project Description

- In this project, we designed a "Magic 8-ball" application with AI tools
- Magic 8 ball gives an answer to an arbitrary question
- The answers are some form of Yes/No/Maybe
- Show one of limit amount of possible answers
- Has an aesthetic value associated with it

## Usage Instructions

- Enter a valid question ending with a question mark in the text box
- Click the "Ask" button
- Wait for seconds, the magic 8 ball will give you answer below
- If you enter a question which has been answered, you will be asked to ask a diffrent one

## Problem Statement

- Problem: Handle repeat question
  - Solution: Detect repeat asked question and ask user to enter a different one
- Problem: Design enhancement
  - Solution: Add 8-ball image with our team logo; Add animation to the image and audio to the animation
- Problem: Duplicate in answerlist 
  - Solution: Add more possible answr to the list and remove the duplicate answer

## Unit Test

- Shows as `Node.js CI - Autorun Unit Test / test (push)` on Run node `test.js` section
- For example:
```bash
PASS: isValidQuestion
PASS: getRandomAnswer
```
