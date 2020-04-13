# Project Overview

## Project Name

POE

## Project Description


POE connects you to hundreds of poems from authors like Edgar Allan Poe, Emily Dickinson, and Robert Frost. Divulge in the depths of thought and literature.

## API and Data Sample
PoetryDB (https://github.com/thundercomb/poetrydb/blob/master/README.md)

'http://poetrydb.org/title/a dream within a dream'

```JSON
[
  {
    "title": "A Dream Within A Dream",
    "author": "Edgar Allan Poe",
    "lines": [
      "Take this kiss upon the brow!",
      "And, in parting from you now,",
      "Thus much let me avow--",
      "You are not wrong, who deem",
      "That my days have been a dream;",
      "Yet if hope has flown away",
      "In a night, or in a day,",
      "In a vision, or in none,",
      "Is it therefore the less gone?",
      "All that we see or seem",
      "Is but a dream within a dream.",
      "",
      "I stand amid the roar",
      "Of a surf-tormented shore,",
      "And I hold within my hand",
      "Grains of the golden sand--",
      "How few! yet how they creep",
      "Through my fingers to the deep,",
      "While I weep--while I weep!",
      "O God! can I not grasp",
      "Them with a tighter clasp?",
      "O God! can I not save",
      "One from the pitiless wave?",
      "Is all that we see or seem",
      "But a dream within a dream?"
    ],
    "linecount": "24"
  }
]
 ```


## Wireframes
https://wireframe.cc/A8fV28


![Wireframe](https://github.com/ashmadera2020/POE/blob/master/Homepage.png)


### MVP/PostMVP - 5min

#### MVP 

- Get data from API successfully
- Functional user input and search response 
- Basic CSS layout to match wireframe
- Create a search result list to push data search reponse to

#### PostMVP 

- Create a favorite list function for easy reference
- Share Button
- Image slide show above search bar
- More detailed CSS 
- Add pagination

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|April 6th| Project Proposal/ Approval / Set up app HTML Structure and basic CSS to match Wireframe | complete
|April 7th| Set up JS with functional API and Clickables| complete
|April 8th| Display list response / Additional CSS| complete
|April 9th| MVP done | complete
|April 10th| Present POE | Incomplete

## Priority Matrix

![Matrix](https://github.com/ashmadera2020/POE/blob/master/IMG_74241.jpg)

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML | L | 1.5 hrs| 30mins | 30mins |
| CSS | L | 4.5hrs| 2hrs | 2hrs |
| Buttons | M | 1 hrs| 30mins | 30mins |
| Core J S| H | 6hrs| 4hrs | 4hrs |
| Searchlist | H | 6hrs | 2hrs | 2hrs |
| Working with API | H | 3.5hrs| 1hr | 1hr |
| Debugging | H | 6hrs | 3hr | 3hr |
| Additional CSS| L | 6hrs | 2hrs | 2hrs|
| Total | H | 34.5hrs| 13hrs |15 hrs |

## Code Snippet
```JSON

async function poemSearch() {
    let keyword = input.value;
    console.log(`${DOMAIN}${keyword}`)
    const response = await axios.get(`${DOMAIN}${keyword}`)
    console.log(response)
    printList()
  }

```
## Change Log
 I wanted to change the API to one with more information and poems but I kept getting bug. So the new API is still in post MVP. I also added pagination to my post mvp to add pages to my results
