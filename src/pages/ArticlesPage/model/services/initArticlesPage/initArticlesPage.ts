import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from 'app/providers/StoreProvider'
import { getArticlesPageInitiated } from '../../selectors/articlesPageSelectors'
import { articlesPageActions } from '../../slices/articlesPageSlice'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (_, thunkApi) => {
    const {
      getState,
      dispatch,
    } = thunkApi
    const _initiated = getArticlesPageInitiated(getState())

    if (!_initiated) {
      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({
        page: 1,
      }))
    }
  },
)
