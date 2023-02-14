import { Fragment, useEffect, useState } from "react";
import React from "react";

interface FieldInterface {
  field: {
    placeholder?: string;
    source?: {
      model?: string;
      method?: string;
      only?: string[];
      except?: string[];
    };
  };
}

function SelectSource({ field }: FieldInterface) {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      fetch("http://localhost:8000/model-data", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          method: "get",
          model: field.source?.model,
          only: field.source?.only,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [field.source?.model, field.source?.only]);

  return <div>SelectSource</div>;
}

export default SelectSource;
