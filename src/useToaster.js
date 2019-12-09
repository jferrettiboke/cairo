import React, { useReducer } from "react";

import Notification from "./components/Notification";
import Box from "./components/Box";

const toastReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: action.id,
          content: action.content,
          kind: action.kind,
          metadata: action.metadata
        }
      ];
    case "remove":
      return [...state.filter(toast => toast.id !== action.id)];
    default:
      return state;
  }
};

const timers = {};

function startTimer(id, removeToast, delay) {
  if (!timers[id]) {
    timers[id] = setTimeout(() => removeToast(id), delay);
  }
}

function dismiss(id, removeToast) {
  if (timers[id]) {
    clearTimeout(timers[id]);
    delete timers[id];
  }
  removeToast(id);
}

let uid = 0;

export default function useToaster(delay) {
  const [toastList, dispatch] = useReducer(toastReducer, []);

  function removeToast(id) {
    return dispatch({ type: "remove", id });
  }

  function addToast({ content, kind, metadata }) {
    uid += 1;
    startTimer(uid, removeToast, delay || 5000);
    dispatch({
      type: "add",
      id: uid,
      content,
      kind,
      metadata
    });
  }

  function Toaster() {
    return (
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "1/3",
          mr: "5"
        }}
      >
        {toastList.map(({ id, content, kind, metadata }) => {
          const remove = () => dismiss(id, removeToast);
          return (
            <Notification
              key={id}
              kind={kind}
              onClick={remove}
              sx={{ my: "5" }}
            >
              {content}
            </Notification>
          );
        })}
      </Box>
    );
  }

  return {
    Toaster,
    add: addToast,
    list: toastList
  };
}
