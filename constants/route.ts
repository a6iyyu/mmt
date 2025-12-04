/* =======================
   COMMON ROUTES
   ======================= */
export const LOGIN = "/masuk";
export const API_AUTH_LOGIN = "/api/auth/login";
export const API_AUTH_LOGOUT = "/api/auth/logout";

/* =======================
   COMMON ROUTES
   ======================= */
export const HOME = "/";
export const CATEGORY = "/kategori";
export const CREATIONS = "/karya";
export const COURSES = "/pelatihan";
export const MEMBER = "/anggota";
export const LECTURER = "/dosen";

/* =======================
   CMS (ADMIN) ROUTES
   ======================= */
export const ADMIN_DASHBOARD = "/admin/dasbor";

export const ADMIN_MEMBERS = "/admin/anggota";
export const ADMIN_MEMBERS_CREATE = "/admin/anggota/tambah";
export const ADMIN_MEMBERS_DETAIL = (id: number) => `/admin/anggota/detail/${id}`;
export const ADMIN_MEMBERS_EDIT = (id: number) => `/admin/anggota/edit/${id}`;
export const ADMIN_MEMBERS_DELETE = (id: number) => `/admin/anggota/hapus/${id}`;

export const ADMIN_LECTURERS = "/admin/dosen";
export const ADMIN_LECTURERS_CREATE = "/admin/dosen/tambah";
export const ADMIN_LECTURERS_DETAIL = (id: number) => `/admin/dosen/detail/${id}`;
export const ADMIN_LECTURERS_EDIT = (id: number) => `/admin/dosen/edit/${id}`;
export const ADMIN_LECTURERS_DELETE = (id: number) => `/admin/dosen/hapus/${id}`;

export const ADMIN_CATEGORIES = "/admin/kategori";

export const ADMIN_CREATIONS = "/admin/karya";
export const ADMIN_CREATIONS_CREATE = "/admin/karya/tambah";
export const ADMIN_CREATIONS_DETAIL = (id: number) => `/admin/karya/detail/${id}`;
export const ADMIN_CREATIONS_EDIT = (id: number) => `/admin/karya/edit/${id}`;
export const ADMIN_CREATIONS_DELETE = (id: number) => `/admin/karya/hapus/${id}`;

export const ADMIN_COURSES = "/admin/pelatihan";
export const ADMIN_COURSES_CREATE = "/admin/pelatihan/tambah";
export const ADMIN_COURSES_DETAIL = (id: number) => `/admin/pelatihan/detail/${id}`;
export const ADMIN_COURSES_EDIT = (id: number) => `/admin/pelatihan/edit/${id}`;
export const ADMIN_COURSES_DELETE = (id: number) => `/admin/pelatihan/hapus/${id}`;