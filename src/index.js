console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

function loadImages() {
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const imageElement = document.createElement("img");
          imageElement.src = imageUrl;
          document.body.appendChild(imageElement);
        });
      })
      .catch(error => console.log(error));
  }
  
  document.addEventListener("DOMContentLoaded", loadImages);

  const breedUrl = "https://dog.ceo/api/breeds/list/all";

  function loadBreeds() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(response => response.json())
      .then(data => {
        const breedList = document.querySelector("#dog-breeds");
        for (const breed in data.message) {
          const listItem = document.createElement("li");
          listItem.textContent = breed;
          breedList.appendChild(listItem);

          listItem.addEventListener("click", () => {
            listItem.classList.toggle("selected");
          });
        }
      })
      .catch(error => console.log(error));
  }

  function handleBreedFilter() {
    const selectedLetter = this.value;
  
    
    const breedListItems = document.querySelectorAll("#dog-breeds li");
  
    
    breedListItems.forEach(listItem => {
      const breedName = listItem.textContent.toLowerCase(); 
      if (breedName.startsWith(selectedLetter)) {
        listItem.style.display = "list-item"; 
      } else {
        listItem.style.display = "none"; 
      }
    });
  }
  


  
  document.addEventListener("DOMContentLoaded", () => {
    loadImages();
    loadBreeds();
  

  const breedDropdown = document.querySelector("#breed-dropdown");
  breedDropdown.addEventListener("change", handleBreedFilter);
});



