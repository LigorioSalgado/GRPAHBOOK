import authorMutation from './authors';
import bookMutation from './books';


export default {
   ...authorMutation,
   ...bookMutation
}