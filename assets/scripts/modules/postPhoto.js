import { openPreview } from './modals';

let currentPhoto;
function Photo($src, $tag) {
  this.src = $src,
  this.tag = $tag,
  this.display = function() {
    openPreview(this.src);
    return;
  }
  this.log = function() {
    console.log("photo:", this.src);
  }
}

const previewFile = ($file) => {

  const selectedPhoto = document.getElementById('selectedPhoto');

  const reader = new FileReader();
  reader.readAsDataURL($file);
  reader.onloadend = () => {
    currentPhoto = new Photo(reader.result, selectedPhoto);
    currentPhoto.display();
    currentPhoto.log();
  }

}

const initPhoto = () => {

  const photoForm = document.getElementById('addPhoto'); 

  if(!photoForm) return;

  const fileInput = photoForm.querySelector('[type="file"]');

  fileInput.addEventListener('change', function(e) {
    previewFile((e.target).files[0]);
  });

}

export {
  initPhoto
}