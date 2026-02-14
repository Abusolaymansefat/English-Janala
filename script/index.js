const loadLessons = () => {
          fetch("https://openapi.programming-hero.com/api/levels/all")
                    .then(res => res.json())
                    .then(data => displayLessons(data.data))
}

const loadLevelWord = (id) => {

          const url = `https://openapi.programming-hero.com/api/level/${id}`
          fetch(url)
                    .then(res => res.json())
                    .then(data => displayLevelWords(data.data))
}

const displayLevelWords = (words) => {
          const wordContainer = document.getElementById("word-container");
          wordContainer.innerHTML = "";

// {
//     "id": 3,
//     "level": 2,
//     "word": "Cautious",
//     "meaning": "সতর্ক",
//     "pronunciation": "কশাস"
// }

          words.forEach(word => {
                    console.log(word);
                    const cord = document.createElement("div")
                    cord.innerHTML = `
                    <div class="bg-slate-50 rounded-xl shadow-sm text-center px-8 py-5">
                              <h2 class="font-bold text-2xl">${word.word}</h2>
                              <p class="font-semibold">Meaning / Pronunciation</p>
                              <div class="font-bangla text-2xl font-medium">${word.meaning} / ${word.pronunciation}</div>
                              <div class=" flex justify-between items-center">
                                        <button class="btn bg-[#d1d7db] hover:bg-[#507694]"><i class="fa-solid fa-circle-info"></i></button>
                                        <button class="btn bg-[#d1d7db] hover:bg-[#507694]"><i class="fa-solid fa-volume-high"></i></button>
                              </div>
                    </div>
                    `;
                    wordContainer.appendChild(cord);
          })

};


const displayLessons = (Lessons) => {
          //   console.log(Lessons);
          const levelContainer = document.getElementById("level-container");
          levelContainer.innerHTML = "";

          for (let lesson of Lessons) {
                    console.log(lesson)

                    const btnDiv = document.createElement("div")
                    btnDiv.innerHTML = `
          <button onclick= "loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"> <i class="fa-solid fa-book"></i>Lesson- ${lesson.level_no}</button>
          `
                    levelContainer.appendChild(btnDiv)
          }
}

loadLessons()