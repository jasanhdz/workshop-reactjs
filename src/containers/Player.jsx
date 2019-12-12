import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getVideosSource } from '../actions';
import { Redirect } from 'react-router-dom';
import '../assets/styles/components/Player.scss';

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;

  useEffect(() => {
    props.getVideosSource(id);
  }, []);

  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.source} type="video/mp4" />
      </video>
      <div className="Player-back">
        <button
          type="button"
          onClick={() => props.history.goBack()}
        >Regresar</button>
      </div>
    </div>
  ) : (
      setTimeout(<Redirect to="/404/" />, 1000)
    );
}

const mapStateToProps = (state, props) => {
  return {
    playing: state.playing,
  }
}

const mapDispatchToProps = {
  getVideosSource,
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);