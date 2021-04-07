import React from "react";
import { TrelloCard } from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const ListsContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  margin-right: 8px;
`;

export const TrelloList = ({ title, cards, listID, index }) => {
  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <ListsContainer
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={String(listID)} type="card">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h3 style={{ marginBottom: 8 }}>{title}</h3>
                {cards.map((card, index) => {
                  return (
                    <TrelloCard
                      index={index}
                      key={card.id}
                      text={card.text}
                      id={card.id}
                    />
                  );
                })}
                {provided.placeholder}
                <TrelloActionButton listID={listID} />
              </div>
            )}
          </Droppable>
        </ListsContainer>
      )}
    </Draggable>
  );
};
