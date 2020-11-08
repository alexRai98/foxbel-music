import React from 'react';

function SoundDetail({ sound }) {
  return (
    <div>
      <img src={sound.artist.picture_medium} alt="photo_artist" />
      <h3>{sound.album.title} </h3>
      <p>Lo mejor de{sound.artist.name} </p>
      <p>{sound.rank} seguidores </p>
      <img src={sound.album.cover_medium} alt="photo_album" />
    </div>
  );
}

export default SoundDetail;
