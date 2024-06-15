'use strict';
(function() {
  const ayushi = {
    "Childhood": [
      {
        "question": "What city was she born in?",
        "answer": "Mountain View, CA"
      },
      {
        "question": "What was her favorite cartoon character as a child?",
        "answer": "Oswald the octopus"
      },
      {
        "question": "Which sport did she participate in childhood?",
        "answer": "Swimming"
      },
      {
        "question": "What book did she enjoy most as a child?",
        "answer": "All Sidney Sheldon Books"
      },
      {
        "question": "What was her favorite TV show as a kid?",
        "answer": "Spongebob"
      }
    ],
    "College": [
      {
        "question": "What was her major in college?",
        "answer": "Public health"
      },
      {
        "question": "What dorm did she live in?",
        "answer": "Maple Hall"
      },
      {
        "question": "Where did she work in college?",
        "answer": "Fred Hutch Cancer Research Center"
      },
      {
        "question": "What was her favorite study spot on campus?",
        "answer": "Population Health"
      },
      {
        "question": "What clubs did she participate in during college (2)?",
        "answer": "SASA, Project Sunshine"
      }
    ],
    "Favorites": [
      {
        "question": "What is her favorite app on her phone?",
        "answer": "Camera"
      },
      {
        "question": "What is her favorite cuisine?",
        "answer": "Thai"
      },
      {
        "question": "What is her favorite ice cream flavor?",
        "answer": "Cookie Dough"
      },
      {
        "question": "What is her favorite way to relax?",
        "answer": "Couch rot"
      },
      {
        "question": "What is her favorite car (or a car she would want to own)?",
        "answer": "Mercedes Maybach"
      }
    ],
    "Miscellaneous": [
      {
        "question": "What is her go-to drink order?",
        "answer": "Iced latte"
      },
      {
        "question": "What is her dream city to live in?",
        "answer": "San Diego, CA"
      },
      {
        "question": "What is her zodiac sign?",
        "answer": "Gemini"
      },
      {
        "question": "Is she a morning person or night owl?",
        "answer": "Night owl"
      },
      {
        "question": "What is a movie that she could watch at any time?",
        "answer": "Harry Potter"
      }
    ]
  };
  const sanjana = {
    "Childhood": [
      {
        "question": "What city was she born in?",
        "answer": "Mountain View, CA"
      },
      {
        "question": "What was her favorite cartoon character as a child?",
        "answer": "Spongebob"
      },
      {
        "question": "Which sport did she participate in childhood?",
        "answer": "Swimming"
      },
      {
        "question": "What book did she enjoy most as a child?",
        "answer": "Warriors series"
      },
      {
        "question": "What was her favorite TV show as a kid?",
        "answer": "Horseland"
      }
    ],
    "High School": [
      {
        "question": "What major is she planning to pursue?",
        "answer": "Public health"
      },
      {
        "question": "What dorm would she like to live in at UW?",
        "answer": "North Campus (Oak)"
      },
      {
        "question": "Where did she work in high school (3)?",
        "answer": "Kumon, Garlic crush, Redmond Eye Clinic"
      },
      {
        "question": "What was her favorite hangout spot during high school?",
        "answer": "RTC/BJs"
      },
      {
        "question": "What clubs did she participate in during high school (4)?",
        "answer": "HOSA, Equity, TSA, NHS"
      }
    ],
    "Favorites": [
      {
        "question": "What is her favorite app on her phone?",
        "answer": "Snapchat"
      },
      {
        "question": "What is her favorite cuisine?",
        "answer": "Thai"
      },
      {
        "question": "What is her favorite ice cream flavor?",
        "answer": "Chocolate devotion"
      },
      {
        "question": "What is her favorite way to relax?",
        "answer": "Watch TV (especially Gilmore Girls)"
      },
      {
        "question": "What is her favorite car (or a car she would want to own)?",
        "answer": "Mercedes Benz"
      }
    ],
    "Miscellaneous": [
      {
        "question": "What is her go-to drink order?",
        "answer": "Boba Taro Milk Tea"
      },
      {
        "question": "What is her dream city to live in?",
        "answer": "Seattle, WA"
      },
      {
        "question": "What is her zodiac sign?",
        "answer": "Sagittarius"
      },
      {
        "question": "Is she a morning person or night owl?",
        "answer": "Night owl"
      },
      {
        "question": "What is a movie that she could watch at any time?",
        "answer": "Jab We Met"
      }
    ]
  };
  let currGradJson = ayushi;
  window.addEventListener('load', init);

  /**
   * Executed when a window loads
   */
  function init() {
    let btns = qsa('.grad-btn');
    btns[0].addEventListener('click', chooseGrad);
    btns[1].addEventListener('click', chooseGrad);
    qs('.button-6').addEventListener('click', () => {
      id('game-board').classList.remove('hidden');
      id('game-board').classList.add('game-board-format');
      id('question-answer').classList.add('hidden');
      qs('.answer').classList.add('hidden');
      setBoardState();
    })
  }

  function chooseGrad() {
    qs('header').classList.add('hidden');
    qs('.choose-grad').classList.add('hidden');
    id('game-board').classList.remove('hidden');
    id('game-board').classList.add('game-board-format');
    if (this.textContent === "Sanjana") {
      currGradJson = sanjana;
    }
    for (const category in currGradJson) {
      for (let i = 0; i < currGradJson[category].length; i++) {
        currGradJson[category][i]['complete'] = false;
      }
      let div = gen('div');
      div.classList.add('category-col');
      let p = gen('p');
      p.textContent = category;
      div.appendChild(p);
      for (let i = 1; i <= 5; i++) {
        let button = gen('button');
        button.textContent = '$' + (i * 100);
        button.id = category + ":" + i;
        button.classList.add('game-board-cell');
        button.addEventListener('click', displayQuestion);
        div.appendChild(button);
      }
      id('game-board').appendChild(div);
    }
    console.log(currGradJson);
  }

  function setBoardState() {
    for (const category in currGradJson) {
      for (let i = 0; i < currGradJson[category].length; i++) {
        if (currGradJson[category][i]['complete']) {
          id (category + ":" + (i + 1)).textContent = "";
          id (category + ":" + (i + 1)).disabled = true;
        }
      }
    }
  }

  function displayQuestion() {
    let cell = this.id.split(':');
    let question = currGradJson[cell[0]][parseInt(cell[1]) - 1]["question"];
    let answer = currGradJson[cell[0]][parseInt(cell[1]) - 1]["answer"];
    id('game-board').classList.remove('game-board-format');
    id('game-board').classList.add('hidden');
    id('question-answer').classList.remove('hidden');
    qs('.question').textContent = question;
    qs('.answer').textContent = answer;
    // event = keyup or keydown
    document.addEventListener('keyup', event => {
      if (event.code === 'Space') {
        qs('.answer').classList.remove('hidden');
      }
      currGradJson[cell[0]][parseInt(cell[1]) - 1]["complete"] = true;
    })
  }

  /**
   * Generates a new DOM object of the given HTML tag and returns it.
   * @param {string} tag - HTML tag
   * @returns {object} - DOM object generated.
   */
  function gen(tag) {
    return document.createElement(tag);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID.
   * @returns {object} - DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns first element matching selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} - DOM object associated selector.
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(selector) {
    return document.querySelectorAll(selector);
  }
})();