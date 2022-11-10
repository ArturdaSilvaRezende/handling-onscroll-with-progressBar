import { useState, useEffect } from "react";
import { getPosts } from "../../services";
import "./style.css";

type Props = {
  setProgress: React.Dispatch<React.SetStateAction<number>>;
};

export const HandlingOnScroll = (props: Props) => {
  const [post, setPosts] = useState<any>([]);

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const containerHeight = event.currentTarget.clientHeight;
    const scrollHeight = event.currentTarget.scrollHeight;

    const scrollTop = event.currentTarget.scrollTop;
    props.setProgress(((scrollTop + containerHeight) / scrollHeight) * 100);
  };

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  return (
    <div className="post" onScroll={scrollHandler}>
      {post.map((item: any) => (
        <div key={item.id} className="post__item">
          <h1>{item.title}</h1>
        </div>
      ))}
    </div>
  );
};
