let visualData = [
      {
        "title": "Draft1",
        "cover": "data/visual/gd/Draft1.png",
      },
      {
        "title": "Draft2",
        "cover": "data/visual/gd/Draft2.png",
      },
      {
        "title": "Draft3",
        "cover": "data/visual/gd/Draft3.png",
      }

  ]

function displayVisualGallery() {
  visualGallery = document.getElementById('visualGallery');

  for (const visualProject of visualData) {

    const visualContainer = document.createElement('div');
    visualContainer.className = 'logocontainer';

    // const visualTitle = document.createElement('div');
    // visualTitle.textContent = visualProject.title;
    // visualTitle.className = 'logo-text';

    // visualContainer.appendChild(visualTitle);

    const visualThumbnail = document.createElement('img');
    visualThumbnail.src = visualProject.cover;
    visualThumbnail.className = 'logo-thumbnail';
    visualContainer.appendChild(visualThumbnail);


    visualGallery.appendChild(visualContainer);
  }
}

displayVisualGallery();