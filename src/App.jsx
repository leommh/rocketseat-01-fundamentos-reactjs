import { Post } from './Post';
import { Header } from './components/Header';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Diego Fernandes" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, odit in! Qui, earum obcaecati assumenda pariatur magnam unde perspiciatis modi laboriosam consequuntur numquam recusandae provident, id rerum ea ratione! Dolores?" 
      />

      <Post 
        author="Des" 
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo, odit in! Qui, earum obcaecati assumenda pariatur magnam unde perspiciatis modi laboriosam consequuntur numquam recusandae provident, id rerum ea ratione! Dolores?" 
      />
    </div>
  )
}