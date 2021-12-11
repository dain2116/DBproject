const value = "search keyword";
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].snippet.title.indexOf(value) > -1) {
      console.log(videos[i].snippet.title);
    } else {
    }
}