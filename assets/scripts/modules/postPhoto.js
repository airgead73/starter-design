import { openPreview } from './modals';

let currentPhoto;
function Photo($src) {
  this.src = $src,
  this.display = function() {
    openPreview(this.src);
  }
  this.log = function() {
    console.log("photo:", this.src);
  }
}

const previewFile = ($file) => {

  const reader = new FileReader();
  reader.readAsDataURL($file);
  reader.onloadend = () => {
    currentPhoto = new Photo(reader.result);
    currentPhoto.file = $file.name;
    currentPhoto.display();
  }

}

const uploadPhoto = async($form) => {

  try {

    const response = await fetch('/api/photos', {
      method: 'POST',
      body: JSON.stringify(
        { 
          data: currentPhoto.src,
          file: currentPhoto.file 
        }
      ),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    const json = await response.json();

    //const { photo } = json;

    //openPreview(photo.secure_url);

    console.log(json);

  } catch(error) {

    console.error(error);

  }

}

const initPhoto = () => {

  const photoForm = document.getElementById('addPhoto'); 

  if(!photoForm) return;

  const fileInput = photoForm.querySelector('[type="file"]');

  fileInput.addEventListener('change', function(e) {
    previewFile((e.target).files[0]);
  });

  photoForm.addEventListener('submit', function(e) {

    uploadPhoto(e.target);

  });

}

export {
  initPhoto
}