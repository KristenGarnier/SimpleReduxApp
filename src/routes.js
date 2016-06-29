import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/App.js'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import CoursesPages from './components/course/CoursesPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPages} />
    <Route path="about" component={AboutPage} />
  </Route>
)
