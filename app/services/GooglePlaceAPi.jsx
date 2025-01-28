const GooglePhotoRef = async (placeName) => {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${placeName}&key=`
  );
  const data = await res.json();
  console.log(data);
  return data;
};
export default GooglePhotoRef;
