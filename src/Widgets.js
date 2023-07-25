import React from "react";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="widgets">
      <h3>Suggested Pages</h3>
      <iframe
      title="fb-page"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FTheAnimalClub.net&tabs=timeline&width=200&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1197919274177094"
        width="200"
        height="500"
        style={{border:"none", overflow:"hidden"}}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Widgets;
