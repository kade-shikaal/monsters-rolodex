import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

//props is the parameter we get from the functional compoonent
export const CardList = props => (
  <div className="card-list">
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);
