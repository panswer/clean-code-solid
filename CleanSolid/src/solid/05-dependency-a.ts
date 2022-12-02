import { PostService } from "./05-dependency-b";
import {
  JsonDatabaseService,
  LocalDataBaseService,
  WebApiPostService,
} from "./05-dependency-c";
import { HttpClient } from "./02-open-close-c";

// Main
(async () => {
  const httpClient = new HttpClient();
  const provider = new WebApiPostService(httpClient);
  const postService = new PostService(provider);

  const posts = await postService.getPosts();

  console.log({ posts });
})();
