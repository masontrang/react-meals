import Component from '../components/Component';
import Details from '../components/Details';
import FourButtons from '../components/FourButtons';
import CardGrid from '../components/CardGrid';
import './Home.css';
import { useState, useEffect } from 'react';

function Home() {
  // const [selected, setSelected] = useState(false);
  const [meals, setMeals] = useState();

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())

      .then((data) => setMeals(data));
  }, []);

  console.log('meals', meals);
  const data = [
    {
      title: 'Mapo Tofu',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'chinese ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Moms Spaghetti',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'italian ',
      description:
        'Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti ',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Burger',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'American ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Lomo Saltado',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'Puruvian ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Mapo Tofu',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'chinese ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Moms Spaghetti',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'italian ',
      description:
        'Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti ',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Burger',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'American ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Lomo Saltado',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'Puruvian ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Mapo Tofu',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'chinese ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Moms Spaghetti',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'italian ',
      description:
        'Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti ',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Burger',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'American ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Lomo Saltado',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'Puruvian ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Mapo Tofu',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'chinese ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Moms Spaghetti',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'italian ',
      description:
        'Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti ',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Burger',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'American ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Lomo Saltado',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'Puruvian ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Mapo Tofu',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'chinese ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Moms Spaghetti',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'italian ',
      description:
        'Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti Spaghetti ',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Burger',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'American ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
    {
      title: 'Lomo Saltado2',
      difficulty: 5,
      category: 'dinner',
      cuisine: 'Puruvian ',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis leo vitae lorem sagittis sollicitudin. Quisque euismod, nisl id tincidunt aliquet, lacus augue luctus nisi, quis ultrices magna eros quis erat. Morbi auctor, lorem quis consequat varius, massa quam consequat leo, at aliquam nisi sapien ut nisl. Fusce id nunc sit amet lacus fringilla tincidunt. Mauris vitae neque in justo sagittis malesuada. In hac habitasse platea dictumst. Nunc quis dolor sed arcu lacinia vehicula. Donec quis felis ut lorem blandit faucibus.',
      steps: 'steps',
      ingredients: 'ingredients',
      notes: 'notes',
      url: 'recipeUrl',
      image: 'url',
    },
  ];

  // function clickHandler(value) {
  //   // setSelected(data.filter((item) => item.title === value));
  //   const set = data.filter((item) => item.title === value);
  //   // console.log('selected', set);
  //   setSelected(set[0]);
  //   console.log('selected', selected);
  // }
  return (
    <div className="Home">
      <CardGrid data={data}></CardGrid>
    </div>
  );
}

export default Home;
