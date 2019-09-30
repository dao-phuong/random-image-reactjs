const getUrl = (id) => `https://picsum.photos/id/${id}/200/200`;

export const listImg = [

];

function fetchRequest(url) {
  const fetchPromise = fetch(url);

  return function (serilizeResponse) {
    const serilizedResponse =  fetchPromise.then(response => serilizeResponse(response));

    return function (handerResult) {
      serilizedResponse.then(response => handerResult(response));
    }
  }
}

function fetchListImage(number) {
  let count = number;
  let url = '';
  while (count) {
    url = getUrl(count * 10);
    fetchRequest(url)(toBlob)(addImage);
    count--;
  }
}

const logResult = result => console.log(result);

const addImage = image => {
  listImg.push(image);
}

const toBlob = response => response.blob();

const toJson = response => response.json();

function* getImage() {
  let count = listImg.length;

  while (count) {
    yield listImg[count--];
  }
}

export default function* (imageNumber) {
  yield fetchListImage(imageNumber);
  yield getImage();
}