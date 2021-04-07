import React, { useEffect, useState } from "react";

export const Modal = ({ onClose, photos, onSetBg }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    photos.then((res) => {
      setData(res.response.results);
    });
  }, []);

  return (
    <div onClick={onClose} style={styles.modal}>
      <div style={styles.container}>
        <h1 style={{ marginTop: 10 }}>Choose background</h1>
        <div style={styles.container}>
          {data &&
            data.map((el, id) => {
              return (
                <div
                  onClick={() => onSetBg(el.urls.full)}
                  style={{
                    backgroundImage: `url(${el.urls.thumb})`,
                    ...styles.image,
                  }}
                  key={id}
                ></div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

const styles = {
  modal: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(20, 22, 24, 0.2)",
    zIndex: "10",
  },
  container: {
    width: "500px",
    margin: "50px auto",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    justifyContent: "center",
    zIndex: "15",
    borderRadius: 5,
  },
  image: {
    width: "100px",
    height: "100px",
    margin: 10,
    cursor: "pointer",
  },
};
