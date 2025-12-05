/* =======================
   API ROUTES
   ======================= */
export const API_STUDENT_DETAIL = (id: number) => `/api/student/${id}/get`;
export const API_STUDENT_EDIT = (id: number) => `/api/student/${id}/edit`;

/* =======================
   COMMON ROUTES
   ======================= */
export const ADMIN = "/admin";
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

export const ADMIN_STUDENT = "/admin/mahasiswa";
export const ADMIN_STUDENT_CREATE = "/admin/mahasiswa/tambah";
export const ADMIN_STUDENT_DETAIL = (id: number) => `/admin/mahasiswa/${id}/detail`;
export const ADMIN_STUDENT_EDIT = (id: number) => `/admin/mahasiswa/${id}/edit`;
export const ADMIN_STUDENT_DELETE = (id: number) => `/admin/mahasiswa/${id}/hapus`;

export const ADMIN_LECTURERS = "/admin/dosen";
export const ADMIN_LECTURERS_CREATE = "/admin/dosen/tambah";
export const ADMIN_LECTURERS_DETAIL = (id: number) => `/admin/dosen/${id}/detail`;
export const ADMIN_LECTURERS_EDIT = (id: number) => `/admin/dosen/${id}/edit`;
export const ADMIN_LECTURERS_DELETE = (id: number) => `/admin/dosen/${id}/hapus`;

export const ADMIN_CATEGORIES = "/admin/kategori";

export const ADMIN_CREATIONS = "/admin/karya";
export const ADMIN_CREATIONS_CREATE = "/admin/karya/tambah";
export const ADMIN_CREATIONS_DETAIL = (id: number) => `/admin/karya/${id}/detail`;
export const ADMIN_CREATIONS_EDIT = (id: number) => `/admin/karya/${id}/edit`;
export const ADMIN_CREATIONS_DELETE = (id: number) => `/admin/karya/${id}/hapus`;

export const ADMIN_COURSES = "/admin/pelatihan";
export const ADMIN_COURSES_CREATE = "/admin/pelatihan/tambah";
export const ADMIN_COURSES_DETAIL = (id: number) => `/admin/pelatihan/${id}/detail`;
export const ADMIN_COURSES_EDIT = (id: number) => `/admin/pelatihan/${id}/edit`;
export const ADMIN_COURSES_DELETE = (id: number) => `/admin/pelatihan/${id}/hapus`;