export interface IEpisody {
  id:     string
  name:   string
}

export interface IImage {
  medium:   string
  original: string
}

export interface ITvShow {
  id:           string|undefined
  title:        string
  description:  string
  coverImg:     IImage
  episodes:    Array<IEpisody>
}

export interface ITvShowEpisody {
  id:           string|undefined
  title:        string
  summary:      string
  coverImg:     IImage
}

export interface IAppState {
  tvShow:         ITvShow,
  tvShowEpisody:  ITvShowEpisody
}

const initialState:IAppState = {
  tvShow: {
    id:           undefined,
    title:        '',
    description:  '',
    coverImg:     {
      medium:       '',
      original:     ''
    },
    episodes:    []
  },
  tvShowEpisody: {
    id:           undefined,
    title:        '',
    summary:      '',
    coverImg:     {
      medium:       '',
      original:     ''
    }
  }
};

export default initialState;