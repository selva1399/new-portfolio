import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="work image" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__button-group">
        <div className="work__button">
          <a
            href="https://github.com/selva1399/to-do-app"
            className="work__button work__button-git"
            target="_blank"
          >
            Git
          </a>
        </div>
        <div className="work__button">
          <a
            href="https://your-app-todo.netlify.app/"
            className="work__button work__button-live"
            target="_blank"
          >
            Live
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkItems;
