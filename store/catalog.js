import {BASE_URL, TOKEN } from "../static/constants/constants";
import { topAlbumMock, teasersMock, listOfSeriesesMock } from "../static/constants/mockedApi";

export const state = () => ({
  topAlbum: null,
  teasers: null,
  listOfSerieses: [],
})

export const mutations = {
  setTopAlbum(state, topAlbum) {
    state.topAlbum = topAlbum;
  },
  setTeasers(state, teasers) {
    state.teasers = teasers;
  },
  setListOfSerieses(state, serieses) {
    state.listOfSerieses.push(serieses);
  },
}

export const actions = {
  async request({ state }, url) {
    this.$axios.setToken(TOKEN, 'Bearer');
    try {
      const data = await this.$axios.$get(`${BASE_URL}${url}`);

      return data;
    } catch (err) {
      console.error(err)
    }
  },
  async initPage({ dispatch }) {
    await dispatch('getTopAlbum');
    await dispatch('getTeasers');
    await dispatch('getListOfSerieses');
  },
  async getTopAlbum({ commit, dispatch }) {
    const topAlbum = await dispatch('request', '/api/catalog/new/bd');

    commit('setTopAlbum', topAlbum);
  },
  async getTeasers({ commit, dispatch }) {
    const teasers = await dispatch('request', '/api/catalog/marketing/bd');

    commit('setTeasers', teasers);
  },
  async getListOfSerieses({ commit, dispatch }) {
    for(let i = 0; i < 20; i++) {
      const series  = await dispatch('request', '/api/catalog/next/bd/' + i);
      if(series !== undefined) {

        commit('setListOfSerieses', serieses);
      } else {
        console.log('undefined value, empty answer')

        return;
      }
    }

  },
}

export const getters = {
  structuredPageData: state => {
    const topAlbum = state.topAlbum || topAlbumMock;
    const listOfSerieses = state.listOfSerieses.length ? state.listOfSerieses : listOfSeriesesMock;
    const teasers = state.teasers || teasersMock;

    const newSerieses = listOfSerieses.filter(item => item.type === 'new');
    const topSerieses = listOfSerieses.filter(item => item.type === 'top');
    const goodDealsSerieses = listOfSerieses.filter(item => item.type === 'goodDeals');
    const genreSerieses = listOfSerieses.filter(item => item.type === 'genre');

    function getSeriesBlockTitle(series) {

      return series
        ? `${series[0].current}-${series[0].type}-${series[0].id}-${series[0].slug} ${series[0].series?.length}`
        : '';
    }

    return [
      {
        list: topAlbum.topAlbum.album,
        component: 'TopAlbum',
        blockTitle: topAlbum.topAlbum.name,
      },
      {
        list: newSerieses[0]?.series,
        component: 'SeriesesList',
        blockTitle: getSeriesBlockTitle(newSerieses),
      },
      {
        list: teasers.list.slice(0, 2),
        component: 'TeasersList',
        blockTitle: '',
      },
      {
        list: topSerieses[0]?.series,
        component: 'SeriesesList',
        blockTitle: getSeriesBlockTitle(topSerieses),
      },
      {
        list: teasers.list.slice(2, 3),
        component: 'TeasersList',
        blockTitle: '',
      },
      {
        list: goodDealsSerieses[0]?.series,
        component: 'SeriesesList',
        blockTitle: getSeriesBlockTitle(goodDealsSerieses),
      },
      {
        list: genreSerieses[0]?.series,
        component: 'SeriesesList',
        blockTitle: getSeriesBlockTitle(genreSerieses),
      },
    ]
  },
}
