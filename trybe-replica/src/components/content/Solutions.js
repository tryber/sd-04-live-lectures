import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Solutions.css'


class Solutions extends Component {
  render() {
    const { diasGabaritos } = this.props;

    const SolutionID = this.props.match.params.solutionID;

    if (SolutionID) return <div>Toma ao vivasso {SolutionID}</div>

    return (
      <div>
        <h1>Gabaritos</h1>
        {diasGabaritos.map((gabarito) => (
          <div key={gabarito}>
            <span>
              <Link className="solution-link" to={`/solutions/${gabarito}`}>
                {gabarito}
              </Link>
            </span>
          </div>
        ))}
      </div>
    )
  }
}

export default Solutions;