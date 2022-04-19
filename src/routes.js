import RecentHistory from "./view/Qltl/RecentHistory";
import Trash from "./view/Qltl/Trash";
import Home from "./view/Qltl/Home";
import DetailFolder from './view/Qltl/DetailFolder';
import DetailFile from './view/Qltl/DetailFile';
import MyDoc from './view/Qltl/MyDoc';
import Shared from './view/Qltl/MyFileShared';
import UploadFile from './view/Qltl/UploadFile/uploadFile.js';
import DocFavorite from './view/Qltl/DocFavorite';

const routes = [
  {
    path: "",
    name: "Quản lý tài liệu",
    component: Home,
    exact: true
  },
  {
    path: "/recent-history",
    name: "Tài liệu gần đây",
    component: RecentHistory,
    exact: true
  },
  {
    path: "/trash",
    name: "Thùng rác",
    component: Trash,
    exact: true
  },
  {
    path: "/:id/tai-lieu-:slug",
    name: "Chi tiết thư mục",
    component: DetailFolder,
    exact: true
  },
  {
    path: "/:id/xem-tai-lieu-:slug",
    name: "Chi tiết tệp",
    component: DetailFile,
    exact: true
  },
  {
    path: "/cua-toi",
    name: "Tài liệu của tôi",
    component: MyDoc,
    exact: true
  },
  {
    path: "/chia-se",
    name: "Tài liệu được chia sẻ",
    component: Shared,
    exact: true
  },
  {
    path: "/upload-file",
    name: "Tải tệp",
    component: UploadFile,
    exact: true
  },
  {
    path: "/yeu-thich",
    name: "Tài liệu yêu thích",
    component: DocFavorite,
    exact: true
  }
]

export default routes;