import { TrelloList } from "./TrelloList";
import { connect } from "react-redux";
import { Component } from "react";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";
import styled from "styled-components";
import { Modal } from "./Modal";
import { createApi } from "unsplash-js";

const ListsContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Title = styled.h1`
  font-family: Arial;
`;

const Button = styled.button`
  border-style: none;
  border-radius: 3px;
  height: 36px;
  width: 150px;
  padding-left: 10;
  background-color: #5aac44;
  color: white;
  cursor: pointer;
  outline: none;
`;

const unsplash = createApi({
  accessKey: "x_3ldezigzJBJ1VSwdJnL1GLJdm93x44xmD4RnyTBGI",
  headers: { "X-Custom-Header": "foo" },
});

class App extends Component {
  state = {
    bg: false,
    currentBg:
      "https://images.unsplash.com/photo-1580763543521-dc54d5be9695?crop=entropy&cs=srgb&fm=jpg&ixid=MnwyMjExMTl8MHwxfHNlYXJjaHw2fHx3YWxsc3xlbnwwfDB8fGdyZWVufDE2MTc3NjYzNDQ&ixlib=rb-1.2.1&q=85",
    photos: unsplash.search.getPhotos({
      query: "walls",
      page: 1,
      perPage: 10,
      color: "green",
      orientation: "landscape",
    }),
  };

  onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  onClose = () => {
    this.setState({ bg: false });
  };

  onSetBg = (val) => {
    this.setState({ currentBg: val });
  };

  render() {
    const { lists } = this.props;
    return (
      <>
        {this.state.bg && (
          <Modal
            photos={this.state.photos}
            onClose={this.onClose}
            onSetBg={this.onSetBg}
          />
        )}
        <DragDropContext onDragEnd={this.onDragEnd}>
          <div
            style={{
              padding: "20px",
              backgroundImage: `url(${this.state.currentBg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "100%",
            }}
          >
            <Header>
              <Title>Trello</Title>
              <Button onClick={() => this.setState({ bg: true })}>
                Set background
              </Button>
            </Header>
            <Droppable
              droppableId="all-lists"
              direction="horizontal"
              type="list"
            >
              {(provided) => (
                <ListsContainer
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {lists.map((list, index) => {
                    return (
                      <TrelloList
                        listID={list.id}
                        key={list.id}
                        title={list.title}
                        cards={list.cards}
                        index={index}
                      />
                    );
                  })}
                  <TrelloActionButton list />
                </ListsContainer>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  lists: state.lists,
});

export default connect(mapStateToProps)(App);
