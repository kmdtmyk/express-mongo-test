import React from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './components/NavigationBar';
import Hello from './Hello';
import Table from './Table/Table';


ReactDOM.render(
  <div>
      <NavigationBar />
      <Hello />
      <Table>
          <thead>
              <tr>
                  <th>name</th>
                  <th>furigana</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>user1</td>
                  <td>ユーザ1</td>
              </tr>
          </tbody>
      </Table>
  </div>,
  document.getElementById('example')
);
