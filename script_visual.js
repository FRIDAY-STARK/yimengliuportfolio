let visualData = [
      {
        "title": "As A Monster",
        "link": "kinetictext.html",
        "cover": "data/monster.png",
      },
      {
        "title": "MORPHO",
        "link": "morpho.html",
        "cover": "data/visual/gd/morpho.png",
      },
      {
        "title": "The Lost Cape",
        "link": "TheLostCape.html",
        "cover": "data/visual/print.png",
      },
      // {
      //   "title":"Merch & Banner Design",
      //   "link": "merchnbanner.html",
      //   "cover": "data/merch.jpg",
      // }

  ]

function displayVisualGallery() {
  visualGallery = document.getElementById('visualGallery');

  for (const visualProject of visualData) {

    const visualLink = document.createElement('a');
    visualLink.href = visualProject.link;

    const visualContainer = document.createElement('div');
    visualContainer.className = 'photo-container';
    visualLink.appendChild(visualContainer);

    const visualThumbnail = document.createElement('img');
    visualThumbnail.src = visualProject.cover;
    visualThumbnail.className = 'photo-thumbnail';
    visualLink.appendChild(visualThumbnail);

    const visualTitle = document.createElement('div');
    visualTitle.textContent = visualProject.title;
    visualTitle.className = 'photo-overlay'; //overlay title
    visualLink.appendChild(visualTitle);


    visualGallery.appendChild(visualLink);
  }
}

displayVisualGallery();