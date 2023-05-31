// Layout Wrapper Component
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const mainContent = document.querySelector("#main-content");
const layoutNominal = document.querySelector("#layout-nominal");
const layoutPromo = document.querySelector("#layout-promo");
const layoutIcon = document.querySelector("#layout-icon");
const layoutBottom = document.querySelector("#layout-bottom");
const layoutNavigation = document.querySelector("#layout-navigation");
const element_kontak = document.getElementsByClassName("nomor");
const outter_buy = document.getElementById("outter-buy");
const total_bayar = document.getElementById("total_bayar");
const outter_check_out = document.getElementById("outter-check-out");
// Component
const labelPin = document.querySelector("#label-pin");
const labelTotal = document.querySelector("#total-bottom");
const totalPembelian = document.querySelector("#total-pembelian");
const totalBayar = document.querySelector("#total-bayar");
const title_total = document.getElementById("title-total");

// Input Component
const mainInput = document.querySelector("#main-input");
const inputPin = document.querySelector("#input-pin");
const checkbox_pin = document.getElementById("switchMaterial");
const form_pin = document.getElementById("pin");

// Button Component
const btnCheckout = document.querySelector("#btn-checkout");

// Offcanvas Component
const detail = document.querySelector("#offcanvas-detail");
const contentOffcanvasDetail = document.querySelector("#content-offcanvas-detail");
const offcanvasDetail = new bootstrap.Offcanvas(detail);

const filterComponent = document.querySelector("#offcanvas-filter");
const contentOffcanvasFilter = document.querySelector("#content-offcanvas-filter");
const offcanvasFilter = new bootstrap.Offcanvas(filterComponent);

const rincianComponent = document.querySelector("#offcanvasRincianPembelian");
const contentOffcanvasRincian = document.querySelector("#content-offcanvas-rincian");


let config = [];

let rawData = []; // Data from API
let selectedData = []; // Selected Data Per Operator (ex: XL, Indosat, etc)

let filteredData = []; // From Selected Data, filtered by kategori
let filteredDataByTag = [];
let filteredDataAll = [];

let pembelian = "";
let height_screen = "";
let show_bottom_nav = false;

let isFilterChange = false;
let isProdukSelected = false;

let panchi = "";
let pin = ""
let filterCategory = {
  operator: null,
  masaAktif: null,
  rangeHarga: null,
  rangeKuota: null,
  sort: null,
  sortAlphabet: null,
};

let tempInputRange = {
  minHarga: null,
  maxHarga: null,
  minKuota: null,
  maxKuota: null,
};

// Global Variables to Store Data
let storedData = {
  harga: null,
  kode_produk: null,
  exp: null,
  produk: null,
  tujuan: null,
  title: null,
};

let timeout = null;

module.exports = {
  config,
  rawData,
  selectedData,
  filteredData,
  filteredDataByTag,
  filteredDataAll,
  pembelian,
  height_screen,
  show_bottom_nav,
  isFilterChange,
  isProdukSelected,
  panchi,
  filterCategory,
  tempInputRange,
  storedData,
  timeout,
  pin,
  element_kontak,
  footer,
  mainContent,
  mainInput,
  labelTotal,
  layoutNavigation,
  layoutIcon,
  layoutNominal,
  filterComponent,
  offcanvasDetail,
  offcanvasFilter,
  contentOffcanvasDetail,
  contentOffcanvasFilter,
  show_bottom_nav,
  title_total,
};
