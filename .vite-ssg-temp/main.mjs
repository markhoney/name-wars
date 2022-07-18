import { ViteSSG } from "vite-ssg";
import BootstrapVue3 from "bootstrap-vue-3";
import VueApexCharts from "vue3-apexcharts";
import { useSSRContext, resolveComponent, mergeProps, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { createRouter, createWebHistory } from "vue-router";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$e = {
  props: {
    start: {
      type: Number,
      default: 1900
    },
    end: {
      type: Number,
      default: 2021
    },
    modelValue: {
      type: Number,
      default: 2021,
      required: true
    }
  },
  computed: {
    years() {
      return this.$names.years(this.start, this.end);
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_form_select = resolveComponent("b-form-select");
  _push(ssrRenderComponent(_component_b_form_select, mergeProps({
    modelValue: $props.modelValue,
    options: $options.years,
    onInput: ($event) => _ctx.$emit("update:modelValue", $event)
  }, _attrs), null, _parent));
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Years.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var Years = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const _sfc_main$d = {
  components: { Years },
  data() {
    return {
      year: 2021,
      top: 10
    };
  },
  computed: {
    names() {
      return this.$names.top(this.year, this.top);
    }
  }
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_card = resolveComponent("b-card");
  const _component_b_list_group = resolveComponent("b-list-group");
  const _component_b_list_group_item = resolveComponent("b-list-group-item");
  const _component_b_badge = resolveComponent("b-badge");
  const _component_b_row = resolveComponent("b-row");
  const _component_b_col = resolveComponent("b-col");
  const _component_b_form_group = resolveComponent("b-form-group");
  const _component_years = resolveComponent("years");
  const _component_b_form_select = resolveComponent("b-form-select");
  _push(ssrRenderComponent(_component_b_card, mergeProps({ "no-body": "" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2${_scopeId}>Top ${ssrInterpolate($data.top)} names for ${ssrInterpolate($data.year)}</h2>`);
      } else {
        return [
          createVNode("h2", null, "Top " + toDisplayString($data.top) + " names for " + toDisplayString($data.year), 1)
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_col, { sm: "6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Year",
                      "label-for": "year"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_years, {
                            id: "year",
                            modelValue: $data.year,
                            "onUpdate:modelValue": ($event) => $data.year = $event,
                            start: 1900,
                            end: 2021
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_years, {
                              id: "year",
                              modelValue: $data.year,
                              "onUpdate:modelValue": ($event) => $data.year = $event,
                              start: 1900,
                              end: 2021
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_form_group, {
                        label: "Year",
                        "label-for": "year"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_years, {
                            id: "year",
                            modelValue: $data.year,
                            "onUpdate:modelValue": ($event) => $data.year = $event,
                            start: 1900,
                            end: 2021
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_b_col, { sm: "6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Number of Results",
                      "label-for": "top"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_form_select, {
                            id: "top",
                            modelValue: $data.top,
                            "onUpdate:modelValue": ($event) => $data.top = $event,
                            options: [10, 25, 50, 100]
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_form_select, {
                              id: "top",
                              modelValue: $data.top,
                              "onUpdate:modelValue": ($event) => $data.top = $event,
                              options: [10, 25, 50, 100]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_form_group, {
                        label: "Number of Results",
                        "label-for": "top"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_form_select, {
                            id: "top",
                            modelValue: $data.top,
                            "onUpdate:modelValue": ($event) => $data.top = $event,
                            options: [10, 25, 50, 100]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_col, { sm: "6" }, {
                  default: withCtx(() => [
                    createVNode(_component_b_form_group, {
                      label: "Year",
                      "label-for": "year"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_years, {
                          id: "year",
                          modelValue: $data.year,
                          "onUpdate:modelValue": ($event) => $data.year = $event,
                          start: 1900,
                          end: 2021
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_b_col, { sm: "6" }, {
                  default: withCtx(() => [
                    createVNode(_component_b_form_group, {
                      label: "Number of Results",
                      "label-for": "top"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_form_select, {
                          id: "top",
                          modelValue: $data.top,
                          "onUpdate:modelValue": ($event) => $data.top = $event,
                          options: [10, 25, 50, 100]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_row, null, {
            default: withCtx(() => [
              createVNode(_component_b_col, { sm: "6" }, {
                default: withCtx(() => [
                  createVNode(_component_b_form_group, {
                    label: "Year",
                    "label-for": "year"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_years, {
                        id: "year",
                        modelValue: $data.year,
                        "onUpdate:modelValue": ($event) => $data.year = $event,
                        start: 1900,
                        end: 2021
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_b_col, { sm: "6" }, {
                default: withCtx(() => [
                  createVNode(_component_b_form_group, {
                    label: "Number of Results",
                    "label-for": "top"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_form_select, {
                        id: "top",
                        modelValue: $data.top,
                        "onUpdate:modelValue": ($event) => $data.top = $event,
                        options: [10, 25, 50, 100]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($options.names) {
          _push2(ssrRenderComponent(_component_b_list_group, { flush: "" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList($options.names, (name, index) => {
                  _push3(ssrRenderComponent(_component_b_list_group_item, {
                    key: name.name,
                    class: "d-flex justify-content-between align-items-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(index + 1)}. ${ssrInterpolate(name.name)} `);
                        _push4(ssrRenderComponent(_component_b_badge, { pill: "" }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`${ssrInterpolate(name.number)}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(name.number), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(toDisplayString(index + 1) + ". " + toDisplayString(name.name) + " ", 1),
                          createVNode(_component_b_badge, { pill: "" }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(name.number), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList($options.names, (name, index) => {
                    return openBlock(), createBlock(_component_b_list_group_item, {
                      key: name.name,
                      class: "d-flex justify-content-between align-items-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(index + 1) + ". " + toDisplayString(name.name) + " ", 1),
                        createVNode(_component_b_badge, { pill: "" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(name.number), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          $options.names ? (openBlock(), createBlock(_component_b_list_group, {
            key: 0,
            flush: ""
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($options.names, (name, index) => {
                return openBlock(), createBlock(_component_b_list_group_item, {
                  key: name.name,
                  class: "d-flex justify-content-between align-items-center"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(index + 1) + ". " + toDisplayString(name.name) + " ", 1),
                    createVNode(_component_b_badge, { pill: "" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(name.number), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Top.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var Top = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$c = {
  components: { Years },
  data() {
    return {
      year: 2021
    };
  },
  computed: {
    names() {
      return this.$names.new[this.year];
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_card = resolveComponent("b-card");
  const _component_b_list_group = resolveComponent("b-list-group");
  const _component_b_list_group_item = resolveComponent("b-list-group-item");
  const _component_b_row = resolveComponent("b-row");
  const _component_b_col = resolveComponent("b-col");
  const _component_b_form_group = resolveComponent("b-form-group");
  const _component_years = resolveComponent("years");
  _push(ssrRenderComponent(_component_b_card, mergeProps({ "no-body": "" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2${_scopeId}>New names in ${ssrInterpolate($data.year)}</h2>`);
      } else {
        return [
          createVNode("h2", null, "New names in " + toDisplayString($data.year), 1)
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_col, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Year",
                      "label-for": "year"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_years, {
                            id: "year",
                            modelValue: $data.year,
                            "onUpdate:modelValue": ($event) => $data.year = $event,
                            start: 1900,
                            end: 2021
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_years, {
                              id: "year",
                              modelValue: $data.year,
                              "onUpdate:modelValue": ($event) => $data.year = $event,
                              start: 1900,
                              end: 2021
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_form_group, {
                        label: "Year",
                        "label-for": "year"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_years, {
                            id: "year",
                            modelValue: $data.year,
                            "onUpdate:modelValue": ($event) => $data.year = $event,
                            start: 1900,
                            end: 2021
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_col, null, {
                  default: withCtx(() => [
                    createVNode(_component_b_form_group, {
                      label: "Year",
                      "label-for": "year"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_years, {
                          id: "year",
                          modelValue: $data.year,
                          "onUpdate:modelValue": ($event) => $data.year = $event,
                          start: 1900,
                          end: 2021
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_row, null, {
            default: withCtx(() => [
              createVNode(_component_b_col, null, {
                default: withCtx(() => [
                  createVNode(_component_b_form_group, {
                    label: "Year",
                    "label-for": "year"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_years, {
                        id: "year",
                        modelValue: $data.year,
                        "onUpdate:modelValue": ($event) => $data.year = $event,
                        start: 1900,
                        end: 2021
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($options.names) {
          _push2(ssrRenderComponent(_component_b_list_group, {
            flush: "",
            style: { "max-height": "80vh", "overflow": "scroll" }
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList($options.names, (name) => {
                  _push3(ssrRenderComponent(_component_b_list_group_item, {
                    key: name,
                    class: "d-flex justify-content-between align-items-center"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(name)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(name), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList($options.names, (name) => {
                    return openBlock(), createBlock(_component_b_list_group_item, {
                      key: name,
                      class: "d-flex justify-content-between align-items-center"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(name), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(`<!---->`);
        }
      } else {
        return [
          $options.names ? (openBlock(), createBlock(_component_b_list_group, {
            key: 0,
            flush: "",
            style: { "max-height": "80vh", "overflow": "scroll" }
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($options.names, (name) => {
                return openBlock(), createBlock(_component_b_list_group_item, {
                  key: name,
                  class: "d-flex justify-content-between align-items-center"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(name), 1)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/New.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var New$3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const _sfc_main$b = {
  components: { New: New$3, Years, VueApexCharts },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      first: 1901,
      last: 2021,
      year: 2021
    };
  },
  computed: {
    years() {
      return this.$names.years(this.first, this.last);
    },
    chartOptions() {
      return {
        colors: ["#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4", "#46f0f0", "#f032e6", "#bcf60c", "#fabebe", "#008080", "#e6beff", "#9a6324", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000075", "#808080"],
        xaxis: {
          categories: this.years
        }
      };
    },
    series() {
      return [{
        name: "New names",
        data: this.years.map((year) => this.$names.new[year].length)
      }];
    }
  },
  methods: {
    sum(year) {
      return (year.M || 0) + (year.F || 0);
    }
  },
  watch: {
    value(value) {
      this.names = value;
    }
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_col = resolveComponent("b-col");
  const _component_vue_apex_charts = resolveComponent("vue-apex-charts");
  const _component_b_card = resolveComponent("b-card");
  const _component_b_card_text = resolveComponent("b-card-text");
  const _component_b_form_group = resolveComponent("b-form-group");
  const _component_years = resolveComponent("years");
  const _component_new = resolveComponent("new");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_b_col, {
    sm: "12",
    lg: "9"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_vue_apex_charts, {
          type: "bar",
          series: $options.series,
          options: $options.chartOptions
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_vue_apex_charts, {
            type: "bar",
            series: $options.series,
            options: $options.chartOptions
          }, null, 8, ["series", "options"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_b_col, {
    sm: "6",
    lg: "3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_card, null, {
          header: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h2${_scopeId2}>New names</h2>`);
            } else {
              return [
                createVNode("h2", null, "New names")
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "First Year",
                      "label-for": "first"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_years, {
                            id: "first",
                            modelValue: $data.first,
                            "onUpdate:modelValue": ($event) => $data.first = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_years, {
                              id: "first",
                              modelValue: $data.first,
                              "onUpdate:modelValue": ($event) => $data.first = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Last Year",
                      "label-for": "last"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_years, {
                            id: "last",
                            modelValue: $data.last,
                            "onUpdate:modelValue": ($event) => $data.last = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_years, {
                              id: "last",
                              modelValue: $data.last,
                              "onUpdate:modelValue": ($event) => $data.last = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_form_group, {
                        label: "First Year",
                        "label-for": "first"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_years, {
                            id: "first",
                            modelValue: $data.first,
                            "onUpdate:modelValue": ($event) => $data.first = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_form_group, {
                        label: "Last Year",
                        "label-for": "last"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_years, {
                            id: "last",
                            modelValue: $data.last,
                            "onUpdate:modelValue": ($event) => $data.last = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_card_text, null, {
                  default: withCtx(() => [
                    createVNode(_component_b_form_group, {
                      label: "First Year",
                      "label-for": "first"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_years, {
                          id: "first",
                          modelValue: $data.first,
                          "onUpdate:modelValue": ($event) => $data.first = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_form_group, {
                      label: "Last Year",
                      "label-for": "last"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_years, {
                          id: "last",
                          modelValue: $data.last,
                          "onUpdate:modelValue": ($event) => $data.last = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_card, null, {
            header: withCtx(() => [
              createVNode("h2", null, "New names")
            ]),
            default: withCtx(() => [
              createVNode(_component_b_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_b_form_group, {
                    label: "First Year",
                    "label-for": "first"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_years, {
                        id: "first",
                        modelValue: $data.first,
                        "onUpdate:modelValue": ($event) => $data.first = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_form_group, {
                    label: "Last Year",
                    "label-for": "last"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_years, {
                        id: "last",
                        modelValue: $data.last,
                        "onUpdate:modelValue": ($event) => $data.last = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_b_col, {
    sm: "6",
    lg: "4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_new, {
          modelValue: $data.year,
          "onUpdate:modelValue": ($event) => $data.year = $event
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_new, {
            modelValue: $data.year,
            "onUpdate:modelValue": ($event) => $data.year = $event
          }, null, 8, ["modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NewChart.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var New$2 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {
  props: {
    modelValue: {
      type: Array,
      default: []
    },
    validate: {
      type: Boolean,
      default: true
    },
    names: {
      type: String,
      default: ""
    }
  },
  methods: {
    onInput(value) {
      let names2 = value.split(/[, ]+/);
      names2 = names2.map((name) => name.trim());
      names2 = names2.map((name) => name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase());
      names2 = names2.filter(Boolean);
      names2 = [...new Set(names2)];
      if (this.validate)
        names2 = names2.filter((name) => Object.keys(this.$names.names).includes(name));
      names2 = Object.values(names2);
      this.$emit("update:modelValue", names2);
    }
  },
  watch: {
    names(names2) {
      this.onInput(names2);
    }
  }
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_form_input = resolveComponent("b-form-input");
  _push(ssrRenderComponent(_component_b_form_input, mergeProps({
    value: $props.names,
    type: "text",
    onInput: $options.onInput,
    onChange: $options.onInput
  }, _attrs), null, _parent));
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/NamesText.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var Names = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {
  data() {
    return {
      names: {
        Aaliyah: "Music (1994)",
        Arya: "TV - Game of Thrones (2011)",
        Daniel: "Music - Daniel by Elton John (1973)",
        Harper: "Author - Go Set a Watchman (2015)",
        Jason: "Movie - Jason and the Argonauts (1963)",
        Juno: "Movie - Juno (2007)",
        Kylo: "Movie - The Force Awakens (2015)",
        Leonidas: "Movie - 300 (2006)",
        Luke: "Movie - Star Wars (1977)",
        Marshall: "Music - Eminem (1999)",
        "Darren Darrin": "TV - Bewitched (1964)"
      },
      groups: [
        "January February March April May June July August September October November December"
      ]
    };
  },
  methods: {
    emit(name) {
      this.$emit("input", name);
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_card = resolveComponent("b-card");
  const _component_b_list_group = resolveComponent("b-list-group");
  const _component_b_list_group_item = resolveComponent("b-list-group-item");
  _push(ssrRenderComponent(_component_b_card, mergeProps({
    "no-body": "",
    header: "Card with flush list group"
  }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2${_scopeId}>Some interesting names</h2><p${_scopeId}>Click any name to enter it into the graph above.</p>`);
      } else {
        return [
          createVNode("h2", null, "Some interesting names"),
          createVNode("p", null, "Click any name to enter it into the graph above.")
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>(Hover over a name to see why it might have become popular)</p>`);
      } else {
        return [
          createVNode("p", null, "(Hover over a name to see why it might have become popular)")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_list_group, { flush: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList(Object.keys($data.names), (name) => {
                _push3(ssrRenderComponent(_component_b_list_group_item, {
                  key: name,
                  onClick: ($event) => $options.emit(name),
                  title: $data.names[name],
                  role: "button"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(Object.keys($data.names), (name) => {
                  return openBlock(), createBlock(_component_b_list_group_item, {
                    key: name,
                    onClick: ($event) => $options.emit(name),
                    title: $data.names[name],
                    role: "button"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(name), 1)
                    ]),
                    _: 2
                  }, 1032, ["onClick", "title"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_list_group, { flush: "" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(Object.keys($data.names), (name) => {
                return openBlock(), createBlock(_component_b_list_group_item, {
                  key: name,
                  onClick: ($event) => $options.emit(name),
                  title: $data.names[name],
                  role: "button"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(name), 1)
                  ]),
                  _: 2
                }, 1032, ["onClick", "title"]);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Interesting.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var Interesting = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const _sfc_main$8 = {
  components: { Names, Years, Interesting, VueApexCharts },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      first: 1900,
      last: 2021,
      nameList: [],
      names: "",
      colours: ["#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4", "#46f0f0", "#f032e6", "#bcf60c", "#fabebe", "#008080", "#e6beff", "#9a6324", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000075", "#808080"]
    };
  },
  computed: {
    years() {
      return this.$names.years(this.first, this.last);
    },
    chartOptions() {
      return {
        colors: this.colours,
        xaxis: {
          categories: this.years
        }
      };
    },
    series() {
      return this.nameList.map((name, index) => ({
        name,
        data: this.$names.names[name] ? this.years.map((year) => {
          var _a, _b;
          return (((_a = this.$names.names[name][year]) == null ? void 0 : _a.M) || 0) + (((_b = this.$names.names[name][year]) == null ? void 0 : _b.F) || 0);
        }) : []
      }));
    }
  },
  methods: {
    sum(year) {
      return (year.M || 0) + (year.F || 0);
    }
  },
  watch: {
    value(value) {
      this.names = value;
    }
  }
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_col = resolveComponent("b-col");
  const _component_vue_apex_charts = resolveComponent("vue-apex-charts");
  const _component_b_card = resolveComponent("b-card");
  const _component_b_card_text = resolveComponent("b-card-text");
  const _component_b_form_group = resolveComponent("b-form-group");
  const _component_names = resolveComponent("names");
  const _component_years = resolveComponent("years");
  const _component_interesting = resolveComponent("interesting");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_b_col, {
    sm: "12",
    lg: "9"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_vue_apex_charts, {
          type: "line",
          series: $options.series,
          options: $options.chartOptions
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_vue_apex_charts, {
            type: "line",
            series: $options.series,
            options: $options.chartOptions
          }, null, 8, ["series", "options"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_b_col, {
    sm: "6",
    lg: "3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_card, null, {
          header: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h2${_scopeId2}>Compare names</h2>`);
            } else {
              return [
                createVNode("h2", null, "Compare names")
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Names to compare",
                      "label-for": "names"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_names, {
                            id: "names",
                            modelValue: $data.nameList,
                            "onUpdate:modelValue": ($event) => $data.nameList = $event,
                            names: $data.names,
                            placeholder: "e.g. Luke Leia"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_names, {
                              id: "names",
                              modelValue: $data.nameList,
                              "onUpdate:modelValue": ($event) => $data.nameList = $event,
                              names: $data.names,
                              placeholder: "e.g. Luke Leia"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "names"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "First Year",
                      "label-for": "first"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_years, {
                            id: "first",
                            modelValue: $data.first,
                            "onUpdate:modelValue": ($event) => $data.first = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_years, {
                              id: "first",
                              modelValue: $data.first,
                              "onUpdate:modelValue": ($event) => $data.first = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Last Year",
                      "label-for": "last"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_years, {
                            id: "last",
                            modelValue: $data.last,
                            "onUpdate:modelValue": ($event) => $data.last = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_years, {
                              id: "last",
                              modelValue: $data.last,
                              "onUpdate:modelValue": ($event) => $data.last = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_form_group, {
                        label: "Names to compare",
                        "label-for": "names"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_names, {
                            id: "names",
                            modelValue: $data.nameList,
                            "onUpdate:modelValue": ($event) => $data.nameList = $event,
                            names: $data.names,
                            placeholder: "e.g. Luke Leia"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "names"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_form_group, {
                        label: "First Year",
                        "label-for": "first"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_years, {
                            id: "first",
                            modelValue: $data.first,
                            "onUpdate:modelValue": ($event) => $data.first = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_form_group, {
                        label: "Last Year",
                        "label-for": "last"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_years, {
                            id: "last",
                            modelValue: $data.last,
                            "onUpdate:modelValue": ($event) => $data.last = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_card_text, null, {
                  default: withCtx(() => [
                    createVNode(_component_b_form_group, {
                      label: "Names to compare",
                      "label-for": "names"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_names, {
                          id: "names",
                          modelValue: $data.nameList,
                          "onUpdate:modelValue": ($event) => $data.nameList = $event,
                          names: $data.names,
                          placeholder: "e.g. Luke Leia"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "names"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_form_group, {
                      label: "First Year",
                      "label-for": "first"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_years, {
                          id: "first",
                          modelValue: $data.first,
                          "onUpdate:modelValue": ($event) => $data.first = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_form_group, {
                      label: "Last Year",
                      "label-for": "last"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_years, {
                          id: "last",
                          modelValue: $data.last,
                          "onUpdate:modelValue": ($event) => $data.last = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_card, null, {
            header: withCtx(() => [
              createVNode("h2", null, "Compare names")
            ]),
            default: withCtx(() => [
              createVNode(_component_b_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_b_form_group, {
                    label: "Names to compare",
                    "label-for": "names"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_names, {
                        id: "names",
                        modelValue: $data.nameList,
                        "onUpdate:modelValue": ($event) => $data.nameList = $event,
                        names: $data.names,
                        placeholder: "e.g. Luke Leia"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "names"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_form_group, {
                    label: "First Year",
                    "label-for": "first"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_years, {
                        id: "first",
                        modelValue: $data.first,
                        "onUpdate:modelValue": ($event) => $data.first = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_form_group, {
                    label: "Last Year",
                    "label-for": "last"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_years, {
                        id: "last",
                        modelValue: $data.last,
                        "onUpdate:modelValue": ($event) => $data.last = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_b_col, {
    sm: "6",
    lg: "4"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_interesting, {
          onInput: ($event) => $data.names = $event
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_interesting, {
            onInput: ($event) => $data.names = $event
          }, null, 8, ["onInput"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Compare.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var Compare$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const _sfc_main$7 = {
  components: { Years },
  data() {
    return {
      first: 1900,
      last: 2021,
      average: 1,
      top: 10
    };
  },
  computed: {
    years() {
      return this.$names.years(this.first, this.last);
    },
    spikes() {
      return Object.entries(this.$names.names).reduce((names2, [name, years2]) => {
        names2[name] = this.years.slice(this.average).reduce((allyears, year) => {
          var _a, _b, _c, _d;
          const yearrange = this.$names.years(year - this.average + 1, year).reverse();
          let diff = 0;
          for (const year2 of yearrange)
            diff += (((_a = years2[year2]) == null ? void 0 : _a.M) || 0) + (((_b = years2[year2]) == null ? void 0 : _b.F) || 0) - (((_c = years2[year2 - 1]) == null ? void 0 : _c.M) || 0) - (((_d = years2[year2 - 1]) == null ? void 0 : _d.F) || 0);
          allyears[year] = Math.floor(diff / this.average);
          return allyears;
        }, {});
        return names2;
      }, {});
    },
    largest() {
      return Object.entries(this.spikes).map(([name, years2]) => Object.entries(years2).map(([year, diff]) => ({ name, year, diff }))).flat().sort((a, b) => Math.abs(b.diff) - Math.abs(a.diff)).slice(0, this.top);
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_card = resolveComponent("b-card");
  const _component_b_list_group = resolveComponent("b-list-group");
  const _component_b_list_group_item = resolveComponent("b-list-group-item");
  const _component_b_badge = resolveComponent("b-badge");
  const _component_b_row = resolveComponent("b-row");
  const _component_b_col = resolveComponent("b-col");
  const _component_b_form_group = resolveComponent("b-form-group");
  const _component_years = resolveComponent("years");
  const _component_b_form_select = resolveComponent("b-form-select");
  _push(ssrRenderComponent(_component_b_card, mergeProps({ "no-body": "" }, _attrs), {
    header: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<h2${_scopeId}>${ssrInterpolate($data.top)} largest changes</h2>`);
      } else {
        return [
          createVNode("h2", null, toDisplayString($data.top) + " largest changes", 1)
        ];
      }
    }),
    footer: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_col, { sm: "6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "First Year",
                      "label-for": "first"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_years, {
                            id: "first",
                            modelValue: $data.first,
                            "onUpdate:modelValue": ($event) => $data.first = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_years, {
                              id: "first",
                              modelValue: $data.first,
                              "onUpdate:modelValue": ($event) => $data.first = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Last Year",
                      "label-for": "last"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_years, {
                            id: "last",
                            modelValue: $data.last,
                            "onUpdate:modelValue": ($event) => $data.last = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_years, {
                              id: "last",
                              modelValue: $data.last,
                              "onUpdate:modelValue": ($event) => $data.last = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_form_group, {
                        label: "First Year",
                        "label-for": "first"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_years, {
                            id: "first",
                            modelValue: $data.first,
                            "onUpdate:modelValue": ($event) => $data.first = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_form_group, {
                        label: "Last Year",
                        "label-for": "last"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_years, {
                            id: "last",
                            modelValue: $data.last,
                            "onUpdate:modelValue": ($event) => $data.last = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_b_col, { sm: "6" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Number of results",
                      "label-for": "top"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_form_select, {
                            id: "top",
                            modelValue: $data.top,
                            "onUpdate:modelValue": ($event) => $data.top = $event,
                            options: [10, 25, 50, 100]
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_form_select, {
                              id: "top",
                              modelValue: $data.top,
                              "onUpdate:modelValue": ($event) => $data.top = $event,
                              options: [10, 25, 50, 100]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Average over years",
                      "label-for": "average"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_form_select, {
                            id: "average",
                            modelValue: $data.average,
                            "onUpdate:modelValue": ($event) => $data.average = $event,
                            options: [1, 2, 3, 4, 5]
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_form_select, {
                              id: "average",
                              modelValue: $data.average,
                              "onUpdate:modelValue": ($event) => $data.average = $event,
                              options: [1, 2, 3, 4, 5]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_form_group, {
                        label: "Number of results",
                        "label-for": "top"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_form_select, {
                            id: "top",
                            modelValue: $data.top,
                            "onUpdate:modelValue": ($event) => $data.top = $event,
                            options: [10, 25, 50, 100]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_form_group, {
                        label: "Average over years",
                        "label-for": "average"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_form_select, {
                            id: "average",
                            modelValue: $data.average,
                            "onUpdate:modelValue": ($event) => $data.average = $event,
                            options: [1, 2, 3, 4, 5]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_col, { sm: "6" }, {
                  default: withCtx(() => [
                    createVNode(_component_b_form_group, {
                      label: "First Year",
                      "label-for": "first"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_years, {
                          id: "first",
                          modelValue: $data.first,
                          "onUpdate:modelValue": ($event) => $data.first = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_form_group, {
                      label: "Last Year",
                      "label-for": "last"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_years, {
                          id: "last",
                          modelValue: $data.last,
                          "onUpdate:modelValue": ($event) => $data.last = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_b_col, { sm: "6" }, {
                  default: withCtx(() => [
                    createVNode(_component_b_form_group, {
                      label: "Number of results",
                      "label-for": "top"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_form_select, {
                          id: "top",
                          modelValue: $data.top,
                          "onUpdate:modelValue": ($event) => $data.top = $event,
                          options: [10, 25, 50, 100]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_form_group, {
                      label: "Average over years",
                      "label-for": "average"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_form_select, {
                          id: "average",
                          modelValue: $data.average,
                          "onUpdate:modelValue": ($event) => $data.average = $event,
                          options: [1, 2, 3, 4, 5]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_row, null, {
            default: withCtx(() => [
              createVNode(_component_b_col, { sm: "6" }, {
                default: withCtx(() => [
                  createVNode(_component_b_form_group, {
                    label: "First Year",
                    "label-for": "first"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_years, {
                        id: "first",
                        modelValue: $data.first,
                        "onUpdate:modelValue": ($event) => $data.first = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_form_group, {
                    label: "Last Year",
                    "label-for": "last"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_years, {
                        id: "last",
                        modelValue: $data.last,
                        "onUpdate:modelValue": ($event) => $data.last = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_b_col, { sm: "6" }, {
                default: withCtx(() => [
                  createVNode(_component_b_form_group, {
                    label: "Number of results",
                    "label-for": "top"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_form_select, {
                        id: "top",
                        modelValue: $data.top,
                        "onUpdate:modelValue": ($event) => $data.top = $event,
                        options: [10, 25, 50, 100]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_form_group, {
                    label: "Average over years",
                    "label-for": "average"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_form_select, {
                        id: "average",
                        modelValue: $data.average,
                        "onUpdate:modelValue": ($event) => $data.average = $event,
                        options: [1, 2, 3, 4, 5]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_list_group, { flush: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($options.largest, (spike) => {
                _push3(ssrRenderComponent(_component_b_list_group_item, {
                  key: spike.name + spike.year,
                  variant: spike.diff > 0 ? "success" : "danger",
                  class: "d-flex justify-content-between align-items-center"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`${ssrInterpolate(spike.name)} (${ssrInterpolate(spike.year)}) `);
                      _push4(ssrRenderComponent(_component_b_badge, {
                        variant: spike.diff > 0 ? "success" : "danger",
                        pill: ""
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            if (spike.diff > 0) {
                              _push5(`<!--[-->+<!--]-->`);
                            } else {
                              _push5(`<!---->`);
                            }
                            _push5(`${ssrInterpolate(spike.diff)}`);
                          } else {
                            return [
                              spike.diff > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createTextVNode("+")
                              ], 64)) : createCommentVNode("", true),
                              createTextVNode(toDisplayString(spike.diff), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createTextVNode(toDisplayString(spike.name) + " (" + toDisplayString(spike.year) + ") ", 1),
                        createVNode(_component_b_badge, {
                          variant: spike.diff > 0 ? "success" : "danger",
                          pill: ""
                        }, {
                          default: withCtx(() => [
                            spike.diff > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode("+")
                            ], 64)) : createCommentVNode("", true),
                            createTextVNode(toDisplayString(spike.diff), 1)
                          ]),
                          _: 2
                        }, 1032, ["variant"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList($options.largest, (spike) => {
                  return openBlock(), createBlock(_component_b_list_group_item, {
                    key: spike.name + spike.year,
                    variant: spike.diff > 0 ? "success" : "danger",
                    class: "d-flex justify-content-between align-items-center"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(spike.name) + " (" + toDisplayString(spike.year) + ") ", 1),
                      createVNode(_component_b_badge, {
                        variant: spike.diff > 0 ? "success" : "danger",
                        pill: ""
                      }, {
                        default: withCtx(() => [
                          spike.diff > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createTextVNode("+")
                          ], 64)) : createCommentVNode("", true),
                          createTextVNode(toDisplayString(spike.diff), 1)
                        ]),
                        _: 2
                      }, 1032, ["variant"])
                    ]),
                    _: 2
                  }, 1032, ["variant"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_list_group, { flush: "" }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList($options.largest, (spike) => {
                return openBlock(), createBlock(_component_b_list_group_item, {
                  key: spike.name + spike.year,
                  variant: spike.diff > 0 ? "success" : "danger",
                  class: "d-flex justify-content-between align-items-center"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(spike.name) + " (" + toDisplayString(spike.year) + ") ", 1),
                    createVNode(_component_b_badge, {
                      variant: spike.diff > 0 ? "success" : "danger",
                      pill: ""
                    }, {
                      default: withCtx(() => [
                        spike.diff > 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createTextVNode("+")
                        ], 64)) : createCommentVNode("", true),
                        createTextVNode(toDisplayString(spike.diff), 1)
                      ]),
                      _: 2
                    }, 1032, ["variant"])
                  ]),
                  _: 2
                }, 1032, ["variant"]);
              }), 128))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Spikes.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var Spikes = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = {
  components: { Years, VueApexCharts },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      first: 1900,
      last: 2021,
      name: "",
      type: "bar"
    };
  },
  computed: {
    years() {
      return this.$names.years(this.first, this.last);
    },
    names() {
      return this.$names.androgynous;
    },
    chartOptions() {
      return {
        chart: {
          stacked: true
        },
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true
        },
        colors: ["#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231", "#911eb4", "#46f0f0", "#f032e6", "#bcf60c", "#fabebe", "#008080", "#e6beff", "#9a6324", "#fffac8", "#800000", "#aaffc3", "#808000", "#ffd8b1", "#000075", "#808080"],
        xaxis: {
          categories: this.years
        }
      };
    },
    series() {
      return !this.name ? [] : [
        {
          name: "Male",
          data: this.years.map((year) => {
            var _a;
            return ((_a = this.$names.names[this.name][year]) == null ? void 0 : _a.M) || 0;
          })
        },
        {
          name: "Female",
          data: this.years.map((year) => {
            var _a;
            return ((_a = this.$names.names[this.name][year]) == null ? void 0 : _a.F) || 0;
          })
        }
      ];
    }
  },
  methods: {
    sum(year) {
      return (year.M || 0) + (year.F || 0);
    }
  },
  watch: {
    value(value) {
      this.names = value;
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_col = resolveComponent("b-col");
  const _component_vue_apex_charts = resolveComponent("vue-apex-charts");
  const _component_b_card = resolveComponent("b-card");
  const _component_b_card_text = resolveComponent("b-card-text");
  const _component_b_form_group = resolveComponent("b-form-group");
  const _component_b_form_select = resolveComponent("b-form-select");
  const _component_years = resolveComponent("years");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_b_col, {
    sm: "12",
    lg: "9"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_vue_apex_charts, {
          type: "line",
          series: $options.series,
          options: $options.chartOptions
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_vue_apex_charts, {
            type: "line",
            series: $options.series,
            options: $options.chartOptions
          }, null, 8, ["series", "options"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_b_col, {
    sm: "6",
    lg: "3"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_card, null, {
          header: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<h2${_scopeId2}>Androgynous names</h2>`);
            } else {
              return [
                createVNode("h2", null, "Androgynous names")
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_b_card_text, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Name",
                      "label-for": "name"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_form_select, {
                            id: "name",
                            modelValue: $data.name,
                            "onUpdate:modelValue": ($event) => $data.name = $event,
                            options: $options.names
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_form_select, {
                              id: "name",
                              modelValue: $data.name,
                              "onUpdate:modelValue": ($event) => $data.name = $event,
                              options: $options.names
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "First Year",
                      "label-for": "first"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_years, {
                            id: "first",
                            modelValue: $data.first,
                            "onUpdate:modelValue": ($event) => $data.first = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_years, {
                              id: "first",
                              modelValue: $data.first,
                              "onUpdate:modelValue": ($event) => $data.first = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Last Year",
                      "label-for": "last"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_years, {
                            id: "last",
                            modelValue: $data.last,
                            "onUpdate:modelValue": ($event) => $data.last = $event
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_years, {
                              id: "last",
                              modelValue: $data.last,
                              "onUpdate:modelValue": ($event) => $data.last = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_b_form_group, {
                      label: "Chart Type",
                      "label-for": "type"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(_component_b_form_select, {
                            id: "type",
                            modelValue: $data.type,
                            "onUpdate:modelValue": ($event) => $data.type = $event,
                            options: ["Bar", "Bar Stacked", "Line"]
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(_component_b_form_select, {
                              id: "type",
                              modelValue: $data.type,
                              "onUpdate:modelValue": ($event) => $data.type = $event,
                              options: ["Bar", "Bar Stacked", "Line"]
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(_component_b_form_group, {
                        label: "Name",
                        "label-for": "name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_form_select, {
                            id: "name",
                            modelValue: $data.name,
                            "onUpdate:modelValue": ($event) => $data.name = $event,
                            options: $options.names
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_form_group, {
                        label: "First Year",
                        "label-for": "first"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_years, {
                            id: "first",
                            modelValue: $data.first,
                            "onUpdate:modelValue": ($event) => $data.first = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_form_group, {
                        label: "Last Year",
                        "label-for": "last"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_years, {
                            id: "last",
                            modelValue: $data.last,
                            "onUpdate:modelValue": ($event) => $data.last = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }),
                      createVNode(_component_b_form_group, {
                        label: "Chart Type",
                        "label-for": "type"
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_b_form_select, {
                            id: "type",
                            modelValue: $data.type,
                            "onUpdate:modelValue": ($event) => $data.type = $event,
                            options: ["Bar", "Bar Stacked", "Line"]
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_b_card_text, null, {
                  default: withCtx(() => [
                    createVNode(_component_b_form_group, {
                      label: "Name",
                      "label-for": "name"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_form_select, {
                          id: "name",
                          modelValue: $data.name,
                          "onUpdate:modelValue": ($event) => $data.name = $event,
                          options: $options.names
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_form_group, {
                      label: "First Year",
                      "label-for": "first"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_years, {
                          id: "first",
                          modelValue: $data.first,
                          "onUpdate:modelValue": ($event) => $data.first = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_form_group, {
                      label: "Last Year",
                      "label-for": "last"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_years, {
                          id: "last",
                          modelValue: $data.last,
                          "onUpdate:modelValue": ($event) => $data.last = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_b_form_group, {
                      label: "Chart Type",
                      "label-for": "type"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_b_form_select, {
                          id: "type",
                          modelValue: $data.type,
                          "onUpdate:modelValue": ($event) => $data.type = $event,
                          options: ["Bar", "Bar Stacked", "Line"]
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_card, null, {
            header: withCtx(() => [
              createVNode("h2", null, "Androgynous names")
            ]),
            default: withCtx(() => [
              createVNode(_component_b_card_text, null, {
                default: withCtx(() => [
                  createVNode(_component_b_form_group, {
                    label: "Name",
                    "label-for": "name"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_form_select, {
                        id: "name",
                        modelValue: $data.name,
                        "onUpdate:modelValue": ($event) => $data.name = $event,
                        options: $options.names
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_form_group, {
                    label: "First Year",
                    "label-for": "first"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_years, {
                        id: "first",
                        modelValue: $data.first,
                        "onUpdate:modelValue": ($event) => $data.first = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_form_group, {
                    label: "Last Year",
                    "label-for": "last"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_years, {
                        id: "last",
                        modelValue: $data.last,
                        "onUpdate:modelValue": ($event) => $data.last = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_b_form_group, {
                    label: "Chart Type",
                    "label-for": "type"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_b_form_select, {
                        id: "type",
                        modelValue: $data.type,
                        "onUpdate:modelValue": ($event) => $data.type = $event,
                        options: ["Bar", "Bar Stacked", "Line"]
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Androgynous.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var Androgynous$2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = {
  components: { Top, New: New$2, Compare: Compare$2, Spikes, Androgynous: Androgynous$2 }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_b_container = resolveComponent("b-container");
  const _component_b_row = resolveComponent("b-row");
  const _component_router_view = resolveComponent("router-view");
  _push(ssrRenderComponent(_component_b_container, mergeProps({ class: "my-5" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_b_row, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_router_view, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_router_view)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_b_row, null, {
            default: withCtx(() => [
              createVNode(_component_router_view)
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var App = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const __pages_import_0__ = () => Promise.resolve().then(function() {
  return Androgynous$1;
});
const __pages_import_1__ = () => Promise.resolve().then(function() {
  return Charts$1;
});
const __pages_import_2__ = () => Promise.resolve().then(function() {
  return Compare$1;
});
const __pages_import_3__ = () => Promise.resolve().then(function() {
  return Index$1;
});
const __pages_import_4__ = () => Promise.resolve().then(function() {
  return New$1;
});
const routes = [{ "name": "Androgynous", "path": "/androgynous", "component": __pages_import_0__, "props": true }, { "name": "Charts", "path": "/charts", "component": __pages_import_1__, "props": true }, { "name": "Compare", "path": "/compare", "component": __pages_import_2__, "props": true }, { "name": "Index", "path": "/", "component": __pages_import_3__, "props": true }, { "name": "New", "path": "/new", "component": __pages_import_4__, "props": true }];
const router = createRouter({
  history: createWebHistory(),
  routes
});
var bootstrap = "";
var bootstrapVue3 = "";
const Aaliyah = {
  "1997": {
    F: 10
  },
  "1998": {
    F: 22
  },
  "1999": {
    F: 24
  },
  "2000": {
    F: 26
  },
  "2001": {
    F: 54
  },
  "2002": {
    F: 81
  },
  "2003": {
    F: 60
  },
  "2004": {
    F: 37
  },
  "2005": {
    F: 66
  },
  "2006": {
    F: 70
  },
  "2007": {
    F: 61
  },
  "2008": {
    F: 73
  },
  "2009": {
    F: 63
  },
  "2010": {
    F: 73
  },
  "2011": {
    F: 62
  },
  "2012": {
    F: 71
  },
  "2013": {
    F: 67
  },
  "2014": {
    F: 75
  },
  "2015": {
    F: 56
  },
  "2016": {
    F: 71
  },
  "2017": {
    F: 56
  },
  "2018": {
    F: 47
  },
  "2019": {
    F: 53
  },
  "2020": {
    F: 39
  },
  "2021": {
    F: 42
  }
};
const Aarav = {
  "2009": {
    M: 10
  },
  "2010": {
    M: 19
  },
  "2011": {
    M: 14
  },
  "2012": {
    M: 18
  },
  "2013": {
    M: 24
  },
  "2014": {
    M: 27
  },
  "2015": {
    M: 31
  },
  "2016": {
    M: 23
  },
  "2017": {
    M: 25
  },
  "2018": {
    M: 24
  },
  "2019": {
    M: 33
  },
  "2020": {
    M: 25
  },
  "2021": {
    M: 27
  }
};
const Aaria = {
  "2018": {
    F: 16
  },
  "2019": {
    F: 12
  },
  "2020": {
    F: 13
  }
};
const Aarohi = {
  "2015": {
    F: 10
  }
};
const Aaron = {
  "1960": {
    M: 16
  },
  "1961": {
    M: 20
  },
  "1962": {
    M: 25
  },
  "1963": {
    M: 24
  },
  "1964": {
    M: 21
  },
  "1965": {
    M: 52
  },
  "1966": {
    M: 99
  },
  "1967": {
    M: 101
  },
  "1968": {
    M: 161
  },
  "1969": {
    M: 165
  },
  "1970": {
    M: 268
  },
  "1971": {
    M: 569
  },
  "1972": {
    M: 612
  },
  "1973": {
    M: 521
  },
  "1974": {
    M: 463
  },
  "1975": {
    M: 375
  },
  "1976": {
    M: 373
  },
  "1977": {
    M: 327
  },
  "1978": {
    M: 363
  },
  "1979": {
    M: 314
  },
  "1980": {
    M: 289
  },
  "1981": {
    M: 283
  },
  "1982": {
    M: 270
  },
  "1983": {
    M: 295
  },
  "1984": {
    M: 240
  },
  "1985": {
    M: 238
  },
  "1986": {
    M: 244
  },
  "1987": {
    M: 223
  },
  "1988": {
    M: 253
  },
  "1989": {
    M: 249
  },
  "1990": {
    M: 218
  },
  "1991": {
    M: 210
  },
  "1992": {
    M: 221
  },
  "1993": {
    M: 202
  },
  "1994": {
    M: 197
  },
  "1995": {
    M: 156
  },
  "1996": {
    M: 129
  },
  "1997": {
    M: 120
  },
  "1998": {
    M: 87
  },
  "1999": {
    M: 93
  },
  "2000": {
    M: 85
  },
  "2001": {
    M: 63
  },
  "2002": {
    M: 52
  },
  "2003": {
    M: 76
  },
  "2004": {
    M: 73
  },
  "2005": {
    M: 79
  },
  "2006": {
    M: 68
  },
  "2007": {
    M: 70
  },
  "2008": {
    M: 77
  },
  "2009": {
    M: 54
  },
  "2010": {
    M: 75
  },
  "2011": {
    M: 45
  },
  "2012": {
    M: 51
  },
  "2013": {
    M: 55
  },
  "2014": {
    M: 62
  },
  "2015": {
    M: 66
  },
  "2016": {
    M: 62
  },
  "2017": {
    M: 44
  },
  "2018": {
    M: 33
  },
  "2019": {
    M: 46
  },
  "2020": {
    M: 35
  },
  "2021": {
    M: 42
  }
};
const Aarush = {
  "2012": {
    M: 11
  }
};
const Aarya = {
  "2021": {
    F: 11
  }
};
const Aaryan = {
  "2010": {
    M: 10
  },
  "2016": {
    M: 15
  }
};
const Abbey = {
  "1977": {
    F: 10
  },
  "1980": {
    F: 15
  },
  "1981": {
    F: 13
  },
  "1982": {
    F: 15
  },
  "1983": {
    F: 20
  },
  "1984": {
    F: 12
  },
  "1985": {
    F: 13
  },
  "1986": {
    F: 10
  },
  "1987": {
    F: 21
  },
  "1988": {
    F: 21
  },
  "1989": {
    F: 16
  },
  "1990": {
    F: 30
  },
  "1991": {
    F: 24
  },
  "1992": {
    F: 31
  },
  "1993": {
    F: 18
  },
  "1994": {
    F: 31
  },
  "1995": {
    F: 39
  },
  "1996": {
    F: 22
  },
  "1997": {
    F: 38
  },
  "1998": {
    F: 38
  },
  "1999": {
    F: 42
  },
  "2000": {
    F: 32
  },
  "2001": {
    F: 40
  },
  "2002": {
    F: 29
  },
  "2003": {
    F: 41
  },
  "2004": {
    F: 27
  },
  "2005": {
    F: 28
  },
  "2006": {
    F: 22
  },
  "2007": {
    F: 22
  },
  "2009": {
    F: 14
  },
  "2010": {
    F: 17
  },
  "2011": {
    F: 15
  },
  "2012": {
    F: 13
  }
};
const Abbie = {
  "1977": {
    F: 14
  },
  "1978": {
    F: 11
  },
  "1979": {
    F: 16
  },
  "1980": {
    F: 10
  },
  "1981": {
    F: 13
  },
  "1982": {
    F: 14
  },
  "1984": {
    F: 11
  },
  "1985": {
    F: 13
  },
  "1986": {
    F: 10
  },
  "1988": {
    F: 17
  },
  "1989": {
    F: 11
  },
  "1990": {
    F: 11
  },
  "1992": {
    F: 10
  },
  "1996": {
    F: 11
  },
  "2001": {
    F: 12
  },
  "2002": {
    F: 18
  },
  "2003": {
    F: 24
  },
  "2004": {
    F: 13
  },
  "2005": {
    F: 20
  },
  "2006": {
    F: 19
  },
  "2007": {
    F: 20
  },
  "2008": {
    F: 28
  },
  "2009": {
    F: 11
  },
  "2011": {
    F: 15
  },
  "2012": {
    F: 12
  },
  "2013": {
    F: 15
  },
  "2016": {
    F: 10
  }
};
const Abby = {
  "1976": {
    F: 10
  },
  "1977": {
    F: 31
  },
  "1978": {
    F: 16
  },
  "1979": {
    F: 25
  },
  "1980": {
    F: 36
  },
  "1981": {
    F: 40
  },
  "1982": {
    F: 34
  },
  "1983": {
    F: 36
  },
  "1984": {
    F: 31
  },
  "1985": {
    F: 22
  },
  "1986": {
    F: 35
  },
  "1987": {
    F: 41
  },
  "1988": {
    F: 39
  },
  "1989": {
    F: 23
  },
  "1990": {
    F: 42
  },
  "1991": {
    F: 38
  },
  "1992": {
    F: 48
  },
  "1993": {
    F: 29
  },
  "1994": {
    F: 31
  },
  "1995": {
    F: 36
  },
  "1996": {
    F: 33
  },
  "1997": {
    F: 32
  },
  "1998": {
    F: 25
  },
  "1999": {
    F: 44
  },
  "2000": {
    F: 39
  },
  "2001": {
    F: 65
  },
  "2002": {
    F: 51
  },
  "2003": {
    F: 61
  },
  "2004": {
    F: 55
  },
  "2005": {
    F: 59
  },
  "2006": {
    F: 55
  },
  "2007": {
    F: 54
  },
  "2008": {
    F: 54
  },
  "2009": {
    F: 49
  },
  "2010": {
    F: 38
  },
  "2011": {
    F: 35
  },
  "2012": {
    F: 23
  },
  "2013": {
    F: 19
  },
  "2014": {
    F: 12
  },
  "2015": {
    F: 18
  },
  "2016": {
    F: 14
  },
  "2017": {
    F: 14
  },
  "2018": {
    F: 12
  },
  "2019": {
    F: 20
  },
  "2021": {
    F: 13
  }
};
const Abdul = {
  "2011": {
    M: 10
  },
  "2017": {
    M: 11
  },
  "2018": {
    M: 12
  }
};
const Abel = {
  "2010": {
    M: 10
  },
  "2012": {
    M: 21
  },
  "2013": {
    M: 22
  },
  "2014": {
    M: 22
  },
  "2015": {
    M: 33
  },
  "2016": {
    M: 26
  },
  "2017": {
    M: 28
  },
  "2018": {
    M: 22
  },
  "2019": {
    M: 29
  },
  "2020": {
    M: 26
  },
  "2021": {
    M: 28
  }
};
const Abigail = {
  "1972": {
    F: 10
  },
  "1976": {
    F: 10
  },
  "1977": {
    F: 19
  },
  "1978": {
    F: 19
  },
  "1979": {
    F: 21
  },
  "1980": {
    F: 21
  },
  "1981": {
    F: 21
  },
  "1982": {
    F: 19
  },
  "1983": {
    F: 24
  },
  "1984": {
    F: 23
  },
  "1985": {
    F: 32
  },
  "1986": {
    F: 43
  },
  "1987": {
    F: 33
  },
  "1988": {
    F: 35
  },
  "1989": {
    F: 33
  },
  "1990": {
    F: 46
  },
  "1991": {
    F: 51
  },
  "1992": {
    F: 52
  },
  "1993": {
    F: 48
  },
  "1994": {
    F: 51
  },
  "1995": {
    F: 58
  },
  "1996": {
    F: 61
  },
  "1997": {
    F: 68
  },
  "1998": {
    F: 81
  },
  "1999": {
    F: 80
  },
  "2000": {
    F: 63
  },
  "2001": {
    F: 65
  },
  "2002": {
    F: 88
  },
  "2003": {
    F: 87
  },
  "2004": {
    F: 81
  },
  "2005": {
    F: 75
  },
  "2006": {
    F: 82
  },
  "2007": {
    F: 103
  },
  "2008": {
    F: 83
  },
  "2009": {
    F: 89
  },
  "2010": {
    F: 114
  },
  "2011": {
    F: 97
  },
  "2012": {
    F: 94
  },
  "2013": {
    F: 79
  },
  "2014": {
    F: 99
  },
  "2015": {
    F: 98
  },
  "2016": {
    F: 72
  },
  "2017": {
    F: 74
  },
  "2018": {
    F: 82
  },
  "2019": {
    F: 101
  },
  "2020": {
    F: 64
  },
  "2021": {
    F: 71
  }
};
const Abraham = {
  "1975": {
    M: 10
  },
  "1985": {
    M: 17
  },
  "1986": {
    M: 15
  },
  "1987": {
    M: 15
  },
  "1988": {
    M: 13
  },
  "1989": {
    M: 16
  },
  "1990": {
    M: 13
  },
  "1991": {
    M: 11
  },
  "1993": {
    M: 13
  },
  "1995": {
    M: 16
  },
  "1996": {
    M: 11
  },
  "1997": {
    M: 16
  },
  "1999": {
    M: 10
  },
  "2000": {
    M: 15
  },
  "2002": {
    M: 10
  },
  "2007": {
    M: 14
  },
  "2009": {
    M: 11
  },
  "2014": {
    M: 10
  },
  "2015": {
    M: 10
  },
  "2016": {
    M: 11
  },
  "2018": {
    M: 13
  },
  "2019": {
    M: 11
  },
  "2020": {
    M: 17
  }
};
const Acacia = {
  "1998": {
    F: 10
  },
  "2003": {
    F: 10
  },
  "2004": {
    F: 19
  },
  "2005": {
    F: 16
  },
  "2006": {
    F: 12
  },
  "2007": {
    F: 19
  },
  "2008": {
    F: 20
  },
  "2009": {
    F: 13
  },
  "2010": {
    F: 18
  },
  "2011": {
    F: 12
  },
  "2016": {
    F: 10
  },
  "2017": {
    F: 10
  },
  "2018": {
    F: 10
  }
};
const Ace = {
  "2015": {
    M: 11
  },
  "2016": {
    M: 13
  },
  "2017": {
    M: 10
  },
  "2019": {
    M: 16
  },
  "2020": {
    M: 18
  },
  "2021": {
    M: 24
  }
};
const Ada = {
  "1900": {
    F: 67
  },
  "1901": {
    F: 59
  },
  "1902": {
    F: 64
  },
  "1903": {
    F: 79
  },
  "1904": {
    F: 73
  },
  "1905": {
    F: 73
  },
  "1906": {
    F: 63
  },
  "1907": {
    F: 68
  },
  "1908": {
    F: 67
  },
  "1909": {
    F: 47
  },
  "1910": {
    F: 57
  },
  "1911": {
    F: 52
  },
  "1912": {
    F: 57
  },
  "1913": {
    F: 44
  },
  "1914": {
    F: 46
  },
  "1915": {
    F: 51
  },
  "1916": {
    F: 53
  },
  "1917": {
    F: 43
  },
  "1918": {
    F: 42
  },
  "1919": {
    F: 34
  },
  "1920": {
    F: 39
  },
  "1921": {
    F: 31
  },
  "1922": {
    F: 27
  },
  "1923": {
    F: 33
  },
  "1924": {
    F: 20
  },
  "1925": {
    F: 23
  },
  "1926": {
    F: 23
  },
  "1927": {
    F: 22
  },
  "1929": {
    F: 10
  },
  "1930": {
    F: 19
  },
  "1931": {
    F: 15
  },
  "1932": {
    F: 12
  },
  "1935": {
    F: 12
  },
  "1936": {
    F: 12
  },
  "1937": {
    F: 16
  },
  "1938": {
    F: 12
  },
  "1939": {
    F: 12
  },
  "1940": {
    F: 10
  },
  "1941": {
    F: 11
  },
  "2009": {
    F: 10
  },
  "2011": {
    F: 19
  },
  "2012": {
    F: 13
  },
  "2013": {
    F: 19
  },
  "2014": {
    F: 23
  },
  "2015": {
    F: 29
  },
  "2016": {
    F: 25
  },
  "2017": {
    F: 30
  },
  "2018": {
    F: 27
  },
  "2019": {
    F: 42
  },
  "2020": {
    F: 46
  },
  "2021": {
    F: 54
  }
};
const Adaline = {
  "2017": {
    F: 10
  },
  "2018": {
    F: 14
  },
  "2019": {
    F: 15
  },
  "2020": {
    F: 15
  },
  "2021": {
    F: 13
  }
};
const Adalyn = {
  "2015": {
    F: 12
  },
  "2018": {
    F: 11
  },
  "2020": {
    F: 14
  }
};
const Adam = {
  "1901": {
    M: 11
  },
  "1902": {
    M: 10
  },
  "1962": {
    M: 12
  },
  "1963": {
    M: 19
  },
  "1964": {
    M: 54
  },
  "1965": {
    M: 68
  },
  "1966": {
    M: 70
  },
  "1967": {
    M: 95
  },
  "1968": {
    M: 80
  },
  "1969": {
    M: 89
  },
  "1970": {
    M: 105
  },
  "1971": {
    M: 119
  },
  "1972": {
    M: 129
  },
  "1973": {
    M: 167
  },
  "1974": {
    M: 153
  },
  "1975": {
    M: 138
  },
  "1976": {
    M: 149
  },
  "1977": {
    M: 129
  },
  "1978": {
    M: 151
  },
  "1979": {
    M: 187
  },
  "1980": {
    M: 226
  },
  "1981": {
    M: 206
  },
  "1982": {
    M: 278
  },
  "1983": {
    M: 279
  },
  "1984": {
    M: 279
  },
  "1985": {
    M: 323
  },
  "1986": {
    M: 335
  },
  "1987": {
    M: 328
  },
  "1988": {
    M: 326
  },
  "1989": {
    M: 258
  },
  "1990": {
    M: 202
  },
  "1991": {
    M: 194
  },
  "1992": {
    M: 202
  },
  "1993": {
    M: 182
  },
  "1994": {
    M: 129
  },
  "1995": {
    M: 139
  },
  "1996": {
    M: 153
  },
  "1997": {
    M: 106
  },
  "1998": {
    M: 118
  },
  "1999": {
    M: 104
  },
  "2000": {
    M: 108
  },
  "2001": {
    M: 110
  },
  "2002": {
    M: 121
  },
  "2003": {
    M: 120
  },
  "2004": {
    M: 97
  },
  "2005": {
    M: 68
  },
  "2006": {
    M: 100
  },
  "2007": {
    M: 75
  },
  "2008": {
    M: 87
  },
  "2009": {
    M: 67
  },
  "2010": {
    M: 80
  },
  "2011": {
    M: 68
  },
  "2012": {
    M: 58
  },
  "2013": {
    M: 67
  },
  "2014": {
    M: 68
  },
  "2015": {
    M: 66
  },
  "2016": {
    M: 62
  },
  "2017": {
    M: 53
  },
  "2018": {
    M: 54
  },
  "2019": {
    M: 63
  },
  "2020": {
    M: 58
  },
  "2021": {
    M: 52
  }
};
const Addison = {
  "2006": {
    F: 15
  },
  "2007": {
    F: 44
  },
  "2008": {
    F: 43
  },
  "2009": {
    F: 71
  },
  "2010": {
    F: 76
  },
  "2011": {
    F: 80
  },
  "2012": {
    F: 71
  },
  "2013": {
    F: 63
  },
  "2014": {
    F: 55
  },
  "2015": {
    F: 59
  },
  "2016": {
    F: 42
  },
  "2017": {
    F: 68
  },
  "2018": {
    F: 65
  },
  "2019": {
    F: 48
  },
  "2020": {
    F: 54
  },
  "2021": {
    F: 67
  }
};
const Addisyn = {
  "2014": {
    F: 10
  }
};
const Adelaide = {
  "1900": {
    F: 10
  },
  "1901": {
    F: 13
  },
  "1902": {
    F: 16
  },
  "1904": {
    F: 13
  },
  "1905": {
    F: 22
  },
  "1908": {
    F: 10
  },
  "1909": {
    F: 11
  },
  "1910": {
    F: 16
  },
  "1911": {
    F: 12
  },
  "1912": {
    F: 13
  },
  "1913": {
    F: 13
  },
  "1918": {
    F: 10
  },
  "2009": {
    F: 10
  },
  "2011": {
    F: 16
  },
  "2012": {
    F: 10
  },
  "2013": {
    F: 12
  },
  "2014": {
    F: 12
  },
  "2015": {
    F: 13
  },
  "2017": {
    F: 11
  },
  "2018": {
    F: 10
  },
  "2020": {
    F: 15
  },
  "2021": {
    F: 10
  }
};
const Adele = {
  "1938": {
    F: 21
  },
  "1939": {
    F: 15
  },
  "1940": {
    F: 21
  },
  "1941": {
    F: 12
  },
  "1944": {
    F: 14
  },
  "1946": {
    F: 17
  },
  "1947": {
    F: 16
  },
  "1948": {
    F: 15
  },
  "1949": {
    F: 16
  },
  "1950": {
    F: 12
  },
  "1951": {
    F: 31
  },
  "1952": {
    F: 26
  },
  "1953": {
    F: 19
  },
  "1954": {
    F: 23
  },
  "1955": {
    F: 22
  },
  "1956": {
    F: 29
  },
  "1957": {
    F: 26
  },
  "1958": {
    F: 28
  },
  "1959": {
    F: 32
  },
  "1960": {
    F: 40
  },
  "1961": {
    F: 30
  },
  "1962": {
    F: 26
  },
  "1963": {
    F: 31
  },
  "1964": {
    F: 36
  },
  "1965": {
    F: 30
  },
  "1966": {
    F: 35
  },
  "1967": {
    F: 26
  },
  "1968": {
    F: 46
  },
  "1969": {
    F: 38
  },
  "1970": {
    F: 40
  },
  "1971": {
    F: 44
  },
  "1972": {
    F: 37
  },
  "1973": {
    F: 48
  },
  "1974": {
    F: 31
  },
  "1975": {
    F: 18
  },
  "1976": {
    F: 30
  },
  "1977": {
    F: 28
  },
  "1978": {
    F: 23
  },
  "1979": {
    F: 19
  },
  "1980": {
    F: 26
  },
  "1981": {
    F: 32
  },
  "1982": {
    F: 25
  },
  "1983": {
    F: 17
  },
  "1984": {
    F: 17
  },
  "1985": {
    F: 18
  },
  "1986": {
    F: 13
  },
  "1987": {
    F: 15
  },
  "1988": {
    F: 16
  },
  "1989": {
    F: 11
  },
  "1990": {
    F: 12
  },
  "1991": {
    F: 12
  },
  "1993": {
    F: 16
  },
  "1994": {
    F: 13
  },
  "1998": {
    F: 13
  },
  "2012": {
    F: 11
  },
  "2013": {
    F: 10
  },
  "2014": {
    F: 15
  },
  "2015": {
    F: 11
  }
};
const Adeline = {
  "1905": {
    F: 11
  },
  "1906": {
    F: 13
  },
  "1907": {
    F: 12
  },
  "1910": {
    F: 12
  },
  "1911": {
    F: 10
  },
  "1912": {
    F: 11
  },
  "1914": {
    F: 11
  },
  "1915": {
    F: 15
  },
  "1918": {
    F: 11
  },
  "1921": {
    F: 10
  },
  "2015": {
    F: 16
  },
  "2016": {
    F: 22
  },
  "2017": {
    F: 23
  },
  "2018": {
    F: 28
  },
  "2019": {
    F: 25
  },
  "2020": {
    F: 22
  },
  "2021": {
    F: 39
  }
};
const Adelyn = {
  "2021": {
    F: 12
  }
};
const Aden = {
  "1996": {
    M: 11
  },
  "2006": {
    M: 10
  },
  "2008": {
    M: 10
  },
  "2009": {
    M: 14
  },
  "2010": {
    M: 20
  },
  "2011": {
    M: 10
  },
  "2013": {
    M: 10
  }
};
const Adrian = {
  "1930": {
    M: 10
  },
  "1938": {
    M: 11
  },
  "1939": {
    M: 16
  },
  "1940": {
    M: 16
  },
  "1941": {
    M: 27
  },
  "1942": {
    M: 14
  },
  "1943": {
    M: 15
  },
  "1944": {
    M: 17
  },
  "1945": {
    M: 21
  },
  "1946": {
    M: 19
  },
  "1947": {
    M: 20
  },
  "1948": {
    M: 34
  },
  "1949": {
    M: 21
  },
  "1950": {
    M: 40
  },
  "1951": {
    M: 33
  },
  "1952": {
    M: 33
  },
  "1953": {
    M: 38
  },
  "1954": {
    M: 43
  },
  "1955": {
    M: 45
  },
  "1956": {
    M: 35
  },
  "1957": {
    M: 48
  },
  "1958": {
    M: 46
  },
  "1959": {
    M: 67
  },
  "1960": {
    M: 71
  },
  "1961": {
    M: 79
  },
  "1962": {
    M: 96
  },
  "1963": {
    M: 71
  },
  "1964": {
    M: 71
  },
  "1965": {
    M: 89
  },
  "1966": {
    M: 84
  },
  "1967": {
    M: 114
  },
  "1968": {
    M: 114
  },
  "1969": {
    M: 134
  },
  "1970": {
    M: 102
  },
  "1971": {
    M: 107
  },
  "1972": {
    M: 119
  },
  "1973": {
    M: 132
  },
  "1974": {
    M: 96
  },
  "1975": {
    M: 93
  },
  "1976": {
    M: 83
  },
  "1977": {
    M: 107
  },
  "1978": {
    M: 83
  },
  "1979": {
    M: 63
  },
  "1980": {
    M: 77
  },
  "1981": {
    M: 62
  },
  "1982": {
    M: 66
  },
  "1983": {
    M: 59
  },
  "1984": {
    M: 66
  },
  "1985": {
    M: 53
  },
  "1986": {
    M: 59
  },
  "1987": {
    M: 47
  },
  "1988": {
    M: 46
  },
  "1989": {
    M: 51
  },
  "1990": {
    M: 31
  },
  "1991": {
    M: 33
  },
  "1992": {
    M: 35
  },
  "1993": {
    M: 29
  },
  "1994": {
    M: 20
  },
  "1995": {
    M: 21
  },
  "1996": {
    M: 23
  },
  "1997": {
    M: 13
  },
  "1998": {
    M: 19
  },
  "1999": {
    M: 18
  },
  "2000": {
    M: 17
  },
  "2001": {
    M: 15
  },
  "2002": {
    M: 14
  },
  "2003": {
    M: 20
  },
  "2004": {
    M: 21
  },
  "2005": {
    M: 15
  },
  "2006": {
    M: 20
  },
  "2007": {
    M: 18
  },
  "2008": {
    M: 21
  },
  "2009": {
    M: 19
  },
  "2010": {
    M: 20
  },
  "2011": {
    M: 21
  },
  "2012": {
    M: 14
  },
  "2013": {
    M: 20
  },
  "2014": {
    M: 14
  },
  "2015": {
    M: 18
  },
  "2016": {
    M: 11
  },
  "2017": {
    M: 18
  },
  "2018": {
    M: 15
  },
  "2019": {
    M: 15
  },
  "2020": {
    M: 15
  },
  "2021": {
    M: 19
  }
};
const Adriana = {
  "1993": {
    F: 14
  },
  "2003": {
    F: 12
  },
  "2010": {
    F: 10
  },
  "2012": {
    F: 10
  }
};
const Adrianne = {
  "1960": {
    F: 10
  },
  "1961": {
    F: 10
  },
  "1962": {
    F: 11
  }
};
const Adriel = {
  "2020": {
    M: 10
  }
};
const Adrienne = {
  "1931": {
    F: 13
  },
  "1932": {
    F: 15
  },
  "1933": {
    F: 15
  },
  "1934": {
    F: 17
  },
  "1935": {
    F: 22
  },
  "1936": {
    F: 23
  },
  "1937": {
    F: 20
  },
  "1938": {
    F: 27
  },
  "1939": {
    F: 33
  },
  "1940": {
    F: 42
  },
  "1941": {
    F: 38
  },
  "1942": {
    F: 44
  },
  "1943": {
    F: 48
  },
  "1944": {
    F: 48
  },
  "1945": {
    F: 50
  },
  "1946": {
    F: 54
  },
  "1947": {
    F: 69
  },
  "1948": {
    F: 63
  },
  "1949": {
    F: 58
  },
  "1950": {
    F: 86
  },
  "1951": {
    F: 64
  },
  "1952": {
    F: 82
  },
  "1953": {
    F: 61
  },
  "1954": {
    F: 64
  },
  "1955": {
    F: 81
  },
  "1956": {
    F: 71
  },
  "1957": {
    F: 69
  },
  "1958": {
    F: 78
  },
  "1959": {
    F: 95
  },
  "1960": {
    F: 77
  },
  "1961": {
    F: 90
  },
  "1962": {
    F: 68
  },
  "1963": {
    F: 66
  },
  "1964": {
    F: 65
  },
  "1965": {
    F: 46
  },
  "1966": {
    F: 50
  },
  "1967": {
    F: 53
  },
  "1968": {
    F: 42
  },
  "1969": {
    F: 34
  },
  "1970": {
    F: 63
  },
  "1971": {
    F: 34
  },
  "1972": {
    F: 40
  },
  "1973": {
    F: 29
  },
  "1974": {
    F: 34
  },
  "1975": {
    F: 25
  },
  "1976": {
    F: 24
  },
  "1977": {
    F: 24
  },
  "1978": {
    F: 11
  },
  "1979": {
    F: 18
  },
  "1980": {
    F: 15
  },
  "1981": {
    F: 11
  },
  "1982": {
    F: 12
  },
  "1983": {
    F: 13
  },
  "1984": {
    F: 13
  },
  "1985": {
    F: 12
  },
  "1986": {
    F: 11
  },
  "1987": {
    F: 12
  },
  "1988": {
    F: 11
  },
  "1992": {
    F: 10
  },
  "1998": {
    F: 10
  },
  "2000": {
    F: 11
  }
};
const Advik = {
  "2021": {
    M: 10
  }
};
const Agam = {
  "2019": {
    M: 12
  },
  "2020": {
    M: 10
  },
  "2021": {
    M: 10
  }
};
const Agnes = {
  "1900": {
    F: 117
  },
  "1901": {
    F: 105
  },
  "1902": {
    F: 113
  },
  "1903": {
    F: 131
  },
  "1904": {
    F: 91
  },
  "1905": {
    F: 122
  },
  "1906": {
    F: 131
  },
  "1907": {
    F: 108
  },
  "1908": {
    F: 135
  },
  "1909": {
    F: 118
  },
  "1910": {
    F: 123
  },
  "1911": {
    F: 116
  },
  "1912": {
    F: 132
  },
  "1913": {
    F: 127
  },
  "1914": {
    F: 113
  },
  "1915": {
    F: 103
  },
  "1916": {
    F: 106
  },
  "1917": {
    F: 111
  },
  "1918": {
    F: 85
  },
  "1919": {
    F: 90
  },
  "1920": {
    F: 80
  },
  "1921": {
    F: 62
  },
  "1922": {
    F: 76
  },
  "1923": {
    F: 72
  },
  "1924": {
    F: 65
  },
  "1925": {
    F: 64
  },
  "1926": {
    F: 58
  },
  "1927": {
    F: 58
  },
  "1928": {
    F: 51
  },
  "1929": {
    F: 41
  },
  "1930": {
    F: 33
  },
  "1931": {
    F: 47
  },
  "1932": {
    F: 28
  },
  "1933": {
    F: 37
  },
  "1934": {
    F: 30
  },
  "1935": {
    F: 34
  },
  "1936": {
    F: 28
  },
  "1937": {
    F: 27
  },
  "1938": {
    F: 18
  },
  "1939": {
    F: 13
  },
  "1940": {
    F: 16
  },
  "1941": {
    F: 20
  },
  "1942": {
    F: 17
  },
  "1943": {
    F: 14
  },
  "1944": {
    F: 14
  },
  "1945": {
    F: 21
  },
  "1946": {
    F: 17
  },
  "1947": {
    F: 12
  },
  "1948": {
    F: 10
  },
  "1949": {
    F: 12
  },
  "1950": {
    F: 18
  },
  "1951": {
    F: 11
  },
  "1952": {
    F: 11
  },
  "1953": {
    F: 10
  },
  "1954": {
    F: 10
  },
  "1956": {
    F: 10
  },
  "1957": {
    F: 15
  },
  "1958": {
    F: 18
  },
  "1959": {
    F: 14
  },
  "1960": {
    F: 11
  },
  "1961": {
    F: 12
  },
  "1963": {
    F: 12
  },
  "1965": {
    F: 13
  },
  "1967": {
    F: 12
  },
  "1969": {
    F: 10
  },
  "1971": {
    F: 11
  },
  "1973": {
    F: 10
  },
  "1974": {
    F: 12
  },
  "1979": {
    F: 10
  },
  "1984": {
    F: 10
  },
  "1986": {
    F: 14
  },
  "1989": {
    F: 11
  },
  "1993": {
    F: 10
  },
  "2002": {
    F: 12
  },
  "2008": {
    F: 12
  },
  "2011": {
    F: 10
  },
  "2013": {
    F: 12
  },
  "2014": {
    F: 10
  },
  "2018": {
    F: 14
  }
};
const Ahmed = {
  "2009": {
    M: 10
  },
  "2010": {
    M: 11
  }
};
const Aidan = {
  "1970": {
    M: 11
  },
  "1971": {
    M: 13
  },
  "1972": {
    M: 17
  },
  "1973": {
    M: 17
  },
  "1974": {
    M: 19
  },
  "1975": {
    M: 17
  },
  "1976": {
    M: 20
  },
  "1977": {
    M: 27
  },
  "1978": {
    M: 21
  },
  "1979": {
    M: 33
  },
  "1980": {
    M: 32
  },
  "1981": {
    M: 34
  },
  "1982": {
    M: 32
  },
  "1983": {
    M: 27
  },
  "1984": {
    M: 32
  },
  "1985": {
    M: 23
  },
  "1986": {
    M: 32
  },
  "1987": {
    M: 31
  },
  "1988": {
    M: 33
  },
  "1989": {
    M: 31
  },
  "1990": {
    M: 40
  },
  "1991": {
    M: 42
  },
  "1992": {
    M: 51
  },
  "1993": {
    M: 77
  },
  "1994": {
    M: 60
  },
  "1995": {
    M: 60
  },
  "1996": {
    M: 55
  },
  "1997": {
    M: 83
  },
  "1998": {
    M: 82
  },
  "1999": {
    M: 68
  },
  "2000": {
    M: 70
  },
  "2001": {
    M: 87
  },
  "2002": {
    M: 74
  },
  "2003": {
    M: 85
  },
  "2004": {
    M: 69
  },
  "2005": {
    M: 85
  },
  "2006": {
    M: 76
  },
  "2007": {
    M: 57
  },
  "2008": {
    M: 92
  },
  "2009": {
    M: 79
  },
  "2010": {
    M: 69
  },
  "2011": {
    M: 61
  },
  "2012": {
    M: 50
  },
  "2013": {
    M: 53
  },
  "2014": {
    M: 46
  },
  "2015": {
    M: 36
  },
  "2016": {
    M: 38
  },
  "2017": {
    M: 33
  },
  "2018": {
    M: 27
  },
  "2019": {
    M: 26
  },
  "2020": {
    M: 31
  },
  "2021": {
    M: 24
  }
};
const Aiden = {
  "1992": {
    M: 15
  },
  "1993": {
    M: 18
  },
  "1994": {
    M: 17
  },
  "1996": {
    M: 18
  },
  "1997": {
    M: 19
  },
  "1998": {
    M: 26
  },
  "1999": {
    M: 18
  },
  "2000": {
    M: 23
  },
  "2001": {
    M: 28
  },
  "2002": {
    M: 29
  },
  "2003": {
    M: 31
  },
  "2004": {
    M: 36
  },
  "2005": {
    M: 36
  },
  "2006": {
    M: 32
  },
  "2007": {
    M: 37
  },
  "2008": {
    M: 56
  },
  "2009": {
    M: 72
  },
  "2010": {
    M: 78
  },
  "2011": {
    M: 106
  },
  "2012": {
    M: 68
  },
  "2013": {
    M: 62
  },
  "2014": {
    M: 73
  },
  "2015": {
    M: 89
  },
  "2016": {
    M: 91
  },
  "2017": {
    M: 93
  },
  "2018": {
    M: 69
  },
  "2019": {
    M: 57
  },
  "2020": {
    M: 62
  },
  "2021": {
    M: 61
  }
};
const Aila = {
  "2018": {
    F: 11
  },
  "2020": {
    F: 10
  },
  "2021": {
    F: 12
  }
};
const Aileen = {
  "1900": {
    F: 24
  },
  "1901": {
    F: 19
  },
  "1902": {
    F: 14
  },
  "1903": {
    F: 29
  },
  "1904": {
    F: 19
  },
  "1905": {
    F: 17
  },
  "1906": {
    F: 19
  },
  "1907": {
    F: 28
  },
  "1908": {
    F: 21
  },
  "1909": {
    F: 17
  },
  "1910": {
    F: 21
  },
  "1911": {
    F: 25
  },
  "1912": {
    F: 27
  },
  "1913": {
    F: 33
  },
  "1914": {
    F: 34
  },
  "1915": {
    F: 25
  },
  "1916": {
    F: 28
  },
  "1917": {
    F: 21
  },
  "1918": {
    F: 15
  },
  "1919": {
    F: 31
  },
  "1920": {
    F: 24
  },
  "1921": {
    F: 25
  },
  "1922": {
    F: 31
  },
  "1923": {
    F: 50
  },
  "1924": {
    F: 24
  },
  "1925": {
    F: 38
  },
  "1926": {
    F: 38
  },
  "1927": {
    F: 41
  },
  "1928": {
    F: 34
  },
  "1929": {
    F: 39
  },
  "1930": {
    F: 42
  },
  "1931": {
    F: 28
  },
  "1932": {
    F: 32
  },
  "1933": {
    F: 25
  },
  "1934": {
    F: 24
  },
  "1935": {
    F: 28
  },
  "1936": {
    F: 27
  },
  "1937": {
    F: 26
  },
  "1938": {
    F: 26
  },
  "1939": {
    F: 28
  },
  "1940": {
    F: 29
  },
  "1941": {
    F: 25
  },
  "1942": {
    F: 18
  },
  "1943": {
    F: 20
  },
  "1944": {
    F: 24
  },
  "1945": {
    F: 18
  },
  "1946": {
    F: 25
  },
  "1947": {
    F: 25
  },
  "1948": {
    F: 20
  },
  "1949": {
    F: 16
  },
  "1950": {
    F: 25
  },
  "1951": {
    F: 15
  },
  "1952": {
    F: 21
  },
  "1953": {
    F: 20
  },
  "1954": {
    F: 16
  },
  "1955": {
    F: 15
  },
  "1956": {
    F: 13
  },
  "1958": {
    F: 14
  },
  "1959": {
    F: 16
  },
  "1960": {
    F: 11
  },
  "1961": {
    F: 11
  },
  "1962": {
    F: 13
  },
  "1963": {
    F: 11
  },
  "1965": {
    F: 11
  }
};
const Ailsa = {
  "1909": {
    F: 13
  },
  "1910": {
    F: 19
  },
  "1911": {
    F: 12
  },
  "1912": {
    F: 14
  },
  "1913": {
    F: 18
  },
  "1914": {
    F: 24
  },
  "1915": {
    F: 18
  },
  "1916": {
    F: 23
  },
  "1917": {
    F: 24
  },
  "1918": {
    F: 28
  },
  "1919": {
    F: 23
  },
  "1920": {
    F: 31
  },
  "1921": {
    F: 23
  },
  "1922": {
    F: 34
  },
  "1923": {
    F: 20
  },
  "1924": {
    F: 32
  },
  "1925": {
    F: 30
  },
  "1926": {
    F: 44
  },
  "1927": {
    F: 40
  },
  "1928": {
    F: 39
  },
  "1929": {
    F: 33
  },
  "1930": {
    F: 35
  },
  "1931": {
    F: 33
  },
  "1932": {
    F: 27
  },
  "1933": {
    F: 32
  },
  "1934": {
    F: 39
  },
  "1935": {
    F: 22
  },
  "1936": {
    F: 21
  },
  "1937": {
    F: 25
  },
  "1938": {
    F: 22
  },
  "1939": {
    F: 19
  },
  "1940": {
    F: 12
  },
  "1941": {
    F: 18
  },
  "1942": {
    F: 20
  },
  "1943": {
    F: 21
  },
  "1944": {
    F: 28
  },
  "1945": {
    F: 25
  },
  "1946": {
    F: 21
  },
  "1947": {
    F: 12
  },
  "1948": {
    F: 12
  },
  "1949": {
    F: 10
  },
  "1950": {
    F: 10
  },
  "1951": {
    F: 11
  },
  "1953": {
    F: 13
  },
  "1954": {
    F: 13
  },
  "1955": {
    F: 15
  },
  "1956": {
    F: 10
  },
  "1961": {
    F: 11
  }
};
const Aimee = {
  "1975": {
    F: 13
  },
  "1976": {
    F: 24
  },
  "1977": {
    F: 31
  },
  "1978": {
    F: 44
  },
  "1979": {
    F: 66
  },
  "1980": {
    F: 83
  },
  "1981": {
    F: 81
  },
  "1982": {
    F: 113
  },
  "1983": {
    F: 125
  },
  "1984": {
    F: 104
  },
  "1985": {
    F: 109
  },
  "1986": {
    F: 96
  },
  "1987": {
    F: 96
  },
  "1988": {
    F: 87
  },
  "1989": {
    F: 107
  },
  "1990": {
    F: 89
  },
  "1991": {
    F: 98
  },
  "1992": {
    F: 99
  },
  "1993": {
    F: 91
  },
  "1994": {
    F: 80
  },
  "1995": {
    F: 77
  },
  "1996": {
    F: 58
  },
  "1997": {
    F: 80
  },
  "1998": {
    F: 95
  },
  "1999": {
    F: 79
  },
  "2000": {
    F: 71
  },
  "2001": {
    F: 61
  },
  "2002": {
    F: 56
  },
  "2003": {
    F: 51
  },
  "2004": {
    F: 54
  },
  "2005": {
    F: 62
  },
  "2006": {
    F: 44
  },
  "2007": {
    F: 39
  },
  "2008": {
    F: 39
  },
  "2009": {
    F: 25
  },
  "2010": {
    F: 31
  },
  "2011": {
    F: 21
  },
  "2012": {
    F: 26
  },
  "2013": {
    F: 14
  },
  "2014": {
    F: 18
  },
  "2016": {
    F: 15
  },
  "2018": {
    F: 10
  }
};
const Aisha = {
  "2001": {
    F: 12
  },
  "2002": {
    F: 13
  },
  "2003": {
    F: 12
  },
  "2004": {
    F: 13
  },
  "2005": {
    F: 10
  },
  "2006": {
    F: 11
  },
  "2007": {
    F: 13
  },
  "2008": {
    F: 13
  },
  "2010": {
    F: 10
  },
  "2011": {
    F: 16
  },
  "2012": {
    F: 12
  },
  "2014": {
    F: 18
  },
  "2015": {
    F: 17
  },
  "2017": {
    F: 18
  },
  "2018": {
    F: 10
  },
  "2020": {
    F: 10
  },
  "2021": {
    F: 13
  }
};
const Aiyana = {
  "2016": {
    F: 13
  },
  "2017": {
    F: 10
  }
};
const Aj = {
  "2016": {
    M: 13
  }
};
const Ajay = {
  "2013": {
    M: 11
  }
};
const Akira = {
  "2020": {
    F: 12
  },
  "2021": {
    F: 12
  }
};
const Alaina = {
  "1981": {
    F: 11
  },
  "1982": {
    F: 11
  },
  "1984": {
    F: 12
  },
  "1986": {
    F: 10
  }
};
const Alan = {
  "1900": {
    M: 35
  },
  "1901": {
    M: 28
  },
  "1902": {
    M: 33
  },
  "1903": {
    M: 40
  },
  "1904": {
    M: 43
  },
  "1905": {
    M: 49
  },
  "1906": {
    M: 50
  },
  "1907": {
    M: 51
  },
  "1908": {
    M: 67
  },
  "1909": {
    M: 62
  },
  "1910": {
    M: 65
  },
  "1911": {
    M: 79
  },
  "1912": {
    M: 80
  },
  "1913": {
    M: 108
  },
  "1914": {
    M: 123
  },
  "1915": {
    M: 99
  },
  "1916": {
    M: 92
  },
  "1917": {
    M: 126
  },
  "1918": {
    M: 88
  },
  "1919": {
    M: 89
  },
  "1920": {
    M: 123
  },
  "1921": {
    M: 139
  },
  "1922": {
    M: 136
  },
  "1923": {
    M: 130
  },
  "1924": {
    M: 144
  },
  "1925": {
    M: 153
  },
  "1926": {
    M: 190
  },
  "1927": {
    M: 170
  },
  "1928": {
    M: 146
  },
  "1929": {
    M: 160
  },
  "1930": {
    M: 161
  },
  "1931": {
    M: 147
  },
  "1932": {
    M: 140
  },
  "1933": {
    M: 159
  },
  "1934": {
    M: 156
  },
  "1935": {
    M: 166
  },
  "1936": {
    M: 116
  },
  "1937": {
    M: 169
  },
  "1938": {
    M: 167
  },
  "1939": {
    M: 168
  },
  "1940": {
    M: 237
  },
  "1941": {
    M: 256
  },
  "1942": {
    M: 244
  },
  "1943": {
    M: 206
  },
  "1944": {
    M: 269
  },
  "1945": {
    M: 301
  },
  "1946": {
    M: 316
  },
  "1947": {
    M: 361
  },
  "1948": {
    M: 343
  },
  "1949": {
    M: 385
  },
  "1950": {
    M: 354
  },
  "1951": {
    M: 384
  },
  "1952": {
    M: 379
  },
  "1953": {
    M: 354
  },
  "1954": {
    M: 375
  },
  "1955": {
    M: 377
  },
  "1956": {
    M: 329
  },
  "1957": {
    M: 346
  },
  "1958": {
    M: 376
  },
  "1959": {
    M: 338
  },
  "1960": {
    M: 295
  },
  "1961": {
    M: 293
  },
  "1962": {
    M: 273
  },
  "1963": {
    M: 256
  },
  "1964": {
    M: 246
  },
  "1965": {
    M: 191
  },
  "1966": {
    M: 171
  },
  "1967": {
    M: 198
  },
  "1968": {
    M: 177
  },
  "1969": {
    M: 147
  },
  "1970": {
    M: 140
  },
  "1971": {
    M: 120
  },
  "1972": {
    M: 102
  },
  "1973": {
    M: 78
  },
  "1974": {
    M: 94
  },
  "1975": {
    M: 80
  },
  "1976": {
    M: 64
  },
  "1977": {
    M: 64
  },
  "1978": {
    M: 64
  },
  "1979": {
    M: 58
  },
  "1980": {
    M: 52
  },
  "1981": {
    M: 53
  },
  "1982": {
    M: 60
  },
  "1983": {
    M: 46
  },
  "1984": {
    M: 54
  },
  "1985": {
    M: 55
  },
  "1986": {
    M: 62
  },
  "1987": {
    M: 50
  },
  "1988": {
    M: 55
  },
  "1989": {
    M: 40
  },
  "1990": {
    M: 39
  },
  "1991": {
    M: 34
  },
  "1992": {
    M: 27
  },
  "1993": {
    M: 32
  },
  "1994": {
    M: 30
  },
  "1995": {
    M: 18
  },
  "1996": {
    M: 22
  },
  "1997": {
    M: 25
  },
  "1998": {
    M: 17
  },
  "1999": {
    M: 24
  },
  "2000": {
    M: 24
  },
  "2001": {
    M: 21
  },
  "2002": {
    M: 13
  },
  "2003": {
    M: 13
  },
  "2004": {
    M: 13
  },
  "2005": {
    M: 17
  },
  "2006": {
    M: 14
  },
  "2007": {
    M: 13
  },
  "2008": {
    M: 10
  },
  "2012": {
    M: 21
  },
  "2014": {
    M: 13
  }
};
const Alana = {
  "1965": {
    F: 12
  },
  "1966": {
    F: 10
  },
  "1967": {
    F: 10
  },
  "1968": {
    F: 17
  },
  "1969": {
    F: 20
  },
  "1970": {
    F: 31
  },
  "1971": {
    F: 10
  },
  "1972": {
    F: 15
  },
  "1973": {
    F: 22
  },
  "1974": {
    F: 19
  },
  "1975": {
    F: 25
  },
  "1976": {
    F: 21
  },
  "1977": {
    F: 16
  },
  "1978": {
    F: 18
  },
  "1979": {
    F: 39
  },
  "1980": {
    F: 54
  },
  "1981": {
    F: 64
  },
  "1982": {
    F: 89
  },
  "1983": {
    F: 95
  },
  "1984": {
    F: 87
  },
  "1985": {
    F: 81
  },
  "1986": {
    F: 78
  },
  "1987": {
    F: 67
  },
  "1988": {
    F: 54
  },
  "1989": {
    F: 59
  },
  "1990": {
    F: 77
  },
  "1991": {
    F: 79
  },
  "1992": {
    F: 88
  },
  "1993": {
    F: 64
  },
  "1994": {
    F: 50
  },
  "1995": {
    F: 48
  },
  "1996": {
    F: 38
  },
  "1997": {
    F: 60
  },
  "1998": {
    F: 34
  },
  "1999": {
    F: 32
  },
  "2000": {
    F: 33
  },
  "2001": {
    F: 28
  },
  "2002": {
    F: 24
  },
  "2003": {
    F: 24
  },
  "2004": {
    F: 26
  },
  "2005": {
    F: 29
  },
  "2006": {
    F: 18
  },
  "2007": {
    F: 30
  },
  "2008": {
    F: 20
  },
  "2009": {
    F: 25
  },
  "2010": {
    F: 15
  },
  "2011": {
    F: 13
  },
  "2012": {
    F: 14
  },
  "2013": {
    F: 14
  },
  "2014": {
    F: 12
  },
  "2015": {
    F: 10
  },
  "2016": {
    F: 14
  },
  "2017": {
    F: 17
  },
  "2019": {
    F: 15
  },
  "2021": {
    F: 17
  }
};
const Alanah = {
  "1991": {
    F: 10
  },
  "1994": {
    F: 10
  }
};
const Alanna = {
  "1990": {
    F: 12
  }
};
const Alannah = {
  "1986": {
    F: 16
  },
  "1990": {
    F: 35
  },
  "1991": {
    F: 38
  },
  "1992": {
    F: 24
  },
  "1993": {
    F: 17
  },
  "1994": {
    F: 14
  },
  "1997": {
    F: 14
  },
  "2002": {
    F: 10
  }
};
const Alastair = {
  "1933": {
    M: 11
  },
  "1939": {
    M: 19
  },
  "1940": {
    M: 19
  },
  "1941": {
    M: 21
  },
  "1942": {
    M: 15
  },
  "1943": {
    M: 16
  },
  "1944": {
    M: 15
  },
  "1945": {
    M: 21
  },
  "1946": {
    M: 35
  },
  "1947": {
    M: 29
  },
  "1948": {
    M: 32
  },
  "1949": {
    M: 39
  },
  "1950": {
    M: 34
  },
  "1951": {
    M: 30
  },
  "1952": {
    M: 36
  },
  "1953": {
    M: 19
  },
  "1954": {
    M: 23
  },
  "1955": {
    M: 26
  },
  "1956": {
    M: 24
  },
  "1957": {
    M: 21
  },
  "1958": {
    M: 34
  },
  "1959": {
    M: 34
  },
  "1960": {
    M: 23
  },
  "1961": {
    M: 31
  },
  "1962": {
    M: 22
  },
  "1963": {
    M: 37
  },
  "1964": {
    M: 36
  },
  "1965": {
    M: 38
  },
  "1966": {
    M: 43
  },
  "1967": {
    M: 29
  },
  "1968": {
    M: 39
  },
  "1969": {
    M: 36
  },
  "1970": {
    M: 42
  },
  "1971": {
    M: 40
  },
  "1972": {
    M: 29
  },
  "1973": {
    M: 37
  },
  "1974": {
    M: 22
  },
  "1975": {
    M: 22
  },
  "1976": {
    M: 28
  },
  "1977": {
    M: 22
  },
  "1978": {
    M: 25
  },
  "1979": {
    M: 26
  },
  "1980": {
    M: 30
  },
  "1981": {
    M: 21
  },
  "1982": {
    M: 23
  },
  "1983": {
    M: 23
  },
  "1984": {
    M: 26
  },
  "1985": {
    M: 20
  },
  "1986": {
    M: 20
  },
  "1987": {
    M: 19
  },
  "1988": {
    M: 18
  },
  "1989": {
    M: 12
  },
  "1990": {
    M: 20
  },
  "1991": {
    M: 16
  },
  "1993": {
    M: 13
  },
  "1994": {
    M: 11
  },
  "1995": {
    M: 10
  }
};
const Alaya = {
  "2021": {
    F: 11
  }
};
const Alayna = {
  "2014": {
    F: 11
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 12
  },
  "2019": {
    F: 14
  },
  "2021": {
    F: 11
  }
};
const Alba = {
  "2014": {
    F: 11
  },
  "2015": {
    F: 10
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 14
  },
  "2018": {
    F: 13
  },
  "2019": {
    F: 15
  },
  "2020": {
    F: 15
  },
  "2021": {
    F: 13
  }
};
const Albert = {
  "1900": {
    M: 196
  },
  "1901": {
    M: 251
  },
  "1902": {
    M: 275
  },
  "1903": {
    M: 234
  },
  "1904": {
    M: 265
  },
  "1905": {
    M: 224
  },
  "1906": {
    M: 247
  },
  "1907": {
    M: 227
  },
  "1908": {
    M: 216
  },
  "1909": {
    M: 229
  },
  "1910": {
    M: 241
  },
  "1911": {
    M: 218
  },
  "1912": {
    M: 200
  },
  "1913": {
    M: 224
  },
  "1914": {
    M: 228
  },
  "1915": {
    M: 256
  },
  "1916": {
    M: 246
  },
  "1917": {
    M: 223
  },
  "1918": {
    M: 182
  },
  "1919": {
    M: 153
  },
  "1920": {
    M: 197
  },
  "1921": {
    M: 171
  },
  "1922": {
    M: 159
  },
  "1923": {
    M: 159
  },
  "1924": {
    M: 148
  },
  "1925": {
    M: 133
  },
  "1926": {
    M: 123
  },
  "1927": {
    M: 120
  },
  "1928": {
    M: 111
  },
  "1929": {
    M: 104
  },
  "1930": {
    M: 97
  },
  "1931": {
    M: 99
  },
  "1932": {
    M: 101
  },
  "1933": {
    M: 90
  },
  "1934": {
    M: 79
  },
  "1935": {
    M: 75
  },
  "1936": {
    M: 76
  },
  "1937": {
    M: 74
  },
  "1938": {
    M: 56
  },
  "1939": {
    M: 58
  },
  "1940": {
    M: 76
  },
  "1941": {
    M: 64
  },
  "1942": {
    M: 58
  },
  "1943": {
    M: 59
  },
  "1944": {
    M: 52
  },
  "1945": {
    M: 37
  },
  "1946": {
    M: 45
  },
  "1947": {
    M: 41
  },
  "1948": {
    M: 43
  },
  "1949": {
    M: 40
  },
  "1950": {
    M: 49
  },
  "1951": {
    M: 35
  },
  "1952": {
    M: 34
  },
  "1953": {
    M: 29
  },
  "1954": {
    M: 33
  },
  "1955": {
    M: 27
  },
  "1956": {
    M: 41
  },
  "1957": {
    M: 33
  },
  "1958": {
    M: 30
  },
  "1959": {
    M: 27
  },
  "1960": {
    M: 40
  },
  "1961": {
    M: 32
  },
  "1962": {
    M: 36
  },
  "1963": {
    M: 27
  },
  "1964": {
    M: 44
  },
  "1965": {
    M: 24
  },
  "1966": {
    M: 19
  },
  "1967": {
    M: 19
  },
  "1968": {
    M: 26
  },
  "1969": {
    M: 24
  },
  "1970": {
    M: 28
  },
  "1971": {
    M: 32
  },
  "1972": {
    M: 27
  },
  "1973": {
    M: 15
  },
  "1974": {
    M: 24
  },
  "1975": {
    M: 21
  },
  "1976": {
    M: 17
  },
  "1977": {
    M: 15
  },
  "1978": {
    M: 20
  },
  "1979": {
    M: 11
  },
  "1981": {
    M: 14
  },
  "1982": {
    M: 20
  },
  "1983": {
    M: 16
  },
  "1984": {
    M: 27
  },
  "1985": {
    M: 15
  },
  "1986": {
    M: 11
  },
  "1987": {
    M: 17
  },
  "1988": {
    M: 20
  },
  "1989": {
    M: 22
  },
  "1990": {
    M: 21
  },
  "1991": {
    M: 20
  },
  "1992": {
    M: 13
  },
  "1993": {
    M: 18
  },
  "1994": {
    M: 15
  },
  "1995": {
    M: 17
  },
  "1996": {
    M: 13
  },
  "1997": {
    M: 18
  },
  "1998": {
    M: 18
  },
  "1999": {
    M: 14
  },
  "2000": {
    M: 10
  },
  "2001": {
    M: 14
  },
  "2002": {
    M: 12
  },
  "2003": {
    M: 15
  },
  "2004": {
    M: 18
  },
  "2005": {
    M: 10
  },
  "2006": {
    M: 15
  },
  "2007": {
    M: 10
  },
  "2008": {
    M: 20
  },
  "2010": {
    M: 14
  },
  "2013": {
    M: 11
  },
  "2014": {
    M: 14
  },
  "2015": {
    M: 21
  },
  "2016": {
    M: 15
  },
  "2017": {
    M: 26
  },
  "2018": {
    M: 18
  },
  "2019": {
    M: 21
  },
  "2020": {
    M: 25
  },
  "2021": {
    M: 24
  }
};
const Albie = {
  "2015": {
    M: 11
  },
  "2016": {
    M: 16
  },
  "2017": {
    M: 19
  },
  "2018": {
    M: 16
  },
  "2019": {
    M: 24
  },
  "2020": {
    M: 29
  },
  "2021": {
    M: 23
  }
};
const Alby = {
  "2019": {
    M: 11
  },
  "2021": {
    M: 10
  }
};
const Alec = {
  "1908": {
    M: 10
  },
  "1926": {
    M: 10
  },
  "1944": {
    M: 14
  },
  "1953": {
    M: 15
  },
  "1955": {
    M: 13
  },
  "1958": {
    M: 10
  },
  "1959": {
    M: 10
  },
  "1962": {
    M: 14
  },
  "1963": {
    M: 12
  },
  "1974": {
    M: 10
  },
  "1979": {
    M: 10
  },
  "1987": {
    M: 11
  },
  "1993": {
    M: 12
  },
  "1994": {
    M: 11
  },
  "1995": {
    M: 17
  },
  "1996": {
    M: 12
  },
  "1997": {
    M: 19
  },
  "1998": {
    M: 14
  },
  "1999": {
    M: 16
  },
  "2000": {
    M: 24
  },
  "2001": {
    M: 14
  },
  "2003": {
    M: 17
  },
  "2005": {
    M: 11
  },
  "2006": {
    M: 11
  },
  "2007": {
    M: 13
  },
  "2008": {
    M: 14
  },
  "2010": {
    M: 14
  },
  "2011": {
    M: 12
  },
  "2014": {
    M: 13
  },
  "2015": {
    M: 11
  }
};
const Alecia = {
  "1986": {
    F: 10
  },
  "1991": {
    F: 10
  }
};
const Aleena = {
  "2017": {
    F: 10
  }
};
const Aleesha = {
  "2000": {
    F: 11
  },
  "2001": {
    F: 10
  }
};
const Aleisha = {
  "1980": {
    F: 10
  },
  "1982": {
    F: 13
  },
  "1983": {
    F: 10
  },
  "1984": {
    F: 12
  },
  "1985": {
    F: 22
  },
  "1986": {
    F: 29
  },
  "1987": {
    F: 31
  },
  "1988": {
    F: 33
  },
  "1989": {
    F: 29
  },
  "1990": {
    F: 37
  },
  "1991": {
    F: 32
  },
  "1992": {
    F: 53
  },
  "1993": {
    F: 46
  },
  "1994": {
    F: 50
  },
  "1995": {
    F: 38
  },
  "1996": {
    F: 35
  },
  "1997": {
    F: 34
  },
  "1998": {
    F: 36
  },
  "1999": {
    F: 28
  },
  "2001": {
    F: 20
  },
  "2002": {
    F: 15
  },
  "2003": {
    F: 21
  },
  "2004": {
    F: 17
  }
};
const Alesha = {
  "1984": {
    F: 17
  },
  "1985": {
    F: 18
  },
  "1986": {
    F: 14
  },
  "1987": {
    F: 20
  },
  "1988": {
    F: 29
  },
  "1989": {
    F: 15
  },
  "1990": {
    F: 12
  },
  "1991": {
    F: 12
  },
  "1992": {
    F: 20
  },
  "1993": {
    F: 19
  },
  "1994": {
    F: 12
  },
  "1995": {
    F: 11
  },
  "1996": {
    F: 13
  },
  "1997": {
    F: 21
  },
  "1998": {
    F: 11
  },
  "1999": {
    F: 16
  },
  "2005": {
    F: 12
  }
};
const Alex = {
  "1916": {
    M: 10
  },
  "1925": {
    M: 13
  },
  "1927": {
    M: 10
  },
  "1957": {
    M: 10
  },
  "1960": {
    M: 12
  },
  "1967": {
    M: 10
  },
  "1969": {
    M: 10
  },
  "1971": {
    M: 13
  },
  "1974": {
    M: 14
  },
  "1977": {
    M: 15
  },
  "1978": {
    M: 10
  },
  "1979": {
    M: 11
  },
  "1980": {
    M: 12
  },
  "1981": {
    M: 12
  },
  "1982": {
    M: 18
  },
  "1983": {
    M: 22
  },
  "1984": {
    M: 21
  },
  "1985": {
    M: 34
  },
  "1986": {
    M: 42
  },
  "1987": {
    M: 59
  },
  "1988": {
    M: 70
  },
  "1989": {
    F: 11,
    M: 66
  },
  "1990": {
    F: 14,
    M: 96
  },
  "1991": {
    F: 12,
    M: 104
  },
  "1992": {
    F: 13,
    M: 101
  },
  "1993": {
    F: 33,
    M: 84
  },
  "1994": {
    F: 21,
    M: 101
  },
  "1995": {
    F: 16,
    M: 86
  },
  "1996": {
    F: 23,
    M: 83
  },
  "1997": {
    F: 22,
    M: 94
  },
  "1998": {
    F: 28,
    M: 62
  },
  "1999": {
    F: 15,
    M: 101
  },
  "2000": {
    F: 13,
    M: 73
  },
  "2001": {
    F: 24,
    M: 72
  },
  "2002": {
    F: 17,
    M: 99
  },
  "2003": {
    F: 23,
    M: 121
  },
  "2004": {
    F: 23,
    M: 146
  },
  "2005": {
    F: 18,
    M: 134
  },
  "2006": {
    F: 25,
    M: 129
  },
  "2007": {
    F: 18,
    M: 142
  },
  "2008": {
    F: 18,
    M: 137
  },
  "2009": {
    F: 12,
    M: 108
  },
  "2010": {
    M: 107
  },
  "2011": {
    M: 114
  },
  "2012": {
    F: 10,
    M: 87
  },
  "2013": {
    M: 84
  },
  "2014": {
    M: 69
  },
  "2015": {
    F: 10,
    M: 60
  },
  "2016": {
    M: 54
  },
  "2017": {
    M: 48
  },
  "2018": {
    M: 52
  },
  "2019": {
    M: 47
  },
  "2020": {
    M: 33
  },
  "2021": {
    M: 31
  }
};
const Alexa = {
  "1988": {
    F: 12
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 11
  },
  "2008": {
    F: 10
  },
  "2009": {
    F: 15
  },
  "2010": {
    F: 13
  },
  "2011": {
    F: 17
  },
  "2012": {
    F: 12
  },
  "2013": {
    F: 18
  },
  "2014": {
    F: 20
  },
  "2015": {
    F: 15
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 18
  },
  "2018": {
    F: 19
  },
  "2019": {
    F: 15
  }
};
const Alexander = {
  "1900": {
    M: 101
  },
  "1901": {
    M: 153
  },
  "1902": {
    M: 114
  },
  "1903": {
    M: 138
  },
  "1904": {
    M: 114
  },
  "1905": {
    M: 149
  },
  "1906": {
    M: 157
  },
  "1907": {
    M: 162
  },
  "1908": {
    M: 128
  },
  "1909": {
    M: 172
  },
  "1910": {
    M: 123
  },
  "1911": {
    M: 133
  },
  "1912": {
    M: 152
  },
  "1913": {
    M: 127
  },
  "1914": {
    M: 137
  },
  "1915": {
    M: 138
  },
  "1916": {
    M: 145
  },
  "1917": {
    M: 157
  },
  "1918": {
    M: 114
  },
  "1919": {
    M: 126
  },
  "1920": {
    M: 136
  },
  "1921": {
    M: 135
  },
  "1922": {
    M: 119
  },
  "1923": {
    M: 128
  },
  "1924": {
    M: 125
  },
  "1925": {
    M: 125
  },
  "1926": {
    M: 84
  },
  "1927": {
    M: 91
  },
  "1928": {
    M: 107
  },
  "1929": {
    M: 93
  },
  "1930": {
    M: 83
  },
  "1931": {
    M: 84
  },
  "1932": {
    M: 58
  },
  "1933": {
    M: 83
  },
  "1934": {
    M: 75
  },
  "1935": {
    M: 77
  },
  "1936": {
    M: 80
  },
  "1937": {
    M: 60
  },
  "1938": {
    M: 79
  },
  "1939": {
    M: 62
  },
  "1940": {
    M: 73
  },
  "1941": {
    M: 71
  },
  "1942": {
    M: 68
  },
  "1943": {
    M: 67
  },
  "1944": {
    M: 69
  },
  "1945": {
    M: 71
  },
  "1946": {
    M: 82
  },
  "1947": {
    M: 86
  },
  "1948": {
    M: 70
  },
  "1949": {
    M: 83
  },
  "1950": {
    M: 77
  },
  "1951": {
    M: 57
  },
  "1952": {
    M: 73
  },
  "1953": {
    M: 58
  },
  "1954": {
    M: 82
  },
  "1955": {
    M: 82
  },
  "1956": {
    M: 76
  },
  "1957": {
    M: 69
  },
  "1958": {
    M: 67
  },
  "1959": {
    M: 68
  },
  "1960": {
    M: 70
  },
  "1961": {
    M: 66
  },
  "1962": {
    M: 61
  },
  "1963": {
    M: 71
  },
  "1964": {
    M: 58
  },
  "1965": {
    M: 58
  },
  "1966": {
    M: 62
  },
  "1967": {
    M: 60
  },
  "1968": {
    M: 48
  },
  "1969": {
    M: 58
  },
  "1970": {
    M: 60
  },
  "1971": {
    M: 70
  },
  "1972": {
    M: 57
  },
  "1973": {
    M: 66
  },
  "1974": {
    M: 51
  },
  "1975": {
    M: 57
  },
  "1976": {
    M: 68
  },
  "1977": {
    M: 60
  },
  "1978": {
    M: 69
  },
  "1979": {
    M: 66
  },
  "1980": {
    M: 68
  },
  "1981": {
    M: 65
  },
  "1982": {
    M: 86
  },
  "1983": {
    M: 94
  },
  "1984": {
    M: 121
  },
  "1985": {
    M: 100
  },
  "1986": {
    M: 135
  },
  "1987": {
    M: 174
  },
  "1988": {
    M: 203
  },
  "1989": {
    M: 194
  },
  "1990": {
    M: 178
  },
  "1991": {
    M: 218
  },
  "1992": {
    M: 248
  },
  "1993": {
    M: 238
  },
  "1994": {
    M: 242
  },
  "1995": {
    M: 227
  },
  "1996": {
    M: 214
  },
  "1997": {
    M: 208
  },
  "1998": {
    M: 186
  },
  "1999": {
    M: 178
  },
  "2000": {
    M: 179
  },
  "2001": {
    M: 175
  },
  "2002": {
    M: 174
  },
  "2003": {
    M: 157
  },
  "2004": {
    M: 177
  },
  "2005": {
    M: 189
  },
  "2006": {
    M: 186
  },
  "2007": {
    M: 212
  },
  "2008": {
    M: 202
  },
  "2009": {
    M: 211
  },
  "2010": {
    M: 204
  },
  "2011": {
    M: 177
  },
  "2012": {
    M: 168
  },
  "2013": {
    M: 153
  },
  "2014": {
    M: 204
  },
  "2015": {
    M: 182
  },
  "2016": {
    M: 142
  },
  "2017": {
    M: 147
  },
  "2018": {
    M: 131
  },
  "2019": {
    M: 140
  },
  "2020": {
    M: 112
  },
  "2021": {
    M: 105
  }
};
const Alexandra = {
  "1901": {
    F: 10
  },
  "1902": {
    F: 24
  },
  "1949": {
    F: 12
  },
  "1952": {
    F: 13
  },
  "1953": {
    F: 16
  },
  "1955": {
    F: 13
  },
  "1956": {
    F: 16
  },
  "1957": {
    F: 18
  },
  "1958": {
    F: 10
  },
  "1959": {
    F: 14
  },
  "1960": {
    F: 11
  },
  "1961": {
    F: 16
  },
  "1962": {
    F: 16
  },
  "1963": {
    F: 16
  },
  "1964": {
    F: 27
  },
  "1965": {
    F: 24
  },
  "1966": {
    F: 20
  },
  "1967": {
    F: 18
  },
  "1968": {
    F: 13
  },
  "1969": {
    F: 22
  },
  "1970": {
    F: 15
  },
  "1971": {
    F: 22
  },
  "1972": {
    F: 26
  },
  "1973": {
    F: 27
  },
  "1974": {
    F: 18
  },
  "1975": {
    F: 22
  },
  "1976": {
    F: 28
  },
  "1977": {
    F: 28
  },
  "1978": {
    F: 26
  },
  "1979": {
    F: 31
  },
  "1980": {
    F: 33
  },
  "1981": {
    F: 39
  },
  "1982": {
    F: 38
  },
  "1983": {
    F: 40
  },
  "1984": {
    F: 45
  },
  "1985": {
    F: 74
  },
  "1986": {
    F: 75
  },
  "1987": {
    F: 91
  },
  "1988": {
    F: 109
  },
  "1989": {
    F: 110
  },
  "1990": {
    F: 161
  },
  "1991": {
    F: 133
  },
  "1992": {
    F: 155
  },
  "1993": {
    F: 157
  },
  "1994": {
    F: 157
  },
  "1995": {
    F: 129
  },
  "1996": {
    F: 105
  },
  "1997": {
    F: 123
  },
  "1998": {
    F: 99
  },
  "1999": {
    F: 94
  },
  "2000": {
    F: 93
  },
  "2001": {
    F: 115
  },
  "2002": {
    F: 75
  },
  "2003": {
    F: 74
  },
  "2004": {
    F: 85
  },
  "2005": {
    F: 80
  },
  "2006": {
    F: 70
  },
  "2007": {
    F: 52
  },
  "2008": {
    F: 51
  },
  "2009": {
    F: 48
  },
  "2010": {
    F: 42
  },
  "2011": {
    F: 48
  },
  "2012": {
    F: 45
  },
  "2013": {
    F: 49
  },
  "2014": {
    F: 46
  },
  "2015": {
    F: 38
  },
  "2016": {
    F: 36
  },
  "2017": {
    F: 36
  },
  "2018": {
    F: 35
  },
  "2019": {
    F: 27
  },
  "2020": {
    F: 22
  },
  "2021": {
    F: 34
  }
};
const Alexandria = {
  "1988": {
    F: 14
  },
  "1989": {
    F: 11
  },
  "1990": {
    F: 13
  },
  "1991": {
    F: 13
  },
  "1993": {
    F: 17
  },
  "1994": {
    F: 20
  },
  "1995": {
    F: 14
  },
  "1996": {
    F: 14
  },
  "2001": {
    F: 12
  },
  "2002": {
    F: 13
  },
  "2004": {
    F: 13
  },
  "2005": {
    F: 13
  },
  "2007": {
    F: 12
  },
  "2013": {
    F: 10
  },
  "2016": {
    F: 13
  }
};
const Alexi = {
  "2008": {
    F: 12
  },
  "2009": {
    F: 11
  }
};
const Alexia = {
  "1980": {
    F: 12
  },
  "1981": {
    F: 10
  },
  "1982": {
    F: 10
  },
  "1988": {
    F: 12
  },
  "1992": {
    F: 12
  },
  "1995": {
    F: 17
  },
  "2002": {
    F: 11
  },
  "2004": {
    F: 10
  },
  "2005": {
    F: 13
  },
  "2006": {
    F: 15
  },
  "2007": {
    F: 18
  },
  "2008": {
    F: 19
  },
  "2009": {
    F: 27
  },
  "2010": {
    F: 21
  },
  "2011": {
    F: 23
  },
  "2012": {
    F: 17
  },
  "2013": {
    F: 22
  },
  "2014": {
    F: 13
  },
  "2015": {
    F: 10
  },
  "2016": {
    F: 14
  },
  "2017": {
    F: 18
  },
  "2018": {
    F: 10
  },
  "2019": {
    F: 12
  }
};
const Alexis = {
  "1946": {
    F: 10
  },
  "1953": {
    F: 10
  },
  "1957": {
    F: 10
  },
  "1980": {
    F: 10
  },
  "1983": {
    F: 17
  },
  "1984": {
    F: 16
  },
  "1985": {
    F: 17
  },
  "1988": {
    F: 13
  },
  "1991": {
    F: 13
  },
  "1993": {
    F: 17
  },
  "1994": {
    F: 11
  },
  "1995": {
    F: 11
  },
  "1997": {
    F: 19
  },
  "1998": {
    F: 17
  },
  "1999": {
    F: 11
  },
  "2000": {
    F: 21
  },
  "2001": {
    F: 28
  },
  "2002": {
    F: 22
  },
  "2003": {
    F: 27
  },
  "2004": {
    F: 42
  },
  "2005": {
    F: 31
  },
  "2006": {
    F: 42
  },
  "2007": {
    F: 53
  },
  "2008": {
    F: 76
  },
  "2009": {
    F: 57
  },
  "2010": {
    F: 75
  },
  "2011": {
    F: 105
  },
  "2012": {
    F: 91
  },
  "2013": {
    F: 79
  },
  "2014": {
    F: 85
  },
  "2015": {
    F: 59
  },
  "2016": {
    F: 73
  },
  "2017": {
    F: 41
  },
  "2018": {
    F: 51
  },
  "2019": {
    F: 27
  },
  "2020": {
    F: 24
  },
  "2021": {
    F: 18
  }
};
const Alfie = {
  "2007": {
    M: 13
  },
  "2009": {
    M: 14
  },
  "2010": {
    M: 16
  },
  "2011": {
    M: 16
  },
  "2012": {
    M: 19
  },
  "2013": {
    M: 20
  },
  "2015": {
    M: 17
  },
  "2016": {
    M: 36
  },
  "2017": {
    M: 31
  },
  "2018": {
    M: 30
  },
  "2019": {
    M: 43
  },
  "2020": {
    M: 29
  },
  "2021": {
    M: 18
  }
};
const Alfred = {
  "1900": {
    M: 181
  },
  "1901": {
    M: 184
  },
  "1902": {
    M: 174
  },
  "1903": {
    M: 143
  },
  "1904": {
    M: 203
  },
  "1905": {
    M: 203
  },
  "1906": {
    M: 161
  },
  "1907": {
    M: 213
  },
  "1908": {
    M: 200
  },
  "1909": {
    M: 200
  },
  "1910": {
    M: 189
  },
  "1911": {
    M: 196
  },
  "1912": {
    M: 166
  },
  "1913": {
    M: 166
  },
  "1914": {
    M: 134
  },
  "1915": {
    M: 170
  },
  "1916": {
    M: 140
  },
  "1917": {
    M: 173
  },
  "1918": {
    M: 141
  },
  "1919": {
    M: 133
  },
  "1920": {
    M: 165
  },
  "1921": {
    M: 138
  },
  "1922": {
    M: 112
  },
  "1923": {
    M: 122
  },
  "1924": {
    M: 111
  },
  "1925": {
    M: 118
  },
  "1926": {
    M: 102
  },
  "1927": {
    M: 78
  },
  "1928": {
    M: 77
  },
  "1929": {
    M: 83
  },
  "1930": {
    M: 84
  },
  "1931": {
    M: 87
  },
  "1932": {
    M: 69
  },
  "1933": {
    M: 51
  },
  "1934": {
    M: 62
  },
  "1935": {
    M: 50
  },
  "1936": {
    M: 52
  },
  "1937": {
    M: 55
  },
  "1938": {
    M: 38
  },
  "1939": {
    M: 48
  },
  "1940": {
    M: 48
  },
  "1941": {
    M: 44
  },
  "1942": {
    M: 48
  },
  "1943": {
    M: 44
  },
  "1944": {
    M: 38
  },
  "1945": {
    M: 21
  },
  "1946": {
    M: 43
  },
  "1947": {
    M: 30
  },
  "1948": {
    M: 25
  },
  "1949": {
    M: 25
  },
  "1950": {
    M: 28
  },
  "1951": {
    M: 27
  },
  "1952": {
    M: 21
  },
  "1953": {
    M: 31
  },
  "1954": {
    M: 31
  },
  "1955": {
    M: 21
  },
  "1956": {
    M: 17
  },
  "1957": {
    M: 27
  },
  "1958": {
    M: 12
  },
  "1959": {
    M: 18
  },
  "1960": {
    M: 23
  },
  "1961": {
    M: 31
  },
  "1962": {
    M: 23
  },
  "1963": {
    M: 16
  },
  "1964": {
    M: 15
  },
  "1965": {
    M: 18
  },
  "1966": {
    M: 22
  },
  "1967": {
    M: 14
  },
  "1968": {
    M: 17
  },
  "1969": {
    M: 13
  },
  "1970": {
    M: 12
  },
  "1972": {
    M: 10
  },
  "1973": {
    M: 11
  },
  "1974": {
    M: 10
  },
  "1976": {
    M: 10
  },
  "1978": {
    M: 11
  },
  "1983": {
    M: 10
  },
  "1990": {
    M: 13
  },
  "1999": {
    M: 13
  },
  "2007": {
    M: 14
  },
  "2008": {
    M: 13
  },
  "2011": {
    M: 13
  },
  "2012": {
    M: 18
  },
  "2013": {
    M: 16
  },
  "2014": {
    M: 15
  },
  "2015": {
    M: 27
  },
  "2016": {
    M: 23
  },
  "2017": {
    M: 28
  },
  "2018": {
    M: 26
  },
  "2019": {
    M: 31
  },
  "2020": {
    M: 28
  },
  "2021": {
    M: 32
  }
};
const Ali = {
  "2001": {
    M: 10
  },
  "2002": {
    M: 11
  },
  "2003": {
    M: 15
  },
  "2004": {
    M: 15
  },
  "2005": {
    M: 13
  },
  "2006": {
    M: 17
  },
  "2007": {
    M: 18
  },
  "2008": {
    M: 20
  },
  "2009": {
    M: 23
  },
  "2010": {
    M: 22
  },
  "2011": {
    M: 23
  },
  "2012": {
    M: 21
  },
  "2013": {
    M: 25
  },
  "2014": {
    M: 17
  },
  "2015": {
    M: 27
  },
  "2016": {
    M: 13
  },
  "2017": {
    M: 20
  },
  "2018": {
    M: 24
  },
  "2019": {
    M: 25
  },
  "2020": {
    M: 20
  },
  "2021": {
    M: 15
  }
};
const Alia = {
  "2017": {
    F: 15
  },
  "2019": {
    F: 10
  }
};
const Alice = {
  "1900": {
    F: 183
  },
  "1901": {
    F: 192
  },
  "1902": {
    F: 202
  },
  "1903": {
    F: 204
  },
  "1904": {
    F: 188
  },
  "1905": {
    F: 211
  },
  "1906": {
    F: 240
  },
  "1907": {
    F: 218
  },
  "1908": {
    F: 217
  },
  "1909": {
    F: 218
  },
  "1910": {
    F: 181
  },
  "1911": {
    F: 176
  },
  "1912": {
    F: 195
  },
  "1913": {
    F: 181
  },
  "1914": {
    F: 176
  },
  "1915": {
    F: 179
  },
  "1916": {
    F: 156
  },
  "1917": {
    F: 149
  },
  "1918": {
    F: 123
  },
  "1919": {
    F: 126
  },
  "1920": {
    F: 132
  },
  "1921": {
    F: 113
  },
  "1922": {
    F: 98
  },
  "1923": {
    F: 103
  },
  "1924": {
    F: 84
  },
  "1925": {
    F: 88
  },
  "1926": {
    F: 83
  },
  "1927": {
    F: 67
  },
  "1928": {
    F: 53
  },
  "1929": {
    F: 60
  },
  "1930": {
    F: 54
  },
  "1931": {
    F: 57
  },
  "1932": {
    F: 47
  },
  "1933": {
    F: 46
  },
  "1934": {
    F: 37
  },
  "1935": {
    F: 42
  },
  "1936": {
    F: 45
  },
  "1937": {
    F: 44
  },
  "1938": {
    F: 39
  },
  "1939": {
    F: 27
  },
  "1940": {
    F: 30
  },
  "1941": {
    F: 32
  },
  "1942": {
    F: 27
  },
  "1943": {
    F: 28
  },
  "1944": {
    F: 32
  },
  "1945": {
    F: 28
  },
  "1946": {
    F: 37
  },
  "1947": {
    F: 28
  },
  "1948": {
    F: 20
  },
  "1949": {
    F: 23
  },
  "1950": {
    F: 24
  },
  "1951": {
    F: 25
  },
  "1952": {
    F: 25
  },
  "1953": {
    F: 22
  },
  "1954": {
    F: 23
  },
  "1955": {
    F: 25
  },
  "1956": {
    F: 24
  },
  "1957": {
    F: 26
  },
  "1958": {
    F: 21
  },
  "1959": {
    F: 24
  },
  "1960": {
    F: 17
  },
  "1961": {
    F: 30
  },
  "1962": {
    F: 20
  },
  "1963": {
    F: 17
  },
  "1964": {
    F: 29
  },
  "1965": {
    F: 26
  },
  "1966": {
    F: 30
  },
  "1967": {
    F: 26
  },
  "1968": {
    F: 12
  },
  "1969": {
    F: 26
  },
  "1970": {
    F: 17
  },
  "1971": {
    F: 22
  },
  "1972": {
    F: 17
  },
  "1973": {
    F: 18
  },
  "1974": {
    F: 25
  },
  "1975": {
    F: 31
  },
  "1976": {
    F: 27
  },
  "1977": {
    F: 46
  },
  "1978": {
    F: 47
  },
  "1979": {
    F: 59
  },
  "1980": {
    F: 59
  },
  "1981": {
    F: 81
  },
  "1982": {
    F: 92
  },
  "1983": {
    F: 71
  },
  "1984": {
    F: 89
  },
  "1985": {
    F: 76
  },
  "1986": {
    F: 98
  },
  "1987": {
    F: 93
  },
  "1988": {
    F: 107
  },
  "1989": {
    F: 127
  },
  "1990": {
    F: 112
  },
  "1991": {
    F: 123
  },
  "1992": {
    F: 111
  },
  "1993": {
    F: 105
  },
  "1994": {
    F: 99
  },
  "1995": {
    F: 115
  },
  "1996": {
    F: 104
  },
  "1997": {
    F: 96
  },
  "1998": {
    F: 70
  },
  "1999": {
    F: 81
  },
  "2000": {
    F: 54
  },
  "2001": {
    F: 86
  },
  "2002": {
    F: 66
  },
  "2003": {
    F: 66
  },
  "2004": {
    F: 70
  },
  "2005": {
    F: 59
  },
  "2006": {
    F: 63
  },
  "2007": {
    F: 64
  },
  "2008": {
    F: 47
  },
  "2009": {
    F: 70
  },
  "2010": {
    F: 72
  },
  "2011": {
    F: 82
  },
  "2012": {
    F: 85
  },
  "2013": {
    F: 67
  },
  "2014": {
    F: 77
  },
  "2015": {
    F: 80
  },
  "2016": {
    F: 94
  },
  "2017": {
    F: 96
  },
  "2018": {
    F: 93
  },
  "2019": {
    F: 81
  },
  "2020": {
    F: 77
  },
  "2021": {
    F: 75
  }
};
const Alicia = {
  "1969": {
    F: 10
  },
  "1970": {
    F: 10
  },
  "1972": {
    F: 10
  },
  "1973": {
    F: 13
  },
  "1974": {
    F: 18
  },
  "1975": {
    F: 15
  },
  "1976": {
    F: 21
  },
  "1977": {
    F: 29
  },
  "1978": {
    F: 19
  },
  "1979": {
    F: 25
  },
  "1980": {
    F: 26
  },
  "1981": {
    F: 65
  },
  "1982": {
    F: 52
  },
  "1983": {
    F: 58
  },
  "1984": {
    F: 70
  },
  "1985": {
    F: 68
  },
  "1986": {
    F: 60
  },
  "1987": {
    F: 61
  },
  "1988": {
    F: 82
  },
  "1989": {
    F: 62
  },
  "1990": {
    F: 51
  },
  "1991": {
    F: 60
  },
  "1992": {
    F: 41
  },
  "1993": {
    F: 47
  },
  "1994": {
    F: 33
  },
  "1995": {
    F: 37
  },
  "1996": {
    F: 42
  },
  "1997": {
    F: 46
  },
  "1998": {
    F: 42
  },
  "1999": {
    F: 47
  },
  "2000": {
    F: 36
  },
  "2001": {
    F: 22
  },
  "2002": {
    F: 25
  },
  "2003": {
    F: 33
  },
  "2004": {
    F: 38
  },
  "2005": {
    F: 31
  },
  "2006": {
    F: 33
  },
  "2007": {
    F: 29
  },
  "2008": {
    F: 27
  },
  "2009": {
    F: 25
  },
  "2010": {
    F: 29
  },
  "2011": {
    F: 24
  },
  "2012": {
    F: 18
  },
  "2013": {
    F: 19
  },
  "2014": {
    F: 14
  },
  "2015": {
    F: 22
  },
  "2016": {
    F: 12
  },
  "2017": {
    F: 13
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 13
  }
};
const Alick = {
  "1918": {
    M: 10
  }
};
const Aliesha = {
  "1986": {
    F: 12
  },
  "1990": {
    F: 12
  },
  "1991": {
    F: 11
  },
  "1992": {
    F: 11
  }
};
const Alina = {
  "2007": {
    F: 11
  },
  "2010": {
    F: 13
  },
  "2012": {
    F: 10
  },
  "2014": {
    F: 13
  },
  "2015": {
    F: 11
  },
  "2017": {
    F: 13
  },
  "2018": {
    F: 16
  },
  "2019": {
    F: 16
  },
  "2020": {
    F: 13
  },
  "2021": {
    F: 20
  }
};
const Alisa = {
  "1980": {
    F: 14
  },
  "1983": {
    F: 10
  },
  "1985": {
    F: 13
  }
};
const Alisha = {
  "1977": {
    F: 14
  },
  "1978": {
    F: 18
  },
  "1979": {
    F: 12
  },
  "1980": {
    F: 12
  },
  "1981": {
    F: 22
  },
  "1982": {
    F: 23
  },
  "1983": {
    F: 18
  },
  "1984": {
    F: 40
  },
  "1985": {
    F: 37
  },
  "1986": {
    F: 34
  },
  "1987": {
    F: 37
  },
  "1988": {
    F: 48
  },
  "1989": {
    F: 42
  },
  "1990": {
    F: 33
  },
  "1991": {
    F: 34
  },
  "1992": {
    F: 37
  },
  "1993": {
    F: 38
  },
  "1994": {
    F: 31
  },
  "1995": {
    F: 37
  },
  "1996": {
    F: 33
  },
  "1997": {
    F: 24
  },
  "1998": {
    F: 19
  },
  "1999": {
    F: 26
  },
  "2000": {
    F: 23
  },
  "2001": {
    F: 25
  },
  "2002": {
    F: 38
  },
  "2003": {
    F: 27
  },
  "2004": {
    F: 38
  },
  "2005": {
    F: 24
  },
  "2006": {
    F: 26
  },
  "2007": {
    F: 27
  },
  "2008": {
    F: 23
  },
  "2009": {
    F: 16
  },
  "2010": {
    F: 16
  },
  "2011": {
    F: 13
  },
  "2012": {
    F: 18
  },
  "2013": {
    F: 13
  },
  "2014": {
    F: 16
  },
  "2015": {
    F: 18
  },
  "2016": {
    F: 10
  },
  "2017": {
    F: 19
  }
};
const Alison = {
  "1907": {
    F: 11
  },
  "1909": {
    F: 10
  },
  "1910": {
    F: 15
  },
  "1911": {
    F: 17
  },
  "1912": {
    F: 18
  },
  "1913": {
    F: 16
  },
  "1914": {
    F: 14
  },
  "1915": {
    F: 22
  },
  "1916": {
    F: 17
  },
  "1917": {
    F: 18
  },
  "1918": {
    F: 23
  },
  "1919": {
    F: 16
  },
  "1920": {
    F: 34
  },
  "1921": {
    F: 19
  },
  "1922": {
    F: 37
  },
  "1923": {
    F: 34
  },
  "1924": {
    F: 33
  },
  "1925": {
    F: 33
  },
  "1926": {
    F: 42
  },
  "1927": {
    F: 42
  },
  "1928": {
    F: 49
  },
  "1929": {
    F: 68
  },
  "1930": {
    F: 51
  },
  "1931": {
    F: 54
  },
  "1932": {
    F: 46
  },
  "1933": {
    F: 62
  },
  "1934": {
    F: 75
  },
  "1935": {
    F: 72
  },
  "1936": {
    F: 78
  },
  "1937": {
    F: 62
  },
  "1938": {
    F: 94
  },
  "1939": {
    F: 90
  },
  "1940": {
    F: 98
  },
  "1941": {
    F: 157
  },
  "1942": {
    F: 123
  },
  "1943": {
    F: 113
  },
  "1944": {
    F: 137
  },
  "1945": {
    F: 126
  },
  "1946": {
    F: 143
  },
  "1947": {
    F: 177
  },
  "1948": {
    F: 162
  },
  "1949": {
    F: 155
  },
  "1950": {
    F: 160
  },
  "1951": {
    F: 184
  },
  "1952": {
    F: 187
  },
  "1953": {
    F: 186
  },
  "1954": {
    F: 186
  },
  "1955": {
    F: 190
  },
  "1956": {
    F: 192
  },
  "1957": {
    F: 177
  },
  "1958": {
    F: 171
  },
  "1959": {
    F: 179
  },
  "1960": {
    F: 182
  },
  "1961": {
    F: 163
  },
  "1962": {
    F: 157
  },
  "1963": {
    F: 147
  },
  "1964": {
    F: 150
  },
  "1965": {
    F: 144
  },
  "1966": {
    F: 204
  },
  "1967": {
    F: 174
  },
  "1968": {
    F: 142
  },
  "1969": {
    F: 121
  },
  "1970": {
    F: 102
  },
  "1971": {
    F: 96
  },
  "1972": {
    F: 91
  },
  "1973": {
    F: 76
  },
  "1974": {
    F: 68
  },
  "1975": {
    F: 58
  },
  "1976": {
    F: 66
  },
  "1977": {
    F: 69
  },
  "1978": {
    F: 65
  },
  "1979": {
    F: 72
  },
  "1980": {
    F: 43
  },
  "1981": {
    F: 39
  },
  "1982": {
    F: 42
  },
  "1983": {
    F: 34
  },
  "1984": {
    F: 26
  },
  "1985": {
    F: 23
  },
  "1986": {
    F: 31
  },
  "1987": {
    F: 28
  },
  "1988": {
    F: 25
  },
  "1989": {
    F: 25
  },
  "1990": {
    F: 23
  },
  "1991": {
    F: 18
  },
  "1992": {
    F: 12
  },
  "1993": {
    F: 16
  },
  "1994": {
    F: 18
  },
  "1995": {
    F: 20
  },
  "1996": {
    F: 13
  },
  "1997": {
    F: 10
  },
  "2001": {
    F: 10
  },
  "2003": {
    F: 12
  },
  "2009": {
    F: 10
  }
};
const Alissa = {
  "1983": {
    F: 11
  },
  "1984": {
    F: 10
  }
};
const Alistair = {
  "1929": {
    M: 11
  },
  "1931": {
    M: 14
  },
  "1933": {
    M: 16
  },
  "1935": {
    M: 16
  },
  "1936": {
    M: 11
  },
  "1937": {
    M: 10
  },
  "1938": {
    M: 16
  },
  "1939": {
    M: 21
  },
  "1940": {
    M: 14
  },
  "1941": {
    M: 26
  },
  "1942": {
    M: 27
  },
  "1943": {
    M: 24
  },
  "1944": {
    M: 33
  },
  "1945": {
    M: 29
  },
  "1946": {
    M: 40
  },
  "1947": {
    M: 33
  },
  "1948": {
    M: 34
  },
  "1949": {
    M: 52
  },
  "1950": {
    M: 42
  },
  "1951": {
    M: 45
  },
  "1952": {
    M: 40
  },
  "1953": {
    M: 46
  },
  "1954": {
    M: 44
  },
  "1955": {
    M: 38
  },
  "1956": {
    M: 48
  },
  "1957": {
    M: 50
  },
  "1958": {
    M: 65
  },
  "1959": {
    M: 62
  },
  "1960": {
    M: 64
  },
  "1961": {
    M: 61
  },
  "1962": {
    M: 72
  },
  "1963": {
    M: 53
  },
  "1964": {
    M: 58
  },
  "1965": {
    M: 48
  },
  "1966": {
    M: 28
  },
  "1967": {
    M: 47
  },
  "1968": {
    M: 51
  },
  "1969": {
    M: 59
  },
  "1970": {
    M: 38
  },
  "1971": {
    M: 35
  },
  "1972": {
    M: 46
  },
  "1973": {
    M: 50
  },
  "1974": {
    M: 38
  },
  "1975": {
    M: 38
  },
  "1976": {
    M: 36
  },
  "1977": {
    M: 38
  },
  "1978": {
    M: 19
  },
  "1979": {
    M: 21
  },
  "1980": {
    M: 23
  },
  "1981": {
    M: 19
  },
  "1982": {
    M: 22
  },
  "1983": {
    M: 28
  },
  "1984": {
    M: 24
  },
  "1985": {
    M: 22
  },
  "1986": {
    M: 30
  },
  "1987": {
    M: 19
  },
  "1988": {
    M: 24
  },
  "1989": {
    M: 25
  },
  "1990": {
    M: 21
  },
  "1991": {
    M: 22
  },
  "1992": {
    M: 22
  },
  "1993": {
    M: 20
  },
  "1994": {
    M: 15
  },
  "1995": {
    M: 18
  },
  "1996": {
    M: 12
  },
  "1997": {
    M: 10
  },
  "2020": {
    M: 11
  }
};
const Alister = {
  "1916": {
    M: 12
  },
  "1919": {
    M: 12
  },
  "1920": {
    M: 15
  },
  "1923": {
    M: 11
  },
  "1924": {
    M: 12
  },
  "1925": {
    M: 15
  },
  "1928": {
    M: 12
  },
  "1929": {
    M: 13
  },
  "1930": {
    M: 16
  },
  "1931": {
    M: 16
  },
  "1932": {
    M: 18
  },
  "1933": {
    M: 12
  },
  "1934": {
    M: 14
  },
  "1935": {
    M: 10
  },
  "1937": {
    M: 10
  },
  "1939": {
    M: 14
  },
  "1940": {
    M: 13
  },
  "1941": {
    M: 16
  },
  "1942": {
    M: 10
  },
  "1944": {
    M: 21
  },
  "1945": {
    M: 15
  },
  "1946": {
    M: 30
  },
  "1947": {
    M: 33
  },
  "1948": {
    M: 35
  },
  "1949": {
    M: 23
  },
  "1950": {
    M: 25
  },
  "1951": {
    M: 23
  },
  "1952": {
    M: 35
  },
  "1953": {
    M: 34
  },
  "1954": {
    M: 32
  },
  "1955": {
    M: 19
  },
  "1956": {
    M: 16
  },
  "1957": {
    M: 30
  },
  "1958": {
    M: 31
  },
  "1959": {
    M: 21
  },
  "1960": {
    M: 21
  },
  "1961": {
    M: 28
  },
  "1962": {
    M: 38
  },
  "1963": {
    M: 28
  },
  "1964": {
    M: 12
  },
  "1965": {
    M: 22
  },
  "1966": {
    M: 18
  },
  "1967": {
    M: 20
  },
  "1968": {
    M: 12
  },
  "1969": {
    M: 12
  },
  "1970": {
    M: 10
  },
  "1971": {
    M: 16
  },
  "1972": {
    M: 14
  },
  "1973": {
    M: 19
  },
  "1977": {
    M: 12
  },
  "1980": {
    M: 11
  },
  "1990": {
    M: 13
  }
};
const Aliya = {
  "2005": {
    F: 10
  }
};
const Aliyah = {
  "2001": {
    F: 16
  },
  "2002": {
    F: 16
  },
  "2003": {
    F: 10
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 15
  },
  "2006": {
    F: 19
  },
  "2007": {
    F: 15
  },
  "2008": {
    F: 16
  },
  "2009": {
    F: 17
  },
  "2010": {
    F: 17
  },
  "2011": {
    F: 17
  },
  "2012": {
    F: 14
  },
  "2013": {
    F: 15
  },
  "2014": {
    F: 21
  },
  "2015": {
    F: 14
  },
  "2016": {
    F: 22
  },
  "2017": {
    F: 12
  },
  "2019": {
    F: 18
  },
  "2020": {
    F: 12
  },
  "2021": {
    F: 12
  }
};
const Alizae = {
  "2008": {
    F: 10
  }
};
const Allan = {
  "1900": {
    M: 60
  },
  "1901": {
    M: 56
  },
  "1902": {
    M: 65
  },
  "1903": {
    M: 76
  },
  "1904": {
    M: 68
  },
  "1905": {
    M: 76
  },
  "1906": {
    M: 74
  },
  "1907": {
    M: 74
  },
  "1908": {
    M: 82
  },
  "1909": {
    M: 108
  },
  "1910": {
    M: 106
  },
  "1911": {
    M: 109
  },
  "1912": {
    M: 130
  },
  "1913": {
    M: 129
  },
  "1914": {
    M: 154
  },
  "1915": {
    M: 133
  },
  "1916": {
    M: 123
  },
  "1917": {
    M: 110
  },
  "1918": {
    M: 113
  },
  "1919": {
    M: 119
  },
  "1920": {
    M: 154
  },
  "1921": {
    M: 165
  },
  "1922": {
    M: 168
  },
  "1923": {
    M: 181
  },
  "1924": {
    M: 163
  },
  "1925": {
    M: 156
  },
  "1926": {
    M: 154
  },
  "1927": {
    M: 148
  },
  "1928": {
    M: 138
  },
  "1929": {
    M: 144
  },
  "1930": {
    M: 154
  },
  "1931": {
    M: 148
  },
  "1932": {
    M: 117
  },
  "1933": {
    M: 101
  },
  "1934": {
    M: 129
  },
  "1935": {
    M: 98
  },
  "1936": {
    M: 111
  },
  "1937": {
    M: 129
  },
  "1938": {
    M: 137
  },
  "1939": {
    M: 127
  },
  "1940": {
    M: 167
  },
  "1941": {
    M: 212
  },
  "1942": {
    M: 172
  },
  "1943": {
    M: 171
  },
  "1944": {
    M: 175
  },
  "1945": {
    M: 194
  },
  "1946": {
    M: 216
  },
  "1947": {
    M: 253
  },
  "1948": {
    M: 238
  },
  "1949": {
    M: 240
  },
  "1950": {
    M: 255
  },
  "1951": {
    M: 238
  },
  "1952": {
    M: 229
  },
  "1953": {
    M: 227
  },
  "1954": {
    M: 208
  },
  "1955": {
    M: 200
  },
  "1956": {
    M: 207
  },
  "1957": {
    M: 216
  },
  "1958": {
    M: 244
  },
  "1959": {
    M: 236
  },
  "1960": {
    M: 202
  },
  "1961": {
    M: 191
  },
  "1962": {
    M: 183
  },
  "1963": {
    M: 174
  },
  "1964": {
    M: 156
  },
  "1965": {
    M: 141
  },
  "1966": {
    M: 127
  },
  "1967": {
    M: 120
  },
  "1968": {
    M: 132
  },
  "1969": {
    M: 110
  },
  "1970": {
    M: 85
  },
  "1971": {
    M: 79
  },
  "1972": {
    M: 67
  },
  "1973": {
    M: 74
  },
  "1974": {
    M: 53
  },
  "1975": {
    M: 57
  },
  "1976": {
    M: 52
  },
  "1977": {
    M: 66
  },
  "1978": {
    M: 30
  },
  "1979": {
    M: 43
  },
  "1980": {
    M: 36
  },
  "1981": {
    M: 40
  },
  "1982": {
    M: 42
  },
  "1983": {
    M: 38
  },
  "1984": {
    M: 35
  },
  "1985": {
    M: 44
  },
  "1986": {
    M: 26
  },
  "1987": {
    M: 38
  },
  "1988": {
    M: 38
  },
  "1989": {
    M: 32
  },
  "1990": {
    M: 32
  },
  "1991": {
    M: 33
  },
  "1992": {
    M: 29
  },
  "1993": {
    M: 23
  },
  "1994": {
    M: 14
  },
  "1995": {
    M: 16
  },
  "1996": {
    M: 12
  },
  "1997": {
    M: 16
  },
  "1998": {
    M: 13
  },
  "1999": {
    M: 12
  },
  "2002": {
    M: 16
  },
  "2010": {
    M: 12
  }
};
const Allanah = {
  "1985": {
    F: 12
  },
  "1990": {
    F: 12
  },
  "1991": {
    F: 17
  },
  "1992": {
    F: 17
  }
};
const Allen = {
  "1900": {
    M: 17
  },
  "1901": {
    M: 12
  },
  "1902": {
    M: 11
  },
  "1903": {
    M: 16
  },
  "1904": {
    M: 25
  },
  "1905": {
    M: 24
  },
  "1906": {
    M: 28
  },
  "1907": {
    M: 16
  },
  "1908": {
    M: 35
  },
  "1909": {
    M: 36
  },
  "1910": {
    M: 27
  },
  "1911": {
    M: 27
  },
  "1912": {
    M: 41
  },
  "1913": {
    M: 41
  },
  "1914": {
    M: 44
  },
  "1915": {
    M: 44
  },
  "1916": {
    M: 32
  },
  "1917": {
    M: 44
  },
  "1918": {
    M: 29
  },
  "1919": {
    M: 40
  },
  "1920": {
    M: 55
  },
  "1921": {
    M: 42
  },
  "1922": {
    M: 35
  },
  "1923": {
    M: 39
  },
  "1924": {
    M: 37
  },
  "1925": {
    M: 36
  },
  "1926": {
    M: 48
  },
  "1927": {
    M: 34
  },
  "1928": {
    M: 39
  },
  "1929": {
    M: 35
  },
  "1930": {
    M: 42
  },
  "1931": {
    M: 34
  },
  "1932": {
    M: 46
  },
  "1933": {
    M: 38
  },
  "1934": {
    M: 13
  },
  "1935": {
    M: 28
  },
  "1936": {
    M: 27
  },
  "1937": {
    M: 25
  },
  "1938": {
    M: 33
  },
  "1939": {
    M: 29
  },
  "1940": {
    M: 34
  },
  "1941": {
    M: 38
  },
  "1942": {
    M: 37
  },
  "1943": {
    M: 31
  },
  "1944": {
    M: 43
  },
  "1945": {
    M: 49
  },
  "1946": {
    M: 45
  },
  "1947": {
    M: 56
  },
  "1948": {
    M: 45
  },
  "1949": {
    M: 47
  },
  "1950": {
    M: 52
  },
  "1951": {
    M: 38
  },
  "1952": {
    M: 48
  },
  "1953": {
    M: 33
  },
  "1954": {
    M: 38
  },
  "1955": {
    M: 37
  },
  "1956": {
    M: 41
  },
  "1957": {
    M: 51
  },
  "1958": {
    M: 40
  },
  "1959": {
    M: 45
  },
  "1960": {
    M: 39
  },
  "1961": {
    M: 40
  },
  "1962": {
    M: 39
  },
  "1963": {
    M: 25
  },
  "1964": {
    M: 27
  },
  "1965": {
    M: 29
  },
  "1966": {
    M: 20
  },
  "1967": {
    M: 22
  },
  "1968": {
    M: 23
  },
  "1969": {
    M: 15
  },
  "1970": {
    M: 25
  },
  "1971": {
    M: 20
  },
  "1972": {
    M: 20
  },
  "1973": {
    M: 13
  },
  "1974": {
    M: 10
  },
  "1975": {
    M: 12
  },
  "1976": {
    M: 14
  },
  "1977": {
    M: 18
  },
  "1978": {
    M: 10
  },
  "1981": {
    M: 15
  },
  "1982": {
    M: 10
  },
  "1988": {
    M: 10
  },
  "2006": {
    M: 10
  }
};
const Allie = {
  "2008": {
    F: 11
  },
  "2012": {
    F: 11
  }
};
const Allison = {
  "1929": {
    F: 11
  },
  "1930": {
    F: 10
  },
  "1931": {
    F: 13
  },
  "1932": {
    F: 12
  },
  "1936": {
    F: 12
  },
  "1938": {
    F: 12
  },
  "1939": {
    F: 10
  },
  "1940": {
    F: 12
  },
  "1941": {
    F: 13
  },
  "1942": {
    F: 17
  },
  "1943": {
    F: 21
  },
  "1944": {
    F: 17
  },
  "1945": {
    F: 13
  },
  "1946": {
    F: 27
  },
  "1947": {
    F: 32
  },
  "1948": {
    F: 30
  },
  "1949": {
    F: 24
  },
  "1950": {
    F: 31
  },
  "1951": {
    F: 16
  },
  "1952": {
    F: 22
  },
  "1953": {
    F: 25
  },
  "1954": {
    F: 27
  },
  "1955": {
    F: 21
  },
  "1956": {
    F: 28
  },
  "1957": {
    F: 23
  },
  "1958": {
    F: 27
  },
  "1959": {
    F: 23
  },
  "1960": {
    F: 39
  },
  "1961": {
    F: 34
  },
  "1962": {
    F: 27
  },
  "1963": {
    F: 18
  },
  "1964": {
    F: 16
  },
  "1965": {
    F: 22
  },
  "1966": {
    F: 44
  },
  "1967": {
    F: 39
  },
  "1968": {
    F: 38
  },
  "1969": {
    F: 33
  },
  "1970": {
    F: 24
  },
  "1971": {
    F: 22
  },
  "1972": {
    F: 23
  },
  "1973": {
    F: 21
  },
  "1974": {
    F: 11
  },
  "1975": {
    F: 11
  },
  "1976": {
    F: 18
  },
  "1977": {
    F: 15
  },
  "1978": {
    F: 14
  },
  "1979": {
    F: 13
  },
  "1980": {
    F: 15
  },
  "1982": {
    F: 11
  },
  "1985": {
    F: 12
  }
};
const Allister = {
  "1965": {
    M: 13
  },
  "1966": {
    M: 20
  },
  "1968": {
    M: 10
  },
  "1969": {
    M: 14
  },
  "1971": {
    M: 12
  },
  "1972": {
    M: 14
  },
  "1974": {
    M: 15
  },
  "1975": {
    M: 11
  },
  "1988": {
    M: 10
  }
};
const Ally = {
  "1999": {
    F: 10
  },
  "2002": {
    F: 11
  },
  "2004": {
    F: 10
  }
};
const Alma = {
  "1900": {
    F: 31
  },
  "1901": {
    F: 44
  },
  "1902": {
    F: 39
  },
  "1903": {
    F: 44
  },
  "1904": {
    F: 53
  },
  "1905": {
    F: 57
  },
  "1906": {
    F: 68
  },
  "1907": {
    F: 56
  },
  "1908": {
    F: 62
  },
  "1909": {
    F: 62
  },
  "1910": {
    F: 57
  },
  "1911": {
    F: 62
  },
  "1912": {
    F: 77
  },
  "1913": {
    F: 72
  },
  "1914": {
    F: 64
  },
  "1915": {
    F: 55
  },
  "1916": {
    F: 61
  },
  "1917": {
    F: 71
  },
  "1918": {
    F: 55
  },
  "1919": {
    F: 60
  },
  "1920": {
    F: 66
  },
  "1921": {
    F: 51
  },
  "1922": {
    F: 63
  },
  "1923": {
    F: 52
  },
  "1924": {
    F: 54
  },
  "1925": {
    F: 54
  },
  "1926": {
    F: 48
  },
  "1927": {
    F: 35
  },
  "1928": {
    F: 28
  },
  "1929": {
    F: 38
  },
  "1930": {
    F: 36
  },
  "1931": {
    F: 38
  },
  "1932": {
    F: 25
  },
  "1933": {
    F: 24
  },
  "1934": {
    F: 23
  },
  "1935": {
    F: 19
  },
  "1936": {
    F: 19
  },
  "1937": {
    F: 10
  },
  "1938": {
    F: 16
  },
  "1939": {
    F: 19
  },
  "1940": {
    F: 15
  },
  "1941": {
    F: 20
  },
  "1945": {
    F: 20
  },
  "1946": {
    F: 14
  },
  "1947": {
    F: 13
  },
  "1948": {
    F: 12
  },
  "1950": {
    F: 11
  },
  "1951": {
    F: 14
  },
  "1955": {
    F: 11
  }
};
const Althea = {
  "1924": {
    F: 11
  }
};
const Alvin = {
  "1953": {
    M: 10
  },
  "2010": {
    M: 12
  },
  "2013": {
    M: 10
  },
  "2016": {
    M: 10
  },
  "2017": {
    M: 10
  },
  "2018": {
    M: 11
  }
};
const Alwyn = {
  "1926": {
    M: 10
  }
};
const Alyce = {
  "1991": {
    F: 11
  }
};
const Alyse = {
  "1987": {
    F: 10
  },
  "1989": {
    F: 11
  }
};
const Alysha = {
  "1986": {
    F: 12
  },
  "1987": {
    F: 13
  },
  "1988": {
    F: 29
  },
  "1989": {
    F: 32
  },
  "1990": {
    F: 29
  },
  "1991": {
    F: 35
  },
  "1992": {
    F: 32
  },
  "1993": {
    F: 28
  },
  "1994": {
    F: 17
  },
  "1995": {
    F: 14
  },
  "1996": {
    F: 16
  },
  "1997": {
    F: 21
  },
  "1998": {
    F: 18
  },
  "1999": {
    F: 13
  },
  "2000": {
    F: 13
  },
  "2001": {
    F: 15
  },
  "2002": {
    F: 13
  },
  "2003": {
    F: 10
  },
  "2004": {
    F: 13
  },
  "2005": {
    F: 18
  },
  "2006": {
    F: 10
  },
  "2008": {
    F: 18
  },
  "2012": {
    F: 16
  }
};
const Alyson = {
  "1950": {
    F: 12
  }
};
const Alyssa = {
  "1985": {
    F: 11
  },
  "1986": {
    F: 11
  },
  "1987": {
    F: 13
  },
  "1988": {
    F: 27
  },
  "1989": {
    F: 36
  },
  "1990": {
    F: 41
  },
  "1991": {
    F: 32
  },
  "1992": {
    F: 25
  },
  "1993": {
    F: 22
  },
  "1994": {
    F: 13
  },
  "1995": {
    F: 24
  },
  "1996": {
    F: 20
  },
  "1997": {
    F: 23
  },
  "1998": {
    F: 27
  },
  "1999": {
    F: 66
  },
  "2000": {
    F: 53
  },
  "2001": {
    F: 76
  },
  "2002": {
    F: 77
  },
  "2003": {
    F: 94
  },
  "2004": {
    F: 73
  },
  "2005": {
    F: 66
  },
  "2006": {
    F: 79
  },
  "2007": {
    F: 79
  },
  "2008": {
    F: 74
  },
  "2009": {
    F: 65
  },
  "2010": {
    F: 60
  },
  "2011": {
    F: 69
  },
  "2012": {
    F: 60
  },
  "2013": {
    F: 53
  },
  "2014": {
    F: 39
  },
  "2015": {
    F: 40
  },
  "2016": {
    F: 39
  },
  "2017": {
    F: 33
  },
  "2018": {
    F: 33
  },
  "2019": {
    F: 28
  },
  "2020": {
    F: 21
  },
  "2021": {
    F: 18
  }
};
const Amaia = {
  "2010": {
    F: 10
  },
  "2011": {
    F: 16
  },
  "2012": {
    F: 12
  },
  "2013": {
    F: 15
  },
  "2014": {
    F: 13
  },
  "2015": {
    F: 30
  },
  "2016": {
    F: 21
  },
  "2017": {
    F: 45
  },
  "2018": {
    F: 38
  },
  "2019": {
    F: 49
  },
  "2020": {
    F: 59
  },
  "2021": {
    F: 64
  }
};
const Amaira = {
  "2018": {
    F: 11
  },
  "2019": {
    F: 16
  },
  "2020": {
    F: 23
  },
  "2021": {
    F: 17
  }
};
const Amalia = {
  "2015": {
    F: 11
  },
  "2018": {
    F: 12
  },
  "2019": {
    F: 11
  },
  "2020": {
    F: 11
  },
  "2021": {
    F: 13
  }
};
const Amanda = {
  "1954": {
    F: 17
  },
  "1955": {
    F: 19
  },
  "1956": {
    F: 27
  },
  "1957": {
    F: 41
  },
  "1958": {
    F: 57
  },
  "1959": {
    F: 49
  },
  "1960": {
    F: 52
  },
  "1961": {
    F: 82
  },
  "1962": {
    F: 82
  },
  "1963": {
    F: 138
  },
  "1964": {
    F: 121
  },
  "1965": {
    F: 141
  },
  "1966": {
    F: 159
  },
  "1967": {
    F: 180
  },
  "1968": {
    F: 177
  },
  "1969": {
    F: 226
  },
  "1970": {
    F: 238
  },
  "1971": {
    F: 334
  },
  "1972": {
    F: 291
  },
  "1973": {
    F: 275
  },
  "1974": {
    F: 298
  },
  "1975": {
    F: 277
  },
  "1976": {
    F: 304
  },
  "1977": {
    F: 316
  },
  "1978": {
    F: 242
  },
  "1979": {
    F: 265
  },
  "1980": {
    F: 275
  },
  "1981": {
    F: 214
  },
  "1982": {
    F: 217
  },
  "1983": {
    F: 188
  },
  "1984": {
    F: 230
  },
  "1985": {
    F: 315
  },
  "1986": {
    F: 353
  },
  "1987": {
    F: 340
  },
  "1988": {
    F: 302
  },
  "1989": {
    F: 261
  },
  "1990": {
    F: 182
  },
  "1991": {
    F: 146
  },
  "1992": {
    F: 110
  },
  "1993": {
    F: 116
  },
  "1994": {
    F: 77
  },
  "1995": {
    F: 66
  },
  "1996": {
    F: 64
  },
  "1997": {
    F: 62
  },
  "1998": {
    F: 33
  },
  "1999": {
    F: 36
  },
  "2000": {
    F: 40
  },
  "2001": {
    F: 35
  },
  "2002": {
    F: 31
  },
  "2003": {
    F: 35
  },
  "2004": {
    F: 21
  },
  "2005": {
    F: 20
  },
  "2006": {
    F: 22
  },
  "2007": {
    F: 28
  },
  "2008": {
    F: 19
  },
  "2009": {
    F: 17
  },
  "2010": {
    F: 12
  },
  "2011": {
    F: 12
  },
  "2012": {
    F: 13
  },
  "2013": {
    F: 14
  },
  "2014": {
    F: 11
  },
  "2015": {
    F: 18
  },
  "2016": {
    F: 10
  }
};
const Amara = {
  "2016": {
    F: 18
  },
  "2017": {
    F: 19
  },
  "2018": {
    F: 19
  },
  "2019": {
    F: 23
  },
  "2020": {
    F: 33
  },
  "2021": {
    F: 44
  }
};
const Amarni = {
  "2021": {
    F: 13
  }
};
const Amaya = {
  "2017": {
    F: 13
  },
  "2018": {
    F: 15
  },
  "2019": {
    F: 21
  },
  "2020": {
    F: 11
  },
  "2021": {
    F: 14
  }
};
const Amber = {
  "1970": {
    F: 10
  },
  "1971": {
    F: 16
  },
  "1972": {
    F: 12
  },
  "1973": {
    F: 23
  },
  "1974": {
    F: 24
  },
  "1975": {
    F: 52
  },
  "1976": {
    F: 39
  },
  "1977": {
    F: 48
  },
  "1978": {
    F: 91
  },
  "1979": {
    F: 99
  },
  "1980": {
    F: 115
  },
  "1981": {
    F: 104
  },
  "1982": {
    F: 108
  },
  "1983": {
    F: 115
  },
  "1984": {
    F: 98
  },
  "1985": {
    F: 84
  },
  "1986": {
    F: 78
  },
  "1987": {
    F: 70
  },
  "1988": {
    F: 95
  },
  "1989": {
    F: 95
  },
  "1990": {
    F: 103
  },
  "1991": {
    F: 147
  },
  "1992": {
    F: 116
  },
  "1993": {
    F: 92
  },
  "1994": {
    F: 104
  },
  "1995": {
    F: 123
  },
  "1996": {
    F: 85
  },
  "1997": {
    F: 95
  },
  "1998": {
    F: 78
  },
  "1999": {
    F: 81
  },
  "2000": {
    F: 85
  },
  "2001": {
    F: 109
  },
  "2002": {
    F: 76
  },
  "2003": {
    F: 87
  },
  "2004": {
    F: 106
  },
  "2005": {
    F: 110
  },
  "2006": {
    F: 102
  },
  "2007": {
    F: 117
  },
  "2008": {
    F: 81
  },
  "2009": {
    F: 92
  },
  "2010": {
    F: 89
  },
  "2011": {
    F: 80
  },
  "2012": {
    F: 60
  },
  "2013": {
    F: 48
  },
  "2014": {
    F: 61
  },
  "2015": {
    F: 49
  },
  "2016": {
    F: 68
  },
  "2017": {
    F: 44
  },
  "2018": {
    F: 41
  },
  "2019": {
    F: 62
  },
  "2020": {
    F: 52
  },
  "2021": {
    F: 56
  }
};
const Amelia = {
  "1900": {
    F: 25
  },
  "1901": {
    F: 26
  },
  "1902": {
    F: 25
  },
  "1903": {
    F: 24
  },
  "1904": {
    F: 25
  },
  "1905": {
    F: 19
  },
  "1906": {
    F: 36
  },
  "1907": {
    F: 37
  },
  "1908": {
    F: 36
  },
  "1909": {
    F: 28
  },
  "1910": {
    F: 24
  },
  "1911": {
    F: 21
  },
  "1912": {
    F: 22
  },
  "1913": {
    F: 21
  },
  "1914": {
    F: 18
  },
  "1915": {
    F: 14
  },
  "1916": {
    F: 25
  },
  "1917": {
    F: 14
  },
  "1918": {
    F: 17
  },
  "1919": {
    F: 15
  },
  "1921": {
    F: 13
  },
  "1926": {
    F: 12
  },
  "1962": {
    F: 11
  },
  "1963": {
    F: 12
  },
  "1970": {
    F: 13
  },
  "1971": {
    F: 13
  },
  "1972": {
    F: 13
  },
  "1973": {
    F: 16
  },
  "1974": {
    F: 18
  },
  "1975": {
    F: 18
  },
  "1976": {
    F: 17
  },
  "1977": {
    F: 28
  },
  "1978": {
    F: 25
  },
  "1979": {
    F: 28
  },
  "1980": {
    F: 30
  },
  "1981": {
    F: 38
  },
  "1982": {
    F: 40
  },
  "1983": {
    F: 40
  },
  "1984": {
    F: 31
  },
  "1985": {
    F: 46
  },
  "1986": {
    F: 49
  },
  "1987": {
    F: 60
  },
  "1988": {
    F: 56
  },
  "1989": {
    F: 56
  },
  "1990": {
    F: 60
  },
  "1991": {
    F: 52
  },
  "1992": {
    F: 72
  },
  "1993": {
    F: 83
  },
  "1994": {
    F: 76
  },
  "1995": {
    F: 65
  },
  "1996": {
    F: 57
  },
  "1997": {
    F: 61
  },
  "1998": {
    F: 61
  },
  "1999": {
    F: 74
  },
  "2000": {
    F: 86
  },
  "2001": {
    F: 85
  },
  "2002": {
    F: 103
  },
  "2003": {
    F: 117
  },
  "2004": {
    F: 139
  },
  "2005": {
    F: 165
  },
  "2006": {
    F: 166
  },
  "2007": {
    F: 201
  },
  "2008": {
    F: 196
  },
  "2009": {
    F: 222
  },
  "2010": {
    F: 218
  },
  "2011": {
    F: 229
  },
  "2012": {
    F: 228
  },
  "2013": {
    F: 230
  },
  "2014": {
    F: 217
  },
  "2015": {
    F: 212
  },
  "2016": {
    F: 210
  },
  "2017": {
    F: 215
  },
  "2018": {
    F: 208
  },
  "2019": {
    F: 255
  },
  "2020": {
    F: 213
  },
  "2021": {
    F: 207
  }
};
const Amelie = {
  "2003": {
    F: 13
  },
  "2004": {
    F: 19
  },
  "2005": {
    F: 21
  },
  "2006": {
    F: 25
  },
  "2007": {
    F: 34
  },
  "2008": {
    F: 25
  },
  "2009": {
    F: 16
  },
  "2010": {
    F: 24
  },
  "2011": {
    F: 19
  },
  "2012": {
    F: 12
  },
  "2013": {
    F: 21
  },
  "2014": {
    F: 19
  },
  "2015": {
    F: 23
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 16
  },
  "2018": {
    F: 10
  },
  "2019": {
    F: 16
  },
  "2020": {
    F: 13
  },
  "2021": {
    F: 18
  }
};
const Amie = {
  "1977": {
    F: 13
  },
  "1978": {
    F: 18
  },
  "1979": {
    F: 20
  },
  "1980": {
    F: 28
  },
  "1981": {
    F: 30
  },
  "1982": {
    F: 22
  },
  "1983": {
    F: 24
  },
  "1984": {
    F: 20
  },
  "1986": {
    F: 14
  },
  "1987": {
    F: 22
  },
  "1988": {
    F: 11
  },
  "1990": {
    F: 21
  },
  "2003": {
    F: 13
  },
  "2004": {
    F: 12
  },
  "2005": {
    F: 10
  }
};
const Amira = {
  "2016": {
    F: 10
  },
  "2017": {
    F: 12
  },
  "2018": {
    F: 10
  },
  "2019": {
    F: 14
  },
  "2021": {
    F: 10
  }
};
const Amiria = {
  "1979": {
    F: 11
  },
  "1985": {
    F: 10
  },
  "1988": {
    F: 14
  },
  "1992": {
    F: 11
  },
  "2013": {
    F: 14
  },
  "2019": {
    F: 10
  },
  "2020": {
    F: 11
  }
};
const Amiyah = {
  "2021": {
    F: 10
  }
};
const Amos = {
  "1990": {
    M: 10
  },
  "2007": {
    M: 11
  },
  "2009": {
    M: 13
  },
  "2011": {
    M: 12
  },
  "2015": {
    M: 14
  },
  "2016": {
    M: 11
  },
  "2017": {
    M: 15
  },
  "2018": {
    M: 12
  },
  "2019": {
    M: 12
  },
  "2020": {
    M: 14
  }
};
const Amreen = {
  "2019": {
    F: 10
  }
};
const Amy = {
  "1900": {
    F: 37
  },
  "1901": {
    F: 45
  },
  "1902": {
    F: 47
  },
  "1903": {
    F: 51
  },
  "1904": {
    F: 46
  },
  "1905": {
    F: 47
  },
  "1906": {
    F: 49
  },
  "1907": {
    F: 53
  },
  "1908": {
    F: 64
  },
  "1909": {
    F: 63
  },
  "1910": {
    F: 38
  },
  "1911": {
    F: 46
  },
  "1912": {
    F: 44
  },
  "1913": {
    F: 41
  },
  "1914": {
    F: 45
  },
  "1915": {
    F: 48
  },
  "1916": {
    F: 26
  },
  "1917": {
    F: 34
  },
  "1918": {
    F: 31
  },
  "1919": {
    F: 32
  },
  "1920": {
    F: 30
  },
  "1921": {
    F: 23
  },
  "1922": {
    F: 19
  },
  "1923": {
    F: 19
  },
  "1924": {
    F: 21
  },
  "1925": {
    F: 23
  },
  "1926": {
    F: 14
  },
  "1927": {
    F: 11
  },
  "1929": {
    F: 12
  },
  "1930": {
    F: 10
  },
  "1933": {
    F: 12
  },
  "1934": {
    F: 11
  },
  "1936": {
    F: 10
  },
  "1940": {
    F: 10
  },
  "1941": {
    F: 12
  },
  "1942": {
    F: 10
  },
  "1946": {
    F: 11
  },
  "1957": {
    F: 10
  },
  "1968": {
    F: 14
  },
  "1970": {
    F: 14
  },
  "1971": {
    F: 16
  },
  "1972": {
    F: 20
  },
  "1973": {
    F: 35
  },
  "1974": {
    F: 52
  },
  "1975": {
    F: 81
  },
  "1976": {
    F: 119
  },
  "1977": {
    F: 157
  },
  "1978": {
    F: 206
  },
  "1979": {
    F: 290
  },
  "1980": {
    F: 324
  },
  "1981": {
    F: 284
  },
  "1982": {
    F: 302
  },
  "1983": {
    F: 318
  },
  "1984": {
    F: 325
  },
  "1985": {
    F: 297
  },
  "1986": {
    F: 269
  },
  "1987": {
    F: 301
  },
  "1988": {
    F: 268
  },
  "1989": {
    F: 237
  },
  "1990": {
    F: 275
  },
  "1991": {
    F: 265
  },
  "1992": {
    F: 213
  },
  "1993": {
    F: 229
  },
  "1994": {
    F: 203
  },
  "1995": {
    F: 162
  },
  "1996": {
    F: 165
  },
  "1997": {
    F: 153
  },
  "1998": {
    F: 135
  },
  "1999": {
    F: 129
  },
  "2000": {
    F: 164
  },
  "2001": {
    F: 148
  },
  "2002": {
    F: 129
  },
  "2003": {
    F: 122
  },
  "2004": {
    F: 118
  },
  "2005": {
    F: 132
  },
  "2006": {
    F: 95
  },
  "2007": {
    F: 111
  },
  "2008": {
    F: 89
  },
  "2009": {
    F: 79
  },
  "2010": {
    F: 62
  },
  "2011": {
    F: 58
  },
  "2012": {
    F: 56
  },
  "2013": {
    F: 35
  },
  "2014": {
    F: 35
  },
  "2015": {
    F: 30
  },
  "2016": {
    F: 27
  },
  "2017": {
    F: 25
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 28
  },
  "2020": {
    F: 15
  },
  "2021": {
    F: 20
  }
};
const Amyra = {
  "2018": {
    F: 11
  },
  "2020": {
    F: 16
  },
  "2021": {
    F: 12
  }
};
const Ana = {
  "1961": {
    F: 14
  },
  "1964": {
    F: 10
  },
  "1965": {
    F: 11
  },
  "1967": {
    F: 10
  },
  "1969": {
    F: 14
  },
  "1971": {
    F: 15
  },
  "1972": {
    F: 17
  },
  "1973": {
    F: 13
  },
  "1974": {
    F: 18
  },
  "1975": {
    F: 16
  },
  "1976": {
    F: 15
  },
  "1977": {
    F: 19
  },
  "1978": {
    F: 27
  },
  "1979": {
    F: 29
  },
  "1980": {
    F: 21
  },
  "1981": {
    F: 26
  },
  "1982": {
    F: 28
  },
  "1983": {
    F: 19
  },
  "1984": {
    F: 24
  },
  "1985": {
    F: 21
  },
  "1986": {
    F: 24
  },
  "1987": {
    F: 33
  },
  "1988": {
    F: 31
  },
  "1989": {
    F: 39
  },
  "1990": {
    F: 31
  },
  "1991": {
    F: 20
  },
  "1992": {
    F: 25
  },
  "1993": {
    F: 28
  },
  "1994": {
    F: 35
  },
  "1995": {
    F: 28
  },
  "1996": {
    F: 21
  },
  "1997": {
    F: 26
  },
  "1998": {
    F: 29
  },
  "1999": {
    F: 32
  },
  "2000": {
    F: 29
  },
  "2001": {
    F: 31
  },
  "2002": {
    F: 21
  },
  "2003": {
    F: 35
  },
  "2004": {
    F: 39
  },
  "2005": {
    F: 23
  },
  "2006": {
    F: 27
  },
  "2007": {
    F: 35
  },
  "2008": {
    F: 35
  },
  "2009": {
    F: 33
  },
  "2010": {
    F: 38
  },
  "2011": {
    F: 28
  },
  "2012": {
    F: 25
  },
  "2013": {
    F: 18
  },
  "2014": {
    F: 31
  },
  "2015": {
    F: 14
  },
  "2016": {
    F: 22
  },
  "2017": {
    F: 25
  },
  "2018": {
    F: 24
  },
  "2019": {
    F: 26
  },
  "2020": {
    F: 23
  },
  "2021": {
    F: 26
  }
};
const Anahera = {
  "1986": {
    F: 11
  },
  "1988": {
    F: 10
  },
  "1990": {
    F: 12
  },
  "1991": {
    F: 12
  },
  "1993": {
    F: 14
  },
  "1994": {
    F: 13
  },
  "1995": {
    F: 26
  },
  "1996": {
    F: 19
  },
  "1997": {
    F: 20
  },
  "1998": {
    F: 21
  },
  "1999": {
    F: 35
  },
  "2000": {
    F: 30
  },
  "2001": {
    F: 32
  },
  "2002": {
    F: 34
  },
  "2003": {
    F: 38
  },
  "2004": {
    F: 39
  },
  "2005": {
    F: 44
  },
  "2006": {
    F: 44
  },
  "2007": {
    F: 48
  },
  "2008": {
    F: 42
  },
  "2009": {
    F: 44
  },
  "2010": {
    F: 42
  },
  "2011": {
    F: 38
  },
  "2012": {
    F: 31
  },
  "2013": {
    F: 25
  },
  "2014": {
    F: 32
  },
  "2015": {
    F: 39
  },
  "2016": {
    F: 32
  },
  "2017": {
    F: 32
  },
  "2018": {
    F: 39
  },
  "2019": {
    F: 28
  },
  "2020": {
    F: 32
  },
  "2021": {
    F: 25
  }
};
const Anaia = {
  "2021": {
    F: 12
  }
};
const Anaru = {
  "1980": {
    M: 14
  },
  "1982": {
    M: 11
  },
  "1984": {
    M: 14
  },
  "1985": {
    M: 22
  },
  "1987": {
    M: 16
  },
  "1988": {
    M: 20
  },
  "1989": {
    M: 17
  },
  "1990": {
    M: 11
  },
  "1991": {
    M: 18
  },
  "1992": {
    M: 20
  },
  "1993": {
    M: 22
  },
  "1994": {
    M: 20
  },
  "1995": {
    M: 30
  },
  "1996": {
    M: 18
  },
  "1997": {
    M: 23
  },
  "1998": {
    M: 23
  },
  "1999": {
    M: 22
  },
  "2000": {
    M: 19
  },
  "2001": {
    M: 18
  },
  "2002": {
    M: 18
  },
  "2003": {
    M: 16
  },
  "2004": {
    M: 18
  },
  "2005": {
    M: 17
  },
  "2006": {
    M: 28
  },
  "2007": {
    M: 16
  },
  "2008": {
    M: 16
  },
  "2009": {
    M: 19
  },
  "2010": {
    M: 16
  },
  "2012": {
    M: 16
  },
  "2016": {
    M: 11
  },
  "2017": {
    M: 11
  },
  "2018": {
    M: 13
  },
  "2021": {
    M: 10
  }
};
const Anastasia = {
  "1986": {
    F: 10
  },
  "1987": {
    F: 11
  },
  "1988": {
    F: 16
  },
  "1989": {
    F: 15
  },
  "1990": {
    F: 14
  },
  "1991": {
    F: 15
  },
  "1992": {
    F: 12
  },
  "1993": {
    F: 17
  },
  "1994": {
    F: 17
  },
  "1995": {
    F: 19
  },
  "1996": {
    F: 22
  },
  "1997": {
    F: 13
  },
  "1998": {
    F: 31
  },
  "1999": {
    F: 17
  },
  "2000": {
    F: 12
  },
  "2001": {
    F: 17
  },
  "2002": {
    F: 16
  },
  "2003": {
    F: 16
  },
  "2004": {
    F: 13
  },
  "2005": {
    F: 10
  },
  "2006": {
    F: 17
  },
  "2007": {
    F: 11
  },
  "2008": {
    F: 15
  },
  "2009": {
    F: 15
  },
  "2010": {
    F: 14
  },
  "2015": {
    F: 21
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 19
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 12
  },
  "2020": {
    F: 13
  },
  "2021": {
    F: 19
  }
};
const Anaya = {
  "2010": {
    F: 11
  },
  "2013": {
    F: 12
  },
  "2015": {
    F: 21
  },
  "2016": {
    F: 16
  },
  "2017": {
    F: 20
  },
  "2018": {
    F: 20
  },
  "2019": {
    F: 18
  },
  "2020": {
    F: 15
  },
  "2021": {
    F: 28
  }
};
const Andre = {
  "1957": {
    M: 11
  },
  "1959": {
    M: 14
  },
  "1961": {
    M: 22
  },
  "1962": {
    M: 19
  },
  "1963": {
    M: 12
  },
  "1964": {
    M: 20
  },
  "1965": {
    M: 13
  },
  "1966": {
    M: 18
  },
  "1967": {
    M: 20
  },
  "1968": {
    M: 20
  },
  "1969": {
    M: 42
  },
  "1970": {
    M: 29
  },
  "1971": {
    M: 32
  },
  "1972": {
    M: 44
  },
  "1973": {
    M: 34
  },
  "1974": {
    M: 48
  },
  "1975": {
    M: 48
  },
  "1976": {
    M: 68
  },
  "1977": {
    M: 49
  },
  "1978": {
    M: 59
  },
  "1979": {
    M: 44
  },
  "1980": {
    M: 37
  },
  "1981": {
    M: 30
  },
  "1982": {
    M: 22
  },
  "1983": {
    M: 36
  },
  "1984": {
    M: 48
  },
  "1985": {
    M: 43
  },
  "1986": {
    M: 46
  },
  "1987": {
    M: 36
  },
  "1988": {
    M: 35
  },
  "1989": {
    M: 36
  },
  "1990": {
    M: 16
  },
  "1991": {
    M: 22
  },
  "1992": {
    M: 33
  },
  "1993": {
    M: 23
  },
  "1994": {
    M: 32
  },
  "1995": {
    M: 33
  },
  "1996": {
    M: 33
  },
  "1997": {
    M: 39
  },
  "1998": {
    M: 32
  },
  "1999": {
    M: 20
  },
  "2000": {
    M: 18
  },
  "2001": {
    M: 18
  },
  "2002": {
    M: 29
  },
  "2003": {
    M: 19
  },
  "2004": {
    M: 27
  },
  "2005": {
    M: 24
  },
  "2006": {
    M: 32
  },
  "2007": {
    M: 20
  },
  "2008": {
    M: 27
  },
  "2009": {
    M: 14
  },
  "2010": {
    M: 18
  },
  "2011": {
    M: 11
  },
  "2012": {
    M: 19
  },
  "2013": {
    M: 18
  },
  "2014": {
    M: 17
  },
  "2015": {
    M: 29
  },
  "2016": {
    M: 18
  },
  "2017": {
    M: 22
  },
  "2018": {
    M: 15
  },
  "2019": {
    M: 13
  },
  "2021": {
    M: 13
  }
};
const Andrea = {
  "1940": {
    F: 12
  },
  "1941": {
    F: 14
  },
  "1942": {
    F: 15
  },
  "1944": {
    F: 17
  },
  "1945": {
    F: 22
  },
  "1946": {
    F: 20
  },
  "1947": {
    F: 39
  },
  "1948": {
    F: 40
  },
  "1949": {
    F: 37
  },
  "1950": {
    F: 35
  },
  "1951": {
    F: 37
  },
  "1952": {
    F: 45
  },
  "1953": {
    F: 44
  },
  "1954": {
    F: 44
  },
  "1955": {
    F: 55
  },
  "1956": {
    F: 51
  },
  "1957": {
    F: 73
  },
  "1958": {
    F: 88
  },
  "1959": {
    F: 94
  },
  "1960": {
    F: 126
  },
  "1961": {
    F: 146
  },
  "1962": {
    F: 198
  },
  "1963": {
    F: 193
  },
  "1964": {
    F: 181
  },
  "1965": {
    F: 195
  },
  "1966": {
    F: 208
  },
  "1967": {
    F: 218
  },
  "1968": {
    F: 266
  },
  "1969": {
    F: 264
  },
  "1970": {
    F: 256
  },
  "1971": {
    F: 267
  },
  "1972": {
    F: 259
  },
  "1973": {
    F: 220
  },
  "1974": {
    F: 215
  },
  "1975": {
    F: 219
  },
  "1976": {
    F: 146
  },
  "1977": {
    F: 173
  },
  "1978": {
    F: 143
  },
  "1979": {
    F: 130
  },
  "1980": {
    F: 120
  },
  "1981": {
    F: 101
  },
  "1982": {
    F: 85
  },
  "1983": {
    F: 86
  },
  "1984": {
    F: 78
  },
  "1985": {
    F: 84
  },
  "1986": {
    F: 56
  },
  "1987": {
    F: 65
  },
  "1988": {
    F: 54
  },
  "1989": {
    F: 46
  },
  "1990": {
    F: 42
  },
  "1991": {
    F: 30
  },
  "1992": {
    F: 33
  },
  "1993": {
    F: 24
  },
  "1994": {
    F: 31
  },
  "1995": {
    F: 12
  },
  "1996": {
    F: 12
  },
  "1997": {
    F: 14
  },
  "1998": {
    F: 11
  },
  "1999": {
    F: 14
  },
  "2002": {
    F: 12
  },
  "2012": {
    F: 10
  }
};
const Andrew = {
  "1900": {
    M: 53
  },
  "1901": {
    M: 60
  },
  "1902": {
    M: 55
  },
  "1903": {
    M: 56
  },
  "1904": {
    M: 61
  },
  "1905": {
    M: 61
  },
  "1906": {
    M: 56
  },
  "1907": {
    M: 64
  },
  "1908": {
    M: 69
  },
  "1909": {
    M: 67
  },
  "1910": {
    M: 67
  },
  "1911": {
    M: 66
  },
  "1912": {
    M: 57
  },
  "1913": {
    M: 66
  },
  "1914": {
    M: 63
  },
  "1915": {
    M: 75
  },
  "1916": {
    M: 73
  },
  "1917": {
    M: 65
  },
  "1918": {
    M: 49
  },
  "1919": {
    M: 49
  },
  "1920": {
    M: 50
  },
  "1921": {
    M: 63
  },
  "1922": {
    M: 52
  },
  "1923": {
    M: 50
  },
  "1924": {
    M: 53
  },
  "1925": {
    M: 69
  },
  "1926": {
    M: 57
  },
  "1927": {
    M: 46
  },
  "1928": {
    M: 56
  },
  "1929": {
    M: 42
  },
  "1930": {
    M: 36
  },
  "1931": {
    M: 45
  },
  "1932": {
    M: 35
  },
  "1933": {
    M: 38
  },
  "1934": {
    M: 49
  },
  "1935": {
    M: 39
  },
  "1936": {
    M: 39
  },
  "1937": {
    M: 31
  },
  "1938": {
    M: 56
  },
  "1939": {
    M: 36
  },
  "1940": {
    M: 51
  },
  "1941": {
    M: 55
  },
  "1942": {
    M: 61
  },
  "1943": {
    M: 56
  },
  "1944": {
    M: 68
  },
  "1945": {
    M: 63
  },
  "1946": {
    M: 101
  },
  "1947": {
    M: 103
  },
  "1948": {
    M: 111
  },
  "1949": {
    M: 118
  },
  "1950": {
    M: 136
  },
  "1951": {
    M: 158
  },
  "1952": {
    M: 154
  },
  "1953": {
    M: 170
  },
  "1954": {
    M: 176
  },
  "1955": {
    M: 196
  },
  "1956": {
    M: 242
  },
  "1957": {
    M: 225
  },
  "1958": {
    M: 278
  },
  "1959": {
    M: 352
  },
  "1960": {
    M: 400
  },
  "1961": {
    M: 674
  },
  "1962": {
    M: 645
  },
  "1963": {
    M: 755
  },
  "1964": {
    M: 833
  },
  "1965": {
    M: 838
  },
  "1966": {
    M: 865
  },
  "1967": {
    M: 995
  },
  "1968": {
    M: 964
  },
  "1969": {
    M: 853
  },
  "1970": {
    M: 910
  },
  "1971": {
    M: 837
  },
  "1972": {
    M: 812
  },
  "1973": {
    M: 734
  },
  "1974": {
    M: 700
  },
  "1975": {
    M: 692
  },
  "1976": {
    M: 604
  },
  "1977": {
    M: 634
  },
  "1978": {
    M: 632
  },
  "1979": {
    M: 655
  },
  "1980": {
    M: 563
  },
  "1981": {
    M: 586
  },
  "1982": {
    M: 574
  },
  "1983": {
    M: 557
  },
  "1984": {
    M: 536
  },
  "1985": {
    M: 496
  },
  "1986": {
    M: 469
  },
  "1987": {
    M: 536
  },
  "1988": {
    M: 555
  },
  "1989": {
    M: 444
  },
  "1990": {
    M: 406
  },
  "1991": {
    M: 440
  },
  "1992": {
    M: 351
  },
  "1993": {
    M: 340
  },
  "1994": {
    M: 281
  },
  "1995": {
    M: 243
  },
  "1996": {
    M: 214
  },
  "1997": {
    M: 201
  },
  "1998": {
    M: 155
  },
  "1999": {
    M: 138
  },
  "2000": {
    M: 147
  },
  "2001": {
    M: 97
  },
  "2002": {
    M: 106
  },
  "2003": {
    M: 106
  },
  "2004": {
    M: 97
  },
  "2005": {
    M: 95
  },
  "2006": {
    M: 73
  },
  "2007": {
    M: 66
  },
  "2008": {
    M: 71
  },
  "2009": {
    M: 57
  },
  "2010": {
    M: 41
  },
  "2011": {
    M: 61
  },
  "2012": {
    M: 51
  },
  "2013": {
    M: 64
  },
  "2014": {
    M: 45
  },
  "2015": {
    M: 42
  },
  "2016": {
    M: 42
  },
  "2017": {
    M: 43
  },
  "2018": {
    M: 31
  },
  "2019": {
    M: 39
  },
  "2020": {
    M: 20
  },
  "2021": {
    M: 19
  }
};
const Andy = {
  "1988": {
    M: 10
  },
  "1994": {
    M: 10
  },
  "1996": {
    M: 17
  },
  "1997": {
    M: 10
  },
  "1998": {
    M: 14
  },
  "1999": {
    M: 19
  },
  "2000": {
    M: 12
  },
  "2003": {
    M: 12
  },
  "2004": {
    M: 17
  },
  "2005": {
    M: 18
  },
  "2006": {
    M: 11
  },
  "2007": {
    M: 15
  },
  "2008": {
    M: 12
  },
  "2010": {
    M: 12
  },
  "2012": {
    M: 12
  },
  "2013": {
    M: 15
  },
  "2014": {
    M: 10
  },
  "2015": {
    M: 15
  },
  "2017": {
    M: 11
  },
  "2020": {
    M: 11
  }
};
const Angad = {
  "2018": {
    M: 10
  },
  "2021": {
    M: 12
  }
};
const Angel = {
  "1981": {
    F: 11
  },
  "1990": {
    F: 10
  },
  "1991": {
    F: 13
  },
  "1993": {
    F: 15
  },
  "1994": {
    F: 18
  },
  "1995": {
    F: 19
  },
  "1996": {
    F: 27
  },
  "1997": {
    F: 45
  },
  "1998": {
    F: 61
  },
  "1999": {
    F: 57
  },
  "2000": {
    F: 72
  },
  "2001": {
    F: 60
  },
  "2002": {
    F: 58
  },
  "2003": {
    F: 56
  },
  "2004": {
    F: 69
  },
  "2005": {
    F: 57
  },
  "2006": {
    F: 58
  },
  "2007": {
    F: 57
  },
  "2008": {
    F: 54
  },
  "2009": {
    F: 21
  },
  "2010": {
    F: 37
  },
  "2011": {
    F: 47
  },
  "2012": {
    F: 29
  },
  "2013": {
    F: 34
  },
  "2014": {
    F: 35
  },
  "2015": {
    F: 27
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 28
  },
  "2018": {
    F: 22
  },
  "2019": {
    F: 23
  },
  "2020": {
    F: 17
  },
  "2021": {
    F: 19
  }
};
const Angela = {
  "1935": {
    F: 11
  },
  "1936": {
    F: 13
  },
  "1937": {
    F: 28
  },
  "1938": {
    F: 13
  },
  "1939": {
    F: 25
  },
  "1940": {
    F: 17
  },
  "1941": {
    F: 29
  },
  "1942": {
    F: 16
  },
  "1943": {
    F: 20
  },
  "1944": {
    F: 21
  },
  "1945": {
    F: 20
  },
  "1946": {
    F: 33
  },
  "1947": {
    F: 37
  },
  "1948": {
    F: 35
  },
  "1949": {
    F: 32
  },
  "1950": {
    F: 28
  },
  "1951": {
    F: 49
  },
  "1952": {
    F: 56
  },
  "1953": {
    F: 69
  },
  "1954": {
    F: 77
  },
  "1955": {
    F: 79
  },
  "1956": {
    F: 89
  },
  "1957": {
    F: 112
  },
  "1958": {
    F: 115
  },
  "1959": {
    F: 109
  },
  "1960": {
    F: 143
  },
  "1961": {
    F: 201
  },
  "1962": {
    F: 197
  },
  "1963": {
    F: 238
  },
  "1964": {
    F: 284
  },
  "1965": {
    F: 292
  },
  "1966": {
    F: 356
  },
  "1967": {
    F: 410
  },
  "1968": {
    F: 410
  },
  "1969": {
    F: 427
  },
  "1970": {
    F: 409
  },
  "1971": {
    F: 414
  },
  "1972": {
    F: 455
  },
  "1973": {
    F: 440
  },
  "1974": {
    F: 438
  },
  "1975": {
    F: 474
  },
  "1976": {
    F: 404
  },
  "1977": {
    F: 434
  },
  "1978": {
    F: 351
  },
  "1979": {
    F: 368
  },
  "1980": {
    F: 274
  },
  "1981": {
    F: 255
  },
  "1982": {
    F: 216
  },
  "1983": {
    F: 194
  },
  "1984": {
    F: 164
  },
  "1985": {
    F: 146
  },
  "1986": {
    F: 141
  },
  "1987": {
    F: 118
  },
  "1988": {
    F: 84
  },
  "1989": {
    F: 88
  },
  "1990": {
    F: 53
  },
  "1991": {
    F: 75
  },
  "1992": {
    F: 52
  },
  "1993": {
    F: 43
  },
  "1994": {
    F: 40
  },
  "1995": {
    F: 32
  },
  "1996": {
    F: 46
  },
  "1997": {
    F: 30
  },
  "1998": {
    F: 48
  },
  "1999": {
    F: 37
  },
  "2000": {
    F: 32
  },
  "2001": {
    F: 29
  },
  "2002": {
    F: 23
  },
  "2003": {
    F: 28
  },
  "2004": {
    F: 25
  },
  "2005": {
    F: 28
  },
  "2006": {
    F: 27
  },
  "2007": {
    F: 36
  },
  "2008": {
    F: 19
  },
  "2009": {
    F: 21
  },
  "2010": {
    F: 32
  },
  "2011": {
    F: 26
  },
  "2012": {
    F: 31
  },
  "2013": {
    F: 31
  },
  "2014": {
    F: 19
  },
  "2015": {
    F: 33
  },
  "2016": {
    F: 22
  },
  "2017": {
    F: 12
  },
  "2018": {
    F: 13
  },
  "2019": {
    F: 18
  }
};
const Angelene = {
  "1968": {
    F: 10
  }
};
const Angelica = {
  "2007": {
    F: 11
  }
};
const Angelina = {
  "1971": {
    F: 19
  },
  "1972": {
    F: 23
  },
  "1973": {
    F: 16
  },
  "1974": {
    F: 10
  },
  "1975": {
    F: 10
  },
  "1979": {
    F: 13
  },
  "1981": {
    F: 10
  },
  "1985": {
    F: 10
  },
  "1987": {
    F: 12
  },
  "1988": {
    F: 11
  },
  "1990": {
    F: 16
  },
  "1991": {
    F: 12
  },
  "1992": {
    F: 12
  },
  "2000": {
    F: 10
  },
  "2001": {
    F: 20
  },
  "2002": {
    F: 16
  },
  "2003": {
    F: 22
  },
  "2004": {
    F: 43
  },
  "2005": {
    F: 30
  },
  "2006": {
    F: 25
  },
  "2007": {
    F: 36
  },
  "2008": {
    F: 24
  },
  "2009": {
    F: 12
  },
  "2010": {
    F: 14
  },
  "2011": {
    F: 21
  },
  "2012": {
    F: 15
  },
  "2014": {
    F: 13
  },
  "2015": {
    F: 11
  },
  "2017": {
    F: 15
  }
};
const Angeline = {
  "1964": {
    F: 10
  },
  "1967": {
    F: 13
  },
  "1968": {
    F: 16
  },
  "1969": {
    F: 15
  },
  "1970": {
    F: 16
  },
  "1971": {
    F: 13
  },
  "1972": {
    F: 22
  },
  "1973": {
    F: 17
  },
  "1974": {
    F: 20
  },
  "1975": {
    F: 12
  },
  "1976": {
    F: 11
  },
  "1977": {
    F: 10
  },
  "1990": {
    F: 12
  }
};
const Angelique = {
  "1963": {
    F: 15
  },
  "1964": {
    F: 12
  },
  "1965": {
    F: 13
  },
  "1967": {
    F: 16
  },
  "1968": {
    F: 15
  },
  "1969": {
    F: 10
  },
  "1972": {
    F: 13
  },
  "1973": {
    F: 11
  },
  "1974": {
    F: 15
  },
  "1975": {
    F: 17
  },
  "1978": {
    F: 10
  },
  "1983": {
    F: 14
  },
  "1984": {
    F: 15
  },
  "1985": {
    F: 10
  },
  "1986": {
    F: 18
  },
  "1987": {
    F: 15
  }
};
const Angelo = {
  "2004": {
    M: 12
  },
  "2008": {
    M: 12
  },
  "2010": {
    M: 12
  },
  "2011": {
    M: 10
  },
  "2014": {
    M: 12
  },
  "2015": {
    M: 11
  },
  "2016": {
    M: 12
  },
  "2018": {
    M: 13
  }
};
const Angie = {
  "1974": {
    F: 10
  },
  "1976": {
    F: 26
  },
  "1977": {
    F: 17
  },
  "1979": {
    F: 18
  },
  "1980": {
    F: 12
  },
  "1981": {
    F: 10
  }
};
const Angus = {
  "1900": {
    M: 17
  },
  "1901": {
    M: 16
  },
  "1902": {
    M: 14
  },
  "1903": {
    M: 12
  },
  "1906": {
    M: 12
  },
  "1907": {
    M: 10
  },
  "1908": {
    M: 15
  },
  "1909": {
    M: 12
  },
  "1910": {
    M: 14
  },
  "1912": {
    M: 23
  },
  "1913": {
    M: 14
  },
  "1914": {
    M: 17
  },
  "1916": {
    M: 22
  },
  "1917": {
    M: 10
  },
  "1918": {
    M: 13
  },
  "1919": {
    M: 18
  },
  "1922": {
    M: 14
  },
  "1923": {
    M: 14
  },
  "1925": {
    M: 13
  },
  "1931": {
    M: 12
  },
  "1932": {
    M: 10
  },
  "1940": {
    M: 13
  },
  "1945": {
    M: 10
  },
  "1948": {
    M: 10
  },
  "1949": {
    M: 13
  },
  "1951": {
    M: 10
  },
  "1953": {
    M: 15
  },
  "1962": {
    M: 16
  },
  "1963": {
    M: 13
  },
  "1964": {
    M: 19
  },
  "1965": {
    M: 16
  },
  "1966": {
    M: 21
  },
  "1967": {
    M: 19
  },
  "1968": {
    M: 17
  },
  "1969": {
    M: 20
  },
  "1970": {
    M: 16
  },
  "1971": {
    M: 20
  },
  "1972": {
    M: 21
  },
  "1973": {
    M: 26
  },
  "1974": {
    M: 17
  },
  "1975": {
    M: 21
  },
  "1976": {
    M: 25
  },
  "1977": {
    M: 19
  },
  "1978": {
    M: 22
  },
  "1979": {
    M: 20
  },
  "1980": {
    M: 12
  },
  "1981": {
    M: 19
  },
  "1982": {
    M: 18
  },
  "1983": {
    M: 17
  },
  "1985": {
    M: 15
  },
  "1986": {
    M: 20
  },
  "1987": {
    M: 18
  },
  "1988": {
    M: 25
  },
  "1989": {
    M: 23
  },
  "1990": {
    M: 26
  },
  "1991": {
    M: 44
  },
  "1992": {
    M: 38
  },
  "1993": {
    M: 42
  },
  "1994": {
    M: 53
  },
  "1995": {
    M: 64
  },
  "1996": {
    M: 69
  },
  "1997": {
    M: 61
  },
  "1998": {
    M: 87
  },
  "1999": {
    M: 88
  },
  "2000": {
    M: 71
  },
  "2001": {
    M: 77
  },
  "2002": {
    M: 68
  },
  "2003": {
    M: 82
  },
  "2004": {
    M: 70
  },
  "2005": {
    M: 72
  },
  "2006": {
    M: 87
  },
  "2007": {
    M: 81
  },
  "2008": {
    M: 70
  },
  "2009": {
    M: 77
  },
  "2010": {
    M: 95
  },
  "2011": {
    M: 73
  },
  "2012": {
    M: 80
  },
  "2013": {
    M: 54
  },
  "2014": {
    M: 57
  },
  "2015": {
    M: 78
  },
  "2016": {
    M: 75
  },
  "2017": {
    M: 60
  },
  "2018": {
    M: 57
  },
  "2019": {
    M: 70
  },
  "2020": {
    M: 60
  },
  "2021": {
    M: 46
  }
};
const Ani = {
  "1923": {
    F: 10
  },
  "1928": {
    F: 12
  },
  "1931": {
    F: 11
  },
  "1934": {
    F: 12
  },
  "1935": {
    F: 12
  },
  "1937": {
    F: 10
  },
  "1942": {
    F: 11
  },
  "1946": {
    F: 12
  },
  "1950": {
    F: 14
  },
  "1953": {
    F: 10
  },
  "1982": {
    F: 10
  },
  "1989": {
    F: 10
  }
};
const Anika = {
  "1980": {
    F: 11
  },
  "2002": {
    F: 33
  },
  "2003": {
    F: 30
  },
  "2004": {
    F: 23
  },
  "2005": {
    F: 38
  },
  "2006": {
    F: 43
  },
  "2007": {
    F: 32
  },
  "2008": {
    F: 46
  },
  "2009": {
    F: 39
  },
  "2010": {
    F: 34
  },
  "2011": {
    F: 26
  },
  "2012": {
    F: 24
  },
  "2013": {
    F: 24
  },
  "2014": {
    F: 18
  },
  "2015": {
    F: 25
  },
  "2016": {
    F: 21
  },
  "2017": {
    F: 25
  },
  "2018": {
    F: 23
  },
  "2019": {
    F: 23
  },
  "2020": {
    F: 10
  },
  "2021": {
    F: 18
  }
};
const Anisha = {
  "2009": {
    F: 12
  }
};
const Anita = {
  "1921": {
    F: 12
  },
  "1922": {
    F: 14
  },
  "1923": {
    F: 12
  },
  "1925": {
    F: 15
  },
  "1926": {
    F: 12
  },
  "1927": {
    F: 11
  },
  "1929": {
    F: 11
  },
  "1930": {
    F: 12
  },
  "1931": {
    F: 14
  },
  "1932": {
    F: 15
  },
  "1934": {
    F: 16
  },
  "1935": {
    F: 12
  },
  "1936": {
    F: 15
  },
  "1937": {
    F: 16
  },
  "1938": {
    F: 16
  },
  "1939": {
    F: 22
  },
  "1940": {
    F: 27
  },
  "1941": {
    F: 19
  },
  "1942": {
    F: 18
  },
  "1943": {
    F: 21
  },
  "1944": {
    F: 25
  },
  "1945": {
    F: 15
  },
  "1946": {
    F: 26
  },
  "1947": {
    F: 24
  },
  "1948": {
    F: 22
  },
  "1949": {
    F: 16
  },
  "1950": {
    F: 20
  },
  "1951": {
    F: 15
  },
  "1952": {
    F: 20
  },
  "1953": {
    F: 28
  },
  "1954": {
    F: 21
  },
  "1955": {
    F: 25
  },
  "1956": {
    F: 26
  },
  "1957": {
    F: 26
  },
  "1958": {
    F: 39
  },
  "1959": {
    F: 46
  },
  "1960": {
    F: 56
  },
  "1961": {
    F: 39
  },
  "1962": {
    F: 42
  },
  "1963": {
    F: 44
  },
  "1964": {
    F: 59
  },
  "1965": {
    F: 51
  },
  "1966": {
    F: 58
  },
  "1967": {
    F: 59
  },
  "1968": {
    F: 71
  },
  "1969": {
    F: 78
  },
  "1970": {
    F: 83
  },
  "1971": {
    F: 75
  },
  "1972": {
    F: 69
  },
  "1973": {
    F: 89
  },
  "1974": {
    F: 83
  },
  "1975": {
    F: 82
  },
  "1976": {
    F: 75
  },
  "1977": {
    F: 101
  },
  "1978": {
    F: 74
  },
  "1979": {
    F: 70
  },
  "1980": {
    F: 97
  },
  "1981": {
    F: 86
  },
  "1982": {
    F: 69
  },
  "1983": {
    F: 59
  },
  "1984": {
    F: 51
  },
  "1985": {
    F: 56
  },
  "1986": {
    F: 55
  },
  "1987": {
    F: 49
  },
  "1988": {
    F: 47
  },
  "1989": {
    F: 50
  },
  "1990": {
    F: 41
  },
  "1991": {
    F: 43
  },
  "1992": {
    F: 44
  },
  "1993": {
    F: 32
  },
  "1994": {
    F: 28
  },
  "1995": {
    F: 26
  },
  "1996": {
    F: 23
  },
  "1997": {
    F: 21
  },
  "1998": {
    F: 24
  },
  "1999": {
    F: 16
  },
  "2000": {
    F: 12
  },
  "2001": {
    F: 12
  },
  "2002": {
    F: 14
  },
  "2003": {
    F: 23
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 12
  },
  "2006": {
    F: 15
  },
  "2007": {
    F: 14
  },
  "2008": {
    F: 16
  },
  "2012": {
    F: 10
  }
};
const Anjali = {
  "2000": {
    F: 10
  }
};
const Ann = {
  "1900": {
    F: 16
  },
  "1901": {
    F: 14
  },
  "1902": {
    F: 10
  },
  "1903": {
    F: 13
  },
  "1904": {
    F: 17
  },
  "1905": {
    F: 15
  },
  "1906": {
    F: 11
  },
  "1907": {
    F: 13
  },
  "1909": {
    F: 17
  },
  "1910": {
    F: 13
  },
  "1912": {
    F: 10
  },
  "1914": {
    F: 11
  },
  "1917": {
    F: 11
  },
  "1918": {
    F: 11
  },
  "1927": {
    F: 17
  },
  "1928": {
    F: 17
  },
  "1929": {
    F: 14
  },
  "1930": {
    F: 23
  },
  "1931": {
    F: 29
  },
  "1932": {
    F: 39
  },
  "1933": {
    F: 32
  },
  "1934": {
    F: 56
  },
  "1935": {
    F: 58
  },
  "1936": {
    F: 73
  },
  "1937": {
    F: 76
  },
  "1938": {
    F: 89
  },
  "1939": {
    F: 88
  },
  "1940": {
    F: 126
  },
  "1941": {
    F: 116
  },
  "1942": {
    F: 79
  },
  "1943": {
    F: 101
  },
  "1944": {
    F: 107
  },
  "1945": {
    F: 89
  },
  "1946": {
    F: 121
  },
  "1947": {
    F: 149
  },
  "1948": {
    F: 129
  },
  "1949": {
    F: 139
  },
  "1950": {
    F: 144
  },
  "1951": {
    F: 142
  },
  "1952": {
    F: 187
  },
  "1953": {
    F: 156
  },
  "1954": {
    F: 150
  },
  "1955": {
    F: 159
  },
  "1956": {
    F: 152
  },
  "1957": {
    F: 127
  },
  "1958": {
    F: 139
  },
  "1959": {
    F: 137
  },
  "1960": {
    F: 123
  },
  "1961": {
    F: 114
  },
  "1962": {
    F: 114
  },
  "1963": {
    F: 111
  },
  "1964": {
    F: 104
  },
  "1965": {
    F: 105
  },
  "1966": {
    F: 76
  },
  "1967": {
    F: 80
  },
  "1968": {
    F: 72
  },
  "1969": {
    F: 72
  },
  "1970": {
    F: 53
  },
  "1971": {
    F: 39
  },
  "1972": {
    F: 35
  },
  "1973": {
    F: 35
  },
  "1974": {
    F: 24
  },
  "1975": {
    F: 28
  },
  "1976": {
    F: 25
  },
  "1977": {
    F: 20
  },
  "1978": {
    F: 18
  },
  "1979": {
    F: 12
  },
  "1980": {
    F: 21
  },
  "1981": {
    F: 11
  },
  "1982": {
    F: 11
  },
  "1983": {
    F: 18
  },
  "1984": {
    F: 11
  },
  "1987": {
    F: 11
  },
  "1989": {
    F: 13
  }
};
const Anna = {
  "1900": {
    F: 16
  },
  "1901": {
    F: 12
  },
  "1905": {
    F: 15
  },
  "1906": {
    F: 14
  },
  "1907": {
    F: 14
  },
  "1908": {
    F: 12
  },
  "1909": {
    F: 10
  },
  "1911": {
    F: 12
  },
  "1912": {
    F: 10
  },
  "1914": {
    F: 16
  },
  "1915": {
    F: 13
  },
  "1916": {
    F: 12
  },
  "1917": {
    F: 11
  },
  "1918": {
    F: 14
  },
  "1925": {
    F: 10
  },
  "1926": {
    F: 13
  },
  "1927": {
    F: 11
  },
  "1929": {
    F: 16
  },
  "1935": {
    F: 13
  },
  "1938": {
    F: 14
  },
  "1939": {
    F: 11
  },
  "1940": {
    F: 11
  },
  "1941": {
    F: 12
  },
  "1942": {
    F: 19
  },
  "1943": {
    F: 19
  },
  "1944": {
    F: 20
  },
  "1945": {
    F: 16
  },
  "1946": {
    F: 29
  },
  "1947": {
    F: 24
  },
  "1948": {
    F: 30
  },
  "1949": {
    F: 29
  },
  "1950": {
    F: 27
  },
  "1951": {
    F: 28
  },
  "1952": {
    F: 36
  },
  "1953": {
    F: 37
  },
  "1954": {
    F: 49
  },
  "1955": {
    F: 55
  },
  "1956": {
    F: 74
  },
  "1957": {
    F: 71
  },
  "1958": {
    F: 68
  },
  "1959": {
    F: 50
  },
  "1960": {
    F: 83
  },
  "1961": {
    F: 92
  },
  "1962": {
    F: 94
  },
  "1963": {
    F: 103
  },
  "1964": {
    F: 98
  },
  "1965": {
    F: 97
  },
  "1966": {
    F: 109
  },
  "1967": {
    F: 128
  },
  "1968": {
    F: 141
  },
  "1969": {
    F: 120
  },
  "1970": {
    F: 142
  },
  "1971": {
    F: 168
  },
  "1972": {
    F: 173
  },
  "1973": {
    F: 201
  },
  "1974": {
    F: 219
  },
  "1975": {
    F: 198
  },
  "1976": {
    F: 222
  },
  "1977": {
    F: 312
  },
  "1978": {
    F: 270
  },
  "1979": {
    F: 359
  },
  "1980": {
    F: 391
  },
  "1981": {
    F: 353
  },
  "1982": {
    F: 318
  },
  "1983": {
    F: 301
  },
  "1984": {
    F: 265
  },
  "1985": {
    F: 240
  },
  "1986": {
    F: 230
  },
  "1987": {
    F: 262
  },
  "1988": {
    F: 264
  },
  "1989": {
    F: 210
  },
  "1990": {
    F: 213
  },
  "1991": {
    F: 194
  },
  "1992": {
    F: 167
  },
  "1993": {
    F: 164
  },
  "1994": {
    F: 152
  },
  "1995": {
    F: 154
  },
  "1996": {
    F: 133
  },
  "1997": {
    F: 117
  },
  "1998": {
    F: 112
  },
  "1999": {
    F: 130
  },
  "2000": {
    F: 122
  },
  "2001": {
    F: 129
  },
  "2002": {
    F: 128
  },
  "2003": {
    F: 115
  },
  "2004": {
    F: 90
  },
  "2005": {
    F: 109
  },
  "2006": {
    F: 90
  },
  "2007": {
    F: 84
  },
  "2008": {
    F: 92
  },
  "2009": {
    F: 76
  },
  "2010": {
    F: 58
  },
  "2011": {
    F: 84
  },
  "2012": {
    F: 57
  },
  "2013": {
    F: 61
  },
  "2014": {
    F: 54
  },
  "2015": {
    F: 69
  },
  "2016": {
    F: 57
  },
  "2017": {
    F: 52
  },
  "2018": {
    F: 50
  },
  "2019": {
    F: 44
  },
  "2020": {
    F: 37
  },
  "2021": {
    F: 43
  }
};
const Annabel = {
  "1963": {
    F: 11
  },
  "1967": {
    F: 10
  },
  "1968": {
    F: 14
  },
  "1969": {
    F: 10
  },
  "1970": {
    F: 17
  },
  "1971": {
    F: 18
  },
  "1972": {
    F: 14
  },
  "1973": {
    F: 14
  },
  "1974": {
    F: 13
  },
  "1977": {
    F: 10
  },
  "1978": {
    F: 15
  },
  "1979": {
    F: 13
  },
  "1981": {
    F: 13
  },
  "1982": {
    F: 11
  },
  "1986": {
    F: 10
  },
  "1987": {
    F: 11
  },
  "1988": {
    F: 17
  },
  "1989": {
    F: 15
  },
  "1990": {
    F: 12
  },
  "1991": {
    F: 13
  },
  "1992": {
    F: 14
  },
  "1993": {
    F: 19
  },
  "1994": {
    F: 19
  },
  "1995": {
    F: 12
  },
  "1996": {
    F: 17
  },
  "1997": {
    F: 25
  },
  "1998": {
    F: 20
  },
  "1999": {
    F: 19
  },
  "2000": {
    F: 18
  },
  "2001": {
    F: 22
  },
  "2002": {
    F: 19
  },
  "2003": {
    F: 19
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 22
  },
  "2006": {
    F: 21
  },
  "2007": {
    F: 26
  },
  "2008": {
    F: 27
  },
  "2009": {
    F: 26
  },
  "2010": {
    F: 23
  },
  "2011": {
    F: 37
  },
  "2012": {
    F: 25
  },
  "2013": {
    F: 37
  },
  "2014": {
    F: 34
  },
  "2015": {
    F: 19
  },
  "2016": {
    F: 25
  },
  "2017": {
    F: 25
  },
  "2018": {
    F: 20
  },
  "2019": {
    F: 21
  },
  "2020": {
    F: 13
  },
  "2021": {
    F: 14
  }
};
const Annabella = {
  "2012": {
    F: 10
  }
};
const Annabelle = {
  "1972": {
    F: 13
  },
  "1987": {
    F: 12
  },
  "1990": {
    F: 11
  },
  "1992": {
    F: 15
  },
  "1993": {
    F: 13
  },
  "1994": {
    F: 16
  },
  "1995": {
    F: 16
  },
  "1996": {
    F: 25
  },
  "1997": {
    F: 17
  },
  "1998": {
    F: 28
  },
  "1999": {
    F: 26
  },
  "2000": {
    F: 21
  },
  "2001": {
    F: 32
  },
  "2002": {
    F: 21
  },
  "2003": {
    F: 21
  },
  "2004": {
    F: 27
  },
  "2005": {
    F: 29
  },
  "2006": {
    F: 28
  },
  "2007": {
    F: 32
  },
  "2008": {
    F: 40
  },
  "2009": {
    F: 48
  },
  "2010": {
    F: 75
  },
  "2011": {
    F: 58
  },
  "2012": {
    F: 72
  },
  "2013": {
    F: 59
  },
  "2014": {
    F: 50
  },
  "2015": {
    F: 62
  },
  "2016": {
    F: 41
  },
  "2017": {
    F: 44
  },
  "2018": {
    F: 43
  },
  "2019": {
    F: 44
  },
  "2020": {
    F: 41
  },
  "2021": {
    F: 34
  }
};
const Annaliese = {
  "1999": {
    F: 10
  },
  "2007": {
    F: 12
  }
};
const Annalise = {
  "1990": {
    F: 12
  },
  "1992": {
    F: 17
  },
  "1993": {
    F: 10
  },
  "1994": {
    F: 20
  },
  "1995": {
    F: 21
  },
  "1996": {
    F: 16
  },
  "1997": {
    F: 15
  },
  "1998": {
    F: 16
  },
  "1999": {
    F: 11
  },
  "2000": {
    F: 20
  },
  "2001": {
    F: 11
  },
  "2002": {
    F: 14
  },
  "2003": {
    F: 13
  },
  "2004": {
    F: 17
  },
  "2005": {
    F: 19
  },
  "2007": {
    F: 12
  },
  "2012": {
    F: 11
  }
};
const Anne = {
  "1906": {
    F: 10
  },
  "1907": {
    F: 10
  },
  "1909": {
    F: 10
  },
  "1911": {
    F: 12
  },
  "1914": {
    F: 11
  },
  "1915": {
    F: 12
  },
  "1916": {
    F: 12
  },
  "1917": {
    F: 10
  },
  "1923": {
    F: 12
  },
  "1924": {
    F: 12
  },
  "1925": {
    F: 23
  },
  "1926": {
    F: 24
  },
  "1927": {
    F: 22
  },
  "1928": {
    F: 29
  },
  "1929": {
    F: 31
  },
  "1930": {
    F: 39
  },
  "1931": {
    F: 50
  },
  "1932": {
    F: 60
  },
  "1933": {
    F: 82
  },
  "1934": {
    F: 71
  },
  "1935": {
    F: 87
  },
  "1936": {
    F: 102
  },
  "1937": {
    F: 101
  },
  "1938": {
    F: 111
  },
  "1939": {
    F: 119
  },
  "1940": {
    F: 144
  },
  "1941": {
    F: 141
  },
  "1942": {
    F: 107
  },
  "1943": {
    F: 107
  },
  "1944": {
    F: 109
  },
  "1945": {
    F: 136
  },
  "1946": {
    F: 135
  },
  "1947": {
    F: 187
  },
  "1948": {
    F: 177
  },
  "1949": {
    F: 177
  },
  "1950": {
    F: 240
  },
  "1951": {
    F: 285
  },
  "1952": {
    F: 270
  },
  "1953": {
    F: 288
  },
  "1954": {
    F: 328
  },
  "1955": {
    F: 311
  },
  "1956": {
    F: 318
  },
  "1957": {
    F: 310
  },
  "1958": {
    F: 263
  },
  "1959": {
    F: 261
  },
  "1960": {
    F: 264
  },
  "1961": {
    F: 249
  },
  "1962": {
    F: 223
  },
  "1963": {
    F: 222
  },
  "1964": {
    F: 195
  },
  "1965": {
    F: 165
  },
  "1966": {
    F: 164
  },
  "1967": {
    F: 131
  },
  "1968": {
    F: 121
  },
  "1969": {
    F: 97
  },
  "1970": {
    F: 98
  },
  "1971": {
    F: 84
  },
  "1972": {
    F: 70
  },
  "1973": {
    F: 60
  },
  "1974": {
    F: 52
  },
  "1975": {
    F: 51
  },
  "1976": {
    F: 46
  },
  "1977": {
    F: 45
  },
  "1978": {
    F: 40
  },
  "1979": {
    F: 40
  },
  "1980": {
    F: 25
  },
  "1981": {
    F: 31
  },
  "1982": {
    F: 29
  },
  "1983": {
    F: 27
  },
  "1984": {
    F: 32
  },
  "1985": {
    F: 23
  },
  "1986": {
    F: 23
  },
  "1987": {
    F: 24
  },
  "1988": {
    F: 25
  },
  "1989": {
    F: 21
  },
  "1990": {
    F: 26
  },
  "1991": {
    F: 17
  },
  "1992": {
    F: 14
  },
  "1993": {
    F: 13
  },
  "1994": {
    F: 10
  },
  "1995": {
    F: 13
  },
  "1997": {
    F: 10
  },
  "1999": {
    F: 12
  },
  "2003": {
    F: 12
  },
  "2004": {
    F: 11
  },
  "2008": {
    F: 10
  }
};
const Anneke = {
  "1985": {
    F: 10
  },
  "1990": {
    F: 10
  },
  "1992": {
    F: 13
  }
};
const Annelise = {
  "1992": {
    F: 19
  },
  "1993": {
    F: 11
  },
  "2003": {
    F: 11
  }
};
const Annemarie = {
  "1959": {
    F: 12
  },
  "1967": {
    F: 11
  },
  "1968": {
    F: 13
  }
};
const Annette = {
  "1924": {
    F: 19
  },
  "1925": {
    F: 13
  },
  "1927": {
    F: 15
  },
  "1928": {
    F: 17
  },
  "1929": {
    F: 14
  },
  "1930": {
    F: 17
  },
  "1931": {
    F: 17
  },
  "1932": {
    F: 18
  },
  "1933": {
    F: 23
  },
  "1934": {
    F: 28
  },
  "1935": {
    F: 31
  },
  "1936": {
    F: 43
  },
  "1937": {
    F: 56
  },
  "1938": {
    F: 69
  },
  "1939": {
    F: 90
  },
  "1940": {
    F: 114
  },
  "1941": {
    F: 95
  },
  "1942": {
    F: 106
  },
  "1943": {
    F: 95
  },
  "1944": {
    F: 108
  },
  "1945": {
    F: 112
  },
  "1946": {
    F: 116
  },
  "1947": {
    F: 159
  },
  "1948": {
    F: 141
  },
  "1949": {
    F: 136
  },
  "1950": {
    F: 140
  },
  "1951": {
    F: 129
  },
  "1952": {
    F: 151
  },
  "1953": {
    F: 128
  },
  "1954": {
    F: 144
  },
  "1955": {
    F: 154
  },
  "1956": {
    F: 157
  },
  "1957": {
    F: 164
  },
  "1958": {
    F: 162
  },
  "1959": {
    F: 162
  },
  "1960": {
    F: 144
  },
  "1961": {
    F: 161
  },
  "1962": {
    F: 153
  },
  "1963": {
    F: 129
  },
  "1964": {
    F: 131
  },
  "1965": {
    F: 108
  },
  "1966": {
    F: 89
  },
  "1967": {
    F: 98
  },
  "1968": {
    F: 102
  },
  "1969": {
    F: 75
  },
  "1970": {
    F: 62
  },
  "1971": {
    F: 81
  },
  "1972": {
    F: 59
  },
  "1973": {
    F: 69
  },
  "1974": {
    F: 66
  },
  "1975": {
    F: 47
  },
  "1976": {
    F: 39
  },
  "1977": {
    F: 32
  },
  "1978": {
    F: 30
  },
  "1979": {
    F: 27
  },
  "1980": {
    F: 20
  },
  "1981": {
    F: 24
  },
  "1982": {
    F: 15
  },
  "1983": {
    F: 19
  },
  "1984": {
    F: 14
  },
  "1985": {
    F: 16
  },
  "1986": {
    F: 13
  },
  "1987": {
    F: 11
  }
};
const Annie = {
  "1900": {
    F: 239
  },
  "1901": {
    F: 241
  },
  "1902": {
    F: 221
  },
  "1903": {
    F: 229
  },
  "1904": {
    F: 254
  },
  "1905": {
    F: 241
  },
  "1906": {
    F: 174
  },
  "1907": {
    F: 228
  },
  "1908": {
    F: 214
  },
  "1909": {
    F: 223
  },
  "1910": {
    F: 182
  },
  "1911": {
    F: 210
  },
  "1912": {
    F: 184
  },
  "1913": {
    F: 215
  },
  "1914": {
    F: 181
  },
  "1915": {
    F: 176
  },
  "1916": {
    F: 155
  },
  "1917": {
    F: 174
  },
  "1918": {
    F: 136
  },
  "1919": {
    F: 98
  },
  "1920": {
    F: 137
  },
  "1921": {
    F: 120
  },
  "1922": {
    F: 102
  },
  "1923": {
    F: 110
  },
  "1924": {
    F: 96
  },
  "1925": {
    F: 80
  },
  "1926": {
    F: 62
  },
  "1927": {
    F: 65
  },
  "1928": {
    F: 67
  },
  "1929": {
    F: 58
  },
  "1930": {
    F: 51
  },
  "1931": {
    F: 41
  },
  "1932": {
    F: 37
  },
  "1933": {
    F: 38
  },
  "1934": {
    F: 34
  },
  "1935": {
    F: 22
  },
  "1936": {
    F: 29
  },
  "1937": {
    F: 33
  },
  "1938": {
    F: 21
  },
  "1939": {
    F: 21
  },
  "1940": {
    F: 24
  },
  "1941": {
    F: 17
  },
  "1942": {
    F: 15
  },
  "1943": {
    F: 14
  },
  "1944": {
    F: 17
  },
  "1945": {
    F: 27
  },
  "1946": {
    F: 25
  },
  "1947": {
    F: 15
  },
  "1948": {
    F: 19
  },
  "1949": {
    F: 11
  },
  "1950": {
    F: 20
  },
  "1952": {
    F: 18
  },
  "1953": {
    F: 16
  },
  "1956": {
    F: 10
  },
  "1957": {
    F: 15
  },
  "1958": {
    F: 11
  },
  "1959": {
    F: 12
  },
  "1960": {
    F: 11
  },
  "1962": {
    F: 11
  },
  "1963": {
    F: 10
  },
  "1971": {
    F: 12
  },
  "1972": {
    F: 10
  },
  "1975": {
    F: 10
  },
  "1980": {
    F: 10
  },
  "1981": {
    F: 16
  },
  "1983": {
    F: 11
  },
  "1984": {
    F: 20
  },
  "1987": {
    F: 19
  },
  "1988": {
    F: 13
  },
  "1989": {
    F: 19
  },
  "1990": {
    F: 22
  },
  "1991": {
    F: 29
  },
  "1992": {
    F: 24
  },
  "1993": {
    F: 14
  },
  "1994": {
    F: 25
  },
  "1995": {
    F: 23
  },
  "1996": {
    F: 26
  },
  "1997": {
    F: 19
  },
  "1998": {
    F: 31
  },
  "1999": {
    F: 26
  },
  "2000": {
    F: 29
  },
  "2001": {
    F: 19
  },
  "2002": {
    F: 23
  },
  "2003": {
    F: 22
  },
  "2004": {
    F: 17
  },
  "2005": {
    F: 16
  },
  "2006": {
    F: 21
  },
  "2007": {
    F: 15
  },
  "2008": {
    F: 18
  },
  "2009": {
    F: 14
  },
  "2010": {
    F: 20
  },
  "2011": {
    F: 16
  },
  "2012": {
    F: 17
  },
  "2013": {
    F: 25
  },
  "2014": {
    F: 17
  },
  "2015": {
    F: 16
  },
  "2016": {
    F: 19
  },
  "2017": {
    F: 29
  },
  "2018": {
    F: 18
  },
  "2019": {
    F: 13
  },
  "2020": {
    F: 18
  },
  "2021": {
    F: 17
  }
};
const Annika = {
  "1980": {
    F: 11
  },
  "2002": {
    F: 14
  },
  "2006": {
    F: 15
  },
  "2007": {
    F: 12
  },
  "2008": {
    F: 11
  }
};
const Ansh = {
  "2013": {
    M: 12
  },
  "2019": {
    M: 10
  }
};
const Anthea = {
  "1949": {
    F: 11
  },
  "1955": {
    F: 10
  },
  "1962": {
    F: 12
  },
  "1964": {
    F: 12
  },
  "1965": {
    F: 14
  },
  "1972": {
    F: 11
  },
  "1973": {
    F: 10
  },
  "1974": {
    F: 15
  },
  "1976": {
    F: 12
  },
  "1977": {
    F: 18
  },
  "1978": {
    F: 26
  },
  "1979": {
    F: 22
  },
  "1980": {
    F: 12
  },
  "1981": {
    F: 13
  },
  "1982": {
    F: 11
  },
  "1983": {
    F: 14
  }
};
const Anthony = {
  "1900": {
    M: 11
  },
  "1906": {
    M: 10
  },
  "1907": {
    M: 14
  },
  "1909": {
    M: 14
  },
  "1910": {
    M: 14
  },
  "1912": {
    M: 13
  },
  "1914": {
    M: 14
  },
  "1915": {
    M: 19
  },
  "1916": {
    M: 21
  },
  "1917": {
    M: 17
  },
  "1918": {
    M: 22
  },
  "1919": {
    M: 14
  },
  "1920": {
    M: 18
  },
  "1921": {
    M: 31
  },
  "1922": {
    M: 29
  },
  "1923": {
    M: 21
  },
  "1924": {
    M: 25
  },
  "1925": {
    M: 47
  },
  "1926": {
    M: 45
  },
  "1927": {
    M: 37
  },
  "1928": {
    M: 42
  },
  "1929": {
    M: 45
  },
  "1930": {
    M: 56
  },
  "1931": {
    M: 55
  },
  "1932": {
    M: 59
  },
  "1933": {
    M: 49
  },
  "1934": {
    M: 78
  },
  "1935": {
    M: 61
  },
  "1936": {
    M: 74
  },
  "1937": {
    M: 90
  },
  "1938": {
    M: 124
  },
  "1939": {
    M: 175
  },
  "1940": {
    M: 230
  },
  "1941": {
    M: 210
  },
  "1942": {
    M: 182
  },
  "1943": {
    M: 193
  },
  "1944": {
    M: 237
  },
  "1945": {
    M: 262
  },
  "1946": {
    M: 319
  },
  "1947": {
    M: 304
  },
  "1948": {
    M: 282
  },
  "1949": {
    M: 293
  },
  "1950": {
    M: 304
  },
  "1951": {
    M: 285
  },
  "1952": {
    M: 290
  },
  "1953": {
    M: 352
  },
  "1954": {
    M: 313
  },
  "1955": {
    M: 372
  },
  "1956": {
    M: 382
  },
  "1957": {
    M: 453
  },
  "1958": {
    M: 445
  },
  "1959": {
    M: 514
  },
  "1960": {
    M: 511
  },
  "1961": {
    M: 533
  },
  "1962": {
    M: 485
  },
  "1963": {
    M: 462
  },
  "1964": {
    M: 432
  },
  "1965": {
    M: 367
  },
  "1966": {
    M: 359
  },
  "1967": {
    M: 375
  },
  "1968": {
    M: 329
  },
  "1969": {
    M: 380
  },
  "1970": {
    M: 357
  },
  "1971": {
    M: 330
  },
  "1972": {
    M: 311
  },
  "1973": {
    M: 252
  },
  "1974": {
    M: 263
  },
  "1975": {
    M: 226
  },
  "1976": {
    M: 212
  },
  "1977": {
    M: 193
  },
  "1978": {
    M: 148
  },
  "1979": {
    M: 179
  },
  "1980": {
    M: 163
  },
  "1981": {
    M: 169
  },
  "1982": {
    M: 158
  },
  "1983": {
    M: 136
  },
  "1984": {
    M: 156
  },
  "1985": {
    M: 177
  },
  "1986": {
    M: 193
  },
  "1987": {
    M: 160
  },
  "1988": {
    M: 175
  },
  "1989": {
    M: 199
  },
  "1990": {
    M: 203
  },
  "1991": {
    M: 169
  },
  "1992": {
    M: 148
  },
  "1993": {
    M: 144
  },
  "1994": {
    M: 131
  },
  "1995": {
    M: 104
  },
  "1996": {
    M: 91
  },
  "1997": {
    M: 93
  },
  "1998": {
    M: 86
  },
  "1999": {
    M: 95
  },
  "2000": {
    M: 79
  },
  "2001": {
    M: 69
  },
  "2002": {
    M: 67
  },
  "2003": {
    M: 75
  },
  "2004": {
    M: 67
  },
  "2005": {
    M: 72
  },
  "2006": {
    M: 47
  },
  "2007": {
    M: 52
  },
  "2008": {
    M: 48
  },
  "2009": {
    M: 39
  },
  "2010": {
    M: 42
  },
  "2011": {
    M: 42
  },
  "2012": {
    M: 32
  },
  "2013": {
    M: 39
  },
  "2014": {
    M: 34
  },
  "2015": {
    M: 41
  },
  "2016": {
    M: 38
  },
  "2017": {
    M: 38
  },
  "2018": {
    M: 31
  },
  "2019": {
    M: 26
  },
  "2020": {
    M: 33
  },
  "2021": {
    M: 25
  }
};
const Antoinette = {
  "1948": {
    F: 10
  },
  "1959": {
    F: 10
  },
  "1960": {
    F: 11
  },
  "1962": {
    F: 15
  },
  "1963": {
    F: 15
  },
  "1964": {
    F: 17
  },
  "1965": {
    F: 13
  },
  "1966": {
    F: 25
  },
  "1967": {
    F: 16
  },
  "1968": {
    F: 18
  },
  "1969": {
    F: 19
  },
  "1970": {
    F: 29
  },
  "1971": {
    F: 17
  },
  "1972": {
    F: 16
  },
  "1973": {
    F: 19
  },
  "1975": {
    F: 15
  },
  "1976": {
    F: 10
  },
  "1977": {
    F: 10
  },
  "1979": {
    F: 13
  },
  "1980": {
    F: 10
  },
  "1982": {
    F: 10
  },
  "1985": {
    F: 12
  },
  "1989": {
    F: 10
  },
  "1990": {
    F: 10
  }
};
const Anton = {
  "1961": {
    M: 11
  },
  "1963": {
    M: 12
  },
  "1964": {
    M: 15
  },
  "1965": {
    M: 12
  },
  "1966": {
    M: 26
  },
  "1968": {
    M: 16
  },
  "1969": {
    M: 24
  },
  "1970": {
    M: 15
  },
  "1971": {
    M: 32
  },
  "1972": {
    M: 31
  },
  "1973": {
    M: 31
  },
  "1974": {
    M: 39
  },
  "1975": {
    M: 45
  },
  "1976": {
    M: 30
  },
  "1977": {
    M: 21
  },
  "1978": {
    M: 21
  },
  "1979": {
    M: 18
  },
  "1980": {
    M: 21
  },
  "1981": {
    M: 18
  },
  "1982": {
    M: 17
  },
  "1983": {
    M: 17
  },
  "1984": {
    M: 19
  },
  "1985": {
    M: 23
  },
  "1986": {
    M: 24
  },
  "1987": {
    M: 39
  },
  "1988": {
    M: 22
  },
  "1989": {
    M: 26
  },
  "1990": {
    M: 32
  },
  "1991": {
    M: 31
  },
  "1992": {
    M: 23
  },
  "1993": {
    M: 21
  },
  "1994": {
    M: 36
  },
  "1995": {
    M: 25
  },
  "1996": {
    M: 29
  },
  "1997": {
    M: 23
  },
  "1998": {
    M: 29
  },
  "1999": {
    M: 32
  },
  "2000": {
    M: 26
  },
  "2001": {
    M: 24
  },
  "2002": {
    M: 23
  },
  "2003": {
    M: 21
  },
  "2004": {
    M: 25
  },
  "2005": {
    M: 23
  },
  "2006": {
    M: 28
  },
  "2007": {
    M: 30
  },
  "2008": {
    M: 18
  },
  "2009": {
    M: 12
  },
  "2010": {
    M: 17
  },
  "2011": {
    M: 10
  },
  "2012": {
    M: 11
  },
  "2014": {
    M: 14
  },
  "2017": {
    M: 15
  },
  "2019": {
    M: 14
  }
};
const Antoni = {
  "1962": {
    M: 15
  },
  "1963": {
    M: 15
  },
  "1964": {
    M: 13
  },
  "1965": {
    M: 12
  },
  "1966": {
    M: 12
  },
  "1967": {
    M: 10
  },
  "1968": {
    M: 13
  }
};
const Antonia = {
  "1963": {
    F: 11
  },
  "1964": {
    F: 13
  },
  "1966": {
    F: 12
  },
  "1968": {
    F: 11
  },
  "1969": {
    F: 17
  },
  "1971": {
    F: 11
  },
  "1972": {
    F: 13
  },
  "1975": {
    F: 13
  },
  "1976": {
    F: 10
  },
  "1977": {
    F: 15
  },
  "1979": {
    F: 13
  },
  "1983": {
    F: 13
  },
  "1984": {
    F: 11
  },
  "1986": {
    F: 14
  },
  "1987": {
    F: 22
  },
  "1988": {
    F: 16
  },
  "1989": {
    F: 10
  },
  "1990": {
    F: 13
  },
  "1991": {
    F: 13
  },
  "1992": {
    F: 12
  },
  "1993": {
    F: 10
  },
  "1994": {
    F: 13
  },
  "1995": {
    F: 11
  },
  "1996": {
    F: 23
  },
  "1997": {
    F: 32
  },
  "1998": {
    F: 15
  },
  "1999": {
    F: 20
  },
  "2000": {
    F: 17
  },
  "2001": {
    F: 25
  },
  "2002": {
    F: 16
  },
  "2003": {
    F: 12
  },
  "2004": {
    F: 17
  },
  "2005": {
    F: 11
  },
  "2006": {
    F: 10
  },
  "2007": {
    F: 14
  },
  "2010": {
    F: 10
  }
};
const Antonio = {
  "1964": {
    M: 10
  },
  "1984": {
    M: 11
  },
  "1986": {
    M: 12
  },
  "1987": {
    M: 11
  },
  "1990": {
    M: 17
  },
  "1991": {
    M: 10
  },
  "1992": {
    M: 14
  },
  "1994": {
    M: 14
  },
  "1995": {
    M: 15
  },
  "1996": {
    M: 27
  },
  "1997": {
    M: 30
  },
  "1998": {
    M: 13
  },
  "1999": {
    M: 24
  },
  "2000": {
    M: 24
  },
  "2001": {
    M: 24
  },
  "2002": {
    M: 21
  },
  "2003": {
    M: 24
  },
  "2004": {
    M: 17
  },
  "2005": {
    M: 17
  },
  "2006": {
    M: 23
  },
  "2007": {
    M: 16
  },
  "2008": {
    M: 18
  },
  "2009": {
    M: 19
  },
  "2010": {
    M: 18
  },
  "2011": {
    M: 15
  },
  "2012": {
    M: 18
  },
  "2013": {
    M: 11
  },
  "2014": {
    M: 22
  },
  "2015": {
    M: 20
  },
  "2016": {
    M: 11
  },
  "2018": {
    M: 11
  },
  "2021": {
    M: 11
  }
};
const Antonius = {
  "1956": {
    M: 13
  }
};
const Antony = {
  "1937": {
    M: 10
  },
  "1938": {
    M: 18
  },
  "1939": {
    M: 11
  },
  "1940": {
    M: 10
  },
  "1941": {
    M: 14
  },
  "1942": {
    M: 16
  },
  "1945": {
    M: 17
  },
  "1946": {
    M: 17
  },
  "1947": {
    M: 23
  },
  "1948": {
    M: 18
  },
  "1949": {
    M: 22
  },
  "1950": {
    M: 21
  },
  "1951": {
    M: 18
  },
  "1952": {
    M: 22
  },
  "1953": {
    M: 21
  },
  "1954": {
    M: 31
  },
  "1955": {
    M: 22
  },
  "1956": {
    M: 29
  },
  "1957": {
    M: 25
  },
  "1958": {
    M: 29
  },
  "1959": {
    M: 43
  },
  "1960": {
    M: 90
  },
  "1961": {
    M: 100
  },
  "1962": {
    M: 80
  },
  "1963": {
    M: 86
  },
  "1964": {
    M: 136
  },
  "1965": {
    M: 116
  },
  "1966": {
    M: 112
  },
  "1967": {
    M: 114
  },
  "1968": {
    M: 107
  },
  "1969": {
    M: 127
  },
  "1970": {
    M: 108
  },
  "1971": {
    M: 112
  },
  "1972": {
    M: 86
  },
  "1973": {
    M: 79
  },
  "1974": {
    M: 76
  },
  "1975": {
    M: 66
  },
  "1976": {
    M: 53
  },
  "1977": {
    M: 38
  },
  "1978": {
    M: 37
  },
  "1979": {
    M: 45
  },
  "1980": {
    M: 31
  },
  "1981": {
    M: 26
  },
  "1982": {
    M: 34
  },
  "1983": {
    M: 24
  },
  "1984": {
    M: 33
  },
  "1985": {
    M: 27
  },
  "1986": {
    M: 35
  },
  "1987": {
    M: 32
  },
  "1988": {
    M: 44
  },
  "1989": {
    M: 31
  },
  "1990": {
    M: 31
  },
  "1991": {
    M: 24
  },
  "1992": {
    M: 19
  },
  "1993": {
    M: 22
  },
  "1994": {
    M: 23
  },
  "1995": {
    M: 15
  },
  "1997": {
    M: 23
  },
  "1999": {
    M: 15
  },
  "2001": {
    M: 11
  },
  "2003": {
    M: 16
  },
  "2004": {
    M: 13
  },
  "2008": {
    M: 10
  }
};
const Anya = {
  "2002": {
    F: 16
  },
  "2003": {
    F: 11
  },
  "2004": {
    F: 10
  },
  "2005": {
    F: 19
  },
  "2006": {
    F: 16
  },
  "2007": {
    F: 14
  },
  "2008": {
    F: 23
  },
  "2009": {
    F: 23
  },
  "2010": {
    F: 28
  },
  "2011": {
    F: 19
  },
  "2012": {
    F: 25
  },
  "2013": {
    F: 14
  },
  "2014": {
    F: 19
  },
  "2015": {
    F: 18
  },
  "2016": {
    F: 12
  },
  "2017": {
    F: 14
  },
  "2018": {
    F: 12
  },
  "2020": {
    F: 17
  },
  "2021": {
    F: 12
  }
};
const Aoife = {
  "2013": {
    F: 12
  },
  "2017": {
    F: 14
  },
  "2019": {
    F: 12
  },
  "2020": {
    F: 11
  },
  "2021": {
    F: 12
  }
};
const April = {
  "1951": {
    F: 10
  },
  "1954": {
    F: 15
  },
  "1956": {
    F: 14
  },
  "1958": {
    F: 11
  },
  "1959": {
    F: 20
  },
  "1961": {
    F: 19
  },
  "1962": {
    F: 19
  },
  "1963": {
    F: 23
  },
  "1964": {
    F: 19
  },
  "1965": {
    F: 12
  },
  "1969": {
    F: 11
  },
  "1970": {
    F: 10
  },
  "1974": {
    F: 15
  },
  "1976": {
    F: 12
  },
  "1977": {
    F: 21
  },
  "1978": {
    F: 10
  },
  "1979": {
    F: 15
  },
  "1980": {
    F: 16
  },
  "1981": {
    F: 18
  },
  "1982": {
    F: 15
  },
  "1983": {
    F: 19
  },
  "1984": {
    F: 23
  },
  "1985": {
    F: 19
  },
  "1986": {
    F: 19
  },
  "1987": {
    F: 21
  },
  "1988": {
    F: 27
  },
  "1989": {
    F: 36
  },
  "1990": {
    F: 42
  },
  "1991": {
    F: 34
  },
  "1992": {
    F: 35
  },
  "1993": {
    F: 48
  },
  "1994": {
    F: 42
  },
  "1995": {
    F: 25
  },
  "1996": {
    F: 37
  },
  "1997": {
    F: 29
  },
  "1998": {
    F: 23
  },
  "1999": {
    F: 22
  },
  "2000": {
    F: 20
  },
  "2001": {
    F: 11
  },
  "2002": {
    F: 13
  },
  "2003": {
    F: 12
  },
  "2004": {
    F: 18
  },
  "2005": {
    F: 15
  },
  "2007": {
    F: 15
  },
  "2008": {
    F: 10
  },
  "2009": {
    F: 12
  },
  "2010": {
    F: 16
  },
  "2011": {
    F: 14
  },
  "2012": {
    F: 24
  },
  "2013": {
    F: 17
  },
  "2014": {
    F: 28
  },
  "2015": {
    F: 22
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 22
  },
  "2018": {
    F: 20
  },
  "2019": {
    F: 15
  },
  "2020": {
    F: 10
  },
  "2021": {
    F: 14
  }
};
const Arabella = {
  "2003": {
    F: 12
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 10
  },
  "2006": {
    F: 12
  },
  "2007": {
    F: 18
  },
  "2008": {
    F: 15
  },
  "2009": {
    F: 20
  },
  "2010": {
    F: 24
  },
  "2011": {
    F: 27
  },
  "2012": {
    F: 29
  },
  "2013": {
    F: 17
  },
  "2014": {
    F: 29
  },
  "2015": {
    F: 33
  },
  "2016": {
    F: 28
  },
  "2017": {
    F: 42
  },
  "2018": {
    F: 25
  },
  "2019": {
    F: 34
  },
  "2020": {
    F: 38
  },
  "2021": {
    F: 32
  }
};
const Arahia = {
  "2021": {
    F: 14
  }
};
const Arapeta = {
  "1999": {
    M: 10
  },
  "2007": {
    M: 12
  }
};
const Archer = {
  "2009": {
    M: 11
  },
  "2010": {
    M: 20
  },
  "2011": {
    M: 30
  },
  "2012": {
    M: 35
  },
  "2013": {
    M: 52
  },
  "2014": {
    M: 71
  },
  "2015": {
    M: 79
  },
  "2016": {
    M: 89
  },
  "2017": {
    M: 97
  },
  "2018": {
    M: 115
  },
  "2019": {
    M: 93
  },
  "2020": {
    M: 84
  },
  "2021": {
    M: 105
  }
};
const Archibald = {
  "1900": {
    M: 32
  },
  "1901": {
    M: 39
  },
  "1902": {
    M: 28
  },
  "1903": {
    M: 34
  },
  "1904": {
    M: 62
  },
  "1905": {
    M: 42
  },
  "1906": {
    M: 46
  },
  "1907": {
    M: 47
  },
  "1908": {
    M: 55
  },
  "1909": {
    M: 36
  },
  "1910": {
    M: 54
  },
  "1911": {
    M: 51
  },
  "1912": {
    M: 48
  },
  "1913": {
    M: 41
  },
  "1914": {
    M: 46
  },
  "1915": {
    M: 29
  },
  "1916": {
    M: 40
  },
  "1917": {
    M: 44
  },
  "1918": {
    M: 26
  },
  "1919": {
    M: 24
  },
  "1920": {
    M: 24
  },
  "1921": {
    M: 21
  },
  "1922": {
    M: 17
  },
  "1923": {
    M: 22
  },
  "1924": {
    M: 19
  },
  "1925": {
    M: 22
  },
  "1926": {
    M: 17
  },
  "1927": {
    M: 15
  },
  "1928": {
    M: 11
  },
  "1930": {
    M: 13
  },
  "1932": {
    M: 10
  },
  "1933": {
    M: 10
  },
  "1934": {
    M: 11
  },
  "1937": {
    M: 10
  },
  "1939": {
    M: 11
  },
  "2018": {
    M: 12
  }
};
const Archie = {
  "1901": {
    M: 10
  },
  "1902": {
    M: 12
  },
  "1903": {
    M: 12
  },
  "1904": {
    M: 10
  },
  "1906": {
    M: 15
  },
  "1907": {
    M: 12
  },
  "1908": {
    M: 14
  },
  "1909": {
    M: 11
  },
  "1915": {
    M: 15
  },
  "1916": {
    M: 12
  },
  "1919": {
    M: 12
  },
  "1921": {
    M: 11
  },
  "2001": {
    M: 11
  },
  "2002": {
    M: 20
  },
  "2003": {
    M: 19
  },
  "2004": {
    M: 25
  },
  "2005": {
    M: 29
  },
  "2006": {
    M: 27
  },
  "2007": {
    M: 45
  },
  "2008": {
    M: 62
  },
  "2009": {
    M: 54
  },
  "2010": {
    M: 63
  },
  "2011": {
    M: 67
  },
  "2012": {
    M: 78
  },
  "2013": {
    M: 80
  },
  "2014": {
    M: 95
  },
  "2015": {
    M: 113
  },
  "2016": {
    M: 116
  },
  "2017": {
    M: 115
  },
  "2018": {
    M: 138
  },
  "2019": {
    M: 123
  },
  "2020": {
    M: 135
  },
  "2021": {
    M: 147
  }
};
const Ardie = {
  "2017": {
    M: 15
  },
  "2018": {
    M: 10
  },
  "2020": {
    M: 10
  },
  "2021": {
    M: 15
  }
};
const Ari = {
  "1995": {
    M: 14
  },
  "2004": {
    M: 10
  },
  "2005": {
    M: 10
  },
  "2006": {
    M: 14
  },
  "2007": {
    M: 15
  },
  "2008": {
    M: 20
  },
  "2009": {
    M: 18
  },
  "2010": {
    M: 19
  },
  "2011": {
    M: 21
  },
  "2012": {
    M: 19
  },
  "2013": {
    M: 27
  },
  "2014": {
    M: 30
  },
  "2015": {
    M: 33
  },
  "2016": {
    M: 38
  },
  "2017": {
    M: 38
  },
  "2018": {
    M: 33
  },
  "2019": {
    M: 45
  },
  "2020": {
    M: 49
  },
  "2021": {
    M: 62
  }
};
const Aria = {
  "1992": {
    F: 11
  },
  "1994": {
    F: 11
  },
  "1996": {
    F: 13
  },
  "1998": {
    F: 12
  },
  "1999": {
    F: 12
  },
  "2000": {
    F: 16
  },
  "2001": {
    F: 22
  },
  "2002": {
    F: 27
  },
  "2003": {
    F: 29
  },
  "2004": {
    F: 32
  },
  "2005": {
    F: 39
  },
  "2006": {
    F: 22
  },
  "2007": {
    F: 57
  },
  "2008": {
    F: 64
  },
  "2009": {
    F: 45
  },
  "2010": {
    F: 52
  },
  "2011": {
    F: 58
  },
  "2012": {
    F: 85
  },
  "2013": {
    F: 125
  },
  "2014": {
    F: 113
  },
  "2015": {
    F: 137
  },
  "2016": {
    F: 157
  },
  "2017": {
    F: 151
  },
  "2018": {
    F: 174
  },
  "2019": {
    F: 130
  },
  "2020": {
    F: 132
  },
  "2021": {
    F: 121
  }
};
const Ariah = {
  "2014": {
    F: 11
  },
  "2015": {
    F: 10
  },
  "2016": {
    F: 10
  },
  "2017": {
    F: 15
  },
  "2019": {
    F: 10
  },
  "2020": {
    F: 11
  }
};
const Ariana = {
  "1970": {
    F: 10
  },
  "1971": {
    F: 10
  },
  "1972": {
    F: 16
  },
  "1974": {
    F: 13
  },
  "1977": {
    F: 10
  },
  "1978": {
    F: 17
  },
  "1979": {
    F: 14
  },
  "1980": {
    F: 17
  },
  "1981": {
    F: 32
  },
  "1982": {
    F: 21
  },
  "1983": {
    F: 15
  },
  "1984": {
    F: 25
  },
  "1985": {
    F: 25
  },
  "1986": {
    F: 14
  },
  "1987": {
    F: 26
  },
  "1988": {
    F: 24
  },
  "1989": {
    F: 35
  },
  "1990": {
    F: 25
  },
  "1991": {
    F: 31
  },
  "1992": {
    F: 26
  },
  "1993": {
    F: 39
  },
  "1994": {
    F: 43
  },
  "1995": {
    F: 43
  },
  "1996": {
    F: 38
  },
  "1997": {
    F: 53
  },
  "1998": {
    F: 39
  },
  "1999": {
    F: 34
  },
  "2000": {
    F: 38
  },
  "2001": {
    F: 43
  },
  "2002": {
    F: 46
  },
  "2003": {
    F: 49
  },
  "2004": {
    F: 44
  },
  "2005": {
    F: 25
  },
  "2006": {
    F: 33
  },
  "2007": {
    F: 38
  },
  "2008": {
    F: 34
  },
  "2009": {
    F: 45
  },
  "2010": {
    F: 43
  },
  "2011": {
    F: 43
  },
  "2012": {
    F: 37
  },
  "2013": {
    F: 42
  },
  "2014": {
    F: 51
  },
  "2015": {
    F: 50
  },
  "2016": {
    F: 46
  },
  "2017": {
    F: 41
  },
  "2018": {
    F: 50
  },
  "2019": {
    F: 38
  },
  "2020": {
    F: 29
  },
  "2021": {
    F: 27
  }
};
const Arianna = {
  "2014": {
    F: 10
  },
  "2020": {
    F: 13
  }
};
const Arie = {
  "2018": {
    M: 11
  },
  "2019": {
    M: 10
  },
  "2020": {
    M: 10
  }
};
const Ariel = {
  "1992": {
    F: 12
  },
  "2013": {
    F: 10
  },
  "2014": {
    F: 11
  },
  "2017": {
    F: 14
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 11
  }
};
const Ariella = {
  "2014": {
    F: 14
  },
  "2016": {
    F: 16
  },
  "2017": {
    F: 13
  },
  "2018": {
    F: 10
  },
  "2019": {
    F: 15
  },
  "2020": {
    F: 11
  },
  "2021": {
    F: 12
  }
};
const Arielle = {
  "2009": {
    F: 11
  },
  "2010": {
    F: 11
  },
  "2016": {
    F: 10
  },
  "2021": {
    F: 13
  }
};
const Ariki = {
  "2006": {
    M: 10
  },
  "2007": {
    M: 14
  },
  "2008": {
    M: 10
  },
  "2009": {
    M: 10
  },
  "2010": {
    M: 12
  },
  "2011": {
    M: 11
  },
  "2012": {
    M: 11
  },
  "2013": {
    M: 14
  },
  "2015": {
    M: 16
  },
  "2016": {
    M: 11
  },
  "2017": {
    M: 17
  },
  "2018": {
    M: 20
  },
  "2019": {
    M: 21
  },
  "2020": {
    M: 23
  },
  "2021": {
    M: 21
  }
};
const Ariya = {
  "2015": {
    F: 12
  }
};
const Arjun = {
  "2015": {
    M: 12
  },
  "2016": {
    M: 15
  },
  "2018": {
    M: 11
  },
  "2019": {
    M: 10
  }
};
const Arlene = {
  "1959": {
    F: 14
  },
  "1960": {
    F: 10
  },
  "1961": {
    F: 11
  },
  "1962": {
    F: 10
  },
  "1965": {
    F: 11
  },
  "1966": {
    F: 11
  },
  "1970": {
    F: 11
  },
  "1971": {
    F: 18
  },
  "1972": {
    F: 16
  }
};
const Arlo = {
  "2005": {
    M: 10
  },
  "2007": {
    M: 21
  },
  "2008": {
    M: 18
  },
  "2009": {
    M: 21
  },
  "2010": {
    M: 31
  },
  "2011": {
    M: 34
  },
  "2012": {
    M: 36
  },
  "2013": {
    M: 57
  },
  "2014": {
    M: 88
  },
  "2015": {
    M: 90
  },
  "2016": {
    M: 163
  },
  "2017": {
    M: 194
  },
  "2018": {
    M: 157
  },
  "2019": {
    M: 180
  },
  "2020": {
    M: 156
  },
  "2021": {
    M: 155
  }
};
const Armaan = {
  "2013": {
    M: 11
  },
  "2015": {
    M: 11
  },
  "2017": {
    M: 14
  },
  "2018": {
    M: 14
  },
  "2019": {
    M: 12
  },
  "2020": {
    M: 14
  },
  "2021": {
    M: 12
  }
};
const Armani = {
  "2009": {
    M: 10
  },
  "2010": {
    F: 10
  },
  "2012": {
    F: 14
  },
  "2013": {
    F: 12
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 20
  },
  "2020": {
    F: 16
  },
  "2021": {
    F: 14
  }
};
const Arna = {
  "1988": {
    F: 12
  },
  "1989": {
    F: 11
  }
};
const Arnav = {
  "2012": {
    M: 14
  },
  "2013": {
    M: 10
  },
  "2014": {
    M: 10
  },
  "2019": {
    M: 10
  }
};
const Arnold = {
  "1900": {
    M: 22
  },
  "1901": {
    M: 28
  },
  "1902": {
    M: 19
  },
  "1903": {
    M: 26
  },
  "1904": {
    M: 35
  },
  "1905": {
    M: 24
  },
  "1906": {
    M: 29
  },
  "1907": {
    M: 33
  },
  "1908": {
    M: 27
  },
  "1909": {
    M: 41
  },
  "1910": {
    M: 33
  },
  "1911": {
    M: 32
  },
  "1912": {
    M: 38
  },
  "1913": {
    M: 26
  },
  "1914": {
    M: 28
  },
  "1915": {
    M: 30
  },
  "1916": {
    M: 32
  },
  "1917": {
    M: 31
  },
  "1918": {
    M: 23
  },
  "1919": {
    M: 23
  },
  "1920": {
    M: 30
  },
  "1921": {
    M: 35
  },
  "1922": {
    M: 30
  },
  "1923": {
    M: 33
  },
  "1924": {
    M: 33
  },
  "1925": {
    M: 24
  },
  "1926": {
    M: 23
  },
  "1927": {
    M: 28
  },
  "1928": {
    M: 27
  },
  "1929": {
    M: 27
  },
  "1930": {
    M: 32
  },
  "1931": {
    M: 19
  },
  "1932": {
    M: 26
  },
  "1933": {
    M: 28
  },
  "1934": {
    M: 17
  },
  "1935": {
    M: 14
  },
  "1936": {
    M: 18
  },
  "1937": {
    M: 19
  },
  "1938": {
    M: 13
  },
  "1939": {
    M: 11
  },
  "1940": {
    M: 19
  },
  "1941": {
    M: 12
  },
  "1942": {
    M: 14
  },
  "1944": {
    M: 10
  },
  "1945": {
    M: 12
  },
  "1946": {
    M: 14
  },
  "1950": {
    M: 11
  },
  "1952": {
    M: 11
  },
  "1955": {
    M: 10
  },
  "1957": {
    M: 13
  },
  "1959": {
    M: 11
  },
  "1961": {
    M: 10
  },
  "1962": {
    M: 10
  },
  "1964": {
    M: 11
  },
  "1997": {
    M: 10
  }
};
const Aroha = {
  "1946": {
    F: 10
  },
  "1952": {
    F: 13
  },
  "1953": {
    F: 16
  },
  "1955": {
    F: 11
  },
  "1956": {
    F: 15
  },
  "1958": {
    F: 17
  },
  "1959": {
    F: 18
  },
  "1960": {
    F: 19
  },
  "1961": {
    F: 28
  },
  "1962": {
    F: 35
  },
  "1963": {
    F: 27
  },
  "1964": {
    F: 17
  },
  "1965": {
    F: 23
  },
  "1966": {
    F: 12
  },
  "1967": {
    F: 24
  },
  "1968": {
    F: 24
  },
  "1969": {
    F: 27
  },
  "1970": {
    F: 30
  },
  "1971": {
    F: 23
  },
  "1972": {
    F: 40
  },
  "1973": {
    F: 35
  },
  "1974": {
    F: 28
  },
  "1975": {
    F: 37
  },
  "1976": {
    F: 28
  },
  "1977": {
    F: 29
  },
  "1978": {
    F: 35
  },
  "1979": {
    F: 41
  },
  "1980": {
    F: 41
  },
  "1981": {
    F: 43
  },
  "1982": {
    F: 49
  },
  "1983": {
    F: 49
  },
  "1984": {
    F: 34
  },
  "1985": {
    F: 40
  },
  "1986": {
    F: 40
  },
  "1987": {
    F: 39
  },
  "1988": {
    F: 45
  },
  "1989": {
    F: 35
  },
  "1990": {
    F: 25
  },
  "1991": {
    F: 39
  },
  "1992": {
    F: 32
  },
  "1993": {
    F: 41
  },
  "1994": {
    F: 27
  },
  "1995": {
    F: 33
  },
  "1996": {
    F: 24
  },
  "1997": {
    F: 26
  },
  "1998": {
    F: 25
  },
  "1999": {
    F: 21
  },
  "2000": {
    F: 15
  },
  "2001": {
    F: 28
  },
  "2002": {
    F: 21
  },
  "2003": {
    F: 26
  },
  "2004": {
    F: 19
  },
  "2005": {
    F: 23
  },
  "2006": {
    F: 21
  },
  "2007": {
    F: 24
  },
  "2008": {
    F: 33
  },
  "2009": {
    F: 18
  },
  "2010": {
    F: 30
  },
  "2011": {
    F: 35
  },
  "2012": {
    F: 27
  },
  "2013": {
    F: 24
  },
  "2014": {
    F: 22
  },
  "2015": {
    F: 27
  },
  "2016": {
    F: 21
  },
  "2017": {
    F: 23
  },
  "2018": {
    F: 21
  },
  "2019": {
    F: 24
  },
  "2020": {
    F: 33
  },
  "2021": {
    F: 22
  }
};
const Aron = {
  "1971": {
    M: 11
  },
  "1976": {
    M: 10
  }
};
const Arran = {
  "1971": {
    M: 11
  },
  "1972": {
    M: 10
  },
  "1973": {
    M: 11
  },
  "1974": {
    M: 10
  },
  "1975": {
    M: 11
  },
  "1976": {
    M: 11
  }
};
const Arron = {
  "1967": {
    M: 10
  },
  "1971": {
    M: 25
  },
  "1972": {
    M: 29
  },
  "1973": {
    M: 28
  },
  "1974": {
    M: 25
  },
  "1975": {
    M: 20
  },
  "1976": {
    M: 27
  },
  "1977": {
    M: 11
  },
  "1979": {
    M: 15
  },
  "1980": {
    M: 10
  },
  "1981": {
    M: 12
  },
  "1982": {
    M: 10
  },
  "1985": {
    M: 12
  }
};
const Arthur = {
  "1900": {
    M: 255
  },
  "1901": {
    M: 269
  },
  "1902": {
    M: 256
  },
  "1903": {
    M: 269
  },
  "1904": {
    M: 271
  },
  "1905": {
    M: 320
  },
  "1906": {
    M: 309
  },
  "1907": {
    M: 340
  },
  "1908": {
    M: 291
  },
  "1909": {
    M: 340
  },
  "1910": {
    M: 304
  },
  "1911": {
    M: 315
  },
  "1912": {
    M: 306
  },
  "1913": {
    M: 312
  },
  "1914": {
    M: 268
  },
  "1915": {
    M: 307
  },
  "1916": {
    M: 307
  },
  "1917": {
    M: 305
  },
  "1918": {
    M: 287
  },
  "1919": {
    M: 223
  },
  "1920": {
    M: 288
  },
  "1921": {
    M: 216
  },
  "1922": {
    M: 265
  },
  "1923": {
    M: 247
  },
  "1924": {
    M: 237
  },
  "1925": {
    M: 238
  },
  "1926": {
    M: 208
  },
  "1927": {
    M: 196
  },
  "1928": {
    M: 166
  },
  "1929": {
    M: 162
  },
  "1930": {
    M: 146
  },
  "1931": {
    M: 167
  },
  "1932": {
    M: 134
  },
  "1933": {
    M: 110
  },
  "1934": {
    M: 122
  },
  "1935": {
    M: 113
  },
  "1936": {
    M: 108
  },
  "1937": {
    M: 124
  },
  "1938": {
    M: 112
  },
  "1939": {
    M: 115
  },
  "1940": {
    M: 109
  },
  "1941": {
    M: 112
  },
  "1942": {
    M: 135
  },
  "1943": {
    M: 98
  },
  "1944": {
    M: 99
  },
  "1945": {
    M: 104
  },
  "1946": {
    M: 94
  },
  "1947": {
    M: 102
  },
  "1948": {
    M: 95
  },
  "1949": {
    M: 95
  },
  "1950": {
    M: 78
  },
  "1951": {
    M: 79
  },
  "1952": {
    M: 84
  },
  "1953": {
    M: 80
  },
  "1954": {
    M: 68
  },
  "1955": {
    M: 84
  },
  "1956": {
    M: 54
  },
  "1957": {
    M: 49
  },
  "1958": {
    M: 60
  },
  "1959": {
    M: 67
  },
  "1960": {
    M: 56
  },
  "1961": {
    M: 61
  },
  "1962": {
    M: 54
  },
  "1963": {
    M: 47
  },
  "1964": {
    M: 43
  },
  "1965": {
    M: 29
  },
  "1966": {
    M: 37
  },
  "1967": {
    M: 41
  },
  "1968": {
    M: 41
  },
  "1969": {
    M: 28
  },
  "1970": {
    M: 28
  },
  "1971": {
    M: 38
  },
  "1972": {
    M: 22
  },
  "1973": {
    M: 20
  },
  "1974": {
    M: 28
  },
  "1975": {
    M: 18
  },
  "1976": {
    M: 16
  },
  "1977": {
    M: 16
  },
  "1978": {
    M: 10
  },
  "1979": {
    M: 22
  },
  "1980": {
    M: 10
  },
  "1981": {
    M: 11
  },
  "1982": {
    M: 11
  },
  "1983": {
    M: 24
  },
  "1984": {
    M: 35
  },
  "1985": {
    M: 16
  },
  "1987": {
    M: 14
  },
  "1988": {
    M: 10
  },
  "1989": {
    M: 12
  },
  "1990": {
    M: 19
  },
  "1991": {
    M: 13
  },
  "1993": {
    M: 12
  },
  "1994": {
    M: 10
  },
  "1995": {
    M: 11
  },
  "1996": {
    M: 13
  },
  "1998": {
    M: 12
  },
  "1999": {
    M: 11
  },
  "2000": {
    M: 10
  },
  "2001": {
    M: 13
  },
  "2003": {
    M: 13
  },
  "2005": {
    M: 13
  },
  "2006": {
    M: 29
  },
  "2007": {
    M: 14
  },
  "2008": {
    M: 15
  },
  "2009": {
    M: 22
  },
  "2010": {
    M: 21
  },
  "2011": {
    M: 26
  },
  "2012": {
    M: 32
  },
  "2013": {
    M: 33
  },
  "2014": {
    M: 48
  },
  "2015": {
    M: 54
  },
  "2016": {
    M: 62
  },
  "2017": {
    M: 74
  },
  "2018": {
    M: 77
  },
  "2019": {
    M: 118
  },
  "2020": {
    M: 119
  },
  "2021": {
    M: 144
  }
};
const Arya = {
  "2012": {
    F: 14
  },
  "2013": {
    F: 27
  },
  "2014": {
    F: 24
  },
  "2015": {
    F: 30
  },
  "2016": {
    F: 23
  },
  "2017": {
    F: 28
  },
  "2018": {
    F: 23
  },
  "2019": {
    F: 24
  },
  "2020": {
    F: 27
  },
  "2021": {
    F: 23
  }
};
const Aryan = {
  "2004": {
    M: 21
  },
  "2005": {
    M: 19
  },
  "2006": {
    M: 25
  },
  "2007": {
    M: 31
  },
  "2008": {
    M: 24
  },
  "2009": {
    M: 25
  },
  "2010": {
    M: 20
  },
  "2011": {
    M: 25
  },
  "2012": {
    M: 14
  },
  "2013": {
    M: 19
  },
  "2015": {
    M: 18
  },
  "2016": {
    M: 19
  },
  "2017": {
    M: 13
  },
  "2018": {
    M: 14
  },
  "2019": {
    M: 11
  },
  "2020": {
    M: 21
  },
  "2021": {
    M: 18
  }
};
const Asees = {
  "2018": {
    F: 13
  },
  "2019": {
    F: 12
  },
  "2020": {
    F: 12
  },
  "2021": {
    F: 16
  }
};
const Ash = {
  "2011": {
    M: 11
  },
  "2012": {
    M: 10
  },
  "2017": {
    M: 12
  },
  "2019": {
    M: 12
  }
};
const Asha = {
  "2004": {
    F: 12
  },
  "2005": {
    F: 19
  },
  "2006": {
    F: 24
  },
  "2007": {
    F: 17
  },
  "2008": {
    F: 22
  },
  "2009": {
    F: 13
  },
  "2010": {
    F: 13
  },
  "2011": {
    F: 14
  },
  "2012": {
    F: 11
  },
  "2013": {
    F: 13
  },
  "2014": {
    F: 15
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 11
  },
  "2018": {
    F: 11
  }
};
const Ashanti = {
  "2003": {
    F: 18
  },
  "2004": {
    F: 11
  }
};
const Asher = {
  "1993": {
    M: 10
  },
  "1994": {
    M: 12
  },
  "1998": {
    M: 14
  },
  "1999": {
    M: 10
  },
  "2002": {
    M: 12
  },
  "2003": {
    M: 12
  },
  "2004": {
    M: 13
  },
  "2005": {
    M: 22
  },
  "2006": {
    M: 27
  },
  "2007": {
    M: 33
  },
  "2008": {
    M: 29
  },
  "2009": {
    M: 29
  },
  "2010": {
    M: 41
  },
  "2011": {
    M: 39
  },
  "2012": {
    M: 50
  },
  "2013": {
    M: 45
  },
  "2014": {
    M: 55
  },
  "2015": {
    M: 75
  },
  "2016": {
    M: 71
  },
  "2017": {
    M: 74
  },
  "2018": {
    M: 90
  },
  "2019": {
    M: 99
  },
  "2020": {
    M: 88
  },
  "2021": {
    M: 122
  }
};
const Ashlea = {
  "1990": {
    F: 16
  },
  "1992": {
    F: 10
  },
  "1993": {
    F: 10
  },
  "1996": {
    F: 10
  }
};
const Ashlee = {
  "1985": {
    F: 14
  },
  "1986": {
    F: 33
  },
  "1987": {
    F: 45
  },
  "1988": {
    F: 55
  },
  "1989": {
    F: 47
  },
  "1990": {
    F: 43
  },
  "1991": {
    F: 51
  },
  "1992": {
    F: 52
  },
  "1993": {
    F: 54
  },
  "1994": {
    F: 53
  },
  "1995": {
    F: 43
  },
  "1996": {
    F: 56
  },
  "1997": {
    F: 31
  },
  "1998": {
    F: 20
  },
  "1999": {
    F: 23
  },
  "2000": {
    F: 26
  },
  "2001": {
    F: 30
  },
  "2002": {
    F: 24
  },
  "2003": {
    F: 23
  },
  "2004": {
    F: 34
  },
  "2005": {
    F: 50
  },
  "2006": {
    F: 50
  },
  "2007": {
    F: 47
  },
  "2008": {
    F: 41
  },
  "2009": {
    F: 37
  },
  "2010": {
    F: 41
  },
  "2011": {
    F: 25
  },
  "2012": {
    F: 15
  },
  "2013": {
    F: 14
  }
};
const Ashleigh = {
  "1985": {
    F: 23
  },
  "1986": {
    F: 79
  },
  "1987": {
    F: 136
  },
  "1988": {
    F: 184
  },
  "1989": {
    F: 209
  },
  "1990": {
    F: 219
  },
  "1991": {
    F: 278
  },
  "1992": {
    F: 253
  },
  "1993": {
    F: 258
  },
  "1994": {
    F: 248
  },
  "1995": {
    F: 217
  },
  "1996": {
    F: 195
  },
  "1997": {
    F: 154
  },
  "1998": {
    F: 166
  },
  "1999": {
    F: 113
  },
  "2000": {
    F: 108
  },
  "2001": {
    F: 88
  },
  "2002": {
    F: 85
  },
  "2003": {
    F: 75
  },
  "2004": {
    F: 48
  },
  "2005": {
    F: 55
  },
  "2006": {
    F: 37
  },
  "2007": {
    F: 43
  },
  "2008": {
    F: 31
  },
  "2009": {
    F: 29
  },
  "2010": {
    F: 22
  },
  "2011": {
    F: 23
  },
  "2012": {
    F: 19
  },
  "2013": {
    F: 21
  },
  "2015": {
    F: 18
  },
  "2016": {
    F: 12
  },
  "2018": {
    F: 11
  }
};
const Ashley = {
  "1918": {
    M: 14
  },
  "1921": {
    M: 13
  },
  "1922": {
    M: 17
  },
  "1923": {
    M: 13
  },
  "1924": {
    M: 14
  },
  "1925": {
    M: 18
  },
  "1926": {
    M: 15
  },
  "1927": {
    M: 15
  },
  "1928": {
    M: 19
  },
  "1929": {
    M: 16
  },
  "1935": {
    M: 14
  },
  "1937": {
    M: 14
  },
  "1938": {
    M: 18
  },
  "1940": {
    M: 11
  },
  "1941": {
    M: 21
  },
  "1942": {
    M: 19
  },
  "1943": {
    M: 17
  },
  "1944": {
    M: 18
  },
  "1945": {
    M: 18
  },
  "1946": {
    M: 28
  },
  "1947": {
    M: 30
  },
  "1948": {
    M: 22
  },
  "1949": {
    M: 20
  },
  "1950": {
    M: 30
  },
  "1951": {
    M: 27
  },
  "1952": {
    M: 29
  },
  "1953": {
    M: 34
  },
  "1954": {
    M: 26
  },
  "1955": {
    M: 33
  },
  "1956": {
    M: 34
  },
  "1957": {
    M: 42
  },
  "1958": {
    M: 40
  },
  "1959": {
    M: 34
  },
  "1960": {
    M: 32
  },
  "1961": {
    M: 31
  },
  "1962": {
    M: 18
  },
  "1963": {
    M: 17
  },
  "1964": {
    M: 27
  },
  "1965": {
    M: 24
  },
  "1966": {
    M: 30
  },
  "1967": {
    M: 28
  },
  "1968": {
    M: 31
  },
  "1969": {
    M: 25
  },
  "1970": {
    M: 37
  },
  "1971": {
    M: 23
  },
  "1972": {
    M: 35
  },
  "1973": {
    M: 22
  },
  "1974": {
    M: 23
  },
  "1975": {
    M: 33
  },
  "1976": {
    M: 25
  },
  "1977": {
    M: 29
  },
  "1978": {
    M: 27
  },
  "1979": {
    M: 32
  },
  "1980": {
    M: 35
  },
  "1981": {
    M: 45
  },
  "1982": {
    M: 46
  },
  "1983": {
    M: 45
  },
  "1984": {
    M: 52
  },
  "1985": {
    F: 28,
    M: 56
  },
  "1986": {
    F: 79,
    M: 84
  },
  "1987": {
    F: 126,
    M: 109
  },
  "1988": {
    F: 123,
    M: 105
  },
  "1989": {
    F: 113,
    M: 102
  },
  "1990": {
    F: 143,
    M: 78
  },
  "1991": {
    F: 167,
    M: 64
  },
  "1992": {
    F: 156,
    M: 71
  },
  "1993": {
    F: 154,
    M: 44
  },
  "1994": {
    F: 146,
    M: 68
  },
  "1995": {
    F: 147,
    M: 71
  },
  "1996": {
    F: 118,
    M: 43
  },
  "1997": {
    F: 96,
    M: 30
  },
  "1998": {
    F: 81,
    M: 22
  },
  "1999": {
    F: 70,
    M: 28
  },
  "2000": {
    F: 72,
    M: 21
  },
  "2001": {
    F: 68,
    M: 19
  },
  "2002": {
    F: 58,
    M: 13
  },
  "2003": {
    F: 65,
    M: 19
  },
  "2004": {
    F: 85,
    M: 12
  },
  "2005": {
    F: 78,
    M: 10
  },
  "2006": {
    F: 68
  },
  "2007": {
    F: 54,
    M: 12
  },
  "2008": {
    F: 59,
    M: 15
  },
  "2009": {
    F: 47,
    M: 14
  },
  "2010": {
    F: 61,
    M: 13
  },
  "2011": {
    F: 39
  },
  "2012": {
    F: 60
  },
  "2013": {
    F: 40,
    M: 13
  },
  "2014": {
    F: 29
  },
  "2015": {
    F: 21
  },
  "2016": {
    F: 35
  },
  "2017": {
    F: 19
  },
  "2018": {
    F: 26
  },
  "2019": {
    F: 16
  },
  "2020": {
    F: 12
  },
  "2021": {
    F: 14
  }
};
const Ashlyn = {
  "2004": {
    F: 15
  },
  "2005": {
    F: 12
  },
  "2008": {
    F: 13
  },
  "2009": {
    F: 15
  },
  "2010": {
    F: 19
  },
  "2011": {
    F: 25
  },
  "2012": {
    F: 14
  },
  "2013": {
    F: 10
  },
  "2016": {
    F: 11
  },
  "2017": {
    F: 11
  }
};
const Ashton = {
  "1986": {
    M: 21
  },
  "1987": {
    M: 15
  },
  "1989": {
    F: 11,
    M: 17
  },
  "1990": {
    M: 13
  },
  "1991": {
    M: 18
  },
  "1992": {
    M: 19
  },
  "1994": {
    M: 19
  },
  "1995": {
    M: 25
  },
  "1996": {
    M: 13
  },
  "1997": {
    M: 25
  },
  "1998": {
    M: 17
  },
  "1999": {
    M: 12
  },
  "2000": {
    M: 14
  },
  "2001": {
    M: 15
  },
  "2002": {
    M: 17
  },
  "2003": {
    M: 27
  },
  "2004": {
    M: 117
  },
  "2005": {
    M: 88
  },
  "2006": {
    M: 82
  },
  "2007": {
    M: 128
  },
  "2008": {
    M: 111
  },
  "2009": {
    M: 94
  },
  "2010": {
    M: 94
  },
  "2011": {
    M: 87
  },
  "2012": {
    M: 78
  },
  "2013": {
    M: 63
  },
  "2014": {
    M: 70
  },
  "2015": {
    M: 83
  },
  "2016": {
    M: 73
  },
  "2017": {
    M: 74
  },
  "2018": {
    M: 55
  },
  "2019": {
    M: 63
  },
  "2020": {
    M: 49
  },
  "2021": {
    M: 42
  }
};
const Aston = {
  "2005": {
    M: 16
  },
  "2006": {
    M: 22
  },
  "2007": {
    M: 17
  },
  "2008": {
    M: 25
  },
  "2009": {
    M: 25
  },
  "2010": {
    M: 30
  },
  "2011": {
    M: 17
  },
  "2012": {
    M: 12
  },
  "2013": {
    M: 17
  },
  "2014": {
    M: 14
  },
  "2015": {
    M: 13
  },
  "2016": {
    M: 15
  },
  "2017": {
    M: 11
  },
  "2018": {
    M: 18
  },
  "2019": {
    M: 13
  },
  "2020": {
    M: 11
  },
  "2021": {
    M: 10
  }
};
const Astrid = {
  "2017": {
    F: 10
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 12
  },
  "2020": {
    F: 22
  },
  "2021": {
    F: 22
  }
};
const Ataahua = {
  "2005": {
    F: 13
  },
  "2006": {
    F: 17
  },
  "2007": {
    F: 17
  },
  "2008": {
    F: 17
  },
  "2009": {
    F: 22
  },
  "2010": {
    F: 23
  },
  "2011": {
    F: 18
  },
  "2012": {
    F: 21
  },
  "2013": {
    F: 16
  },
  "2014": {
    F: 18
  },
  "2015": {
    F: 19
  },
  "2016": {
    F: 21
  },
  "2017": {
    F: 16
  },
  "2018": {
    F: 14
  },
  "2019": {
    F: 16
  },
  "2020": {
    F: 12
  }
};
const Atarangi = {
  "2020": {
    F: 13
  }
};
const Athena = {
  "2006": {
    F: 12
  },
  "2009": {
    F: 10
  },
  "2010": {
    F: 13
  },
  "2011": {
    F: 19
  },
  "2012": {
    F: 19
  },
  "2013": {
    F: 19
  },
  "2014": {
    F: 18
  },
  "2015": {
    F: 27
  },
  "2016": {
    F: 31
  },
  "2017": {
    F: 29
  },
  "2018": {
    F: 43
  },
  "2019": {
    F: 38
  },
  "2020": {
    F: 42
  },
  "2021": {
    F: 30
  }
};
const Athol = {
  "1902": {
    M: 13
  },
  "1903": {
    M: 11
  },
  "1904": {
    M: 14
  },
  "1905": {
    M: 11
  },
  "1906": {
    M: 19
  },
  "1907": {
    M: 20
  },
  "1908": {
    M: 17
  },
  "1909": {
    M: 27
  },
  "1910": {
    M: 15
  },
  "1911": {
    M: 10
  },
  "1912": {
    M: 22
  },
  "1913": {
    M: 16
  },
  "1914": {
    M: 24
  },
  "1915": {
    M: 30
  },
  "1916": {
    M: 23
  },
  "1917": {
    M: 31
  },
  "1918": {
    M: 34
  },
  "1919": {
    M: 25
  },
  "1920": {
    M: 30
  },
  "1921": {
    M: 27
  },
  "1922": {
    M: 35
  },
  "1923": {
    M: 30
  },
  "1924": {
    M: 41
  },
  "1925": {
    M: 29
  },
  "1926": {
    M: 28
  },
  "1927": {
    M: 28
  },
  "1928": {
    M: 32
  },
  "1929": {
    M: 27
  },
  "1930": {
    M: 18
  },
  "1931": {
    M: 27
  },
  "1932": {
    M: 20
  },
  "1933": {
    M: 16
  },
  "1934": {
    M: 11
  },
  "1935": {
    M: 11
  },
  "1936": {
    M: 13
  },
  "1937": {
    M: 14
  },
  "1938": {
    M: 11
  },
  "1939": {
    M: 16
  },
  "1940": {
    M: 18
  },
  "1941": {
    M: 23
  },
  "1942": {
    M: 20
  },
  "1943": {
    M: 12
  },
  "1945": {
    M: 18
  },
  "1946": {
    M: 12
  },
  "1947": {
    M: 12
  },
  "1948": {
    M: 12
  },
  "1949": {
    M: 18
  },
  "1950": {
    M: 15
  },
  "1954": {
    M: 11
  },
  "1955": {
    M: 21
  },
  "1960": {
    M: 10
  },
  "1961": {
    M: 10
  }
};
const Atlas = {
  "2017": {
    M: 11
  },
  "2018": {
    M: 23
  },
  "2019": {
    M: 17
  },
  "2020": {
    M: 30
  },
  "2021": {
    M: 38
  }
};
const Atticus = {
  "2017": {
    M: 12
  },
  "2018": {
    M: 13
  },
  "2019": {
    M: 14
  },
  "2021": {
    M: 10
  }
};
const Aubree = {
  "2014": {
    F: 23
  },
  "2015": {
    F: 19
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 23
  },
  "2018": {
    F: 20
  },
  "2019": {
    F: 21
  },
  "2020": {
    F: 18
  },
  "2021": {
    F: 16
  }
};
const Aubrey = {
  "1905": {
    M: 15
  },
  "1906": {
    M: 14
  },
  "1908": {
    M: 11
  },
  "1910": {
    M: 17
  },
  "1911": {
    M: 14
  },
  "1912": {
    M: 13
  },
  "1913": {
    M: 15
  },
  "1914": {
    M: 14
  },
  "1915": {
    M: 15
  },
  "1916": {
    M: 14
  },
  "1919": {
    M: 15
  },
  "1920": {
    M: 14
  },
  "1921": {
    M: 10
  },
  "1922": {
    M: 11
  },
  "1923": {
    M: 12
  },
  "1924": {
    M: 11
  },
  "1925": {
    M: 14
  },
  "2013": {
    F: 14
  },
  "2014": {
    F: 14
  },
  "2015": {
    F: 17
  },
  "2016": {
    F: 23
  },
  "2017": {
    F: 19
  },
  "2018": {
    F: 28
  },
  "2019": {
    F: 32
  },
  "2020": {
    F: 37
  },
  "2021": {
    F: 32
  }
};
const Audrey = {
  "1900": {
    F: 10
  },
  "1903": {
    F: 11
  },
  "1905": {
    F: 12
  },
  "1906": {
    F: 19
  },
  "1907": {
    F: 25
  },
  "1908": {
    F: 24
  },
  "1909": {
    F: 19
  },
  "1910": {
    F: 46
  },
  "1911": {
    F: 37
  },
  "1912": {
    F: 50
  },
  "1913": {
    F: 52
  },
  "1914": {
    F: 68
  },
  "1915": {
    F: 66
  },
  "1916": {
    F: 79
  },
  "1917": {
    F: 75
  },
  "1918": {
    F: 81
  },
  "1919": {
    F: 90
  },
  "1920": {
    F: 111
  },
  "1921": {
    F: 132
  },
  "1922": {
    F: 159
  },
  "1923": {
    F: 158
  },
  "1924": {
    F: 210
  },
  "1925": {
    F: 165
  },
  "1926": {
    F: 168
  },
  "1927": {
    F: 192
  },
  "1928": {
    F: 189
  },
  "1929": {
    F: 149
  },
  "1930": {
    F: 146
  },
  "1931": {
    F: 173
  },
  "1932": {
    F: 124
  },
  "1933": {
    F: 111
  },
  "1934": {
    F: 87
  },
  "1935": {
    F: 106
  },
  "1936": {
    F: 76
  },
  "1937": {
    F: 75
  },
  "1938": {
    F: 60
  },
  "1939": {
    F: 60
  },
  "1940": {
    F: 42
  },
  "1941": {
    F: 28
  },
  "1942": {
    F: 34
  },
  "1943": {
    F: 32
  },
  "1944": {
    F: 24
  },
  "1945": {
    F: 29
  },
  "1946": {
    F: 30
  },
  "1947": {
    F: 35
  },
  "1948": {
    F: 22
  },
  "1949": {
    F: 13
  },
  "1950": {
    F: 20
  },
  "1951": {
    F: 18
  },
  "1952": {
    F: 21
  },
  "1953": {
    F: 25
  },
  "1954": {
    F: 11
  },
  "1955": {
    F: 15
  },
  "1956": {
    F: 28
  },
  "1957": {
    F: 26
  },
  "1958": {
    F: 12
  },
  "1959": {
    F: 20
  },
  "1960": {
    F: 21
  },
  "1961": {
    F: 17
  },
  "1962": {
    F: 23
  },
  "1964": {
    F: 17
  },
  "1965": {
    F: 12
  },
  "1967": {
    F: 10
  },
  "1968": {
    F: 12
  },
  "1969": {
    F: 13
  },
  "1970": {
    F: 12
  },
  "1972": {
    F: 10
  },
  "1974": {
    F: 14
  },
  "1975": {
    F: 10
  },
  "1977": {
    F: 10
  },
  "1979": {
    F: 11
  },
  "1995": {
    F: 10
  },
  "2007": {
    F: 10
  },
  "2009": {
    F: 12
  },
  "2011": {
    F: 17
  },
  "2012": {
    F: 18
  },
  "2013": {
    F: 24
  },
  "2014": {
    F: 16
  },
  "2015": {
    F: 22
  },
  "2016": {
    F: 26
  },
  "2017": {
    F: 26
  },
  "2018": {
    F: 24
  },
  "2019": {
    F: 32
  },
  "2020": {
    F: 25
  },
  "2021": {
    F: 24
  }
};
const August = {
  "2014": {
    M: 10
  },
  "2015": {
    M: 14
  },
  "2016": {
    M: 13
  },
  "2017": {
    M: 19
  },
  "2018": {
    F: 18,
    M: 16
  },
  "2019": {
    M: 16,
    F: 10
  },
  "2020": {
    M: 20,
    F: 13
  },
  "2021": {
    F: 15,
    M: 30
  }
};
const Aura = {
  "2020": {
    F: 12
  },
  "2021": {
    F: 10
  }
};
const Aurelia = {
  "2017": {
    F: 12
  },
  "2019": {
    F: 14
  },
  "2021": {
    F: 11
  }
};
const Aurora = {
  "2007": {
    F: 12
  },
  "2008": {
    F: 22
  },
  "2009": {
    F: 35
  },
  "2010": {
    F: 30
  },
  "2011": {
    F: 22
  },
  "2012": {
    F: 30
  },
  "2013": {
    F: 45
  },
  "2014": {
    F: 49
  },
  "2015": {
    F: 48
  },
  "2016": {
    F: 55
  },
  "2017": {
    F: 58
  },
  "2018": {
    F: 74
  },
  "2019": {
    F: 67
  },
  "2020": {
    F: 77
  },
  "2021": {
    F: 86
  }
};
const Austin = {
  "1909": {
    M: 10
  },
  "1913": {
    M: 10
  },
  "1921": {
    M: 11
  },
  "1996": {
    M: 11
  },
  "1997": {
    M: 13
  },
  "1998": {
    M: 31
  },
  "1999": {
    M: 31
  },
  "2000": {
    M: 13
  },
  "2001": {
    M: 23
  },
  "2002": {
    M: 24
  },
  "2003": {
    M: 21
  },
  "2004": {
    M: 20
  },
  "2005": {
    M: 40
  },
  "2006": {
    M: 42
  },
  "2007": {
    M: 57
  },
  "2008": {
    M: 48
  },
  "2009": {
    M: 54
  },
  "2010": {
    M: 45
  },
  "2011": {
    M: 75
  },
  "2012": {
    M: 88
  },
  "2013": {
    M: 74
  },
  "2014": {
    M: 63
  },
  "2015": {
    M: 74
  },
  "2016": {
    M: 109
  },
  "2017": {
    M: 98
  },
  "2018": {
    M: 68
  },
  "2019": {
    M: 75
  },
  "2020": {
    M: 72
  },
  "2021": {
    M: 58
  }
};
const Autumn = {
  "1996": {
    F: 10
  },
  "2001": {
    F: 10
  },
  "2004": {
    F: 11
  },
  "2008": {
    F: 17
  },
  "2009": {
    F: 12
  },
  "2011": {
    F: 21
  },
  "2012": {
    F: 22
  },
  "2013": {
    F: 18
  },
  "2014": {
    F: 14
  },
  "2015": {
    F: 16
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 19
  },
  "2018": {
    F: 24
  },
  "2019": {
    F: 28
  },
  "2020": {
    F: 24
  },
  "2021": {
    F: 29
  }
};
const Ava = {
  "1999": {
    F: 16
  },
  "2000": {
    F: 11
  },
  "2001": {
    F: 18
  },
  "2002": {
    F: 24
  },
  "2003": {
    F: 39
  },
  "2004": {
    F: 81
  },
  "2005": {
    F: 75
  },
  "2006": {
    F: 143
  },
  "2007": {
    F: 171
  },
  "2008": {
    F: 196
  },
  "2009": {
    F: 192
  },
  "2010": {
    F: 217
  },
  "2011": {
    F: 205
  },
  "2012": {
    F: 207
  },
  "2013": {
    F: 218
  },
  "2014": {
    F: 183
  },
  "2015": {
    F: 184
  },
  "2016": {
    F: 188
  },
  "2017": {
    F: 217
  },
  "2018": {
    F: 180
  },
  "2019": {
    F: 185
  },
  "2020": {
    F: 175
  },
  "2021": {
    F: 184
  }
};
const Avah = {
  "2014": {
    F: 12
  },
  "2020": {
    F: 10
  }
};
const Averil = {
  "1934": {
    F: 10
  },
  "1948": {
    F: 12
  },
  "1949": {
    F: 22
  },
  "1951": {
    F: 13
  },
  "1953": {
    F: 16
  },
  "1954": {
    F: 15
  },
  "1955": {
    F: 11
  },
  "1956": {
    F: 17
  },
  "1959": {
    F: 10
  },
  "1962": {
    F: 10
  }
};
const Avery = {
  "2014": {
    F: 12
  },
  "2015": {
    F: 18
  },
  "2016": {
    F: 24,
    M: 12
  },
  "2017": {
    F: 15
  },
  "2018": {
    F: 29
  },
  "2019": {
    F: 22
  },
  "2020": {
    F: 15
  },
  "2021": {
    F: 18
  }
};
const Avis = {
  "1902": {
    F: 11
  },
  "1905": {
    F: 14
  },
  "1906": {
    F: 10
  },
  "1907": {
    F: 12
  },
  "1912": {
    F: 21
  },
  "1914": {
    F: 10
  },
  "1915": {
    F: 12
  },
  "1916": {
    F: 12
  },
  "1917": {
    F: 15
  },
  "1918": {
    F: 18
  },
  "1919": {
    F: 15
  },
  "1920": {
    F: 29
  },
  "1921": {
    F: 18
  },
  "1922": {
    F: 27
  },
  "1923": {
    F: 21
  },
  "1924": {
    F: 17
  },
  "1925": {
    F: 30
  },
  "1926": {
    F: 16
  },
  "1927": {
    F: 23
  },
  "1928": {
    F: 25
  },
  "1929": {
    F: 25
  },
  "1930": {
    F: 33
  },
  "1931": {
    F: 21
  },
  "1932": {
    F: 21
  },
  "1933": {
    F: 21
  },
  "1934": {
    F: 13
  },
  "1935": {
    F: 20
  },
  "1937": {
    F: 10
  },
  "1939": {
    F: 19
  },
  "1940": {
    F: 21
  },
  "1941": {
    F: 18
  },
  "1945": {
    F: 10
  },
  "1946": {
    F: 11
  },
  "1947": {
    F: 12
  }
};
const Avleen = {
  "2017": {
    F: 10
  },
  "2020": {
    F: 11
  }
};
const Avril = {
  "1956": {
    F: 10
  }
};
const Avyaan = {
  "2020": {
    M: 10
  }
};
const Awatea = {
  "2021": {
    F: 15
  }
};
const Awhina = {
  "1974": {
    F: 11
  },
  "1975": {
    F: 10
  },
  "1977": {
    F: 10
  },
  "1978": {
    F: 13
  },
  "1979": {
    F: 10
  },
  "1980": {
    F: 15
  },
  "1981": {
    F: 19
  },
  "1982": {
    F: 23
  },
  "1983": {
    F: 21
  },
  "1984": {
    F: 16
  },
  "1985": {
    F: 12
  },
  "1986": {
    F: 16
  },
  "1987": {
    F: 15
  },
  "1988": {
    F: 15
  },
  "1989": {
    F: 22
  },
  "1990": {
    F: 24
  },
  "1991": {
    F: 21
  },
  "1992": {
    F: 21
  },
  "1993": {
    F: 13
  },
  "1994": {
    F: 16
  },
  "1995": {
    F: 17
  },
  "1996": {
    F: 18
  },
  "1997": {
    F: 11
  },
  "1998": {
    F: 16
  },
  "2000": {
    F: 11
  },
  "2007": {
    F: 10
  },
  "2008": {
    F: 10
  },
  "2009": {
    F: 10
  },
  "2010": {
    F: 12
  },
  "2012": {
    F: 10
  }
};
const Axel = {
  "2008": {
    M: 12
  },
  "2010": {
    M: 11
  },
  "2011": {
    M: 27
  },
  "2012": {
    M: 21
  },
  "2013": {
    M: 33
  },
  "2014": {
    M: 37
  },
  "2015": {
    M: 38
  },
  "2016": {
    M: 32
  },
  "2017": {
    M: 28
  },
  "2018": {
    M: 42
  },
  "2019": {
    M: 32
  },
  "2020": {
    M: 26
  },
  "2021": {
    M: 38
  }
};
const Axl = {
  "2016": {
    M: 11
  }
};
const Ayaan = {
  "2010": {
    M: 10
  },
  "2011": {
    M: 14
  },
  "2012": {
    M: 10
  },
  "2013": {
    M: 22
  },
  "2014": {
    M: 20
  },
  "2015": {
    M: 24
  },
  "2016": {
    M: 19
  },
  "2017": {
    M: 23
  },
  "2018": {
    M: 30
  },
  "2019": {
    M: 34
  },
  "2020": {
    M: 30
  },
  "2021": {
    M: 33
  }
};
const Ayden = {
  "1992": {
    M: 12
  },
  "1994": {
    M: 11
  },
  "1995": {
    M: 11
  },
  "1997": {
    M: 14
  },
  "1999": {
    M: 14
  },
  "2000": {
    M: 10
  },
  "2001": {
    M: 10
  },
  "2002": {
    M: 15
  },
  "2003": {
    M: 11
  },
  "2005": {
    M: 12
  },
  "2007": {
    M: 16
  },
  "2008": {
    M: 10
  },
  "2009": {
    M: 27
  },
  "2010": {
    M: 24
  },
  "2011": {
    M: 22
  },
  "2012": {
    M: 20
  },
  "2013": {
    M: 23
  },
  "2014": {
    M: 22
  },
  "2015": {
    M: 18
  },
  "2016": {
    M: 12
  },
  "2017": {
    M: 17
  },
  "2018": {
    M: 15
  },
  "2020": {
    M: 13
  },
  "2021": {
    M: 12
  }
};
const Ayesha = {
  "2005": {
    F: 12
  }
};
const Ayla = {
  "1987": {
    F: 20
  },
  "1988": {
    F: 22
  },
  "1989": {
    F: 29
  },
  "1990": {
    F: 35
  },
  "1991": {
    F: 27
  },
  "1992": {
    F: 26
  },
  "1993": {
    F: 23
  },
  "1994": {
    F: 21
  },
  "1995": {
    F: 14
  },
  "1996": {
    F: 20
  },
  "1997": {
    F: 14
  },
  "1998": {
    F: 23
  },
  "1999": {
    F: 16
  },
  "2000": {
    F: 17
  },
  "2001": {
    F: 14
  },
  "2002": {
    F: 25
  },
  "2003": {
    F: 17
  },
  "2004": {
    F: 15
  },
  "2005": {
    F: 28
  },
  "2006": {
    F: 23
  },
  "2007": {
    F: 32
  },
  "2008": {
    F: 45
  },
  "2009": {
    F: 44
  },
  "2010": {
    F: 54
  },
  "2011": {
    F: 55
  },
  "2012": {
    F: 58
  },
  "2013": {
    F: 54
  },
  "2014": {
    F: 71
  },
  "2015": {
    F: 78
  },
  "2016": {
    F: 72
  },
  "2017": {
    F: 85
  },
  "2018": {
    F: 63
  },
  "2019": {
    F: 82
  },
  "2020": {
    F: 71
  },
  "2021": {
    F: 90
  }
};
const Aylah = {
  "2011": {
    F: 11
  },
  "2015": {
    F: 11
  },
  "2018": {
    F: 13
  }
};
const Aysha = {
  "2004": {
    F: 10
  },
  "2010": {
    F: 10
  }
};
const Ayush = {
  "2010": {
    M: 12
  }
};
const Ayva = {
  "2009": {
    F: 13
  },
  "2013": {
    F: 12
  },
  "2015": {
    F: 11
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 17
  },
  "2018": {
    F: 17
  },
  "2019": {
    F: 11
  },
  "2020": {
    F: 13
  },
  "2021": {
    F: 13
  }
};
const Ayvah = {
  "2012": {
    F: 10
  }
};
const Azalea = {
  "2012": {
    F: 11
  },
  "2014": {
    F: 15
  },
  "2015": {
    F: 20
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 14
  },
  "2021": {
    F: 14
  }
};
const Azaria = {
  "2005": {
    F: 12
  },
  "2007": {
    F: 19
  },
  "2008": {
    F: 11
  },
  "2009": {
    F: 11
  },
  "2010": {
    F: 18
  },
  "2011": {
    F: 13
  },
  "2012": {
    F: 12
  },
  "2013": {
    F: 14
  },
  "2014": {
    F: 12
  },
  "2015": {
    F: 10
  },
  "2017": {
    F: 12
  }
};
const Azariah = {
  "2010": {
    F: 10
  },
  "2012": {
    F: 10
  },
  "2014": {
    F: 11
  },
  "2015": {
    F: 10,
    M: 10
  },
  "2017": {
    F: 14
  },
  "2018": {
    F: 10
  },
  "2019": {
    F: 10
  },
  "2020": {
    M: 12
  }
};
const Aziel = {
  "2021": {
    M: 12
  }
};
const Baby = {
  "2006": {
    F: 10,
    M: 10
  },
  "2007": {
    F: 12,
    M: 17
  },
  "2008": {
    F: 30,
    M: 37
  }
};
const Baden = {
  "1900": {
    M: 38
  }
};
const Bailee = {
  "1997": {
    F: 12
  },
  "1998": {
    F: 14
  },
  "1999": {
    F: 13
  },
  "2001": {
    F: 13
  },
  "2004": {
    F: 11
  },
  "2006": {
    F: 15
  },
  "2007": {
    F: 13
  },
  "2008": {
    F: 12
  },
  "2009": {
    F: 12
  },
  "2010": {
    F: 15
  },
  "2011": {
    F: 13
  },
  "2012": {
    F: 11
  },
  "2015": {
    F: 10
  },
  "2016": {
    F: 11
  }
};
const Bailey = {
  "1987": {
    F: 10
  },
  "1989": {
    F: 12
  },
  "1990": {
    F: 11
  },
  "1991": {
    F: 10
  },
  "1992": {
    F: 13
  },
  "1993": {
    F: 11
  },
  "1994": {
    F: 12
  },
  "1995": {
    F: 26,
    M: 13
  },
  "1996": {
    F: 44,
    M: 89
  },
  "1997": {
    F: 55,
    M: 78
  },
  "1998": {
    F: 45,
    M: 134
  },
  "1999": {
    F: 42,
    M: 154
  },
  "2000": {
    F: 36,
    M: 122
  },
  "2001": {
    F: 31,
    M: 96
  },
  "2002": {
    F: 39,
    M: 98
  },
  "2003": {
    F: 33,
    M: 121
  },
  "2004": {
    F: 37,
    M: 105
  },
  "2005": {
    F: 35,
    M: 82
  },
  "2006": {
    F: 42,
    M: 86
  },
  "2007": {
    F: 46,
    M: 75
  },
  "2008": {
    F: 37,
    M: 75
  },
  "2009": {
    F: 52,
    M: 51
  },
  "2010": {
    F: 38,
    M: 36
  },
  "2011": {
    F: 40,
    M: 34
  },
  "2012": {
    F: 37,
    M: 33
  },
  "2013": {
    F: 35,
    M: 21
  },
  "2014": {
    F: 37,
    M: 16
  },
  "2015": {
    F: 32,
    M: 25
  },
  "2016": {
    F: 32,
    M: 13
  },
  "2017": {
    F: 25,
    M: 17
  },
  "2018": {
    M: 16,
    F: 22
  },
  "2019": {
    M: 13,
    F: 19
  },
  "2020": {
    M: 13,
    F: 31
  },
  "2021": {
    F: 38,
    M: 13
  }
};
const Barbara = {
  "1900": {
    F: 18
  },
  "1901": {
    F: 13
  },
  "1902": {
    F: 25
  },
  "1903": {
    F: 19
  },
  "1904": {
    F: 22
  },
  "1905": {
    F: 20
  },
  "1906": {
    F: 21
  },
  "1907": {
    F: 29
  },
  "1908": {
    F: 22
  },
  "1909": {
    F: 30
  },
  "1910": {
    F: 28
  },
  "1911": {
    F: 33
  },
  "1912": {
    F: 36
  },
  "1913": {
    F: 43
  },
  "1914": {
    F: 47
  },
  "1915": {
    F: 51
  },
  "1916": {
    F: 60
  },
  "1917": {
    F: 50
  },
  "1918": {
    F: 53
  },
  "1919": {
    F: 66
  },
  "1920": {
    F: 58
  },
  "1921": {
    F: 70
  },
  "1922": {
    F: 71
  },
  "1923": {
    F: 86
  },
  "1924": {
    F: 94
  },
  "1925": {
    F: 105
  },
  "1926": {
    F: 115
  },
  "1927": {
    F: 146
  },
  "1928": {
    F: 132
  },
  "1929": {
    F: 163
  },
  "1930": {
    F: 181
  },
  "1931": {
    F: 192
  },
  "1932": {
    F: 222
  },
  "1933": {
    F: 230
  },
  "1934": {
    F: 221
  },
  "1935": {
    F: 244
  },
  "1936": {
    F: 255
  },
  "1937": {
    F: 283
  },
  "1938": {
    F: 340
  },
  "1939": {
    F: 321
  },
  "1940": {
    F: 388
  },
  "1941": {
    F: 380
  },
  "1942": {
    F: 357
  },
  "1943": {
    F: 264
  },
  "1944": {
    F: 320
  },
  "1945": {
    F: 345
  },
  "1946": {
    F: 379
  },
  "1947": {
    F: 365
  },
  "1948": {
    F: 431
  },
  "1949": {
    F: 398
  },
  "1950": {
    F: 386
  },
  "1951": {
    F: 349
  },
  "1952": {
    F: 375
  },
  "1953": {
    F: 326
  },
  "1954": {
    F: 378
  },
  "1955": {
    F: 378
  },
  "1956": {
    F: 335
  },
  "1957": {
    F: 304
  },
  "1958": {
    F: 308
  },
  "1959": {
    F: 306
  },
  "1960": {
    F: 270
  },
  "1961": {
    F: 225
  },
  "1962": {
    F: 178
  },
  "1963": {
    F: 171
  },
  "1964": {
    F: 153
  },
  "1965": {
    F: 92
  },
  "1966": {
    F: 101
  },
  "1967": {
    F: 104
  },
  "1968": {
    F: 87
  },
  "1969": {
    F: 75
  },
  "1970": {
    F: 44
  },
  "1971": {
    F: 68
  },
  "1972": {
    F: 63
  },
  "1973": {
    F: 38
  },
  "1974": {
    F: 41
  },
  "1975": {
    F: 24
  },
  "1976": {
    F: 30
  },
  "1977": {
    F: 30
  },
  "1978": {
    F: 23
  },
  "1979": {
    F: 27
  },
  "1980": {
    F: 22
  },
  "1981": {
    F: 20
  },
  "1982": {
    F: 24
  },
  "1983": {
    F: 13
  },
  "1984": {
    F: 18
  },
  "1985": {
    F: 12
  },
  "1986": {
    F: 12
  },
  "1987": {
    F: 12
  },
  "1988": {
    F: 14
  },
  "1992": {
    F: 10
  }
};
const Barnaby = {
  "2011": {
    M: 10
  }
};
const Barney = {
  "1957": {
    M: 10
  },
  "1963": {
    M: 10
  }
};
const Barrie = {
  "1928": {
    M: 15
  },
  "1929": {
    M: 14
  },
  "1930": {
    M: 19
  },
  "1931": {
    M: 16
  },
  "1932": {
    M: 15
  },
  "1933": {
    M: 38
  },
  "1934": {
    M: 36
  },
  "1935": {
    M: 33
  },
  "1936": {
    M: 29
  },
  "1937": {
    M: 58
  },
  "1938": {
    M: 45
  },
  "1939": {
    M: 38
  },
  "1940": {
    M: 39
  },
  "1941": {
    M: 39
  },
  "1942": {
    M: 31
  },
  "1943": {
    M: 22
  },
  "1944": {
    M: 30
  },
  "1945": {
    M: 18
  },
  "1946": {
    M: 23
  },
  "1947": {
    M: 20
  },
  "1948": {
    M: 25
  },
  "1949": {
    M: 14
  },
  "1950": {
    M: 12
  },
  "1951": {
    M: 18
  },
  "1952": {
    M: 10
  },
  "1953": {
    M: 11
  },
  "1954": {
    M: 16
  },
  "1955": {
    M: 16
  },
  "1956": {
    M: 17
  },
  "1957": {
    M: 11
  },
  "1958": {
    M: 13
  },
  "1959": {
    M: 14
  },
  "1960": {
    M: 17
  },
  "1961": {
    M: 11
  },
  "1962": {
    M: 11
  },
  "1963": {
    M: 14
  },
  "1964": {
    M: 12
  },
  "1965": {
    M: 11
  },
  "1969": {
    M: 15
  }
};
const Barry = {
  "1922": {
    M: 11
  },
  "1924": {
    M: 22
  },
  "1925": {
    M: 17
  },
  "1926": {
    M: 35
  },
  "1927": {
    M: 38
  },
  "1928": {
    M: 52
  },
  "1929": {
    M: 67
  },
  "1930": {
    M: 82
  },
  "1931": {
    M: 105
  },
  "1932": {
    M: 131
  },
  "1933": {
    M: 146
  },
  "1934": {
    M: 166
  },
  "1935": {
    M: 226
  },
  "1936": {
    M: 215
  },
  "1937": {
    M: 206
  },
  "1938": {
    M: 275
  },
  "1939": {
    M: 244
  },
  "1940": {
    M: 319
  },
  "1941": {
    M: 320
  },
  "1942": {
    M: 238
  },
  "1943": {
    M: 219
  },
  "1944": {
    M: 242
  },
  "1945": {
    M: 251
  },
  "1946": {
    M: 291
  },
  "1947": {
    M: 352
  },
  "1948": {
    M: 283
  },
  "1949": {
    M: 278
  },
  "1950": {
    M: 294
  },
  "1951": {
    M: 283
  },
  "1952": {
    M: 295
  },
  "1953": {
    M: 302
  },
  "1954": {
    M: 288
  },
  "1955": {
    M: 292
  },
  "1956": {
    M: 256
  },
  "1957": {
    M: 289
  },
  "1958": {
    M: 241
  },
  "1959": {
    M: 252
  },
  "1960": {
    M: 229
  },
  "1961": {
    M: 235
  },
  "1962": {
    M: 222
  },
  "1963": {
    M: 191
  },
  "1964": {
    M: 181
  },
  "1965": {
    M: 160
  },
  "1966": {
    M: 124
  },
  "1967": {
    M: 115
  },
  "1968": {
    M: 123
  },
  "1969": {
    M: 113
  },
  "1970": {
    M: 106
  },
  "1971": {
    M: 109
  },
  "1972": {
    M: 99
  },
  "1973": {
    M: 61
  },
  "1974": {
    M: 41
  },
  "1975": {
    M: 56
  },
  "1976": {
    M: 34
  },
  "1977": {
    M: 35
  },
  "1978": {
    M: 29
  },
  "1979": {
    M: 33
  },
  "1980": {
    M: 30
  },
  "1981": {
    M: 32
  },
  "1982": {
    M: 21
  },
  "1983": {
    M: 29
  },
  "1984": {
    M: 23
  },
  "1985": {
    M: 22
  },
  "1986": {
    M: 17
  },
  "1987": {
    M: 23
  },
  "1988": {
    M: 13
  },
  "1989": {
    M: 11
  },
  "1991": {
    M: 22
  },
  "1997": {
    M: 13
  }
};
const Basil = {
  "1900": {
    M: 17
  },
  "1901": {
    M: 10
  },
  "1902": {
    M: 11
  },
  "1903": {
    M: 24
  },
  "1904": {
    M: 15
  },
  "1906": {
    M: 21
  },
  "1907": {
    M: 36
  },
  "1908": {
    M: 24
  },
  "1909": {
    M: 14
  },
  "1910": {
    M: 29
  },
  "1911": {
    M: 23
  },
  "1912": {
    M: 32
  },
  "1913": {
    M: 34
  },
  "1914": {
    M: 31
  },
  "1915": {
    M: 34
  },
  "1916": {
    M: 23
  },
  "1917": {
    M: 21
  },
  "1918": {
    M: 35
  },
  "1919": {
    M: 27
  },
  "1920": {
    M: 27
  },
  "1921": {
    M: 34
  },
  "1922": {
    M: 36
  },
  "1923": {
    M: 45
  },
  "1924": {
    M: 34
  },
  "1925": {
    M: 46
  },
  "1926": {
    M: 38
  },
  "1927": {
    M: 29
  },
  "1928": {
    M: 37
  },
  "1929": {
    M: 25
  },
  "1930": {
    M: 32
  },
  "1931": {
    M: 22
  },
  "1932": {
    M: 23
  },
  "1933": {
    M: 26
  },
  "1934": {
    M: 27
  },
  "1935": {
    M: 29
  },
  "1936": {
    M: 17
  },
  "1937": {
    M: 21
  },
  "1938": {
    M: 17
  },
  "1939": {
    M: 24
  },
  "1940": {
    M: 24
  },
  "1941": {
    M: 18
  },
  "1942": {
    M: 22
  },
  "1943": {
    M: 34
  },
  "1944": {
    M: 23
  },
  "1945": {
    M: 20
  },
  "1946": {
    M: 18
  },
  "1947": {
    M: 14
  },
  "1948": {
    M: 16
  },
  "1949": {
    M: 10
  },
  "1951": {
    M: 13
  },
  "1952": {
    M: 12
  },
  "1953": {
    M: 10
  },
  "1957": {
    M: 12
  },
  "1958": {
    M: 13
  },
  "1960": {
    M: 11
  },
  "1961": {
    M: 12
  },
  "1965": {
    M: 11
  },
  "1969": {
    M: 13
  }
};
const Baxter = {
  "2002": {
    M: 10
  },
  "2005": {
    M: 10
  },
  "2006": {
    M: 32
  },
  "2007": {
    M: 19
  },
  "2008": {
    M: 18
  },
  "2009": {
    M: 21
  },
  "2010": {
    M: 27
  },
  "2011": {
    M: 22
  },
  "2012": {
    M: 27
  },
  "2013": {
    M: 17
  },
  "2014": {
    M: 20
  },
  "2015": {
    M: 31
  },
  "2016": {
    M: 12
  },
  "2017": {
    M: 13
  },
  "2018": {
    M: 13
  },
  "2019": {
    M: 12
  }
};
const Baylee = {
  "1995": {
    F: 11
  },
  "1996": {
    M: 10
  },
  "1997": {
    F: 17
  },
  "1998": {
    F: 18
  },
  "1999": {
    F: 17
  },
  "2000": {
    F: 11
  },
  "2001": {
    F: 15
  },
  "2002": {
    F: 15
  },
  "2003": {
    F: 12
  },
  "2004": {
    F: 13
  },
  "2006": {
    F: 11
  },
  "2007": {
    F: 22
  },
  "2008": {
    F: 11
  },
  "2010": {
    F: 19
  },
  "2011": {
    F: 14
  },
  "2012": {
    F: 11
  },
  "2014": {
    F: 10
  },
  "2015": {
    F: 10
  },
  "2016": {
    F: 10
  },
  "2017": {
    F: 10
  }
};
const Bayley = {
  "1995": {
    F: 10
  },
  "1996": {
    F: 14,
    M: 22
  },
  "1997": {
    F: 11,
    M: 19
  },
  "1998": {
    F: 10,
    M: 21
  },
  "1999": {
    M: 38
  },
  "2000": {
    M: 19
  },
  "2001": {
    M: 16
  },
  "2004": {
    M: 10
  },
  "2005": {
    M: 12
  },
  "2006": {
    M: 10
  },
  "2007": {
    M: 10
  }
};
const Bear = {
  "2020": {
    M: 11
  }
};
const Beatrice = {
  "1900": {
    F: 42
  },
  "1901": {
    F: 49
  },
  "1902": {
    F: 44
  },
  "1903": {
    F: 45
  },
  "1904": {
    F: 53
  },
  "1905": {
    F: 40
  },
  "1906": {
    F: 51
  },
  "1907": {
    F: 60
  },
  "1908": {
    F: 52
  },
  "1909": {
    F: 54
  },
  "1910": {
    F: 64
  },
  "1911": {
    F: 59
  },
  "1912": {
    F: 53
  },
  "1913": {
    F: 71
  },
  "1914": {
    F: 61
  },
  "1915": {
    F: 59
  },
  "1916": {
    F: 59
  },
  "1917": {
    F: 61
  },
  "1918": {
    F: 48
  },
  "1919": {
    F: 44
  },
  "1920": {
    F: 54
  },
  "1921": {
    F: 54
  },
  "1922": {
    F: 65
  },
  "1923": {
    F: 47
  },
  "1924": {
    F: 45
  },
  "1925": {
    F: 30
  },
  "1926": {
    F: 32
  },
  "1927": {
    F: 32
  },
  "1928": {
    F: 31
  },
  "1929": {
    F: 32
  },
  "1930": {
    F: 31
  },
  "1931": {
    F: 37
  },
  "1932": {
    F: 11
  },
  "1933": {
    F: 13
  },
  "1934": {
    F: 13
  },
  "1935": {
    F: 17
  },
  "1936": {
    F: 22
  },
  "1937": {
    F: 17
  },
  "1938": {
    F: 12
  },
  "1939": {
    F: 17
  },
  "1940": {
    F: 14
  },
  "1941": {
    F: 12
  },
  "1942": {
    F: 12
  },
  "1944": {
    F: 10
  },
  "1945": {
    F: 10
  },
  "1946": {
    F: 11
  },
  "1947": {
    F: 12
  },
  "1949": {
    F: 13
  },
  "1994": {
    F: 11
  },
  "2015": {
    F: 17
  }
};
const Beatrix = {
  "2009": {
    F: 11
  },
  "2011": {
    F: 10
  },
  "2013": {
    F: 10
  },
  "2015": {
    F: 10
  },
  "2016": {
    F: 10
  },
  "2017": {
    F: 13
  },
  "2019": {
    F: 12
  },
  "2020": {
    F: 10
  }
};
const Beau = {
  "1980": {
    M: 10
  },
  "1981": {
    M: 10
  },
  "1984": {
    M: 10
  },
  "1986": {
    M: 13
  },
  "1987": {
    M: 13
  },
  "1988": {
    M: 14
  },
  "1989": {
    M: 29
  },
  "1990": {
    M: 18
  },
  "1991": {
    M: 32
  },
  "1992": {
    M: 17
  },
  "1993": {
    M: 14
  },
  "1994": {
    M: 13
  },
  "1995": {
    M: 15
  },
  "1997": {
    M: 11
  },
  "2001": {
    M: 10
  },
  "2002": {
    M: 17
  },
  "2003": {
    M: 11
  },
  "2004": {
    M: 16
  },
  "2005": {
    M: 16
  },
  "2006": {
    M: 12
  },
  "2007": {
    M: 20
  },
  "2008": {
    M: 15
  },
  "2009": {
    M: 27
  },
  "2010": {
    M: 38
  },
  "2011": {
    M: 34
  },
  "2012": {
    M: 59
  },
  "2013": {
    M: 60
  },
  "2014": {
    M: 66
  },
  "2015": {
    M: 122
  },
  "2016": {
    M: 100
  },
  "2017": {
    M: 88
  },
  "2018": {
    M: 100
  },
  "2019": {
    M: 110
  },
  "2020": {
    M: 96
  },
  "2021": {
    M: 105
  }
};
const Beauden = {
  "2013": {
    M: 16
  },
  "2014": {
    M: 26
  },
  "2015": {
    M: 34
  },
  "2016": {
    M: 55
  },
  "2017": {
    M: 70
  },
  "2018": {
    M: 59
  },
  "2019": {
    M: 46
  },
  "2020": {
    M: 42
  },
  "2021": {
    M: 50
  }
};
const Bede = {
  "1958": {
    M: 10
  },
  "2008": {
    M: 11
  }
};
const Belinda = {
  "1949": {
    F: 14
  },
  "1950": {
    F: 15
  },
  "1951": {
    F: 10
  },
  "1955": {
    F: 16
  },
  "1956": {
    F: 17
  },
  "1957": {
    F: 26
  },
  "1958": {
    F: 30
  },
  "1959": {
    F: 37
  },
  "1960": {
    F: 38
  },
  "1961": {
    F: 52
  },
  "1962": {
    F: 60
  },
  "1963": {
    F: 55
  },
  "1964": {
    F: 62
  },
  "1965": {
    F: 65
  },
  "1966": {
    F: 60
  },
  "1967": {
    F: 43
  },
  "1968": {
    F: 44
  },
  "1969": {
    F: 73
  },
  "1970": {
    F: 93
  },
  "1971": {
    F: 101
  },
  "1972": {
    F: 82
  },
  "1973": {
    F: 104
  },
  "1974": {
    F: 124
  },
  "1975": {
    F: 139
  },
  "1976": {
    F: 122
  },
  "1977": {
    F: 98
  },
  "1978": {
    F: 90
  },
  "1979": {
    F: 54
  },
  "1980": {
    F: 56
  },
  "1981": {
    F: 54
  },
  "1982": {
    F: 47
  },
  "1983": {
    F: 34
  },
  "1984": {
    F: 45
  },
  "1985": {
    F: 37
  },
  "1986": {
    F: 31
  },
  "1987": {
    F: 42
  },
  "1988": {
    F: 22
  },
  "1989": {
    F: 30
  },
  "1990": {
    F: 25
  },
  "1991": {
    F: 21
  },
  "1992": {
    F: 14
  },
  "1993": {
    F: 13
  },
  "1994": {
    F: 11
  },
  "1995": {
    F: 11
  },
  "1996": {
    F: 14
  },
  "1997": {
    F: 14
  },
  "1998": {
    F: 10
  }
};
const Bella = {
  "1955": {
    F: 11
  },
  "1997": {
    F: 13
  },
  "1998": {
    F: 11
  },
  "1999": {
    F: 16
  },
  "2000": {
    F: 25
  },
  "2001": {
    F: 32
  },
  "2002": {
    F: 39
  },
  "2003": {
    F: 45
  },
  "2004": {
    F: 54
  },
  "2005": {
    F: 50
  },
  "2006": {
    F: 50
  },
  "2007": {
    F: 84
  },
  "2008": {
    F: 91
  },
  "2009": {
    F: 124
  },
  "2010": {
    F: 115
  },
  "2011": {
    F: 119
  },
  "2012": {
    F: 103
  },
  "2013": {
    F: 94
  },
  "2014": {
    F: 99
  },
  "2015": {
    F: 63
  },
  "2016": {
    F: 71
  },
  "2017": {
    F: 81
  },
  "2018": {
    F: 81
  },
  "2019": {
    F: 76
  },
  "2020": {
    F: 73
  },
  "2021": {
    F: 63
  }
};
const Belle = {
  "2007": {
    F: 10
  },
  "2009": {
    F: 16
  },
  "2010": {
    F: 14
  },
  "2011": {
    F: 16
  },
  "2012": {
    F: 11
  },
  "2014": {
    F: 13
  },
  "2015": {
    F: 12
  },
  "2018": {
    F: 10
  },
  "2019": {
    F: 14
  },
  "2020": {
    F: 10
  },
  "2021": {
    F: 12
  }
};
const Ben = {
  "1946": {
    M: 12
  },
  "1948": {
    M: 10
  },
  "1960": {
    M: 13
  },
  "1962": {
    M: 17
  },
  "1963": {
    M: 11
  },
  "1966": {
    M: 11
  },
  "1967": {
    M: 12
  },
  "1968": {
    M: 14
  },
  "1969": {
    M: 14
  },
  "1970": {
    M: 14
  },
  "1971": {
    M: 12
  },
  "1972": {
    M: 11
  },
  "1973": {
    M: 12
  },
  "1974": {
    M: 20
  },
  "1975": {
    M: 20
  },
  "1976": {
    M: 28
  },
  "1977": {
    M: 45
  },
  "1978": {
    M: 39
  },
  "1979": {
    M: 48
  },
  "1980": {
    M: 44
  },
  "1981": {
    M: 57
  },
  "1982": {
    M: 52
  },
  "1983": {
    M: 72
  },
  "1984": {
    M: 84
  },
  "1985": {
    M: 88
  },
  "1986": {
    M: 59
  },
  "1987": {
    M: 66
  },
  "1988": {
    M: 90
  },
  "1989": {
    M: 94
  },
  "1990": {
    M: 102
  },
  "1991": {
    M: 76
  },
  "1992": {
    M: 79
  },
  "1993": {
    M: 85
  },
  "1994": {
    M: 62
  },
  "1995": {
    M: 60
  },
  "1996": {
    M: 59
  },
  "1997": {
    M: 89
  },
  "1998": {
    M: 83
  },
  "1999": {
    M: 97
  },
  "2000": {
    M: 81
  },
  "2001": {
    M: 88
  },
  "2002": {
    M: 107
  },
  "2003": {
    M: 96
  },
  "2004": {
    M: 112
  },
  "2005": {
    M: 84
  },
  "2006": {
    M: 72
  },
  "2007": {
    M: 98
  },
  "2008": {
    M: 69
  },
  "2009": {
    M: 66
  },
  "2010": {
    M: 55
  },
  "2011": {
    M: 58
  },
  "2012": {
    M: 42
  },
  "2013": {
    M: 46
  },
  "2014": {
    M: 41
  },
  "2015": {
    M: 17
  },
  "2016": {
    M: 23
  },
  "2017": {
    M: 18
  },
  "2018": {
    M: 25
  },
  "2019": {
    M: 16
  },
  "2020": {
    M: 12
  },
  "2021": {
    M: 16
  }
};
const Benedict = {
  "2005": {
    M: 12
  }
};
const Benjamin = {
  "1900": {
    M: 13
  },
  "1901": {
    M: 11
  },
  "1903": {
    M: 21
  },
  "1904": {
    M: 20
  },
  "1906": {
    M: 26
  },
  "1907": {
    M: 21
  },
  "1908": {
    M: 11
  },
  "1909": {
    M: 15
  },
  "1910": {
    M: 15
  },
  "1911": {
    M: 14
  },
  "1912": {
    M: 25
  },
  "1913": {
    M: 17
  },
  "1914": {
    M: 13
  },
  "1915": {
    M: 12
  },
  "1916": {
    M: 16
  },
  "1918": {
    M: 15
  },
  "1919": {
    M: 10
  },
  "1920": {
    M: 12
  },
  "1921": {
    M: 17
  },
  "1922": {
    M: 13
  },
  "1923": {
    M: 15
  },
  "1924": {
    M: 16
  },
  "1925": {
    M: 12
  },
  "1927": {
    M: 14
  },
  "1929": {
    M: 13
  },
  "1930": {
    M: 10
  },
  "1931": {
    M: 13
  },
  "1933": {
    M: 11
  },
  "1936": {
    M: 13
  },
  "1937": {
    M: 10
  },
  "1939": {
    M: 13
  },
  "1941": {
    M: 11
  },
  "1945": {
    M: 13
  },
  "1947": {
    M: 11
  },
  "1950": {
    M: 15
  },
  "1951": {
    M: 12
  },
  "1952": {
    M: 15
  },
  "1953": {
    M: 15
  },
  "1954": {
    M: 24
  },
  "1955": {
    M: 12
  },
  "1956": {
    M: 23
  },
  "1957": {
    M: 17
  },
  "1958": {
    M: 24
  },
  "1959": {
    M: 24
  },
  "1960": {
    M: 24
  },
  "1961": {
    M: 20
  },
  "1962": {
    M: 28
  },
  "1963": {
    M: 29
  },
  "1964": {
    M: 17
  },
  "1965": {
    M: 42
  },
  "1966": {
    M: 29
  },
  "1967": {
    M: 39
  },
  "1968": {
    M: 53
  },
  "1969": {
    M: 39
  },
  "1970": {
    M: 68
  },
  "1971": {
    M: 94
  },
  "1972": {
    M: 87
  },
  "1973": {
    M: 120
  },
  "1974": {
    M: 166
  },
  "1975": {
    M: 211
  },
  "1976": {
    M: 233
  },
  "1977": {
    M: 271
  },
  "1978": {
    M: 300
  },
  "1979": {
    M: 327
  },
  "1980": {
    M: 346
  },
  "1981": {
    M: 363
  },
  "1982": {
    M: 367
  },
  "1983": {
    M: 354
  },
  "1984": {
    M: 418
  },
  "1985": {
    M: 472
  },
  "1986": {
    M: 441
  },
  "1987": {
    M: 458
  },
  "1988": {
    M: 478
  },
  "1989": {
    M: 455
  },
  "1990": {
    M: 493
  },
  "1991": {
    M: 543
  },
  "1992": {
    M: 491
  },
  "1993": {
    M: 474
  },
  "1994": {
    M: 434
  },
  "1995": {
    M: 435
  },
  "1996": {
    M: 392
  },
  "1997": {
    M: 383
  },
  "1998": {
    M: 359
  },
  "1999": {
    M: 419
  },
  "2000": {
    M: 342
  },
  "2001": {
    M: 380
  },
  "2002": {
    M: 380
  },
  "2003": {
    M: 412
  },
  "2004": {
    M: 375
  },
  "2005": {
    M: 316
  },
  "2006": {
    M: 285
  },
  "2007": {
    M: 310
  },
  "2008": {
    M: 293
  },
  "2009": {
    M: 289
  },
  "2010": {
    M: 285
  },
  "2011": {
    M: 252
  },
  "2012": {
    M: 209
  },
  "2013": {
    M: 206
  },
  "2014": {
    M: 213
  },
  "2015": {
    M: 245
  },
  "2016": {
    M: 170
  },
  "2017": {
    M: 164
  },
  "2018": {
    M: 144
  },
  "2019": {
    M: 127
  },
  "2020": {
    M: 130
  },
  "2021": {
    M: 95
  }
};
const Benji = {
  "2011": {
    M: 16
  },
  "2013": {
    M: 14
  },
  "2014": {
    M: 24
  },
  "2015": {
    M: 18
  },
  "2016": {
    M: 11
  },
  "2017": {
    M: 21
  },
  "2018": {
    M: 18
  },
  "2019": {
    M: 20
  },
  "2020": {
    M: 24
  },
  "2021": {
    M: 24
  }
};
const Bennett = {
  "2021": {
    M: 12
  }
};
const Benson = {
  "2010": {
    M: 13
  },
  "2012": {
    M: 15
  },
  "2014": {
    M: 10
  },
  "2015": {
    M: 17
  }
};
const Bentley = {
  "2010": {
    M: 13
  },
  "2011": {
    M: 34
  },
  "2012": {
    M: 37
  },
  "2013": {
    M: 44
  },
  "2014": {
    M: 37
  },
  "2015": {
    M: 34
  },
  "2016": {
    M: 27
  },
  "2017": {
    M: 30
  },
  "2018": {
    M: 30
  },
  "2019": {
    M: 14
  },
  "2021": {
    M: 20
  }
};
const Bernadette = {
  "1937": {
    F: 10
  },
  "1940": {
    F: 12
  },
  "1945": {
    F: 15
  },
  "1946": {
    F: 19
  },
  "1947": {
    F: 20
  },
  "1948": {
    F: 26
  },
  "1949": {
    F: 18
  },
  "1950": {
    F: 18
  },
  "1951": {
    F: 22
  },
  "1952": {
    F: 20
  },
  "1953": {
    F: 24
  },
  "1954": {
    F: 28
  },
  "1955": {
    F: 24
  },
  "1956": {
    F: 31
  },
  "1957": {
    F: 41
  },
  "1958": {
    F: 61
  },
  "1959": {
    F: 52
  },
  "1960": {
    F: 42
  },
  "1961": {
    F: 56
  },
  "1962": {
    F: 31
  },
  "1963": {
    F: 62
  },
  "1964": {
    F: 56
  },
  "1965": {
    F: 43
  },
  "1966": {
    F: 49
  },
  "1967": {
    F: 44
  },
  "1968": {
    F: 30
  },
  "1969": {
    F: 47
  },
  "1970": {
    F: 40
  },
  "1971": {
    F: 30
  },
  "1972": {
    F: 22
  },
  "1973": {
    F: 37
  },
  "1974": {
    F: 14
  },
  "1975": {
    F: 20
  },
  "1976": {
    F: 21
  },
  "1977": {
    F: 23
  },
  "1978": {
    F: 18
  },
  "1979": {
    F: 18
  },
  "1980": {
    F: 15
  },
  "1981": {
    F: 19
  },
  "1982": {
    F: 13
  },
  "1983": {
    F: 16
  },
  "1984": {
    F: 17
  },
  "1985": {
    F: 14
  },
  "1986": {
    F: 11
  },
  "1987": {
    F: 16
  },
  "1988": {
    F: 11
  },
  "1989": {
    F: 14
  },
  "1990": {
    F: 14
  },
  "1991": {
    F: 16
  },
  "1992": {
    F: 10
  },
  "1993": {
    F: 11
  },
  "1995": {
    F: 11
  },
  "2000": {
    F: 12
  }
};
const Bernadine = {
  "1958": {
    F: 24
  },
  "1960": {
    F: 14
  },
  "1962": {
    F: 12
  },
  "1963": {
    F: 12
  },
  "1971": {
    F: 10
  }
};
const Bernard = {
  "1900": {
    M: 30
  },
  "1901": {
    M: 25
  },
  "1902": {
    M: 17
  },
  "1903": {
    M: 35
  },
  "1904": {
    M: 36
  },
  "1905": {
    M: 23
  },
  "1906": {
    M: 38
  },
  "1907": {
    M: 32
  },
  "1908": {
    M: 48
  },
  "1909": {
    M: 43
  },
  "1910": {
    M: 55
  },
  "1911": {
    M: 62
  },
  "1912": {
    M: 37
  },
  "1913": {
    M: 61
  },
  "1914": {
    M: 94
  },
  "1915": {
    M: 63
  },
  "1916": {
    M: 67
  },
  "1917": {
    M: 70
  },
  "1918": {
    M: 64
  },
  "1919": {
    M: 46
  },
  "1920": {
    M: 60
  },
  "1921": {
    M: 72
  },
  "1922": {
    M: 80
  },
  "1923": {
    M: 74
  },
  "1924": {
    M: 76
  },
  "1925": {
    M: 80
  },
  "1926": {
    M: 81
  },
  "1927": {
    M: 76
  },
  "1928": {
    M: 71
  },
  "1929": {
    M: 56
  },
  "1930": {
    M: 77
  },
  "1931": {
    M: 71
  },
  "1932": {
    M: 61
  },
  "1933": {
    M: 62
  },
  "1934": {
    M: 49
  },
  "1935": {
    M: 57
  },
  "1936": {
    M: 35
  },
  "1937": {
    M: 59
  },
  "1938": {
    M: 40
  },
  "1939": {
    M: 53
  },
  "1940": {
    M: 59
  },
  "1941": {
    M: 62
  },
  "1942": {
    M: 67
  },
  "1943": {
    M: 77
  },
  "1944": {
    M: 83
  },
  "1945": {
    M: 83
  },
  "1946": {
    M: 73
  },
  "1947": {
    M: 60
  },
  "1948": {
    M: 64
  },
  "1949": {
    M: 65
  },
  "1950": {
    M: 61
  },
  "1951": {
    M: 55
  },
  "1952": {
    M: 61
  },
  "1953": {
    M: 61
  },
  "1954": {
    M: 68
  },
  "1955": {
    M: 59
  },
  "1956": {
    M: 55
  },
  "1957": {
    M: 81
  },
  "1958": {
    M: 73
  },
  "1959": {
    M: 57
  },
  "1960": {
    M: 63
  },
  "1961": {
    M: 75
  },
  "1962": {
    M: 51
  },
  "1963": {
    M: 61
  },
  "1964": {
    M: 49
  },
  "1965": {
    M: 64
  },
  "1966": {
    M: 55
  },
  "1967": {
    M: 49
  },
  "1968": {
    M: 34
  },
  "1969": {
    M: 22
  },
  "1970": {
    M: 22
  },
  "1971": {
    M: 26
  },
  "1972": {
    M: 23
  },
  "1973": {
    M: 28
  },
  "1974": {
    M: 17
  },
  "1975": {
    M: 18
  },
  "1976": {
    M: 13
  },
  "1977": {
    M: 14
  },
  "1978": {
    M: 17
  },
  "1980": {
    M: 22
  },
  "1981": {
    M: 16
  },
  "1982": {
    M: 15
  },
  "1983": {
    M: 11
  },
  "1984": {
    M: 18
  },
  "1985": {
    M: 18
  },
  "1986": {
    M: 11
  },
  "1988": {
    M: 18
  },
  "1989": {
    M: 15
  },
  "1990": {
    M: 12
  }
};
const Bernice = {
  "1907": {
    F: 14
  },
  "1909": {
    F: 13
  },
  "1912": {
    F: 14
  },
  "1913": {
    F: 14
  },
  "1915": {
    F: 10
  },
  "1916": {
    F: 13
  },
  "1917": {
    F: 19
  },
  "1918": {
    F: 13
  },
  "1919": {
    F: 19
  },
  "1920": {
    F: 13
  },
  "1921": {
    F: 10
  },
  "1922": {
    F: 16
  },
  "1923": {
    F: 15
  },
  "1924": {
    F: 14
  },
  "1925": {
    F: 10
  },
  "1926": {
    F: 23
  },
  "1927": {
    F: 19
  },
  "1928": {
    F: 24
  },
  "1929": {
    F: 25
  },
  "1930": {
    F: 33
  },
  "1931": {
    F: 36
  },
  "1932": {
    F: 19
  },
  "1933": {
    F: 19
  },
  "1934": {
    F: 19
  },
  "1935": {
    F: 20
  },
  "1936": {
    F: 15
  },
  "1937": {
    F: 14
  },
  "1938": {
    F: 15
  },
  "1939": {
    F: 16
  },
  "1940": {
    F: 19
  },
  "1941": {
    F: 26
  },
  "1942": {
    F: 19
  },
  "1943": {
    F: 19
  },
  "1944": {
    F: 14
  },
  "1945": {
    F: 19
  },
  "1947": {
    F: 14
  },
  "1948": {
    F: 10
  },
  "1950": {
    F: 12
  },
  "1952": {
    F: 14
  },
  "1954": {
    F: 15
  },
  "1955": {
    F: 13
  },
  "1956": {
    F: 15
  },
  "1957": {
    F: 14
  },
  "1960": {
    F: 12
  },
  "1962": {
    F: 10
  },
  "1963": {
    F: 14
  },
  "1965": {
    F: 12
  },
  "1966": {
    F: 13
  },
  "1968": {
    F: 13
  },
  "1969": {
    F: 12
  },
  "1971": {
    F: 10
  }
};
const Bert = {
  "1916": {
    M: 10
  },
  "1918": {
    M: 10
  },
  "1928": {
    M: 10
  }
};
const Bertha = {
  "1900": {
    F: 33
  },
  "1901": {
    F: 27
  },
  "1902": {
    F: 44
  },
  "1903": {
    F: 40
  },
  "1904": {
    F: 35
  },
  "1905": {
    F: 24
  },
  "1906": {
    F: 33
  },
  "1907": {
    F: 27
  },
  "1908": {
    F: 44
  },
  "1909": {
    F: 37
  },
  "1910": {
    F: 35
  },
  "1911": {
    F: 26
  },
  "1912": {
    F: 36
  },
  "1913": {
    F: 43
  },
  "1914": {
    F: 23
  },
  "1915": {
    F: 29
  },
  "1916": {
    F: 27
  },
  "1917": {
    F: 28
  },
  "1918": {
    F: 18
  },
  "1919": {
    F: 17
  },
  "1920": {
    F: 16
  },
  "1921": {
    F: 22
  },
  "1922": {
    F: 19
  },
  "1923": {
    F: 13
  },
  "1924": {
    F: 18
  },
  "1925": {
    F: 11
  },
  "1926": {
    F: 13
  }
};
const Bertie = {
  "1900": {
    M: 21
  },
  "1901": {
    M: 14
  },
  "1902": {
    M: 16
  },
  "1903": {
    M: 14
  },
  "1904": {
    M: 16
  },
  "1907": {
    M: 18
  },
  "1909": {
    M: 12
  },
  "1915": {
    M: 10
  }
};
const Bertram = {
  "1901": {
    M: 11
  },
  "1903": {
    M: 12
  },
  "1904": {
    M: 15
  },
  "1906": {
    M: 14
  },
  "1907": {
    M: 15
  },
  "1908": {
    M: 10
  },
  "1909": {
    M: 11
  },
  "1910": {
    M: 12
  },
  "1911": {
    M: 12
  },
  "1912": {
    M: 16
  },
  "1913": {
    M: 13
  },
  "1914": {
    M: 16
  },
  "1916": {
    M: 19
  },
  "1917": {
    M: 11
  },
  "1919": {
    M: 13
  },
  "1922": {
    M: 14
  }
};
const Beryl = {
  "1900": {
    F: 22
  },
  "1901": {
    F: 14
  },
  "1902": {
    F: 16
  },
  "1903": {
    F: 23
  },
  "1904": {
    F: 29
  },
  "1905": {
    F: 21
  },
  "1906": {
    F: 32
  },
  "1907": {
    F: 29
  },
  "1908": {
    F: 27
  },
  "1909": {
    F: 40
  },
  "1910": {
    F: 42
  },
  "1911": {
    F: 36
  },
  "1912": {
    F: 45
  },
  "1913": {
    F: 43
  },
  "1914": {
    F: 42
  },
  "1915": {
    F: 54
  },
  "1916": {
    F: 48
  },
  "1917": {
    F: 51
  },
  "1918": {
    F: 55
  },
  "1919": {
    F: 43
  },
  "1920": {
    F: 72
  },
  "1921": {
    F: 66
  },
  "1922": {
    F: 89
  },
  "1923": {
    F: 80
  },
  "1924": {
    F: 85
  },
  "1925": {
    F: 87
  },
  "1926": {
    F: 78
  },
  "1927": {
    F: 101
  },
  "1928": {
    F: 85
  },
  "1929": {
    F: 79
  },
  "1930": {
    F: 57
  },
  "1931": {
    F: 53
  },
  "1932": {
    F: 52
  },
  "1933": {
    F: 59
  },
  "1934": {
    F: 50
  },
  "1935": {
    F: 61
  },
  "1936": {
    F: 44
  },
  "1937": {
    F: 44
  },
  "1938": {
    F: 40
  },
  "1939": {
    F: 46
  },
  "1940": {
    F: 34
  },
  "1941": {
    F: 49
  },
  "1942": {
    F: 46
  },
  "1943": {
    F: 24
  },
  "1944": {
    F: 38
  },
  "1945": {
    F: 28
  },
  "1946": {
    F: 34
  },
  "1947": {
    F: 44
  },
  "1948": {
    F: 29
  },
  "1949": {
    F: 27
  },
  "1950": {
    F: 26
  },
  "1951": {
    F: 19
  },
  "1952": {
    F: 29
  },
  "1953": {
    F: 30
  },
  "1954": {
    F: 27
  },
  "1955": {
    F: 27
  },
  "1956": {
    F: 16
  },
  "1957": {
    F: 15
  },
  "1958": {
    F: 16
  },
  "1959": {
    F: 22
  },
  "1960": {
    F: 16
  },
  "1961": {
    F: 12
  },
  "1962": {
    F: 13
  },
  "1963": {
    F: 11
  }
};
const Bessie = {
  "1900": {
    F: 20
  },
  "1901": {
    F: 24
  },
  "1902": {
    F: 24
  },
  "1903": {
    F: 25
  },
  "1904": {
    F: 27
  },
  "1905": {
    F: 28
  },
  "1906": {
    F: 23
  },
  "1907": {
    F: 21
  },
  "1908": {
    F: 26
  },
  "1909": {
    F: 18
  },
  "1910": {
    F: 24
  },
  "1911": {
    F: 23
  },
  "1912": {
    F: 32
  },
  "1913": {
    F: 21
  },
  "1914": {
    F: 26
  },
  "1915": {
    F: 24
  },
  "1916": {
    F: 36
  },
  "1917": {
    F: 28
  },
  "1918": {
    F: 11
  },
  "1919": {
    F: 26
  },
  "1920": {
    F: 23
  },
  "1921": {
    F: 24
  },
  "1922": {
    F: 19
  },
  "1923": {
    F: 15
  },
  "1924": {
    F: 10
  },
  "1925": {
    F: 13
  },
  "1926": {
    F: 16
  },
  "1927": {
    F: 12
  },
  "1928": {
    F: 13
  },
  "1933": {
    F: 10
  }
};
const Beth = {
  "1925": {
    F: 12
  },
  "1926": {
    F: 10
  },
  "1927": {
    F: 14
  },
  "1928": {
    F: 11
  },
  "1941": {
    F: 10
  },
  "1942": {
    F: 18
  },
  "1944": {
    F: 11
  },
  "1945": {
    F: 11
  },
  "1946": {
    F: 12
  },
  "1947": {
    F: 12
  },
  "1950": {
    F: 10
  },
  "1953": {
    F: 17
  },
  "1954": {
    F: 17
  },
  "1955": {
    F: 14
  },
  "1956": {
    F: 12
  },
  "1958": {
    F: 12
  },
  "1959": {
    F: 17
  },
  "1960": {
    F: 14
  },
  "1961": {
    F: 18
  },
  "1962": {
    F: 14
  },
  "1963": {
    F: 12
  },
  "1964": {
    F: 11
  },
  "1966": {
    F: 10
  },
  "1974": {
    F: 14
  },
  "1975": {
    F: 12
  },
  "1978": {
    F: 10
  },
  "1979": {
    F: 13
  },
  "1980": {
    F: 16
  },
  "1981": {
    F: 14
  },
  "1982": {
    F: 15
  },
  "1983": {
    F: 11
  },
  "1984": {
    F: 11
  },
  "1985": {
    F: 10
  },
  "1986": {
    F: 12
  },
  "1987": {
    F: 13
  },
  "1988": {
    F: 13
  },
  "1989": {
    F: 19
  },
  "1990": {
    F: 12
  },
  "1991": {
    F: 10
  },
  "1992": {
    F: 14
  },
  "1993": {
    F: 12
  },
  "1994": {
    F: 24
  },
  "1995": {
    F: 14
  },
  "1996": {
    F: 16
  },
  "1998": {
    F: 15
  },
  "1999": {
    F: 11
  },
  "2000": {
    F: 11
  },
  "2001": {
    F: 11
  },
  "2002": {
    F: 13
  },
  "2003": {
    F: 15
  },
  "2005": {
    F: 12
  },
  "2006": {
    F: 10
  }
};
const Bethany = {
  "1985": {
    F: 12
  },
  "1987": {
    F: 12
  },
  "1990": {
    F: 18
  },
  "1991": {
    F: 15
  },
  "1992": {
    F: 18
  },
  "1994": {
    F: 20
  },
  "1995": {
    F: 23
  },
  "1996": {
    F: 20
  },
  "1997": {
    F: 23
  },
  "1998": {
    F: 30
  },
  "1999": {
    F: 38
  },
  "2000": {
    F: 30
  },
  "2001": {
    F: 36
  },
  "2002": {
    F: 26
  },
  "2003": {
    F: 34
  },
  "2004": {
    F: 20
  },
  "2005": {
    F: 19
  },
  "2006": {
    F: 41
  },
  "2007": {
    F: 30
  },
  "2008": {
    F: 19
  },
  "2009": {
    F: 13
  },
  "2010": {
    F: 22
  },
  "2011": {
    F: 19
  },
  "2012": {
    F: 28
  },
  "2013": {
    F: 19
  },
  "2014": {
    F: 17
  },
  "2015": {
    F: 14
  },
  "2016": {
    F: 22
  },
  "2017": {
    F: 19
  },
  "2018": {
    F: 18
  },
  "2021": {
    F: 14
  }
};
const Betsy = {
  "1920": {
    F: 10
  },
  "1931": {
    F: 10
  }
};
const Betty = {
  "1908": {
    F: 14
  },
  "1909": {
    F: 23
  },
  "1910": {
    F: 26
  },
  "1911": {
    F: 30
  },
  "1912": {
    F: 44
  },
  "1913": {
    F: 72
  },
  "1914": {
    F: 81
  },
  "1915": {
    F: 107
  },
  "1916": {
    F: 127
  },
  "1917": {
    F: 131
  },
  "1918": {
    F: 136
  },
  "1919": {
    F: 181
  },
  "1920": {
    F: 245
  },
  "1921": {
    F: 225
  },
  "1922": {
    F: 277
  },
  "1923": {
    F: 276
  },
  "1924": {
    F: 292
  },
  "1925": {
    F: 343
  },
  "1926": {
    F: 268
  },
  "1927": {
    F: 336
  },
  "1928": {
    F: 364
  },
  "1929": {
    F: 316
  },
  "1930": {
    F: 292
  },
  "1931": {
    F: 263
  },
  "1932": {
    F: 214
  },
  "1933": {
    F: 192
  },
  "1934": {
    F: 158
  },
  "1935": {
    F: 126
  },
  "1936": {
    F: 143
  },
  "1937": {
    F: 114
  },
  "1938": {
    F: 90
  },
  "1939": {
    F: 96
  },
  "1940": {
    F: 94
  },
  "1941": {
    F: 79
  },
  "1942": {
    F: 80
  },
  "1943": {
    F: 87
  },
  "1944": {
    F: 73
  },
  "1945": {
    F: 65
  },
  "1946": {
    F: 77
  },
  "1947": {
    F: 70
  },
  "1948": {
    F: 62
  },
  "1949": {
    F: 36
  },
  "1950": {
    F: 39
  },
  "1951": {
    F: 33
  },
  "1952": {
    F: 24
  },
  "1953": {
    F: 31
  },
  "1954": {
    F: 23
  },
  "1955": {
    F: 25
  },
  "1956": {
    F: 25
  },
  "1957": {
    F: 31
  },
  "1958": {
    F: 19
  },
  "1959": {
    F: 21
  },
  "1960": {
    F: 19
  },
  "1961": {
    F: 21
  },
  "1963": {
    F: 13
  },
  "1964": {
    F: 12
  },
  "1965": {
    F: 13
  },
  "1966": {
    F: 17
  },
  "1967": {
    F: 16
  },
  "1968": {
    F: 15
  },
  "1970": {
    F: 12
  },
  "1971": {
    F: 11
  },
  "1972": {
    F: 10
  }
};
const Beulah = {
  "1925": {
    F: 10
  }
};
const Bevan = {
  "1932": {
    M: 14
  },
  "1934": {
    M: 19
  },
  "1935": {
    M: 12
  },
  "1937": {
    M: 10
  },
  "1938": {
    M: 17
  },
  "1939": {
    M: 17
  },
  "1940": {
    M: 13
  },
  "1941": {
    M: 18
  },
  "1942": {
    M: 12
  },
  "1943": {
    M: 13
  },
  "1944": {
    M: 17
  },
  "1945": {
    M: 10
  },
  "1946": {
    M: 11
  },
  "1948": {
    M: 13
  },
  "1949": {
    M: 11
  },
  "1950": {
    M: 20
  },
  "1951": {
    M: 12
  },
  "1952": {
    M: 14
  },
  "1953": {
    M: 16
  },
  "1954": {
    M: 13
  },
  "1955": {
    M: 16
  },
  "1956": {
    M: 19
  },
  "1957": {
    M: 21
  },
  "1958": {
    M: 20
  },
  "1959": {
    M: 24
  },
  "1960": {
    M: 22
  },
  "1961": {
    M: 33
  },
  "1962": {
    M: 21
  },
  "1963": {
    M: 26
  },
  "1964": {
    M: 18
  },
  "1965": {
    M: 23
  },
  "1966": {
    M: 35
  },
  "1967": {
    M: 37
  },
  "1968": {
    M: 41
  },
  "1969": {
    M: 40
  },
  "1970": {
    M: 56
  },
  "1971": {
    M: 67
  },
  "1972": {
    M: 70
  },
  "1973": {
    M: 90
  },
  "1974": {
    M: 74
  },
  "1975": {
    M: 81
  },
  "1976": {
    M: 56
  },
  "1977": {
    M: 84
  },
  "1978": {
    M: 93
  },
  "1979": {
    M: 94
  },
  "1980": {
    M: 58
  },
  "1981": {
    M: 60
  },
  "1982": {
    M: 46
  },
  "1983": {
    M: 47
  },
  "1984": {
    M: 30
  },
  "1985": {
    M: 38
  },
  "1986": {
    M: 32
  },
  "1987": {
    M: 25
  },
  "1988": {
    M: 23
  },
  "1989": {
    M: 19
  },
  "1990": {
    M: 23
  },
  "1991": {
    M: 22
  },
  "1992": {
    M: 18
  },
  "1993": {
    M: 20
  },
  "1994": {
    M: 13
  },
  "1995": {
    M: 19
  },
  "1996": {
    M: 11
  },
  "2000": {
    M: 10
  }
};
const Beverley = {
  "1920": {
    F: 13
  },
  "1921": {
    F: 11
  },
  "1922": {
    F: 11
  },
  "1923": {
    F: 20
  },
  "1924": {
    F: 25
  },
  "1925": {
    F: 28
  },
  "1926": {
    F: 31
  },
  "1927": {
    F: 64
  },
  "1928": {
    F: 72
  },
  "1929": {
    F: 96
  },
  "1930": {
    F: 115
  },
  "1931": {
    F: 129
  },
  "1932": {
    F: 146
  },
  "1933": {
    F: 147
  },
  "1934": {
    F: 163
  },
  "1935": {
    F: 208
  },
  "1936": {
    F: 259
  },
  "1937": {
    F: 289
  },
  "1938": {
    F: 302
  },
  "1939": {
    F: 309
  },
  "1940": {
    F: 275
  },
  "1941": {
    F: 335
  },
  "1942": {
    F: 279
  },
  "1943": {
    F: 260
  },
  "1944": {
    F: 243
  },
  "1945": {
    F: 241
  },
  "1946": {
    F: 249
  },
  "1947": {
    F: 278
  },
  "1948": {
    F: 217
  },
  "1949": {
    F: 216
  },
  "1950": {
    F: 208
  },
  "1951": {
    F: 195
  },
  "1952": {
    F: 173
  },
  "1953": {
    F: 168
  },
  "1954": {
    F: 154
  },
  "1955": {
    F: 156
  },
  "1956": {
    F: 124
  },
  "1957": {
    F: 113
  },
  "1958": {
    F: 110
  },
  "1959": {
    F: 107
  },
  "1960": {
    F: 90
  },
  "1961": {
    F: 76
  },
  "1962": {
    F: 69
  },
  "1963": {
    F: 69
  },
  "1964": {
    F: 45
  },
  "1965": {
    F: 35
  },
  "1966": {
    F: 35
  },
  "1967": {
    F: 23
  },
  "1968": {
    F: 18
  },
  "1969": {
    F: 23
  },
  "1970": {
    F: 12
  },
  "1971": {
    F: 10
  },
  "1972": {
    F: 10
  },
  "1973": {
    F: 19
  },
  "1975": {
    F: 13
  }
};
const Beverly = {
  "1926": {
    F: 15
  },
  "1927": {
    F: 15
  },
  "1928": {
    F: 16
  },
  "1929": {
    F: 19
  },
  "1930": {
    F: 26
  },
  "1931": {
    F: 27
  },
  "1932": {
    F: 36
  },
  "1933": {
    F: 41
  },
  "1934": {
    F: 49
  },
  "1935": {
    F: 56
  },
  "1936": {
    F: 76
  },
  "1937": {
    F: 73
  },
  "1938": {
    F: 80
  },
  "1939": {
    F: 98
  },
  "1940": {
    F: 94
  },
  "1941": {
    F: 87
  },
  "1942": {
    F: 63
  },
  "1943": {
    F: 72
  },
  "1944": {
    F: 68
  },
  "1945": {
    F: 68
  },
  "1946": {
    F: 68
  },
  "1947": {
    F: 60
  },
  "1948": {
    F: 53
  },
  "1949": {
    F: 52
  },
  "1950": {
    F: 43
  },
  "1951": {
    F: 51
  },
  "1952": {
    F: 42
  },
  "1953": {
    F: 53
  },
  "1954": {
    F: 43
  },
  "1955": {
    F: 39
  },
  "1956": {
    F: 32
  },
  "1957": {
    F: 21
  },
  "1958": {
    F: 37
  },
  "1959": {
    F: 36
  },
  "1960": {
    F: 15
  },
  "1961": {
    F: 29
  },
  "1962": {
    F: 16
  },
  "1963": {
    F: 24
  },
  "1964": {
    F: 24
  },
  "1965": {
    F: 19
  },
  "1966": {
    F: 18
  },
  "1968": {
    F: 10
  },
  "1970": {
    F: 10
  },
  "1971": {
    F: 11
  },
  "1972": {
    F: 13
  }
};
const Bevin = {
  "1949": {
    M: 11
  }
};
const Bianca = {
  "1973": {
    F: 17
  },
  "1974": {
    F: 19
  },
  "1975": {
    F: 37
  },
  "1976": {
    F: 39
  },
  "1977": {
    F: 36
  },
  "1978": {
    F: 32
  },
  "1979": {
    F: 22
  },
  "1980": {
    F: 24
  },
  "1981": {
    F: 20
  },
  "1982": {
    F: 34
  },
  "1983": {
    F: 17
  },
  "1984": {
    F: 29
  },
  "1985": {
    F: 34
  },
  "1986": {
    F: 16
  },
  "1987": {
    F: 20
  },
  "1988": {
    F: 24
  },
  "1989": {
    F: 39
  },
  "1990": {
    F: 41
  },
  "1991": {
    F: 29
  },
  "1992": {
    F: 41
  },
  "1993": {
    F: 39
  },
  "1994": {
    F: 46
  },
  "1995": {
    F: 31
  },
  "1996": {
    F: 42
  },
  "1997": {
    F: 44
  },
  "1998": {
    F: 33
  },
  "1999": {
    F: 35
  },
  "2000": {
    F: 36
  },
  "2001": {
    F: 41
  },
  "2002": {
    F: 39
  },
  "2003": {
    F: 33
  },
  "2004": {
    F: 40
  },
  "2005": {
    F: 27
  },
  "2006": {
    F: 39
  },
  "2007": {
    F: 40
  },
  "2008": {
    F: 30
  },
  "2009": {
    F: 33
  },
  "2010": {
    F: 31
  },
  "2011": {
    F: 27
  },
  "2012": {
    F: 23
  },
  "2013": {
    F: 28
  },
  "2014": {
    F: 19
  },
  "2015": {
    F: 31
  },
  "2016": {
    F: 26
  },
  "2017": {
    F: 18
  },
  "2018": {
    F: 14
  },
  "2019": {
    F: 11
  },
  "2020": {
    F: 16
  },
  "2021": {
    F: 11
  }
};
const Billie = {
  "1990": {
    F: 13
  },
  "1993": {
    F: 11
  },
  "1996": {
    F: 10
  },
  "1997": {
    F: 17
  },
  "1998": {
    F: 10
  },
  "1999": {
    F: 17
  },
  "2000": {
    F: 23
  },
  "2001": {
    F: 16
  },
  "2002": {
    F: 23
  },
  "2003": {
    F: 19
  },
  "2004": {
    F: 25
  },
  "2005": {
    F: 27
  },
  "2006": {
    F: 21
  },
  "2007": {
    F: 22
  },
  "2008": {
    F: 18
  },
  "2009": {
    F: 22
  },
  "2010": {
    F: 28
  },
  "2011": {
    F: 25
  },
  "2012": {
    F: 15
  },
  "2013": {
    F: 23
  },
  "2014": {
    F: 21
  },
  "2015": {
    F: 33
  },
  "2016": {
    F: 45
  },
  "2017": {
    F: 41
  },
  "2018": {
    F: 47
  },
  "2019": {
    F: 49
  },
  "2020": {
    F: 60
  },
  "2021": {
    F: 79
  }
};
const Billy = {
  "1979": {
    M: 12
  },
  "1980": {
    M: 10
  },
  "1981": {
    M: 14
  },
  "1982": {
    M: 19
  },
  "1984": {
    M: 17
  },
  "1985": {
    M: 13
  },
  "1987": {
    M: 17
  },
  "1988": {
    M: 12
  },
  "1989": {
    M: 13
  },
  "1990": {
    M: 10
  },
  "1991": {
    M: 18
  },
  "1992": {
    M: 10
  },
  "1993": {
    M: 24
  },
  "1994": {
    M: 26
  },
  "1995": {
    M: 29
  },
  "1996": {
    M: 30
  },
  "1997": {
    M: 20
  },
  "1998": {
    M: 15
  },
  "1999": {
    M: 34
  },
  "2000": {
    M: 21
  },
  "2001": {
    M: 21
  },
  "2002": {
    M: 20
  },
  "2003": {
    M: 16
  },
  "2004": {
    M: 25
  },
  "2005": {
    M: 23
  },
  "2006": {
    M: 31
  },
  "2007": {
    M: 30
  },
  "2008": {
    M: 16
  },
  "2009": {
    M: 26
  },
  "2010": {
    M: 24
  },
  "2011": {
    M: 22
  },
  "2012": {
    M: 26
  },
  "2013": {
    M: 24
  },
  "2014": {
    M: 21
  },
  "2015": {
    M: 21
  },
  "2016": {
    M: 22
  },
  "2017": {
    M: 21
  },
  "2018": {
    M: 25
  },
  "2019": {
    M: 36
  },
  "2020": {
    M: 40
  },
  "2021": {
    M: 47
  }
};
const Bjorn = {
  "1984": {
    M: 11
  },
  "2017": {
    M: 10
  },
  "2018": {
    M: 15
  },
  "2019": {
    M: 12
  },
  "2020": {
    M: 19
  },
  "2021": {
    M: 13
  }
};
const Blade = {
  "2000": {
    M: 11
  },
  "2003": {
    M: 11
  }
};
const Blair = {
  "1951": {
    M: 13
  },
  "1952": {
    M: 12
  },
  "1955": {
    M: 16
  },
  "1956": {
    M: 15
  },
  "1957": {
    M: 23
  },
  "1958": {
    M: 15
  },
  "1959": {
    M: 17
  },
  "1960": {
    M: 12
  },
  "1961": {
    M: 29
  },
  "1962": {
    M: 17
  },
  "1963": {
    M: 33
  },
  "1964": {
    M: 39
  },
  "1965": {
    M: 44
  },
  "1966": {
    M: 59
  },
  "1967": {
    M: 54
  },
  "1968": {
    M: 75
  },
  "1969": {
    M: 95
  },
  "1970": {
    M: 124
  },
  "1971": {
    M: 161
  },
  "1972": {
    M: 121
  },
  "1973": {
    M: 131
  },
  "1974": {
    M: 136
  },
  "1975": {
    M: 137
  },
  "1976": {
    M: 124
  },
  "1977": {
    M: 87
  },
  "1978": {
    M: 105
  },
  "1979": {
    M: 147
  },
  "1980": {
    M: 101
  },
  "1981": {
    M: 112
  },
  "1982": {
    M: 133
  },
  "1983": {
    M: 124
  },
  "1984": {
    M: 86
  },
  "1985": {
    M: 109
  },
  "1986": {
    M: 91
  },
  "1987": {
    M: 68
  },
  "1988": {
    M: 110
  },
  "1989": {
    M: 87
  },
  "1990": {
    M: 74
  },
  "1991": {
    M: 69
  },
  "1992": {
    M: 73
  },
  "1993": {
    M: 62
  },
  "1994": {
    M: 65
  },
  "1995": {
    M: 47
  },
  "1996": {
    M: 57
  },
  "1997": {
    M: 44
  },
  "1998": {
    M: 30
  },
  "1999": {
    M: 29
  },
  "2000": {
    M: 26
  },
  "2001": {
    M: 31
  },
  "2002": {
    M: 25
  },
  "2003": {
    M: 12
  },
  "2004": {
    M: 16
  },
  "2005": {
    M: 18
  },
  "2006": {
    M: 15
  },
  "2007": {
    M: 17
  },
  "2008": {
    M: 12
  },
  "2013": {
    M: 10
  },
  "2014": {
    M: 13
  },
  "2018": {
    M: 11
  },
  "2020": {
    F: 10
  }
};
const Blake = {
  "1981": {
    M: 20
  },
  "1982": {
    M: 27
  },
  "1983": {
    M: 30
  },
  "1984": {
    M: 41
  },
  "1985": {
    M: 50
  },
  "1986": {
    M: 40
  },
  "1987": {
    M: 38
  },
  "1988": {
    M: 37
  },
  "1989": {
    M: 34
  },
  "1990": {
    M: 49
  },
  "1991": {
    M: 43
  },
  "1992": {
    M: 50
  },
  "1993": {
    M: 65
  },
  "1994": {
    M: 71
  },
  "1995": {
    M: 112
  },
  "1996": {
    M: 84
  },
  "1997": {
    M: 96
  },
  "1998": {
    M: 79
  },
  "1999": {
    M: 86
  },
  "2000": {
    M: 129
  },
  "2001": {
    M: 91
  },
  "2002": {
    M: 181
  },
  "2003": {
    M: 148
  },
  "2004": {
    M: 137
  },
  "2005": {
    M: 153
  },
  "2006": {
    M: 180
  },
  "2007": {
    M: 206
  },
  "2008": {
    M: 182
  },
  "2009": {
    M: 180
  },
  "2010": {
    M: 203
  },
  "2011": {
    M: 181
  },
  "2012": {
    M: 209
  },
  "2013": {
    F: 11,
    M: 183
  },
  "2014": {
    F: 12,
    M: 145
  },
  "2015": {
    F: 15,
    M: 156
  },
  "2016": {
    F: 20,
    M: 167
  },
  "2017": {
    F: 26,
    M: 116
  },
  "2018": {
    M: 111,
    F: 32
  },
  "2019": {
    F: 27,
    M: 87
  },
  "2020": {
    M: 77,
    F: 26
  },
  "2021": {
    M: 85,
    F: 28
  }
};
const Blanche = {
  "1900": {
    F: 19
  },
  "1901": {
    F: 12
  },
  "1903": {
    F: 14
  },
  "1904": {
    F: 14
  },
  "1907": {
    F: 14
  },
  "1909": {
    F: 14
  },
  "1912": {
    F: 10
  },
  "1913": {
    F: 10
  },
  "1914": {
    F: 11
  },
  "1916": {
    F: 11
  },
  "1917": {
    F: 10
  },
  "1918": {
    F: 12
  },
  "1924": {
    F: 10
  }
};
const Blaze = {
  "2007": {
    M: 12
  },
  "2008": {
    M: 20
  },
  "2009": {
    M: 12
  },
  "2010": {
    M: 11
  }
};
const Blessing = {
  "2009": {
    F: 10
  },
  "2017": {
    F: 11
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 12
  },
  "2021": {
    F: 10
  }
};
const Bo = {
  "2016": {
    M: 10
  }
};
const Boaz = {
  "2015": {
    M: 10
  }
};
const Bobby = {
  "1981": {
    M: 15
  },
  "1984": {
    M: 13
  },
  "1985": {
    M: 14
  },
  "1987": {
    M: 11
  },
  "1991": {
    M: 11
  }
};
const Bodhi = {
  "2014": {
    M: 11
  },
  "2015": {
    M: 24
  },
  "2016": {
    M: 45
  },
  "2017": {
    M: 70
  },
  "2018": {
    M: 65
  },
  "2019": {
    M: 59
  },
  "2020": {
    M: 71
  },
  "2021": {
    M: 73
  }
};
const Bonnie = {
  "1977": {
    F: 13
  },
  "1978": {
    F: 14
  },
  "1979": {
    F: 13
  },
  "1980": {
    F: 23
  },
  "1981": {
    F: 16
  },
  "1982": {
    F: 24
  },
  "1983": {
    F: 19
  },
  "1984": {
    F: 27
  },
  "1985": {
    F: 30
  },
  "1986": {
    F: 24
  },
  "1987": {
    F: 37
  },
  "1988": {
    F: 35
  },
  "1989": {
    F: 25
  },
  "1990": {
    F: 34
  },
  "1991": {
    F: 27
  },
  "1992": {
    F: 18
  },
  "1993": {
    F: 31
  },
  "1994": {
    F: 25
  },
  "1995": {
    F: 29
  },
  "1996": {
    F: 25
  },
  "1997": {
    F: 19
  },
  "1998": {
    F: 18
  },
  "1999": {
    F: 17
  },
  "2000": {
    F: 16
  },
  "2001": {
    F: 12
  },
  "2002": {
    F: 12
  },
  "2003": {
    F: 10
  },
  "2004": {
    F: 12
  },
  "2005": {
    F: 21
  },
  "2006": {
    F: 16
  },
  "2007": {
    F: 26
  },
  "2008": {
    F: 21
  },
  "2009": {
    F: 31
  },
  "2010": {
    F: 18
  },
  "2011": {
    F: 21
  },
  "2012": {
    F: 24
  },
  "2013": {
    F: 31
  },
  "2014": {
    F: 30
  },
  "2015": {
    F: 27
  },
  "2016": {
    F: 23
  },
  "2017": {
    F: 26
  },
  "2018": {
    F: 33
  },
  "2019": {
    F: 26
  },
  "2020": {
    F: 33
  },
  "2021": {
    F: 43
  }
};
const Boston = {
  "2001": {
    M: 14
  },
  "2002": {
    M: 22
  },
  "2003": {
    M: 26
  },
  "2004": {
    M: 42
  },
  "2005": {
    M: 35
  },
  "2006": {
    M: 30
  },
  "2007": {
    M: 51
  },
  "2008": {
    M: 45
  },
  "2009": {
    M: 33
  },
  "2010": {
    M: 40
  },
  "2011": {
    M: 38
  },
  "2012": {
    M: 41
  },
  "2013": {
    M: 46
  },
  "2014": {
    M: 37
  },
  "2015": {
    M: 35
  },
  "2016": {
    M: 36
  },
  "2017": {
    M: 31
  },
  "2018": {
    M: 26
  },
  "2019": {
    M: 39
  },
  "2020": {
    M: 25
  },
  "2021": {
    M: 28
  }
};
const Bowen = {
  "2013": {
    M: 10
  },
  "2015": {
    M: 10
  },
  "2016": {
    M: 15
  },
  "2021": {
    M: 11
  }
};
const Bowie = {
  "2017": {
    M: 15
  },
  "2018": {
    M: 14,
    F: 15
  },
  "2019": {
    M: 14
  },
  "2020": {
    M: 18,
    F: 13
  },
  "2021": {
    M: 19
  }
};
const Boyd = {
  "1963": {
    M: 12
  },
  "1966": {
    M: 10
  },
  "1969": {
    M: 12
  },
  "1973": {
    M: 11
  }
};
const Brad = {
  "1969": {
    M: 10
  },
  "1970": {
    M: 11
  },
  "1971": {
    M: 14
  },
  "1972": {
    M: 39
  },
  "1973": {
    M: 25
  },
  "1974": {
    M: 35
  },
  "1975": {
    M: 22
  },
  "1976": {
    M: 75
  },
  "1977": {
    M: 77
  },
  "1978": {
    M: 64
  },
  "1979": {
    M: 52
  },
  "1980": {
    M: 42
  },
  "1981": {
    M: 66
  },
  "1982": {
    M: 47
  },
  "1983": {
    M: 64
  },
  "1984": {
    M: 50
  },
  "1985": {
    M: 54
  },
  "1986": {
    M: 51
  },
  "1987": {
    M: 39
  },
  "1988": {
    M: 45
  },
  "1989": {
    M: 34
  },
  "1990": {
    M: 38
  },
  "1991": {
    M: 31
  },
  "1992": {
    M: 21
  },
  "1993": {
    M: 19
  },
  "1994": {
    M: 17
  },
  "1995": {
    M: 17
  },
  "1996": {
    M: 24
  },
  "1997": {
    M: 17
  },
  "1998": {
    M: 21
  },
  "1999": {
    M: 27
  },
  "2000": {
    M: 28
  },
  "2001": {
    M: 23
  },
  "2002": {
    M: 11
  },
  "2003": {
    M: 16
  },
  "2004": {
    M: 12
  }
};
const Braden = {
  "1977": {
    M: 13
  },
  "1978": {
    M: 11
  },
  "1979": {
    M: 12
  },
  "1981": {
    M: 10
  },
  "1985": {
    M: 10
  },
  "1986": {
    M: 17
  },
  "1987": {
    M: 13
  },
  "1988": {
    M: 13
  },
  "1989": {
    M: 11
  },
  "1990": {
    M: 11
  },
  "1991": {
    M: 19
  },
  "1992": {
    M: 25
  },
  "1993": {
    M: 29
  },
  "1994": {
    M: 13
  },
  "1995": {
    M: 23
  },
  "1996": {
    M: 19
  },
  "1997": {
    M: 25
  },
  "1998": {
    M: 22
  },
  "1999": {
    M: 22
  },
  "2000": {
    M: 20
  },
  "2001": {
    M: 18
  },
  "2002": {
    M: 12
  },
  "2003": {
    M: 12
  },
  "2004": {
    M: 10
  },
  "2005": {
    M: 18
  }
};
const Bradley = {
  "1950": {
    M: 11
  },
  "1954": {
    M: 11
  },
  "1957": {
    M: 10
  },
  "1958": {
    M: 12
  },
  "1959": {
    M: 11
  },
  "1960": {
    M: 12
  },
  "1962": {
    M: 10
  },
  "1963": {
    M: 17
  },
  "1964": {
    M: 15
  },
  "1965": {
    M: 19
  },
  "1966": {
    M: 27
  },
  "1967": {
    M: 19
  },
  "1968": {
    M: 20
  },
  "1969": {
    M: 27
  },
  "1970": {
    M: 36
  },
  "1971": {
    M: 37
  },
  "1972": {
    M: 58
  },
  "1973": {
    M: 70
  },
  "1974": {
    M: 82
  },
  "1975": {
    M: 66
  },
  "1976": {
    M: 103
  },
  "1977": {
    M: 110
  },
  "1978": {
    M: 95
  },
  "1979": {
    M: 106
  },
  "1980": {
    M: 113
  },
  "1981": {
    M: 135
  },
  "1982": {
    M: 126
  },
  "1983": {
    M: 135
  },
  "1984": {
    M: 139
  },
  "1985": {
    M: 132
  },
  "1986": {
    M: 148
  },
  "1987": {
    M: 158
  },
  "1988": {
    M: 182
  },
  "1989": {
    M: 147
  },
  "1990": {
    M: 134
  },
  "1991": {
    M: 128
  },
  "1992": {
    M: 139
  },
  "1993": {
    M: 148
  },
  "1994": {
    M: 157
  },
  "1995": {
    M: 162
  },
  "1996": {
    M: 153
  },
  "1997": {
    M: 153
  },
  "1998": {
    M: 166
  },
  "1999": {
    M: 151
  },
  "2000": {
    M: 111
  },
  "2001": {
    M: 71
  },
  "2002": {
    M: 76
  },
  "2003": {
    M: 70
  },
  "2004": {
    M: 51
  },
  "2005": {
    M: 49
  },
  "2006": {
    M: 43
  },
  "2007": {
    M: 51
  },
  "2008": {
    M: 33
  },
  "2009": {
    M: 32
  },
  "2010": {
    M: 26
  },
  "2011": {
    M: 26
  },
  "2012": {
    M: 19
  },
  "2013": {
    M: 19
  },
  "2014": {
    M: 28
  },
  "2015": {
    M: 27
  },
  "2016": {
    M: 13
  },
  "2017": {
    M: 12
  },
  "2019": {
    M: 11
  },
  "2020": {
    M: 11
  },
  "2021": {
    M: 17
  }
};
const Brady = {
  "1986": {
    M: 10
  },
  "1987": {
    M: 17
  },
  "1988": {
    M: 12
  },
  "1989": {
    M: 11
  },
  "1997": {
    M: 16
  },
  "1998": {
    M: 13
  },
  "1999": {
    M: 10
  },
  "2000": {
    M: 10
  },
  "2003": {
    M: 10
  }
};
const Braeden = {
  "1995": {
    M: 11
  },
  "2002": {
    M: 11
  },
  "2003": {
    M: 11
  }
};
const Braedyn = {
  "2002": {
    M: 13
  }
};
const Brandon = {
  "1969": {
    M: 11
  },
  "1970": {
    M: 12
  },
  "1971": {
    M: 11
  },
  "1972": {
    M: 24
  },
  "1973": {
    M: 29
  },
  "1974": {
    M: 12
  },
  "1975": {
    M: 10
  },
  "1976": {
    M: 21
  },
  "1977": {
    M: 16
  },
  "1978": {
    M: 11
  },
  "1979": {
    M: 10
  },
  "1980": {
    M: 10
  },
  "1981": {
    M: 11
  },
  "1985": {
    M: 11
  },
  "1989": {
    M: 18
  },
  "1990": {
    M: 24
  },
  "1991": {
    M: 46
  },
  "1992": {
    M: 173
  },
  "1993": {
    M: 102
  },
  "1994": {
    M: 102
  },
  "1995": {
    M: 93
  },
  "1996": {
    M: 93
  },
  "1997": {
    M: 131
  },
  "1998": {
    M: 97
  },
  "1999": {
    M: 71
  },
  "2000": {
    M: 68
  },
  "2001": {
    M: 48
  },
  "2002": {
    M: 66
  },
  "2003": {
    M: 40
  },
  "2004": {
    M: 43
  },
  "2005": {
    M: 36
  },
  "2006": {
    M: 43
  },
  "2007": {
    M: 29
  },
  "2008": {
    M: 22
  },
  "2009": {
    M: 13
  },
  "2010": {
    M: 13
  },
  "2011": {
    M: 11
  },
  "2012": {
    M: 11
  },
  "2014": {
    M: 10
  },
  "2016": {
    M: 11
  },
  "2018": {
    M: 12
  }
};
const Brax = {
  "2012": {
    M: 10
  },
  "2013": {
    M: 10
  },
  "2014": {
    M: 12
  },
  "2015": {
    M: 11
  }
};
const Braxton = {
  "2005": {
    M: 12
  },
  "2006": {
    M: 11
  },
  "2011": {
    M: 39
  },
  "2012": {
    M: 161
  },
  "2013": {
    M: 147
  },
  "2014": {
    M: 163
  },
  "2015": {
    M: 128
  },
  "2016": {
    M: 78
  },
  "2017": {
    M: 78
  },
  "2018": {
    M: 91
  },
  "2019": {
    M: 74
  },
  "2020": {
    M: 72
  },
  "2021": {
    M: 78
  }
};
const Braxtyn = {
  "2015": {
    M: 10
  }
};
const Brayden = {
  "1990": {
    M: 13
  },
  "1991": {
    M: 12
  },
  "1992": {
    M: 14
  },
  "1993": {
    M: 14
  },
  "1994": {
    M: 30
  },
  "1995": {
    M: 31
  },
  "1996": {
    M: 22
  },
  "1997": {
    M: 41
  },
  "1998": {
    M: 43
  },
  "1999": {
    M: 44
  },
  "2000": {
    M: 51
  },
  "2001": {
    M: 54
  },
  "2002": {
    M: 66
  },
  "2003": {
    M: 64
  },
  "2004": {
    M: 66
  },
  "2005": {
    M: 71
  },
  "2006": {
    M: 47
  },
  "2007": {
    M: 47
  },
  "2008": {
    M: 47
  },
  "2009": {
    M: 35
  },
  "2010": {
    M: 25
  },
  "2011": {
    M: 22
  },
  "2012": {
    M: 23
  },
  "2013": {
    M: 23
  },
  "2014": {
    M: 19
  },
  "2015": {
    M: 29
  },
  "2016": {
    M: 19
  },
  "2017": {
    M: 17
  },
  "2018": {
    M: 18
  }
};
const Braydon = {
  "1995": {
    M: 10
  },
  "1997": {
    M: 19
  },
  "1999": {
    M: 15
  },
  "2000": {
    M: 12
  },
  "2002": {
    M: 11
  },
  "2003": {
    M: 14
  },
  "2004": {
    M: 13
  },
  "2005": {
    M: 18
  },
  "2006": {
    M: 12
  },
  "2007": {
    M: 11
  }
};
const Breana = {
  "2001": {
    F: 11
  }
};
const Breanna = {
  "1991": {
    F: 10
  },
  "1994": {
    F: 11
  },
  "1995": {
    F: 11
  },
  "1997": {
    F: 23
  },
  "1998": {
    F: 24
  },
  "1999": {
    F: 23
  },
  "2000": {
    F: 23
  },
  "2001": {
    F: 31
  },
  "2002": {
    F: 32
  },
  "2003": {
    F: 20
  },
  "2004": {
    F: 24
  },
  "2005": {
    F: 22
  },
  "2006": {
    F: 19
  },
  "2007": {
    F: 19
  },
  "2008": {
    F: 17
  },
  "2009": {
    F: 12
  },
  "2010": {
    F: 15
  }
};
const Bree = {
  "1998": {
    F: 14
  },
  "1999": {
    F: 17
  },
  "2000": {
    F: 30
  },
  "2001": {
    F: 21
  },
  "2002": {
    F: 13
  },
  "2003": {
    F: 23
  },
  "2004": {
    F: 16
  },
  "2005": {
    F: 21
  },
  "2006": {
    F: 21
  },
  "2007": {
    F: 11
  },
  "2008": {
    F: 15
  },
  "2009": {
    F: 10
  },
  "2010": {
    F: 10
  },
  "2011": {
    F: 10
  },
  "2012": {
    F: 14
  },
  "2014": {
    F: 10
  },
  "2015": {
    F: 14
  },
  "2021": {
    F: 11
  }
};
const Breeze = {
  "2005": {
    F: 10
  },
  "2007": {
    F: 12
  },
  "2008": {
    F: 10
  }
};
const Brenda = {
  "1911": {
    F: 12
  },
  "1912": {
    F: 11
  },
  "1913": {
    F: 16
  },
  "1914": {
    F: 12
  },
  "1915": {
    F: 15
  },
  "1916": {
    F: 11
  },
  "1917": {
    F: 16
  },
  "1920": {
    F: 14
  },
  "1921": {
    F: 12
  },
  "1922": {
    F: 17
  },
  "1923": {
    F: 18
  },
  "1924": {
    F: 15
  },
  "1925": {
    F: 20
  },
  "1926": {
    F: 19
  },
  "1927": {
    F: 18
  },
  "1929": {
    F: 11
  },
  "1930": {
    F: 16
  },
  "1931": {
    F: 16
  },
  "1932": {
    F: 10
  },
  "1933": {
    F: 17
  },
  "1934": {
    F: 15
  },
  "1935": {
    F: 13
  },
  "1936": {
    F: 11
  },
  "1937": {
    F: 17
  },
  "1938": {
    F: 22
  },
  "1939": {
    F: 20
  },
  "1940": {
    F: 31
  },
  "1941": {
    F: 31
  },
  "1942": {
    F: 33
  },
  "1943": {
    F: 26
  },
  "1944": {
    F: 29
  },
  "1945": {
    F: 35
  },
  "1946": {
    F: 50
  },
  "1947": {
    F: 57
  },
  "1948": {
    F: 49
  },
  "1949": {
    F: 58
  },
  "1950": {
    F: 62
  },
  "1951": {
    F: 79
  },
  "1952": {
    F: 93
  },
  "1953": {
    F: 89
  },
  "1954": {
    F: 84
  },
  "1955": {
    F: 123
  },
  "1956": {
    F: 114
  },
  "1957": {
    F: 121
  },
  "1958": {
    F: 114
  },
  "1959": {
    F: 128
  },
  "1960": {
    F: 151
  },
  "1961": {
    F: 152
  },
  "1962": {
    F: 151
  },
  "1963": {
    F: 147
  },
  "1964": {
    F: 127
  },
  "1965": {
    F: 149
  },
  "1966": {
    F: 125
  },
  "1967": {
    F: 149
  },
  "1968": {
    F: 128
  },
  "1969": {
    F: 103
  },
  "1970": {
    F: 86
  },
  "1971": {
    F: 84
  },
  "1972": {
    F: 82
  },
  "1973": {
    F: 65
  },
  "1974": {
    F: 66
  },
  "1975": {
    F: 49
  },
  "1976": {
    F: 40
  },
  "1977": {
    F: 38
  },
  "1978": {
    F: 31
  },
  "1979": {
    F: 23
  },
  "1980": {
    F: 32
  },
  "1981": {
    F: 20
  },
  "1982": {
    F: 26
  },
  "1983": {
    F: 16
  },
  "1984": {
    F: 17
  },
  "1985": {
    F: 12
  },
  "1986": {
    F: 17
  },
  "1992": {
    F: 13
  },
  "1994": {
    F: 10
  },
  "1995": {
    F: 10
  }
};
const Brendan = {
  "1947": {
    M: 10
  },
  "1948": {
    M: 12
  },
  "1950": {
    M: 13
  },
  "1951": {
    M: 17
  },
  "1952": {
    M: 11
  },
  "1953": {
    M: 12
  },
  "1954": {
    M: 15
  },
  "1955": {
    M: 18
  },
  "1956": {
    M: 16
  },
  "1957": {
    M: 18
  },
  "1958": {
    M: 20
  },
  "1959": {
    M: 24
  },
  "1960": {
    M: 31
  },
  "1961": {
    M: 43
  },
  "1962": {
    M: 37
  },
  "1963": {
    M: 50
  },
  "1964": {
    M: 54
  },
  "1965": {
    M: 59
  },
  "1966": {
    M: 72
  },
  "1967": {
    M: 68
  },
  "1968": {
    M: 83
  },
  "1969": {
    M: 115
  },
  "1970": {
    M: 107
  },
  "1971": {
    M: 107
  },
  "1972": {
    M: 76
  },
  "1973": {
    M: 84
  },
  "1974": {
    M: 106
  },
  "1975": {
    M: 94
  },
  "1976": {
    M: 92
  },
  "1977": {
    M: 61
  },
  "1978": {
    M: 68
  },
  "1979": {
    M: 83
  },
  "1980": {
    M: 73
  },
  "1981": {
    M: 69
  },
  "1982": {
    M: 99
  },
  "1983": {
    M: 67
  },
  "1984": {
    M: 68
  },
  "1985": {
    M: 64
  },
  "1986": {
    M: 62
  },
  "1987": {
    M: 57
  },
  "1988": {
    M: 65
  },
  "1989": {
    M: 59
  },
  "1990": {
    M: 55
  },
  "1991": {
    M: 58
  },
  "1992": {
    M: 54
  },
  "1993": {
    M: 52
  },
  "1994": {
    M: 36
  },
  "1995": {
    M: 31
  },
  "1996": {
    M: 23
  },
  "1997": {
    M: 25
  },
  "1998": {
    M: 13
  },
  "1999": {
    M: 26
  },
  "2000": {
    M: 27
  },
  "2001": {
    M: 22
  },
  "2002": {
    M: 21
  },
  "2003": {
    M: 11
  },
  "2004": {
    M: 11
  },
  "2005": {
    M: 11
  },
  "2006": {
    M: 11
  }
};
const Brendon = {
  "1950": {
    M: 10
  },
  "1951": {
    M: 17
  },
  "1952": {
    M: 12
  },
  "1953": {
    M: 11
  },
  "1954": {
    M: 11
  },
  "1955": {
    M: 15
  },
  "1956": {
    M: 13
  },
  "1957": {
    M: 15
  },
  "1958": {
    M: 22
  },
  "1959": {
    M: 28
  },
  "1960": {
    M: 21
  },
  "1961": {
    M: 19
  },
  "1962": {
    M: 23
  },
  "1963": {
    M: 51
  },
  "1964": {
    M: 61
  },
  "1965": {
    M: 59
  },
  "1966": {
    M: 72
  },
  "1967": {
    M: 65
  },
  "1968": {
    M: 114
  },
  "1969": {
    M: 194
  },
  "1970": {
    M: 191
  },
  "1971": {
    M: 195
  },
  "1972": {
    M: 202
  },
  "1973": {
    M: 199
  },
  "1974": {
    M: 201
  },
  "1975": {
    M: 155
  },
  "1976": {
    M: 168
  },
  "1977": {
    M: 136
  },
  "1978": {
    M: 133
  },
  "1979": {
    M: 121
  },
  "1980": {
    M: 123
  },
  "1981": {
    M: 123
  },
  "1982": {
    M: 100
  },
  "1983": {
    M: 83
  },
  "1984": {
    M: 80
  },
  "1985": {
    M: 75
  },
  "1986": {
    M: 67
  },
  "1987": {
    M: 65
  },
  "1988": {
    M: 70
  },
  "1989": {
    M: 56
  },
  "1990": {
    M: 55
  },
  "1991": {
    M: 46
  },
  "1992": {
    M: 43
  },
  "1993": {
    M: 49
  },
  "1994": {
    M: 54
  },
  "1995": {
    M: 22
  },
  "1996": {
    M: 25
  },
  "1997": {
    M: 29
  },
  "1998": {
    M: 15
  },
  "1999": {
    M: 17
  },
  "2000": {
    M: 19
  },
  "2001": {
    M: 14
  },
  "2003": {
    M: 13
  },
  "2008": {
    M: 10
  },
  "2009": {
    M: 10
  }
};
const Brenna = {
  "1993": {
    F: 13
  },
  "1994": {
    F: 13
  },
  "1995": {
    F: 14
  },
  "1996": {
    F: 16
  },
  "1997": {
    F: 23
  },
  "1998": {
    F: 10
  },
  "1999": {
    F: 18
  },
  "2000": {
    F: 18
  },
  "2001": {
    F: 22
  },
  "2002": {
    F: 17
  },
  "2003": {
    F: 12
  },
  "2004": {
    F: 12
  },
  "2006": {
    F: 10
  }
};
const Brent = {
  "1941": {
    M: 11
  },
  "1942": {
    M: 10
  },
  "1943": {
    M: 13
  },
  "1944": {
    M: 15
  },
  "1945": {
    M: 24
  },
  "1946": {
    M: 25
  },
  "1947": {
    M: 28
  },
  "1948": {
    M: 40
  },
  "1949": {
    M: 38
  },
  "1950": {
    M: 43
  },
  "1951": {
    M: 69
  },
  "1952": {
    M: 63
  },
  "1953": {
    M: 68
  },
  "1954": {
    M: 94
  },
  "1955": {
    M: 86
  },
  "1956": {
    M: 112
  },
  "1957": {
    M: 136
  },
  "1958": {
    M: 153
  },
  "1959": {
    M: 175
  },
  "1960": {
    M: 172
  },
  "1961": {
    M: 257
  },
  "1962": {
    M: 258
  },
  "1963": {
    M: 285
  },
  "1964": {
    M: 261
  },
  "1965": {
    M: 238
  },
  "1966": {
    M: 218
  },
  "1967": {
    M: 249
  },
  "1968": {
    M: 308
  },
  "1969": {
    M: 232
  },
  "1970": {
    M: 224
  },
  "1971": {
    M: 249
  },
  "1972": {
    M: 214
  },
  "1973": {
    M: 191
  },
  "1974": {
    M: 181
  },
  "1975": {
    M: 163
  },
  "1976": {
    M: 168
  },
  "1977": {
    M: 121
  },
  "1978": {
    M: 111
  },
  "1979": {
    M: 118
  },
  "1980": {
    M: 104
  },
  "1981": {
    M: 92
  },
  "1982": {
    M: 67
  },
  "1983": {
    M: 57
  },
  "1984": {
    M: 85
  },
  "1985": {
    M: 67
  },
  "1986": {
    M: 70
  },
  "1987": {
    M: 51
  },
  "1988": {
    M: 34
  },
  "1989": {
    M: 44
  },
  "1990": {
    M: 37
  },
  "1991": {
    M: 31
  },
  "1992": {
    M: 37
  },
  "1993": {
    M: 17
  },
  "1994": {
    M: 17
  },
  "1995": {
    M: 17
  },
  "1996": {
    M: 16
  },
  "1997": {
    M: 15
  },
  "1999": {
    M: 11
  }
};
const Brenton = {
  "1963": {
    M: 13
  },
  "1968": {
    M: 10
  },
  "1972": {
    M: 10
  },
  "1986": {
    M: 28
  },
  "1988": {
    M: 16
  },
  "1989": {
    M: 10
  },
  "1990": {
    M: 10
  },
  "1991": {
    M: 11
  }
};
const Brett = {
  "1946": {
    M: 16
  },
  "1947": {
    M: 19
  },
  "1948": {
    M: 18
  },
  "1949": {
    M: 19
  },
  "1950": {
    M: 29
  },
  "1951": {
    M: 38
  },
  "1952": {
    M: 37
  },
  "1953": {
    M: 50
  },
  "1954": {
    M: 52
  },
  "1955": {
    M: 48
  },
  "1956": {
    M: 48
  },
  "1957": {
    M: 93
  },
  "1958": {
    M: 103
  },
  "1959": {
    M: 98
  },
  "1960": {
    M: 139
  },
  "1961": {
    M: 153
  },
  "1962": {
    M: 188
  },
  "1963": {
    M: 209
  },
  "1964": {
    M: 222
  },
  "1965": {
    M: 257
  },
  "1966": {
    M: 221
  },
  "1967": {
    M: 271
  },
  "1968": {
    M: 245
  },
  "1969": {
    M: 221
  },
  "1970": {
    M: 180
  },
  "1971": {
    M: 182
  },
  "1972": {
    M: 172
  },
  "1973": {
    M: 134
  },
  "1974": {
    M: 111
  },
  "1975": {
    M: 96
  },
  "1976": {
    M: 97
  },
  "1977": {
    M: 78
  },
  "1978": {
    M: 97
  },
  "1979": {
    M: 83
  },
  "1980": {
    M: 80
  },
  "1981": {
    M: 88
  },
  "1982": {
    M: 64
  },
  "1983": {
    M: 99
  },
  "1984": {
    M: 91
  },
  "1985": {
    M: 81
  },
  "1986": {
    M: 65
  },
  "1987": {
    M: 55
  },
  "1988": {
    M: 60
  },
  "1989": {
    M: 66
  },
  "1990": {
    M: 44
  },
  "1991": {
    M: 52
  },
  "1992": {
    M: 43
  },
  "1993": {
    M: 27
  },
  "1994": {
    M: 22
  },
  "1995": {
    M: 37
  },
  "1996": {
    M: 31
  },
  "1997": {
    M: 24
  },
  "1998": {
    M: 14
  },
  "1999": {
    M: 16
  }
};
const Brian = {
  "1904": {
    M: 11
  },
  "1905": {
    M: 13
  },
  "1909": {
    M: 16
  },
  "1911": {
    M: 27
  },
  "1912": {
    M: 17
  },
  "1913": {
    M: 24
  },
  "1914": {
    M: 29
  },
  "1915": {
    M: 29
  },
  "1916": {
    M: 41
  },
  "1917": {
    M: 32
  },
  "1918": {
    M: 39
  },
  "1919": {
    M: 30
  },
  "1920": {
    M: 61
  },
  "1921": {
    M: 66
  },
  "1922": {
    M: 89
  },
  "1923": {
    M: 100
  },
  "1924": {
    M: 123
  },
  "1925": {
    M: 127
  },
  "1926": {
    M: 150
  },
  "1927": {
    M: 146
  },
  "1928": {
    M: 207
  },
  "1929": {
    M: 261
  },
  "1930": {
    M: 282
  },
  "1931": {
    M: 307
  },
  "1932": {
    M: 310
  },
  "1933": {
    M: 325
  },
  "1934": {
    M: 371
  },
  "1935": {
    M: 335
  },
  "1936": {
    M: 395
  },
  "1937": {
    M: 464
  },
  "1938": {
    M: 481
  },
  "1939": {
    M: 514
  },
  "1940": {
    M: 607
  },
  "1941": {
    M: 521
  },
  "1942": {
    M: 498
  },
  "1943": {
    M: 380
  },
  "1944": {
    M: 461
  },
  "1945": {
    M: 479
  },
  "1946": {
    M: 563
  },
  "1947": {
    M: 597
  },
  "1948": {
    M: 555
  },
  "1949": {
    M: 530
  },
  "1950": {
    M: 492
  },
  "1951": {
    M: 483
  },
  "1952": {
    M: 483
  },
  "1953": {
    M: 494
  },
  "1954": {
    M: 469
  },
  "1955": {
    M: 394
  },
  "1956": {
    M: 429
  },
  "1957": {
    M: 453
  },
  "1958": {
    M: 367
  },
  "1959": {
    M: 377
  },
  "1960": {
    M: 367
  },
  "1961": {
    M: 301
  },
  "1962": {
    M: 304
  },
  "1963": {
    M: 305
  },
  "1964": {
    M: 257
  },
  "1965": {
    M: 250
  },
  "1966": {
    M: 206
  },
  "1967": {
    M: 193
  },
  "1968": {
    M: 212
  },
  "1969": {
    M: 191
  },
  "1970": {
    M: 161
  },
  "1971": {
    M: 133
  },
  "1972": {
    M: 128
  },
  "1973": {
    M: 135
  },
  "1974": {
    M: 108
  },
  "1975": {
    M: 94
  },
  "1976": {
    M: 81
  },
  "1977": {
    M: 80
  },
  "1978": {
    M: 70
  },
  "1979": {
    M: 61
  },
  "1980": {
    M: 55
  },
  "1981": {
    M: 64
  },
  "1982": {
    M: 47
  },
  "1983": {
    M: 50
  },
  "1984": {
    M: 51
  },
  "1985": {
    M: 44
  },
  "1986": {
    M: 25
  },
  "1987": {
    M: 33
  },
  "1988": {
    M: 37
  },
  "1989": {
    M: 30
  },
  "1990": {
    M: 29
  },
  "1991": {
    M: 28
  },
  "1992": {
    M: 26
  },
  "1993": {
    M: 20
  },
  "1994": {
    M: 25
  },
  "1995": {
    M: 26
  },
  "1996": {
    M: 23
  },
  "1997": {
    M: 15
  },
  "1998": {
    M: 25
  },
  "1999": {
    M: 23
  },
  "2000": {
    M: 18
  },
  "2001": {
    M: 19
  },
  "2002": {
    M: 14
  },
  "2003": {
    M: 24
  },
  "2004": {
    M: 17
  },
  "2005": {
    M: 17
  },
  "2006": {
    M: 21
  },
  "2007": {
    M: 12
  },
  "2008": {
    M: 13
  },
  "2009": {
    M: 20
  },
  "2010": {
    M: 21
  },
  "2011": {
    M: 12
  },
  "2012": {
    M: 16
  },
  "2013": {
    M: 12
  },
  "2015": {
    M: 12
  },
  "2016": {
    M: 12
  },
  "2017": {
    M: 16
  }
};
const Briana = {
  "1992": {
    F: 13
  },
  "1993": {
    F: 15
  },
  "1994": {
    F: 11
  },
  "1995": {
    F: 18
  },
  "1996": {
    F: 16
  },
  "1997": {
    F: 28
  },
  "1998": {
    F: 35
  },
  "1999": {
    F: 36
  },
  "2000": {
    F: 47
  },
  "2001": {
    F: 28
  },
  "2002": {
    F: 33
  },
  "2003": {
    F: 22
  },
  "2004": {
    F: 33
  },
  "2005": {
    F: 36
  },
  "2006": {
    F: 25
  },
  "2007": {
    F: 15
  },
  "2008": {
    F: 12
  },
  "2009": {
    F: 18
  },
  "2010": {
    F: 11
  },
  "2011": {
    F: 20
  }
};
const Brianna = {
  "1991": {
    F: 16
  },
  "1992": {
    F: 12
  },
  "1993": {
    F: 23
  },
  "1994": {
    F: 27
  },
  "1995": {
    F: 41
  },
  "1996": {
    F: 39
  },
  "1997": {
    F: 52
  },
  "1998": {
    F: 55
  },
  "1999": {
    F: 81
  },
  "2000": {
    F: 82
  },
  "2001": {
    F: 79
  },
  "2002": {
    F: 65
  },
  "2003": {
    F: 75
  },
  "2004": {
    F: 73
  },
  "2005": {
    F: 62
  },
  "2006": {
    F: 80
  },
  "2007": {
    F: 52
  },
  "2008": {
    F: 36
  },
  "2009": {
    F: 39
  },
  "2010": {
    F: 27
  },
  "2011": {
    F: 29
  },
  "2012": {
    F: 19
  },
  "2013": {
    F: 26
  },
  "2014": {
    F: 15
  },
  "2015": {
    F: 18
  },
  "2016": {
    F: 11
  },
  "2017": {
    F: 25
  },
  "2018": {
    F: 21
  },
  "2019": {
    F: 21
  },
  "2020": {
    F: 11
  },
  "2021": {
    F: 19
  }
};
const Briar = {
  "1965": {
    F: 10
  },
  "1977": {
    F: 17
  },
  "1979": {
    F: 12
  },
  "1980": {
    F: 20
  },
  "1981": {
    F: 16
  },
  "1982": {
    F: 12
  },
  "1983": {
    F: 23
  },
  "1984": {
    F: 21
  },
  "1985": {
    F: 24
  },
  "1986": {
    F: 20
  },
  "1987": {
    F: 25
  },
  "1988": {
    F: 21
  },
  "1989": {
    F: 27
  },
  "1990": {
    F: 48
  },
  "1991": {
    F: 38
  },
  "1992": {
    F: 28
  },
  "1993": {
    F: 43
  },
  "1994": {
    F: 41
  },
  "1995": {
    F: 45
  },
  "1996": {
    F: 37
  },
  "1997": {
    F: 41
  },
  "1998": {
    F: 38
  },
  "1999": {
    F: 33
  },
  "2000": {
    F: 37
  },
  "2001": {
    F: 41
  },
  "2002": {
    F: 38
  },
  "2003": {
    F: 35
  },
  "2004": {
    F: 33
  },
  "2005": {
    F: 25
  },
  "2006": {
    F: 37
  },
  "2007": {
    F: 21
  },
  "2008": {
    F: 29
  },
  "2009": {
    F: 26
  },
  "2010": {
    F: 24
  },
  "2011": {
    F: 14
  },
  "2012": {
    F: 21
  },
  "2013": {
    F: 17
  },
  "2014": {
    F: 17
  },
  "2015": {
    F: 28
  },
  "2016": {
    F: 34
  },
  "2017": {
    F: 20
  },
  "2018": {
    F: 23
  },
  "2019": {
    F: 16
  },
  "2020": {
    F: 27
  },
  "2021": {
    F: 19
  }
};
const Bridget = {
  "1900": {
    F: 14
  },
  "1903": {
    F: 11
  },
  "1908": {
    F: 10
  },
  "1917": {
    F: 11
  },
  "1947": {
    F: 12
  },
  "1955": {
    F: 14
  },
  "1956": {
    F: 21
  },
  "1957": {
    F: 22
  },
  "1958": {
    F: 19
  },
  "1959": {
    F: 31
  },
  "1960": {
    F: 37
  },
  "1961": {
    F: 24
  },
  "1962": {
    F: 39
  },
  "1963": {
    F: 40
  },
  "1964": {
    F: 41
  },
  "1965": {
    F: 53
  },
  "1966": {
    F: 50
  },
  "1967": {
    F: 67
  },
  "1968": {
    F: 72
  },
  "1969": {
    F: 52
  },
  "1970": {
    F: 86
  },
  "1971": {
    F: 93
  },
  "1972": {
    F: 71
  },
  "1973": {
    F: 107
  },
  "1974": {
    F: 135
  },
  "1975": {
    F: 98
  },
  "1976": {
    F: 88
  },
  "1977": {
    F: 70
  },
  "1978": {
    F: 70
  },
  "1979": {
    F: 72
  },
  "1980": {
    F: 73
  },
  "1981": {
    F: 50
  },
  "1982": {
    F: 62
  },
  "1983": {
    F: 63
  },
  "1984": {
    F: 61
  },
  "1985": {
    F: 51
  },
  "1986": {
    F: 45
  },
  "1987": {
    F: 53
  },
  "1988": {
    F: 59
  },
  "1989": {
    F: 44
  },
  "1990": {
    F: 56
  },
  "1991": {
    F: 52
  },
  "1992": {
    F: 48
  },
  "1993": {
    F: 42
  },
  "1994": {
    F: 41
  },
  "1995": {
    F: 37
  },
  "1996": {
    F: 40
  },
  "1997": {
    F: 40
  },
  "1998": {
    F: 30
  },
  "1999": {
    F: 36
  },
  "2000": {
    F: 27
  },
  "2001": {
    F: 28
  },
  "2002": {
    F: 22
  },
  "2003": {
    F: 14
  },
  "2004": {
    F: 32
  },
  "2005": {
    F: 17
  },
  "2006": {
    F: 20
  },
  "2007": {
    F: 12
  },
  "2009": {
    F: 14
  },
  "2012": {
    F: 10
  }
};
const Bridgette = {
  "1970": {
    F: 10
  },
  "1973": {
    F: 21
  },
  "1974": {
    F: 24
  },
  "1975": {
    F: 10
  },
  "1976": {
    F: 15
  },
  "1977": {
    F: 10
  },
  "1980": {
    F: 10
  },
  "1982": {
    F: 13
  },
  "1983": {
    F: 10
  },
  "1984": {
    F: 14
  }
};
const Bridie = {
  "1983": {
    F: 10
  },
  "1986": {
    F: 12
  },
  "1988": {
    F: 15
  },
  "1991": {
    F: 11
  },
  "1994": {
    F: 11
  },
  "1996": {
    F: 12
  },
  "1998": {
    F: 13
  },
  "2005": {
    F: 12
  },
  "2006": {
    F: 11
  },
  "2007": {
    F: 22
  }
};
const Brielle = {
  "2017": {
    F: 11
  },
  "2019": {
    F: 11
  }
};
const Brigid = {
  "1957": {
    F: 11
  },
  "1958": {
    F: 14
  },
  "1959": {
    F: 16
  },
  "1960": {
    F: 15
  },
  "1963": {
    F: 11
  },
  "1964": {
    F: 18
  },
  "1965": {
    F: 17
  },
  "1966": {
    F: 15
  },
  "1967": {
    F: 17
  },
  "1969": {
    F: 13
  },
  "1970": {
    F: 11
  },
  "1971": {
    F: 14
  },
  "1972": {
    F: 11
  }
};
const Brigitte = {
  "1960": {
    F: 12
  },
  "1965": {
    F: 10
  },
  "1966": {
    F: 10
  },
  "1967": {
    F: 11
  },
  "1972": {
    F: 13
  }
};
const Britney = {
  "1996": {
    F: 10
  },
  "1999": {
    F: 40
  },
  "2000": {
    F: 62
  },
  "2001": {
    F: 31
  },
  "2002": {
    F: 15
  },
  "2004": {
    F: 10
  }
};
const Brittany = {
  "1985": {
    F: 10
  },
  "1987": {
    F: 11
  },
  "1988": {
    F: 21
  },
  "1989": {
    F: 42
  },
  "1990": {
    F: 56
  },
  "1991": {
    F: 74
  },
  "1992": {
    F: 85
  },
  "1993": {
    F: 121
  },
  "1994": {
    F: 164
  },
  "1995": {
    F: 149
  },
  "1996": {
    F: 125
  },
  "1997": {
    F: 174
  },
  "1998": {
    F: 110
  },
  "1999": {
    F: 99
  },
  "2000": {
    F: 83
  },
  "2001": {
    F: 34
  },
  "2002": {
    F: 15
  }
};
const Brittney = {
  "1993": {
    F: 23
  },
  "1994": {
    F: 19
  },
  "1995": {
    F: 19
  },
  "1996": {
    F: 13
  },
  "1997": {
    F: 12
  },
  "1998": {
    F: 15
  },
  "1999": {
    F: 16
  },
  "2000": {
    F: 14
  }
};
const Brock = {
  "1987": {
    M: 17
  },
  "1988": {
    M: 12
  },
  "1989": {
    M: 16
  },
  "1990": {
    M: 11
  },
  "1991": {
    M: 19
  },
  "1992": {
    M: 12
  },
  "1994": {
    M: 11
  },
  "1995": {
    M: 14
  },
  "1996": {
    M: 16
  },
  "1999": {
    M: 21
  },
  "2000": {
    M: 16
  },
  "2001": {
    M: 21
  },
  "2002": {
    M: 22
  },
  "2003": {
    M: 19
  },
  "2004": {
    M: 20
  },
  "2005": {
    M: 21
  },
  "2006": {
    M: 21
  },
  "2007": {
    M: 25
  },
  "2008": {
    M: 10
  },
  "2009": {
    M: 23
  },
  "2011": {
    M: 16
  },
  "2012": {
    M: 13
  },
  "2015": {
    M: 19
  },
  "2016": {
    M: 11
  },
  "2017": {
    M: 15
  }
};
const Brodie = {
  "1981": {
    M: 10
  },
  "1982": {
    M: 10
  },
  "1983": {
    M: 12
  },
  "1985": {
    M: 16
  },
  "1986": {
    M: 16
  },
  "1987": {
    M: 13
  },
  "1988": {
    M: 12
  },
  "1989": {
    M: 19
  },
  "1990": {
    M: 22
  },
  "1991": {
    M: 26
  },
  "1992": {
    M: 25
  },
  "1993": {
    M: 18
  },
  "1994": {
    M: 28
  },
  "1995": {
    M: 31
  },
  "1996": {
    F: 11,
    M: 35
  },
  "1997": {
    M: 52
  },
  "1998": {
    M: 54
  },
  "1999": {
    M: 31
  },
  "2000": {
    M: 30
  },
  "2001": {
    M: 37
  },
  "2002": {
    F: 10,
    M: 49
  },
  "2003": {
    F: 16,
    M: 62
  },
  "2004": {
    F: 11,
    M: 51
  },
  "2005": {
    M: 34
  },
  "2006": {
    M: 35
  },
  "2007": {
    M: 35
  },
  "2008": {
    M: 28
  },
  "2009": {
    M: 25
  },
  "2010": {
    M: 32
  },
  "2011": {
    M: 42
  },
  "2012": {
    M: 31
  },
  "2013": {
    M: 25
  },
  "2014": {
    M: 30
  },
  "2015": {
    M: 47
  },
  "2016": {
    M: 34
  },
  "2017": {
    M: 40
  },
  "2018": {
    M: 29
  },
  "2019": {
    M: 43
  },
  "2020": {
    M: 33
  },
  "2021": {
    M: 38
  }
};
const Brody = {
  "1995": {
    M: 15
  },
  "1996": {
    M: 17
  },
  "1997": {
    M: 14
  },
  "1998": {
    M: 18
  },
  "1999": {
    M: 13
  },
  "2000": {
    M: 15
  },
  "2001": {
    M: 28
  },
  "2002": {
    M: 19
  },
  "2003": {
    M: 26
  },
  "2004": {
    M: 22
  },
  "2005": {
    M: 23
  },
  "2006": {
    M: 24
  },
  "2007": {
    M: 34
  },
  "2008": {
    M: 34
  },
  "2009": {
    M: 42
  },
  "2010": {
    M: 51
  },
  "2011": {
    M: 44
  },
  "2012": {
    M: 47
  },
  "2013": {
    M: 41
  },
  "2014": {
    M: 42
  },
  "2015": {
    M: 35
  },
  "2016": {
    M: 32
  },
  "2017": {
    M: 24
  },
  "2018": {
    M: 28
  },
  "2019": {
    M: 28
  },
  "2020": {
    M: 24
  },
  "2021": {
    M: 26
  }
};
const Brogan = {
  "1989": {
    F: 12,
    M: 11
  },
  "1990": {
    M: 11
  },
  "1992": {
    M: 19
  }
};
const Bronson = {
  "1976": {
    M: 11
  },
  "1978": {
    M: 10
  },
  "1980": {
    M: 12
  },
  "1984": {
    M: 18
  },
  "1985": {
    M: 20
  },
  "1986": {
    M: 25
  },
  "1987": {
    M: 20
  },
  "1988": {
    M: 23
  },
  "1989": {
    M: 19
  },
  "1990": {
    M: 24
  },
  "1991": {
    M: 17
  },
  "1992": {
    M: 26
  },
  "1993": {
    M: 27
  },
  "1994": {
    M: 15
  },
  "1995": {
    M: 22
  },
  "1996": {
    M: 24
  },
  "1997": {
    M: 18
  },
  "1998": {
    M: 15
  },
  "1999": {
    M: 22
  },
  "2000": {
    M: 10
  },
  "2001": {
    M: 17
  },
  "2002": {
    M: 16
  },
  "2003": {
    M: 13
  },
  "2004": {
    M: 15
  },
  "2005": {
    M: 14
  },
  "2006": {
    M: 19
  },
  "2007": {
    M: 18
  },
  "2008": {
    M: 12
  },
  "2009": {
    M: 21
  },
  "2010": {
    M: 19
  },
  "2011": {
    M: 17
  },
  "2012": {
    M: 10
  },
  "2013": {
    M: 10
  },
  "2014": {
    M: 13
  },
  "2015": {
    M: 12
  },
  "2016": {
    M: 13
  },
  "2017": {
    M: 11
  },
  "2019": {
    M: 10
  },
  "2021": {
    M: 10
  }
};
const Bronte = {
  "1993": {
    F: 10
  },
  "1994": {
    F: 10
  },
  "1997": {
    F: 11
  }
};
const Bronwen = {
  "1945": {
    F: 14
  },
  "1946": {
    F: 16
  },
  "1950": {
    F: 14
  },
  "1951": {
    F: 10
  },
  "1954": {
    F: 11
  },
  "1955": {
    F: 15
  },
  "1957": {
    F: 11
  },
  "1960": {
    F: 14
  },
  "1961": {
    F: 16
  },
  "1962": {
    F: 14
  },
  "1964": {
    F: 12
  },
  "1967": {
    F: 10
  },
  "1973": {
    F: 10
  },
  "1974": {
    F: 13
  },
  "1977": {
    F: 10
  }
};
const Bronwyn = {
  "1945": {
    F: 16
  },
  "1946": {
    F: 34
  },
  "1947": {
    F: 31
  },
  "1948": {
    F: 39
  },
  "1949": {
    F: 28
  },
  "1950": {
    F: 34
  },
  "1951": {
    F: 50
  },
  "1952": {
    F: 57
  },
  "1953": {
    F: 50
  },
  "1954": {
    F: 62
  },
  "1955": {
    F: 72
  },
  "1956": {
    F: 62
  },
  "1957": {
    F: 82
  },
  "1958": {
    F: 79
  },
  "1959": {
    F: 85
  },
  "1960": {
    F: 92
  },
  "1961": {
    F: 149
  },
  "1962": {
    F: 138
  },
  "1963": {
    F: 131
  },
  "1964": {
    F: 140
  },
  "1965": {
    F: 123
  },
  "1966": {
    F: 109
  },
  "1967": {
    F: 101
  },
  "1968": {
    F: 121
  },
  "1969": {
    F: 106
  },
  "1970": {
    F: 117
  },
  "1971": {
    F: 100
  },
  "1972": {
    F: 91
  },
  "1973": {
    F: 122
  },
  "1974": {
    F: 107
  },
  "1975": {
    F: 91
  },
  "1976": {
    F: 69
  },
  "1977": {
    F: 58
  },
  "1978": {
    F: 46
  },
  "1979": {
    F: 53
  },
  "1980": {
    F: 34
  },
  "1981": {
    F: 46
  },
  "1982": {
    F: 42
  },
  "1983": {
    F: 29
  },
  "1984": {
    F: 35
  },
  "1985": {
    F: 34
  },
  "1986": {
    F: 25
  },
  "1987": {
    F: 17
  },
  "1988": {
    F: 19
  },
  "1989": {
    F: 21
  },
  "1990": {
    F: 17
  },
  "1991": {
    F: 22
  },
  "1992": {
    F: 19
  },
  "1993": {
    F: 10
  },
  "1994": {
    F: 17
  },
  "1995": {
    F: 13
  },
  "1996": {
    F: 10
  },
  "1997": {
    F: 15
  },
  "1998": {
    F: 11
  },
  "1999": {
    F: 10
  }
};
const Brook = {
  "1977": {
    M: 10
  },
  "1984": {
    M: 19
  },
  "1985": {
    M: 12
  },
  "1986": {
    M: 14
  },
  "1987": {
    M: 21
  },
  "1988": {
    M: 21
  },
  "1989": {
    M: 32
  },
  "1990": {
    M: 18
  },
  "1991": {
    M: 17
  },
  "1992": {
    M: 13
  },
  "1993": {
    M: 15
  },
  "1994": {
    M: 18
  },
  "1996": {
    M: 10
  }
};
const Brooke = {
  "1975": {
    M: 13
  },
  "1977": {
    F: 13
  },
  "1978": {
    F: 12
  },
  "1979": {
    F: 30
  },
  "1980": {
    F: 18
  },
  "1981": {
    F: 32
  },
  "1982": {
    F: 41
  },
  "1983": {
    F: 47
  },
  "1984": {
    F: 46
  },
  "1985": {
    F: 44
  },
  "1986": {
    F: 55
  },
  "1987": {
    F: 70
  },
  "1988": {
    F: 57
  },
  "1989": {
    F: 93,
    M: 11
  },
  "1990": {
    F: 98
  },
  "1991": {
    F: 102,
    M: 12
  },
  "1992": {
    F: 115
  },
  "1993": {
    F: 143,
    M: 14
  },
  "1994": {
    F: 173
  },
  "1995": {
    F: 177,
    M: 10
  },
  "1996": {
    F: 184
  },
  "1997": {
    F: 162
  },
  "1998": {
    F: 157
  },
  "1999": {
    F: 167
  },
  "2000": {
    F: 138
  },
  "2001": {
    F: 167
  },
  "2002": {
    F: 136
  },
  "2003": {
    F: 150
  },
  "2004": {
    F: 192
  },
  "2005": {
    F: 176
  },
  "2006": {
    F: 155
  },
  "2007": {
    F: 172
  },
  "2008": {
    F: 143
  },
  "2009": {
    F: 123
  },
  "2010": {
    F: 114
  },
  "2011": {
    F: 79
  },
  "2012": {
    F: 61
  },
  "2013": {
    F: 47
  },
  "2014": {
    F: 46
  },
  "2015": {
    F: 32
  },
  "2016": {
    F: 34
  },
  "2017": {
    F: 34
  },
  "2018": {
    F: 32
  },
  "2019": {
    F: 25
  },
  "2020": {
    F: 22
  },
  "2021": {
    F: 18
  }
};
const Brooklyn = {
  "1996": {
    F: 12
  },
  "1997": {
    F: 13
  },
  "1999": {
    F: 19
  },
  "2000": {
    F: 52,
    M: 13
  },
  "2001": {
    F: 48,
    M: 32
  },
  "2002": {
    F: 48,
    M: 19
  },
  "2003": {
    F: 46,
    M: 34
  },
  "2004": {
    F: 62,
    M: 52
  },
  "2005": {
    F: 50,
    M: 61
  },
  "2006": {
    F: 50,
    M: 63
  },
  "2007": {
    F: 43,
    M: 53
  },
  "2008": {
    F: 60,
    M: 63
  },
  "2009": {
    F: 49,
    M: 55
  },
  "2010": {
    F: 43,
    M: 64
  },
  "2011": {
    F: 60,
    M: 45
  },
  "2012": {
    F: 63,
    M: 45
  },
  "2013": {
    F: 57,
    M: 43
  },
  "2014": {
    F: 53,
    M: 25
  },
  "2015": {
    F: 45,
    M: 25
  },
  "2016": {
    F: 46,
    M: 40
  },
  "2017": {
    F: 43,
    M: 42
  },
  "2018": {
    M: 34,
    F: 47
  },
  "2019": {
    F: 41,
    M: 26
  },
  "2020": {
    F: 38,
    M: 31
  },
  "2021": {
    F: 41,
    M: 24
  }
};
const Brooks = {
  "2021": {
    M: 14
  }
};
const Bruce = {
  "1900": {
    M: 11
  },
  "1902": {
    M: 10
  },
  "1903": {
    M: 10
  },
  "1904": {
    M: 15
  },
  "1905": {
    M: 10
  },
  "1906": {
    M: 15
  },
  "1907": {
    M: 22
  },
  "1908": {
    M: 16
  },
  "1909": {
    M: 33
  },
  "1910": {
    M: 21
  },
  "1911": {
    M: 22
  },
  "1912": {
    M: 19
  },
  "1913": {
    M: 42
  },
  "1914": {
    M: 39
  },
  "1915": {
    M: 51
  },
  "1916": {
    M: 45
  },
  "1917": {
    M: 53
  },
  "1918": {
    M: 41
  },
  "1919": {
    M: 50
  },
  "1920": {
    M: 80
  },
  "1921": {
    M: 87
  },
  "1922": {
    M: 102
  },
  "1923": {
    M: 107
  },
  "1924": {
    M: 118
  },
  "1925": {
    M: 119
  },
  "1926": {
    M: 108
  },
  "1927": {
    M: 124
  },
  "1928": {
    M: 130
  },
  "1929": {
    M: 146
  },
  "1930": {
    M: 165
  },
  "1931": {
    M: 152
  },
  "1932": {
    M: 152
  },
  "1933": {
    M: 129
  },
  "1934": {
    M: 127
  },
  "1935": {
    M: 167
  },
  "1936": {
    M: 170
  },
  "1937": {
    M: 162
  },
  "1938": {
    M: 165
  },
  "1939": {
    M: 211
  },
  "1940": {
    M: 193
  },
  "1941": {
    M: 226
  },
  "1942": {
    M: 231
  },
  "1943": {
    M: 198
  },
  "1944": {
    M: 264
  },
  "1945": {
    M: 278
  },
  "1946": {
    M: 339
  },
  "1947": {
    M: 386
  },
  "1948": {
    M: 402
  },
  "1949": {
    M: 452
  },
  "1950": {
    M: 470
  },
  "1951": {
    M: 378
  },
  "1952": {
    M: 397
  },
  "1953": {
    M: 399
  },
  "1954": {
    M: 376
  },
  "1955": {
    M: 387
  },
  "1956": {
    M: 395
  },
  "1957": {
    M: 391
  },
  "1958": {
    M: 368
  },
  "1959": {
    M: 402
  },
  "1960": {
    M: 373
  },
  "1961": {
    M: 352
  },
  "1962": {
    M: 366
  },
  "1963": {
    M: 322
  },
  "1964": {
    M: 282
  },
  "1965": {
    M: 295
  },
  "1966": {
    M: 221
  },
  "1967": {
    M: 188
  },
  "1968": {
    M: 183
  },
  "1969": {
    M: 177
  },
  "1970": {
    M: 154
  },
  "1971": {
    M: 135
  },
  "1972": {
    M: 125
  },
  "1973": {
    M: 108
  },
  "1974": {
    M: 99
  },
  "1975": {
    M: 80
  },
  "1976": {
    M: 68
  },
  "1977": {
    M: 63
  },
  "1978": {
    M: 61
  },
  "1979": {
    M: 55
  },
  "1980": {
    M: 52
  },
  "1981": {
    M: 41
  },
  "1982": {
    M: 43
  },
  "1983": {
    M: 25
  },
  "1984": {
    M: 26
  },
  "1985": {
    M: 18
  },
  "1986": {
    M: 22
  },
  "1987": {
    M: 23
  },
  "1988": {
    M: 25
  },
  "1989": {
    M: 26
  },
  "1990": {
    M: 11
  },
  "1991": {
    M: 16
  },
  "1992": {
    M: 13
  },
  "1993": {
    M: 11
  },
  "1996": {
    M: 10
  },
  "2000": {
    M: 12
  },
  "2001": {
    M: 11
  },
  "2013": {
    M: 12
  },
  "2014": {
    M: 12
  },
  "2016": {
    M: 15
  }
};
const Bruno = {
  "2002": {
    M: 11
  },
  "2004": {
    M: 16
  },
  "2006": {
    M: 11
  },
  "2007": {
    M: 15
  },
  "2008": {
    M: 17
  },
  "2012": {
    M: 12
  },
  "2013": {
    M: 11
  },
  "2016": {
    M: 13
  },
  "2019": {
    M: 10
  }
};
const Bryan = {
  "1913": {
    M: 13
  },
  "1916": {
    M: 11
  },
  "1918": {
    M: 13
  },
  "1919": {
    M: 14
  },
  "1920": {
    M: 11
  },
  "1921": {
    M: 21
  },
  "1922": {
    M: 21
  },
  "1923": {
    M: 26
  },
  "1924": {
    M: 28
  },
  "1925": {
    M: 25
  },
  "1926": {
    M: 32
  },
  "1927": {
    M: 28
  },
  "1928": {
    M: 36
  },
  "1929": {
    M: 32
  },
  "1930": {
    M: 44
  },
  "1931": {
    M: 66
  },
  "1932": {
    M: 64
  },
  "1933": {
    M: 64
  },
  "1934": {
    M: 59
  },
  "1935": {
    M: 66
  },
  "1936": {
    M: 61
  },
  "1937": {
    M: 53
  },
  "1938": {
    M: 70
  },
  "1939": {
    M: 88
  },
  "1940": {
    M: 97
  },
  "1941": {
    M: 92
  },
  "1942": {
    M: 73
  },
  "1943": {
    M: 66
  },
  "1944": {
    M: 78
  },
  "1945": {
    M: 96
  },
  "1946": {
    M: 105
  },
  "1947": {
    M: 97
  },
  "1948": {
    M: 117
  },
  "1949": {
    M: 99
  },
  "1950": {
    M: 103
  },
  "1951": {
    M: 96
  },
  "1952": {
    M: 108
  },
  "1953": {
    M: 89
  },
  "1954": {
    M: 79
  },
  "1955": {
    M: 98
  },
  "1956": {
    M: 94
  },
  "1957": {
    M: 110
  },
  "1958": {
    M: 79
  },
  "1959": {
    M: 88
  },
  "1960": {
    M: 84
  },
  "1961": {
    M: 93
  },
  "1962": {
    M: 105
  },
  "1963": {
    M: 91
  },
  "1964": {
    M: 74
  },
  "1965": {
    M: 71
  },
  "1966": {
    M: 75
  },
  "1967": {
    M: 78
  },
  "1968": {
    M: 73
  },
  "1969": {
    M: 59
  },
  "1970": {
    M: 84
  },
  "1971": {
    M: 68
  },
  "1972": {
    M: 59
  },
  "1973": {
    M: 59
  },
  "1974": {
    M: 49
  },
  "1975": {
    M: 60
  },
  "1976": {
    M: 43
  },
  "1977": {
    M: 37
  },
  "1978": {
    M: 37
  },
  "1979": {
    M: 37
  },
  "1980": {
    M: 29
  },
  "1981": {
    M: 35
  },
  "1982": {
    M: 28
  },
  "1983": {
    M: 21
  },
  "1984": {
    M: 26
  },
  "1985": {
    M: 23
  },
  "1986": {
    M: 22
  },
  "1987": {
    M: 15
  },
  "1988": {
    M: 20
  },
  "1989": {
    M: 14
  },
  "1991": {
    M: 13
  },
  "1992": {
    M: 10
  },
  "1993": {
    M: 12
  },
  "1995": {
    M: 12
  },
  "2002": {
    M: 13
  },
  "2006": {
    M: 10
  },
  "2008": {
    M: 11
  },
  "2010": {
    M: 13
  }
};
const Bryce = {
  "1945": {
    M: 10
  },
  "1946": {
    M: 14
  },
  "1947": {
    M: 13
  },
  "1948": {
    M: 15
  },
  "1949": {
    M: 12
  },
  "1950": {
    M: 15
  },
  "1951": {
    M: 12
  },
  "1952": {
    M: 19
  },
  "1953": {
    M: 20
  },
  "1954": {
    M: 14
  },
  "1955": {
    M: 30
  },
  "1956": {
    M: 33
  },
  "1957": {
    M: 27
  },
  "1958": {
    M: 40
  },
  "1959": {
    M: 36
  },
  "1960": {
    M: 42
  },
  "1961": {
    M: 26
  },
  "1962": {
    M: 42
  },
  "1963": {
    M: 43
  },
  "1964": {
    M: 37
  },
  "1965": {
    M: 34
  },
  "1966": {
    M: 40
  },
  "1967": {
    M: 35
  },
  "1968": {
    M: 43
  },
  "1969": {
    M: 50
  },
  "1970": {
    M: 41
  },
  "1971": {
    M: 53
  },
  "1972": {
    M: 45
  },
  "1973": {
    M: 54
  },
  "1974": {
    M: 45
  },
  "1975": {
    M: 46
  },
  "1976": {
    M: 40
  },
  "1977": {
    M: 36
  },
  "1978": {
    M: 35
  },
  "1979": {
    M: 26
  },
  "1980": {
    M: 41
  },
  "1981": {
    M: 37
  },
  "1982": {
    M: 30
  },
  "1983": {
    M: 29
  },
  "1984": {
    M: 29
  },
  "1985": {
    M: 30
  },
  "1986": {
    M: 32
  },
  "1987": {
    M: 43
  },
  "1988": {
    M: 48
  },
  "1989": {
    M: 39
  },
  "1990": {
    M: 41
  },
  "1991": {
    M: 41
  },
  "1992": {
    M: 33
  },
  "1993": {
    M: 28
  },
  "1994": {
    M: 35
  },
  "1995": {
    M: 38
  },
  "1996": {
    M: 25
  },
  "1997": {
    M: 29
  },
  "1998": {
    M: 12
  },
  "1999": {
    M: 18
  },
  "2000": {
    M: 11
  },
  "2001": {
    M: 10
  },
  "2002": {
    M: 10
  },
  "2003": {
    M: 18
  },
  "2004": {
    M: 10
  },
  "2005": {
    M: 13
  },
  "2007": {
    M: 14
  },
  "2008": {
    M: 12
  },
  "2011": {
    M: 11
  },
  "2015": {
    M: 10
  }
};
const Brylee = {
  "2001": {
    F: 10
  },
  "2003": {
    F: 10
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 13
  },
  "2006": {
    F: 11
  },
  "2008": {
    F: 13
  },
  "2009": {
    F: 11
  },
  "2010": {
    F: 10
  },
  "2017": {
    F: 10
  }
};
const Bryn = {
  "1988": {
    M: 10
  },
  "1989": {
    M: 14
  },
  "1991": {
    M: 10
  },
  "1993": {
    M: 10
  },
  "1994": {
    M: 13
  },
  "1997": {
    M: 12
  },
  "1998": {
    M: 14
  },
  "1999": {
    M: 21
  },
  "2000": {
    M: 19
  },
  "2001": {
    M: 15
  },
  "2002": {
    M: 20
  },
  "2003": {
    M: 18
  },
  "2004": {
    M: 18
  },
  "2005": {
    M: 15
  },
  "2006": {
    M: 21
  },
  "2007": {
    M: 12
  },
  "2008": {
    M: 10
  },
  "2009": {
    M: 15
  },
  "2011": {
    M: 14
  },
  "2014": {
    M: 13
  },
  "2015": {
    M: 14
  },
  "2016": {
    M: 11
  },
  "2017": {
    M: 14
  },
  "2019": {
    M: 14
  },
  "2020": {
    M: 15
  },
  "2021": {
    M: 14
  }
};
const Bryony = {
  "1997": {
    F: 12
  }
};
const Bryson = {
  "2017": {
    M: 11
  },
  "2018": {
    M: 17
  },
  "2019": {
    M: 10
  }
};
const Byron = {
  "1970": {
    M: 13
  },
  "1972": {
    M: 10
  },
  "1973": {
    M: 11
  },
  "1974": {
    M: 13
  },
  "1984": {
    M: 43
  },
  "1985": {
    M: 34
  },
  "1986": {
    M: 21
  },
  "1987": {
    M: 11
  },
  "1988": {
    M: 10
  },
  "1989": {
    M: 31
  },
  "1990": {
    M: 12
  },
  "1991": {
    M: 18
  },
  "1992": {
    M: 15
  },
  "1993": {
    M: 17
  },
  "1994": {
    M: 12
  },
  "1999": {
    M: 13
  },
  "2000": {
    M: 31
  },
  "2001": {
    M: 21
  },
  "2002": {
    M: 31
  },
  "2003": {
    M: 20
  },
  "2004": {
    M: 20
  },
  "2005": {
    M: 20
  },
  "2007": {
    M: 24
  },
  "2008": {
    M: 14
  },
  "2011": {
    M: 13
  },
  "2016": {
    M: 11
  }
};
const Cade = {
  "1998": {
    M: 11
  },
  "1999": {
    M: 15
  },
  "2000": {
    M: 14
  },
  "2001": {
    M: 16
  },
  "2003": {
    M: 18
  },
  "2004": {
    M: 16
  },
  "2005": {
    M: 14
  },
  "2006": {
    M: 10
  },
  "2007": {
    M: 24
  },
  "2008": {
    M: 20
  },
  "2010": {
    M: 17
  },
  "2012": {
    M: 20
  },
  "2013": {
    M: 14
  }
};
const Caden = {
  "2006": {
    M: 17
  },
  "2007": {
    M: 17
  },
  "2008": {
    M: 15
  },
  "2009": {
    M: 14
  },
  "2010": {
    M: 12
  },
  "2011": {
    M: 13
  },
  "2012": {
    M: 11
  },
  "2014": {
    M: 16
  },
  "2015": {
    M: 18
  },
  "2016": {
    M: 19
  },
  "2017": {
    M: 24
  },
  "2018": {
    M: 21
  },
  "2019": {
    M: 15
  },
  "2020": {
    M: 16
  },
  "2021": {
    M: 10
  }
};
const Cadence = {
  "2006": {
    F: 16
  },
  "2009": {
    F: 14
  },
  "2012": {
    F: 11
  },
  "2016": {
    F: 10
  },
  "2018": {
    F: 11
  }
};
const Caelan = {
  "2008": {
    M: 11
  }
};
const Caiden = {
  "2010": {
    M: 11
  },
  "2012": {
    M: 10
  }
};
const Cain = {
  "1983": {
    M: 12
  },
  "1988": {
    M: 15
  },
  "1990": {
    M: 10
  },
  "1994": {
    M: 11
  },
  "1995": {
    M: 12
  },
  "1996": {
    M: 10
  },
  "1997": {
    M: 10
  },
  "1998": {
    M: 11
  }
};
const Caine = {
  "1975": {
    M: 11
  },
  "1981": {
    M: 13
  }
};
const Cairo = {
  "2004": {
    M: 11
  },
  "2005": {
    M: 10
  },
  "2007": {
    M: 12
  },
  "2009": {
    M: 21
  },
  "2010": {
    M: 11
  },
  "2011": {
    M: 10
  },
  "2012": {
    M: 12
  },
  "2013": {
    M: 13
  },
  "2014": {
    M: 16
  },
  "2015": {
    M: 16
  },
  "2016": {
    M: 18
  },
  "2017": {
    M: 22
  },
  "2018": {
    M: 19
  },
  "2019": {
    M: 26
  },
  "2020": {
    M: 23
  },
  "2021": {
    M: 25
  }
};
const Caitlin = {
  "1985": {
    F: 11
  },
  "1987": {
    F: 12
  },
  "1988": {
    F: 32
  },
  "1989": {
    F: 58
  },
  "1990": {
    F: 80
  },
  "1991": {
    F: 139
  },
  "1992": {
    F: 110
  },
  "1993": {
    F: 139
  },
  "1994": {
    F: 150
  },
  "1995": {
    F: 185
  },
  "1996": {
    F: 144
  },
  "1997": {
    F: 201
  },
  "1998": {
    F: 203
  },
  "1999": {
    F: 230
  },
  "2000": {
    F: 206
  },
  "2001": {
    F: 221
  },
  "2002": {
    F: 199
  },
  "2003": {
    F: 186
  },
  "2004": {
    F: 126
  },
  "2005": {
    F: 147
  },
  "2006": {
    F: 120
  },
  "2007": {
    F: 148
  },
  "2008": {
    F: 97
  },
  "2009": {
    F: 89
  },
  "2010": {
    F: 65
  },
  "2011": {
    F: 58
  },
  "2012": {
    F: 41
  },
  "2013": {
    F: 61
  },
  "2014": {
    F: 45
  },
  "2015": {
    F: 22
  },
  "2016": {
    F: 12
  },
  "2017": {
    F: 12
  },
  "2018": {
    F: 18
  },
  "2019": {
    F: 12
  }
};
const Caitlyn = {
  "1992": {
    F: 12
  },
  "1993": {
    F: 13
  },
  "1994": {
    F: 12
  },
  "1995": {
    F: 21
  },
  "1996": {
    F: 16
  },
  "1997": {
    F: 37
  },
  "1998": {
    F: 35
  },
  "1999": {
    F: 53
  },
  "2000": {
    F: 44
  },
  "2001": {
    F: 47
  },
  "2002": {
    F: 50
  },
  "2003": {
    F: 36
  },
  "2004": {
    F: 53
  },
  "2005": {
    F: 51
  },
  "2006": {
    F: 54
  },
  "2007": {
    F: 63
  },
  "2008": {
    F: 46
  },
  "2009": {
    F: 40
  },
  "2010": {
    F: 43
  },
  "2011": {
    F: 29
  },
  "2012": {
    F: 33
  },
  "2013": {
    F: 30
  },
  "2014": {
    F: 18
  },
  "2015": {
    F: 25
  },
  "2016": {
    F: 15
  },
  "2018": {
    F: 12
  }
};
const Caius = {
  "2010": {
    M: 10
  },
  "2016": {
    M: 13
  },
  "2020": {
    M: 11
  }
};
const Calais = {
  "2004": {
    M: 13
  },
  "2005": {
    F: 12
  },
  "2006": {
    F: 11
  },
  "2007": {
    F: 14
  },
  "2008": {
    F: 15
  },
  "2009": {
    F: 13
  },
  "2010": {
    F: 10
  },
  "2011": {
    F: 11
  },
  "2012": {
    F: 12
  }
};
const Caleb = {
  "1974": {
    M: 13
  },
  "1976": {
    M: 19
  },
  "1977": {
    M: 10
  },
  "1978": {
    M: 16
  },
  "1979": {
    M: 14
  },
  "1980": {
    M: 20
  },
  "1981": {
    M: 22
  },
  "1982": {
    M: 50
  },
  "1983": {
    M: 67
  },
  "1984": {
    M: 56
  },
  "1985": {
    M: 62
  },
  "1986": {
    M: 99
  },
  "1987": {
    M: 81
  },
  "1988": {
    M: 62
  },
  "1989": {
    M: 80
  },
  "1990": {
    M: 81
  },
  "1991": {
    M: 82
  },
  "1992": {
    M: 106
  },
  "1993": {
    M: 116
  },
  "1994": {
    M: 127
  },
  "1995": {
    M: 110
  },
  "1996": {
    M: 208
  },
  "1997": {
    M: 189
  },
  "1998": {
    M: 226
  },
  "1999": {
    M: 269
  },
  "2000": {
    M: 298
  },
  "2001": {
    M: 286
  },
  "2002": {
    M: 271
  },
  "2003": {
    M: 274
  },
  "2004": {
    M: 264
  },
  "2005": {
    M: 240
  },
  "2006": {
    M: 219
  },
  "2007": {
    M: 197
  },
  "2008": {
    M: 167
  },
  "2009": {
    M: 159
  },
  "2010": {
    M: 175
  },
  "2011": {
    M: 137
  },
  "2012": {
    M: 129
  },
  "2013": {
    M: 131
  },
  "2014": {
    M: 109
  },
  "2015": {
    M: 101
  },
  "2016": {
    M: 85
  },
  "2017": {
    M: 95
  },
  "2018": {
    M: 73
  },
  "2019": {
    M: 101
  },
  "2020": {
    M: 91
  },
  "2021": {
    M: 80
  }
};
const Callan = {
  "1973": {
    M: 13
  }
};
const Callum = {
  "1968": {
    M: 14
  },
  "1969": {
    M: 12
  },
  "1970": {
    M: 11
  },
  "1971": {
    M: 25
  },
  "1972": {
    M: 31
  },
  "1973": {
    M: 39
  },
  "1974": {
    M: 36
  },
  "1975": {
    M: 34
  },
  "1976": {
    M: 35
  },
  "1977": {
    M: 26
  },
  "1978": {
    M: 31
  },
  "1979": {
    M: 35
  },
  "1980": {
    M: 39
  },
  "1981": {
    M: 24
  },
  "1982": {
    M: 34
  },
  "1983": {
    M: 45
  },
  "1984": {
    M: 38
  },
  "1985": {
    M: 42
  },
  "1986": {
    M: 35
  },
  "1987": {
    M: 41
  },
  "1988": {
    M: 68
  },
  "1989": {
    M: 69
  },
  "1990": {
    M: 63
  },
  "1991": {
    M: 108
  },
  "1992": {
    M: 105
  },
  "1993": {
    M: 107
  },
  "1994": {
    M: 151
  },
  "1995": {
    M: 146
  },
  "1996": {
    M: 151
  },
  "1997": {
    M: 151
  },
  "1998": {
    M: 160
  },
  "1999": {
    M: 156
  },
  "2000": {
    M: 164
  },
  "2001": {
    M: 113
  },
  "2002": {
    M: 102
  },
  "2003": {
    M: 106
  },
  "2004": {
    M: 83
  },
  "2005": {
    M: 78
  },
  "2006": {
    M: 92
  },
  "2007": {
    M: 74
  },
  "2008": {
    M: 62
  },
  "2009": {
    M: 67
  },
  "2010": {
    M: 45
  },
  "2011": {
    M: 47
  },
  "2012": {
    M: 37
  },
  "2013": {
    M: 26
  },
  "2014": {
    M: 26
  },
  "2015": {
    M: 16
  },
  "2016": {
    M: 23
  },
  "2017": {
    M: 17
  },
  "2018": {
    M: 18
  },
  "2019": {
    M: 13
  },
  "2020": {
    M: 13
  },
  "2021": {
    M: 15
  }
};
const Calum = {
  "1969": {
    M: 10
  },
  "1991": {
    M: 13
  },
  "1996": {
    M: 12
  },
  "1997": {
    M: 10
  },
  "1999": {
    M: 12
  },
  "2000": {
    M: 15
  }
};
const Calvin = {
  "1965": {
    M: 10
  },
  "1967": {
    M: 12
  },
  "1968": {
    M: 11
  },
  "1969": {
    M: 12
  },
  "1971": {
    M: 10
  },
  "1972": {
    M: 13
  },
  "1973": {
    M: 19
  },
  "1975": {
    M: 12
  },
  "1984": {
    M: 10
  },
  "1986": {
    M: 10
  },
  "1987": {
    M: 10
  },
  "1989": {
    M: 11
  },
  "1993": {
    M: 10
  },
  "1995": {
    M: 11
  },
  "1996": {
    M: 21
  },
  "1997": {
    M: 18
  },
  "1998": {
    M: 19
  },
  "1999": {
    M: 21
  },
  "2000": {
    M: 14
  },
  "2001": {
    M: 11
  },
  "2002": {
    M: 13
  },
  "2004": {
    M: 18
  },
  "2005": {
    M: 12
  },
  "2008": {
    M: 11
  },
  "2009": {
    M: 11
  },
  "2010": {
    M: 11
  },
  "2014": {
    M: 10
  },
  "2015": {
    M: 11
  }
};
const Cameron = {
  "1952": {
    M: 10
  },
  "1956": {
    M: 10
  },
  "1957": {
    M: 12
  },
  "1958": {
    M: 10
  },
  "1959": {
    M: 11
  },
  "1960": {
    M: 12
  },
  "1961": {
    M: 11
  },
  "1962": {
    M: 20
  },
  "1963": {
    M: 25
  },
  "1964": {
    M: 20
  },
  "1965": {
    M: 28
  },
  "1966": {
    M: 34
  },
  "1967": {
    M: 34
  },
  "1968": {
    M: 39
  },
  "1969": {
    M: 48
  },
  "1970": {
    M: 62
  },
  "1971": {
    M: 88
  },
  "1972": {
    M: 105
  },
  "1973": {
    M: 83
  },
  "1974": {
    M: 97
  },
  "1975": {
    M: 114
  },
  "1976": {
    M: 100
  },
  "1977": {
    M: 109
  },
  "1978": {
    M: 115
  },
  "1979": {
    M: 117
  },
  "1980": {
    M: 129
  },
  "1981": {
    M: 126
  },
  "1982": {
    M: 147
  },
  "1983": {
    M: 144
  },
  "1984": {
    M: 129
  },
  "1985": {
    M: 157
  },
  "1986": {
    M: 164
  },
  "1987": {
    M: 169
  },
  "1988": {
    M: 174
  },
  "1989": {
    M: 254
  },
  "1990": {
    M: 299
  },
  "1991": {
    M: 259
  },
  "1992": {
    M: 280
  },
  "1993": {
    M: 327
  },
  "1994": {
    M: 305
  },
  "1995": {
    M: 276
  },
  "1996": {
    M: 239
  },
  "1997": {
    M: 294
  },
  "1998": {
    M: 310
  },
  "1999": {
    M: 252
  },
  "2000": {
    M: 309
  },
  "2001": {
    M: 239
  },
  "2002": {
    M: 186
  },
  "2003": {
    M: 211
  },
  "2004": {
    M: 184
  },
  "2005": {
    M: 191
  },
  "2006": {
    M: 146
  },
  "2007": {
    M: 169
  },
  "2008": {
    M: 133
  },
  "2009": {
    F: 10,
    M: 102
  },
  "2010": {
    F: 14,
    M: 132
  },
  "2011": {
    F: 10,
    M: 110
  },
  "2012": {
    M: 70
  },
  "2013": {
    M: 75
  },
  "2014": {
    M: 65
  },
  "2015": {
    M: 60
  },
  "2016": {
    M: 41
  },
  "2017": {
    M: 37
  },
  "2018": {
    M: 26
  },
  "2019": {
    M: 25
  },
  "2020": {
    M: 20
  },
  "2021": {
    M: 24
  }
};
const Camilla = {
  "1986": {
    F: 10
  },
  "2021": {
    F: 11
  }
};
const Camille = {
  "1971": {
    F: 11
  },
  "1980": {
    F: 14
  },
  "1982": {
    F: 10
  },
  "1984": {
    F: 10
  },
  "1985": {
    F: 17
  },
  "1987": {
    F: 10
  },
  "1988": {
    F: 12
  },
  "1990": {
    F: 13
  },
  "1991": {
    F: 10
  }
};
const Campbell = {
  "1946": {
    M: 11
  },
  "1947": {
    M: 11
  },
  "1949": {
    M: 10
  },
  "1951": {
    M: 12
  },
  "1953": {
    M: 12
  },
  "1954": {
    M: 13
  },
  "1956": {
    M: 13
  },
  "1957": {
    M: 11
  },
  "1959": {
    M: 12
  },
  "1960": {
    M: 16
  },
  "1961": {
    M: 21
  },
  "1962": {
    M: 16
  },
  "1963": {
    M: 23
  },
  "1964": {
    M: 21
  },
  "1965": {
    M: 20
  },
  "1966": {
    M: 23
  },
  "1967": {
    M: 22
  },
  "1968": {
    M: 24
  },
  "1969": {
    M: 30
  },
  "1970": {
    M: 37
  },
  "1971": {
    M: 48
  },
  "1972": {
    M: 46
  },
  "1973": {
    M: 45
  },
  "1974": {
    M: 44
  },
  "1975": {
    M: 44
  },
  "1976": {
    M: 38
  },
  "1977": {
    M: 37
  },
  "1978": {
    M: 32
  },
  "1979": {
    M: 24
  },
  "1980": {
    M: 37
  },
  "1981": {
    M: 24
  },
  "1982": {
    M: 24
  },
  "1983": {
    M: 25
  },
  "1984": {
    M: 20
  },
  "1985": {
    M: 26
  },
  "1986": {
    M: 47
  },
  "1987": {
    M: 36
  },
  "1988": {
    M: 22
  },
  "1989": {
    M: 30
  },
  "1990": {
    M: 35
  },
  "1991": {
    M: 50
  },
  "1992": {
    M: 33
  },
  "1993": {
    M: 57
  },
  "1994": {
    M: 42
  },
  "1995": {
    M: 64
  },
  "1996": {
    M: 61
  },
  "1997": {
    M: 43
  },
  "1998": {
    M: 63
  },
  "1999": {
    M: 67
  },
  "2000": {
    M: 57
  },
  "2001": {
    M: 49
  },
  "2002": {
    M: 53
  },
  "2003": {
    M: 46
  },
  "2004": {
    M: 47
  },
  "2005": {
    M: 33
  },
  "2006": {
    M: 44
  },
  "2007": {
    M: 31
  },
  "2008": {
    M: 38
  },
  "2009": {
    M: 30
  },
  "2010": {
    M: 25
  },
  "2011": {
    M: 19
  },
  "2012": {
    M: 15
  },
  "2013": {
    M: 19
  },
  "2014": {
    M: 11
  },
  "2016": {
    M: 12
  }
};
const Camryn = {
  "2001": {
    F: 16
  },
  "2003": {
    F: 12
  },
  "2008": {
    F: 13
  },
  "2009": {
    F: 13
  },
  "2011": {
    F: 14
  }
};
const Candace = {
  "1983": {
    F: 11
  },
  "1984": {
    F: 11
  },
  "1986": {
    F: 11
  },
  "1987": {
    F: 15
  },
  "1988": {
    F: 17
  },
  "1989": {
    F: 14
  },
  "1990": {
    F: 11
  },
  "1991": {
    F: 21
  }
};
const Candice = {
  "1976": {
    F: 12
  },
  "1980": {
    F: 17
  },
  "1981": {
    F: 35
  },
  "1982": {
    F: 26
  },
  "1983": {
    F: 45
  },
  "1984": {
    F: 28
  },
  "1985": {
    F: 27
  },
  "1986": {
    F: 39
  },
  "1987": {
    F: 35
  },
  "1988": {
    F: 32
  },
  "1989": {
    F: 28
  },
  "1990": {
    F: 28
  },
  "1991": {
    F: 19
  },
  "1992": {
    F: 14
  },
  "1993": {
    F: 12
  },
  "1994": {
    F: 10
  }
};
const Capri = {
  "2007": {
    F: 11
  },
  "2009": {
    F: 12
  },
  "2012": {
    F: 11
  }
};
const Caprice = {
  "2002": {
    F: 10
  },
  "2004": {
    F: 12
  },
  "2008": {
    F: 10
  }
};
const Cara = {
  "1967": {
    F: 10
  },
  "1968": {
    F: 10
  },
  "1969": {
    F: 17
  },
  "1970": {
    F: 18
  },
  "1971": {
    F: 15
  },
  "1972": {
    F: 27
  },
  "1973": {
    F: 26
  },
  "1974": {
    F: 20
  },
  "1975": {
    F: 28
  },
  "1976": {
    F: 25
  },
  "1977": {
    F: 27
  },
  "1978": {
    F: 20
  },
  "1979": {
    F: 24
  },
  "1980": {
    F: 21
  },
  "1981": {
    F: 30
  },
  "1982": {
    F: 27
  },
  "1983": {
    F: 28
  },
  "1984": {
    F: 24
  },
  "1985": {
    F: 32
  },
  "1986": {
    F: 29
  },
  "1987": {
    F: 21
  },
  "1988": {
    F: 37
  },
  "1989": {
    F: 23
  },
  "1990": {
    F: 20
  },
  "1991": {
    F: 20
  },
  "1992": {
    F: 18
  },
  "1993": {
    F: 16
  },
  "1994": {
    F: 16
  },
  "1995": {
    F: 13
  },
  "1997": {
    F: 11
  },
  "1998": {
    F: 15
  },
  "2000": {
    F: 13
  },
  "2003": {
    F: 11
  },
  "2005": {
    F: 14
  },
  "2006": {
    F: 20
  },
  "2007": {
    F: 13
  },
  "2009": {
    F: 10
  },
  "2010": {
    F: 11
  },
  "2011": {
    F: 15
  },
  "2012": {
    F: 17
  },
  "2013": {
    F: 14
  },
  "2015": {
    F: 23
  },
  "2016": {
    F: 14
  },
  "2017": {
    F: 15
  },
  "2018": {
    F: 17
  },
  "2019": {
    F: 10
  }
};
const Carey = {
  "1956": {
    M: 10
  },
  "1960": {
    F: 10
  },
  "1961": {
    F: 10
  },
  "1962": {
    F: 14,
    M: 13
  },
  "1963": {
    F: 13,
    M: 10
  },
  "1964": {
    F: 11
  },
  "1965": {
    F: 10,
    M: 10
  },
  "1968": {
    M: 11
  },
  "1969": {
    M: 10
  },
  "1970": {
    M: 13
  },
  "1971": {
    M: 12
  },
  "1972": {
    M: 10
  },
  "1973": {
    M: 15
  },
  "1974": {
    M: 12
  },
  "1976": {
    M: 14
  }
};
const Carissa = {
  "1974": {
    F: 10
  },
  "1978": {
    F: 13
  },
  "1979": {
    F: 10
  },
  "1980": {
    F: 11
  },
  "1982": {
    F: 11
  },
  "1983": {
    F: 11
  },
  "1984": {
    F: 11
  },
  "1985": {
    F: 10
  },
  "1987": {
    F: 12
  },
  "1990": {
    F: 11
  },
  "1992": {
    F: 16
  }
};
const Carl = {
  "1900": {
    M: 10
  },
  "1903": {
    M: 11
  },
  "1904": {
    M: 12
  },
  "1905": {
    M: 14
  },
  "1906": {
    M: 14
  },
  "1907": {
    M: 14
  },
  "1908": {
    M: 16
  },
  "1909": {
    M: 15
  },
  "1910": {
    M: 11
  },
  "1911": {
    M: 19
  },
  "1912": {
    M: 17
  },
  "1913": {
    M: 19
  },
  "1914": {
    M: 20
  },
  "1929": {
    M: 10
  },
  "1934": {
    M: 11
  },
  "1936": {
    M: 13
  },
  "1937": {
    M: 19
  },
  "1938": {
    M: 12
  },
  "1940": {
    M: 20
  },
  "1942": {
    M: 10
  },
  "1943": {
    M: 13
  },
  "1944": {
    M: 17
  },
  "1946": {
    M: 19
  },
  "1947": {
    M: 17
  },
  "1948": {
    M: 14
  },
  "1949": {
    M: 20
  },
  "1950": {
    M: 24
  },
  "1951": {
    M: 20
  },
  "1952": {
    M: 21
  },
  "1953": {
    M: 28
  },
  "1954": {
    M: 36
  },
  "1955": {
    M: 33
  },
  "1956": {
    M: 37
  },
  "1957": {
    M: 39
  },
  "1958": {
    M: 52
  },
  "1959": {
    M: 60
  },
  "1960": {
    M: 58
  },
  "1961": {
    M: 74
  },
  "1962": {
    M: 68
  },
  "1963": {
    M: 76
  },
  "1964": {
    M: 60
  },
  "1965": {
    M: 82
  },
  "1966": {
    M: 84
  },
  "1967": {
    M: 114
  },
  "1968": {
    M: 110
  },
  "1969": {
    M: 134
  },
  "1970": {
    M: 130
  },
  "1971": {
    M: 139
  },
  "1972": {
    M: 129
  },
  "1973": {
    M: 141
  },
  "1974": {
    M: 138
  },
  "1975": {
    M: 124
  },
  "1976": {
    M: 132
  },
  "1977": {
    M: 131
  },
  "1978": {
    M: 88
  },
  "1979": {
    M: 125
  },
  "1980": {
    M: 108
  },
  "1981": {
    M: 141
  },
  "1982": {
    M: 98
  },
  "1983": {
    M: 124
  },
  "1984": {
    M: 91
  },
  "1985": {
    M: 87
  },
  "1986": {
    M: 73
  },
  "1987": {
    M: 78
  },
  "1988": {
    M: 83
  },
  "1989": {
    M: 58
  },
  "1990": {
    M: 56
  },
  "1991": {
    M: 57
  },
  "1992": {
    M: 54
  },
  "1993": {
    M: 31
  },
  "1994": {
    M: 39
  },
  "1995": {
    M: 27
  },
  "1996": {
    M: 28
  },
  "1997": {
    M: 25
  },
  "1998": {
    M: 14
  },
  "1999": {
    M: 13
  },
  "2000": {
    M: 15
  },
  "2001": {
    M: 18
  },
  "2002": {
    M: 10
  },
  "2004": {
    M: 11
  }
};
const Carla = {
  "1956": {
    F: 10
  },
  "1958": {
    F: 11
  },
  "1960": {
    F: 15
  },
  "1962": {
    F: 10
  },
  "1963": {
    F: 17
  },
  "1964": {
    F: 20
  },
  "1965": {
    F: 19
  },
  "1966": {
    F: 30
  },
  "1967": {
    F: 33
  },
  "1968": {
    F: 32
  },
  "1969": {
    F: 47
  },
  "1970": {
    F: 40
  },
  "1971": {
    F: 49
  },
  "1972": {
    F: 39
  },
  "1973": {
    F: 60
  },
  "1974": {
    F: 83
  },
  "1975": {
    F: 57
  },
  "1976": {
    F: 57
  },
  "1977": {
    F: 62
  },
  "1978": {
    F: 46
  },
  "1979": {
    F: 51
  },
  "1980": {
    F: 64
  },
  "1981": {
    F: 43
  },
  "1982": {
    F: 39
  },
  "1983": {
    F: 42
  },
  "1984": {
    F: 36
  },
  "1985": {
    F: 34
  },
  "1986": {
    F: 23
  },
  "1987": {
    F: 24
  },
  "1988": {
    F: 32
  },
  "1989": {
    F: 27
  },
  "1990": {
    F: 13
  },
  "1991": {
    F: 11
  },
  "1992": {
    F: 10
  },
  "2009": {
    F: 10
  }
};
const Carleen = {
  "1966": {
    F: 10
  },
  "1970": {
    F: 11
  }
};
const Carlene = {
  "1962": {
    F: 10
  },
  "1965": {
    F: 16
  },
  "1966": {
    F: 12
  },
  "1967": {
    F: 11
  },
  "1968": {
    F: 11
  },
  "1969": {
    F: 13
  },
  "1971": {
    F: 14
  },
  "1972": {
    F: 10
  },
  "1973": {
    F: 14
  },
  "1974": {
    F: 14
  },
  "1975": {
    F: 15
  },
  "1976": {
    F: 12
  }
};
const Carley = {
  "1979": {
    F: 11
  }
};
const Carlo = {
  "2009": {
    M: 11
  }
};
const Carlos = {
  "1971": {
    M: 11
  },
  "1973": {
    M: 14
  },
  "1975": {
    M: 15
  },
  "1976": {
    M: 18
  },
  "1977": {
    M: 13
  },
  "1979": {
    M: 16
  },
  "1980": {
    M: 11
  },
  "1981": {
    M: 17
  },
  "1982": {
    M: 12
  },
  "1983": {
    M: 12
  },
  "1984": {
    M: 12
  },
  "1985": {
    M: 13
  },
  "1986": {
    M: 17
  },
  "1987": {
    M: 19
  },
  "1988": {
    M: 17
  },
  "1989": {
    M: 15
  },
  "1990": {
    M: 13
  },
  "1991": {
    M: 28
  },
  "1992": {
    M: 18
  },
  "1993": {
    M: 15
  },
  "1994": {
    M: 17
  },
  "1995": {
    M: 17
  },
  "1996": {
    M: 18
  },
  "1997": {
    M: 41
  },
  "1998": {
    M: 50
  },
  "1999": {
    M: 35
  },
  "2000": {
    M: 39
  },
  "2001": {
    M: 40
  },
  "2002": {
    M: 22
  },
  "2003": {
    M: 47
  },
  "2004": {
    M: 64
  },
  "2005": {
    M: 47
  },
  "2006": {
    M: 57
  },
  "2007": {
    M: 44
  },
  "2008": {
    M: 45
  },
  "2009": {
    M: 37
  },
  "2010": {
    M: 45
  },
  "2011": {
    M: 39
  },
  "2012": {
    M: 29
  },
  "2013": {
    M: 31
  },
  "2014": {
    M: 29
  },
  "2015": {
    M: 22
  },
  "2016": {
    M: 29
  },
  "2017": {
    M: 18
  },
  "2018": {
    M: 20
  },
  "2019": {
    M: 11
  },
  "2020": {
    M: 15
  },
  "2021": {
    M: 12
  }
};
const Carly = {
  "1974": {
    F: 11
  },
  "1975": {
    F: 18
  },
  "1976": {
    F: 14
  },
  "1977": {
    F: 27
  },
  "1978": {
    F: 19
  },
  "1979": {
    F: 26
  },
  "1980": {
    F: 22
  },
  "1981": {
    F: 30
  },
  "1982": {
    F: 19
  },
  "1983": {
    F: 20
  },
  "1984": {
    F: 16
  },
  "1985": {
    F: 20
  },
  "1986": {
    F: 18
  },
  "1987": {
    F: 19
  },
  "1988": {
    F: 15
  },
  "1989": {
    F: 31
  },
  "1990": {
    F: 14
  },
  "1991": {
    F: 10
  },
  "1996": {
    F: 16
  },
  "1999": {
    F: 11
  },
  "2007": {
    F: 11
  },
  "2009": {
    F: 12
  },
  "2010": {
    F: 11
  },
  "2011": {
    F: 12
  },
  "2013": {
    F: 11
  },
  "2014": {
    F: 11
  },
  "2018": {
    F: 14
  }
};
const Carmel = {
  "1954": {
    F: 15
  },
  "1955": {
    F: 21
  },
  "1956": {
    F: 13
  },
  "1957": {
    F: 12
  },
  "1958": {
    F: 19
  },
  "1959": {
    F: 25
  },
  "1960": {
    F: 24
  },
  "1961": {
    F: 15
  },
  "1962": {
    F: 17
  },
  "1963": {
    F: 19
  },
  "1964": {
    F: 15
  },
  "1965": {
    F: 13
  },
  "1966": {
    F: 11
  },
  "1967": {
    F: 12
  },
  "1968": {
    F: 14
  },
  "1969": {
    F: 14
  },
  "1970": {
    F: 11
  },
  "1971": {
    F: 17
  },
  "1972": {
    F: 14
  },
  "1973": {
    F: 18
  },
  "1974": {
    F: 13
  },
  "1975": {
    F: 13
  }
};
const Carmen = {
  "1958": {
    F: 15
  },
  "1962": {
    F: 12
  },
  "1963": {
    F: 13
  },
  "1964": {
    F: 12
  },
  "1965": {
    F: 17
  },
  "1966": {
    F: 28
  },
  "1967": {
    F: 33
  },
  "1968": {
    F: 36
  },
  "1969": {
    F: 46
  },
  "1970": {
    F: 57
  },
  "1971": {
    F: 62
  },
  "1972": {
    F: 75
  },
  "1973": {
    F: 93
  },
  "1974": {
    F: 65
  },
  "1975": {
    F: 39
  },
  "1976": {
    F: 20
  },
  "1977": {
    F: 11
  },
  "1980": {
    F: 10
  },
  "1983": {
    F: 10
  },
  "1984": {
    F: 12
  },
  "1985": {
    F: 15
  },
  "1986": {
    F: 15
  },
  "1987": {
    F: 11
  },
  "1988": {
    F: 12
  },
  "1990": {
    F: 17
  },
  "1992": {
    F: 17
  },
  "1994": {
    F: 11
  },
  "1995": {
    F: 11
  },
  "1996": {
    F: 16
  },
  "1998": {
    F: 10
  },
  "2007": {
    F: 10
  },
  "2011": {
    F: 11
  },
  "2015": {
    F: 10
  }
};
const Carol = {
  "1929": {
    F: 12
  },
  "1930": {
    F: 14
  },
  "1931": {
    F: 24
  },
  "1932": {
    F: 10
  },
  "1933": {
    F: 22
  },
  "1934": {
    F: 21
  },
  "1935": {
    F: 18
  },
  "1936": {
    F: 29
  },
  "1937": {
    F: 31
  },
  "1938": {
    F: 58
  },
  "1939": {
    F: 80
  },
  "1940": {
    F: 96
  },
  "1941": {
    F: 113
  },
  "1942": {
    F: 146
  },
  "1943": {
    F: 136
  },
  "1944": {
    F: 201
  },
  "1945": {
    F: 314
  },
  "1946": {
    F: 341
  },
  "1947": {
    F: 330
  },
  "1948": {
    F: 286
  },
  "1949": {
    F: 278
  },
  "1950": {
    F: 301
  },
  "1951": {
    F: 274
  },
  "1952": {
    F: 257
  },
  "1953": {
    F: 248
  },
  "1954": {
    F: 246
  },
  "1955": {
    F: 259
  },
  "1956": {
    F: 296
  },
  "1957": {
    F: 292
  },
  "1958": {
    F: 276
  },
  "1959": {
    F: 241
  },
  "1960": {
    F: 281
  },
  "1961": {
    F: 292
  },
  "1962": {
    F: 239
  },
  "1963": {
    F: 204
  },
  "1964": {
    F: 170
  },
  "1965": {
    F: 181
  },
  "1966": {
    F: 149
  },
  "1967": {
    F: 132
  },
  "1968": {
    F: 124
  },
  "1969": {
    F: 82
  },
  "1970": {
    F: 92
  },
  "1971": {
    F: 70
  },
  "1972": {
    F: 47
  },
  "1973": {
    F: 53
  },
  "1974": {
    F: 41
  },
  "1975": {
    F: 37
  },
  "1976": {
    F: 28
  },
  "1977": {
    F: 36
  },
  "1978": {
    F: 31
  },
  "1979": {
    F: 18
  },
  "1980": {
    F: 21
  },
  "1981": {
    F: 16
  },
  "1982": {
    F: 12
  },
  "1983": {
    F: 11
  },
  "1984": {
    F: 11
  },
  "1985": {
    F: 18
  },
  "1988": {
    F: 10
  },
  "1991": {
    F: 10
  }
};
const Carole = {
  "1935": {
    F: 12
  },
  "1936": {
    F: 16
  },
  "1937": {
    F: 21
  },
  "1938": {
    F: 20
  },
  "1939": {
    F: 39
  },
  "1940": {
    F: 47
  },
  "1941": {
    F: 52
  },
  "1942": {
    F: 78
  },
  "1943": {
    F: 72
  },
  "1944": {
    F: 80
  },
  "1945": {
    F: 98
  },
  "1946": {
    F: 88
  },
  "1947": {
    F: 54
  },
  "1948": {
    F: 59
  },
  "1949": {
    F: 46
  },
  "1950": {
    F: 39
  },
  "1951": {
    F: 31
  },
  "1952": {
    F: 28
  },
  "1953": {
    F: 25
  },
  "1954": {
    F: 21
  },
  "1955": {
    F: 26
  },
  "1956": {
    F: 16
  },
  "1957": {
    F: 20
  },
  "1958": {
    F: 25
  },
  "1959": {
    F: 27
  },
  "1960": {
    F: 20
  },
  "1961": {
    F: 33
  },
  "1962": {
    F: 35
  },
  "1963": {
    F: 30
  },
  "1964": {
    F: 31
  },
  "1965": {
    F: 25
  },
  "1966": {
    F: 23
  },
  "1968": {
    F: 21
  },
  "1969": {
    F: 19
  },
  "1970": {
    F: 12
  },
  "1971": {
    F: 13
  },
  "1972": {
    F: 11
  }
};
const Caroline = {
  "1900": {
    F: 33
  },
  "1901": {
    F: 20
  },
  "1902": {
    F: 18
  },
  "1903": {
    F: 17
  },
  "1904": {
    F: 13
  },
  "1905": {
    F: 14
  },
  "1906": {
    F: 32
  },
  "1907": {
    F: 26
  },
  "1908": {
    F: 26
  },
  "1909": {
    F: 23
  },
  "1910": {
    F: 16
  },
  "1911": {
    F: 19
  },
  "1912": {
    F: 19
  },
  "1913": {
    F: 17
  },
  "1914": {
    F: 19
  },
  "1915": {
    F: 12
  },
  "1916": {
    F: 19
  },
  "1917": {
    F: 14
  },
  "1918": {
    F: 15
  },
  "1919": {
    F: 10
  },
  "1921": {
    F: 11
  },
  "1923": {
    F: 10
  },
  "1928": {
    F: 13
  },
  "1930": {
    F: 10
  },
  "1933": {
    F: 11
  },
  "1934": {
    F: 14
  },
  "1935": {
    F: 14
  },
  "1936": {
    F: 14
  },
  "1937": {
    F: 22
  },
  "1938": {
    F: 16
  },
  "1939": {
    F: 21
  },
  "1940": {
    F: 21
  },
  "1941": {
    F: 25
  },
  "1942": {
    F: 27
  },
  "1943": {
    F: 23
  },
  "1944": {
    F: 27
  },
  "1945": {
    F: 36
  },
  "1946": {
    F: 44
  },
  "1947": {
    F: 44
  },
  "1948": {
    F: 46
  },
  "1949": {
    F: 42
  },
  "1950": {
    F: 41
  },
  "1951": {
    F: 36
  },
  "1952": {
    F: 50
  },
  "1953": {
    F: 39
  },
  "1954": {
    F: 48
  },
  "1955": {
    F: 49
  },
  "1956": {
    F: 46
  },
  "1957": {
    F: 77
  },
  "1958": {
    F: 84
  },
  "1959": {
    F: 80
  },
  "1960": {
    F: 98
  },
  "1961": {
    F: 88
  },
  "1962": {
    F: 103
  },
  "1963": {
    F: 96
  },
  "1964": {
    F: 124
  },
  "1965": {
    F: 103
  },
  "1966": {
    F: 86
  },
  "1967": {
    F: 83
  },
  "1968": {
    F: 101
  },
  "1969": {
    F: 77
  },
  "1970": {
    F: 95
  },
  "1971": {
    F: 96
  },
  "1972": {
    F: 72
  },
  "1973": {
    F: 83
  },
  "1974": {
    F: 89
  },
  "1975": {
    F: 111
  },
  "1976": {
    F: 97
  },
  "1977": {
    F: 90
  },
  "1978": {
    F: 90
  },
  "1979": {
    F: 83
  },
  "1980": {
    F: 80
  },
  "1981": {
    F: 70
  },
  "1982": {
    F: 66
  },
  "1983": {
    F: 67
  },
  "1984": {
    F: 86
  },
  "1985": {
    F: 60
  },
  "1986": {
    F: 42
  },
  "1987": {
    F: 45
  },
  "1988": {
    F: 48
  },
  "1989": {
    F: 40
  },
  "1990": {
    F: 36
  },
  "1991": {
    F: 36
  },
  "1992": {
    F: 42
  },
  "1993": {
    F: 26
  },
  "1994": {
    F: 33
  },
  "1995": {
    F: 28
  },
  "1996": {
    F: 13
  },
  "1997": {
    F: 21
  },
  "1998": {
    F: 17
  },
  "1999": {
    F: 20
  },
  "2000": {
    F: 18
  },
  "2001": {
    F: 20
  },
  "2002": {
    F: 13
  },
  "2003": {
    F: 21
  },
  "2004": {
    F: 20
  },
  "2005": {
    F: 11
  },
  "2006": {
    F: 12
  },
  "2008": {
    F: 11
  },
  "2009": {
    F: 12
  },
  "2010": {
    F: 14
  },
  "2013": {
    F: 14
  },
  "2015": {
    F: 12
  }
};
const Carolyn = {
  "1938": {
    F: 11
  },
  "1939": {
    F: 12
  },
  "1940": {
    F: 18
  },
  "1941": {
    F: 31
  },
  "1942": {
    F: 64
  },
  "1943": {
    F: 42
  },
  "1944": {
    F: 66
  },
  "1945": {
    F: 99
  },
  "1946": {
    F: 127
  },
  "1947": {
    F: 162
  },
  "1948": {
    F: 187
  },
  "1949": {
    F: 188
  },
  "1950": {
    F: 171
  },
  "1951": {
    F: 137
  },
  "1952": {
    F: 157
  },
  "1953": {
    F: 123
  },
  "1954": {
    F: 128
  },
  "1955": {
    F: 118
  },
  "1956": {
    F: 83
  },
  "1957": {
    F: 143
  },
  "1958": {
    F: 174
  },
  "1959": {
    F: 203
  },
  "1960": {
    F: 216
  },
  "1961": {
    F: 226
  },
  "1962": {
    F: 214
  },
  "1963": {
    F: 178
  },
  "1964": {
    F: 168
  },
  "1965": {
    F: 177
  },
  "1966": {
    F: 146
  },
  "1967": {
    F: 124
  },
  "1968": {
    F: 108
  },
  "1969": {
    F: 149
  },
  "1970": {
    F: 126
  },
  "1971": {
    F: 109
  },
  "1972": {
    F: 77
  },
  "1973": {
    F: 80
  },
  "1974": {
    F: 87
  },
  "1975": {
    F: 54
  },
  "1976": {
    F: 62
  },
  "1977": {
    F: 61
  },
  "1978": {
    F: 43
  },
  "1979": {
    F: 37
  },
  "1980": {
    F: 33
  },
  "1981": {
    F: 22
  },
  "1982": {
    F: 23
  },
  "1983": {
    F: 30
  },
  "1984": {
    F: 13
  },
  "1985": {
    F: 14
  },
  "1986": {
    F: 12
  },
  "1988": {
    F: 10
  }
};
const Caron = {
  "1957": {
    F: 12
  },
  "1965": {
    F: 11
  }
};
const Carrie = {
  "1977": {
    F: 10
  },
  "1978": {
    F: 12
  },
  "1980": {
    F: 26
  },
  "1981": {
    F: 24
  },
  "1982": {
    F: 26
  },
  "1983": {
    F: 16
  },
  "1984": {
    F: 30
  },
  "1985": {
    F: 22
  },
  "1987": {
    F: 12
  },
  "1988": {
    F: 16
  },
  "1989": {
    F: 17
  },
  "1990": {
    F: 10
  },
  "1992": {
    F: 12
  }
};
const Carrol = {
  "1947": {
    F: 14
  }
};
const Carson = {
  "2006": {
    M: 10
  },
  "2012": {
    M: 13
  },
  "2013": {
    M: 11
  },
  "2014": {
    M: 13
  },
  "2015": {
    M: 19
  },
  "2016": {
    M: 15
  },
  "2017": {
    M: 19
  },
  "2018": {
    M: 21
  },
  "2019": {
    M: 18
  },
  "2020": {
    M: 25
  },
  "2021": {
    M: 22
  }
};
const Carter = {
  "2003": {
    M: 19
  },
  "2004": {
    M: 23
  },
  "2005": {
    M: 36
  },
  "2006": {
    M: 55
  },
  "2007": {
    M: 54
  },
  "2008": {
    M: 71
  },
  "2009": {
    M: 74
  },
  "2010": {
    M: 92
  },
  "2011": {
    M: 103
  },
  "2012": {
    M: 124
  },
  "2013": {
    M: 121
  },
  "2014": {
    M: 132
  },
  "2015": {
    M: 180
  },
  "2016": {
    M: 165
  },
  "2017": {
    M: 145
  },
  "2018": {
    M: 131
  },
  "2019": {
    M: 129
  },
  "2020": {
    M: 129
  },
  "2021": {
    M: 114
  }
};
const Carwyn = {
  "1971": {
    M: 19
  },
  "1973": {
    M: 11
  }
};
const Cary = {
  "1964": {
    M: 10
  }
};
const Caryl = {
  "1947": {
    F: 14
  }
};
const Carys = {
  "2004": {
    F: 10
  },
  "2005": {
    F: 14
  },
  "2006": {
    F: 16
  },
  "2007": {
    F: 18
  },
  "2008": {
    F: 10
  },
  "2009": {
    F: 10
  },
  "2010": {
    F: 13
  },
  "2011": {
    F: 10
  },
  "2012": {
    F: 14
  },
  "2013": {
    F: 10
  },
  "2014": {
    F: 12
  }
};
const Casey = {
  "1975": {
    M: 12
  },
  "1978": {
    M: 17
  },
  "1979": {
    M: 16
  },
  "1980": {
    F: 26,
    M: 22
  },
  "1981": {
    F: 48,
    M: 16
  },
  "1982": {
    F: 52,
    M: 33
  },
  "1983": {
    F: 60,
    M: 31
  },
  "1984": {
    F: 77,
    M: 24
  },
  "1985": {
    F: 66,
    M: 20
  },
  "1986": {
    F: 70,
    M: 20
  },
  "1987": {
    F: 64,
    M: 22
  },
  "1988": {
    F: 68,
    M: 17
  },
  "1989": {
    F: 54,
    M: 34
  },
  "1990": {
    F: 78,
    M: 35
  },
  "1991": {
    F: 76,
    M: 27
  },
  "1992": {
    F: 64,
    M: 14
  },
  "1993": {
    F: 56,
    M: 22
  },
  "1994": {
    F: 42,
    M: 21
  },
  "1995": {
    F: 54,
    M: 23
  },
  "1996": {
    F: 36,
    M: 26
  },
  "1997": {
    F: 54,
    M: 21
  },
  "1998": {
    F: 45,
    M: 29
  },
  "1999": {
    F: 57,
    M: 26
  },
  "2000": {
    F: 52,
    M: 15
  },
  "2001": {
    F: 29,
    M: 27
  },
  "2002": {
    F: 28,
    M: 27
  },
  "2003": {
    F: 26,
    M: 20
  },
  "2004": {
    F: 31,
    M: 18
  },
  "2005": {
    F: 24,
    M: 16
  },
  "2006": {
    F: 29,
    M: 16
  },
  "2007": {
    F: 19,
    M: 19
  },
  "2008": {
    F: 32,
    M: 20
  },
  "2009": {
    F: 21,
    M: 18
  },
  "2010": {
    F: 25,
    M: 24
  },
  "2011": {
    F: 28,
    M: 15
  },
  "2012": {
    F: 29,
    M: 25
  },
  "2013": {
    F: 18,
    M: 20
  },
  "2014": {
    F: 17,
    M: 23
  },
  "2015": {
    F: 13,
    M: 33
  },
  "2016": {
    F: 14,
    M: 34
  },
  "2017": {
    F: 15,
    M: 29
  },
  "2018": {
    M: 28
  },
  "2019": {
    F: 10,
    M: 24
  },
  "2020": {
    M: 18,
    F: 12
  },
  "2021": {
    M: 27,
    F: 11
  }
};
const Cash = {
  "2010": {
    M: 12
  },
  "2012": {
    M: 10
  }
};
const Casper = {
  "2019": {
    M: 10
  },
  "2021": {
    M: 14
  }
};
const Cassandra = {
  "1966": {
    F: 10
  },
  "1967": {
    F: 15
  },
  "1968": {
    F: 12
  },
  "1969": {
    F: 12
  },
  "1970": {
    F: 11
  },
  "1971": {
    F: 18
  },
  "1972": {
    F: 20
  },
  "1973": {
    F: 14
  },
  "1974": {
    F: 13
  },
  "1975": {
    F: 10
  },
  "1977": {
    F: 11
  },
  "1978": {
    F: 20
  },
  "1979": {
    F: 21
  },
  "1980": {
    F: 24
  },
  "1981": {
    F: 23
  },
  "1982": {
    F: 19
  },
  "1983": {
    F: 12
  },
  "1984": {
    F: 17
  },
  "1985": {
    F: 32
  },
  "1986": {
    F: 43
  },
  "1987": {
    F: 55
  },
  "1988": {
    F: 46
  },
  "1989": {
    F: 59
  },
  "1990": {
    F: 56
  },
  "1991": {
    F: 46
  },
  "1992": {
    F: 38
  },
  "1993": {
    F: 80
  },
  "1994": {
    F: 75
  },
  "1995": {
    F: 61
  },
  "1996": {
    F: 54
  },
  "1997": {
    F: 49
  },
  "1998": {
    F: 28
  },
  "1999": {
    F: 40
  },
  "2000": {
    F: 32
  },
  "2001": {
    F: 30
  },
  "2002": {
    F: 17
  },
  "2003": {
    F: 21
  },
  "2004": {
    F: 15
  },
  "2005": {
    F: 12
  },
  "2006": {
    F: 11
  },
  "2008": {
    F: 16
  },
  "2009": {
    F: 14
  },
  "2010": {
    F: 13
  },
  "2012": {
    F: 11
  },
  "2013": {
    F: 12
  },
  "2014": {
    F: 16
  },
  "2015": {
    F: 10
  },
  "2016": {
    F: 10
  },
  "2019": {
    F: 14
  }
};
const Cassidy = {
  "1994": {
    F: 11
  },
  "1995": {
    F: 29
  },
  "1996": {
    F: 13
  },
  "1997": {
    F: 31
  },
  "1998": {
    F: 31
  },
  "1999": {
    F: 22
  },
  "2000": {
    F: 18
  },
  "2001": {
    F: 24
  },
  "2002": {
    F: 21
  },
  "2003": {
    F: 29
  },
  "2004": {
    F: 23
  },
  "2005": {
    F: 24
  },
  "2006": {
    F: 27
  },
  "2007": {
    F: 26
  },
  "2008": {
    F: 30
  },
  "2009": {
    F: 17
  },
  "2010": {
    F: 24
  },
  "2011": {
    F: 21
  },
  "2012": {
    F: 17
  },
  "2013": {
    F: 13
  },
  "2014": {
    F: 12
  },
  "2015": {
    F: 16
  },
  "2016": {
    F: 19
  },
  "2017": {
    F: 14
  },
  "2019": {
    F: 17
  },
  "2020": {
    F: 12
  }
};
const Cassie = {
  "1986": {
    F: 13
  },
  "1994": {
    F: 13
  },
  "2007": {
    F: 13
  },
  "2010": {
    F: 11
  },
  "2014": {
    F: 12
  },
  "2015": {
    F: 13
  },
  "2019": {
    F: 13
  },
  "2020": {
    F: 10
  }
};
const Cassius = {
  "2001": {
    M: 11
  },
  "2005": {
    M: 11
  },
  "2006": {
    M: 17
  },
  "2007": {
    M: 15
  },
  "2009": {
    M: 15
  },
  "2010": {
    M: 13
  },
  "2011": {
    M: 10
  },
  "2012": {
    M: 15
  },
  "2013": {
    M: 16
  },
  "2015": {
    M: 26
  },
  "2016": {
    M: 18
  },
  "2017": {
    M: 13
  },
  "2018": {
    M: 14
  },
  "2019": {
    M: 13
  }
};
const Catherine = {
  "1900": {
    F: 126
  },
  "1901": {
    F: 120
  },
  "1902": {
    F: 135
  },
  "1903": {
    F: 118
  },
  "1904": {
    F: 110
  },
  "1905": {
    F: 137
  },
  "1906": {
    F: 137
  },
  "1907": {
    F: 120
  },
  "1908": {
    F: 120
  },
  "1909": {
    F: 157
  },
  "1910": {
    F: 120
  },
  "1911": {
    F: 107
  },
  "1912": {
    F: 113
  },
  "1913": {
    F: 116
  },
  "1914": {
    F: 111
  },
  "1915": {
    F: 104
  },
  "1916": {
    F: 89
  },
  "1917": {
    F: 112
  },
  "1918": {
    F: 90
  },
  "1919": {
    F: 89
  },
  "1920": {
    F: 114
  },
  "1921": {
    F: 78
  },
  "1922": {
    F: 71
  },
  "1923": {
    F: 68
  },
  "1924": {
    F: 74
  },
  "1925": {
    F: 63
  },
  "1926": {
    F: 79
  },
  "1927": {
    F: 64
  },
  "1928": {
    F: 66
  },
  "1929": {
    F: 50
  },
  "1930": {
    F: 69
  },
  "1931": {
    F: 69
  },
  "1932": {
    F: 56
  },
  "1933": {
    F: 74
  },
  "1934": {
    F: 52
  },
  "1935": {
    F: 50
  },
  "1936": {
    F: 53
  },
  "1937": {
    F: 51
  },
  "1938": {
    F: 57
  },
  "1939": {
    F: 67
  },
  "1940": {
    F: 89
  },
  "1941": {
    F: 75
  },
  "1942": {
    F: 70
  },
  "1943": {
    F: 77
  },
  "1944": {
    F: 91
  },
  "1945": {
    F: 69
  },
  "1946": {
    F: 116
  },
  "1947": {
    F: 146
  },
  "1948": {
    F: 147
  },
  "1949": {
    F: 141
  },
  "1950": {
    F: 132
  },
  "1951": {
    F: 174
  },
  "1952": {
    F: 161
  },
  "1953": {
    F: 162
  },
  "1954": {
    F: 166
  },
  "1955": {
    F: 179
  },
  "1956": {
    F: 215
  },
  "1957": {
    F: 237
  },
  "1958": {
    F: 256
  },
  "1959": {
    F: 251
  },
  "1960": {
    F: 264
  },
  "1961": {
    F: 274
  },
  "1962": {
    F: 304
  },
  "1963": {
    F: 298
  },
  "1964": {
    F: 290
  },
  "1965": {
    F: 263
  },
  "1966": {
    F: 271
  },
  "1967": {
    F: 261
  },
  "1968": {
    F: 233
  },
  "1969": {
    F: 250
  },
  "1970": {
    F: 243
  },
  "1971": {
    F: 245
  },
  "1972": {
    F: 213
  },
  "1973": {
    F: 247
  },
  "1974": {
    F: 193
  },
  "1975": {
    F: 202
  },
  "1976": {
    F: 184
  },
  "1977": {
    F: 154
  },
  "1978": {
    F: 146
  },
  "1979": {
    F: 133
  },
  "1980": {
    F: 142
  },
  "1981": {
    F: 136
  },
  "1982": {
    F: 124
  },
  "1983": {
    F: 120
  },
  "1984": {
    F: 114
  },
  "1985": {
    F: 113
  },
  "1986": {
    F: 100
  },
  "1987": {
    F: 103
  },
  "1988": {
    F: 96
  },
  "1989": {
    F: 110
  },
  "1990": {
    F: 106
  },
  "1991": {
    F: 91
  },
  "1992": {
    F: 84
  },
  "1993": {
    F: 83
  },
  "1994": {
    F: 75
  },
  "1995": {
    F: 50
  },
  "1996": {
    F: 67
  },
  "1997": {
    F: 47
  },
  "1998": {
    F: 42
  },
  "1999": {
    F: 47
  },
  "2000": {
    F: 41
  },
  "2001": {
    F: 45
  },
  "2002": {
    F: 46
  },
  "2003": {
    F: 27
  },
  "2004": {
    F: 30
  },
  "2005": {
    F: 31
  },
  "2006": {
    F: 29
  },
  "2007": {
    F: 29
  },
  "2008": {
    F: 28
  },
  "2009": {
    F: 29
  },
  "2010": {
    F: 15
  },
  "2011": {
    F: 24
  },
  "2012": {
    F: 28
  },
  "2013": {
    F: 33
  },
  "2014": {
    F: 27
  },
  "2015": {
    F: 23
  },
  "2016": {
    F: 14
  },
  "2017": {
    F: 25
  },
  "2019": {
    F: 20
  },
  "2020": {
    F: 11
  },
  "2021": {
    F: 13
  }
};
const Cathrine = {
  "1953": {
    F: 12
  },
  "1955": {
    F: 13
  },
  "1957": {
    F: 11
  },
  "1960": {
    F: 15
  },
  "1962": {
    F: 10
  },
  "1963": {
    F: 11
  }
};
const Cathryn = {
  "1956": {
    F: 13
  },
  "1959": {
    F: 11
  },
  "1960": {
    F: 17
  },
  "1961": {
    F: 18
  },
  "1962": {
    F: 10
  },
  "1963": {
    F: 10
  },
  "1964": {
    F: 30
  },
  "1965": {
    F: 16
  },
  "1967": {
    F: 18
  },
  "1968": {
    F: 16
  },
  "1969": {
    F: 14
  },
  "1970": {
    F: 13
  },
  "1971": {
    F: 12
  },
  "1983": {
    F: 11
  }
};
const Cathy = {
  "1970": {
    F: 12
  },
  "1983": {
    F: 11
  }
};
const Catriona = {
  "1967": {
    F: 12
  },
  "1968": {
    F: 11
  },
  "1969": {
    F: 11
  },
  "1971": {
    F: 12
  },
  "1972": {
    F: 10
  },
  "1974": {
    F: 10
  }
};
const Cayden = {
  "2005": {
    M: 13
  },
  "2006": {
    M: 14
  },
  "2007": {
    M: 19
  },
  "2008": {
    M: 17
  },
  "2009": {
    M: 22
  },
  "2010": {
    M: 12
  },
  "2011": {
    M: 25
  },
  "2012": {
    M: 15
  },
  "2013": {
    M: 18
  },
  "2014": {
    M: 15
  },
  "2015": {
    M: 15
  },
  "2016": {
    M: 13
  },
  "2017": {
    M: 14
  },
  "2018": {
    M: 10
  },
  "2019": {
    M: 13
  },
  "2020": {
    M: 10
  }
};
const Cecil = {
  "1900": {
    M: 124
  },
  "1901": {
    M: 84
  },
  "1902": {
    M: 126
  },
  "1903": {
    M: 98
  },
  "1904": {
    M: 77
  },
  "1905": {
    M: 116
  },
  "1906": {
    M: 92
  },
  "1907": {
    M: 98
  },
  "1908": {
    M: 95
  },
  "1909": {
    M: 107
  },
  "1910": {
    M: 77
  },
  "1911": {
    M: 82
  },
  "1912": {
    M: 107
  },
  "1913": {
    M: 86
  },
  "1914": {
    M: 83
  },
  "1915": {
    M: 77
  },
  "1916": {
    M: 65
  },
  "1917": {
    M: 64
  },
  "1918": {
    M: 56
  },
  "1919": {
    M: 63
  },
  "1920": {
    M: 60
  },
  "1921": {
    M: 50
  },
  "1922": {
    M: 40
  },
  "1923": {
    M: 54
  },
  "1924": {
    M: 43
  },
  "1925": {
    M: 45
  },
  "1926": {
    M: 37
  },
  "1927": {
    M: 36
  },
  "1928": {
    M: 31
  },
  "1929": {
    M: 16
  },
  "1930": {
    M: 23
  },
  "1931": {
    M: 31
  },
  "1932": {
    M: 25
  },
  "1933": {
    M: 23
  },
  "1934": {
    M: 19
  },
  "1935": {
    M: 16
  },
  "1936": {
    M: 12
  },
  "1937": {
    M: 22
  },
  "1938": {
    M: 12
  },
  "1939": {
    M: 12
  },
  "1940": {
    M: 17
  },
  "1941": {
    M: 17
  },
  "1942": {
    M: 16
  },
  "1944": {
    M: 14
  },
  "1945": {
    M: 15
  },
  "1946": {
    M: 22
  },
  "1947": {
    M: 21
  },
  "1948": {
    M: 12
  },
  "1951": {
    M: 11
  },
  "1953": {
    M: 10
  },
  "1957": {
    M: 10
  }
};
const Cecilia = {
  "1900": {
    F: 14
  },
  "1901": {
    F: 16
  },
  "1904": {
    F: 12
  },
  "1906": {
    F: 10
  },
  "1907": {
    F: 20
  },
  "1908": {
    F: 12
  },
  "1910": {
    F: 15
  },
  "1911": {
    F: 14
  },
  "1912": {
    F: 14
  },
  "1913": {
    F: 23
  },
  "1914": {
    F: 16
  },
  "1915": {
    F: 13
  },
  "1916": {
    F: 18
  },
  "1917": {
    F: 12
  },
  "1920": {
    F: 16
  },
  "1922": {
    F: 16
  },
  "1926": {
    F: 14
  },
  "1927": {
    F: 14
  },
  "1943": {
    F: 10
  },
  "1945": {
    F: 13
  },
  "1947": {
    F: 11
  },
  "1949": {
    F: 10
  },
  "1951": {
    F: 11
  },
  "1954": {
    F: 14
  },
  "1955": {
    F: 11
  },
  "1956": {
    F: 10
  },
  "1958": {
    F: 10
  },
  "1959": {
    F: 13
  },
  "1960": {
    F: 13
  },
  "1961": {
    F: 12
  },
  "1962": {
    F: 11
  },
  "1963": {
    F: 11
  },
  "1964": {
    F: 16
  },
  "1968": {
    F: 11
  },
  "1971": {
    F: 13
  },
  "1974": {
    F: 12
  },
  "1990": {
    F: 11
  },
  "1993": {
    F: 11
  },
  "1998": {
    F: 11
  },
  "2001": {
    F: 11
  },
  "2009": {
    F: 10
  },
  "2012": {
    F: 11
  },
  "2013": {
    F: 10
  },
  "2015": {
    F: 15
  },
  "2018": {
    F: 14
  },
  "2021": {
    F: 13
  }
};
const Cecily = {
  "1929": {
    F: 10
  },
  "1930": {
    F: 10
  },
  "1939": {
    F: 11
  },
  "1945": {
    F: 10
  }
};
const Cedric = {
  "1901": {
    M: 14
  },
  "1902": {
    M: 10
  },
  "1904": {
    M: 14
  },
  "1905": {
    M: 13
  },
  "1906": {
    M: 14
  },
  "1907": {
    M: 10
  },
  "1908": {
    M: 13
  },
  "1909": {
    M: 23
  },
  "1910": {
    M: 12
  },
  "1911": {
    M: 10
  },
  "1912": {
    M: 10
  },
  "1913": {
    M: 18
  },
  "1914": {
    M: 11
  },
  "1916": {
    M: 24
  },
  "1917": {
    M: 15
  },
  "1918": {
    M: 12
  },
  "1920": {
    M: 17
  },
  "1921": {
    M: 13
  },
  "1922": {
    M: 10
  },
  "1923": {
    M: 15
  },
  "1925": {
    M: 16
  },
  "1926": {
    M: 11
  },
  "1927": {
    M: 24
  },
  "1928": {
    M: 15
  },
  "1929": {
    M: 13
  },
  "1930": {
    M: 12
  },
  "1931": {
    M: 11
  },
  "1932": {
    M: 13
  },
  "1936": {
    M: 18
  },
  "1938": {
    M: 11
  },
  "1939": {
    M: 10
  },
  "1940": {
    M: 10
  },
  "1944": {
    M: 10
  },
  "1946": {
    M: 12
  },
  "1948": {
    M: 14
  },
  "1949": {
    M: 10
  },
  "1956": {
    M: 10
  },
  "1957": {
    M: 10
  }
};
const Celeste = {
  "1973": {
    F: 14
  },
  "1977": {
    F: 17
  },
  "1978": {
    F: 11
  },
  "1982": {
    F: 10
  },
  "1983": {
    F: 13
  },
  "1984": {
    F: 11
  },
  "1985": {
    F: 12
  },
  "1987": {
    F: 11
  },
  "1990": {
    F: 11
  },
  "1991": {
    F: 15
  },
  "1992": {
    F: 14
  },
  "1993": {
    F: 15
  },
  "1994": {
    F: 16
  },
  "1995": {
    F: 21
  },
  "1996": {
    F: 18
  },
  "1997": {
    F: 12
  },
  "2001": {
    F: 10
  },
  "2002": {
    F: 12
  },
  "2006": {
    F: 10
  }
};
const Celia = {
  "1946": {
    F: 12
  },
  "1950": {
    F: 17
  },
  "1953": {
    F: 15
  },
  "1954": {
    F: 12
  },
  "1955": {
    F: 10
  },
  "1956": {
    F: 12
  },
  "1957": {
    F: 18
  },
  "1958": {
    F: 12
  },
  "1960": {
    F: 16
  },
  "1961": {
    F: 13
  },
  "1963": {
    F: 10
  },
  "1964": {
    F: 17
  },
  "1965": {
    F: 12
  },
  "1966": {
    F: 11
  },
  "1967": {
    F: 13
  },
  "1968": {
    F: 11
  },
  "1969": {
    F: 17
  },
  "1970": {
    F: 11
  },
  "1971": {
    F: 11
  },
  "1972": {
    F: 14
  },
  "1973": {
    F: 14
  },
  "1977": {
    F: 11
  },
  "1978": {
    F: 10
  },
  "1979": {
    F: 11
  },
  "1980": {
    F: 14
  },
  "1981": {
    F: 17
  },
  "1984": {
    F: 18
  },
  "1985": {
    F: 16
  },
  "1986": {
    F: 11
  },
  "1988": {
    F: 12
  },
  "1989": {
    F: 11
  },
  "1990": {
    F: 12
  },
  "1994": {
    F: 14
  },
  "1998": {
    F: 10
  },
  "2000": {
    F: 11
  }
};
const Celine = {
  "1996": {
    F: 25
  },
  "1997": {
    F: 32
  },
  "1998": {
    F: 30
  },
  "1999": {
    F: 21
  },
  "2000": {
    F: 10
  },
  "2001": {
    F: 12
  },
  "2007": {
    F: 10
  },
  "2019": {
    F: 11
  }
};
const Cerys = {
  "2007": {
    F: 10
  }
};
const Chace = {
  "2012": {
    M: 10
  }
};
const Chad = {
  "1971": {
    M: 14
  },
  "1972": {
    M: 13
  },
  "1973": {
    M: 20
  },
  "1974": {
    M: 16
  },
  "1975": {
    M: 19
  },
  "1976": {
    M: 17
  },
  "1977": {
    M: 23
  },
  "1978": {
    M: 25
  },
  "1979": {
    M: 13
  },
  "1980": {
    M: 20
  },
  "1981": {
    M: 23
  },
  "1982": {
    M: 23
  },
  "1983": {
    M: 24
  },
  "1984": {
    M: 24
  },
  "1985": {
    M: 19
  },
  "1986": {
    M: 25
  },
  "1987": {
    M: 28
  },
  "1988": {
    M: 43
  },
  "1989": {
    M: 33
  },
  "1990": {
    M: 33
  },
  "1991": {
    M: 30
  },
  "1992": {
    M: 32
  },
  "1993": {
    M: 22
  },
  "1994": {
    M: 26
  },
  "1995": {
    M: 23
  },
  "1996": {
    M: 16
  },
  "1997": {
    M: 15
  },
  "1998": {
    M: 18
  },
  "1999": {
    M: 10
  },
  "2001": {
    M: 16
  }
};
const Chance = {
  "1986": {
    M: 11
  },
  "1994": {
    M: 12
  },
  "1995": {
    M: 11
  },
  "1997": {
    M: 14
  },
  "1998": {
    M: 13
  },
  "1999": {
    M: 13
  },
  "2000": {
    M: 14
  },
  "2001": {
    M: 12
  },
  "2004": {
    M: 15
  },
  "2005": {
    M: 15
  },
  "2006": {
    M: 12
  },
  "2007": {
    M: 15
  },
  "2009": {
    M: 13
  },
  "2010": {
    M: 12
  },
  "2011": {
    M: 12
  },
  "2012": {
    M: 14
  },
  "2013": {
    M: 12
  },
  "2014": {
    M: 10
  },
  "2015": {
    M: 12
  },
  "2017": {
    M: 13
  },
  "2019": {
    M: 14
  },
  "2021": {
    M: 10
  }
};
const Chanel = {
  "1978": {
    F: 13
  },
  "1980": {
    F: 17
  },
  "1981": {
    F: 12
  },
  "1983": {
    F: 10
  },
  "1985": {
    F: 10
  },
  "1988": {
    F: 19
  },
  "1989": {
    F: 12
  },
  "1990": {
    F: 22
  },
  "1991": {
    F: 15
  },
  "1992": {
    F: 13
  },
  "1993": {
    F: 22
  },
  "1994": {
    F: 10
  },
  "1995": {
    F: 18
  },
  "1996": {
    F: 20
  },
  "1997": {
    F: 19
  },
  "2000": {
    F: 11
  },
  "2003": {
    F: 10
  },
  "2004": {
    F: 14
  },
  "2005": {
    F: 11
  },
  "2008": {
    F: 12
  },
  "2009": {
    F: 17
  }
};
const Chanelle = {
  "1979": {
    F: 10
  },
  "1980": {
    F: 14
  },
  "1981": {
    F: 19
  },
  "1982": {
    F: 27
  },
  "1983": {
    F: 17
  },
  "1984": {
    F: 20
  },
  "1985": {
    F: 20
  },
  "1986": {
    F: 16
  },
  "1987": {
    F: 20
  },
  "1988": {
    F: 29
  },
  "1989": {
    F: 22
  },
  "1990": {
    F: 41
  },
  "1991": {
    F: 30
  },
  "1992": {
    F: 30
  },
  "1993": {
    F: 30
  },
  "1994": {
    F: 16
  },
  "1995": {
    F: 29
  },
  "1996": {
    F: 15
  },
  "1997": {
    F: 18
  },
  "1998": {
    F: 12
  },
  "1999": {
    F: 10
  },
  "2000": {
    F: 15
  },
  "2001": {
    F: 11
  }
};
const Chantal = {
  "1975": {
    F: 11
  },
  "1980": {
    F: 11
  },
  "1981": {
    F: 15
  },
  "1982": {
    F: 13
  },
  "1994": {
    F: 12
  },
  "1995": {
    F: 12
  },
  "1997": {
    F: 12
  },
  "1998": {
    F: 12
  },
  "2000": {
    F: 14
  }
};
const Chantel = {
  "1981": {
    F: 12
  },
  "1982": {
    F: 11
  },
  "1984": {
    F: 11
  }
};
const Chantelle = {
  "1973": {
    F: 10
  },
  "1975": {
    F: 10
  },
  "1976": {
    F: 14
  },
  "1977": {
    F: 35
  },
  "1978": {
    F: 10
  },
  "1979": {
    F: 32
  },
  "1980": {
    F: 37
  },
  "1981": {
    F: 40
  },
  "1982": {
    F: 31
  },
  "1983": {
    F: 44
  },
  "1984": {
    F: 45
  },
  "1985": {
    F: 41
  },
  "1986": {
    F: 34
  },
  "1987": {
    F: 41
  },
  "1988": {
    F: 48
  },
  "1989": {
    F: 46
  },
  "1990": {
    F: 42
  },
  "1991": {
    F: 45
  },
  "1992": {
    F: 39
  },
  "1993": {
    F: 55
  },
  "1994": {
    F: 38
  },
  "1995": {
    F: 44
  },
  "1996": {
    F: 29
  },
  "1997": {
    F: 31
  },
  "1998": {
    F: 36
  },
  "1999": {
    F: 25
  },
  "2000": {
    F: 24
  },
  "2001": {
    F: 20
  },
  "2002": {
    F: 21
  },
  "2003": {
    F: 19
  },
  "2004": {
    F: 23
  },
  "2005": {
    F: 12
  },
  "2006": {
    F: 10
  },
  "2008": {
    F: 10
  }
};
const Charlee = {
  "2006": {
    F: 14
  },
  "2007": {
    F: 13
  },
  "2008": {
    F: 11
  },
  "2009": {
    F: 15
  },
  "2010": {
    F: 23
  },
  "2011": {
    F: 17
  },
  "2012": {
    F: 14
  },
  "2013": {
    F: 17
  },
  "2014": {
    F: 19
  },
  "2015": {
    F: 22
  },
  "2016": {
    F: 20
  },
  "2017": {
    F: 18
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 11
  },
  "2020": {
    F: 16
  },
  "2021": {
    F: 12
  }
};
const Charlene = {
  "1962": {
    F: 10
  },
  "1963": {
    F: 10
  },
  "1966": {
    F: 16
  },
  "1967": {
    F: 18
  },
  "1968": {
    F: 17
  },
  "1969": {
    F: 10
  },
  "1970": {
    F: 11
  },
  "1971": {
    F: 27
  },
  "1972": {
    F: 25
  },
  "1973": {
    F: 23
  },
  "1974": {
    F: 29
  },
  "1975": {
    F: 13
  },
  "1976": {
    F: 17
  },
  "1977": {
    F: 16
  },
  "1978": {
    F: 23
  },
  "1979": {
    F: 15
  },
  "1980": {
    F: 17
  },
  "1981": {
    F: 28
  },
  "1982": {
    F: 27
  },
  "1983": {
    F: 37
  },
  "1984": {
    F: 27
  },
  "1985": {
    F: 23
  },
  "1986": {
    F: 21
  },
  "1987": {
    F: 21
  },
  "1988": {
    F: 22
  },
  "1989": {
    F: 19
  },
  "1990": {
    F: 21
  },
  "1994": {
    F: 10
  },
  "1995": {
    F: 10
  }
};
const Charles = {
  "1900": {
    M: 326
  },
  "1901": {
    M: 343
  },
  "1902": {
    M: 345
  },
  "1903": {
    M: 318
  },
  "1904": {
    M: 344
  },
  "1905": {
    M: 355
  },
  "1906": {
    M: 335
  },
  "1907": {
    M: 350
  },
  "1908": {
    M: 376
  },
  "1909": {
    M: 335
  },
  "1910": {
    M: 334
  },
  "1911": {
    M: 325
  },
  "1912": {
    M: 307
  },
  "1913": {
    M: 344
  },
  "1914": {
    M: 324
  },
  "1915": {
    M: 279
  },
  "1916": {
    M: 304
  },
  "1917": {
    M: 292
  },
  "1918": {
    M: 259
  },
  "1919": {
    M: 216
  },
  "1920": {
    M: 279
  },
  "1921": {
    M: 236
  },
  "1922": {
    M: 199
  },
  "1923": {
    M: 221
  },
  "1924": {
    M: 195
  },
  "1925": {
    M: 208
  },
  "1926": {
    M: 187
  },
  "1927": {
    M: 199
  },
  "1928": {
    M: 146
  },
  "1929": {
    M: 144
  },
  "1930": {
    M: 158
  },
  "1931": {
    M: 136
  },
  "1932": {
    M: 134
  },
  "1933": {
    M: 148
  },
  "1934": {
    M: 121
  },
  "1935": {
    M: 125
  },
  "1936": {
    M: 118
  },
  "1937": {
    M: 90
  },
  "1938": {
    M: 121
  },
  "1939": {
    M: 115
  },
  "1940": {
    M: 120
  },
  "1941": {
    M: 115
  },
  "1942": {
    M: 112
  },
  "1943": {
    M: 101
  },
  "1944": {
    M: 100
  },
  "1945": {
    M: 88
  },
  "1946": {
    M: 121
  },
  "1947": {
    M: 128
  },
  "1948": {
    M: 110
  },
  "1949": {
    M: 133
  },
  "1950": {
    M: 121
  },
  "1951": {
    M: 133
  },
  "1952": {
    M: 128
  },
  "1953": {
    M: 130
  },
  "1954": {
    M: 118
  },
  "1955": {
    M: 117
  },
  "1956": {
    M: 116
  },
  "1957": {
    M: 104
  },
  "1958": {
    M: 94
  },
  "1959": {
    M: 91
  },
  "1960": {
    M: 77
  },
  "1961": {
    M: 113
  },
  "1962": {
    M: 110
  },
  "1963": {
    M: 87
  },
  "1964": {
    M: 86
  },
  "1965": {
    M: 75
  },
  "1966": {
    M: 79
  },
  "1967": {
    M: 74
  },
  "1968": {
    M: 50
  },
  "1969": {
    M: 83
  },
  "1970": {
    M: 68
  },
  "1971": {
    M: 65
  },
  "1972": {
    M: 77
  },
  "1973": {
    M: 34
  },
  "1974": {
    M: 53
  },
  "1975": {
    M: 64
  },
  "1976": {
    M: 62
  },
  "1977": {
    M: 64
  },
  "1978": {
    M: 54
  },
  "1979": {
    M: 58
  },
  "1980": {
    M: 60
  },
  "1981": {
    M: 69
  },
  "1982": {
    M: 45
  },
  "1983": {
    M: 63
  },
  "1984": {
    M: 72
  },
  "1985": {
    M: 53
  },
  "1986": {
    M: 73
  },
  "1987": {
    M: 64
  },
  "1988": {
    M: 57
  },
  "1989": {
    M: 67
  },
  "1990": {
    M: 61
  },
  "1991": {
    M: 67
  },
  "1992": {
    M: 66
  },
  "1993": {
    M: 55
  },
  "1994": {
    M: 60
  },
  "1995": {
    M: 54
  },
  "1996": {
    M: 51
  },
  "1997": {
    M: 54
  },
  "1998": {
    M: 47
  },
  "1999": {
    M: 43
  },
  "2000": {
    M: 46
  },
  "2001": {
    M: 62
  },
  "2002": {
    M: 51
  },
  "2003": {
    M: 39
  },
  "2004": {
    M: 60
  },
  "2005": {
    M: 74
  },
  "2006": {
    M: 77
  },
  "2007": {
    M: 76
  },
  "2008": {
    M: 92
  },
  "2009": {
    M: 74
  },
  "2010": {
    M: 80
  },
  "2011": {
    M: 67
  },
  "2012": {
    M: 78
  },
  "2013": {
    M: 77
  },
  "2014": {
    M: 63
  },
  "2015": {
    M: 67
  },
  "2016": {
    M: 67
  },
  "2017": {
    M: 70
  },
  "2018": {
    M: 84
  },
  "2019": {
    M: 60
  },
  "2020": {
    M: 58
  },
  "2021": {
    M: 65
  }
};
const Charli = {
  "2002": {
    F: 11
  },
  "2004": {
    F: 19
  },
  "2005": {
    F: 15
  },
  "2006": {
    F: 15
  },
  "2007": {
    F: 17
  },
  "2008": {
    F: 15
  },
  "2009": {
    F: 20
  },
  "2010": {
    F: 17
  },
  "2011": {
    F: 11
  },
  "2013": {
    F: 11
  },
  "2014": {
    F: 14
  },
  "2015": {
    F: 15
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 11
  },
  "2018": {
    F: 20
  },
  "2019": {
    F: 11
  },
  "2020": {
    F: 18
  },
  "2021": {
    F: 16
  }
};
const Charlie = {
  "1925": {
    M: 12
  },
  "1926": {
    M: 10
  },
  "1936": {
    M: 11
  },
  "1940": {
    M: 10
  },
  "1943": {
    M: 11
  },
  "1944": {
    M: 13
  },
  "1945": {
    M: 10
  },
  "1946": {
    M: 11
  },
  "1948": {
    M: 10
  },
  "1951": {
    M: 10
  },
  "1952": {
    M: 11
  },
  "1956": {
    M: 10
  },
  "1958": {
    M: 13
  },
  "1960": {
    M: 15
  },
  "1962": {
    M: 12
  },
  "1963": {
    M: 10
  },
  "1964": {
    M: 12
  },
  "1965": {
    M: 12
  },
  "1967": {
    M: 11
  },
  "1971": {
    M: 10
  },
  "1974": {
    M: 10
  },
  "1975": {
    M: 15
  },
  "1976": {
    M: 13
  },
  "1978": {
    M: 18
  },
  "1979": {
    M: 13
  },
  "1980": {
    M: 10
  },
  "1982": {
    M: 14
  },
  "1983": {
    M: 14
  },
  "1987": {
    M: 16
  },
  "1988": {
    M: 20
  },
  "1989": {
    M: 15
  },
  "1990": {
    M: 17
  },
  "1992": {
    M: 19
  },
  "1993": {
    M: 26
  },
  "1994": {
    M: 15
  },
  "1995": {
    M: 17
  },
  "1996": {
    M: 32
  },
  "1997": {
    M: 17
  },
  "1998": {
    M: 28
  },
  "1999": {
    M: 23
  },
  "2000": {
    M: 25
  },
  "2001": {
    M: 37
  },
  "2002": {
    F: 12,
    M: 41
  },
  "2003": {
    M: 59
  },
  "2004": {
    F: 11,
    M: 101
  },
  "2005": {
    F: 16,
    M: 86
  },
  "2006": {
    F: 12,
    M: 165
  },
  "2007": {
    F: 31,
    M: 157
  },
  "2008": {
    F: 22,
    M: 160
  },
  "2009": {
    F: 36,
    M: 151
  },
  "2010": {
    F: 33,
    M: 184
  },
  "2011": {
    F: 40,
    M: 177
  },
  "2012": {
    F: 34,
    M: 181
  },
  "2013": {
    F: 52,
    M: 174
  },
  "2014": {
    F: 38,
    M: 193
  },
  "2015": {
    F: 65,
    M: 229
  },
  "2016": {
    F: 45,
    M: 186
  },
  "2017": {
    F: 53,
    M: 181
  },
  "2018": {
    F: 55,
    M: 187
  },
  "2019": {
    M: 192,
    F: 43
  },
  "2020": {
    M: 183,
    F: 48
  },
  "2021": {
    M: 200,
    F: 39
  }
};
const Charlize = {
  "2003": {
    F: 14
  },
  "2004": {
    F: 28
  },
  "2005": {
    F: 27
  },
  "2006": {
    F: 24
  },
  "2007": {
    F: 23
  },
  "2008": {
    F: 23
  },
  "2009": {
    F: 20
  },
  "2010": {
    F: 17
  },
  "2011": {
    F: 16
  },
  "2013": {
    F: 10
  },
  "2014": {
    F: 13
  },
  "2016": {
    F: 11
  }
};
const Charlotte = {
  "1900": {
    F: 29
  },
  "1901": {
    F: 36
  },
  "1902": {
    F: 27
  },
  "1903": {
    F: 21
  },
  "1904": {
    F: 30
  },
  "1905": {
    F: 25
  },
  "1906": {
    F: 31
  },
  "1907": {
    F: 29
  },
  "1908": {
    F: 25
  },
  "1909": {
    F: 23
  },
  "1910": {
    F: 21
  },
  "1911": {
    F: 28
  },
  "1912": {
    F: 26
  },
  "1913": {
    F: 28
  },
  "1914": {
    F: 27
  },
  "1915": {
    F: 27
  },
  "1916": {
    F: 21
  },
  "1917": {
    F: 22
  },
  "1918": {
    F: 17
  },
  "1919": {
    F: 16
  },
  "1920": {
    F: 10
  },
  "1921": {
    F: 22
  },
  "1922": {
    F: 10
  },
  "1925": {
    F: 11
  },
  "1926": {
    F: 13
  },
  "1927": {
    F: 17
  },
  "1930": {
    F: 11
  },
  "1931": {
    F: 12
  },
  "1932": {
    F: 12
  },
  "1933": {
    F: 10
  },
  "1938": {
    F: 10
  },
  "1942": {
    F: 10
  },
  "1943": {
    F: 10
  },
  "1946": {
    F: 10
  },
  "1947": {
    F: 10
  },
  "1948": {
    F: 17
  },
  "1949": {
    F: 14
  },
  "1950": {
    F: 10
  },
  "1951": {
    F: 12
  },
  "1952": {
    F: 15
  },
  "1953": {
    F: 20
  },
  "1954": {
    F: 20
  },
  "1955": {
    F: 16
  },
  "1956": {
    F: 14
  },
  "1957": {
    F: 13
  },
  "1958": {
    F: 11
  },
  "1959": {
    F: 30
  },
  "1960": {
    F: 20
  },
  "1961": {
    F: 18
  },
  "1962": {
    F: 22
  },
  "1963": {
    F: 17
  },
  "1964": {
    F: 20
  },
  "1965": {
    F: 19
  },
  "1966": {
    F: 14
  },
  "1967": {
    F: 24
  },
  "1968": {
    F: 24
  },
  "1969": {
    F: 33
  },
  "1970": {
    F: 30
  },
  "1971": {
    F: 43
  },
  "1972": {
    F: 64
  },
  "1973": {
    F: 51
  },
  "1974": {
    F: 65
  },
  "1975": {
    F: 65
  },
  "1976": {
    F: 76
  },
  "1977": {
    F: 106
  },
  "1978": {
    F: 92
  },
  "1979": {
    F: 96
  },
  "1980": {
    F: 88
  },
  "1981": {
    F: 85
  },
  "1982": {
    F: 94
  },
  "1983": {
    F: 111
  },
  "1984": {
    F: 87
  },
  "1985": {
    F: 106
  },
  "1986": {
    F: 135
  },
  "1987": {
    F: 123
  },
  "1988": {
    F: 118
  },
  "1989": {
    F: 158
  },
  "1990": {
    F: 149
  },
  "1991": {
    F: 156
  },
  "1992": {
    F: 175
  },
  "1993": {
    F: 155
  },
  "1994": {
    F: 160
  },
  "1995": {
    F: 130
  },
  "1996": {
    F: 140
  },
  "1997": {
    F: 138
  },
  "1998": {
    F: 133
  },
  "1999": {
    F: 153
  },
  "2000": {
    F: 150
  },
  "2001": {
    F: 152
  },
  "2002": {
    F: 203
  },
  "2003": {
    F: 245
  },
  "2004": {
    F: 329
  },
  "2005": {
    F: 319
  },
  "2006": {
    F: 322
  },
  "2007": {
    F: 265
  },
  "2008": {
    F: 267
  },
  "2009": {
    F: 259
  },
  "2010": {
    F: 306
  },
  "2011": {
    F: 257
  },
  "2012": {
    F: 285
  },
  "2013": {
    F: 302
  },
  "2014": {
    F: 271
  },
  "2015": {
    F: 260
  },
  "2016": {
    F: 262
  },
  "2017": {
    F: 277
  },
  "2018": {
    F: 233
  },
  "2019": {
    F: 248
  },
  "2020": {
    F: 222
  },
  "2021": {
    F: 227
  }
};
const Charmaine = {
  "1951": {
    F: 14
  },
  "1952": {
    F: 27
  },
  "1953": {
    F: 29
  },
  "1954": {
    F: 40
  },
  "1955": {
    F: 36
  },
  "1956": {
    F: 24
  },
  "1957": {
    F: 20
  },
  "1958": {
    F: 31
  },
  "1959": {
    F: 27
  },
  "1960": {
    F: 27
  },
  "1961": {
    F: 17
  },
  "1962": {
    F: 27
  },
  "1963": {
    F: 26
  },
  "1964": {
    F: 37
  },
  "1965": {
    F: 29
  },
  "1966": {
    F: 31
  },
  "1967": {
    F: 27
  },
  "1968": {
    F: 33
  },
  "1969": {
    F: 36
  },
  "1970": {
    F: 28
  },
  "1971": {
    F: 40
  },
  "1972": {
    F: 42
  },
  "1973": {
    F: 36
  },
  "1974": {
    F: 38
  },
  "1975": {
    F: 33
  },
  "1976": {
    F: 25
  },
  "1977": {
    F: 32
  },
  "1978": {
    F: 24
  },
  "1979": {
    F: 16
  },
  "1980": {
    F: 12
  },
  "1981": {
    F: 16
  },
  "1982": {
    F: 22
  },
  "1983": {
    F: 16
  },
  "1984": {
    F: 20
  },
  "1985": {
    F: 15
  },
  "1986": {
    F: 19
  },
  "1987": {
    F: 18
  },
  "1988": {
    F: 20
  },
  "1989": {
    F: 11
  },
  "1990": {
    F: 21
  },
  "1991": {
    F: 13
  },
  "1992": {
    F: 21
  },
  "1993": {
    F: 10
  },
  "1997": {
    F: 12
  }
};
const Chase = {
  "1983": {
    M: 17
  },
  "1984": {
    M: 14
  },
  "1985": {
    M: 14
  },
  "1986": {
    M: 15
  },
  "1987": {
    M: 10
  },
  "1988": {
    M: 18
  },
  "1989": {
    M: 23
  },
  "1990": {
    M: 23
  },
  "1991": {
    M: 19
  },
  "1992": {
    M: 26
  },
  "1993": {
    M: 43
  },
  "1994": {
    M: 30
  },
  "1995": {
    M: 27
  },
  "1996": {
    M: 29
  },
  "1997": {
    M: 16
  },
  "1998": {
    M: 22
  },
  "1999": {
    M: 19
  },
  "2000": {
    M: 14
  },
  "2001": {
    M: 35
  },
  "2002": {
    M: 25
  },
  "2003": {
    M: 10
  },
  "2004": {
    M: 23
  },
  "2005": {
    M: 21
  },
  "2006": {
    M: 26
  },
  "2007": {
    M: 31
  },
  "2008": {
    M: 49
  },
  "2009": {
    M: 59
  },
  "2010": {
    M: 65
  },
  "2011": {
    M: 52
  },
  "2012": {
    M: 46
  },
  "2013": {
    M: 48
  },
  "2014": {
    M: 37
  },
  "2015": {
    M: 31
  },
  "2016": {
    M: 51
  },
  "2017": {
    M: 40
  },
  "2018": {
    M: 34
  },
  "2019": {
    M: 26
  },
  "2020": {
    M: 25
  },
  "2021": {
    M: 24
  }
};
const Chaz = {
  "1991": {
    M: 11
  },
  "1992": {
    M: 13
  },
  "1993": {
    M: 10
  }
};
const Che = {
  "1972": {
    M: 10
  },
  "1974": {
    M: 15
  },
  "1975": {
    M: 14
  },
  "1977": {
    M: 14
  },
  "1978": {
    M: 13
  },
  "1979": {
    M: 11
  },
  "1984": {
    M: 14
  }
};
const Chelsea = {
  "1978": {
    F: 10
  },
  "1979": {
    F: 23
  },
  "1980": {
    F: 10
  },
  "1982": {
    F: 11
  },
  "1983": {
    F: 17
  },
  "1984": {
    F: 32
  },
  "1985": {
    F: 29
  },
  "1986": {
    F: 43
  },
  "1987": {
    F: 83
  },
  "1988": {
    F: 139
  },
  "1989": {
    F: 112
  },
  "1990": {
    F: 130
  },
  "1991": {
    F: 143
  },
  "1992": {
    F: 147
  },
  "1993": {
    F: 161
  },
  "1994": {
    F: 182
  },
  "1995": {
    F: 116
  },
  "1996": {
    F: 109
  },
  "1997": {
    F: 96
  },
  "1998": {
    F: 66
  },
  "1999": {
    F: 87
  },
  "2000": {
    F: 74
  },
  "2001": {
    F: 53
  },
  "2002": {
    F: 33
  },
  "2003": {
    F: 46
  },
  "2004": {
    F: 48
  },
  "2005": {
    F: 30
  },
  "2006": {
    F: 50
  },
  "2007": {
    F: 63
  },
  "2008": {
    F: 45
  },
  "2009": {
    F: 41
  },
  "2010": {
    F: 32
  },
  "2011": {
    F: 36
  },
  "2012": {
    F: 34
  },
  "2013": {
    F: 22
  },
  "2014": {
    F: 35
  },
  "2015": {
    F: 18
  },
  "2016": {
    F: 29
  },
  "2017": {
    F: 22
  },
  "2018": {
    F: 19
  },
  "2019": {
    F: 20
  },
  "2020": {
    F: 11
  },
  "2021": {
    F: 17
  }
};
const Chelsey = {
  "1991": {
    F: 14
  },
  "1992": {
    F: 10
  },
  "1993": {
    F: 10
  },
  "1994": {
    F: 16
  },
  "1997": {
    F: 12
  }
};
const Cherie = {
  "1946": {
    F: 13
  },
  "1947": {
    F: 15
  },
  "1948": {
    F: 12
  },
  "1952": {
    F: 11
  },
  "1953": {
    F: 18
  },
  "1954": {
    F: 19
  },
  "1955": {
    F: 19
  },
  "1956": {
    F: 18
  },
  "1957": {
    F: 27
  },
  "1958": {
    F: 33
  },
  "1959": {
    F: 35
  },
  "1960": {
    F: 44
  },
  "1961": {
    F: 40
  },
  "1962": {
    F: 47
  },
  "1963": {
    F: 62
  },
  "1964": {
    F: 65
  },
  "1965": {
    F: 69
  },
  "1966": {
    F: 77
  },
  "1967": {
    F: 81
  },
  "1968": {
    F: 83
  },
  "1969": {
    F: 91
  },
  "1970": {
    F: 75
  },
  "1971": {
    F: 87
  },
  "1972": {
    F: 89
  },
  "1973": {
    F: 94
  },
  "1974": {
    F: 79
  },
  "1975": {
    F: 67
  },
  "1976": {
    F: 66
  },
  "1977": {
    F: 56
  },
  "1978": {
    F: 40
  },
  "1979": {
    F: 55
  },
  "1980": {
    F: 50
  },
  "1981": {
    F: 46
  },
  "1982": {
    F: 49
  },
  "1983": {
    F: 36
  },
  "1984": {
    F: 43
  },
  "1985": {
    F: 30
  },
  "1986": {
    F: 20
  },
  "1987": {
    F: 36
  },
  "1988": {
    F: 25
  },
  "1989": {
    F: 24
  },
  "1990": {
    F: 19
  },
  "1991": {
    F: 24
  },
  "1992": {
    F: 17
  },
  "1993": {
    F: 12
  }
};
const Cherish = {
  "1998": {
    F: 10
  },
  "1999": {
    F: 13
  },
  "2009": {
    F: 11
  },
  "2011": {
    F: 10
  },
  "2012": {
    F: 11
  },
  "2016": {
    F: 10
  }
};
const Cherry = {
  "1945": {
    F: 10
  },
  "1946": {
    F: 15
  },
  "1947": {
    F: 10
  },
  "1948": {
    F: 10
  },
  "1952": {
    F: 15
  },
  "1953": {
    F: 18
  },
  "1954": {
    F: 15
  },
  "1955": {
    F: 11
  },
  "1956": {
    F: 11
  },
  "1957": {
    F: 15
  },
  "1959": {
    F: 13
  }
};
const Cheryl = {
  "1944": {
    F: 30
  },
  "1945": {
    F: 86
  },
  "1946": {
    F: 101
  },
  "1947": {
    F: 138
  },
  "1948": {
    F: 114
  },
  "1949": {
    F: 133
  },
  "1950": {
    F: 118
  },
  "1951": {
    F: 122
  },
  "1952": {
    F: 129
  },
  "1953": {
    F: 144
  },
  "1954": {
    F: 106
  },
  "1955": {
    F: 111
  },
  "1956": {
    F: 121
  },
  "1957": {
    F: 111
  },
  "1958": {
    F: 117
  },
  "1959": {
    F: 104
  },
  "1960": {
    F: 128
  },
  "1961": {
    F: 117
  },
  "1962": {
    F: 108
  },
  "1963": {
    F: 102
  },
  "1964": {
    F: 97
  },
  "1965": {
    F: 64
  },
  "1966": {
    F: 82
  },
  "1967": {
    F: 53
  },
  "1968": {
    F: 58
  },
  "1969": {
    F: 63
  },
  "1970": {
    F: 131
  },
  "1971": {
    F: 126
  },
  "1972": {
    F: 83
  },
  "1973": {
    F: 73
  },
  "1974": {
    F: 58
  },
  "1975": {
    F: 40
  },
  "1976": {
    F: 38
  },
  "1977": {
    F: 43
  },
  "1978": {
    F: 34
  },
  "1979": {
    F: 33
  },
  "1980": {
    F: 24
  },
  "1981": {
    F: 14
  },
  "1982": {
    F: 19
  },
  "1983": {
    F: 18
  },
  "1984": {
    F: 25
  },
  "1985": {
    F: 21
  },
  "1986": {
    F: 19
  },
  "1987": {
    F: 15
  },
  "1988": {
    F: 13
  },
  "1989": {
    F: 10
  },
  "1990": {
    F: 10
  }
};
const Cheryll = {
  "1959": {
    F: 10
  },
  "1961": {
    F: 11
  }
};
const Chester = {
  "2020": {
    M: 12
  },
  "2021": {
    M: 15
  }
};
const Chevy = {
  "1993": {
    M: 11
  }
};
const Cheyanne = {
  "1995": {
    F: 13
  },
  "1998": {
    F: 18
  },
  "1999": {
    F: 12
  },
  "2000": {
    F: 16
  },
  "2002": {
    F: 12
  },
  "2003": {
    F: 11
  },
  "2006": {
    F: 10
  }
};
const Cheyenne = {
  "1988": {
    F: 13
  },
  "1990": {
    F: 15
  },
  "1991": {
    F: 26
  },
  "1992": {
    F: 26
  },
  "1993": {
    F: 34
  },
  "1994": {
    F: 34,
    M: 10
  },
  "1995": {
    F: 61
  },
  "1996": {
    F: 48
  },
  "1997": {
    F: 51
  },
  "1998": {
    F: 68
  },
  "1999": {
    F: 63
  },
  "2000": {
    F: 51
  },
  "2001": {
    F: 40
  },
  "2002": {
    F: 24
  },
  "2003": {
    F: 19
  },
  "2004": {
    F: 15
  },
  "2005": {
    F: 23
  },
  "2006": {
    F: 13
  },
  "2007": {
    F: 17
  },
  "2008": {
    F: 15
  }
};
const Chloe = {
  "1976": {
    F: 10
  },
  "1978": {
    F: 12
  },
  "1979": {
    F: 13
  },
  "1981": {
    F: 14
  },
  "1982": {
    F: 19
  },
  "1983": {
    F: 21
  },
  "1984": {
    F: 26
  },
  "1985": {
    F: 36
  },
  "1986": {
    F: 48
  },
  "1987": {
    F: 83
  },
  "1988": {
    F: 127
  },
  "1989": {
    F: 119
  },
  "1990": {
    F: 125
  },
  "1991": {
    F: 174
  },
  "1992": {
    F: 169
  },
  "1993": {
    F: 156
  },
  "1994": {
    F: 133
  },
  "1995": {
    F: 37
  },
  "1996": {
    F: 37
  },
  "1997": {
    F: 67
  },
  "1998": {
    F: 68
  },
  "1999": {
    F: 127
  },
  "2000": {
    F: 118
  },
  "2001": {
    F: 106
  },
  "2002": {
    F: 141
  },
  "2003": {
    F: 131
  },
  "2004": {
    F: 154
  },
  "2005": {
    F: 165
  },
  "2006": {
    F: 191
  },
  "2007": {
    F: 189
  },
  "2008": {
    F: 227
  },
  "2009": {
    F: 216
  },
  "2010": {
    F: 265
  },
  "2011": {
    F: 221
  },
  "2012": {
    F: 204
  },
  "2013": {
    F: 200
  },
  "2014": {
    F: 178
  },
  "2015": {
    F: 185
  },
  "2016": {
    F: 177
  },
  "2017": {
    F: 159
  },
  "2018": {
    F: 149
  },
  "2019": {
    F: 151
  },
  "2020": {
    F: 153
  },
  "2021": {
    F: 148
  }
};
const Chontelle = {
  "1991": {
    F: 12
  },
  "1993": {
    F: 12
  }
};
const Chris = {
  "1952": {
    M: 10
  },
  "1957": {
    M: 14
  },
  "1958": {
    M: 10
  },
  "1959": {
    M: 14
  },
  "1961": {
    M: 10
  },
  "1962": {
    M: 12
  },
  "1965": {
    M: 15
  },
  "1967": {
    M: 12
  },
  "1968": {
    M: 19
  },
  "1969": {
    M: 22
  },
  "1970": {
    M: 18
  },
  "1971": {
    M: 16
  },
  "1972": {
    M: 22
  },
  "1973": {
    M: 21
  },
  "1974": {
    M: 13
  },
  "1975": {
    M: 11
  },
  "1976": {
    M: 16
  },
  "1977": {
    M: 12
  },
  "1978": {
    M: 13
  },
  "1979": {
    M: 15
  },
  "1980": {
    M: 18
  },
  "1981": {
    M: 17
  },
  "1982": {
    M: 12
  },
  "1983": {
    M: 18
  },
  "1984": {
    M: 17
  },
  "1985": {
    M: 18
  },
  "1986": {
    M: 20
  },
  "1987": {
    M: 22
  },
  "1988": {
    M: 21
  },
  "1989": {
    M: 19
  },
  "1990": {
    M: 20
  },
  "1991": {
    M: 15
  },
  "1992": {
    M: 14
  },
  "1993": {
    M: 13
  },
  "1994": {
    M: 13
  },
  "1995": {
    M: 17
  },
  "1997": {
    M: 16
  },
  "1999": {
    M: 10
  },
  "2001": {
    M: 11
  },
  "2003": {
    M: 11
  },
  "2005": {
    M: 13
  },
  "2006": {
    M: 11
  },
  "2007": {
    M: 10
  },
  "2008": {
    M: 19
  },
  "2009": {
    M: 10
  },
  "2011": {
    M: 11
  },
  "2013": {
    M: 11
  },
  "2017": {
    M: 13
  },
  "2018": {
    M: 10
  }
};
const Christa = {
  "1988": {
    F: 13
  }
};
const Christian = {
  "1958": {
    M: 14
  },
  "1961": {
    M: 11
  },
  "1962": {
    M: 12
  },
  "1967": {
    M: 15
  },
  "1968": {
    M: 19
  },
  "1969": {
    M: 20
  },
  "1970": {
    M: 17
  },
  "1971": {
    M: 23
  },
  "1972": {
    M: 28
  },
  "1973": {
    M: 27
  },
  "1974": {
    M: 31
  },
  "1975": {
    M: 34
  },
  "1976": {
    M: 53
  },
  "1977": {
    M: 32
  },
  "1978": {
    M: 32
  },
  "1979": {
    M: 29
  },
  "1980": {
    M: 28
  },
  "1981": {
    M: 18
  },
  "1982": {
    M: 16
  },
  "1983": {
    M: 18
  },
  "1984": {
    M: 13
  },
  "1985": {
    M: 17
  },
  "1986": {
    M: 23
  },
  "1987": {
    M: 14
  },
  "1988": {
    M: 24
  },
  "1989": {
    M: 20
  },
  "1990": {
    M: 27
  },
  "1991": {
    M: 21
  },
  "1992": {
    M: 23
  },
  "1993": {
    M: 30
  },
  "1994": {
    M: 28
  },
  "1995": {
    M: 44
  },
  "1996": {
    M: 63
  },
  "1997": {
    M: 86
  },
  "1998": {
    M: 70
  },
  "1999": {
    M: 91
  },
  "2000": {
    M: 89
  },
  "2001": {
    M: 76
  },
  "2002": {
    M: 61
  },
  "2003": {
    M: 56
  },
  "2004": {
    M: 52
  },
  "2005": {
    M: 69
  },
  "2006": {
    M: 62
  },
  "2007": {
    M: 62
  },
  "2008": {
    M: 73
  },
  "2009": {
    M: 59
  },
  "2010": {
    M: 64
  },
  "2011": {
    M: 59
  },
  "2012": {
    M: 42
  },
  "2013": {
    M: 52
  },
  "2014": {
    M: 33
  },
  "2015": {
    M: 43
  },
  "2016": {
    M: 31
  },
  "2017": {
    M: 24
  },
  "2018": {
    M: 36
  },
  "2019": {
    M: 21
  },
  "2020": {
    M: 18
  },
  "2021": {
    M: 15
  }
};
const Christie = {
  "1977": {
    F: 14
  },
  "1980": {
    F: 13
  },
  "1982": {
    F: 11
  },
  "1984": {
    F: 14
  },
  "1985": {
    F: 10
  },
  "1986": {
    F: 14
  },
  "1987": {
    F: 10
  },
  "1988": {
    F: 10
  },
  "1989": {
    F: 15
  },
  "1990": {
    F: 14
  },
  "1991": {
    F: 17
  },
  "1992": {
    F: 15
  },
  "1993": {
    F: 15
  },
  "1994": {
    F: 14
  },
  "1995": {
    F: 15
  },
  "1996": {
    F: 15
  },
  "1997": {
    F: 11
  }
};
const Christina = {
  "1900": {
    F: 31
  },
  "1901": {
    F: 32
  },
  "1902": {
    F: 52
  },
  "1903": {
    F: 47
  },
  "1904": {
    F: 43
  },
  "1905": {
    F: 52
  },
  "1906": {
    F: 54
  },
  "1907": {
    F: 53
  },
  "1908": {
    F: 48
  },
  "1909": {
    F: 53
  },
  "1910": {
    F: 36
  },
  "1911": {
    F: 47
  },
  "1912": {
    F: 44
  },
  "1913": {
    F: 55
  },
  "1914": {
    F: 49
  },
  "1915": {
    F: 50
  },
  "1916": {
    F: 40
  },
  "1917": {
    F: 38
  },
  "1918": {
    F: 33
  },
  "1919": {
    F: 23
  },
  "1920": {
    F: 37
  },
  "1921": {
    F: 32
  },
  "1922": {
    F: 27
  },
  "1923": {
    F: 24
  },
  "1924": {
    F: 36
  },
  "1925": {
    F: 28
  },
  "1926": {
    F: 25
  },
  "1927": {
    F: 26
  },
  "1928": {
    F: 28
  },
  "1929": {
    F: 24
  },
  "1930": {
    F: 26
  },
  "1931": {
    F: 27
  },
  "1932": {
    F: 15
  },
  "1933": {
    F: 22
  },
  "1934": {
    F: 13
  },
  "1935": {
    F: 12
  },
  "1936": {
    F: 14
  },
  "1937": {
    F: 17
  },
  "1938": {
    F: 13
  },
  "1939": {
    F: 14
  },
  "1940": {
    F: 25
  },
  "1941": {
    F: 16
  },
  "1942": {
    F: 27
  },
  "1943": {
    F: 16
  },
  "1944": {
    F: 19
  },
  "1945": {
    F: 24
  },
  "1946": {
    F: 24
  },
  "1947": {
    F: 27
  },
  "1948": {
    F: 44
  },
  "1949": {
    F: 40
  },
  "1950": {
    F: 44
  },
  "1951": {
    F: 48
  },
  "1952": {
    F: 51
  },
  "1953": {
    F: 60
  },
  "1954": {
    F: 53
  },
  "1955": {
    F: 66
  },
  "1956": {
    F: 60
  },
  "1957": {
    F: 80
  },
  "1958": {
    F: 57
  },
  "1959": {
    F: 72
  },
  "1960": {
    F: 68
  },
  "1961": {
    F: 81
  },
  "1962": {
    F: 90
  },
  "1963": {
    F: 98
  },
  "1964": {
    F: 59
  },
  "1965": {
    F: 57
  },
  "1966": {
    F: 73
  },
  "1967": {
    F: 41
  },
  "1968": {
    F: 70
  },
  "1969": {
    F: 78
  },
  "1970": {
    F: 64
  },
  "1971": {
    F: 63
  },
  "1972": {
    F: 67
  },
  "1973": {
    F: 61
  },
  "1974": {
    F: 65
  },
  "1975": {
    F: 70
  },
  "1976": {
    F: 61
  },
  "1977": {
    F: 59
  },
  "1978": {
    F: 42
  },
  "1979": {
    F: 61
  },
  "1980": {
    F: 53
  },
  "1981": {
    F: 56
  },
  "1982": {
    F: 52
  },
  "1983": {
    F: 52
  },
  "1984": {
    F: 62
  },
  "1985": {
    F: 78
  },
  "1986": {
    F: 98
  },
  "1987": {
    F: 85
  },
  "1988": {
    F: 110
  },
  "1989": {
    F: 91
  },
  "1990": {
    F: 92
  },
  "1991": {
    F: 107
  },
  "1992": {
    F: 94
  },
  "1993": {
    F: 87
  },
  "1994": {
    F: 70
  },
  "1995": {
    F: 65
  },
  "1996": {
    F: 57
  },
  "1997": {
    F: 51
  },
  "1998": {
    F: 32
  },
  "1999": {
    F: 36
  },
  "2000": {
    F: 31
  },
  "2001": {
    F: 40
  },
  "2002": {
    F: 44
  },
  "2003": {
    F: 27
  },
  "2004": {
    F: 32
  },
  "2005": {
    F: 33
  },
  "2006": {
    F: 31
  },
  "2007": {
    F: 21
  },
  "2008": {
    F: 18
  },
  "2009": {
    F: 15
  },
  "2010": {
    F: 17
  },
  "2011": {
    F: 15
  },
  "2012": {
    F: 19
  },
  "2013": {
    F: 13
  },
  "2014": {
    F: 14
  },
  "2015": {
    F: 13
  },
  "2016": {
    F: 15
  },
  "2017": {
    F: 12
  }
};
const Christine = {
  "1923": {
    F: 10
  },
  "1925": {
    F: 11
  },
  "1927": {
    F: 12
  },
  "1930": {
    F: 13
  },
  "1931": {
    F: 12
  },
  "1932": {
    F: 13
  },
  "1933": {
    F: 10
  },
  "1936": {
    F: 10
  },
  "1937": {
    F: 13
  },
  "1938": {
    F: 16
  },
  "1939": {
    F: 26
  },
  "1940": {
    F: 34
  },
  "1941": {
    F: 46
  },
  "1942": {
    F: 52
  },
  "1943": {
    F: 59
  },
  "1944": {
    F: 105
  },
  "1945": {
    F: 153
  },
  "1946": {
    F: 231
  },
  "1947": {
    F: 328
  },
  "1948": {
    F: 413
  },
  "1949": {
    F: 562
  },
  "1950": {
    F: 606
  },
  "1951": {
    F: 673
  },
  "1952": {
    F: 691
  },
  "1953": {
    F: 811
  },
  "1954": {
    F: 769
  },
  "1955": {
    F: 698
  },
  "1956": {
    F: 755
  },
  "1957": {
    F: 774
  },
  "1958": {
    F: 609
  },
  "1959": {
    F: 655
  },
  "1960": {
    F: 675
  },
  "1961": {
    F: 613
  },
  "1962": {
    F: 548
  },
  "1963": {
    F: 497
  },
  "1964": {
    F: 376
  },
  "1965": {
    F: 354
  },
  "1966": {
    F: 337
  },
  "1967": {
    F: 315
  },
  "1968": {
    F: 325
  },
  "1969": {
    F: 258
  },
  "1970": {
    F: 232
  },
  "1971": {
    F: 206
  },
  "1972": {
    F: 191
  },
  "1973": {
    F: 161
  },
  "1974": {
    F: 131
  },
  "1975": {
    F: 109
  },
  "1976": {
    F: 117
  },
  "1977": {
    F: 87
  },
  "1978": {
    F: 73
  },
  "1979": {
    F: 88
  },
  "1980": {
    F: 66
  },
  "1981": {
    F: 56
  },
  "1982": {
    F: 48
  },
  "1983": {
    F: 52
  },
  "1984": {
    F: 71
  },
  "1985": {
    F: 58
  },
  "1986": {
    F: 72
  },
  "1987": {
    F: 59
  },
  "1988": {
    F: 62
  },
  "1989": {
    F: 47
  },
  "1990": {
    F: 36
  },
  "1991": {
    F: 52
  },
  "1992": {
    F: 54
  },
  "1993": {
    F: 41
  },
  "1994": {
    F: 29
  },
  "1995": {
    F: 26
  },
  "1996": {
    F: 32
  },
  "1997": {
    F: 29
  },
  "1998": {
    F: 45
  },
  "1999": {
    F: 22
  },
  "2000": {
    F: 28
  },
  "2001": {
    F: 20
  },
  "2002": {
    F: 16
  },
  "2003": {
    F: 15
  },
  "2004": {
    F: 15
  },
  "2005": {
    F: 14
  },
  "2007": {
    F: 14
  },
  "2008": {
    F: 12
  },
  "2010": {
    F: 12
  },
  "2012": {
    F: 10
  },
  "2013": {
    F: 11
  },
  "2014": {
    F: 11
  }
};
const Christopher = {
  "1900": {
    M: 11
  },
  "1902": {
    M: 11
  },
  "1903": {
    M: 11
  },
  "1904": {
    M: 11
  },
  "1906": {
    M: 11
  },
  "1909": {
    M: 16
  },
  "1911": {
    M: 16
  },
  "1912": {
    M: 15
  },
  "1913": {
    M: 15
  },
  "1914": {
    M: 16
  },
  "1915": {
    M: 11
  },
  "1916": {
    M: 18
  },
  "1917": {
    M: 10
  },
  "1920": {
    M: 13
  },
  "1922": {
    M: 17
  },
  "1924": {
    M: 12
  },
  "1925": {
    M: 13
  },
  "1927": {
    M: 15
  },
  "1929": {
    M: 15
  },
  "1931": {
    M: 14
  },
  "1933": {
    M: 14
  },
  "1934": {
    M: 17
  },
  "1935": {
    M: 18
  },
  "1936": {
    M: 18
  },
  "1937": {
    M: 30
  },
  "1938": {
    M: 35
  },
  "1939": {
    M: 31
  },
  "1940": {
    M: 42
  },
  "1941": {
    M: 89
  },
  "1942": {
    M: 69
  },
  "1943": {
    M: 95
  },
  "1944": {
    M: 94
  },
  "1945": {
    M: 131
  },
  "1946": {
    M: 169
  },
  "1947": {
    M: 218
  },
  "1948": {
    M: 248
  },
  "1949": {
    M: 257
  },
  "1950": {
    M: 285
  },
  "1951": {
    M: 346
  },
  "1952": {
    M: 402
  },
  "1953": {
    M: 476
  },
  "1954": {
    M: 505
  },
  "1955": {
    M: 550
  },
  "1956": {
    M: 523
  },
  "1957": {
    M: 626
  },
  "1958": {
    M: 681
  },
  "1959": {
    M: 677
  },
  "1960": {
    M: 621
  },
  "1961": {
    M: 545
  },
  "1962": {
    M: 561
  },
  "1963": {
    M: 571
  },
  "1964": {
    M: 550
  },
  "1965": {
    M: 487
  },
  "1966": {
    M: 567
  },
  "1967": {
    M: 521
  },
  "1968": {
    M: 705
  },
  "1969": {
    M: 660
  },
  "1970": {
    M: 604
  },
  "1971": {
    M: 586
  },
  "1972": {
    M: 608
  },
  "1973": {
    M: 545
  },
  "1974": {
    M: 517
  },
  "1975": {
    M: 455
  },
  "1976": {
    M: 460
  },
  "1977": {
    M: 440
  },
  "1978": {
    M: 443
  },
  "1979": {
    M: 463
  },
  "1980": {
    M: 442
  },
  "1981": {
    M: 462
  },
  "1982": {
    M: 517
  },
  "1983": {
    M: 541
  },
  "1984": {
    M: 595
  },
  "1985": {
    M: 558
  },
  "1986": {
    M: 538
  },
  "1987": {
    M: 586
  },
  "1988": {
    M: 531
  },
  "1989": {
    M: 467
  },
  "1990": {
    M: 485
  },
  "1991": {
    M: 414
  },
  "1992": {
    M: 422
  },
  "1993": {
    M: 354
  },
  "1994": {
    M: 312
  },
  "1995": {
    M: 218
  },
  "1996": {
    M: 212
  },
  "1997": {
    M: 175
  },
  "1998": {
    M: 149
  },
  "1999": {
    M: 135
  },
  "2000": {
    M: 116
  },
  "2001": {
    M: 98
  },
  "2002": {
    M: 86
  },
  "2003": {
    M: 82
  },
  "2004": {
    M: 73
  },
  "2005": {
    M: 78
  },
  "2006": {
    M: 78
  },
  "2007": {
    M: 78
  },
  "2008": {
    M: 60
  },
  "2009": {
    M: 56
  },
  "2010": {
    M: 52
  },
  "2011": {
    M: 51
  },
  "2012": {
    M: 50
  },
  "2013": {
    M: 35
  },
  "2014": {
    M: 37
  },
  "2015": {
    M: 41
  },
  "2016": {
    M: 30
  },
  "2017": {
    M: 35
  },
  "2018": {
    M: 33
  },
  "2019": {
    M: 30
  },
  "2020": {
    M: 20
  },
  "2021": {
    M: 33
  }
};
const Christy = {
  "1980": {
    F: 14
  },
  "1981": {
    F: 11
  },
  "1987": {
    F: 10
  },
  "1992": {
    F: 10
  },
  "1996": {
    F: 14
  }
};
const Chrystal = {
  "1980": {
    F: 10
  },
  "1982": {
    F: 14
  },
  "1983": {
    F: 14
  },
  "1984": {
    F: 17
  },
  "1985": {
    F: 10
  },
  "1988": {
    F: 10
  },
  "1992": {
    F: 12
  },
  "1993": {
    F: 14
  },
  "1994": {
    F: 10
  },
  "1995": {
    F: 11
  },
  "1996": {
    F: 12
  }
};
const Cian = {
  "2011": {
    M: 10
  },
  "2013": {
    M: 16
  },
  "2015": {
    M: 10
  },
  "2020": {
    M: 11
  }
};
const Ciara = {
  "1999": {
    F: 10
  },
  "2000": {
    F: 11
  },
  "2001": {
    F: 12
  },
  "2002": {
    F: 10
  },
  "2005": {
    F: 19
  },
  "2006": {
    F: 22
  },
  "2007": {
    F: 23
  },
  "2008": {
    F: 24
  },
  "2009": {
    F: 21
  },
  "2010": {
    F: 14
  },
  "2011": {
    F: 18
  },
  "2012": {
    F: 12
  },
  "2014": {
    F: 11
  },
  "2015": {
    F: 14
  }
};
const Ciaran = {
  "1983": {
    M: 10
  },
  "1994": {
    M: 10
  },
  "1996": {
    M: 10
  },
  "2004": {
    M: 14
  },
  "2006": {
    M: 10
  }
};
const Cillian = {
  "2020": {
    M: 10
  },
  "2021": {
    M: 13
  }
};
const Cindy = {
  "1957": {
    F: 35
  },
  "1958": {
    F: 19
  },
  "1959": {
    F: 24
  },
  "1960": {
    F: 20
  },
  "1961": {
    F: 25
  },
  "1962": {
    F: 20
  },
  "1963": {
    F: 31
  },
  "1964": {
    F: 29
  },
  "1965": {
    F: 41
  },
  "1966": {
    F: 43
  },
  "1967": {
    F: 37
  },
  "1968": {
    F: 38
  },
  "1969": {
    F: 31
  },
  "1970": {
    F: 50
  },
  "1971": {
    F: 48
  },
  "1972": {
    F: 39
  },
  "1973": {
    F: 51
  },
  "1974": {
    F: 65
  },
  "1975": {
    F: 53
  },
  "1976": {
    F: 33
  },
  "1977": {
    F: 23
  },
  "1978": {
    F: 35
  },
  "1979": {
    F: 33
  },
  "1980": {
    F: 34
  },
  "1981": {
    F: 31
  },
  "1982": {
    F: 25
  },
  "1983": {
    F: 28
  },
  "1984": {
    F: 30
  },
  "1985": {
    F: 26
  },
  "1986": {
    F: 21
  },
  "1987": {
    F: 19
  },
  "1988": {
    F: 19
  },
  "1989": {
    F: 14
  },
  "1990": {
    F: 12
  },
  "1992": {
    F: 10
  },
  "1993": {
    F: 10
  },
  "1994": {
    F: 10
  },
  "1997": {
    F: 12
  },
  "1998": {
    F: 12
  },
  "2000": {
    F: 11
  },
  "2001": {
    F: 10
  },
  "2002": {
    F: 10
  },
  "2003": {
    F: 11
  },
  "2008": {
    F: 11
  }
};
const Cinnamon = {
  "1969": {
    F: 10
  }
};
const Claire = {
  "1925": {
    F: 13
  },
  "1926": {
    F: 14
  },
  "1927": {
    F: 10
  },
  "1928": {
    F: 12
  },
  "1929": {
    F: 17
  },
  "1930": {
    F: 10
  },
  "1931": {
    F: 15
  },
  "1932": {
    F: 13
  },
  "1933": {
    F: 21
  },
  "1934": {
    F: 25
  },
  "1935": {
    F: 26
  },
  "1936": {
    F: 23
  },
  "1937": {
    F: 21
  },
  "1938": {
    F: 28
  },
  "1939": {
    F: 24
  },
  "1940": {
    F: 27
  },
  "1941": {
    F: 22
  },
  "1942": {
    F: 22
  },
  "1943": {
    F: 14
  },
  "1944": {
    F: 20
  },
  "1945": {
    F: 38
  },
  "1946": {
    F: 30
  },
  "1947": {
    F: 46
  },
  "1948": {
    F: 28
  },
  "1949": {
    F: 33
  },
  "1950": {
    F: 29
  },
  "1951": {
    F: 27
  },
  "1952": {
    F: 35
  },
  "1953": {
    F: 50
  },
  "1954": {
    F: 52
  },
  "1955": {
    F: 64
  },
  "1956": {
    F: 54
  },
  "1957": {
    F: 45
  },
  "1958": {
    F: 69
  },
  "1959": {
    F: 69
  },
  "1960": {
    F: 52
  },
  "1961": {
    F: 63
  },
  "1962": {
    F: 63
  },
  "1963": {
    F: 60
  },
  "1964": {
    F: 68
  },
  "1965": {
    F: 61
  },
  "1966": {
    F: 75
  },
  "1967": {
    F: 91
  },
  "1968": {
    F: 91
  },
  "1969": {
    F: 70
  },
  "1970": {
    F: 69
  },
  "1971": {
    F: 84
  },
  "1972": {
    F: 70
  },
  "1973": {
    F: 83
  },
  "1974": {
    F: 93
  },
  "1975": {
    F: 120
  },
  "1976": {
    F: 99
  },
  "1977": {
    F: 110
  },
  "1978": {
    F: 107
  },
  "1979": {
    F: 131
  },
  "1980": {
    F: 146
  },
  "1981": {
    F: 125
  },
  "1982": {
    F: 125
  },
  "1983": {
    F: 131
  },
  "1984": {
    F: 120
  },
  "1985": {
    F: 136
  },
  "1986": {
    F: 108
  },
  "1987": {
    F: 131
  },
  "1988": {
    F: 108
  },
  "1989": {
    F: 91
  },
  "1990": {
    F: 105
  },
  "1991": {
    F: 70
  },
  "1992": {
    F: 67
  },
  "1993": {
    F: 57
  },
  "1994": {
    F: 35
  },
  "1995": {
    F: 38
  },
  "1996": {
    F: 30
  },
  "1997": {
    F: 27
  },
  "1998": {
    F: 28
  },
  "1999": {
    F: 27
  },
  "2000": {
    F: 24
  },
  "2001": {
    F: 41
  },
  "2002": {
    F: 20
  },
  "2003": {
    F: 19
  },
  "2004": {
    F: 30
  },
  "2005": {
    F: 26
  },
  "2006": {
    F: 22
  },
  "2007": {
    F: 25
  },
  "2008": {
    F: 22
  },
  "2009": {
    F: 27
  },
  "2010": {
    F: 22
  },
  "2011": {
    F: 26
  },
  "2012": {
    F: 29
  },
  "2013": {
    F: 43
  },
  "2014": {
    F: 25
  },
  "2015": {
    F: 29
  },
  "2016": {
    F: 41
  },
  "2017": {
    F: 26
  },
  "2018": {
    F: 24
  },
  "2019": {
    F: 27
  },
  "2020": {
    F: 19
  },
  "2021": {
    F: 23
  }
};
const Clara = {
  "1900": {
    F: 35
  },
  "1901": {
    F: 24
  },
  "1902": {
    F: 43
  },
  "1903": {
    F: 38
  },
  "1904": {
    F: 36
  },
  "1905": {
    F: 34
  },
  "1906": {
    F: 45
  },
  "1907": {
    F: 35
  },
  "1908": {
    F: 27
  },
  "1909": {
    F: 42
  },
  "1910": {
    F: 38
  },
  "1911": {
    F: 36
  },
  "1912": {
    F: 39
  },
  "1913": {
    F: 27
  },
  "1914": {
    F: 25
  },
  "1915": {
    F: 31
  },
  "1916": {
    F: 24
  },
  "1917": {
    F: 29
  },
  "1918": {
    F: 18
  },
  "1919": {
    F: 26
  },
  "1920": {
    F: 13
  },
  "1921": {
    F: 19
  },
  "1922": {
    F: 14
  },
  "1923": {
    F: 18
  },
  "1925": {
    F: 23
  },
  "1926": {
    F: 11
  },
  "1927": {
    F: 12
  },
  "1928": {
    F: 12
  },
  "1932": {
    F: 15
  },
  "1934": {
    F: 10
  },
  "1994": {
    F: 10
  },
  "2002": {
    F: 12
  },
  "2005": {
    F: 11
  },
  "2007": {
    F: 12
  },
  "2008": {
    F: 14
  },
  "2009": {
    F: 16
  },
  "2010": {
    F: 12
  },
  "2011": {
    F: 14
  },
  "2012": {
    F: 18
  },
  "2013": {
    F: 28
  },
  "2014": {
    F: 35
  },
  "2015": {
    F: 21
  },
  "2016": {
    F: 43
  },
  "2017": {
    F: 41
  },
  "2018": {
    F: 35
  },
  "2019": {
    F: 33
  },
  "2020": {
    F: 33
  },
  "2021": {
    F: 34
  }
};
const Clare = {
  "1914": {
    F: 12
  },
  "1924": {
    F: 10
  },
  "1927": {
    F: 13
  },
  "1929": {
    F: 12
  },
  "1935": {
    F: 13
  },
  "1940": {
    F: 11
  },
  "1941": {
    F: 20
  },
  "1942": {
    F: 18
  },
  "1943": {
    F: 17
  },
  "1944": {
    F: 13
  },
  "1946": {
    F: 29
  },
  "1947": {
    F: 36
  },
  "1948": {
    F: 29
  },
  "1949": {
    F: 32
  },
  "1950": {
    F: 35
  },
  "1951": {
    F: 27
  },
  "1952": {
    F: 27
  },
  "1953": {
    F: 34
  },
  "1954": {
    F: 33
  },
  "1955": {
    F: 31
  },
  "1956": {
    F: 47
  },
  "1957": {
    F: 40
  },
  "1958": {
    F: 52
  },
  "1959": {
    F: 62
  },
  "1960": {
    F: 46
  },
  "1961": {
    F: 48
  },
  "1962": {
    F: 54
  },
  "1963": {
    F: 51
  },
  "1964": {
    F: 66
  },
  "1965": {
    F: 40
  },
  "1966": {
    F: 39
  },
  "1967": {
    F: 57
  },
  "1968": {
    F: 34
  },
  "1969": {
    F: 38
  },
  "1970": {
    F: 31
  },
  "1971": {
    F: 36
  },
  "1972": {
    F: 26
  },
  "1973": {
    F: 37
  },
  "1974": {
    F: 42
  },
  "1975": {
    F: 37
  },
  "1976": {
    F: 37
  },
  "1977": {
    F: 47
  },
  "1978": {
    F: 55
  },
  "1979": {
    F: 39
  },
  "1980": {
    F: 35
  },
  "1981": {
    F: 32
  },
  "1982": {
    F: 33
  },
  "1983": {
    F: 41
  },
  "1984": {
    F: 35
  },
  "1985": {
    F: 35
  },
  "1986": {
    F: 26
  },
  "1987": {
    F: 37
  },
  "1988": {
    F: 41
  },
  "1989": {
    F: 34
  },
  "1990": {
    F: 23
  },
  "1991": {
    F: 25
  },
  "1992": {
    F: 26
  },
  "1993": {
    F: 13
  },
  "1994": {
    F: 16
  },
  "1995": {
    F: 10
  },
  "1998": {
    F: 14
  }
};
const Clarence = {
  "1900": {
    M: 55
  },
  "1901": {
    M: 73
  },
  "1902": {
    M: 68
  },
  "1903": {
    M: 68
  },
  "1904": {
    M: 74
  },
  "1905": {
    M: 87
  },
  "1906": {
    M: 92
  },
  "1907": {
    M: 93
  },
  "1908": {
    M: 95
  },
  "1909": {
    M: 79
  },
  "1910": {
    M: 76
  },
  "1911": {
    M: 76
  },
  "1912": {
    M: 87
  },
  "1913": {
    M: 65
  },
  "1914": {
    M: 55
  },
  "1915": {
    M: 62
  },
  "1916": {
    M: 56
  },
  "1917": {
    M: 69
  },
  "1918": {
    M: 59
  },
  "1919": {
    M: 52
  },
  "1920": {
    M: 71
  },
  "1921": {
    M: 58
  },
  "1922": {
    M: 47
  },
  "1923": {
    M: 48
  },
  "1924": {
    M: 34
  },
  "1925": {
    M: 25
  },
  "1926": {
    M: 43
  },
  "1927": {
    M: 37
  },
  "1928": {
    M: 40
  },
  "1929": {
    M: 23
  },
  "1930": {
    M: 22
  },
  "1931": {
    M: 24
  },
  "1932": {
    M: 28
  },
  "1933": {
    M: 19
  },
  "1934": {
    M: 22
  },
  "1935": {
    M: 22
  },
  "1936": {
    M: 18
  },
  "1937": {
    M: 22
  },
  "1938": {
    M: 22
  },
  "1939": {
    M: 20
  },
  "1940": {
    M: 21
  },
  "1941": {
    M: 21
  },
  "1942": {
    M: 15
  },
  "1943": {
    M: 11
  },
  "1944": {
    M: 14
  },
  "1945": {
    M: 15
  },
  "1946": {
    M: 15
  },
  "1947": {
    M: 14
  },
  "1949": {
    M: 16
  },
  "1951": {
    M: 10
  },
  "1953": {
    M: 13
  },
  "1955": {
    M: 10
  },
  "1960": {
    M: 11
  }
};
const Clarice = {
  "1900": {
    F: 25
  },
  "1901": {
    F: 30
  },
  "1902": {
    F: 27
  },
  "1903": {
    F: 28
  },
  "1904": {
    F: 28
  },
  "1905": {
    F: 28
  },
  "1906": {
    F: 35
  },
  "1907": {
    F: 34
  },
  "1908": {
    F: 31
  },
  "1909": {
    F: 27
  },
  "1910": {
    F: 33
  },
  "1911": {
    F: 28
  },
  "1912": {
    F: 25
  },
  "1913": {
    F: 24
  },
  "1914": {
    F: 24
  },
  "1915": {
    F: 22
  },
  "1916": {
    F: 29
  },
  "1917": {
    F: 29
  },
  "1918": {
    F: 27
  },
  "1919": {
    F: 25
  },
  "1920": {
    F: 19
  },
  "1921": {
    F: 13
  },
  "1922": {
    F: 19
  },
  "1923": {
    F: 15
  },
  "1925": {
    F: 18
  },
  "1926": {
    F: 21
  },
  "1927": {
    F: 10
  },
  "1929": {
    F: 13
  },
  "1930": {
    F: 14
  }
};
const Clark = {
  "1961": {
    M: 14
  },
  "1965": {
    M: 11
  },
  "1969": {
    M: 10
  },
  "1971": {
    M: 10
  },
  "1972": {
    M: 10
  },
  "1974": {
    M: 10
  }
};
const Claud = {
  "1901": {
    M: 10
  },
  "1903": {
    M: 15
  },
  "1904": {
    M: 13
  },
  "1905": {
    M: 13
  },
  "1906": {
    M: 15
  },
  "1907": {
    M: 11
  },
  "1909": {
    M: 14
  },
  "1912": {
    M: 10
  }
};
const Claude = {
  "1900": {
    M: 33
  },
  "1901": {
    M: 41
  },
  "1902": {
    M: 22
  },
  "1903": {
    M: 40
  },
  "1904": {
    M: 29
  },
  "1905": {
    M: 45
  },
  "1906": {
    M: 52
  },
  "1907": {
    M: 48
  },
  "1908": {
    M: 50
  },
  "1909": {
    M: 41
  },
  "1910": {
    M: 44
  },
  "1911": {
    M: 46
  },
  "1912": {
    M: 35
  },
  "1913": {
    M: 43
  },
  "1914": {
    M: 37
  },
  "1915": {
    M: 33
  },
  "1916": {
    M: 35
  },
  "1917": {
    M: 47
  },
  "1918": {
    M: 16
  },
  "1919": {
    M: 32
  },
  "1920": {
    M: 27
  },
  "1921": {
    M: 39
  },
  "1922": {
    M: 24
  },
  "1923": {
    M: 27
  },
  "1924": {
    M: 13
  },
  "1925": {
    M: 18
  },
  "1926": {
    M: 15
  },
  "1927": {
    M: 14
  },
  "1928": {
    M: 12
  },
  "1931": {
    M: 16
  },
  "1932": {
    M: 10
  },
  "1933": {
    M: 10
  },
  "1934": {
    M: 19
  },
  "1936": {
    M: 11
  },
  "1938": {
    M: 11
  },
  "1951": {
    M: 10
  }
};
const Claudia = {
  "1945": {
    F: 10
  },
  "1972": {
    F: 12
  },
  "1973": {
    F: 11
  },
  "1974": {
    F: 10
  },
  "1984": {
    F: 12
  },
  "1985": {
    F: 12
  },
  "1988": {
    F: 12
  },
  "1991": {
    F: 11
  },
  "1992": {
    F: 17
  },
  "1993": {
    F: 31
  },
  "1994": {
    F: 54
  },
  "1995": {
    F: 76
  },
  "1996": {
    F: 115
  },
  "1997": {
    F: 80
  },
  "1998": {
    F: 106
  },
  "1999": {
    F: 84
  },
  "2000": {
    F: 67
  },
  "2001": {
    F: 73
  },
  "2002": {
    F: 50
  },
  "2003": {
    F: 44
  },
  "2004": {
    F: 47
  },
  "2005": {
    F: 34
  },
  "2006": {
    F: 43
  },
  "2007": {
    F: 21
  },
  "2008": {
    F: 35
  },
  "2009": {
    F: 30
  },
  "2010": {
    F: 38
  },
  "2011": {
    F: 30
  },
  "2012": {
    F: 25
  },
  "2013": {
    F: 22
  },
  "2014": {
    F: 17
  },
  "2015": {
    F: 20
  },
  "2016": {
    F: 14
  },
  "2017": {
    F: 19
  },
  "2018": {
    F: 15
  },
  "2019": {
    F: 11
  },
  "2021": {
    F: 12
  }
};
const Claudine = {
  "1969": {
    F: 11
  },
  "1970": {
    F: 17
  },
  "1971": {
    F: 22
  },
  "1972": {
    F: 17
  },
  "1973": {
    F: 19
  },
  "1974": {
    F: 24
  },
  "1975": {
    F: 13
  }
};
const Clay = {
  "2003": {
    M: 10
  },
  "2005": {
    M: 11
  }
};
const Clayton = {
  "1960": {
    M: 14
  },
  "1962": {
    M: 20
  },
  "1963": {
    M: 25
  },
  "1964": {
    M: 20
  },
  "1965": {
    M: 21
  },
  "1966": {
    M: 14
  },
  "1967": {
    M: 16
  },
  "1968": {
    M: 38
  },
  "1969": {
    M: 34
  },
  "1970": {
    M: 26
  },
  "1971": {
    M: 32
  },
  "1972": {
    M: 34
  },
  "1973": {
    M: 25
  },
  "1974": {
    M: 41
  },
  "1975": {
    M: 55
  },
  "1976": {
    M: 59
  },
  "1977": {
    M: 48
  },
  "1978": {
    M: 35
  },
  "1979": {
    M: 33
  },
  "1980": {
    M: 24
  },
  "1981": {
    M: 16
  },
  "1982": {
    M: 20
  },
  "1983": {
    M: 24
  },
  "1984": {
    M: 26
  },
  "1985": {
    M: 18
  },
  "1986": {
    M: 17
  },
  "1987": {
    M: 25
  },
  "1988": {
    M: 27
  },
  "1989": {
    M: 11
  },
  "1990": {
    M: 10
  },
  "1991": {
    M: 25
  },
  "1992": {
    M: 17
  },
  "1993": {
    M: 17
  },
  "1994": {
    M: 17
  },
  "1995": {
    M: 24
  },
  "1996": {
    M: 12
  },
  "1997": {
    M: 12
  },
  "1999": {
    M: 14
  },
  "2000": {
    M: 15
  },
  "2001": {
    M: 12
  },
  "2002": {
    M: 16
  },
  "2003": {
    M: 20
  },
  "2004": {
    M: 10
  },
  "2006": {
    M: 12
  },
  "2018": {
    M: 10
  }
};
const Clement = {
  "1900": {
    M: 10
  },
  "1903": {
    M: 15
  },
  "1904": {
    M: 11
  },
  "1905": {
    M: 16
  },
  "1908": {
    M: 12
  },
  "1909": {
    M: 13
  },
  "1910": {
    M: 11
  },
  "1911": {
    M: 16
  },
  "1912": {
    M: 10
  },
  "1913": {
    M: 15
  },
  "1915": {
    M: 10
  },
  "1917": {
    M: 14
  },
  "1918": {
    M: 13
  },
  "1919": {
    M: 10
  },
  "1920": {
    M: 12
  },
  "1922": {
    M: 12
  },
  "1923": {
    M: 11
  },
  "1929": {
    M: 12
  },
  "1954": {
    M: 10
  }
};
const Clementine = {
  "2017": {
    F: 18
  },
  "2019": {
    F: 13
  }
};
const Cleo = {
  "1990": {
    F: 10
  },
  "2005": {
    F: 10
  },
  "2006": {
    F: 10
  },
  "2007": {
    F: 16
  },
  "2008": {
    F: 10
  },
  "2009": {
    F: 12
  },
  "2010": {
    F: 13
  },
  "2011": {
    F: 15
  },
  "2012": {
    F: 25
  },
  "2013": {
    F: 15
  },
  "2014": {
    F: 17
  },
  "2015": {
    F: 22
  },
  "2016": {
    F: 24
  },
  "2017": {
    F: 25
  },
  "2018": {
    F: 27
  },
  "2019": {
    F: 27
  },
  "2020": {
    F: 33
  },
  "2021": {
    F: 45
  }
};
const Cleveland = {
  "1996": {
    M: 10
  },
  "1999": {
    M: 12
  },
  "2008": {
    M: 10
  }
};
const Clifford = {
  "1900": {
    M: 35
  },
  "1901": {
    M: 19
  },
  "1902": {
    M: 26
  },
  "1903": {
    M: 29
  },
  "1904": {
    M: 40
  },
  "1905": {
    M: 39
  },
  "1906": {
    M: 48
  },
  "1907": {
    M: 48
  },
  "1908": {
    M: 54
  },
  "1909": {
    M: 67
  },
  "1910": {
    M: 66
  },
  "1911": {
    M: 68
  },
  "1912": {
    M: 56
  },
  "1913": {
    M: 69
  },
  "1914": {
    M: 85
  },
  "1915": {
    M: 69
  },
  "1916": {
    M: 71
  },
  "1917": {
    M: 71
  },
  "1918": {
    M: 53
  },
  "1919": {
    M: 57
  },
  "1920": {
    M: 83
  },
  "1921": {
    M: 68
  },
  "1922": {
    M: 68
  },
  "1923": {
    M: 55
  },
  "1924": {
    M: 68
  },
  "1925": {
    M: 58
  },
  "1926": {
    M: 55
  },
  "1927": {
    M: 52
  },
  "1928": {
    M: 40
  },
  "1929": {
    M: 53
  },
  "1930": {
    M: 45
  },
  "1931": {
    M: 38
  },
  "1932": {
    M: 36
  },
  "1933": {
    M: 32
  },
  "1934": {
    M: 24
  },
  "1935": {
    M: 27
  },
  "1936": {
    M: 30
  },
  "1937": {
    M: 28
  },
  "1938": {
    M: 30
  },
  "1939": {
    M: 30
  },
  "1940": {
    M: 38
  },
  "1941": {
    M: 30
  },
  "1942": {
    M: 30
  },
  "1943": {
    M: 25
  },
  "1944": {
    M: 47
  },
  "1945": {
    M: 43
  },
  "1946": {
    M: 48
  },
  "1947": {
    M: 28
  },
  "1948": {
    M: 43
  },
  "1949": {
    M: 35
  },
  "1950": {
    M: 30
  },
  "1951": {
    M: 45
  },
  "1952": {
    M: 37
  },
  "1953": {
    M: 38
  },
  "1954": {
    M: 35
  },
  "1955": {
    M: 29
  },
  "1956": {
    M: 33
  },
  "1957": {
    M: 34
  },
  "1958": {
    M: 30
  },
  "1959": {
    M: 27
  },
  "1960": {
    M: 32
  },
  "1961": {
    M: 31
  },
  "1962": {
    M: 36
  },
  "1963": {
    M: 17
  },
  "1964": {
    M: 31
  },
  "1965": {
    M: 20
  },
  "1966": {
    M: 20
  },
  "1967": {
    M: 24
  },
  "1968": {
    M: 18
  },
  "1969": {
    M: 17
  },
  "1970": {
    M: 14
  },
  "1971": {
    M: 15
  },
  "1972": {
    M: 11
  },
  "1973": {
    M: 16
  },
  "1974": {
    M: 13
  },
  "1975": {
    M: 15
  },
  "1976": {
    M: 15
  },
  "1977": {
    M: 14
  },
  "1978": {
    M: 11
  },
  "1979": {
    M: 13
  },
  "1980": {
    M: 16
  },
  "1981": {
    M: 12
  },
  "1982": {
    M: 17
  },
  "1984": {
    M: 12
  },
  "1985": {
    M: 14
  },
  "1987": {
    M: 11
  }
};
const Clifton = {
  "1909": {
    M: 15
  },
  "1922": {
    M: 10
  },
  "1948": {
    M: 10
  },
  "1976": {
    M: 24
  },
  "1977": {
    M: 14
  },
  "1978": {
    M: 11
  }
};
const Clint = {
  "1969": {
    M: 10
  },
  "1970": {
    M: 13
  },
  "1971": {
    M: 17
  },
  "1972": {
    M: 28
  },
  "1973": {
    M: 26
  },
  "1974": {
    M: 35
  },
  "1975": {
    M: 19
  },
  "1976": {
    M: 22
  },
  "1977": {
    M: 12
  },
  "1979": {
    M: 20
  },
  "1980": {
    M: 11
  },
  "1981": {
    M: 16
  },
  "1982": {
    M: 15
  },
  "1984": {
    M: 11
  }
};
const Clinton = {
  "1949": {
    M: 11
  },
  "1951": {
    M: 13
  },
  "1952": {
    M: 11
  },
  "1953": {
    M: 11
  },
  "1956": {
    M: 13
  },
  "1959": {
    M: 18
  },
  "1960": {
    M: 15
  },
  "1961": {
    M: 24
  },
  "1962": {
    M: 15
  },
  "1963": {
    M: 28
  },
  "1964": {
    M: 22
  },
  "1965": {
    M: 33
  },
  "1966": {
    M: 35
  },
  "1967": {
    M: 25
  },
  "1968": {
    M: 37
  },
  "1969": {
    M: 50
  },
  "1970": {
    M: 54
  },
  "1971": {
    M: 98
  },
  "1972": {
    M: 93
  },
  "1973": {
    M: 117
  },
  "1974": {
    M: 110
  },
  "1975": {
    M: 85
  },
  "1976": {
    M: 90
  },
  "1977": {
    M: 84
  },
  "1978": {
    M: 58
  },
  "1979": {
    M: 82
  },
  "1980": {
    M: 62
  },
  "1981": {
    M: 63
  },
  "1982": {
    M: 46
  },
  "1983": {
    M: 62
  },
  "1984": {
    M: 48
  },
  "1985": {
    M: 47
  },
  "1986": {
    M: 44
  },
  "1987": {
    M: 27
  },
  "1988": {
    M: 24
  },
  "1989": {
    M: 24
  },
  "1990": {
    M: 23
  },
  "1991": {
    M: 25
  },
  "1992": {
    M: 16
  },
  "1993": {
    M: 25
  },
  "1994": {
    M: 13
  },
  "1995": {
    M: 10
  },
  "1996": {
    M: 10
  }
};
const Clive = {
  "1901": {
    M: 10
  },
  "1903": {
    M: 14
  },
  "1905": {
    M: 13
  },
  "1909": {
    M: 24
  },
  "1910": {
    M: 12
  },
  "1913": {
    M: 12
  },
  "1914": {
    M: 11
  },
  "1915": {
    M: 16
  },
  "1916": {
    M: 16
  },
  "1917": {
    M: 17
  },
  "1920": {
    M: 15
  },
  "1921": {
    M: 21
  },
  "1922": {
    M: 15
  },
  "1923": {
    M: 19
  },
  "1924": {
    M: 22
  },
  "1925": {
    M: 14
  },
  "1926": {
    M: 21
  },
  "1927": {
    M: 17
  },
  "1928": {
    M: 20
  },
  "1929": {
    M: 17
  },
  "1930": {
    M: 25
  },
  "1931": {
    M: 30
  },
  "1932": {
    M: 26
  },
  "1933": {
    M: 38
  },
  "1934": {
    M: 43
  },
  "1935": {
    M: 39
  },
  "1936": {
    M: 31
  },
  "1937": {
    M: 33
  },
  "1938": {
    M: 32
  },
  "1939": {
    M: 29
  },
  "1940": {
    M: 47
  },
  "1941": {
    M: 47
  },
  "1942": {
    M: 32
  },
  "1943": {
    M: 40
  },
  "1944": {
    M: 44
  },
  "1945": {
    M: 55
  },
  "1946": {
    M: 65
  },
  "1947": {
    M: 69
  },
  "1948": {
    M: 61
  },
  "1949": {
    M: 68
  },
  "1950": {
    M: 53
  },
  "1951": {
    M: 45
  },
  "1952": {
    M: 61
  },
  "1953": {
    M: 60
  },
  "1954": {
    M: 47
  },
  "1955": {
    M: 43
  },
  "1956": {
    M: 38
  },
  "1957": {
    M: 48
  },
  "1958": {
    M: 42
  },
  "1959": {
    M: 40
  },
  "1960": {
    M: 45
  },
  "1961": {
    M: 41
  },
  "1962": {
    M: 42
  },
  "1963": {
    M: 37
  },
  "1964": {
    M: 23
  },
  "1965": {
    M: 21
  },
  "1966": {
    M: 17
  },
  "1967": {
    M: 27
  },
  "1968": {
    M: 14
  },
  "1969": {
    M: 20
  },
  "1970": {
    M: 20
  },
  "1971": {
    M: 11
  },
  "1972": {
    M: 12
  },
  "1973": {
    M: 15
  },
  "1974": {
    M: 13
  }
};
const Clyde = {
  "1913": {
    M: 13
  },
  "1918": {
    M: 10
  },
  "1921": {
    M: 13
  },
  "1923": {
    M: 10
  },
  "1925": {
    M: 10
  },
  "1926": {
    M: 11
  },
  "1945": {
    M: 12
  },
  "1952": {
    M: 10
  },
  "1955": {
    M: 11
  },
  "1960": {
    M: 12
  },
  "1961": {
    M: 10
  },
  "1962": {
    M: 13
  }
};
const Coby = {
  "2004": {
    M: 15
  },
  "2006": {
    M: 17
  },
  "2008": {
    M: 17
  },
  "2009": {
    M: 12
  },
  "2010": {
    M: 14
  },
  "2012": {
    M: 22
  },
  "2013": {
    M: 15
  },
  "2014": {
    M: 17
  },
  "2015": {
    M: 12
  },
  "2016": {
    M: 10
  },
  "2020": {
    M: 10
  }
};
const Coco = {
  "2006": {
    F: 11
  },
  "2007": {
    F: 14
  },
  "2008": {
    F: 20
  },
  "2009": {
    F: 15
  },
  "2010": {
    F: 16
  },
  "2011": {
    F: 16
  },
  "2012": {
    F: 14
  },
  "2013": {
    F: 14
  },
  "2016": {
    F: 15
  },
  "2018": {
    F: 16
  },
  "2019": {
    F: 16
  },
  "2020": {
    F: 14
  },
  "2021": {
    F: 20
  }
};
const Codey = {
  "1991": {
    M: 10
  }
};
const Codie = {
  "1991": {
    M: 14
  },
  "1996": {
    F: 12
  }
};
const Cody = {
  "1982": {
    M: 11
  },
  "1983": {
    M: 10
  },
  "1984": {
    M: 28
  },
  "1985": {
    M: 36
  },
  "1986": {
    M: 62
  },
  "1987": {
    M: 60
  },
  "1988": {
    M: 41
  },
  "1989": {
    M: 66
  },
  "1990": {
    M: 86
  },
  "1991": {
    M: 157
  },
  "1992": {
    F: 13,
    M: 92
  },
  "1993": {
    M: 81
  },
  "1994": {
    M: 85
  },
  "1995": {
    M: 150
  },
  "1996": {
    M: 137
  },
  "1997": {
    M: 126
  },
  "1998": {
    M: 105
  },
  "1999": {
    M: 86
  },
  "2000": {
    M: 121
  },
  "2001": {
    M: 98
  },
  "2002": {
    M: 101
  },
  "2003": {
    M: 102
  },
  "2004": {
    M: 121
  },
  "2005": {
    M: 116
  },
  "2006": {
    M: 105
  },
  "2007": {
    M: 102
  },
  "2008": {
    M: 99
  },
  "2009": {
    M: 83
  },
  "2010": {
    M: 88
  },
  "2011": {
    M: 67
  },
  "2012": {
    M: 45
  },
  "2013": {
    M: 44
  },
  "2014": {
    M: 41
  },
  "2015": {
    M: 32
  },
  "2016": {
    M: 33
  },
  "2017": {
    M: 18
  },
  "2018": {
    M: 17
  },
  "2019": {
    M: 19
  },
  "2020": {
    M: 15
  },
  "2021": {
    M: 18
  }
};
const Coen = {
  "2013": {
    M: 11
  },
  "2014": {
    M: 15
  },
  "2016": {
    M: 16
  },
  "2017": {
    M: 13
  },
  "2018": {
    M: 12
  },
  "2019": {
    M: 13
  }
};
const Cohen = {
  "2005": {
    M: 34
  },
  "2006": {
    M: 35
  },
  "2007": {
    M: 34
  },
  "2008": {
    M: 29
  },
  "2009": {
    M: 53
  },
  "2010": {
    M: 47
  },
  "2011": {
    M: 46
  },
  "2012": {
    M: 35
  },
  "2013": {
    M: 36
  },
  "2014": {
    M: 50
  },
  "2015": {
    M: 39
  },
  "2016": {
    M: 32
  },
  "2017": {
    M: 52
  },
  "2018": {
    M: 36
  },
  "2019": {
    M: 34
  },
  "2020": {
    M: 29
  },
  "2021": {
    M: 20
  }
};
const Colby = {
  "2001": {
    M: 11
  }
};
const Cole = {
  "1983": {
    M: 38
  },
  "1984": {
    M: 25
  },
  "1985": {
    M: 30
  },
  "1986": {
    M: 35
  },
  "1987": {
    M: 40
  },
  "1988": {
    M: 26
  },
  "1989": {
    M: 38
  },
  "1990": {
    M: 27
  },
  "1991": {
    M: 22
  },
  "1992": {
    M: 25
  },
  "1993": {
    M: 23
  },
  "1994": {
    M: 24
  },
  "1995": {
    M: 27
  },
  "1996": {
    M: 24
  },
  "1997": {
    M: 34
  },
  "1998": {
    M: 54
  },
  "1999": {
    M: 44
  },
  "2000": {
    M: 66
  },
  "2001": {
    M: 74
  },
  "2002": {
    M: 58
  },
  "2003": {
    M: 86
  },
  "2004": {
    M: 75
  },
  "2005": {
    M: 65
  },
  "2006": {
    M: 59
  },
  "2007": {
    M: 45
  },
  "2008": {
    M: 57
  },
  "2009": {
    M: 59
  },
  "2010": {
    M: 44
  },
  "2011": {
    M: 47
  },
  "2012": {
    M: 47
  },
  "2013": {
    M: 36
  },
  "2014": {
    M: 42
  },
  "2015": {
    M: 44
  },
  "2016": {
    M: 40
  },
  "2017": {
    M: 39
  },
  "2018": {
    M: 36
  },
  "2019": {
    M: 31
  },
  "2020": {
    M: 27
  },
  "2021": {
    M: 29
  }
};
const Coleen = {
  "1929": {
    F: 14
  },
  "1930": {
    F: 11
  },
  "1932": {
    F: 15
  },
  "1933": {
    F: 12
  },
  "1934": {
    F: 11
  },
  "1935": {
    F: 13
  },
  "1938": {
    F: 16
  },
  "1939": {
    F: 11
  },
  "1940": {
    F: 22
  },
  "1941": {
    F: 14
  },
  "1942": {
    F: 16
  },
  "1943": {
    F: 10
  },
  "1946": {
    F: 15
  },
  "1947": {
    F: 12
  }
};
const Colette = {
  "1969": {
    F: 14
  },
  "1972": {
    F: 11
  }
};
const Colin = {
  "1900": {
    M: 26
  },
  "1901": {
    M: 29
  },
  "1902": {
    M: 29
  },
  "1903": {
    M: 33
  },
  "1904": {
    M: 40
  },
  "1905": {
    M: 48
  },
  "1906": {
    M: 47
  },
  "1907": {
    M: 52
  },
  "1908": {
    M: 61
  },
  "1909": {
    M: 71
  },
  "1910": {
    M: 90
  },
  "1911": {
    M: 66
  },
  "1912": {
    M: 95
  },
  "1913": {
    M: 101
  },
  "1914": {
    M: 138
  },
  "1915": {
    M: 108
  },
  "1916": {
    M: 125
  },
  "1917": {
    M: 104
  },
  "1918": {
    M: 116
  },
  "1919": {
    M: 132
  },
  "1920": {
    M: 148
  },
  "1921": {
    M: 150
  },
  "1922": {
    M: 183
  },
  "1923": {
    M: 164
  },
  "1924": {
    M: 173
  },
  "1925": {
    M: 220
  },
  "1926": {
    M: 221
  },
  "1927": {
    M: 203
  },
  "1928": {
    M: 208
  },
  "1929": {
    M: 214
  },
  "1930": {
    M: 209
  },
  "1931": {
    M: 208
  },
  "1932": {
    M: 197
  },
  "1933": {
    M: 197
  },
  "1934": {
    M: 185
  },
  "1935": {
    M: 193
  },
  "1936": {
    M: 231
  },
  "1937": {
    M: 256
  },
  "1938": {
    M: 224
  },
  "1939": {
    M: 221
  },
  "1940": {
    M: 258
  },
  "1941": {
    M: 256
  },
  "1942": {
    M: 278
  },
  "1943": {
    M: 222
  },
  "1944": {
    M: 284
  },
  "1945": {
    M: 279
  },
  "1946": {
    M: 304
  },
  "1947": {
    M: 304
  },
  "1948": {
    M: 310
  },
  "1949": {
    M: 301
  },
  "1950": {
    M: 293
  },
  "1951": {
    M: 294
  },
  "1952": {
    M: 277
  },
  "1953": {
    M: 310
  },
  "1954": {
    M: 281
  },
  "1955": {
    M: 274
  },
  "1956": {
    M: 256
  },
  "1957": {
    M: 267
  },
  "1958": {
    M: 267
  },
  "1959": {
    M: 280
  },
  "1960": {
    M: 249
  },
  "1961": {
    M: 244
  },
  "1962": {
    M: 227
  },
  "1963": {
    M: 210
  },
  "1964": {
    M: 193
  },
  "1965": {
    M: 189
  },
  "1966": {
    M: 143
  },
  "1967": {
    M: 145
  },
  "1968": {
    M: 159
  },
  "1969": {
    M: 138
  },
  "1970": {
    M: 110
  },
  "1971": {
    M: 98
  },
  "1972": {
    M: 100
  },
  "1973": {
    M: 61
  },
  "1974": {
    M: 84
  },
  "1975": {
    M: 64
  },
  "1976": {
    M: 57
  },
  "1977": {
    M: 43
  },
  "1978": {
    M: 45
  },
  "1979": {
    M: 40
  },
  "1980": {
    M: 26
  },
  "1981": {
    M: 38
  },
  "1982": {
    M: 37
  },
  "1983": {
    M: 32
  },
  "1984": {
    M: 48
  },
  "1985": {
    M: 29
  },
  "1986": {
    M: 26
  },
  "1987": {
    M: 29
  },
  "1988": {
    M: 27
  },
  "1989": {
    M: 32
  },
  "1990": {
    M: 24
  },
  "1991": {
    M: 20
  },
  "1992": {
    M: 19
  },
  "1993": {
    M: 15
  },
  "1994": {
    M: 16
  },
  "1995": {
    M: 17
  },
  "1996": {
    M: 15
  },
  "1997": {
    M: 11
  },
  "1999": {
    M: 10
  },
  "2005": {
    M: 11
  },
  "2008": {
    M: 10
  },
  "2021": {
    M: 10
  }
};
const Colleen = {
  "1917": {
    F: 10
  },
  "1920": {
    F: 21
  },
  "1922": {
    F: 14
  },
  "1923": {
    F: 23
  },
  "1924": {
    F: 47
  },
  "1925": {
    F: 34
  },
  "1926": {
    F: 47
  },
  "1927": {
    F: 70
  },
  "1928": {
    F: 97
  },
  "1929": {
    F: 102
  },
  "1930": {
    F: 106
  },
  "1931": {
    F: 107
  },
  "1932": {
    F: 109
  },
  "1933": {
    F: 128
  },
  "1934": {
    F: 116
  },
  "1935": {
    F: 114
  },
  "1936": {
    F: 149
  },
  "1937": {
    F: 164
  },
  "1938": {
    F: 172
  },
  "1939": {
    F: 209
  },
  "1940": {
    F: 199
  },
  "1941": {
    F: 180
  },
  "1942": {
    F: 170
  },
  "1943": {
    F: 185
  },
  "1944": {
    F: 212
  },
  "1945": {
    F: 229
  },
  "1946": {
    F: 232
  },
  "1947": {
    F: 203
  },
  "1948": {
    F: 196
  },
  "1949": {
    F: 201
  },
  "1950": {
    F: 169
  },
  "1951": {
    F: 166
  },
  "1952": {
    F: 167
  },
  "1953": {
    F: 144
  },
  "1954": {
    F: 148
  },
  "1955": {
    F: 151
  },
  "1956": {
    F: 127
  },
  "1957": {
    F: 124
  },
  "1958": {
    F: 125
  },
  "1959": {
    F: 144
  },
  "1960": {
    F: 96
  },
  "1961": {
    F: 113
  },
  "1962": {
    F: 102
  },
  "1963": {
    F: 94
  },
  "1964": {
    F: 70
  },
  "1965": {
    F: 73
  },
  "1966": {
    F: 55
  },
  "1967": {
    F: 53
  },
  "1968": {
    F: 52
  },
  "1969": {
    F: 38
  },
  "1970": {
    F: 35
  },
  "1971": {
    F: 42
  },
  "1972": {
    F: 33
  },
  "1973": {
    F: 20
  },
  "1974": {
    F: 24
  },
  "1975": {
    F: 17
  },
  "1976": {
    F: 12
  },
  "1978": {
    F: 17
  },
  "1979": {
    F: 24
  },
  "1980": {
    F: 15
  },
  "1982": {
    F: 14
  },
  "1983": {
    F: 12
  },
  "1985": {
    F: 10
  },
  "1990": {
    F: 12
  }
};
const Collin = {
  "1924": {
    M: 10
  }
};
const Colton = {
  "2012": {
    M: 17
  },
  "2014": {
    M: 11
  },
  "2015": {
    M: 11
  },
  "2016": {
    M: 12
  },
  "2017": {
    M: 20
  },
  "2018": {
    M: 17
  },
  "2019": {
    M: 16
  },
  "2020": {
    M: 14
  },
  "2021": {
    M: 31
  }
};
const Conan = {
  "1983": {
    M: 15
  },
  "1984": {
    M: 15
  },
  "1986": {
    M: 12
  }
};
const Conner = {
  "1995": {
    M: 11
  },
  "1999": {
    M: 11
  },
  "2004": {
    M: 10
  },
  "2005": {
    M: 14
  },
  "2006": {
    M: 14
  },
  "2007": {
    M: 15
  },
  "2010": {
    M: 13
  },
  "2011": {
    M: 15
  }
};
const Connie = {
  "1962": {
    F: 13
  },
  "1963": {
    F: 12
  },
  "1964": {
    F: 10
  },
  "1965": {
    F: 16
  },
  "1966": {
    F: 10
  },
  "1967": {
    F: 14
  },
  "1968": {
    F: 12
  },
  "1986": {
    F: 12
  },
  "1987": {
    F: 10
  },
  "1988": {
    F: 11
  },
  "1989": {
    F: 12
  },
  "1990": {
    F: 10
  },
  "2000": {
    F: 13
  }
};
const Connor = {
  "1988": {
    M: 11
  },
  "1989": {
    M: 10
  },
  "1990": {
    M: 12
  },
  "1991": {
    M: 24
  },
  "1992": {
    M: 73
  },
  "1993": {
    M: 141
  },
  "1994": {
    M: 128
  },
  "1995": {
    M: 185
  },
  "1996": {
    M: 251
  },
  "1997": {
    M: 260
  },
  "1998": {
    M: 255
  },
  "1999": {
    M: 303
  },
  "2000": {
    M: 210
  },
  "2001": {
    M: 233
  },
  "2002": {
    M: 175
  },
  "2003": {
    M: 200
  },
  "2004": {
    M: 215
  },
  "2005": {
    M: 208
  },
  "2006": {
    M: 191
  },
  "2007": {
    M: 180
  },
  "2008": {
    M: 184
  },
  "2009": {
    M: 200
  },
  "2010": {
    M: 178
  },
  "2011": {
    M: 160
  },
  "2012": {
    M: 155
  },
  "2013": {
    M: 117
  },
  "2014": {
    M: 131
  },
  "2015": {
    M: 113
  },
  "2016": {
    M: 145
  },
  "2017": {
    M: 90
  },
  "2018": {
    M: 104
  },
  "2019": {
    M: 73
  },
  "2020": {
    M: 72
  },
  "2021": {
    M: 62
  }
};
const Conor = {
  "1988": {
    M: 12
  },
  "1989": {
    M: 10
  },
  "1990": {
    M: 11
  },
  "1991": {
    M: 15
  },
  "1992": {
    M: 29
  },
  "1993": {
    M: 47
  },
  "1994": {
    M: 49
  },
  "1995": {
    M: 52
  },
  "1996": {
    M: 54
  },
  "1997": {
    M: 39
  },
  "1998": {
    M: 33
  },
  "1999": {
    M: 24
  },
  "2000": {
    M: 35
  },
  "2001": {
    M: 33
  },
  "2002": {
    M: 29
  },
  "2003": {
    M: 26
  },
  "2004": {
    M: 20
  },
  "2005": {
    M: 28
  },
  "2006": {
    M: 24
  },
  "2007": {
    M: 21
  },
  "2008": {
    M: 21
  },
  "2009": {
    M: 27
  },
  "2010": {
    M: 18
  },
  "2011": {
    M: 14
  },
  "2012": {
    M: 17
  },
  "2013": {
    M: 22
  },
  "2014": {
    M: 12
  },
  "2015": {
    M: 18
  },
  "2016": {
    M: 26
  },
  "2017": {
    M: 36
  },
  "2018": {
    M: 14
  },
  "2019": {
    M: 15
  },
  "2020": {
    M: 17
  },
  "2021": {
    M: 17
  }
};
const Conrad = {
  "1964": {
    M: 10
  },
  "1965": {
    M: 11
  },
  "1966": {
    M: 15
  },
  "1967": {
    M: 15
  },
  "1968": {
    M: 13
  },
  "1969": {
    M: 15
  },
  "1970": {
    M: 18
  },
  "1971": {
    M: 23
  },
  "1972": {
    M: 26
  },
  "1973": {
    M: 20
  },
  "1975": {
    M: 16
  },
  "1976": {
    M: 19
  },
  "1977": {
    M: 13
  },
  "1979": {
    M: 16
  },
  "1980": {
    M: 17
  },
  "1981": {
    M: 23
  },
  "1982": {
    M: 19
  },
  "1983": {
    M: 16
  },
  "1984": {
    M: 25
  },
  "1985": {
    M: 12
  },
  "1986": {
    M: 22
  },
  "1987": {
    M: 20
  },
  "1988": {
    M: 18
  },
  "1989": {
    M: 22
  },
  "1990": {
    M: 19
  },
  "1991": {
    M: 20
  },
  "1992": {
    M: 17
  },
  "1993": {
    M: 18
  },
  "1994": {
    M: 16
  },
  "1996": {
    M: 15
  },
  "1997": {
    M: 16
  },
  "1998": {
    M: 14
  },
  "1999": {
    M: 17
  },
  "2000": {
    M: 18
  },
  "2002": {
    M: 20
  },
  "2003": {
    M: 13
  },
  "2004": {
    M: 16
  },
  "2005": {
    M: 28
  },
  "2006": {
    M: 10
  },
  "2007": {
    M: 15
  },
  "2008": {
    M: 20
  },
  "2009": {
    M: 19
  },
  "2010": {
    M: 13
  },
  "2011": {
    M: 22
  },
  "2012": {
    M: 15
  },
  "2013": {
    M: 18
  },
  "2014": {
    M: 10
  },
  "2015": {
    M: 14
  },
  "2016": {
    M: 20
  },
  "2021": {
    M: 10
  }
};
const Constance = {
  "1900": {
    F: 44
  },
  "1901": {
    F: 56
  },
  "1902": {
    F: 45
  },
  "1903": {
    F: 57
  },
  "1904": {
    F: 64
  },
  "1905": {
    F: 62
  },
  "1906": {
    F: 68
  },
  "1907": {
    F: 61
  },
  "1908": {
    F: 74
  },
  "1909": {
    F: 68
  },
  "1910": {
    F: 58
  },
  "1911": {
    F: 61
  },
  "1912": {
    F: 65
  },
  "1913": {
    F: 58
  },
  "1914": {
    F: 58
  },
  "1915": {
    F: 50
  },
  "1916": {
    F: 59
  },
  "1917": {
    F: 62
  },
  "1918": {
    F: 47
  },
  "1919": {
    F: 39
  },
  "1920": {
    F: 63
  },
  "1921": {
    F: 68
  },
  "1922": {
    F: 49
  },
  "1923": {
    F: 39
  },
  "1924": {
    F: 41
  },
  "1925": {
    F: 39
  },
  "1926": {
    F: 42
  },
  "1927": {
    F: 39
  },
  "1928": {
    F: 22
  },
  "1929": {
    F: 31
  },
  "1930": {
    F: 21
  },
  "1931": {
    F: 26
  },
  "1932": {
    F: 34
  },
  "1933": {
    F: 17
  },
  "1934": {
    F: 30
  },
  "1935": {
    F: 17
  },
  "1936": {
    F: 10
  },
  "1937": {
    F: 18
  },
  "1938": {
    F: 10
  },
  "1940": {
    F: 13
  },
  "1941": {
    F: 12
  },
  "1942": {
    F: 10
  },
  "1946": {
    F: 11
  },
  "1947": {
    F: 10
  },
  "1950": {
    F: 10
  },
  "1953": {
    F: 10
  },
  "1962": {
    F: 10
  },
  "1990": {
    F: 11
  },
  "2000": {
    F: 10
  },
  "2008": {
    F: 14
  }
};
const Cooper = {
  "1999": {
    M: 11
  },
  "2000": {
    M: 12
  },
  "2002": {
    M: 15
  },
  "2003": {
    M: 24
  },
  "2004": {
    M: 44
  },
  "2005": {
    M: 44
  },
  "2006": {
    M: 72
  },
  "2007": {
    M: 124
  },
  "2008": {
    M: 150
  },
  "2009": {
    M: 190
  },
  "2010": {
    M: 236
  },
  "2011": {
    M: 231
  },
  "2012": {
    M: 227
  },
  "2013": {
    M: 194
  },
  "2014": {
    M: 171
  },
  "2015": {
    M: 181
  },
  "2016": {
    M: 176
  },
  "2017": {
    M: 172
  },
  "2018": {
    M: 163
  },
  "2019": {
    M: 143
  },
  "2020": {
    M: 163
  },
  "2021": {
    M: 117
  }
};
const Cora = {
  "1902": {
    F: 13
  },
  "1903": {
    F: 10
  },
  "1905": {
    F: 11
  },
  "1906": {
    F: 11
  },
  "1907": {
    F: 13
  },
  "1909": {
    F: 14
  },
  "1910": {
    F: 10
  },
  "1911": {
    F: 14
  },
  "1914": {
    F: 12
  },
  "1915": {
    F: 14
  },
  "1917": {
    F: 14
  },
  "1921": {
    F: 11
  },
  "1926": {
    F: 10
  },
  "2012": {
    F: 10
  },
  "2013": {
    F: 15
  },
  "2014": {
    F: 14
  },
  "2015": {
    F: 20
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 28
  },
  "2018": {
    F: 49
  },
  "2019": {
    F: 50
  },
  "2020": {
    F: 21
  },
  "2021": {
    F: 38
  }
};
const Coral = {
  "1914": {
    F: 12
  },
  "1916": {
    F: 10
  },
  "1921": {
    F: 16
  },
  "1923": {
    F: 13
  },
  "1924": {
    F: 10
  },
  "1925": {
    F: 13
  },
  "1926": {
    F: 13
  },
  "1927": {
    F: 18
  },
  "1928": {
    F: 17
  },
  "1929": {
    F: 18
  },
  "1930": {
    F: 15
  },
  "1931": {
    F: 18
  },
  "1932": {
    F: 10
  },
  "1933": {
    F: 15
  },
  "1934": {
    F: 13
  },
  "1935": {
    F: 13
  },
  "1936": {
    F: 25
  },
  "1937": {
    F: 16
  },
  "1938": {
    F: 22
  },
  "1939": {
    F: 23
  },
  "1940": {
    F: 21
  },
  "1941": {
    F: 21
  },
  "1942": {
    F: 30
  },
  "1943": {
    F: 25
  },
  "1944": {
    F: 17
  },
  "1945": {
    F: 22
  },
  "1946": {
    F: 32
  },
  "1947": {
    F: 20
  },
  "1948": {
    F: 21
  },
  "1949": {
    F: 27
  },
  "1950": {
    F: 15
  },
  "1951": {
    F: 16
  },
  "1952": {
    F: 11
  },
  "1953": {
    F: 13
  },
  "1954": {
    F: 14
  },
  "1955": {
    F: 19
  },
  "1956": {
    F: 10
  },
  "1957": {
    F: 21
  },
  "1958": {
    F: 14
  },
  "1959": {
    F: 15
  },
  "1960": {
    F: 19
  },
  "1961": {
    F: 15
  },
  "1962": {
    F: 12
  },
  "1963": {
    F: 19
  },
  "1964": {
    F: 18
  },
  "1965": {
    F: 15
  },
  "1968": {
    F: 10
  }
};
const Coralie = {
  "1957": {
    F: 11
  },
  "1958": {
    F: 10
  },
  "1960": {
    F: 11
  },
  "1961": {
    F: 10
  }
};
const Corban = {
  "1995": {
    M: 18
  },
  "1997": {
    M: 16
  },
  "1998": {
    M: 14
  },
  "1999": {
    M: 19
  },
  "2000": {
    M: 32
  },
  "2001": {
    M: 22
  },
  "2002": {
    M: 31
  },
  "2003": {
    M: 26
  },
  "2004": {
    M: 31
  },
  "2005": {
    M: 27
  },
  "2006": {
    M: 21
  },
  "2007": {
    M: 23
  },
  "2008": {
    M: 23
  },
  "2009": {
    M: 26
  },
  "2010": {
    M: 11
  },
  "2011": {
    M: 15
  },
  "2012": {
    M: 16
  },
  "2013": {
    M: 10
  },
  "2014": {
    M: 16
  },
  "2015": {
    M: 28
  },
  "2016": {
    M: 21
  },
  "2017": {
    M: 18
  }
};
const Corbin = {
  "1993": {
    M: 11
  },
  "1995": {
    M: 12
  },
  "1996": {
    M: 10
  },
  "1997": {
    M: 11
  },
  "1998": {
    M: 15
  },
  "1999": {
    M: 11
  },
  "2000": {
    M: 15
  },
  "2001": {
    M: 16
  },
  "2002": {
    M: 11
  },
  "2003": {
    M: 14
  },
  "2004": {
    M: 10
  },
  "2005": {
    M: 24
  },
  "2006": {
    M: 18
  },
  "2007": {
    M: 14
  },
  "2008": {
    M: 23
  },
  "2009": {
    M: 18
  },
  "2010": {
    M: 22
  },
  "2012": {
    M: 15
  },
  "2016": {
    M: 13
  },
  "2019": {
    M: 10
  }
};
const Corbyn = {
  "2003": {
    M: 12
  },
  "2007": {
    M: 11
  },
  "2009": {
    M: 13
  }
};
const Cordell = {
  "2008": {
    M: 20
  },
  "2009": {
    M: 23
  }
};
const Corey = {
  "1970": {
    M: 38
  },
  "1971": {
    M: 31
  },
  "1972": {
    M: 63
  },
  "1973": {
    M: 78
  },
  "1974": {
    M: 48
  },
  "1975": {
    M: 70
  },
  "1976": {
    M: 90
  },
  "1977": {
    M: 56
  },
  "1978": {
    M: 72
  },
  "1979": {
    M: 60
  },
  "1980": {
    M: 61
  },
  "1981": {
    M: 59
  },
  "1982": {
    M: 52
  },
  "1983": {
    M: 64
  },
  "1984": {
    M: 49
  },
  "1985": {
    M: 56
  },
  "1986": {
    M: 56
  },
  "1987": {
    M: 48
  },
  "1988": {
    M: 56
  },
  "1989": {
    M: 101
  },
  "1990": {
    M: 107
  },
  "1991": {
    M: 131
  },
  "1992": {
    M: 103
  },
  "1993": {
    M: 99
  },
  "1994": {
    M: 80
  },
  "1995": {
    M: 73
  },
  "1996": {
    M: 71
  },
  "1997": {
    M: 65
  },
  "1998": {
    M: 53
  },
  "1999": {
    M: 35
  },
  "2000": {
    M: 26
  },
  "2001": {
    M: 25
  },
  "2002": {
    M: 23
  },
  "2003": {
    M: 32
  },
  "2004": {
    M: 30
  },
  "2005": {
    M: 35
  },
  "2006": {
    M: 23
  },
  "2007": {
    M: 21
  },
  "2008": {
    M: 27
  },
  "2009": {
    M: 23
  },
  "2010": {
    M: 28
  },
  "2011": {
    M: 25
  },
  "2012": {
    M: 16
  },
  "2013": {
    M: 10
  },
  "2014": {
    M: 10
  },
  "2015": {
    M: 15
  },
  "2016": {
    M: 14
  },
  "2018": {
    M: 11
  }
};
const Corin = {
  "1978": {
    M: 11
  },
  "2009": {
    M: 12
  }
};
const Corina = {
  "1961": {
    F: 21
  },
  "1964": {
    F: 12
  },
  "1966": {
    F: 10
  },
  "1970": {
    F: 15
  },
  "1971": {
    F: 10
  },
  "1975": {
    F: 20
  },
  "1976": {
    F: 13
  },
  "1977": {
    F: 16
  },
  "1990": {
    F: 10
  }
};
const Corinna = {
  "1961": {
    F: 10
  }
};
const Corinne = {
  "1955": {
    F: 11
  },
  "1957": {
    F: 10
  },
  "1962": {
    F: 11
  },
  "1966": {
    F: 12
  },
  "1979": {
    F: 25
  },
  "1980": {
    F: 20
  },
  "1981": {
    F: 13
  }
};
const Cormac = {
  "2017": {
    M: 10
  }
};
const Cornelius = {
  "1912": {
    M: 12
  }
};
const Corrina = {
  "1961": {
    F: 23
  },
  "1962": {
    F: 16
  },
  "1970": {
    F: 12
  },
  "1979": {
    F: 10
  },
  "1980": {
    F: 12
  },
  "1982": {
    F: 13
  }
};
const Cortez = {
  "2008": {
    M: 10
  },
  "2014": {
    M: 12
  }
};
const Cory = {
  "1970": {
    M: 14
  },
  "1971": {
    M: 13
  },
  "1972": {
    M: 42
  },
  "1973": {
    M: 33
  },
  "1974": {
    M: 45
  },
  "1975": {
    M: 36
  },
  "1976": {
    M: 30
  },
  "1977": {
    M: 29
  },
  "1978": {
    M: 41
  },
  "1979": {
    M: 41
  },
  "1980": {
    M: 32
  },
  "1981": {
    M: 35
  },
  "1982": {
    M: 34
  },
  "1983": {
    M: 39
  },
  "1984": {
    M: 29
  },
  "1985": {
    M: 28
  },
  "1986": {
    M: 38
  },
  "1987": {
    M: 36
  },
  "1988": {
    M: 42
  },
  "1989": {
    M: 50
  },
  "1990": {
    M: 49
  },
  "1991": {
    M: 74
  },
  "1992": {
    M: 52
  },
  "1993": {
    M: 55
  },
  "1994": {
    M: 45
  },
  "1995": {
    M: 49
  },
  "1996": {
    M: 41
  },
  "1997": {
    M: 33
  },
  "1998": {
    M: 43
  },
  "1999": {
    M: 25
  },
  "2000": {
    M: 29
  },
  "2001": {
    M: 24
  },
  "2002": {
    M: 26
  },
  "2003": {
    M: 34
  },
  "2004": {
    M: 40
  },
  "2005": {
    M: 18
  },
  "2006": {
    M: 21
  },
  "2007": {
    M: 23
  },
  "2009": {
    M: 15
  },
  "2010": {
    M: 23
  },
  "2011": {
    M: 20
  },
  "2012": {
    M: 15
  },
  "2013": {
    M: 10
  }
};
const Courtenay = {
  "1987": {
    F: 10
  },
  "1989": {
    F: 18
  },
  "1991": {
    F: 11
  },
  "1993": {
    F: 14
  },
  "1994": {
    F: 13
  },
  "1997": {
    F: 11
  }
};
const Courteney = {
  "1995": {
    F: 17
  },
  "1996": {
    F: 17
  },
  "1997": {
    F: 12
  }
};
const Courtney = {
  "1980": {
    F: 11
  },
  "1981": {
    F: 10
  },
  "1982": {
    F: 17
  },
  "1983": {
    F: 27
  },
  "1984": {
    F: 33,
    M: 12
  },
  "1985": {
    F: 54,
    M: 13
  },
  "1986": {
    F: 50,
    M: 10
  },
  "1987": {
    F: 107,
    M: 22
  },
  "1988": {
    F: 119,
    M: 11
  },
  "1989": {
    F: 164,
    M: 13
  },
  "1990": {
    F: 182
  },
  "1991": {
    F: 170
  },
  "1992": {
    F: 165
  },
  "1993": {
    F: 203
  },
  "1994": {
    F: 235
  },
  "1995": {
    F: 226
  },
  "1996": {
    F: 218
  },
  "1997": {
    F: 201
  },
  "1998": {
    F: 192
  },
  "1999": {
    F: 155
  },
  "2000": {
    F: 147
  },
  "2001": {
    F: 106
  },
  "2002": {
    F: 68
  },
  "2003": {
    F: 67
  },
  "2004": {
    F: 57
  },
  "2005": {
    F: 32
  },
  "2006": {
    F: 44
  },
  "2007": {
    F: 26
  },
  "2008": {
    F: 21
  },
  "2009": {
    F: 29
  },
  "2010": {
    F: 24
  },
  "2011": {
    F: 13
  },
  "2012": {
    F: 24
  },
  "2013": {
    F: 10
  },
  "2015": {
    F: 10
  },
  "2017": {
    F: 11
  }
};
const Craig = {
  "1945": {
    M: 21
  },
  "1946": {
    M: 21
  },
  "1947": {
    M: 22
  },
  "1948": {
    M: 30
  },
  "1949": {
    M: 32
  },
  "1950": {
    M: 41
  },
  "1951": {
    M: 38
  },
  "1952": {
    M: 76
  },
  "1953": {
    M: 114
  },
  "1954": {
    M: 97
  },
  "1955": {
    M: 112
  },
  "1956": {
    M: 128
  },
  "1957": {
    M: 142
  },
  "1958": {
    M: 163
  },
  "1959": {
    M: 200
  },
  "1960": {
    M: 441
  },
  "1961": {
    M: 378
  },
  "1962": {
    M: 454
  },
  "1963": {
    M: 487
  },
  "1964": {
    M: 519
  },
  "1965": {
    M: 443
  },
  "1966": {
    M: 501
  },
  "1967": {
    M: 537
  },
  "1968": {
    M: 526
  },
  "1969": {
    M: 620
  },
  "1970": {
    M: 632
  },
  "1971": {
    M: 788
  },
  "1972": {
    M: 725
  },
  "1973": {
    M: 655
  },
  "1974": {
    M: 534
  },
  "1975": {
    M: 445
  },
  "1976": {
    M: 362
  },
  "1977": {
    M: 350
  },
  "1978": {
    M: 290
  },
  "1979": {
    M: 260
  },
  "1980": {
    M: 248
  },
  "1981": {
    M: 219
  },
  "1982": {
    M: 205
  },
  "1983": {
    M: 192
  },
  "1984": {
    M: 183
  },
  "1985": {
    M: 144
  },
  "1986": {
    M: 140
  },
  "1987": {
    M: 129
  },
  "1988": {
    M: 107
  },
  "1989": {
    M: 108
  },
  "1990": {
    M: 84
  },
  "1991": {
    M: 94
  },
  "1992": {
    M: 67
  },
  "1993": {
    M: 53
  },
  "1994": {
    M: 48
  },
  "1995": {
    M: 37
  },
  "1996": {
    M: 31
  },
  "1997": {
    M: 22
  },
  "1998": {
    M: 21
  },
  "1999": {
    M: 13
  },
  "2000": {
    M: 10
  },
  "2001": {
    M: 11
  },
  "2003": {
    M: 14
  },
  "2006": {
    M: 10
  },
  "2007": {
    M: 12
  }
};
const Cruz = {
  "1989": {
    M: 12
  },
  "2002": {
    M: 13
  },
  "2004": {
    M: 14
  },
  "2005": {
    M: 24
  },
  "2006": {
    M: 37
  },
  "2007": {
    M: 44
  },
  "2008": {
    M: 48
  },
  "2009": {
    M: 46
  },
  "2010": {
    M: 35
  },
  "2011": {
    M: 52
  },
  "2012": {
    M: 33
  },
  "2013": {
    M: 32
  },
  "2014": {
    M: 27
  },
  "2015": {
    M: 26
  },
  "2016": {
    M: 20
  },
  "2017": {
    M: 21
  },
  "2018": {
    M: 18
  },
  "2019": {
    M: 13
  },
  "2020": {
    M: 18
  },
  "2021": {
    M: 21
  }
};
const Cruze = {
  "2011": {
    M: 15
  },
  "2012": {
    M: 11
  },
  "2013": {
    M: 15
  },
  "2017": {
    M: 10
  }
};
const Crystal = {
  "1977": {
    F: 11
  },
  "1979": {
    F: 30
  },
  "1980": {
    F: 38
  },
  "1981": {
    F: 39
  },
  "1982": {
    F: 57
  },
  "1983": {
    F: 90
  },
  "1984": {
    F: 57
  },
  "1985": {
    F: 58
  },
  "1986": {
    F: 61
  },
  "1987": {
    F: 37
  },
  "1988": {
    F: 48
  },
  "1989": {
    F: 53
  },
  "1990": {
    F: 40
  },
  "1991": {
    F: 49
  },
  "1992": {
    F: 55
  },
  "1993": {
    F: 60
  },
  "1994": {
    F: 78
  },
  "1995": {
    F: 66
  },
  "1996": {
    F: 57
  },
  "1997": {
    F: 47
  },
  "1998": {
    F: 35
  },
  "1999": {
    F: 44
  },
  "2000": {
    F: 44
  },
  "2001": {
    F: 43
  },
  "2002": {
    F: 42
  },
  "2003": {
    F: 33
  },
  "2004": {
    F: 34
  },
  "2005": {
    F: 19
  },
  "2006": {
    F: 28
  },
  "2007": {
    F: 22
  },
  "2008": {
    F: 23
  },
  "2009": {
    F: 21
  },
  "2010": {
    F: 24
  },
  "2011": {
    F: 15
  },
  "2012": {
    F: 10
  },
  "2013": {
    F: 19
  },
  "2014": {
    F: 10
  }
};
const Cullen = {
  "1996": {
    M: 11
  },
  "1997": {
    M: 16
  },
  "1998": {
    M: 28
  },
  "1999": {
    M: 28
  },
  "2000": {
    M: 29
  },
  "2001": {
    M: 22
  },
  "2002": {
    M: 15
  },
  "2003": {
    M: 10
  },
  "2004": {
    M: 19
  },
  "2005": {
    M: 11
  },
  "2007": {
    M: 12
  },
  "2008": {
    M: 11
  },
  "2009": {
    M: 12
  },
  "2010": {
    M: 21
  },
  "2011": {
    M: 15
  },
  "2012": {
    M: 10
  },
  "2013": {
    M: 10
  },
  "2015": {
    M: 11
  },
  "2018": {
    M: 15
  },
  "2020": {
    M: 10
  }
};
const Curtis = {
  "1979": {
    M: 11
  },
  "1981": {
    M: 20
  },
  "1982": {
    M: 14
  },
  "1984": {
    M: 10
  },
  "1987": {
    M: 19
  },
  "1988": {
    M: 17
  },
  "1989": {
    M: 18
  },
  "1990": {
    M: 23
  },
  "1991": {
    M: 17
  },
  "1992": {
    M: 20
  },
  "1993": {
    M: 17
  },
  "1994": {
    M: 20
  },
  "1995": {
    M: 22
  },
  "1996": {
    M: 31
  },
  "1997": {
    M: 24
  },
  "1998": {
    M: 20
  },
  "1999": {
    M: 24
  },
  "2000": {
    M: 15
  },
  "2001": {
    M: 20
  },
  "2002": {
    M: 13
  },
  "2004": {
    M: 22
  },
  "2005": {
    M: 12
  },
  "2006": {
    M: 16
  },
  "2008": {
    M: 20
  },
  "2009": {
    M: 24
  },
  "2012": {
    M: 10
  },
  "2016": {
    M: 10
  }
};
const Cushla = {
  "1944": {
    F: 10
  },
  "1946": {
    F: 12
  },
  "1947": {
    F: 10
  },
  "1948": {
    F: 18
  },
  "1950": {
    F: 11
  },
  "1951": {
    F: 11
  },
  "1952": {
    F: 10
  },
  "1953": {
    F: 16
  },
  "1955": {
    F: 18
  },
  "1956": {
    F: 12
  },
  "1957": {
    F: 18
  },
  "1959": {
    F: 14
  },
  "1960": {
    F: 15
  },
  "1961": {
    F: 17
  },
  "1962": {
    F: 20
  },
  "1963": {
    F: 20
  },
  "1964": {
    F: 18
  },
  "1965": {
    F: 15
  },
  "1966": {
    F: 14
  },
  "1967": {
    F: 11
  },
  "1968": {
    F: 16
  },
  "1969": {
    F: 25
  },
  "1970": {
    F: 16
  },
  "1971": {
    F: 19
  },
  "1972": {
    F: 18
  },
  "1973": {
    F: 27
  },
  "1974": {
    F: 25
  },
  "1975": {
    F: 23
  },
  "1976": {
    F: 15
  },
  "1977": {
    F: 14
  },
  "1978": {
    F: 25
  },
  "1979": {
    F: 23
  },
  "1980": {
    F: 12
  },
  "1981": {
    F: 17
  },
  "1983": {
    F: 14
  },
  "1984": {
    F: 10
  },
  "1985": {
    F: 12
  },
  "1986": {
    F: 11
  },
  "1987": {
    F: 12
  },
  "1996": {
    F: 12
  }
};
const Cuthbert = {
  "1918": {
    M: 10
  }
};
const Cynthia = {
  "1921": {
    F: 16
  },
  "1922": {
    F: 17
  },
  "1923": {
    F: 15
  },
  "1925": {
    F: 26
  },
  "1926": {
    F: 22
  },
  "1927": {
    F: 10
  },
  "1928": {
    F: 17
  },
  "1929": {
    F: 20
  },
  "1930": {
    F: 17
  },
  "1931": {
    F: 11
  },
  "1932": {
    F: 17
  },
  "1933": {
    F: 20
  },
  "1934": {
    F: 21
  },
  "1935": {
    F: 21
  },
  "1936": {
    F: 18
  },
  "1937": {
    F: 20
  },
  "1938": {
    F: 22
  },
  "1939": {
    F: 21
  },
  "1940": {
    F: 34
  },
  "1941": {
    F: 30
  },
  "1942": {
    F: 28
  },
  "1943": {
    F: 24
  },
  "1944": {
    F: 28
  },
  "1945": {
    F: 32
  },
  "1946": {
    F: 33
  },
  "1947": {
    F: 50
  },
  "1948": {
    F: 53
  },
  "1949": {
    F: 40
  },
  "1950": {
    F: 39
  },
  "1951": {
    F: 32
  },
  "1952": {
    F: 32
  },
  "1953": {
    F: 30
  },
  "1954": {
    F: 31
  },
  "1955": {
    F: 43
  },
  "1956": {
    F: 37
  },
  "1957": {
    F: 45
  },
  "1958": {
    F: 37
  },
  "1959": {
    F: 38
  },
  "1960": {
    F: 39
  },
  "1961": {
    F: 30
  },
  "1962": {
    F: 30
  },
  "1963": {
    F: 34
  },
  "1964": {
    F: 33
  },
  "1965": {
    F: 19
  },
  "1966": {
    F: 31
  },
  "1967": {
    F: 18
  },
  "1968": {
    F: 30
  },
  "1969": {
    F: 35
  },
  "1970": {
    F: 29
  },
  "1971": {
    F: 26
  },
  "1972": {
    F: 20
  },
  "1973": {
    F: 20
  },
  "1974": {
    F: 24
  },
  "1975": {
    F: 21
  },
  "1977": {
    F: 13
  },
  "1978": {
    F: 13
  },
  "1979": {
    F: 17
  },
  "1983": {
    F: 11
  },
  "1984": {
    F: 10
  },
  "1991": {
    F: 11
  },
  "1995": {
    F: 13
  },
  "2003": {
    F: 10
  },
  "2012": {
    F: 13
  },
  "2015": {
    F: 11
  }
};
const Cyril = {
  "1900": {
    M: 96
  },
  "1901": {
    M: 69
  },
  "1902": {
    M: 77
  },
  "1903": {
    M: 85
  },
  "1904": {
    M: 107
  },
  "1905": {
    M: 95
  },
  "1906": {
    M: 99
  },
  "1907": {
    M: 97
  },
  "1908": {
    M: 119
  },
  "1909": {
    M: 120
  },
  "1910": {
    M: 126
  },
  "1911": {
    M: 99
  },
  "1912": {
    M: 106
  },
  "1913": {
    M: 107
  },
  "1914": {
    M: 92
  },
  "1915": {
    M: 116
  },
  "1916": {
    M: 100
  },
  "1917": {
    M: 122
  },
  "1918": {
    M: 105
  },
  "1919": {
    M: 78
  },
  "1920": {
    M: 69
  },
  "1921": {
    M: 68
  },
  "1922": {
    M: 82
  },
  "1923": {
    M: 80
  },
  "1924": {
    M: 57
  },
  "1925": {
    M: 76
  },
  "1926": {
    M: 52
  },
  "1927": {
    M: 60
  },
  "1928": {
    M: 61
  },
  "1929": {
    M: 55
  },
  "1930": {
    M: 39
  },
  "1931": {
    M: 41
  },
  "1932": {
    M: 35
  },
  "1933": {
    M: 29
  },
  "1934": {
    M: 31
  },
  "1935": {
    M: 19
  },
  "1936": {
    M: 23
  },
  "1937": {
    M: 20
  },
  "1938": {
    M: 13
  },
  "1939": {
    M: 25
  },
  "1940": {
    M: 33
  },
  "1941": {
    M: 28
  },
  "1942": {
    M: 44
  },
  "1943": {
    M: 20
  },
  "1944": {
    M: 24
  },
  "1945": {
    M: 19
  },
  "1946": {
    M: 20
  },
  "1947": {
    M: 14
  },
  "1948": {
    M: 19
  },
  "1949": {
    M: 24
  },
  "1950": {
    M: 17
  },
  "1951": {
    M: 17
  },
  "1952": {
    M: 24
  },
  "1953": {
    M: 21
  },
  "1954": {
    M: 11
  },
  "1955": {
    M: 14
  },
  "1956": {
    M: 18
  },
  "1957": {
    M: 14
  },
  "1958": {
    M: 14
  },
  "1959": {
    M: 10
  },
  "1960": {
    M: 12
  },
  "1961": {
    M: 15
  },
  "1962": {
    M: 14
  },
  "1963": {
    M: 12
  },
  "1964": {
    M: 10
  }
};
const Cyrus = {
  "1998": {
    M: 10
  },
  "1999": {
    M: 10
  },
  "2001": {
    M: 11
  },
  "2003": {
    M: 16
  },
  "2004": {
    M: 12
  },
  "2005": {
    M: 10
  },
  "2006": {
    M: 24
  },
  "2007": {
    M: 28
  },
  "2008": {
    M: 26
  },
  "2009": {
    M: 27
  },
  "2010": {
    M: 31
  },
  "2011": {
    M: 22
  },
  "2012": {
    M: 30
  },
  "2013": {
    M: 27
  },
  "2014": {
    M: 23
  },
  "2015": {
    M: 18
  },
  "2016": {
    M: 22
  },
  "2017": {
    M: 15
  },
  "2018": {
    M: 20
  },
  "2019": {
    M: 27
  },
  "2021": {
    M: 19
  }
};
const Dahlia = {
  "2020": {
    F: 11
  },
  "2021": {
    F: 10
  }
};
const Daisy = {
  "1900": {
    F: 40
  },
  "1901": {
    F: 42
  },
  "1902": {
    F: 34
  },
  "1903": {
    F: 32
  },
  "1904": {
    F: 42
  },
  "1905": {
    F: 30
  },
  "1906": {
    F: 42
  },
  "1907": {
    F: 35
  },
  "1908": {
    F: 46
  },
  "1909": {
    F: 34
  },
  "1910": {
    F: 36
  },
  "1911": {
    F: 38
  },
  "1912": {
    F: 30
  },
  "1913": {
    F: 28
  },
  "1914": {
    F: 28
  },
  "1915": {
    F: 28
  },
  "1916": {
    F: 40
  },
  "1917": {
    F: 21
  },
  "1918": {
    F: 32
  },
  "1919": {
    F: 16
  },
  "1920": {
    F: 21
  },
  "1921": {
    F: 19
  },
  "1922": {
    F: 17
  },
  "1923": {
    F: 22
  },
  "1924": {
    F: 10
  },
  "1925": {
    F: 15
  },
  "1939": {
    F: 11
  },
  "1993": {
    F: 12
  },
  "1994": {
    F: 11
  },
  "1996": {
    F: 12
  },
  "1997": {
    F: 10
  },
  "1998": {
    F: 12
  },
  "2000": {
    F: 12
  },
  "2001": {
    F: 11
  },
  "2002": {
    F: 23
  },
  "2003": {
    F: 14
  },
  "2004": {
    F: 24
  },
  "2005": {
    F: 18
  },
  "2006": {
    F: 27
  },
  "2007": {
    F: 27
  },
  "2008": {
    F: 31
  },
  "2009": {
    F: 49
  },
  "2010": {
    F: 48
  },
  "2011": {
    F: 34
  },
  "2012": {
    F: 50
  },
  "2013": {
    F: 24
  },
  "2014": {
    F: 24
  },
  "2015": {
    F: 49
  },
  "2016": {
    F: 39
  },
  "2017": {
    F: 35
  },
  "2018": {
    F: 45
  },
  "2019": {
    F: 43
  },
  "2020": {
    F: 44
  },
  "2021": {
    F: 72
  }
};
const Dakota = {
  "1995": {
    F: 11,
    M: 10
  },
  "1996": {
    F: 10
  },
  "1997": {
    M: 14
  },
  "1998": {
    M: 10
  },
  "1999": {
    M: 12
  },
  "2002": {
    M: 10
  },
  "2003": {
    M: 10
  },
  "2004": {
    M: 13
  },
  "2005": {
    F: 12,
    M: 13
  },
  "2006": {
    F: 33,
    M: 13
  },
  "2007": {
    F: 19
  },
  "2008": {
    F: 26
  },
  "2009": {
    F: 20
  },
  "2010": {
    F: 26,
    M: 12
  },
  "2011": {
    F: 20
  },
  "2012": {
    F: 22
  },
  "2013": {
    F: 12
  },
  "2014": {
    F: 13
  },
  "2015": {
    F: 15
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 22
  },
  "2018": {
    F: 15,
    M: 12
  },
  "2019": {
    F: 12
  },
  "2020": {
    F: 19
  },
  "2021": {
    F: 12
  }
};
const Dale = {
  "1940": {
    F: 16,
    M: 10
  },
  "1941": {
    F: 11,
    M: 11
  },
  "1942": {
    M: 11
  },
  "1943": {
    F: 27,
    M: 12
  },
  "1944": {
    F: 16,
    M: 11
  },
  "1945": {
    F: 13,
    M: 11
  },
  "1946": {
    F: 30,
    M: 17
  },
  "1947": {
    F: 38
  },
  "1948": {
    F: 38,
    M: 18
  },
  "1949": {
    F: 42,
    M: 19
  },
  "1950": {
    F: 38
  },
  "1951": {
    F: 34,
    M: 14
  },
  "1952": {
    F: 36,
    M: 17
  },
  "1953": {
    F: 40,
    M: 25
  },
  "1954": {
    F: 43,
    M: 16
  },
  "1955": {
    F: 35,
    M: 25
  },
  "1956": {
    F: 28,
    M: 25
  },
  "1957": {
    F: 27,
    M: 27
  },
  "1958": {
    F: 27,
    M: 28
  },
  "1959": {
    F: 36,
    M: 22
  },
  "1960": {
    F: 31,
    M: 40
  },
  "1961": {
    F: 35,
    M: 38
  },
  "1962": {
    F: 47,
    M: 57
  },
  "1963": {
    F: 28,
    M: 38
  },
  "1964": {
    F: 21,
    M: 35
  },
  "1965": {
    F: 22,
    M: 55
  },
  "1966": {
    F: 20,
    M: 58
  },
  "1967": {
    F: 27,
    M: 48
  },
  "1968": {
    F: 14,
    M: 51
  },
  "1969": {
    F: 22,
    M: 57
  },
  "1970": {
    F: 31,
    M: 48
  },
  "1971": {
    F: 24,
    M: 62
  },
  "1972": {
    F: 10,
    M: 45
  },
  "1973": {
    F: 13,
    M: 45
  },
  "1974": {
    F: 14,
    M: 44
  },
  "1975": {
    M: 44
  },
  "1976": {
    M: 58
  },
  "1977": {
    F: 13,
    M: 43
  },
  "1978": {
    M: 40
  },
  "1979": {
    M: 29
  },
  "1980": {
    F: 10,
    M: 43
  },
  "1981": {
    M: 31
  },
  "1982": {
    M: 31
  },
  "1983": {
    M: 15
  },
  "1984": {
    M: 29
  },
  "1985": {
    M: 34
  },
  "1986": {
    M: 24
  },
  "1987": {
    M: 19
  },
  "1988": {
    M: 26
  },
  "1989": {
    M: 29
  },
  "1990": {
    M: 27
  },
  "1991": {
    M: 14
  },
  "1992": {
    M: 15
  },
  "1993": {
    M: 15
  },
  "1994": {
    M: 21
  },
  "1995": {
    M: 25
  },
  "1996": {
    M: 12
  }
};
const Dallas = {
  "1946": {
    F: 17
  },
  "1954": {
    F: 11
  },
  "1955": {
    F: 11
  },
  "1956": {
    F: 10
  },
  "1960": {
    F: 14
  },
  "1962": {
    F: 12,
    M: 11
  },
  "1964": {
    M: 10
  },
  "1965": {
    F: 12
  },
  "1966": {
    M: 12
  },
  "1967": {
    M: 13
  },
  "1968": {
    F: 12,
    M: 14
  },
  "1969": {
    F: 13,
    M: 11
  },
  "1970": {
    M: 18
  },
  "1971": {
    M: 17
  },
  "1972": {
    F: 14,
    M: 20
  },
  "1973": {
    M: 18
  },
  "1974": {
    M: 21
  },
  "1975": {
    M: 29
  },
  "1976": {
    M: 13
  },
  "1977": {
    M: 23
  },
  "1978": {
    M: 21
  },
  "1979": {
    M: 27
  },
  "1980": {
    F: 15,
    M: 26
  },
  "1981": {
    M: 23
  },
  "1982": {
    M: 14
  },
  "1985": {
    M: 11
  },
  "1987": {
    M: 10
  },
  "1990": {
    M: 24
  },
  "1991": {
    M: 12
  },
  "1992": {
    M: 27
  },
  "1993": {
    M: 12
  },
  "1994": {
    M: 29
  },
  "1995": {
    M: 26
  },
  "1996": {
    M: 25
  },
  "1997": {
    M: 25
  },
  "1998": {
    M: 26
  },
  "1999": {
    F: 10,
    M: 24
  },
  "2000": {
    M: 30
  },
  "2001": {
    M: 23
  },
  "2002": {
    M: 29
  },
  "2003": {
    M: 22
  },
  "2004": {
    M: 22
  },
  "2005": {
    M: 15
  },
  "2006": {
    M: 15
  },
  "2007": {
    M: 22
  },
  "2008": {
    M: 29
  },
  "2009": {
    M: 15
  },
  "2010": {
    M: 31
  },
  "2011": {
    M: 30
  },
  "2012": {
    M: 33
  },
  "2013": {
    M: 39
  },
  "2014": {
    M: 27
  },
  "2015": {
    M: 34
  },
  "2016": {
    M: 23
  },
  "2017": {
    M: 20
  },
  "2018": {
    M: 10
  },
  "2019": {
    M: 10
  },
  "2020": {
    M: 12
  },
  "2021": {
    M: 17
  }
};
const Dalton = {
  "1994": {
    M: 10
  },
  "1997": {
    M: 12
  }
};
const Damian = {
  "1964": {
    M: 12
  },
  "1965": {
    M: 18
  },
  "1966": {
    M: 22
  },
  "1967": {
    M: 15
  },
  "1968": {
    M: 24
  },
  "1969": {
    M: 31
  },
  "1970": {
    M: 44
  },
  "1971": {
    M: 64
  },
  "1972": {
    M: 81
  },
  "1973": {
    M: 84
  },
  "1974": {
    M: 84
  },
  "1975": {
    M: 95
  },
  "1976": {
    M: 97
  },
  "1977": {
    M: 103
  },
  "1978": {
    M: 84
  },
  "1979": {
    M: 71
  },
  "1980": {
    M: 91
  },
  "1981": {
    M: 79
  },
  "1982": {
    M: 85
  },
  "1983": {
    M: 73
  },
  "1984": {
    M: 49
  },
  "1985": {
    M: 57
  },
  "1986": {
    M: 32
  },
  "1987": {
    M: 33
  },
  "1988": {
    M: 37
  },
  "1989": {
    M: 41
  },
  "1990": {
    M: 38
  },
  "1991": {
    M: 46
  },
  "1992": {
    M: 31
  },
  "1993": {
    M: 38
  },
  "1994": {
    M: 27
  },
  "1995": {
    M: 40
  },
  "1996": {
    M: 26
  },
  "1997": {
    M: 24
  },
  "1998": {
    M: 21
  },
  "1999": {
    M: 24
  },
  "2000": {
    M: 20
  },
  "2001": {
    M: 24
  },
  "2002": {
    M: 30
  },
  "2003": {
    M: 16
  },
  "2004": {
    M: 19
  },
  "2005": {
    M: 16
  },
  "2006": {
    M: 26
  },
  "2007": {
    M: 11
  },
  "2008": {
    M: 18
  },
  "2009": {
    M: 17
  },
  "2010": {
    M: 19
  },
  "2011": {
    M: 16
  },
  "2012": {
    M: 18
  },
  "2013": {
    M: 14
  },
  "2014": {
    M: 11
  },
  "2015": {
    M: 17
  },
  "2018": {
    M: 15
  },
  "2019": {
    M: 11
  }
};
const Damien = {
  "1970": {
    M: 16
  },
  "1971": {
    M: 17
  },
  "1972": {
    M: 20
  },
  "1973": {
    M: 40
  },
  "1974": {
    M: 36
  },
  "1975": {
    M: 51
  },
  "1976": {
    M: 45
  },
  "1977": {
    M: 27
  },
  "1978": {
    M: 26
  },
  "1979": {
    M: 37
  },
  "1980": {
    M: 32
  },
  "1981": {
    M: 47
  },
  "1982": {
    M: 47
  },
  "1983": {
    M: 51
  },
  "1984": {
    M: 42
  },
  "1985": {
    M: 36
  },
  "1986": {
    M: 31
  },
  "1987": {
    M: 27
  },
  "1988": {
    M: 29
  },
  "1989": {
    M: 32
  },
  "1990": {
    M: 30
  },
  "1991": {
    M: 34
  },
  "1992": {
    M: 32
  },
  "1993": {
    M: 33
  },
  "1994": {
    M: 25
  },
  "1995": {
    M: 32
  },
  "1996": {
    M: 23
  },
  "1997": {
    M: 18
  },
  "1998": {
    M: 11
  },
  "1999": {
    M: 17
  },
  "2000": {
    M: 25
  },
  "2001": {
    M: 19
  },
  "2002": {
    M: 20
  },
  "2003": {
    M: 22
  },
  "2004": {
    M: 31
  },
  "2005": {
    M: 25
  },
  "2006": {
    M: 27
  },
  "2007": {
    M: 28
  },
  "2008": {
    M: 19
  },
  "2009": {
    M: 25
  },
  "2010": {
    M: 19
  },
  "2011": {
    M: 16
  },
  "2012": {
    M: 11
  },
  "2014": {
    M: 15
  },
  "2016": {
    M: 12
  },
  "2018": {
    M: 13
  }
};
const Damion = {
  "1975": {
    M: 11
  },
  "1976": {
    M: 10
  },
  "1977": {
    M: 10
  },
  "1979": {
    M: 11
  },
  "1981": {
    M: 15
  },
  "1982": {
    M: 10
  }
};
const Damon = {
  "1966": {
    M: 14
  },
  "1968": {
    M: 16
  },
  "1969": {
    M: 27
  },
  "1970": {
    M: 30
  },
  "1971": {
    M: 62
  },
  "1972": {
    M: 55
  },
  "1973": {
    M: 66
  },
  "1974": {
    M: 74
  },
  "1975": {
    M: 67
  },
  "1976": {
    M: 70
  },
  "1977": {
    M: 48
  },
  "1978": {
    M: 32
  },
  "1979": {
    M: 43
  },
  "1980": {
    M: 20
  },
  "1981": {
    M: 22
  },
  "1982": {
    M: 14
  },
  "1983": {
    M: 19
  },
  "1984": {
    M: 15
  },
  "1985": {
    M: 12
  },
  "1986": {
    M: 10
  },
  "1988": {
    M: 11
  },
  "1989": {
    M: 13
  },
  "1990": {
    M: 17
  },
  "1991": {
    M: 22
  },
  "1992": {
    M: 21
  },
  "1993": {
    M: 25
  },
  "1994": {
    M: 27
  },
  "1995": {
    M: 25
  },
  "1996": {
    M: 15
  },
  "1997": {
    M: 22
  },
  "1998": {
    M: 26
  },
  "1999": {
    M: 15
  },
  "2000": {
    M: 19
  },
  "2001": {
    M: 19
  },
  "2002": {
    M: 16
  },
  "2003": {
    M: 12
  },
  "2004": {
    M: 15
  },
  "2005": {
    M: 14
  },
  "2008": {
    M: 10
  },
  "2010": {
    M: 11
  },
  "2011": {
    M: 15
  },
  "2012": {
    M: 17
  },
  "2013": {
    M: 10
  },
  "2014": {
    M: 18
  }
};
const Dana = {
  "1971": {
    F: 13
  },
  "1972": {
    F: 15
  },
  "1973": {
    F: 18
  },
  "1974": {
    F: 14
  },
  "1975": {
    F: 29
  },
  "1976": {
    F: 26
  },
  "1977": {
    F: 32
  },
  "1978": {
    F: 28
  },
  "1979": {
    F: 25
  },
  "1980": {
    F: 29
  },
  "1981": {
    F: 20
  },
  "1982": {
    F: 19
  },
  "1983": {
    F: 28
  },
  "1984": {
    F: 25
  },
  "1985": {
    F: 21
  },
  "1986": {
    F: 17
  },
  "1987": {
    F: 27
  },
  "1988": {
    F: 17
  },
  "1989": {
    F: 17
  },
  "1990": {
    F: 25
  },
  "1991": {
    F: 25
  },
  "1992": {
    F: 20
  },
  "1993": {
    F: 22
  },
  "1994": {
    F: 23
  },
  "1995": {
    F: 28
  },
  "1996": {
    F: 38
  },
  "1997": {
    F: 25
  },
  "1998": {
    F: 39
  },
  "1999": {
    F: 29
  },
  "2000": {
    F: 19
  },
  "2001": {
    F: 17
  },
  "2002": {
    F: 17
  },
  "2005": {
    F: 10
  },
  "2006": {
    F: 10
  },
  "2011": {
    F: 11
  }
};
const Dane = {
  "1971": {
    M: 10
  },
  "1973": {
    M: 10
  },
  "1974": {
    M: 13
  },
  "1975": {
    M: 10
  },
  "1976": {
    M: 15
  },
  "1977": {
    M: 13
  },
  "1978": {
    M: 12
  },
  "1979": {
    M: 19
  },
  "1980": {
    M: 30
  },
  "1981": {
    M: 18
  },
  "1982": {
    M: 31
  },
  "1983": {
    M: 33
  },
  "1984": {
    M: 35
  },
  "1985": {
    M: 25
  },
  "1986": {
    M: 32
  },
  "1987": {
    M: 25
  },
  "1988": {
    M: 30
  },
  "1989": {
    M: 27
  },
  "1990": {
    M: 43
  },
  "1991": {
    M: 23
  },
  "1992": {
    M: 23
  },
  "1993": {
    M: 20
  },
  "1994": {
    M: 24
  },
  "1995": {
    M: 18
  },
  "1996": {
    M: 11
  },
  "1997": {
    M: 18
  },
  "1998": {
    M: 13
  },
  "1999": {
    M: 10
  },
  "2000": {
    M: 10
  },
  "2003": {
    M: 10
  },
  "2005": {
    M: 10
  },
  "2008": {
    M: 12
  },
  "2010": {
    M: 11
  },
  "2016": {
    M: 10
  }
};
const Danelle = {
  "1984": {
    F: 11
  },
  "1988": {
    F: 13
  }
};
const Danica = {
  "1982": {
    F: 11
  },
  "1995": {
    F: 13
  },
  "1996": {
    F: 14
  },
  "1997": {
    F: 10
  },
  "2000": {
    F: 10
  },
  "2005": {
    F: 11
  },
  "2006": {
    F: 12
  },
  "2007": {
    F: 14
  },
  "2008": {
    F: 20
  },
  "2009": {
    F: 20
  },
  "2010": {
    F: 17
  },
  "2011": {
    F: 10
  },
  "2012": {
    F: 11
  },
  "2015": {
    F: 10
  }
};
const Daniel = {
  "1900": {
    M: 27
  },
  "1901": {
    M: 28
  },
  "1902": {
    M: 30
  },
  "1903": {
    M: 32
  },
  "1904": {
    M: 23
  },
  "1905": {
    M: 31
  },
  "1906": {
    M: 34
  },
  "1907": {
    M: 28
  },
  "1908": {
    M: 21
  },
  "1909": {
    M: 24
  },
  "1910": {
    M: 34
  },
  "1911": {
    M: 30
  },
  "1912": {
    M: 30
  },
  "1913": {
    M: 33
  },
  "1914": {
    M: 33
  },
  "1915": {
    M: 33
  },
  "1916": {
    M: 44
  },
  "1917": {
    M: 23
  },
  "1918": {
    M: 35
  },
  "1919": {
    M: 28
  },
  "1920": {
    M: 27
  },
  "1921": {
    M: 34
  },
  "1922": {
    M: 23
  },
  "1923": {
    M: 29
  },
  "1924": {
    M: 23
  },
  "1925": {
    M: 22
  },
  "1926": {
    M: 19
  },
  "1927": {
    M: 20
  },
  "1928": {
    M: 22
  },
  "1929": {
    M: 13
  },
  "1930": {
    M: 26
  },
  "1931": {
    M: 19
  },
  "1932": {
    M: 22
  },
  "1933": {
    M: 25
  },
  "1934": {
    M: 24
  },
  "1935": {
    M: 24
  },
  "1936": {
    M: 28
  },
  "1937": {
    M: 22
  },
  "1938": {
    M: 31
  },
  "1939": {
    M: 24
  },
  "1940": {
    M: 38
  },
  "1941": {
    M: 23
  },
  "1942": {
    M: 32
  },
  "1943": {
    M: 21
  },
  "1944": {
    M: 30
  },
  "1945": {
    M: 35
  },
  "1946": {
    M: 40
  },
  "1947": {
    M: 44
  },
  "1948": {
    M: 39
  },
  "1949": {
    M: 38
  },
  "1950": {
    M: 44
  },
  "1951": {
    M: 46
  },
  "1952": {
    M: 47
  },
  "1953": {
    M: 54
  },
  "1954": {
    M: 49
  },
  "1955": {
    M: 42
  },
  "1956": {
    M: 58
  },
  "1957": {
    M: 75
  },
  "1958": {
    M: 61
  },
  "1959": {
    M: 79
  },
  "1960": {
    M: 88
  },
  "1961": {
    M: 103
  },
  "1962": {
    M: 104
  },
  "1963": {
    M: 92
  },
  "1964": {
    M: 99
  },
  "1965": {
    M: 105
  },
  "1966": {
    M: 103
  },
  "1967": {
    M: 108
  },
  "1968": {
    M: 123
  },
  "1969": {
    M: 178
  },
  "1970": {
    M: 162
  },
  "1971": {
    M: 177
  },
  "1972": {
    M: 225
  },
  "1973": {
    M: 380
  },
  "1974": {
    M: 554
  },
  "1975": {
    M: 588
  },
  "1976": {
    M: 667
  },
  "1977": {
    M: 624
  },
  "1978": {
    M: 581
  },
  "1979": {
    M: 656
  },
  "1980": {
    M: 725
  },
  "1981": {
    M: 682
  },
  "1982": {
    M: 776
  },
  "1983": {
    M: 721
  },
  "1984": {
    M: 740
  },
  "1985": {
    M: 755
  },
  "1986": {
    M: 726
  },
  "1987": {
    M: 779
  },
  "1988": {
    M: 785
  },
  "1989": {
    M: 702
  },
  "1990": {
    M: 724
  },
  "1991": {
    M: 694
  },
  "1992": {
    M: 622
  },
  "1993": {
    M: 567
  },
  "1994": {
    M: 563
  },
  "1995": {
    M: 495
  },
  "1996": {
    M: 485
  },
  "1997": {
    M: 470
  },
  "1998": {
    M: 376
  },
  "1999": {
    M: 396
  },
  "2000": {
    M: 396
  },
  "2001": {
    M: 323
  },
  "2002": {
    M: 311
  },
  "2003": {
    M: 351
  },
  "2004": {
    M: 332
  },
  "2005": {
    M: 365
  },
  "2006": {
    M: 371
  },
  "2007": {
    M: 358
  },
  "2008": {
    M: 288
  },
  "2009": {
    M: 265
  },
  "2010": {
    M: 235
  },
  "2011": {
    M: 214
  },
  "2012": {
    M: 223
  },
  "2013": {
    M: 206
  },
  "2014": {
    M: 174
  },
  "2015": {
    M: 155
  },
  "2016": {
    M: 142
  },
  "2017": {
    M: 128
  },
  "2018": {
    M: 100
  },
  "2019": {
    M: 96
  },
  "2020": {
    M: 92
  },
  "2021": {
    M: 82
  }
};
const Daniella = {
  "2001": {
    F: 10
  },
  "2004": {
    F: 13
  },
  "2005": {
    F: 15
  },
  "2007": {
    F: 12
  },
  "2008": {
    F: 10
  },
  "2010": {
    F: 10
  },
  "2018": {
    F: 10
  }
};
const Danielle = {
  "1964": {
    F: 14
  },
  "1965": {
    F: 13
  },
  "1966": {
    F: 11
  },
  "1967": {
    F: 14
  },
  "1968": {
    F: 15
  },
  "1969": {
    F: 26
  },
  "1970": {
    F: 15
  },
  "1971": {
    F: 26
  },
  "1972": {
    F: 38
  },
  "1973": {
    F: 29
  },
  "1974": {
    F: 39
  },
  "1975": {
    F: 29
  },
  "1976": {
    F: 25
  },
  "1977": {
    F: 31
  },
  "1978": {
    F: 43
  },
  "1979": {
    F: 34
  },
  "1980": {
    F: 46
  },
  "1981": {
    F: 85
  },
  "1982": {
    F: 101
  },
  "1983": {
    F: 104
  },
  "1984": {
    F: 106
  },
  "1985": {
    F: 112
  },
  "1986": {
    F: 124
  },
  "1987": {
    F: 149
  },
  "1988": {
    F: 189
  },
  "1989": {
    F: 231
  },
  "1990": {
    F: 248
  },
  "1991": {
    F: 253
  },
  "1992": {
    F: 226
  },
  "1993": {
    F: 262
  },
  "1994": {
    F: 223
  },
  "1995": {
    F: 223
  },
  "1996": {
    F: 212
  },
  "1997": {
    F: 167
  },
  "1998": {
    F: 130
  },
  "1999": {
    F: 129
  },
  "2000": {
    F: 122
  },
  "2001": {
    F: 114
  },
  "2002": {
    F: 102
  },
  "2003": {
    F: 90
  },
  "2004": {
    F: 100
  },
  "2005": {
    F: 88
  },
  "2006": {
    F: 78
  },
  "2007": {
    F: 73
  },
  "2008": {
    F: 64
  },
  "2009": {
    F: 38
  },
  "2010": {
    F: 53
  },
  "2011": {
    F: 37
  },
  "2012": {
    F: 32
  },
  "2013": {
    F: 27
  },
  "2014": {
    F: 16
  },
  "2015": {
    F: 27
  },
  "2016": {
    F: 14
  },
  "2017": {
    F: 15
  },
  "2018": {
    F: 17
  },
  "2019": {
    F: 10
  },
  "2020": {
    F: 15
  }
};
const Danika = {
  "1996": {
    F: 13
  },
  "1997": {
    F: 11
  },
  "2000": {
    F: 11
  },
  "2001": {
    F: 10
  },
  "2002": {
    F: 15
  },
  "2004": {
    F: 11
  },
  "2006": {
    F: 10
  },
  "2008": {
    F: 21
  },
  "2009": {
    F: 12
  },
  "2010": {
    F: 14
  },
  "2011": {
    F: 10
  }
};
const Dannielle = {
  "1990": {
    F: 12
  },
  "1991": {
    F: 15
  },
  "1992": {
    F: 14
  },
  "1993": {
    F: 13
  },
  "1994": {
    F: 16
  },
  "1995": {
    F: 23
  },
  "1996": {
    F: 15
  },
  "1997": {
    F: 10
  },
  "2001": {
    F: 10
  },
  "2004": {
    F: 10
  }
};
const Danny = {
  "1948": {
    M: 13
  },
  "1949": {
    M: 16
  },
  "1950": {
    M: 12
  },
  "1951": {
    M: 11
  },
  "1953": {
    M: 12
  },
  "1954": {
    M: 10
  },
  "1955": {
    M: 11
  },
  "1956": {
    M: 13
  },
  "1957": {
    M: 16
  },
  "1958": {
    M: 14
  },
  "1959": {
    M: 26
  },
  "1960": {
    M: 26
  },
  "1961": {
    M: 22
  },
  "1962": {
    M: 25
  },
  "1963": {
    M: 21
  },
  "1964": {
    M: 30
  },
  "1965": {
    M: 33
  },
  "1966": {
    M: 32
  },
  "1967": {
    M: 25
  },
  "1968": {
    M: 18
  },
  "1969": {
    M: 15
  },
  "1970": {
    M: 23
  },
  "1971": {
    M: 32
  },
  "1972": {
    M: 35
  },
  "1973": {
    M: 18
  },
  "1974": {
    M: 18
  },
  "1975": {
    M: 21
  },
  "1976": {
    M: 11
  },
  "1977": {
    M: 22
  },
  "1978": {
    M: 18
  },
  "1979": {
    M: 32
  },
  "1980": {
    M: 28
  },
  "1981": {
    M: 19
  },
  "1982": {
    M: 24
  },
  "1983": {
    M: 25
  },
  "1984": {
    M: 23
  },
  "1985": {
    M: 29
  },
  "1986": {
    M: 16
  },
  "1987": {
    M: 33
  },
  "1988": {
    M: 34
  },
  "1989": {
    M: 35
  },
  "1990": {
    M: 33
  },
  "1991": {
    M: 29
  },
  "1992": {
    M: 32
  },
  "1993": {
    M: 25
  },
  "1994": {
    M: 20
  },
  "1995": {
    M: 18
  },
  "1996": {
    M: 21
  },
  "1997": {
    M: 19
  },
  "1999": {
    M: 13
  },
  "2000": {
    M: 12
  },
  "2002": {
    M: 14
  },
  "2003": {
    M: 10
  },
  "2004": {
    M: 14
  },
  "2005": {
    M: 12
  },
  "2006": {
    M: 13
  },
  "2007": {
    M: 10
  },
  "2008": {
    M: 17
  },
  "2009": {
    M: 14
  },
  "2010": {
    M: 11
  },
  "2011": {
    M: 12
  },
  "2012": {
    M: 12
  },
  "2013": {
    M: 11
  },
  "2015": {
    M: 14
  }
};
const Dante = {
  "1998": {
    M: 21
  },
  "2001": {
    M: 11
  },
  "2002": {
    M: 16
  },
  "2003": {
    M: 10
  },
  "2004": {
    M: 21
  },
  "2005": {
    M: 22
  },
  "2006": {
    M: 26
  },
  "2007": {
    M: 26
  },
  "2008": {
    M: 25
  },
  "2009": {
    M: 22
  },
  "2010": {
    M: 27
  },
  "2011": {
    M: 27
  },
  "2012": {
    M: 23
  },
  "2013": {
    M: 20
  },
  "2014": {
    M: 13
  },
  "2015": {
    M: 16
  },
  "2016": {
    M: 16
  },
  "2017": {
    M: 20
  },
  "2018": {
    M: 16
  },
  "2020": {
    M: 16
  },
  "2021": {
    M: 17
  }
};
const Danyon = {
  "1993": {
    M: 16
  },
  "1995": {
    M: 20
  },
  "1996": {
    M: 27
  }
};
const Daphne = {
  "1900": {
    F: 15
  },
  "1902": {
    F: 14
  },
  "1903": {
    F: 14
  },
  "1904": {
    F: 17
  },
  "1905": {
    F: 21
  },
  "1906": {
    F: 32
  },
  "1907": {
    F: 43
  },
  "1908": {
    F: 39
  },
  "1909": {
    F: 50
  },
  "1910": {
    F: 36
  },
  "1911": {
    F: 41
  },
  "1912": {
    F: 31
  },
  "1913": {
    F: 45
  },
  "1914": {
    F: 52
  },
  "1915": {
    F: 59
  },
  "1916": {
    F: 52
  },
  "1917": {
    F: 76
  },
  "1918": {
    F: 59
  },
  "1919": {
    F: 69
  },
  "1920": {
    F: 88
  },
  "1921": {
    F: 107
  },
  "1922": {
    F: 94
  },
  "1923": {
    F: 113
  },
  "1924": {
    F: 106
  },
  "1925": {
    F: 121
  },
  "1926": {
    F: 123
  },
  "1927": {
    F: 107
  },
  "1928": {
    F: 130
  },
  "1929": {
    F: 97
  },
  "1930": {
    F: 118
  },
  "1931": {
    F: 103
  },
  "1932": {
    F: 85
  },
  "1933": {
    F: 82
  },
  "1934": {
    F: 61
  },
  "1935": {
    F: 59
  },
  "1936": {
    F: 45
  },
  "1937": {
    F: 55
  },
  "1938": {
    F: 65
  },
  "1939": {
    F: 68
  },
  "1940": {
    F: 51
  },
  "1941": {
    F: 75
  },
  "1942": {
    F: 48
  },
  "1943": {
    F: 45
  },
  "1944": {
    F: 43
  },
  "1945": {
    F: 43
  },
  "1946": {
    F: 55
  },
  "1947": {
    F: 47
  },
  "1948": {
    F: 40
  },
  "1949": {
    F: 31
  },
  "1950": {
    F: 46
  },
  "1951": {
    F: 30
  },
  "1952": {
    F: 29
  },
  "1953": {
    F: 23
  },
  "1954": {
    F: 34
  },
  "1955": {
    F: 34
  },
  "1956": {
    F: 24
  },
  "1957": {
    F: 12
  },
  "1958": {
    F: 19
  },
  "1959": {
    F: 22
  },
  "1960": {
    F: 23
  },
  "1961": {
    F: 21
  },
  "1962": {
    F: 13
  },
  "1963": {
    F: 20
  },
  "1964": {
    F: 19
  },
  "1965": {
    F: 14
  },
  "1966": {
    F: 17
  },
  "1968": {
    F: 20
  },
  "1969": {
    F: 13
  },
  "1971": {
    F: 14
  },
  "1973": {
    F: 12
  },
  "1981": {
    F: 10
  },
  "1995": {
    F: 10
  },
  "2016": {
    F: 10
  },
  "2017": {
    F: 10
  },
  "2020": {
    F: 12
  },
  "2021": {
    F: 16
  }
};
const Darcey = {
  "2018": {
    F: 11
  }
};
const Darcie = {
  "2017": {
    F: 12
  },
  "2019": {
    F: 20
  },
  "2020": {
    F: 13
  },
  "2021": {
    F: 14
  }
};
const Darcy = {
  "1920": {
    M: 11
  },
  "1923": {
    M: 12
  },
  "1925": {
    M: 10
  },
  "1958": {
    M: 10
  },
  "1965": {
    M: 11
  },
  "1967": {
    M: 10
  },
  "1968": {
    M: 10
  },
  "1970": {
    M: 11
  },
  "1971": {
    M: 16
  },
  "1972": {
    M: 15
  },
  "1973": {
    M: 16
  },
  "1974": {
    M: 14
  },
  "1975": {
    M: 14
  },
  "1976": {
    M: 15
  },
  "1977": {
    M: 10
  },
  "1978": {
    M: 11
  },
  "1981": {
    M: 10
  },
  "1982": {
    M: 12
  },
  "1983": {
    M: 10
  },
  "1985": {
    M: 18
  },
  "1986": {
    M: 21
  },
  "1988": {
    M: 13
  },
  "1989": {
    M: 16
  },
  "1990": {
    M: 13
  },
  "1992": {
    M: 17
  },
  "1993": {
    M: 13
  },
  "1994": {
    M: 14
  },
  "1995": {
    M: 11
  },
  "1996": {
    M: 12
  },
  "1998": {
    M: 15
  },
  "1999": {
    M: 10
  },
  "2001": {
    M: 13
  },
  "2002": {
    M: 10
  },
  "2004": {
    M: 11
  },
  "2005": {
    M: 11
  },
  "2006": {
    M: 13
  },
  "2007": {
    M: 13
  },
  "2008": {
    M: 18
  },
  "2009": {
    M: 14
  },
  "2010": {
    M: 10
  },
  "2011": {
    M: 18
  },
  "2012": {
    M: 17
  },
  "2013": {
    F: 13,
    M: 16
  },
  "2014": {
    F: 13,
    M: 15
  },
  "2015": {
    F: 11,
    M: 20
  },
  "2016": {
    F: 19,
    M: 12
  },
  "2017": {
    F: 26,
    M: 19
  },
  "2018": {
    M: 16,
    F: 17
  },
  "2019": {
    M: 12,
    F: 18
  },
  "2020": {
    M: 20,
    F: 19
  },
  "2021": {
    M: 14,
    F: 10
  }
};
const Daren = {
  "1966": {
    M: 14
  }
};
const Darian = {
  "1996": {
    M: 10
  }
};
const Darin = {
  "1963": {
    M: 10
  },
  "1964": {
    M: 11
  },
  "1965": {
    M: 36
  },
  "1966": {
    M: 30
  },
  "1967": {
    M: 21
  },
  "1968": {
    M: 25
  },
  "1969": {
    M: 14
  },
  "1970": {
    M: 12
  },
  "1971": {
    M: 11
  },
  "1972": {
    M: 17
  },
  "1973": {
    M: 16
  },
  "1974": {
    M: 19
  },
  "1975": {
    M: 17
  },
  "1977": {
    M: 11
  },
  "1981": {
    M: 10
  }
};
const Darius = {
  "1999": {
    M: 10
  },
  "2000": {
    M: 12
  },
  "2002": {
    M: 12
  },
  "2003": {
    M: 13
  },
  "2005": {
    M: 17
  },
  "2006": {
    M: 26
  },
  "2007": {
    M: 15
  },
  "2008": {
    M: 21
  },
  "2009": {
    M: 25
  },
  "2010": {
    M: 18
  },
  "2011": {
    M: 19
  },
  "2012": {
    M: 18
  },
  "2013": {
    M: 18
  },
  "2014": {
    M: 12
  },
  "2015": {
    M: 19
  },
  "2016": {
    M: 13
  },
  "2018": {
    M: 15
  },
  "2019": {
    M: 16
  },
  "2020": {
    M: 11
  }
};
const Darlene = {
  "1963": {
    F: 12
  },
  "1966": {
    F: 13
  },
  "1967": {
    F: 20
  },
  "1968": {
    F: 16
  },
  "1969": {
    F: 10
  },
  "1970": {
    F: 14
  },
  "1971": {
    F: 23
  },
  "1972": {
    F: 21
  },
  "1973": {
    F: 17
  },
  "1974": {
    F: 11
  },
  "1975": {
    F: 14
  },
  "1976": {
    F: 15
  },
  "1989": {
    F: 10
  }
};
const Darran = {
  "1966": {
    M: 10
  }
};
const Darrel = {
  "1962": {
    M: 11
  },
  "1963": {
    M: 19
  },
  "1964": {
    M: 10
  },
  "1971": {
    M: 11
  },
  "1972": {
    M: 12
  },
  "1973": {
    M: 10
  }
};
const Darrell = {
  "1953": {
    M: 13
  },
  "1954": {
    M: 10
  },
  "1955": {
    M: 14
  },
  "1956": {
    M: 15
  },
  "1958": {
    M: 13
  },
  "1959": {
    M: 20
  },
  "1960": {
    M: 28
  },
  "1961": {
    M: 25
  },
  "1962": {
    M: 32
  },
  "1963": {
    M: 40
  },
  "1964": {
    M: 44
  },
  "1965": {
    M: 51
  },
  "1966": {
    M: 39
  },
  "1967": {
    M: 31
  },
  "1968": {
    M: 40
  },
  "1969": {
    M: 43
  },
  "1970": {
    M: 29
  },
  "1971": {
    M: 26
  },
  "1972": {
    M: 28
  },
  "1973": {
    M: 16
  },
  "1974": {
    M: 19
  },
  "1975": {
    M: 12
  },
  "1977": {
    M: 16
  },
  "1979": {
    M: 14
  }
};
const Darren = {
  "1960": {
    M: 14
  },
  "1961": {
    M: 25
  },
  "1962": {
    M: 26
  },
  "1963": {
    M: 53
  },
  "1964": {
    M: 74
  },
  "1965": {
    M: 390
  },
  "1966": {
    M: 353
  },
  "1967": {
    M: 249
  },
  "1968": {
    M: 197
  },
  "1969": {
    M: 245
  },
  "1970": {
    M: 210
  },
  "1971": {
    M: 227
  },
  "1972": {
    M: 214
  },
  "1973": {
    M: 168
  },
  "1974": {
    M: 171
  },
  "1975": {
    M: 188
  },
  "1976": {
    M: 119
  },
  "1977": {
    M: 75
  },
  "1978": {
    M: 66
  },
  "1979": {
    M: 85
  },
  "1980": {
    M: 55
  },
  "1981": {
    M: 52
  },
  "1982": {
    M: 59
  },
  "1983": {
    M: 37
  },
  "1984": {
    M: 51
  },
  "1985": {
    M: 39
  },
  "1986": {
    M: 50
  },
  "1987": {
    M: 45
  },
  "1988": {
    M: 34
  },
  "1989": {
    M: 37
  },
  "1990": {
    M: 36
  },
  "1991": {
    M: 29
  },
  "1992": {
    M: 31
  },
  "1993": {
    M: 34
  },
  "1994": {
    M: 26
  },
  "1995": {
    M: 27
  },
  "1996": {
    M: 13
  },
  "1997": {
    M: 18
  },
  "1998": {
    M: 18
  },
  "1999": {
    M: 19
  },
  "2000": {
    M: 11
  },
  "2001": {
    M: 14
  },
  "2002": {
    M: 11
  },
  "2003": {
    M: 14
  },
  "2004": {
    M: 16
  },
  "2005": {
    M: 10
  },
  "2008": {
    M: 12
  },
  "2013": {
    M: 12
  }
};
const Darrin = {
  "1964": {
    M: 11
  },
  "1965": {
    M: 131
  },
  "1966": {
    M: 87
  },
  "1967": {
    M: 52
  },
  "1968": {
    M: 42
  },
  "1969": {
    M: 37
  },
  "1970": {
    M: 25
  },
  "1971": {
    M: 31
  },
  "1972": {
    M: 19
  },
  "1973": {
    M: 13
  },
  "1974": {
    M: 18
  },
  "1975": {
    M: 15
  }
};
const Darron = {
  "1965": {
    M: 19
  },
  "1968": {
    M: 14
  },
  "1969": {
    M: 12
  },
  "1970": {
    M: 16
  },
  "1971": {
    M: 11
  },
  "1972": {
    M: 11
  },
  "1974": {
    M: 10
  }
};
const Darryl = {
  "1946": {
    M: 10
  },
  "1947": {
    M: 21
  },
  "1948": {
    M: 20
  },
  "1949": {
    M: 21
  },
  "1950": {
    M: 18
  },
  "1951": {
    M: 28
  },
  "1952": {
    M: 46
  },
  "1953": {
    M: 37
  },
  "1954": {
    M: 26
  },
  "1955": {
    M: 33
  },
  "1956": {
    M: 42
  },
  "1957": {
    M: 57
  },
  "1958": {
    M: 48
  },
  "1959": {
    M: 50
  },
  "1960": {
    F: 10,
    M: 65
  },
  "1961": {
    M: 72
  },
  "1962": {
    M: 92
  },
  "1963": {
    M: 132
  },
  "1964": {
    M: 132
  },
  "1965": {
    M: 129
  },
  "1966": {
    M: 108
  },
  "1967": {
    M: 99
  },
  "1968": {
    M: 73
  },
  "1969": {
    M: 92
  },
  "1970": {
    M: 78
  },
  "1971": {
    M: 99
  },
  "1972": {
    M: 78
  },
  "1973": {
    M: 78
  },
  "1974": {
    M: 69
  },
  "1975": {
    M: 65
  },
  "1976": {
    M: 53
  },
  "1977": {
    M: 39
  },
  "1978": {
    M: 15
  },
  "1979": {
    M: 33
  },
  "1980": {
    M: 28
  },
  "1981": {
    M: 21
  },
  "1982": {
    M: 25
  },
  "1983": {
    M: 25
  },
  "1984": {
    M: 20
  },
  "1985": {
    M: 17
  },
  "1986": {
    M: 26
  },
  "1987": {
    M: 23
  },
  "1988": {
    M: 19
  },
  "1989": {
    M: 16
  },
  "1990": {
    M: 19
  },
  "1991": {
    M: 16
  },
  "1993": {
    M: 13
  },
  "1995": {
    M: 13
  }
};
const Darryn = {
  "1963": {
    M: 10
  },
  "1964": {
    M: 14
  },
  "1965": {
    M: 109
  },
  "1966": {
    M: 87
  },
  "1967": {
    M: 64
  },
  "1968": {
    M: 37
  },
  "1969": {
    M: 28
  },
  "1970": {
    M: 32
  },
  "1971": {
    M: 47
  },
  "1972": {
    M: 30
  },
  "1973": {
    M: 32
  },
  "1974": {
    M: 20
  },
  "1975": {
    M: 34
  },
  "1976": {
    M: 21
  },
  "1977": {
    M: 24
  },
  "1979": {
    M: 14
  },
  "1982": {
    M: 12
  },
  "1983": {
    M: 10
  },
  "1986": {
    M: 10
  },
  "1988": {
    M: 10
  }
};
const Daryl = {
  "1947": {
    M: 12
  },
  "1948": {
    M: 14
  },
  "1951": {
    M: 15
  },
  "1952": {
    M: 27
  },
  "1953": {
    M: 20
  },
  "1954": {
    M: 31
  },
  "1955": {
    M: 24
  },
  "1956": {
    M: 26
  },
  "1957": {
    M: 15
  },
  "1958": {
    M: 28
  },
  "1959": {
    M: 27
  },
  "1960": {
    F: 12,
    M: 33
  },
  "1961": {
    M: 47
  },
  "1962": {
    M: 48
  },
  "1963": {
    M: 40
  },
  "1964": {
    M: 67
  },
  "1965": {
    M: 68
  },
  "1966": {
    M: 48
  },
  "1967": {
    M: 62
  },
  "1968": {
    M: 64
  },
  "1969": {
    M: 58
  },
  "1970": {
    M: 79
  },
  "1971": {
    M: 80
  },
  "1972": {
    M: 63
  },
  "1973": {
    M: 58
  },
  "1974": {
    M: 59
  },
  "1975": {
    M: 41
  },
  "1976": {
    M: 35
  },
  "1977": {
    M: 40
  },
  "1978": {
    M: 26
  },
  "1979": {
    M: 38
  },
  "1980": {
    M: 36
  },
  "1981": {
    M: 20
  },
  "1982": {
    M: 17
  },
  "1983": {
    M: 19
  },
  "1984": {
    M: 14
  },
  "1985": {
    M: 11
  },
  "1986": {
    M: 21
  },
  "1987": {
    M: 14
  },
  "1988": {
    M: 15
  },
  "1989": {
    M: 15
  },
  "1990": {
    M: 15
  },
  "1991": {
    M: 17
  },
  "1993": {
    M: 13
  },
  "1995": {
    M: 11
  }
};
const Daryn = {
  "1965": {
    M: 24
  },
  "1966": {
    M: 16
  },
  "1967": {
    M: 10
  },
  "1969": {
    M: 12
  },
  "1970": {
    M: 11
  },
  "1972": {
    M: 12
  }
};
const David = {
  "1900": {
    M: 106
  },
  "1901": {
    M: 124
  },
  "1902": {
    M: 133
  },
  "1903": {
    M: 138
  },
  "1904": {
    M: 147
  },
  "1905": {
    M: 127
  },
  "1906": {
    M: 130
  },
  "1907": {
    M: 163
  },
  "1908": {
    M: 167
  },
  "1909": {
    M: 143
  },
  "1910": {
    M: 142
  },
  "1911": {
    M: 159
  },
  "1912": {
    M: 156
  },
  "1913": {
    M: 178
  },
  "1914": {
    M: 166
  },
  "1915": {
    M: 178
  },
  "1916": {
    M: 174
  },
  "1917": {
    M: 178
  },
  "1918": {
    M: 153
  },
  "1919": {
    M: 174
  },
  "1920": {
    M: 205
  },
  "1921": {
    M: 192
  },
  "1922": {
    M: 195
  },
  "1923": {
    M: 216
  },
  "1924": {
    M: 196
  },
  "1925": {
    M: 218
  },
  "1926": {
    M: 260
  },
  "1927": {
    M: 276
  },
  "1928": {
    M: 261
  },
  "1929": {
    M: 274
  },
  "1930": {
    M: 285
  },
  "1931": {
    M: 318
  },
  "1932": {
    M: 327
  },
  "1933": {
    M: 317
  },
  "1934": {
    M: 340
  },
  "1935": {
    M: 399
  },
  "1936": {
    M: 406
  },
  "1937": {
    M: 475
  },
  "1938": {
    M: 514
  },
  "1939": {
    M: 569
  },
  "1940": {
    M: 571
  },
  "1941": {
    M: 740
  },
  "1942": {
    M: 665
  },
  "1943": {
    M: 623
  },
  "1944": {
    M: 734
  },
  "1945": {
    M: 743
  },
  "1946": {
    M: 917
  },
  "1947": {
    M: 979
  },
  "1948": {
    M: 982
  },
  "1949": {
    M: 992
  },
  "1950": {
    M: 961
  },
  "1951": {
    M: 1055
  },
  "1952": {
    M: 1037
  },
  "1953": {
    M: 1052
  },
  "1954": {
    M: 1150
  },
  "1955": {
    M: 1188
  },
  "1956": {
    M: 1200
  },
  "1957": {
    M: 1168
  },
  "1958": {
    M: 1238
  },
  "1959": {
    M: 1305
  },
  "1960": {
    M: 1304
  },
  "1961": {
    M: 1353
  },
  "1962": {
    M: 1478
  },
  "1963": {
    M: 1513
  },
  "1964": {
    M: 1356
  },
  "1965": {
    M: 1319
  },
  "1966": {
    M: 1139
  },
  "1967": {
    M: 1199
  },
  "1968": {
    M: 1119
  },
  "1969": {
    M: 1057
  },
  "1970": {
    M: 916
  },
  "1971": {
    M: 896
  },
  "1972": {
    M: 826
  },
  "1973": {
    M: 709
  },
  "1974": {
    M: 697
  },
  "1975": {
    M: 638
  },
  "1976": {
    M: 574
  },
  "1977": {
    M: 612
  },
  "1978": {
    M: 619
  },
  "1979": {
    M: 671
  },
  "1980": {
    M: 609
  },
  "1981": {
    M: 605
  },
  "1982": {
    M: 553
  },
  "1983": {
    M: 575
  },
  "1984": {
    M: 590
  },
  "1985": {
    M: 522
  },
  "1986": {
    M: 527
  },
  "1987": {
    M: 500
  },
  "1988": {
    M: 470
  },
  "1989": {
    M: 487
  },
  "1990": {
    M: 431
  },
  "1991": {
    M: 349
  },
  "1992": {
    M: 336
  },
  "1993": {
    M: 253
  },
  "1994": {
    M: 239
  },
  "1995": {
    M: 211
  },
  "1996": {
    M: 197
  },
  "1997": {
    M: 189
  },
  "1998": {
    M: 161
  },
  "1999": {
    M: 137
  },
  "2000": {
    M: 157
  },
  "2001": {
    M: 141
  },
  "2002": {
    M: 102
  },
  "2003": {
    M: 104
  },
  "2004": {
    M: 96
  },
  "2005": {
    M: 102
  },
  "2006": {
    M: 86
  },
  "2007": {
    M: 100
  },
  "2008": {
    M: 85
  },
  "2009": {
    M: 81
  },
  "2010": {
    M: 87
  },
  "2011": {
    M: 79
  },
  "2012": {
    M: 81
  },
  "2013": {
    M: 73
  },
  "2014": {
    M: 68
  },
  "2015": {
    M: 65
  },
  "2016": {
    M: 70
  },
  "2017": {
    M: 64
  },
  "2018": {
    M: 50
  },
  "2019": {
    M: 48
  },
  "2020": {
    M: 59
  },
  "2021": {
    M: 42
  }
};
const Davina = {
  "1964": {
    F: 14
  },
  "1970": {
    F: 14
  },
  "1971": {
    F: 10
  },
  "1972": {
    F: 19
  },
  "1973": {
    F: 16
  },
  "1974": {
    F: 17
  },
  "1975": {
    F: 22
  },
  "1976": {
    F: 19
  },
  "1977": {
    F: 33
  },
  "1978": {
    F: 16
  },
  "1979": {
    F: 10
  },
  "1980": {
    F: 10
  }
};
const Davinia = {
  "1979": {
    F: 15
  },
  "1980": {
    F: 10
  }
};
const Dawn = {
  "1921": {
    F: 11
  },
  "1922": {
    F: 24
  },
  "1923": {
    F: 16
  },
  "1924": {
    F: 34
  },
  "1925": {
    F: 39
  },
  "1926": {
    F: 67
  },
  "1927": {
    F: 79
  },
  "1928": {
    F: 95
  },
  "1929": {
    F: 78
  },
  "1930": {
    F: 100
  },
  "1931": {
    F: 96
  },
  "1932": {
    F: 96
  },
  "1933": {
    F: 94
  },
  "1934": {
    F: 93
  },
  "1935": {
    F: 82
  },
  "1936": {
    F: 87
  },
  "1937": {
    F: 88
  },
  "1938": {
    F: 121
  },
  "1939": {
    F: 83
  },
  "1940": {
    F: 102
  },
  "1941": {
    F: 98
  },
  "1942": {
    F: 73
  },
  "1943": {
    F: 63
  },
  "1944": {
    F: 69
  },
  "1945": {
    F: 82
  },
  "1946": {
    F: 69
  },
  "1947": {
    F: 56
  },
  "1948": {
    F: 78
  },
  "1949": {
    F: 65
  },
  "1950": {
    F: 65
  },
  "1951": {
    F: 52
  },
  "1952": {
    F: 51
  },
  "1953": {
    F: 50
  },
  "1954": {
    F: 51
  },
  "1955": {
    F: 53
  },
  "1956": {
    F: 62
  },
  "1957": {
    F: 57
  },
  "1958": {
    F: 56
  },
  "1959": {
    F: 50
  },
  "1960": {
    F: 41
  },
  "1961": {
    F: 47
  },
  "1962": {
    F: 45
  },
  "1963": {
    F: 59
  },
  "1964": {
    F: 44
  },
  "1965": {
    F: 39
  },
  "1966": {
    F: 49
  },
  "1967": {
    F: 46
  },
  "1968": {
    F: 32
  },
  "1969": {
    F: 33
  },
  "1970": {
    F: 17
  },
  "1971": {
    F: 18
  },
  "1972": {
    F: 31
  },
  "1973": {
    F: 20
  },
  "1974": {
    F: 15
  },
  "1975": {
    F: 27
  },
  "1976": {
    F: 19
  },
  "1977": {
    F: 20
  },
  "1978": {
    F: 27
  },
  "1979": {
    F: 29
  },
  "1980": {
    F: 18
  },
  "1981": {
    F: 12
  },
  "1982": {
    F: 16
  },
  "1983": {
    F: 17
  },
  "1984": {
    F: 18
  },
  "1987": {
    F: 11
  },
  "1988": {
    F: 11
  },
  "1990": {
    F: 15
  },
  "2000": {
    F: 12
  }
};
const Dayle = {
  "1973": {
    M: 10
  },
  "1974": {
    M: 11
  },
  "1976": {
    M: 11
  }
};
const Dayna = {
  "1975": {
    F: 11
  },
  "1977": {
    F: 13
  },
  "1978": {
    F: 13
  },
  "1982": {
    F: 16
  },
  "1983": {
    F: 21
  },
  "1984": {
    F: 14
  },
  "1985": {
    F: 19
  },
  "1986": {
    F: 19
  },
  "1987": {
    F: 17
  },
  "1988": {
    F: 22
  },
  "1989": {
    F: 27
  },
  "1990": {
    F: 21
  },
  "1991": {
    F: 23
  },
  "1992": {
    F: 21
  },
  "1993": {
    F: 23
  },
  "1994": {
    F: 37
  },
  "1995": {
    F: 27
  },
  "1996": {
    F: 41
  },
  "1997": {
    F: 41
  },
  "1998": {
    F: 37
  },
  "1999": {
    F: 32
  },
  "2000": {
    F: 26
  },
  "2001": {
    F: 25
  },
  "2002": {
    F: 22
  },
  "2003": {
    F: 21
  },
  "2005": {
    F: 13
  },
  "2006": {
    F: 13
  },
  "2007": {
    F: 11
  },
  "2008": {
    F: 10
  },
  "2009": {
    F: 10
  }
};
const Dayne = {
  "1981": {
    M: 11
  },
  "1991": {
    M: 12
  },
  "1992": {
    M: 11
  }
};
const Dayton = {
  "2001": {
    M: 11
  },
  "2004": {
    M: 12
  },
  "2005": {
    M: 10
  },
  "2006": {
    M: 21
  },
  "2007": {
    M: 33
  },
  "2008": {
    M: 32
  },
  "2009": {
    M: 24
  },
  "2010": {
    M: 31
  },
  "2011": {
    M: 31
  },
  "2012": {
    M: 27
  },
  "2013": {
    M: 23
  },
  "2014": {
    M: 29
  },
  "2015": {
    M: 17
  },
  "2016": {
    M: 23
  },
  "2017": {
    M: 12
  }
};
const Deacon = {
  "2004": {
    M: 11
  },
  "2005": {
    M: 16
  },
  "2006": {
    M: 19
  },
  "2007": {
    M: 18
  },
  "2008": {
    M: 14
  },
  "2010": {
    M: 12
  },
  "2011": {
    M: 13
  },
  "2012": {
    M: 12
  }
};
const Dean = {
  "1947": {
    M: 10
  },
  "1948": {
    M: 16
  },
  "1949": {
    M: 14
  },
  "1950": {
    M: 16
  },
  "1951": {
    M: 13
  },
  "1952": {
    M: 14
  },
  "1953": {
    M: 24
  },
  "1954": {
    M: 25
  },
  "1955": {
    M: 28
  },
  "1956": {
    M: 49
  },
  "1957": {
    M: 69
  },
  "1958": {
    M: 94
  },
  "1959": {
    M: 107
  },
  "1960": {
    M: 100
  },
  "1961": {
    M: 222
  },
  "1962": {
    M: 268
  },
  "1963": {
    M: 262
  },
  "1964": {
    M: 276
  },
  "1965": {
    M: 319
  },
  "1966": {
    M: 370
  },
  "1967": {
    M: 470
  },
  "1968": {
    M: 382
  },
  "1969": {
    M: 339
  },
  "1970": {
    M: 311
  },
  "1971": {
    M: 270
  },
  "1972": {
    M: 193
  },
  "1973": {
    M: 218
  },
  "1974": {
    M: 225
  },
  "1975": {
    M: 185
  },
  "1976": {
    M: 155
  },
  "1977": {
    M: 126
  },
  "1978": {
    M: 120
  },
  "1979": {
    M: 108
  },
  "1980": {
    M: 88
  },
  "1981": {
    M: 74
  },
  "1982": {
    M: 63
  },
  "1983": {
    M: 85
  },
  "1984": {
    M: 62
  },
  "1985": {
    M: 72
  },
  "1986": {
    M: 76
  },
  "1987": {
    M: 80
  },
  "1988": {
    M: 68
  },
  "1989": {
    M: 61
  },
  "1990": {
    M: 71
  },
  "1991": {
    M: 62
  },
  "1992": {
    M: 41
  },
  "1993": {
    M: 39
  },
  "1994": {
    M: 47
  },
  "1995": {
    M: 40
  },
  "1996": {
    M: 38
  },
  "1997": {
    M: 38
  },
  "1998": {
    M: 25
  },
  "1999": {
    M: 22
  },
  "2000": {
    M: 20
  },
  "2001": {
    M: 23
  },
  "2002": {
    M: 12
  },
  "2003": {
    M: 18
  },
  "2004": {
    M: 17
  },
  "2005": {
    M: 16
  },
  "2006": {
    M: 11
  },
  "2007": {
    M: 10
  },
  "2008": {
    M: 14
  },
  "2009": {
    M: 18
  },
  "2010": {
    M: 13
  },
  "2011": {
    M: 10
  },
  "2013": {
    M: 17
  },
  "2014": {
    M: 14
  },
  "2015": {
    M: 10
  },
  "2016": {
    M: 10
  },
  "2017": {
    M: 15
  },
  "2019": {
    M: 11
  },
  "2020": {
    M: 12
  }
};
const Deane = {
  "1957": {
    M: 10
  },
  "1960": {
    M: 10
  },
  "1961": {
    M: 19
  },
  "1962": {
    M: 12
  },
  "1963": {
    M: 18
  },
  "1964": {
    M: 25
  },
  "1965": {
    M: 29
  },
  "1966": {
    M: 33
  },
  "1967": {
    M: 32
  },
  "1968": {
    M: 36
  },
  "1969": {
    M: 24
  },
  "1970": {
    M: 32
  },
  "1971": {
    M: 17
  },
  "1972": {
    M: 20
  },
  "1974": {
    M: 21
  },
  "1975": {
    M: 12
  },
  "1976": {
    M: 11
  },
  "1977": {
    M: 11
  },
  "1979": {
    M: 10
  },
  "1981": {
    M: 11
  }
};
const Deanna = {
  "1938": {
    F: 13
  },
  "1960": {
    F: 11
  },
  "1964": {
    F: 17
  },
  "1965": {
    F: 14
  },
  "1966": {
    F: 19
  },
  "1967": {
    F: 19
  },
  "1968": {
    F: 26
  },
  "1969": {
    F: 22
  },
  "1970": {
    F: 27
  },
  "1971": {
    F: 32
  },
  "1972": {
    F: 16
  },
  "1973": {
    F: 22
  },
  "1974": {
    F: 25
  },
  "1975": {
    F: 30
  },
  "1976": {
    F: 26
  },
  "1977": {
    F: 27
  },
  "1978": {
    F: 32
  },
  "1979": {
    F: 14
  },
  "1980": {
    F: 22
  },
  "1981": {
    F: 25
  },
  "1982": {
    F: 12
  },
  "1983": {
    F: 21
  },
  "1984": {
    F: 21
  },
  "1985": {
    F: 10
  },
  "1986": {
    F: 11
  },
  "1987": {
    F: 18
  },
  "1988": {
    F: 13
  },
  "1989": {
    F: 19
  },
  "1990": {
    F: 14
  },
  "1991": {
    F: 14
  },
  "1992": {
    F: 13
  },
  "1993": {
    F: 17
  },
  "1994": {
    F: 25
  },
  "1995": {
    F: 23
  },
  "1996": {
    F: 15
  },
  "1997": {
    F: 15
  },
  "1998": {
    F: 23
  },
  "1999": {
    F: 14
  },
  "2000": {
    F: 14
  },
  "2002": {
    F: 13
  }
};
const Deanne = {
  "1963": {
    F: 11
  },
  "1964": {
    F: 11
  },
  "1965": {
    F: 11
  },
  "1966": {
    F: 10
  },
  "1967": {
    F: 27
  },
  "1968": {
    F: 16
  },
  "1969": {
    F: 27
  },
  "1970": {
    F: 17
  },
  "1971": {
    F: 28
  },
  "1972": {
    F: 19
  },
  "1973": {
    F: 15
  },
  "1974": {
    F: 12
  },
  "1975": {
    F: 15
  },
  "1976": {
    F: 13
  },
  "1977": {
    F: 16
  },
  "1978": {
    F: 15
  },
  "1981": {
    F: 10
  },
  "1982": {
    F: 10
  }
};
const Debbie = {
  "1957": {
    F: 13
  },
  "1958": {
    F: 36
  },
  "1959": {
    F: 64
  },
  "1960": {
    F: 89
  },
  "1961": {
    F: 92
  },
  "1962": {
    F: 115
  },
  "1963": {
    F: 95
  },
  "1964": {
    F: 89
  },
  "1965": {
    F: 99
  },
  "1966": {
    F: 88
  },
  "1967": {
    F: 96
  },
  "1968": {
    F: 99
  },
  "1969": {
    F: 91
  },
  "1970": {
    F: 85
  },
  "1971": {
    F: 79
  },
  "1972": {
    F: 84
  },
  "1973": {
    F: 69
  },
  "1974": {
    F: 63
  },
  "1975": {
    F: 58
  },
  "1976": {
    F: 49
  },
  "1977": {
    F: 42
  },
  "1978": {
    F: 35
  },
  "1979": {
    F: 46
  },
  "1980": {
    F: 33
  },
  "1981": {
    F: 40
  },
  "1982": {
    F: 20
  },
  "1983": {
    F: 19
  },
  "1984": {
    F: 20
  },
  "1985": {
    F: 22
  },
  "1986": {
    F: 21
  },
  "1987": {
    F: 16
  },
  "1988": {
    F: 15
  },
  "1990": {
    F: 13
  }
};
const Deborah = {
  "1947": {
    F: 11
  },
  "1948": {
    F: 20
  },
  "1949": {
    F: 40
  },
  "1950": {
    F: 38
  },
  "1951": {
    F: 59
  },
  "1952": {
    F: 77
  },
  "1953": {
    F: 113
  },
  "1954": {
    F: 151
  },
  "1955": {
    F: 191
  },
  "1956": {
    F: 215
  },
  "1957": {
    F: 329
  },
  "1958": {
    F: 416
  },
  "1959": {
    F: 515
  },
  "1960": {
    F: 475
  },
  "1961": {
    F: 543
  },
  "1962": {
    F: 519
  },
  "1963": {
    F: 462
  },
  "1964": {
    F: 398
  },
  "1965": {
    F: 413
  },
  "1966": {
    F: 494
  },
  "1967": {
    F: 479
  },
  "1968": {
    F: 395
  },
  "1969": {
    F: 386
  },
  "1970": {
    F: 331
  },
  "1971": {
    F: 338
  },
  "1972": {
    F: 291
  },
  "1973": {
    F: 259
  },
  "1974": {
    F: 219
  },
  "1975": {
    F: 174
  },
  "1976": {
    F: 143
  },
  "1977": {
    F: 113
  },
  "1978": {
    F: 108
  },
  "1979": {
    F: 115
  },
  "1980": {
    F: 77
  },
  "1981": {
    F: 85
  },
  "1982": {
    F: 77
  },
  "1983": {
    F: 49
  },
  "1984": {
    F: 52
  },
  "1985": {
    F: 53
  },
  "1986": {
    F: 46
  },
  "1987": {
    F: 30
  },
  "1988": {
    F: 33
  },
  "1989": {
    F: 14
  },
  "1990": {
    F: 20
  },
  "1991": {
    F: 31
  },
  "1992": {
    F: 19
  },
  "1993": {
    F: 21
  },
  "1994": {
    F: 19
  },
  "1995": {
    F: 12
  },
  "1997": {
    F: 16
  },
  "1998": {
    F: 11
  },
  "2001": {
    F: 11
  },
  "2005": {
    F: 12
  }
};
const Debra = {
  "1952": {
    F: 16
  },
  "1953": {
    F: 23
  },
  "1954": {
    F: 42
  },
  "1955": {
    F: 66
  },
  "1956": {
    F: 88
  },
  "1957": {
    F: 149
  },
  "1958": {
    F: 268
  },
  "1959": {
    F: 341
  },
  "1960": {
    F: 305
  },
  "1961": {
    F: 270
  },
  "1962": {
    F: 264
  },
  "1963": {
    F: 242
  },
  "1964": {
    F: 179
  },
  "1965": {
    F: 159
  },
  "1966": {
    F: 125
  },
  "1967": {
    F: 122
  },
  "1968": {
    F: 103
  },
  "1969": {
    F: 105
  },
  "1970": {
    F: 78
  },
  "1971": {
    F: 84
  },
  "1972": {
    F: 78
  },
  "1973": {
    F: 65
  },
  "1974": {
    F: 50
  },
  "1975": {
    F: 46
  },
  "1976": {
    F: 42
  },
  "1977": {
    F: 32
  },
  "1978": {
    F: 38
  },
  "1979": {
    F: 22
  },
  "1980": {
    F: 31
  },
  "1981": {
    F: 16
  },
  "1982": {
    F: 17
  },
  "1983": {
    F: 13
  },
  "1984": {
    F: 14
  },
  "1985": {
    F: 13
  },
  "1986": {
    F: 16
  }
};
const Declan = {
  "1991": {
    M: 13
  },
  "1993": {
    M: 15
  },
  "1994": {
    M: 14
  },
  "1996": {
    M: 14
  },
  "1997": {
    M: 16
  },
  "1998": {
    M: 18
  },
  "1999": {
    M: 17
  },
  "2000": {
    M: 17
  },
  "2001": {
    M: 25
  },
  "2002": {
    M: 13
  },
  "2003": {
    M: 12
  },
  "2004": {
    M: 20
  },
  "2005": {
    M: 24
  },
  "2006": {
    M: 23
  },
  "2007": {
    M: 20
  },
  "2008": {
    M: 31
  },
  "2009": {
    M: 30
  },
  "2010": {
    M: 22
  },
  "2011": {
    M: 51
  },
  "2012": {
    M: 45
  },
  "2013": {
    M: 58
  },
  "2014": {
    M: 45
  },
  "2015": {
    M: 42
  },
  "2016": {
    M: 31
  },
  "2017": {
    M: 27
  },
  "2018": {
    M: 38
  },
  "2019": {
    M: 29
  },
  "2020": {
    M: 28
  },
  "2021": {
    M: 21
  }
};
const Deidre = {
  "1951": {
    F: 11
  },
  "1952": {
    F: 14
  },
  "1955": {
    F: 12
  },
  "1957": {
    F: 11
  },
  "1958": {
    F: 16
  },
  "1959": {
    F: 18
  },
  "1960": {
    F: 30
  },
  "1961": {
    F: 28
  },
  "1962": {
    F: 31
  },
  "1963": {
    F: 39
  },
  "1964": {
    F: 36
  },
  "1965": {
    F: 22
  },
  "1966": {
    F: 25
  },
  "1967": {
    F: 35
  },
  "1968": {
    F: 28
  },
  "1969": {
    F: 25
  },
  "1970": {
    F: 34
  },
  "1971": {
    F: 32
  },
  "1972": {
    F: 36
  },
  "1973": {
    F: 24
  },
  "1974": {
    F: 12
  },
  "1975": {
    F: 17
  },
  "1976": {
    F: 10
  },
  "1977": {
    F: 10
  }
};
const Deirdre = {
  "1938": {
    F: 10
  },
  "1939": {
    F: 13
  },
  "1946": {
    F: 10
  },
  "1947": {
    F: 13
  },
  "1949": {
    F: 10
  },
  "1950": {
    F: 11
  },
  "1951": {
    F: 12
  },
  "1952": {
    F: 14
  },
  "1954": {
    F: 16
  },
  "1956": {
    F: 11
  },
  "1957": {
    F: 13
  },
  "1958": {
    F: 21
  },
  "1959": {
    F: 19
  },
  "1960": {
    F: 28
  },
  "1961": {
    F: 26
  },
  "1962": {
    F: 21
  },
  "1963": {
    F: 33
  },
  "1964": {
    F: 24
  },
  "1965": {
    F: 27
  },
  "1966": {
    F: 23
  },
  "1967": {
    F: 19
  },
  "1968": {
    F: 16
  },
  "1969": {
    F: 29
  },
  "1970": {
    F: 23
  },
  "1971": {
    F: 12
  },
  "1972": {
    F: 22
  },
  "1973": {
    F: 18
  },
  "1974": {
    F: 13
  }
};
const Delia = {
  "1957": {
    F: 10
  },
  "1961": {
    F: 13
  },
  "1967": {
    F: 10
  }
};
const Delilah = {
  "2010": {
    F: 11
  },
  "2011": {
    F: 13
  },
  "2012": {
    F: 10
  },
  "2013": {
    F: 13
  },
  "2014": {
    F: 20
  },
  "2015": {
    F: 15
  },
  "2016": {
    F: 19
  },
  "2017": {
    F: 24
  },
  "2018": {
    F: 26
  },
  "2019": {
    F: 32
  },
  "2020": {
    F: 42
  },
  "2021": {
    F: 34
  }
};
const Delta = {
  "2004": {
    F: 10
  },
  "2013": {
    F: 11
  }
};
const Delwyn = {
  "1946": {
    F: 15
  },
  "1947": {
    F: 13
  },
  "1949": {
    F: 13
  },
  "1950": {
    F: 14
  },
  "1951": {
    F: 17
  },
  "1952": {
    F: 14
  },
  "1953": {
    F: 11
  },
  "1954": {
    F: 18
  },
  "1955": {
    F: 23
  },
  "1956": {
    F: 17
  },
  "1957": {
    F: 26
  },
  "1958": {
    F: 23
  },
  "1959": {
    F: 45
  },
  "1960": {
    F: 34
  },
  "1961": {
    F: 46
  },
  "1962": {
    F: 45
  },
  "1963": {
    F: 37
  },
  "1964": {
    F: 42
  },
  "1965": {
    F: 29
  },
  "1966": {
    F: 41
  },
  "1967": {
    F: 29
  },
  "1968": {
    F: 42
  },
  "1969": {
    F: 38
  },
  "1970": {
    F: 32
  },
  "1971": {
    F: 27
  },
  "1972": {
    F: 25
  },
  "1973": {
    F: 13
  },
  "1974": {
    F: 27
  },
  "1975": {
    F: 18
  },
  "1976": {
    F: 17
  },
  "1979": {
    F: 11
  }
};
const Demelza = {
  "1976": {
    F: 17
  },
  "1977": {
    F: 23
  },
  "1978": {
    F: 18
  },
  "1979": {
    F: 20
  },
  "1980": {
    F: 14
  },
  "1981": {
    F: 12
  },
  "1986": {
    F: 10
  }
};
const Demi = {
  "1992": {
    F: 15
  },
  "1993": {
    F: 13
  },
  "1994": {
    F: 14
  },
  "1995": {
    F: 12
  },
  "1996": {
    F: 20
  },
  "1997": {
    F: 13
  },
  "1998": {
    F: 13
  },
  "2014": {
    F: 11
  },
  "2016": {
    F: 11
  },
  "2017": {
    F: 13
  },
  "2018": {
    F: 13
  },
  "2019": {
    F: 22
  },
  "2020": {
    F: 28
  },
  "2021": {
    F: 21
  }
};
const Dene = {
  "1961": {
    M: 12
  },
  "1963": {
    M: 11
  },
  "1964": {
    M: 11
  },
  "1965": {
    M: 12
  },
  "1966": {
    M: 13
  },
  "1967": {
    M: 11
  },
  "1969": {
    M: 10
  }
};
const Denis = {
  "1903": {
    M: 13
  },
  "1908": {
    M: 11
  },
  "1909": {
    M: 15
  },
  "1910": {
    M: 10
  },
  "1911": {
    M: 21
  },
  "1912": {
    M: 27
  },
  "1913": {
    M: 17
  },
  "1914": {
    M: 17
  },
  "1915": {
    M: 25
  },
  "1916": {
    M: 21
  },
  "1917": {
    M: 24
  },
  "1918": {
    M: 18
  },
  "1919": {
    M: 13
  },
  "1920": {
    M: 21
  },
  "1922": {
    M: 12
  },
  "1923": {
    M: 16
  },
  "1924": {
    M: 16
  },
  "1925": {
    M: 21
  },
  "1926": {
    M: 30
  },
  "1927": {
    M: 18
  },
  "1928": {
    M: 22
  },
  "1929": {
    M: 20
  },
  "1930": {
    M: 26
  },
  "1931": {
    M: 26
  },
  "1932": {
    M: 34
  },
  "1933": {
    M: 24
  },
  "1934": {
    M: 26
  },
  "1935": {
    M: 32
  },
  "1936": {
    M: 42
  },
  "1937": {
    M: 44
  },
  "1938": {
    M: 42
  },
  "1939": {
    M: 58
  },
  "1940": {
    M: 71
  },
  "1941": {
    M: 69
  },
  "1942": {
    M: 76
  },
  "1943": {
    M: 75
  },
  "1944": {
    M: 52
  },
  "1945": {
    M: 67
  },
  "1946": {
    M: 77
  },
  "1947": {
    M: 97
  },
  "1948": {
    M: 69
  },
  "1949": {
    M: 86
  },
  "1950": {
    M: 102
  },
  "1951": {
    M: 103
  },
  "1952": {
    M: 73
  },
  "1953": {
    M: 48
  },
  "1954": {
    M: 66
  },
  "1955": {
    M: 43
  },
  "1956": {
    M: 37
  },
  "1957": {
    M: 33
  },
  "1958": {
    M: 26
  },
  "1959": {
    M: 26
  },
  "1960": {
    M: 23
  },
  "1961": {
    M: 15
  },
  "1962": {
    M: 17
  },
  "1963": {
    M: 18
  },
  "1964": {
    M: 10
  },
  "1966": {
    M: 17
  },
  "1967": {
    M: 17
  },
  "1968": {
    M: 15
  },
  "1969": {
    M: 12
  },
  "1970": {
    M: 14
  }
};
const Denise = {
  "1935": {
    F: 14
  },
  "1936": {
    F: 11
  },
  "1937": {
    F: 20
  },
  "1938": {
    F: 17
  },
  "1939": {
    F: 20
  },
  "1940": {
    F: 32
  },
  "1941": {
    F: 37
  },
  "1942": {
    F: 54
  },
  "1943": {
    F: 40
  },
  "1944": {
    F: 59
  },
  "1945": {
    F: 64
  },
  "1946": {
    F: 155
  },
  "1947": {
    F: 184
  },
  "1948": {
    F: 143
  },
  "1949": {
    F: 118
  },
  "1950": {
    F: 147
  },
  "1951": {
    F: 158
  },
  "1952": {
    F: 166
  },
  "1953": {
    F: 147
  },
  "1954": {
    F: 171
  },
  "1955": {
    F: 184
  },
  "1956": {
    F: 166
  },
  "1957": {
    F: 205
  },
  "1958": {
    F: 226
  },
  "1959": {
    F: 239
  },
  "1960": {
    F: 268
  },
  "1961": {
    F: 250
  },
  "1962": {
    F: 212
  },
  "1963": {
    F: 217
  },
  "1964": {
    F: 251
  },
  "1965": {
    F: 226
  },
  "1966": {
    F: 180
  },
  "1967": {
    F: 167
  },
  "1968": {
    F: 139
  },
  "1969": {
    F: 113
  },
  "1970": {
    F: 84
  },
  "1971": {
    F: 108
  },
  "1972": {
    F: 101
  },
  "1973": {
    F: 72
  },
  "1974": {
    F: 51
  },
  "1975": {
    F: 49
  },
  "1976": {
    F: 45
  },
  "1977": {
    F: 32
  },
  "1978": {
    F: 25
  },
  "1979": {
    F: 22
  },
  "1980": {
    F: 25
  },
  "1981": {
    F: 26
  },
  "1982": {
    F: 21
  },
  "1983": {
    F: 16
  },
  "1984": {
    F: 20
  },
  "1985": {
    F: 16
  },
  "1986": {
    F: 18
  },
  "1988": {
    F: 10
  },
  "1989": {
    F: 17
  },
  "1990": {
    F: 15
  },
  "1991": {
    F: 14
  },
  "1992": {
    F: 10
  },
  "1997": {
    F: 12
  }
};
const Dennis = {
  "1903": {
    M: 10
  },
  "1914": {
    M: 11
  },
  "1918": {
    M: 11
  },
  "1919": {
    M: 16
  },
  "1920": {
    M: 14
  },
  "1921": {
    M: 19
  },
  "1922": {
    M: 19
  },
  "1923": {
    M: 25
  },
  "1924": {
    M: 22
  },
  "1925": {
    M: 20
  },
  "1926": {
    M: 30
  },
  "1927": {
    M: 20
  },
  "1928": {
    M: 26
  },
  "1929": {
    M: 34
  },
  "1930": {
    M: 35
  },
  "1931": {
    M: 26
  },
  "1932": {
    M: 36
  },
  "1933": {
    M: 28
  },
  "1934": {
    M: 52
  },
  "1935": {
    M: 36
  },
  "1936": {
    M: 25
  },
  "1937": {
    M: 36
  },
  "1938": {
    M: 66
  },
  "1939": {
    M: 90
  },
  "1940": {
    M: 113
  },
  "1941": {
    M: 90
  },
  "1942": {
    M: 104
  },
  "1943": {
    M: 110
  },
  "1944": {
    M: 149
  },
  "1945": {
    M: 172
  },
  "1946": {
    M: 221
  },
  "1947": {
    M: 196
  },
  "1948": {
    M: 228
  },
  "1949": {
    M: 231
  },
  "1950": {
    M: 204
  },
  "1951": {
    M: 213
  },
  "1952": {
    M: 214
  },
  "1953": {
    M: 174
  },
  "1954": {
    M: 165
  },
  "1955": {
    M: 152
  },
  "1956": {
    M: 116
  },
  "1957": {
    M: 111
  },
  "1958": {
    M: 112
  },
  "1959": {
    M: 82
  },
  "1960": {
    M: 87
  },
  "1961": {
    M: 89
  },
  "1962": {
    M: 81
  },
  "1963": {
    M: 75
  },
  "1964": {
    M: 46
  },
  "1965": {
    M: 60
  },
  "1966": {
    M: 43
  },
  "1967": {
    M: 45
  },
  "1968": {
    M: 39
  },
  "1969": {
    M: 43
  },
  "1970": {
    M: 31
  },
  "1971": {
    M: 37
  },
  "1972": {
    M: 41
  },
  "1973": {
    M: 33
  },
  "1974": {
    M: 26
  },
  "1975": {
    M: 18
  },
  "1976": {
    M: 19
  },
  "1977": {
    M: 26
  },
  "1978": {
    M: 29
  },
  "1979": {
    M: 16
  },
  "1980": {
    M: 16
  },
  "1981": {
    M: 21
  },
  "1982": {
    M: 17
  },
  "1984": {
    M: 17
  },
  "1985": {
    M: 19
  },
  "1986": {
    M: 17
  },
  "1987": {
    M: 14
  },
  "1988": {
    M: 15
  },
  "1989": {
    M: 11
  },
  "1991": {
    M: 12
  },
  "1992": {
    M: 15
  },
  "1993": {
    M: 13
  },
  "1994": {
    M: 10
  },
  "1996": {
    M: 10
  },
  "1997": {
    M: 12
  },
  "1998": {
    M: 11
  },
  "2001": {
    M: 10
  }
};
const Denys = {
  "1951": {
    M: 12
  }
};
const Denzel = {
  "1996": {
    M: 14
  },
  "2000": {
    M: 13
  },
  "2004": {
    M: 13
  },
  "2005": {
    M: 13
  },
  "2007": {
    M: 10
  },
  "2008": {
    M: 10
  },
  "2009": {
    M: 14
  },
  "2011": {
    M: 12
  },
  "2012": {
    M: 10
  },
  "2014": {
    M: 10
  },
  "2016": {
    M: 11
  }
};
const Deon = {
  "1969": {
    M: 12
  },
  "1970": {
    M: 11
  },
  "1971": {
    M: 12
  },
  "1972": {
    M: 19
  },
  "1973": {
    M: 20
  },
  "1974": {
    M: 20
  },
  "1975": {
    M: 23
  },
  "1976": {
    M: 14
  },
  "1977": {
    M: 16
  },
  "1979": {
    M: 10
  },
  "1980": {
    M: 10
  },
  "1981": {
    M: 13
  },
  "1982": {
    M: 10
  }
};
const Derek = {
  "1917": {
    M: 10
  },
  "1920": {
    M: 16
  },
  "1921": {
    M: 12
  },
  "1922": {
    M: 27
  },
  "1923": {
    M: 18
  },
  "1924": {
    M: 18
  },
  "1925": {
    M: 32
  },
  "1926": {
    M: 22
  },
  "1927": {
    M: 20
  },
  "1928": {
    M: 30
  },
  "1929": {
    M: 27
  },
  "1930": {
    M: 38
  },
  "1931": {
    M: 30
  },
  "1932": {
    M: 28
  },
  "1933": {
    M: 25
  },
  "1934": {
    M: 25
  },
  "1935": {
    M: 26
  },
  "1936": {
    M: 14
  },
  "1937": {
    M: 19
  },
  "1938": {
    M: 19
  },
  "1939": {
    M: 21
  },
  "1940": {
    M: 29
  },
  "1941": {
    M: 46
  },
  "1942": {
    M: 45
  },
  "1943": {
    M: 36
  },
  "1944": {
    M: 35
  },
  "1945": {
    M: 50
  },
  "1946": {
    M: 61
  },
  "1947": {
    M: 60
  },
  "1948": {
    M: 66
  },
  "1949": {
    M: 57
  },
  "1950": {
    M: 49
  },
  "1951": {
    M: 60
  },
  "1952": {
    M: 58
  },
  "1953": {
    M: 46
  },
  "1954": {
    M: 59
  },
  "1955": {
    M: 53
  },
  "1956": {
    M: 66
  },
  "1957": {
    M: 68
  },
  "1958": {
    M: 88
  },
  "1959": {
    M: 84
  },
  "1960": {
    M: 77
  },
  "1961": {
    M: 99
  },
  "1962": {
    M: 83
  },
  "1963": {
    M: 87
  },
  "1964": {
    M: 80
  },
  "1965": {
    M: 65
  },
  "1966": {
    M: 91
  },
  "1967": {
    M: 79
  },
  "1968": {
    M: 94
  },
  "1969": {
    M: 66
  },
  "1970": {
    M: 68
  },
  "1971": {
    M: 65
  },
  "1972": {
    M: 70
  },
  "1973": {
    M: 54
  },
  "1974": {
    M: 51
  },
  "1975": {
    M: 40
  },
  "1976": {
    M: 34
  },
  "1977": {
    M: 38
  },
  "1978": {
    M: 27
  },
  "1979": {
    M: 31
  },
  "1980": {
    M: 22
  },
  "1981": {
    M: 29
  },
  "1982": {
    M: 18
  },
  "1983": {
    M: 19
  },
  "1984": {
    M: 19
  },
  "1985": {
    M: 11
  },
  "1986": {
    M: 13
  },
  "1987": {
    M: 15
  },
  "1988": {
    M: 17
  },
  "1989": {
    M: 11
  },
  "1990": {
    M: 11
  },
  "1991": {
    M: 17
  },
  "1992": {
    M: 13
  },
  "1995": {
    M: 10
  },
  "1999": {
    M: 10
  },
  "2004": {
    M: 11
  }
};
const Desiree = {
  "1955": {
    F: 11
  },
  "1956": {
    F: 10
  },
  "1958": {
    F: 18
  },
  "1959": {
    F: 12
  },
  "1960": {
    F: 11
  },
  "1961": {
    F: 12
  },
  "1962": {
    F: 10
  },
  "1963": {
    F: 10
  },
  "1964": {
    F: 19
  },
  "1965": {
    F: 22
  },
  "1966": {
    F: 11
  },
  "1967": {
    F: 17
  },
  "1968": {
    F: 13
  },
  "1970": {
    F: 12
  },
  "1971": {
    F: 14
  },
  "1972": {
    F: 13
  },
  "1975": {
    F: 15
  },
  "1976": {
    F: 11
  },
  "1977": {
    F: 11
  },
  "1978": {
    F: 41
  },
  "1979": {
    F: 18
  },
  "1980": {
    F: 18
  },
  "1981": {
    F: 18
  },
  "1982": {
    F: 19
  },
  "1983": {
    F: 16
  },
  "1984": {
    F: 16
  },
  "1985": {
    F: 14
  },
  "1986": {
    F: 12
  },
  "1987": {
    F: 16
  },
  "1988": {
    F: 12
  },
  "1989": {
    F: 12
  },
  "1991": {
    F: 13
  },
  "1992": {
    F: 16
  },
  "1993": {
    F: 12
  },
  "1994": {
    F: 10
  }
};
const Desmond = {
  "1904": {
    M: 11
  },
  "1905": {
    M: 14
  },
  "1906": {
    M: 14
  },
  "1907": {
    M: 13
  },
  "1908": {
    M: 14
  },
  "1909": {
    M: 15
  },
  "1910": {
    M: 17
  },
  "1911": {
    M: 17
  },
  "1912": {
    M: 20
  },
  "1913": {
    M: 27
  },
  "1914": {
    M: 33
  },
  "1915": {
    M: 45
  },
  "1916": {
    M: 44
  },
  "1917": {
    M: 48
  },
  "1918": {
    M: 54
  },
  "1919": {
    M: 71
  },
  "1920": {
    M: 97
  },
  "1921": {
    M: 87
  },
  "1922": {
    M: 114
  },
  "1923": {
    M: 125
  },
  "1924": {
    M: 145
  },
  "1925": {
    M: 154
  },
  "1926": {
    M: 164
  },
  "1927": {
    M: 163
  },
  "1928": {
    M: 158
  },
  "1929": {
    M: 144
  },
  "1930": {
    M: 132
  },
  "1931": {
    M: 140
  },
  "1932": {
    M: 94
  },
  "1933": {
    M: 94
  },
  "1934": {
    M: 86
  },
  "1935": {
    M: 83
  },
  "1936": {
    M: 84
  },
  "1937": {
    M: 84
  },
  "1938": {
    M: 75
  },
  "1939": {
    M: 78
  },
  "1940": {
    M: 86
  },
  "1941": {
    M: 96
  },
  "1942": {
    M: 97
  },
  "1943": {
    M: 82
  },
  "1944": {
    M: 75
  },
  "1945": {
    M: 87
  },
  "1946": {
    M: 97
  },
  "1947": {
    M: 82
  },
  "1948": {
    M: 89
  },
  "1949": {
    M: 70
  },
  "1950": {
    M: 87
  },
  "1951": {
    M: 61
  },
  "1952": {
    M: 56
  },
  "1953": {
    M: 67
  },
  "1954": {
    M: 57
  },
  "1955": {
    M: 48
  },
  "1956": {
    M: 58
  },
  "1957": {
    M: 31
  },
  "1958": {
    M: 61
  },
  "1959": {
    M: 34
  },
  "1960": {
    M: 42
  },
  "1961": {
    M: 44
  },
  "1962": {
    M: 41
  },
  "1963": {
    M: 32
  },
  "1964": {
    M: 40
  },
  "1965": {
    M: 34
  },
  "1966": {
    M: 31
  },
  "1967": {
    M: 33
  },
  "1968": {
    M: 33
  },
  "1969": {
    M: 34
  },
  "1970": {
    M: 32
  },
  "1971": {
    M: 32
  },
  "1972": {
    M: 32
  },
  "1973": {
    M: 29
  },
  "1974": {
    M: 24
  },
  "1975": {
    M: 26
  },
  "1976": {
    M: 23
  },
  "1977": {
    M: 17
  },
  "1978": {
    M: 21
  },
  "1979": {
    M: 18
  },
  "1980": {
    M: 28
  },
  "1981": {
    M: 17
  },
  "1982": {
    M: 17
  },
  "1983": {
    M: 12
  },
  "1984": {
    M: 14
  },
  "1985": {
    M: 12
  },
  "1986": {
    M: 10
  },
  "1988": {
    M: 14
  },
  "1989": {
    M: 15
  },
  "1990": {
    M: 17
  },
  "1991": {
    M: 13
  },
  "1992": {
    M: 10
  },
  "1999": {
    M: 10
  },
  "2000": {
    M: 10
  },
  "2001": {
    M: 10
  },
  "2010": {
    M: 10
  },
  "2011": {
    M: 11
  },
  "2016": {
    M: 10
  }
};
const Destiny = {
  "1991": {
    F: 11
  },
  "1992": {
    F: 15
  },
  "1993": {
    F: 20
  },
  "1994": {
    F: 27
  },
  "1995": {
    F: 35
  },
  "1996": {
    F: 31
  },
  "1997": {
    F: 25
  },
  "1998": {
    F: 25
  },
  "1999": {
    F: 36
  },
  "2000": {
    F: 53
  },
  "2001": {
    F: 75
  },
  "2002": {
    F: 50
  },
  "2003": {
    F: 36
  },
  "2004": {
    F: 29
  },
  "2005": {
    F: 29
  },
  "2006": {
    F: 30
  },
  "2007": {
    F: 19
  },
  "2008": {
    F: 22
  },
  "2009": {
    F: 17
  },
  "2010": {
    F: 20
  },
  "2011": {
    F: 11
  },
  "2012": {
    F: 10
  },
  "2013": {
    F: 18
  },
  "2014": {
    F: 13
  },
  "2015": {
    F: 11
  }
};
const Detroit = {
  "2006": {
    M: 11
  }
};
const Devin = {
  "1998": {
    M: 12
  },
  "1999": {
    M: 11
  },
  "2000": {
    M: 15
  },
  "2001": {
    M: 15
  },
  "2003": {
    M: 14
  },
  "2006": {
    M: 16
  },
  "2008": {
    M: 12
  },
  "2016": {
    M: 13
  }
};
const Devlin = {
  "2004": {
    M: 10
  }
};
const Devon = {
  "1969": {
    M: 10
  },
  "1986": {
    M: 11
  },
  "1988": {
    M: 10
  },
  "1989": {
    M: 16
  },
  "1990": {
    M: 16
  },
  "1991": {
    F: 11,
    M: 16
  },
  "1992": {
    F: 15,
    M: 12
  },
  "1993": {
    M: 19
  },
  "1994": {
    F: 13,
    M: 28
  },
  "1995": {
    F: 24,
    M: 38
  },
  "1996": {
    F: 30,
    M: 30
  },
  "1997": {
    F: 18,
    M: 35
  },
  "1998": {
    F: 27,
    M: 36
  },
  "1999": {
    F: 22,
    M: 35
  },
  "2000": {
    F: 20,
    M: 27
  },
  "2001": {
    F: 17,
    M: 45
  },
  "2002": {
    M: 30
  },
  "2003": {
    F: 13,
    M: 31
  },
  "2004": {
    F: 15,
    M: 35
  },
  "2005": {
    F: 14,
    M: 25
  },
  "2006": {
    F: 14,
    M: 28
  },
  "2007": {
    M: 32
  },
  "2008": {
    F: 15,
    M: 25
  },
  "2009": {
    M: 44
  },
  "2010": {
    M: 30
  },
  "2011": {
    F: 12,
    M: 32
  },
  "2012": {
    F: 13,
    M: 18
  },
  "2013": {
    M: 18
  },
  "2014": {
    M: 12
  },
  "2015": {
    M: 17
  },
  "2016": {
    M: 13
  },
  "2017": {
    M: 15
  },
  "2018": {
    M: 10
  },
  "2021": {
    M: 13
  }
};
const Dexter = {
  "2013": {
    M: 16
  },
  "2014": {
    M: 16
  },
  "2016": {
    M: 12
  },
  "2017": {
    M: 12
  },
  "2018": {
    M: 15
  },
  "2019": {
    M: 13
  },
  "2020": {
    M: 12
  }
};
const Dhruv = {
  "2014": {
    M: 10
  }
};
const Diamond = {
  "2013": {
    F: 17
  }
};
const Diana = {
  "1920": {
    F: 12
  },
  "1921": {
    F: 15
  },
  "1922": {
    F: 11
  },
  "1923": {
    F: 21
  },
  "1924": {
    F: 13
  },
  "1925": {
    F: 16
  },
  "1926": {
    F: 14
  },
  "1927": {
    F: 17
  },
  "1928": {
    F: 31
  },
  "1929": {
    F: 20
  },
  "1930": {
    F: 28
  },
  "1931": {
    F: 36
  },
  "1932": {
    F: 35
  },
  "1933": {
    F: 43
  },
  "1934": {
    F: 36
  },
  "1935": {
    F: 39
  },
  "1936": {
    F: 53
  },
  "1937": {
    F: 38
  },
  "1938": {
    F: 65
  },
  "1939": {
    F: 63
  },
  "1940": {
    F: 72
  },
  "1941": {
    F: 100
  },
  "1942": {
    F: 82
  },
  "1943": {
    F: 79
  },
  "1944": {
    F: 74
  },
  "1945": {
    F: 76
  },
  "1946": {
    F: 102
  },
  "1947": {
    F: 91
  },
  "1948": {
    F: 93
  },
  "1949": {
    F: 88
  },
  "1950": {
    F: 73
  },
  "1951": {
    F: 53
  },
  "1952": {
    F: 66
  },
  "1953": {
    F: 61
  },
  "1954": {
    F: 68
  },
  "1955": {
    F: 64
  },
  "1956": {
    F: 70
  },
  "1957": {
    F: 86
  },
  "1958": {
    F: 113
  },
  "1959": {
    F: 90
  },
  "1960": {
    F: 93
  },
  "1961": {
    F: 83
  },
  "1962": {
    F: 92
  },
  "1963": {
    F: 78
  },
  "1964": {
    F: 73
  },
  "1965": {
    F: 67
  },
  "1966": {
    F: 53
  },
  "1967": {
    F: 52
  },
  "1968": {
    F: 55
  },
  "1969": {
    F: 51
  },
  "1970": {
    F: 43
  },
  "1971": {
    F: 53
  },
  "1972": {
    F: 50
  },
  "1973": {
    F: 29
  },
  "1974": {
    F: 34
  },
  "1975": {
    F: 32
  },
  "1976": {
    F: 37
  },
  "1977": {
    F: 34
  },
  "1978": {
    F: 29
  },
  "1979": {
    F: 32
  },
  "1980": {
    F: 28
  },
  "1981": {
    F: 46
  },
  "1982": {
    F: 36
  },
  "1983": {
    F: 27
  },
  "1984": {
    F: 24
  },
  "1985": {
    F: 16
  },
  "1986": {
    F: 18
  },
  "1987": {
    F: 17
  },
  "1988": {
    F: 21
  },
  "1989": {
    F: 15
  },
  "1990": {
    F: 13
  },
  "1991": {
    F: 13
  },
  "1992": {
    F: 17
  },
  "1997": {
    F: 21
  },
  "1999": {
    F: 11
  },
  "2012": {
    F: 12
  },
  "2016": {
    F: 11
  },
  "2018": {
    F: 10
  },
  "2020": {
    F: 12
  },
  "2021": {
    F: 11
  }
};
const Diane = {
  "1929": {
    F: 11
  },
  "1930": {
    F: 12
  },
  "1931": {
    F: 10
  },
  "1932": {
    F: 21
  },
  "1933": {
    F: 15
  },
  "1934": {
    F: 22
  },
  "1935": {
    F: 24
  },
  "1936": {
    F: 23
  },
  "1937": {
    F: 42
  },
  "1938": {
    F: 60
  },
  "1939": {
    F: 68
  },
  "1940": {
    F: 77
  },
  "1941": {
    F: 154
  },
  "1942": {
    F: 142
  },
  "1943": {
    F: 164
  },
  "1944": {
    F: 182
  },
  "1945": {
    F: 247
  },
  "1946": {
    F: 273
  },
  "1947": {
    F: 289
  },
  "1948": {
    F: 287
  },
  "1949": {
    F: 263
  },
  "1950": {
    F: 297
  },
  "1951": {
    F: 252
  },
  "1952": {
    F: 289
  },
  "1953": {
    F: 297
  },
  "1954": {
    F: 290
  },
  "1955": {
    F: 289
  },
  "1956": {
    F: 275
  },
  "1957": {
    F: 271
  },
  "1958": {
    F: 301
  },
  "1959": {
    F: 262
  },
  "1960": {
    F: 260
  },
  "1961": {
    F: 233
  },
  "1962": {
    F: 219
  },
  "1963": {
    F: 212
  },
  "1964": {
    F: 204
  },
  "1965": {
    F: 206
  },
  "1966": {
    F: 193
  },
  "1967": {
    F: 158
  },
  "1968": {
    F: 127
  },
  "1969": {
    F: 106
  },
  "1970": {
    F: 108
  },
  "1971": {
    F: 82
  },
  "1972": {
    F: 75
  },
  "1973": {
    F: 75
  },
  "1974": {
    F: 58
  },
  "1975": {
    F: 47
  },
  "1976": {
    F: 29
  },
  "1977": {
    F: 36
  },
  "1978": {
    F: 22
  },
  "1979": {
    F: 32
  },
  "1980": {
    F: 17
  },
  "1981": {
    F: 23
  },
  "1982": {
    F: 12
  },
  "1983": {
    F: 13
  },
  "1984": {
    F: 13
  },
  "1985": {
    F: 10
  },
  "1986": {
    F: 12
  },
  "1987": {
    F: 20
  }
};
const Dianna = {
  "1958": {
    F: 12
  },
  "1960": {
    F: 14
  },
  "1962": {
    F: 12
  },
  "1963": {
    F: 11
  },
  "1968": {
    F: 12
  },
  "1969": {
    F: 14
  },
  "1971": {
    F: 13
  },
  "1972": {
    F: 16
  },
  "1973": {
    F: 10
  },
  "1974": {
    F: 15
  },
  "1976": {
    F: 12
  },
  "1977": {
    F: 11
  },
  "1979": {
    F: 11
  },
  "1982": {
    F: 10
  }
};
const Dianne = {
  "1936": {
    F: 15
  },
  "1937": {
    F: 14
  },
  "1938": {
    F: 18
  },
  "1939": {
    F: 20
  },
  "1940": {
    F: 35
  },
  "1941": {
    F: 58
  },
  "1942": {
    F: 61
  },
  "1943": {
    F: 66
  },
  "1944": {
    F: 93
  },
  "1945": {
    F: 108
  },
  "1946": {
    F: 133
  },
  "1947": {
    F: 182
  },
  "1948": {
    F: 178
  },
  "1949": {
    F: 165
  },
  "1950": {
    F: 169
  },
  "1951": {
    F: 177
  },
  "1952": {
    F: 186
  },
  "1953": {
    F: 208
  },
  "1954": {
    F: 218
  },
  "1955": {
    F: 220
  },
  "1956": {
    F: 222
  },
  "1957": {
    F: 190
  },
  "1958": {
    F: 185
  },
  "1959": {
    F: 170
  },
  "1960": {
    F: 165
  },
  "1961": {
    F: 172
  },
  "1962": {
    F: 159
  },
  "1963": {
    F: 135
  },
  "1964": {
    F: 135
  },
  "1965": {
    F: 102
  },
  "1966": {
    F: 91
  },
  "1967": {
    F: 71
  },
  "1968": {
    F: 80
  },
  "1969": {
    F: 60
  },
  "1970": {
    F: 48
  },
  "1971": {
    F: 56
  },
  "1972": {
    F: 50
  },
  "1973": {
    F: 33
  },
  "1974": {
    F: 28
  },
  "1975": {
    F: 21
  },
  "1976": {
    F: 23
  },
  "1977": {
    F: 12
  },
  "1978": {
    F: 15
  },
  "1979": {
    F: 23
  },
  "1980": {
    F: 14
  },
  "1981": {
    F: 13
  },
  "1982": {
    F: 13
  }
};
const Diego = {
  "2004": {
    M: 10
  },
  "2006": {
    M: 10
  },
  "2008": {
    M: 11
  },
  "2009": {
    M: 10
  }
};
const Dillan = {
  "1992": {
    M: 10
  }
};
const Dillon = {
  "1987": {
    M: 18
  },
  "1988": {
    M: 11
  },
  "1989": {
    M: 15
  },
  "1990": {
    M: 25
  },
  "1991": {
    M: 24
  },
  "1992": {
    M: 63
  },
  "1993": {
    M: 44
  },
  "1994": {
    M: 23
  },
  "1995": {
    M: 18
  },
  "1996": {
    M: 23
  },
  "1997": {
    M: 16
  },
  "1998": {
    M: 11
  },
  "1999": {
    M: 12
  },
  "2000": {
    M: 13
  },
  "2001": {
    M: 17
  },
  "2003": {
    M: 17
  },
  "2004": {
    M: 12
  },
  "2005": {
    M: 10
  },
  "2008": {
    M: 12
  }
};
const Dion = {
  "1962": {
    M: 11
  },
  "1963": {
    M: 25
  },
  "1964": {
    M: 38
  },
  "1965": {
    M: 30
  },
  "1966": {
    M: 43
  },
  "1967": {
    M: 65
  },
  "1968": {
    M: 61
  },
  "1969": {
    M: 100
  },
  "1970": {
    M: 118
  },
  "1971": {
    M: 126
  },
  "1972": {
    M: 119
  },
  "1973": {
    M: 136
  },
  "1974": {
    M: 136
  },
  "1975": {
    M: 110
  },
  "1976": {
    M: 104
  },
  "1977": {
    M: 85
  },
  "1978": {
    M: 70
  },
  "1979": {
    M: 53
  },
  "1980": {
    M: 43
  },
  "1981": {
    M: 42
  },
  "1982": {
    M: 45
  },
  "1983": {
    M: 33
  },
  "1984": {
    M: 54
  },
  "1985": {
    M: 42
  },
  "1986": {
    M: 39
  },
  "1987": {
    M: 46
  },
  "1988": {
    M: 33
  },
  "1989": {
    M: 29
  },
  "1990": {
    M: 42
  },
  "1991": {
    M: 44
  },
  "1992": {
    M: 51
  },
  "1993": {
    M: 51
  },
  "1994": {
    M: 44
  },
  "1995": {
    M: 52
  },
  "1996": {
    M: 47
  },
  "1997": {
    M: 39
  },
  "1998": {
    M: 28
  },
  "1999": {
    M: 45
  },
  "2000": {
    M: 25
  },
  "2001": {
    M: 22
  },
  "2002": {
    M: 26
  },
  "2003": {
    M: 20
  },
  "2004": {
    M: 13
  },
  "2005": {
    M: 19
  },
  "2006": {
    M: 12
  },
  "2007": {
    M: 19
  },
  "2008": {
    M: 15
  },
  "2009": {
    M: 19
  },
  "2012": {
    M: 13
  },
  "2015": {
    M: 13
  },
  "2020": {
    M: 11
  }
};
const Dione = {
  "1972": {
    F: 10
  }
};
const Dionne = {
  "1970": {
    F: 10
  },
  "1971": {
    F: 22
  },
  "1972": {
    F: 14
  },
  "1975": {
    F: 12
  },
  "1976": {
    F: 16
  }
};
const Diya = {
  "2005": {
    F: 10
  },
  "2010": {
    F: 10
  }
};
const Dominic = {
  "1962": {
    M: 10
  },
  "1963": {
    M: 10
  },
  "1964": {
    M: 10
  },
  "1965": {
    M: 17
  },
  "1966": {
    M: 13
  },
  "1967": {
    M: 13
  },
  "1968": {
    M: 19
  },
  "1969": {
    M: 21
  },
  "1970": {
    M: 21
  },
  "1971": {
    M: 19
  },
  "1972": {
    M: 17
  },
  "1973": {
    M: 26
  },
  "1974": {
    M: 25
  },
  "1975": {
    M: 18
  },
  "1976": {
    M: 24
  },
  "1977": {
    M: 24
  },
  "1978": {
    M: 18
  },
  "1979": {
    M: 14
  },
  "1980": {
    M: 15
  },
  "1981": {
    M: 18
  },
  "1982": {
    M: 13
  },
  "1983": {
    M: 19
  },
  "1984": {
    M: 21
  },
  "1985": {
    M: 26
  },
  "1986": {
    M: 23
  },
  "1987": {
    M: 20
  },
  "1988": {
    M: 43
  },
  "1989": {
    M: 38
  },
  "1990": {
    M: 19
  },
  "1991": {
    M: 29
  },
  "1992": {
    M: 38
  },
  "1993": {
    M: 34
  },
  "1994": {
    M: 45
  },
  "1995": {
    M: 40
  },
  "1996": {
    M: 35
  },
  "1997": {
    M: 50
  },
  "1998": {
    M: 50
  },
  "1999": {
    M: 50
  },
  "2000": {
    M: 60
  },
  "2001": {
    M: 67
  },
  "2002": {
    M: 75
  },
  "2003": {
    M: 80
  },
  "2004": {
    M: 60
  },
  "2005": {
    M: 52
  },
  "2006": {
    M: 67
  },
  "2007": {
    M: 66
  },
  "2008": {
    M: 65
  },
  "2009": {
    M: 53
  },
  "2010": {
    M: 62
  },
  "2011": {
    M: 46
  },
  "2012": {
    M: 57
  },
  "2013": {
    M: 50
  },
  "2014": {
    M: 45
  },
  "2015": {
    M: 46
  },
  "2016": {
    M: 37
  },
  "2017": {
    M: 38
  },
  "2018": {
    M: 33
  },
  "2019": {
    M: 28
  },
  "2020": {
    M: 19
  },
  "2021": {
    M: 23
  }
};
const Dominique = {
  "1985": {
    F: 23
  },
  "1986": {
    F: 22
  },
  "1987": {
    F: 30
  },
  "1988": {
    F: 15
  },
  "1989": {
    F: 26
  },
  "1990": {
    F: 16
  },
  "1992": {
    F: 15
  },
  "1994": {
    F: 20
  },
  "1995": {
    M: 13
  },
  "1996": {
    F: 20
  },
  "1997": {
    F: 14
  },
  "1998": {
    F: 11
  },
  "1999": {
    F: 17
  },
  "2005": {
    F: 12
  }
};
const Don = {
  "1936": {
    M: 10
  },
  "1953": {
    M: 10
  }
};
const Donald = {
  "1900": {
    M: 48
  },
  "1901": {
    M: 64
  },
  "1902": {
    M: 56
  },
  "1903": {
    M: 70
  },
  "1904": {
    M: 56
  },
  "1905": {
    M: 77
  },
  "1906": {
    M: 73
  },
  "1907": {
    M: 82
  },
  "1908": {
    M: 109
  },
  "1909": {
    M: 84
  },
  "1910": {
    M: 90
  },
  "1911": {
    M: 103
  },
  "1912": {
    M: 133
  },
  "1913": {
    M: 99
  },
  "1914": {
    M: 119
  },
  "1915": {
    M: 140
  },
  "1916": {
    M: 142
  },
  "1917": {
    M: 126
  },
  "1918": {
    M: 130
  },
  "1919": {
    M: 136
  },
  "1920": {
    M: 170
  },
  "1921": {
    M: 213
  },
  "1922": {
    M: 197
  },
  "1923": {
    M: 221
  },
  "1924": {
    M: 221
  },
  "1925": {
    M: 225
  },
  "1926": {
    M: 244
  },
  "1927": {
    M: 241
  },
  "1928": {
    M: 253
  },
  "1929": {
    M: 262
  },
  "1930": {
    M: 281
  },
  "1931": {
    M: 312
  },
  "1932": {
    M: 302
  },
  "1933": {
    M: 246
  },
  "1934": {
    M: 294
  },
  "1935": {
    M: 292
  },
  "1936": {
    M: 285
  },
  "1937": {
    M: 324
  },
  "1938": {
    M: 312
  },
  "1939": {
    M: 272
  },
  "1940": {
    M: 290
  },
  "1941": {
    M: 277
  },
  "1942": {
    M: 250
  },
  "1943": {
    M: 222
  },
  "1944": {
    M: 282
  },
  "1945": {
    M: 255
  },
  "1946": {
    M: 263
  },
  "1947": {
    M: 267
  },
  "1948": {
    M: 254
  },
  "1949": {
    M: 240
  },
  "1950": {
    M: 228
  },
  "1951": {
    M: 261
  },
  "1952": {
    M: 217
  },
  "1953": {
    M: 226
  },
  "1954": {
    M: 197
  },
  "1955": {
    M: 212
  },
  "1956": {
    M: 200
  },
  "1957": {
    M: 203
  },
  "1958": {
    M: 203
  },
  "1959": {
    M: 209
  },
  "1960": {
    M: 173
  },
  "1961": {
    M: 169
  },
  "1962": {
    M: 147
  },
  "1963": {
    M: 151
  },
  "1964": {
    M: 116
  },
  "1965": {
    M: 112
  },
  "1966": {
    M: 90
  },
  "1967": {
    M: 81
  },
  "1968": {
    M: 74
  },
  "1969": {
    M: 68
  },
  "1970": {
    M: 50
  },
  "1971": {
    M: 42
  },
  "1972": {
    M: 49
  },
  "1973": {
    M: 34
  },
  "1974": {
    M: 32
  },
  "1975": {
    M: 31
  },
  "1976": {
    M: 35
  },
  "1977": {
    M: 38
  },
  "1978": {
    M: 30
  },
  "1979": {
    M: 17
  },
  "1980": {
    M: 22
  },
  "1981": {
    M: 21
  },
  "1982": {
    M: 23
  },
  "1983": {
    M: 15
  },
  "1984": {
    M: 17
  },
  "1985": {
    M: 20
  },
  "1986": {
    M: 25
  },
  "1988": {
    M: 14
  },
  "1989": {
    M: 13
  },
  "1991": {
    M: 13
  },
  "1992": {
    M: 14
  },
  "1993": {
    M: 11
  },
  "1994": {
    M: 11
  }
};
const Donna = {
  "1944": {
    F: 11
  },
  "1945": {
    F: 18
  },
  "1946": {
    F: 33
  },
  "1947": {
    F: 26
  },
  "1948": {
    F: 24
  },
  "1949": {
    F: 28
  },
  "1950": {
    F: 40
  },
  "1951": {
    F: 42
  },
  "1952": {
    F: 66
  },
  "1953": {
    F: 63
  },
  "1954": {
    F: 85
  },
  "1955": {
    F: 109
  },
  "1956": {
    F: 97
  },
  "1957": {
    F: 155
  },
  "1958": {
    F: 175
  },
  "1959": {
    F: 351
  },
  "1960": {
    F: 408
  },
  "1961": {
    F: 440
  },
  "1962": {
    F: 411
  },
  "1963": {
    F: 401
  },
  "1964": {
    F: 395
  },
  "1965": {
    F: 436
  },
  "1966": {
    F: 372
  },
  "1967": {
    F: 364
  },
  "1968": {
    F: 358
  },
  "1969": {
    F: 334
  },
  "1970": {
    F: 287
  },
  "1971": {
    F: 264
  },
  "1972": {
    F: 222
  },
  "1973": {
    F: 211
  },
  "1974": {
    F: 198
  },
  "1975": {
    F: 175
  },
  "1976": {
    F: 152
  },
  "1977": {
    F: 118
  },
  "1978": {
    F: 104
  },
  "1979": {
    F: 81
  },
  "1980": {
    F: 81
  },
  "1981": {
    F: 78
  },
  "1982": {
    F: 65
  },
  "1983": {
    F: 68
  },
  "1984": {
    F: 57
  },
  "1985": {
    F: 33
  },
  "1986": {
    F: 38
  },
  "1987": {
    F: 35
  },
  "1988": {
    F: 35
  },
  "1989": {
    F: 41
  },
  "1990": {
    F: 18
  },
  "1991": {
    F: 14
  },
  "1992": {
    F: 11
  },
  "1993": {
    F: 12
  },
  "1995": {
    F: 11
  }
};
const Dontae = {
  "2005": {
    M: 10
  },
  "2007": {
    M: 11
  },
  "2011": {
    M: 10
  }
};
const Dora = {
  "1901": {
    F: 23
  },
  "1902": {
    F: 21
  },
  "1903": {
    F: 16
  },
  "1904": {
    F: 21
  },
  "1905": {
    F: 26
  },
  "1906": {
    F: 28
  },
  "1907": {
    F: 24
  },
  "1908": {
    F: 17
  },
  "1909": {
    F: 25
  },
  "1910": {
    F: 24
  },
  "1911": {
    F: 18
  },
  "1912": {
    F: 19
  },
  "1913": {
    F: 22
  },
  "1914": {
    F: 27
  },
  "1915": {
    F: 15
  },
  "1916": {
    F: 33
  },
  "1917": {
    F: 11
  },
  "1918": {
    F: 12
  },
  "1920": {
    F: 17
  },
  "1921": {
    F: 21
  },
  "1922": {
    F: 14
  },
  "1923": {
    F: 15
  },
  "1924": {
    F: 11
  },
  "1925": {
    F: 13
  },
  "1927": {
    F: 10
  },
  "1928": {
    F: 10
  }
};
const Doreen = {
  "1901": {
    F: 18
  },
  "1902": {
    F: 24
  },
  "1903": {
    F: 21
  },
  "1904": {
    F: 35
  },
  "1905": {
    F: 41
  },
  "1906": {
    F: 29
  },
  "1907": {
    F: 43
  },
  "1908": {
    F: 49
  },
  "1909": {
    F: 38
  },
  "1910": {
    F: 34
  },
  "1911": {
    F: 58
  },
  "1912": {
    F: 61
  },
  "1913": {
    F: 54
  },
  "1914": {
    F: 63
  },
  "1915": {
    F: 80
  },
  "1916": {
    F: 76
  },
  "1917": {
    F: 87
  },
  "1918": {
    F: 101
  },
  "1919": {
    F: 103
  },
  "1920": {
    F: 135
  },
  "1921": {
    F: 118
  },
  "1922": {
    F: 144
  },
  "1923": {
    F: 156
  },
  "1924": {
    F: 150
  },
  "1925": {
    F: 139
  },
  "1926": {
    F: 174
  },
  "1927": {
    F: 195
  },
  "1928": {
    F: 162
  },
  "1929": {
    F: 175
  },
  "1930": {
    F: 165
  },
  "1931": {
    F: 178
  },
  "1932": {
    F: 134
  },
  "1933": {
    F: 157
  },
  "1934": {
    F: 118
  },
  "1935": {
    F: 124
  },
  "1936": {
    F: 93
  },
  "1937": {
    F: 94
  },
  "1938": {
    F: 65
  },
  "1939": {
    F: 95
  },
  "1940": {
    F: 64
  },
  "1941": {
    F: 87
  },
  "1942": {
    F: 74
  },
  "1943": {
    F: 56
  },
  "1944": {
    F: 40
  },
  "1945": {
    F: 65
  },
  "1946": {
    F: 63
  },
  "1947": {
    F: 64
  },
  "1948": {
    F: 45
  },
  "1949": {
    F: 41
  },
  "1950": {
    F: 41
  },
  "1951": {
    F: 39
  },
  "1952": {
    F: 31
  },
  "1953": {
    F: 25
  },
  "1954": {
    F: 33
  },
  "1955": {
    F: 24
  },
  "1956": {
    F: 21
  },
  "1957": {
    F: 21
  },
  "1958": {
    F: 21
  },
  "1959": {
    F: 23
  },
  "1960": {
    F: 31
  },
  "1961": {
    F: 17
  },
  "1962": {
    F: 18
  },
  "1963": {
    F: 21
  },
  "1964": {
    F: 15
  },
  "1965": {
    F: 13
  },
  "1966": {
    F: 15
  },
  "1967": {
    F: 15
  },
  "1968": {
    F: 11
  },
  "1969": {
    F: 12
  },
  "1970": {
    F: 12
  },
  "1971": {
    F: 16
  },
  "1977": {
    F: 14
  }
};
const Doris = {
  "1900": {
    F: 177
  },
  "1901": {
    F: 172
  },
  "1902": {
    F: 195
  },
  "1903": {
    F: 183
  },
  "1904": {
    F: 183
  },
  "1905": {
    F: 245
  },
  "1906": {
    F: 216
  },
  "1907": {
    F: 212
  },
  "1908": {
    F: 238
  },
  "1909": {
    F: 196
  },
  "1910": {
    F: 215
  },
  "1911": {
    F: 187
  },
  "1912": {
    F: 203
  },
  "1913": {
    F: 186
  },
  "1914": {
    F: 195
  },
  "1915": {
    F: 165
  },
  "1916": {
    F: 177
  },
  "1917": {
    F: 166
  },
  "1918": {
    F: 175
  },
  "1919": {
    F: 145
  },
  "1920": {
    F: 178
  },
  "1921": {
    F: 153
  },
  "1922": {
    F: 144
  },
  "1923": {
    F: 122
  },
  "1924": {
    F: 114
  },
  "1925": {
    F: 91
  },
  "1926": {
    F: 93
  },
  "1927": {
    F: 85
  },
  "1928": {
    F: 67
  },
  "1929": {
    F: 75
  },
  "1930": {
    F: 64
  },
  "1931": {
    F: 63
  },
  "1932": {
    F: 47
  },
  "1933": {
    F: 48
  },
  "1934": {
    F: 32
  },
  "1935": {
    F: 35
  },
  "1936": {
    F: 26
  },
  "1937": {
    F: 27
  },
  "1938": {
    F: 21
  },
  "1939": {
    F: 31
  },
  "1940": {
    F: 27
  },
  "1941": {
    F: 19
  },
  "1942": {
    F: 24
  },
  "1943": {
    F: 22
  },
  "1944": {
    F: 18
  },
  "1945": {
    F: 16
  },
  "1946": {
    F: 15
  },
  "1947": {
    F: 11
  },
  "1948": {
    F: 10
  },
  "1952": {
    F: 13
  },
  "1953": {
    F: 14
  },
  "1955": {
    F: 10
  },
  "1956": {
    F: 13
  },
  "1957": {
    F: 10
  },
  "1958": {
    F: 10
  },
  "1959": {
    F: 11
  },
  "1960": {
    F: 14
  },
  "1984": {
    F: 15
  }
};
const Dorothea = {
  "1905": {
    F: 12
  },
  "1907": {
    F: 11
  },
  "1909": {
    F: 13
  },
  "1910": {
    F: 15
  },
  "1911": {
    F: 11
  },
  "1912": {
    F: 14
  },
  "1913": {
    F: 12
  },
  "1914": {
    F: 15
  },
  "1915": {
    F: 15
  },
  "1916": {
    F: 17
  },
  "1917": {
    F: 11
  },
  "1918": {
    F: 13
  },
  "1919": {
    F: 15
  },
  "1920": {
    F: 14
  },
  "1921": {
    F: 14
  },
  "1922": {
    F: 12
  },
  "1923": {
    F: 10
  },
  "1924": {
    F: 13
  },
  "1925": {
    F: 19
  },
  "1926": {
    F: 11
  },
  "1927": {
    F: 12
  },
  "1928": {
    F: 14
  },
  "1929": {
    F: 12
  },
  "1933": {
    F: 13
  }
};
const Dorothy = {
  "1900": {
    F: 193
  },
  "1901": {
    F: 201
  },
  "1902": {
    F: 223
  },
  "1903": {
    F: 226
  },
  "1904": {
    F: 225
  },
  "1905": {
    F: 246
  },
  "1906": {
    F: 257
  },
  "1907": {
    F: 257
  },
  "1908": {
    F: 281
  },
  "1909": {
    F: 269
  },
  "1910": {
    F: 249
  },
  "1911": {
    F: 261
  },
  "1912": {
    F: 298
  },
  "1913": {
    F: 293
  },
  "1914": {
    F: 276
  },
  "1915": {
    F: 315
  },
  "1916": {
    F: 333
  },
  "1917": {
    F: 343
  },
  "1918": {
    F: 335
  },
  "1919": {
    F: 311
  },
  "1920": {
    F: 371
  },
  "1921": {
    F: 381
  },
  "1922": {
    F: 361
  },
  "1923": {
    F: 357
  },
  "1924": {
    F: 348
  },
  "1925": {
    F: 306
  },
  "1926": {
    F: 310
  },
  "1927": {
    F: 302
  },
  "1928": {
    F: 260
  },
  "1929": {
    F: 263
  },
  "1930": {
    F: 256
  },
  "1931": {
    F: 233
  },
  "1932": {
    F: 227
  },
  "1933": {
    F: 247
  },
  "1934": {
    F: 192
  },
  "1935": {
    F: 211
  },
  "1936": {
    F: 205
  },
  "1937": {
    F: 194
  },
  "1938": {
    F: 191
  },
  "1939": {
    F: 190
  },
  "1940": {
    F: 212
  },
  "1941": {
    F: 171
  },
  "1942": {
    F: 193
  },
  "1943": {
    F: 141
  },
  "1944": {
    F: 172
  },
  "1945": {
    F: 149
  },
  "1946": {
    F: 151
  },
  "1947": {
    F: 169
  },
  "1948": {
    F: 128
  },
  "1949": {
    F: 120
  },
  "1950": {
    F: 100
  },
  "1951": {
    F: 102
  },
  "1952": {
    F: 97
  },
  "1953": {
    F: 82
  },
  "1954": {
    F: 70
  },
  "1955": {
    F: 83
  },
  "1956": {
    F: 80
  },
  "1957": {
    F: 70
  },
  "1958": {
    F: 57
  },
  "1959": {
    F: 57
  },
  "1960": {
    F: 46
  },
  "1961": {
    F: 43
  },
  "1962": {
    F: 46
  },
  "1963": {
    F: 43
  },
  "1964": {
    F: 33
  },
  "1965": {
    F: 35
  },
  "1966": {
    F: 19
  },
  "1967": {
    F: 24
  },
  "1968": {
    F: 25
  },
  "1969": {
    F: 24
  },
  "1970": {
    F: 11
  },
  "1971": {
    F: 23
  },
  "1972": {
    F: 13
  },
  "1974": {
    F: 17
  },
  "1975": {
    F: 16
  },
  "1976": {
    F: 13
  },
  "1977": {
    F: 15
  },
  "1979": {
    F: 11
  },
  "1980": {
    F: 15
  },
  "1983": {
    F: 18
  },
  "1984": {
    F: 18
  },
  "1988": {
    F: 10
  },
  "1989": {
    F: 10
  },
  "1991": {
    F: 13
  },
  "2020": {
    F: 10
  }
};
const Dougal = {
  "1970": {
    M: 10
  },
  "1971": {
    M: 15
  },
  "1973": {
    M: 13
  },
  "1974": {
    M: 12
  },
  "1976": {
    M: 12
  }
};
const Douglas = {
  "1900": {
    M: 61
  },
  "1901": {
    M: 64
  },
  "1902": {
    M: 62
  },
  "1903": {
    M: 55
  },
  "1904": {
    M: 76
  },
  "1905": {
    M: 83
  },
  "1906": {
    M: 106
  },
  "1907": {
    M: 95
  },
  "1908": {
    M: 104
  },
  "1909": {
    M: 107
  },
  "1910": {
    M: 100
  },
  "1911": {
    M: 106
  },
  "1912": {
    M: 119
  },
  "1913": {
    M: 112
  },
  "1914": {
    M: 110
  },
  "1915": {
    M: 118
  },
  "1916": {
    M: 183
  },
  "1917": {
    M: 257
  },
  "1918": {
    M: 245
  },
  "1919": {
    M: 258
  },
  "1920": {
    M: 269
  },
  "1921": {
    M: 223
  },
  "1922": {
    M: 217
  },
  "1923": {
    M: 223
  },
  "1924": {
    M: 202
  },
  "1925": {
    M: 213
  },
  "1926": {
    M: 191
  },
  "1927": {
    M: 188
  },
  "1928": {
    M: 199
  },
  "1929": {
    M: 176
  },
  "1930": {
    M: 162
  },
  "1931": {
    M: 163
  },
  "1932": {
    M: 168
  },
  "1933": {
    M: 137
  },
  "1934": {
    M: 126
  },
  "1935": {
    M: 105
  },
  "1936": {
    M: 116
  },
  "1937": {
    M: 97
  },
  "1938": {
    M: 119
  },
  "1939": {
    M: 135
  },
  "1940": {
    M: 127
  },
  "1941": {
    M: 136
  },
  "1942": {
    M: 167
  },
  "1943": {
    M: 149
  },
  "1944": {
    M: 152
  },
  "1945": {
    M: 185
  },
  "1946": {
    M: 171
  },
  "1947": {
    M: 160
  },
  "1948": {
    M: 189
  },
  "1949": {
    M: 166
  },
  "1950": {
    M: 162
  },
  "1951": {
    M: 167
  },
  "1952": {
    M: 139
  },
  "1953": {
    M: 141
  },
  "1954": {
    M: 151
  },
  "1955": {
    M: 132
  },
  "1956": {
    M: 144
  },
  "1957": {
    M: 134
  },
  "1958": {
    M: 127
  },
  "1959": {
    M: 141
  },
  "1960": {
    M: 140
  },
  "1961": {
    M: 128
  },
  "1962": {
    M: 127
  },
  "1963": {
    M: 124
  },
  "1964": {
    M: 135
  },
  "1965": {
    M: 100
  },
  "1966": {
    M: 103
  },
  "1967": {
    M: 98
  },
  "1968": {
    M: 96
  },
  "1969": {
    M: 93
  },
  "1970": {
    M: 86
  },
  "1971": {
    M: 75
  },
  "1972": {
    M: 80
  },
  "1973": {
    M: 62
  },
  "1974": {
    M: 53
  },
  "1975": {
    M: 52
  },
  "1976": {
    M: 64
  },
  "1977": {
    M: 52
  },
  "1978": {
    M: 50
  },
  "1979": {
    M: 60
  },
  "1980": {
    M: 59
  },
  "1981": {
    M: 51
  },
  "1982": {
    M: 53
  },
  "1983": {
    M: 63
  },
  "1984": {
    M: 72
  },
  "1985": {
    M: 44
  },
  "1986": {
    M: 41
  },
  "1987": {
    M: 31
  },
  "1988": {
    M: 35
  },
  "1989": {
    M: 31
  },
  "1990": {
    M: 35
  },
  "1991": {
    M: 35
  },
  "1992": {
    M: 28
  },
  "1993": {
    M: 32
  },
  "1994": {
    M: 27
  },
  "1995": {
    M: 24
  },
  "1996": {
    M: 14
  },
  "1997": {
    M: 12
  },
  "1998": {
    M: 10
  },
  "1999": {
    M: 11
  },
  "2000": {
    M: 23
  },
  "2001": {
    M: 14
  },
  "2002": {
    M: 17
  },
  "2004": {
    M: 16
  },
  "2005": {
    M: 12
  },
  "2006": {
    M: 14
  },
  "2007": {
    M: 19
  },
  "2009": {
    M: 11
  },
  "2010": {
    M: 11
  },
  "2012": {
    M: 10
  },
  "2014": {
    M: 12
  },
  "2016": {
    M: 13
  },
  "2017": {
    M: 12
  },
  "2019": {
    M: 14
  },
  "2021": {
    M: 14
  }
};
const Drake = {
  "2011": {
    M: 12
  },
  "2012": {
    M: 11
  }
};
const Drew = {
  "1983": {
    M: 12
  },
  "1984": {
    M: 12
  },
  "1985": {
    M: 11
  },
  "1988": {
    M: 11
  },
  "1990": {
    M: 23
  },
  "1993": {
    M: 17
  },
  "1994": {
    M: 14
  },
  "1995": {
    M: 23
  },
  "1996": {
    M: 20
  },
  "1997": {
    M: 20
  },
  "1998": {
    F: 15,
    M: 20
  },
  "1999": {
    M: 24
  },
  "2000": {
    F: 12,
    M: 19
  },
  "2001": {
    M: 14
  },
  "2003": {
    M: 14
  },
  "2005": {
    M: 14
  },
  "2006": {
    M: 11
  },
  "2007": {
    M: 17
  },
  "2008": {
    M: 22
  },
  "2009": {
    M: 20
  },
  "2011": {
    M: 17
  }
};
const Duane = {
  "1961": {
    M: 12
  },
  "1962": {
    M: 22
  },
  "1963": {
    M: 14
  },
  "1964": {
    M: 24
  },
  "1965": {
    M: 20
  },
  "1966": {
    M: 30
  },
  "1967": {
    M: 46
  },
  "1968": {
    M: 33
  },
  "1969": {
    M: 45
  },
  "1970": {
    M: 43
  },
  "1971": {
    M: 48
  },
  "1972": {
    M: 44
  },
  "1973": {
    M: 38
  },
  "1974": {
    M: 40
  },
  "1975": {
    M: 38
  },
  "1976": {
    M: 33
  },
  "1977": {
    M: 38
  },
  "1978": {
    M: 29
  },
  "1979": {
    M: 27
  },
  "1980": {
    M: 24
  },
  "1981": {
    M: 26
  },
  "1982": {
    M: 17
  },
  "1983": {
    M: 12
  },
  "1984": {
    M: 17
  },
  "1986": {
    M: 11
  },
  "1988": {
    M: 15
  },
  "1989": {
    M: 10
  },
  "1990": {
    M: 10
  },
  "1991": {
    M: 10
  },
  "1992": {
    M: 12
  }
};
const Dudley = {
  "1900": {
    M: 13
  },
  "1902": {
    M: 10
  },
  "1904": {
    M: 15
  },
  "1905": {
    M: 12
  },
  "1906": {
    M: 10
  },
  "1908": {
    M: 19
  },
  "1909": {
    M: 16
  },
  "1910": {
    M: 17
  },
  "1911": {
    M: 17
  },
  "1912": {
    M: 21
  },
  "1913": {
    M: 26
  },
  "1914": {
    M: 23
  },
  "1915": {
    M: 23
  },
  "1916": {
    M: 17
  },
  "1917": {
    M: 14
  },
  "1918": {
    M: 25
  },
  "1919": {
    M: 11
  },
  "1920": {
    M: 23
  },
  "1921": {
    M: 15
  },
  "1922": {
    M: 11
  },
  "1923": {
    M: 11
  },
  "1924": {
    M: 12
  },
  "1925": {
    M: 10
  },
  "1926": {
    M: 11
  },
  "1929": {
    M: 10
  },
  "1931": {
    M: 11
  },
  "1943": {
    M: 10
  },
  "1944": {
    M: 11
  }
};
const Dulcie = {
  "1900": {
    F: 13
  },
  "1901": {
    F: 16
  },
  "1902": {
    F: 17
  },
  "1903": {
    F: 16
  },
  "1904": {
    F: 18
  },
  "1905": {
    F: 21
  },
  "1906": {
    F: 26
  },
  "1907": {
    F: 38
  },
  "1908": {
    F: 41
  },
  "1909": {
    F: 40
  },
  "1910": {
    F: 61
  },
  "1911": {
    F: 45
  },
  "1912": {
    F: 47
  },
  "1913": {
    F: 65
  },
  "1914": {
    F: 59
  },
  "1915": {
    F: 60
  },
  "1916": {
    F: 54
  },
  "1917": {
    F: 53
  },
  "1918": {
    F: 48
  },
  "1919": {
    F: 49
  },
  "1920": {
    F: 54
  },
  "1921": {
    F: 49
  },
  "1922": {
    F: 49
  },
  "1923": {
    F: 71
  },
  "1924": {
    F: 64
  },
  "1925": {
    F: 37
  },
  "1926": {
    F: 52
  },
  "1927": {
    F: 50
  },
  "1928": {
    F: 43
  },
  "1929": {
    F: 37
  },
  "1930": {
    F: 48
  },
  "1931": {
    F: 35
  },
  "1932": {
    F: 23
  },
  "1933": {
    F: 25
  },
  "1934": {
    F: 23
  },
  "1935": {
    F: 23
  },
  "1936": {
    F: 20
  },
  "1937": {
    F: 17
  },
  "1938": {
    F: 17
  },
  "1939": {
    F: 16
  },
  "1940": {
    F: 14
  },
  "1941": {
    F: 16
  },
  "1942": {
    F: 12
  },
  "1943": {
    F: 16
  },
  "1944": {
    F: 10
  }
};
const Duncan = {
  "1900": {
    M: 10
  },
  "1902": {
    M: 18
  },
  "1903": {
    M: 13
  },
  "1904": {
    M: 14
  },
  "1905": {
    M: 16
  },
  "1906": {
    M: 20
  },
  "1907": {
    M: 17
  },
  "1908": {
    M: 19
  },
  "1909": {
    M: 13
  },
  "1910": {
    M: 15
  },
  "1911": {
    M: 19
  },
  "1912": {
    M: 16
  },
  "1913": {
    M: 17
  },
  "1914": {
    M: 19
  },
  "1915": {
    M: 21
  },
  "1916": {
    M: 23
  },
  "1917": {
    M: 15
  },
  "1918": {
    M: 18
  },
  "1919": {
    M: 19
  },
  "1920": {
    M: 23
  },
  "1921": {
    M: 22
  },
  "1922": {
    M: 12
  },
  "1923": {
    M: 16
  },
  "1924": {
    M: 22
  },
  "1926": {
    M: 18
  },
  "1927": {
    M: 15
  },
  "1928": {
    M: 12
  },
  "1929": {
    M: 15
  },
  "1930": {
    M: 14
  },
  "1931": {
    M: 12
  },
  "1933": {
    M: 11
  },
  "1934": {
    M: 11
  },
  "1935": {
    M: 10
  },
  "1937": {
    M: 14
  },
  "1938": {
    M: 14
  },
  "1939": {
    M: 16
  },
  "1940": {
    M: 14
  },
  "1941": {
    M: 16
  },
  "1942": {
    M: 14
  },
  "1943": {
    M: 21
  },
  "1944": {
    M: 16
  },
  "1945": {
    M: 18
  },
  "1946": {
    M: 14
  },
  "1947": {
    M: 14
  },
  "1948": {
    M: 28
  },
  "1949": {
    M: 22
  },
  "1950": {
    M: 25
  },
  "1951": {
    M: 24
  },
  "1952": {
    M: 20
  },
  "1953": {
    M: 19
  },
  "1954": {
    M: 22
  },
  "1955": {
    M: 40
  },
  "1956": {
    M: 28
  },
  "1957": {
    M: 45
  },
  "1958": {
    M: 36
  },
  "1959": {
    M: 37
  },
  "1960": {
    M: 39
  },
  "1961": {
    M: 43
  },
  "1962": {
    M: 53
  },
  "1963": {
    M: 39
  },
  "1964": {
    M: 36
  },
  "1965": {
    M: 46
  },
  "1966": {
    M: 43
  },
  "1967": {
    M: 31
  },
  "1968": {
    M: 44
  },
  "1969": {
    M: 41
  },
  "1970": {
    M: 53
  },
  "1971": {
    M: 52
  },
  "1972": {
    M: 50
  },
  "1973": {
    M: 66
  },
  "1974": {
    M: 86
  },
  "1975": {
    M: 79
  },
  "1976": {
    M: 70
  },
  "1977": {
    M: 70
  },
  "1978": {
    M: 60
  },
  "1979": {
    M: 55
  },
  "1980": {
    M: 52
  },
  "1981": {
    M: 41
  },
  "1982": {
    M: 41
  },
  "1983": {
    M: 35
  },
  "1984": {
    M: 33
  },
  "1985": {
    M: 32
  },
  "1986": {
    M: 22
  },
  "1987": {
    M: 32
  },
  "1988": {
    M: 30
  },
  "1989": {
    M: 29
  },
  "1990": {
    M: 18
  },
  "1991": {
    M: 20
  },
  "1992": {
    M: 20
  },
  "1993": {
    M: 22
  },
  "1994": {
    M: 29
  },
  "1995": {
    M: 21
  },
  "1996": {
    M: 23
  },
  "1997": {
    M: 19
  },
  "1998": {
    M: 15
  },
  "1999": {
    M: 18
  },
  "2000": {
    M: 18
  },
  "2001": {
    M: 11
  },
  "2002": {
    M: 15
  },
  "2003": {
    M: 15
  },
  "2004": {
    M: 12
  },
  "2008": {
    M: 10
  },
  "2011": {
    M: 15
  }
};
const Dustin = {
  "2009": {
    M: 11
  },
  "2018": {
    M: 15
  },
  "2019": {
    M: 12
  },
  "2020": {
    M: 14
  },
  "2021": {
    M: 14
  }
};
const Dwayne = {
  "1968": {
    M: 13
  },
  "1969": {
    M: 10
  },
  "1970": {
    M: 15
  },
  "1971": {
    M: 30
  },
  "1972": {
    M: 50
  },
  "1973": {
    M: 60
  },
  "1974": {
    M: 57
  },
  "1975": {
    M: 49
  },
  "1976": {
    M: 34
  },
  "1977": {
    M: 50
  },
  "1978": {
    M: 56
  },
  "1979": {
    M: 53
  },
  "1980": {
    M: 47
  },
  "1981": {
    M: 50
  },
  "1982": {
    M: 38
  },
  "1983": {
    M: 23
  },
  "1984": {
    M: 16
  },
  "1985": {
    M: 16
  },
  "1986": {
    M: 21
  },
  "1987": {
    M: 14
  },
  "1988": {
    M: 11
  },
  "1990": {
    M: 20
  },
  "1991": {
    M: 13
  },
  "1992": {
    M: 13
  },
  "2013": {
    M: 10
  }
};
const Dylan = {
  "1970": {
    M: 14
  },
  "1971": {
    M: 28
  },
  "1972": {
    M: 32
  },
  "1973": {
    M: 15
  },
  "1974": {
    M: 26
  },
  "1975": {
    M: 37
  },
  "1976": {
    M: 37
  },
  "1977": {
    M: 35
  },
  "1978": {
    M: 43
  },
  "1979": {
    M: 53
  },
  "1980": {
    M: 59
  },
  "1981": {
    M: 55
  },
  "1982": {
    M: 56
  },
  "1983": {
    M: 72
  },
  "1984": {
    M: 76
  },
  "1985": {
    M: 103
  },
  "1986": {
    M: 110
  },
  "1987": {
    M: 123
  },
  "1988": {
    M: 127
  },
  "1989": {
    M: 128
  },
  "1990": {
    M: 179
  },
  "1991": {
    M: 197
  },
  "1992": {
    M: 495
  },
  "1993": {
    M: 348
  },
  "1994": {
    M: 225
  },
  "1995": {
    M: 234
  },
  "1996": {
    M: 206
  },
  "1997": {
    M: 243
  },
  "1998": {
    M: 284
  },
  "1999": {
    M: 259
  },
  "2000": {
    M: 290
  },
  "2001": {
    M: 256
  },
  "2002": {
    M: 200
  },
  "2003": {
    M: 192
  },
  "2004": {
    M: 250
  },
  "2005": {
    M: 181
  },
  "2006": {
    M: 202
  },
  "2007": {
    M: 207
  },
  "2008": {
    F: 10,
    M: 199
  },
  "2009": {
    F: 10,
    M: 177
  },
  "2010": {
    M: 171
  },
  "2011": {
    M: 136
  },
  "2012": {
    M: 117
  },
  "2013": {
    M: 94
  },
  "2014": {
    M: 92
  },
  "2015": {
    M: 102
  },
  "2016": {
    M: 81
  },
  "2017": {
    M: 75
  },
  "2018": {
    M: 61
  },
  "2019": {
    M: 59,
    F: 10
  },
  "2020": {
    M: 60
  },
  "2021": {
    M: 48
  }
};
const Earl = {
  "1937": {
    M: 25
  },
  "1938": {
    M: 14
  },
  "1939": {
    M: 17
  },
  "1940": {
    M: 20
  },
  "1948": {
    M: 17
  },
  "1949": {
    M: 11
  },
  "1951": {
    M: 11
  },
  "1954": {
    M: 11
  },
  "1959": {
    M: 11
  },
  "1960": {
    M: 14
  },
  "1961": {
    M: 12
  },
  "1964": {
    M: 15
  },
  "1968": {
    M: 11
  },
  "1970": {
    M: 17
  },
  "1972": {
    M: 11
  }
};
const Earle = {
  "1918": {
    M: 10
  },
  "1921": {
    M: 11
  },
  "1925": {
    M: 10
  },
  "1940": {
    M: 12
  }
};
const Easton = {
  "2017": {
    M: 13
  },
  "2018": {
    M: 11
  },
  "2019": {
    M: 12
  },
  "2020": {
    M: 16
  },
  "2021": {
    M: 12
  }
};
const Ebony = {
  "1982": {
    F: 14
  },
  "1983": {
    F: 17
  },
  "1984": {
    F: 11
  },
  "1986": {
    F: 13
  },
  "1987": {
    F: 14
  },
  "1990": {
    F: 23
  },
  "1991": {
    F: 12
  },
  "1992": {
    F: 12
  },
  "1993": {
    F: 20
  },
  "1994": {
    F: 13
  },
  "1995": {
    F: 26
  },
  "1996": {
    F: 16
  },
  "1997": {
    F: 20
  },
  "1998": {
    F: 22
  },
  "1999": {
    F: 17
  },
  "2000": {
    F: 22
  },
  "2001": {
    F: 19
  },
  "2002": {
    F: 14
  },
  "2003": {
    F: 14
  },
  "2004": {
    F: 16
  },
  "2005": {
    F: 21
  },
  "2006": {
    F: 12
  },
  "2007": {
    F: 20
  },
  "2008": {
    F: 17
  },
  "2009": {
    F: 16
  },
  "2010": {
    F: 11
  },
  "2011": {
    F: 10
  },
  "2013": {
    F: 10
  }
};
const Eddie = {
  "1977": {
    M: 11
  },
  "1989": {
    M: 10
  },
  "2007": {
    M: 11
  },
  "2010": {
    M: 14
  },
  "2011": {
    M: 14
  },
  "2012": {
    M: 12
  },
  "2013": {
    M: 12
  },
  "2014": {
    M: 15
  },
  "2015": {
    M: 15
  },
  "2016": {
    M: 16
  },
  "2017": {
    M: 13
  },
  "2018": {
    M: 23
  },
  "2019": {
    M: 11
  },
  "2020": {
    M: 18
  },
  "2021": {
    M: 20
  }
};
const Eden = {
  "1974": {
    M: 11
  },
  "1989": {
    F: 21
  },
  "1990": {
    F: 30
  },
  "1991": {
    F: 31
  },
  "1992": {
    F: 43
  },
  "1993": {
    F: 43,
    M: 10
  },
  "1994": {
    F: 45
  },
  "1995": {
    F: 56
  },
  "1996": {
    F: 53,
    M: 11
  },
  "1997": {
    F: 47,
    M: 10
  },
  "1998": {
    F: 66
  },
  "1999": {
    F: 74,
    M: 11
  },
  "2000": {
    F: 64
  },
  "2001": {
    F: 52
  },
  "2002": {
    F: 58,
    M: 12
  },
  "2003": {
    F: 41
  },
  "2004": {
    F: 57,
    M: 11
  },
  "2005": {
    F: 49,
    M: 10
  },
  "2006": {
    F: 58
  },
  "2007": {
    F: 103
  },
  "2008": {
    F: 73,
    M: 13
  },
  "2009": {
    F: 75
  },
  "2010": {
    F: 78
  },
  "2011": {
    F: 95
  },
  "2012": {
    F: 87
  },
  "2013": {
    F: 96
  },
  "2014": {
    F: 84
  },
  "2015": {
    F: 70
  },
  "2016": {
    F: 73,
    M: 13
  },
  "2017": {
    F: 69,
    M: 12
  },
  "2018": {
    F: 76,
    M: 13
  },
  "2019": {
    F: 67,
    M: 14
  },
  "2020": {
    F: 65
  },
  "2021": {
    F: 61,
    M: 15
  }
};
const Edgar = {
  "1900": {
    M: 24
  },
  "1901": {
    M: 20
  },
  "1902": {
    M: 19
  },
  "1903": {
    M: 23
  },
  "1904": {
    M: 29
  },
  "1905": {
    M: 32
  },
  "1906": {
    M: 33
  },
  "1907": {
    M: 46
  },
  "1908": {
    M: 37
  },
  "1909": {
    M: 35
  },
  "1910": {
    M: 31
  },
  "1911": {
    M: 34
  },
  "1912": {
    M: 38
  },
  "1913": {
    M: 42
  },
  "1914": {
    M: 19
  },
  "1915": {
    M: 32
  },
  "1916": {
    M: 35
  },
  "1917": {
    M: 29
  },
  "1918": {
    M: 25
  },
  "1919": {
    M: 23
  },
  "1920": {
    M: 30
  },
  "1921": {
    M: 26
  },
  "1922": {
    M: 25
  },
  "1923": {
    M: 14
  },
  "1924": {
    M: 16
  },
  "1925": {
    M: 10
  },
  "1926": {
    M: 16
  },
  "1927": {
    M: 21
  },
  "1929": {
    M: 14
  },
  "1930": {
    M: 12
  },
  "1931": {
    M: 14
  },
  "1935": {
    M: 11
  },
  "1936": {
    M: 10
  },
  "1937": {
    M: 11
  },
  "1942": {
    M: 10
  },
  "1953": {
    M: 11
  }
};
const Edie = {
  "2011": {
    F: 18
  },
  "2014": {
    F: 12
  },
  "2015": {
    F: 13
  },
  "2017": {
    F: 14
  },
  "2019": {
    F: 12
  }
};
const Edison = {
  "2015": {
    M: 11
  },
  "2019": {
    M: 11
  },
  "2021": {
    M: 15
  }
};
const Edith = {
  "1900": {
    F: 118
  },
  "1901": {
    F: 137
  },
  "1902": {
    F: 137
  },
  "1903": {
    F: 128
  },
  "1904": {
    F: 135
  },
  "1905": {
    F: 146
  },
  "1906": {
    F: 161
  },
  "1907": {
    F: 144
  },
  "1908": {
    F: 136
  },
  "1909": {
    F: 146
  },
  "1910": {
    F: 132
  },
  "1911": {
    F: 135
  },
  "1912": {
    F: 153
  },
  "1913": {
    F: 137
  },
  "1914": {
    F: 127
  },
  "1915": {
    F: 137
  },
  "1916": {
    F: 138
  },
  "1917": {
    F: 114
  },
  "1918": {
    F: 123
  },
  "1919": {
    F: 104
  },
  "1920": {
    F: 107
  },
  "1921": {
    F: 85
  },
  "1922": {
    F: 84
  },
  "1923": {
    F: 85
  },
  "1924": {
    F: 74
  },
  "1925": {
    F: 72
  },
  "1926": {
    F: 64
  },
  "1927": {
    F: 58
  },
  "1928": {
    F: 56
  },
  "1929": {
    F: 55
  },
  "1930": {
    F: 52
  },
  "1931": {
    F: 33
  },
  "1932": {
    F: 36
  },
  "1933": {
    F: 49
  },
  "1934": {
    F: 29
  },
  "1935": {
    F: 34
  },
  "1936": {
    F: 46
  },
  "1937": {
    F: 34
  },
  "1938": {
    F: 27
  },
  "1939": {
    F: 44
  },
  "1940": {
    F: 42
  },
  "1941": {
    F: 57
  },
  "1942": {
    F: 36
  },
  "1943": {
    F: 19
  },
  "1944": {
    F: 34
  },
  "1945": {
    F: 26
  },
  "1946": {
    F: 31
  },
  "1947": {
    F: 33
  },
  "1948": {
    F: 30
  },
  "1949": {
    F: 24
  },
  "1950": {
    F: 33
  },
  "1951": {
    F: 19
  },
  "1952": {
    F: 27
  },
  "1953": {
    F: 19
  },
  "1954": {
    F: 24
  },
  "1955": {
    F: 15
  },
  "1956": {
    F: 11
  },
  "1957": {
    F: 17
  },
  "1958": {
    F: 19
  },
  "1959": {
    F: 15
  },
  "1960": {
    F: 15
  },
  "1962": {
    F: 10
  },
  "1964": {
    F: 12
  },
  "1965": {
    F: 11
  },
  "1966": {
    F: 16
  },
  "1970": {
    F: 11
  },
  "1984": {
    F: 16
  },
  "2012": {
    F: 11
  },
  "2013": {
    F: 12
  },
  "2014": {
    F: 11
  },
  "2015": {
    F: 20
  },
  "2016": {
    F: 19
  },
  "2017": {
    F: 15
  },
  "2018": {
    F: 19
  },
  "2019": {
    F: 15
  },
  "2020": {
    F: 10
  },
  "2021": {
    F: 12
  }
};
const Edmond = {
  "1904": {
    M: 10
  }
};
const Edmund = {
  "1900": {
    M: 14
  },
  "1902": {
    M: 23
  },
  "1903": {
    M: 14
  },
  "1904": {
    M: 19
  },
  "1905": {
    M: 11
  },
  "1906": {
    M: 12
  },
  "1907": {
    M: 11
  },
  "1908": {
    M: 10
  },
  "1909": {
    M: 14
  },
  "1910": {
    M: 22
  },
  "1911": {
    M: 15
  },
  "1912": {
    M: 12
  },
  "1913": {
    M: 15
  },
  "1914": {
    M: 21
  },
  "1915": {
    M: 19
  },
  "1916": {
    M: 18
  },
  "1917": {
    M: 19
  },
  "1918": {
    M: 14
  },
  "1920": {
    M: 14
  },
  "1921": {
    M: 10
  },
  "1922": {
    M: 16
  },
  "1923": {
    M: 14
  },
  "1924": {
    M: 14
  },
  "1925": {
    M: 14
  },
  "1926": {
    M: 10
  },
  "1927": {
    M: 11
  },
  "1928": {
    M: 10
  },
  "1933": {
    M: 11
  },
  "1940": {
    M: 12
  },
  "1953": {
    M: 13
  },
  "1954": {
    M: 10
  }
};
const Edna = {
  "1900": {
    F: 44
  },
  "1901": {
    F: 66
  },
  "1902": {
    F: 73
  },
  "1903": {
    F: 112
  },
  "1904": {
    F: 114
  },
  "1905": {
    F: 131
  },
  "1906": {
    F: 153
  },
  "1907": {
    F: 205
  },
  "1908": {
    F: 207
  },
  "1909": {
    F: 245
  },
  "1910": {
    F: 205
  },
  "1911": {
    F: 191
  },
  "1912": {
    F: 212
  },
  "1913": {
    F: 208
  },
  "1914": {
    F: 201
  },
  "1915": {
    F: 203
  },
  "1916": {
    F: 203
  },
  "1917": {
    F: 195
  },
  "1918": {
    F: 168
  },
  "1919": {
    F: 131
  },
  "1920": {
    F: 170
  },
  "1921": {
    F: 148
  },
  "1922": {
    F: 160
  },
  "1923": {
    F: 127
  },
  "1924": {
    F: 129
  },
  "1925": {
    F: 110
  },
  "1926": {
    F: 88
  },
  "1927": {
    F: 80
  },
  "1928": {
    F: 86
  },
  "1929": {
    F: 70
  },
  "1930": {
    F: 69
  },
  "1931": {
    F: 64
  },
  "1932": {
    F: 54
  },
  "1933": {
    F: 41
  },
  "1934": {
    F: 50
  },
  "1935": {
    F: 37
  },
  "1936": {
    F: 31
  },
  "1937": {
    F: 45
  },
  "1938": {
    F: 21
  },
  "1939": {
    F: 20
  },
  "1940": {
    F: 28
  },
  "1941": {
    F: 31
  },
  "1942": {
    F: 17
  },
  "1943": {
    F: 26
  },
  "1944": {
    F: 13
  },
  "1945": {
    F: 19
  },
  "1946": {
    F: 19
  },
  "1947": {
    F: 17
  },
  "1948": {
    F: 19
  },
  "1949": {
    F: 13
  },
  "1952": {
    F: 11
  },
  "1953": {
    F: 16
  },
  "1954": {
    F: 11
  },
  "1955": {
    F: 11
  },
  "1957": {
    F: 10
  },
  "1959": {
    F: 10
  },
  "1961": {
    F: 11
  },
  "1965": {
    F: 10
  },
  "1984": {
    F: 15
  }
};
const Edward = {
  "1900": {
    M: 158
  },
  "1901": {
    M: 232
  },
  "1902": {
    M: 240
  },
  "1903": {
    M: 225
  },
  "1904": {
    M: 216
  },
  "1905": {
    M: 195
  },
  "1906": {
    M: 209
  },
  "1907": {
    M: 210
  },
  "1908": {
    M: 203
  },
  "1909": {
    M: 214
  },
  "1910": {
    M: 225
  },
  "1911": {
    M: 199
  },
  "1912": {
    M: 174
  },
  "1913": {
    M: 192
  },
  "1914": {
    M: 201
  },
  "1915": {
    M: 228
  },
  "1916": {
    M: 190
  },
  "1917": {
    M: 205
  },
  "1918": {
    M: 176
  },
  "1919": {
    M: 162
  },
  "1920": {
    M: 270
  },
  "1921": {
    M: 199
  },
  "1922": {
    M: 184
  },
  "1923": {
    M: 180
  },
  "1924": {
    M: 194
  },
  "1925": {
    M: 189
  },
  "1926": {
    M: 175
  },
  "1927": {
    M: 160
  },
  "1928": {
    M: 152
  },
  "1929": {
    M: 135
  },
  "1930": {
    M: 163
  },
  "1931": {
    M: 152
  },
  "1932": {
    M: 143
  },
  "1933": {
    M: 128
  },
  "1934": {
    M: 114
  },
  "1935": {
    M: 117
  },
  "1936": {
    M: 178
  },
  "1937": {
    M: 150
  },
  "1938": {
    M: 135
  },
  "1939": {
    M: 150
  },
  "1940": {
    M: 151
  },
  "1941": {
    M: 174
  },
  "1942": {
    M: 153
  },
  "1943": {
    M: 123
  },
  "1944": {
    M: 119
  },
  "1945": {
    M: 116
  },
  "1946": {
    M: 145
  },
  "1947": {
    M: 134
  },
  "1948": {
    M: 136
  },
  "1949": {
    M: 103
  },
  "1950": {
    M: 146
  },
  "1951": {
    M: 115
  },
  "1952": {
    M: 112
  },
  "1953": {
    M: 109
  },
  "1954": {
    M: 132
  },
  "1955": {
    M: 131
  },
  "1956": {
    M: 109
  },
  "1957": {
    M: 104
  },
  "1958": {
    M: 102
  },
  "1959": {
    M: 106
  },
  "1960": {
    M: 113
  },
  "1961": {
    M: 109
  },
  "1962": {
    M: 106
  },
  "1963": {
    M: 132
  },
  "1964": {
    M: 117
  },
  "1965": {
    M: 88
  },
  "1966": {
    M: 114
  },
  "1967": {
    M: 119
  },
  "1968": {
    M: 102
  },
  "1969": {
    M: 121
  },
  "1970": {
    M: 104
  },
  "1971": {
    M: 96
  },
  "1972": {
    M: 114
  },
  "1973": {
    M: 105
  },
  "1974": {
    M: 97
  },
  "1975": {
    M: 82
  },
  "1976": {
    M: 76
  },
  "1977": {
    M: 84
  },
  "1978": {
    M: 72
  },
  "1979": {
    M: 79
  },
  "1980": {
    M: 73
  },
  "1981": {
    M: 84
  },
  "1982": {
    M: 78
  },
  "1983": {
    M: 83
  },
  "1984": {
    M: 90
  },
  "1985": {
    M: 91
  },
  "1986": {
    M: 79
  },
  "1987": {
    M: 88
  },
  "1988": {
    M: 80
  },
  "1989": {
    M: 80
  },
  "1990": {
    M: 80
  },
  "1991": {
    M: 83
  },
  "1992": {
    M: 83
  },
  "1993": {
    M: 75
  },
  "1994": {
    M: 63
  },
  "1995": {
    M: 52
  },
  "1996": {
    M: 56
  },
  "1997": {
    M: 43
  },
  "1998": {
    M: 51
  },
  "1999": {
    M: 47
  },
  "2000": {
    M: 47
  },
  "2001": {
    M: 46
  },
  "2002": {
    M: 39
  },
  "2003": {
    M: 45
  },
  "2004": {
    M: 51
  },
  "2005": {
    M: 57
  },
  "2006": {
    M: 56
  },
  "2007": {
    M: 47
  },
  "2008": {
    M: 67
  },
  "2009": {
    M: 58
  },
  "2010": {
    M: 73
  },
  "2011": {
    M: 56
  },
  "2012": {
    M: 77
  },
  "2013": {
    M: 70
  },
  "2014": {
    M: 69
  },
  "2015": {
    M: 63
  },
  "2016": {
    M: 73
  },
  "2017": {
    M: 79
  },
  "2018": {
    M: 77
  },
  "2019": {
    M: 65
  },
  "2020": {
    M: 70
  },
  "2021": {
    M: 78
  }
};
const Edwin = {
  "1900": {
    M: 41
  },
  "1901": {
    M: 33
  },
  "1902": {
    M: 46
  },
  "1903": {
    M: 46
  },
  "1904": {
    M: 40
  },
  "1905": {
    M: 56
  },
  "1906": {
    M: 39
  },
  "1907": {
    M: 51
  },
  "1908": {
    M: 40
  },
  "1909": {
    M: 44
  },
  "1910": {
    M: 57
  },
  "1911": {
    M: 44
  },
  "1912": {
    M: 44
  },
  "1913": {
    M: 42
  },
  "1914": {
    M: 49
  },
  "1915": {
    M: 40
  },
  "1916": {
    M: 51
  },
  "1917": {
    M: 44
  },
  "1918": {
    M: 35
  },
  "1919": {
    M: 32
  },
  "1920": {
    M: 50
  },
  "1921": {
    M: 45
  },
  "1922": {
    M: 42
  },
  "1923": {
    M: 30
  },
  "1924": {
    M: 45
  },
  "1925": {
    M: 50
  },
  "1926": {
    M: 40
  },
  "1927": {
    M: 39
  },
  "1928": {
    M: 31
  },
  "1929": {
    M: 29
  },
  "1930": {
    M: 36
  },
  "1931": {
    M: 34
  },
  "1932": {
    M: 31
  },
  "1933": {
    M: 38
  },
  "1934": {
    M: 37
  },
  "1935": {
    M: 22
  },
  "1936": {
    M: 32
  },
  "1937": {
    M: 30
  },
  "1938": {
    M: 26
  },
  "1939": {
    M: 33
  },
  "1940": {
    M: 42
  },
  "1941": {
    M: 38
  },
  "1942": {
    M: 37
  },
  "1943": {
    M: 18
  },
  "1944": {
    M: 31
  },
  "1945": {
    M: 30
  },
  "1946": {
    M: 31
  },
  "1947": {
    M: 24
  },
  "1948": {
    M: 29
  },
  "1949": {
    M: 32
  },
  "1950": {
    M: 27
  },
  "1951": {
    M: 17
  },
  "1952": {
    M: 25
  },
  "1953": {
    M: 28
  },
  "1954": {
    M: 18
  },
  "1955": {
    M: 26
  },
  "1956": {
    M: 16
  },
  "1957": {
    M: 21
  },
  "1958": {
    M: 27
  },
  "1959": {
    M: 21
  },
  "1960": {
    M: 22
  },
  "1961": {
    M: 18
  },
  "1962": {
    M: 22
  },
  "1963": {
    M: 19
  },
  "1964": {
    M: 15
  },
  "1965": {
    M: 17
  },
  "1966": {
    M: 12
  },
  "1967": {
    M: 13
  },
  "1968": {
    M: 22
  },
  "1969": {
    M: 19
  },
  "1970": {
    M: 14
  },
  "1971": {
    M: 28
  },
  "1972": {
    M: 17
  },
  "1973": {
    M: 12
  },
  "1974": {
    M: 16
  },
  "1975": {
    M: 19
  },
  "1976": {
    M: 12
  },
  "1977": {
    M: 15
  },
  "1978": {
    M: 12
  },
  "1979": {
    M: 13
  },
  "1980": {
    M: 10
  },
  "1984": {
    M: 19
  },
  "1985": {
    M: 11
  },
  "1987": {
    M: 10
  },
  "1988": {
    M: 10
  },
  "1991": {
    M: 10
  },
  "1996": {
    M: 11
  },
  "2016": {
    M: 10
  },
  "2018": {
    M: 11
  },
  "2021": {
    M: 10
  }
};
const Edwina = {
  "1964": {
    F: 10
  },
  "1968": {
    F: 10
  },
  "1980": {
    F: 10
  }
};
const Effie = {
  "1900": {
    F: 10
  },
  "1902": {
    F: 13
  },
  "1905": {
    F: 21
  },
  "1906": {
    F: 11
  },
  "1908": {
    F: 10
  },
  "1909": {
    F: 10
  },
  "1915": {
    F: 12
  },
  "1921": {
    F: 10
  }
};
const Eileen = {
  "1900": {
    F: 132
  },
  "1901": {
    F: 159
  },
  "1902": {
    F: 175
  },
  "1903": {
    F: 148
  },
  "1904": {
    F: 196
  },
  "1905": {
    F: 208
  },
  "1906": {
    F: 217
  },
  "1907": {
    F: 249
  },
  "1908": {
    F: 216
  },
  "1909": {
    F: 207
  },
  "1910": {
    F: 196
  },
  "1911": {
    F: 221
  },
  "1912": {
    F: 231
  },
  "1913": {
    F: 199
  },
  "1914": {
    F: 237
  },
  "1915": {
    F: 194
  },
  "1916": {
    F: 230
  },
  "1917": {
    F: 209
  },
  "1918": {
    F: 184
  },
  "1919": {
    F: 166
  },
  "1920": {
    F: 235
  },
  "1921": {
    F: 181
  },
  "1922": {
    F: 196
  },
  "1923": {
    F: 181
  },
  "1924": {
    F: 161
  },
  "1925": {
    F: 187
  },
  "1926": {
    F: 157
  },
  "1927": {
    F: 159
  },
  "1928": {
    F: 122
  },
  "1929": {
    F: 141
  },
  "1930": {
    F: 125
  },
  "1931": {
    F: 116
  },
  "1932": {
    F: 111
  },
  "1933": {
    F: 94
  },
  "1934": {
    F: 88
  },
  "1935": {
    F: 71
  },
  "1936": {
    F: 90
  },
  "1937": {
    F: 79
  },
  "1938": {
    F: 76
  },
  "1939": {
    F: 71
  },
  "1940": {
    F: 86
  },
  "1941": {
    F: 72
  },
  "1942": {
    F: 81
  },
  "1943": {
    F: 71
  },
  "1944": {
    F: 56
  },
  "1945": {
    F: 65
  },
  "1946": {
    F: 73
  },
  "1947": {
    F: 57
  },
  "1948": {
    F: 68
  },
  "1949": {
    F: 56
  },
  "1950": {
    F: 48
  },
  "1951": {
    F: 54
  },
  "1952": {
    F: 74
  },
  "1953": {
    F: 58
  },
  "1954": {
    F: 47
  },
  "1955": {
    F: 49
  },
  "1956": {
    F: 54
  },
  "1957": {
    F: 38
  },
  "1958": {
    F: 48
  },
  "1959": {
    F: 39
  },
  "1960": {
    F: 39
  },
  "1961": {
    F: 41
  },
  "1962": {
    F: 41
  },
  "1963": {
    F: 41
  },
  "1964": {
    F: 24
  },
  "1965": {
    F: 33
  },
  "1966": {
    F: 31
  },
  "1967": {
    F: 31
  },
  "1968": {
    F: 27
  },
  "1969": {
    F: 31
  },
  "1970": {
    F: 21
  },
  "1971": {
    F: 15
  },
  "1972": {
    F: 22
  },
  "1973": {
    F: 23
  },
  "1975": {
    F: 14
  },
  "1976": {
    F: 12
  },
  "1977": {
    F: 17
  },
  "1978": {
    F: 11
  },
  "1979": {
    F: 13
  },
  "1981": {
    F: 10
  },
  "1982": {
    F: 13
  },
  "1983": {
    F: 11
  },
  "1984": {
    F: 17
  },
  "1987": {
    F: 16
  },
  "1989": {
    F: 10
  },
  "1994": {
    F: 11
  }
};
const Eilish = {
  "1993": {
    F: 10
  },
  "1995": {
    F: 26
  },
  "1996": {
    F: 52
  },
  "1997": {
    F: 26
  },
  "1998": {
    F: 12
  },
  "1999": {
    F: 11
  },
  "2001": {
    F: 10
  }
};
const Elaina = {
  "2021": {
    F: 14
  }
};
const Elaine = {
  "1907": {
    F: 11
  },
  "1911": {
    F: 10
  },
  "1914": {
    F: 10
  },
  "1915": {
    F: 10
  },
  "1916": {
    F: 10
  },
  "1917": {
    F: 11
  },
  "1918": {
    F: 10
  },
  "1919": {
    F: 14
  },
  "1920": {
    F: 19
  },
  "1921": {
    F: 17
  },
  "1922": {
    F: 35
  },
  "1923": {
    F: 31
  },
  "1924": {
    F: 36
  },
  "1925": {
    F: 36
  },
  "1926": {
    F: 43
  },
  "1927": {
    F: 41
  },
  "1928": {
    F: 61
  },
  "1929": {
    F: 45
  },
  "1930": {
    F: 64
  },
  "1931": {
    F: 72
  },
  "1932": {
    F: 71
  },
  "1933": {
    F: 80
  },
  "1934": {
    F: 66
  },
  "1935": {
    F: 77
  },
  "1936": {
    F: 103
  },
  "1937": {
    F: 120
  },
  "1938": {
    F: 127
  },
  "1939": {
    F: 132
  },
  "1940": {
    F: 144
  },
  "1941": {
    F: 180
  },
  "1942": {
    F: 155
  },
  "1943": {
    F: 137
  },
  "1944": {
    F: 119
  },
  "1945": {
    F: 132
  },
  "1946": {
    F: 127
  },
  "1947": {
    F: 130
  },
  "1948": {
    F: 121
  },
  "1949": {
    F: 112
  },
  "1950": {
    F: 88
  },
  "1951": {
    F: 91
  },
  "1952": {
    F: 90
  },
  "1953": {
    F: 92
  },
  "1954": {
    F: 89
  },
  "1955": {
    F: 83
  },
  "1956": {
    F: 63
  },
  "1957": {
    F: 75
  },
  "1958": {
    F: 72
  },
  "1959": {
    F: 49
  },
  "1960": {
    F: 58
  },
  "1961": {
    F: 52
  },
  "1962": {
    F: 45
  },
  "1963": {
    F: 43
  },
  "1964": {
    F: 58
  },
  "1965": {
    F: 40
  },
  "1966": {
    F: 38
  },
  "1967": {
    F: 37
  },
  "1968": {
    F: 30
  },
  "1969": {
    F: 35
  },
  "1970": {
    F: 19
  },
  "1971": {
    F: 23
  },
  "1972": {
    F: 15
  },
  "1973": {
    F: 16
  },
  "1975": {
    F: 19
  },
  "1976": {
    F: 15
  },
  "1977": {
    F: 16
  },
  "1978": {
    F: 14
  },
  "1979": {
    F: 10
  },
  "1981": {
    F: 16
  },
  "1983": {
    F: 10
  },
  "1984": {
    F: 11
  },
  "1987": {
    F: 15
  },
  "1989": {
    F: 10
  },
  "1990": {
    F: 17
  },
  "2013": {
    F: 10
  },
  "2015": {
    F: 11
  }
};
const Eleanor = {
  "1900": {
    F: 44
  },
  "1901": {
    F: 16
  },
  "1902": {
    F: 29
  },
  "1903": {
    F: 32
  },
  "1904": {
    F: 33
  },
  "1905": {
    F: 28
  },
  "1906": {
    F: 29
  },
  "1907": {
    F: 41
  },
  "1908": {
    F: 37
  },
  "1909": {
    F: 43
  },
  "1910": {
    F: 27
  },
  "1911": {
    F: 33
  },
  "1912": {
    F: 37
  },
  "1913": {
    F: 42
  },
  "1914": {
    F: 25
  },
  "1915": {
    F: 28
  },
  "1916": {
    F: 41
  },
  "1917": {
    F: 28
  },
  "1918": {
    F: 30
  },
  "1919": {
    F: 29
  },
  "1920": {
    F: 30
  },
  "1921": {
    F: 17
  },
  "1922": {
    F: 27
  },
  "1923": {
    F: 28
  },
  "1924": {
    F: 33
  },
  "1925": {
    F: 14
  },
  "1926": {
    F: 27
  },
  "1927": {
    F: 15
  },
  "1928": {
    F: 18
  },
  "1929": {
    F: 27
  },
  "1930": {
    F: 20
  },
  "1931": {
    F: 36
  },
  "1932": {
    F: 19
  },
  "1933": {
    F: 28
  },
  "1934": {
    F: 31
  },
  "1935": {
    F: 17
  },
  "1936": {
    F: 32
  },
  "1937": {
    F: 39
  },
  "1938": {
    F: 34
  },
  "1939": {
    F: 33
  },
  "1940": {
    F: 49
  },
  "1941": {
    F: 46
  },
  "1942": {
    F: 49
  },
  "1943": {
    F: 53
  },
  "1944": {
    F: 39
  },
  "1945": {
    F: 36
  },
  "1946": {
    F: 48
  },
  "1947": {
    F: 39
  },
  "1948": {
    F: 39
  },
  "1949": {
    F: 34
  },
  "1950": {
    F: 27
  },
  "1951": {
    F: 36
  },
  "1952": {
    F: 29
  },
  "1953": {
    F: 30
  },
  "1954": {
    F: 20
  },
  "1955": {
    F: 23
  },
  "1956": {
    F: 19
  },
  "1957": {
    F: 22
  },
  "1958": {
    F: 29
  },
  "1959": {
    F: 20
  },
  "1960": {
    F: 16
  },
  "1961": {
    F: 15
  },
  "1962": {
    F: 13
  },
  "1963": {
    F: 17
  },
  "1965": {
    F: 11
  },
  "1966": {
    F: 14
  },
  "1967": {
    F: 12
  },
  "1968": {
    F: 20
  },
  "1969": {
    F: 12
  },
  "1972": {
    F: 14
  },
  "1974": {
    F: 10
  },
  "1975": {
    F: 14
  },
  "1977": {
    F: 11
  },
  "1978": {
    F: 11
  },
  "1979": {
    F: 13
  },
  "1980": {
    F: 14
  },
  "1981": {
    F: 13
  },
  "1982": {
    F: 16
  },
  "1983": {
    F: 16
  },
  "1984": {
    F: 18
  },
  "1985": {
    F: 16
  },
  "1986": {
    F: 17
  },
  "1987": {
    F: 11
  },
  "1988": {
    F: 21
  },
  "1989": {
    F: 26
  },
  "1991": {
    F: 24
  },
  "1992": {
    F: 21
  },
  "1993": {
    F: 18
  },
  "1994": {
    F: 17
  },
  "1995": {
    F: 25
  },
  "1996": {
    F: 28
  },
  "1997": {
    F: 20
  },
  "1998": {
    F: 28
  },
  "1999": {
    F: 24
  },
  "2000": {
    F: 21
  },
  "2001": {
    F: 10
  },
  "2002": {
    F: 18
  },
  "2003": {
    F: 27
  },
  "2004": {
    F: 21
  },
  "2005": {
    F: 17
  },
  "2006": {
    F: 17
  },
  "2008": {
    F: 22
  },
  "2009": {
    F: 29
  },
  "2010": {
    F: 23
  },
  "2011": {
    F: 28
  },
  "2012": {
    F: 26
  },
  "2013": {
    F: 26
  },
  "2014": {
    F: 31
  },
  "2015": {
    F: 50
  },
  "2016": {
    F: 54
  },
  "2017": {
    F: 52
  },
  "2018": {
    F: 45
  },
  "2019": {
    F: 64
  },
  "2020": {
    F: 54
  },
  "2021": {
    F: 61
  }
};
const Elena = {
  "1988": {
    F: 12
  },
  "1990": {
    F: 10
  },
  "1997": {
    F: 12
  },
  "1999": {
    F: 11
  },
  "2001": {
    F: 11
  },
  "2002": {
    F: 12
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 14
  },
  "2006": {
    F: 11
  },
  "2007": {
    F: 11
  },
  "2009": {
    F: 14
  },
  "2010": {
    F: 20
  },
  "2011": {
    F: 16
  },
  "2012": {
    F: 23
  },
  "2013": {
    F: 22
  },
  "2014": {
    F: 21
  },
  "2015": {
    F: 18
  },
  "2016": {
    F: 30
  },
  "2017": {
    F: 29
  },
  "2018": {
    F: 22
  },
  "2019": {
    F: 31
  },
  "2020": {
    F: 29
  },
  "2021": {
    F: 37
  }
};
const Eli = {
  "1977": {
    M: 14
  },
  "1980": {
    M: 10
  },
  "1981": {
    M: 11
  },
  "1982": {
    M: 15
  },
  "1983": {
    M: 11
  },
  "1984": {
    M: 12
  },
  "1985": {
    M: 11
  },
  "1986": {
    M: 13
  },
  "1987": {
    M: 13
  },
  "1988": {
    M: 17
  },
  "1989": {
    M: 12
  },
  "1991": {
    M: 23
  },
  "1992": {
    M: 16
  },
  "1993": {
    M: 17
  },
  "1994": {
    M: 29
  },
  "1995": {
    M: 16
  },
  "1996": {
    M: 27
  },
  "1997": {
    M: 18
  },
  "1998": {
    M: 25
  },
  "1999": {
    M: 30
  },
  "2000": {
    M: 28
  },
  "2001": {
    M: 23
  },
  "2002": {
    M: 37
  },
  "2003": {
    M: 36
  },
  "2004": {
    M: 44
  },
  "2005": {
    M: 46
  },
  "2006": {
    M: 48
  },
  "2007": {
    M: 49
  },
  "2008": {
    M: 47
  },
  "2009": {
    M: 50
  },
  "2010": {
    M: 88
  },
  "2011": {
    M: 141
  },
  "2012": {
    M: 129
  },
  "2013": {
    M: 123
  },
  "2014": {
    M: 117
  },
  "2015": {
    M: 144
  },
  "2016": {
    M: 115
  },
  "2017": {
    M: 109
  },
  "2018": {
    M: 105
  },
  "2019": {
    M: 100
  },
  "2020": {
    M: 107
  },
  "2021": {
    M: 104
  }
};
const Eliana = {
  "2010": {
    F: 14
  },
  "2011": {
    F: 17
  },
  "2013": {
    F: 17
  },
  "2014": {
    F: 14
  },
  "2015": {
    F: 22
  },
  "2016": {
    F: 26
  },
  "2017": {
    F: 28
  },
  "2018": {
    F: 24
  },
  "2019": {
    F: 27
  },
  "2020": {
    F: 28
  },
  "2021": {
    F: 36
  }
};
const Elias = {
  "1992": {
    M: 10
  },
  "1993": {
    M: 10
  },
  "1999": {
    M: 12
  },
  "2003": {
    M: 11
  },
  "2004": {
    M: 10
  },
  "2005": {
    M: 12
  },
  "2006": {
    M: 18
  },
  "2007": {
    M: 11
  },
  "2008": {
    M: 15
  },
  "2009": {
    M: 22
  },
  "2010": {
    M: 26
  },
  "2011": {
    M: 21
  },
  "2012": {
    M: 19
  },
  "2013": {
    M: 29
  },
  "2014": {
    M: 29
  },
  "2015": {
    M: 30
  },
  "2016": {
    M: 21
  },
  "2017": {
    M: 36
  },
  "2018": {
    M: 33
  },
  "2019": {
    M: 38
  },
  "2020": {
    M: 45
  },
  "2021": {
    M: 36
  }
};
const Elijah = {
  "1988": {
    M: 16
  },
  "1989": {
    M: 11
  },
  "1991": {
    M: 19
  },
  "1992": {
    M: 18
  },
  "1993": {
    M: 22
  },
  "1994": {
    M: 29
  },
  "1995": {
    M: 33
  },
  "1996": {
    M: 39
  },
  "1997": {
    M: 55
  },
  "1998": {
    M: 49
  },
  "1999": {
    M: 51
  },
  "2000": {
    M: 69
  },
  "2001": {
    M: 68
  },
  "2002": {
    M: 86
  },
  "2003": {
    M: 104
  },
  "2004": {
    M: 85
  },
  "2005": {
    M: 79
  },
  "2006": {
    M: 76
  },
  "2007": {
    M: 98
  },
  "2008": {
    M: 100
  },
  "2009": {
    M: 82
  },
  "2010": {
    M: 99
  },
  "2011": {
    M: 151
  },
  "2012": {
    M: 160
  },
  "2013": {
    M: 157
  },
  "2014": {
    M: 158
  },
  "2015": {
    M: 175
  },
  "2016": {
    M: 147
  },
  "2017": {
    M: 159
  },
  "2018": {
    M: 162
  },
  "2019": {
    M: 157
  },
  "2020": {
    M: 170
  },
  "2021": {
    M: 171
  }
};
const Elina = {
  "2020": {
    F: 11
  },
  "2021": {
    F: 12
  }
};
const Elisabeth = {
  "1938": {
    F: 13
  },
  "1939": {
    F: 10
  },
  "1940": {
    F: 11
  },
  "1947": {
    F: 13
  },
  "1949": {
    F: 12
  },
  "1951": {
    F: 11
  },
  "1952": {
    F: 15
  },
  "1953": {
    F: 10
  },
  "1955": {
    F: 12
  },
  "1956": {
    F: 19
  },
  "1957": {
    F: 14
  },
  "1958": {
    F: 21
  },
  "1959": {
    F: 29
  },
  "1960": {
    F: 17
  },
  "1961": {
    F: 17
  },
  "1962": {
    F: 26
  },
  "1963": {
    F: 20
  },
  "1964": {
    F: 20
  },
  "1965": {
    F: 15
  },
  "1966": {
    F: 13
  },
  "1967": {
    F: 15
  },
  "1968": {
    F: 14
  },
  "1970": {
    F: 12
  },
  "1971": {
    F: 10
  },
  "1972": {
    F: 11
  },
  "1973": {
    F: 14
  },
  "1974": {
    F: 12
  },
  "1975": {
    F: 10
  },
  "1977": {
    F: 11
  },
  "1981": {
    F: 10
  },
  "1982": {
    F: 11
  },
  "1984": {
    F: 12
  },
  "1985": {
    F: 13
  },
  "1986": {
    F: 12
  },
  "1987": {
    F: 10
  },
  "1990": {
    F: 10
  }
};
const Elise = {
  "1985": {
    F: 18
  },
  "1986": {
    F: 22
  },
  "1987": {
    F: 25
  },
  "1988": {
    F: 22
  },
  "1989": {
    F: 21
  },
  "1990": {
    F: 18
  },
  "1991": {
    F: 20
  },
  "1992": {
    F: 18
  },
  "1993": {
    F: 21
  },
  "1994": {
    F: 29
  },
  "1995": {
    F: 20
  },
  "1996": {
    F: 17
  },
  "1997": {
    F: 19
  },
  "1998": {
    F: 20
  },
  "1999": {
    F: 17
  },
  "2000": {
    F: 15
  },
  "2001": {
    F: 23
  },
  "2002": {
    F: 25
  },
  "2003": {
    F: 24
  },
  "2004": {
    F: 27
  },
  "2005": {
    F: 27
  },
  "2006": {
    F: 29
  },
  "2007": {
    F: 29
  },
  "2008": {
    F: 32
  },
  "2009": {
    F: 30
  },
  "2010": {
    F: 30
  },
  "2011": {
    F: 48
  },
  "2012": {
    F: 42
  },
  "2013": {
    F: 37
  },
  "2014": {
    F: 38
  },
  "2015": {
    F: 43
  },
  "2016": {
    F: 35
  },
  "2017": {
    F: 28
  },
  "2018": {
    F: 21
  },
  "2019": {
    F: 19
  },
  "2020": {
    F: 25
  },
  "2021": {
    F: 24
  }
};
const Elisha = {
  "1989": {
    F: 10
  },
  "1995": {
    F: 11
  },
  "2005": {
    M: 11
  },
  "2011": {
    M: 10
  },
  "2012": {
    F: 10
  },
  "2016": {
    F: 11
  },
  "2017": {
    F: 13
  },
  "2019": {
    F: 15
  }
};
const Eliza = {
  "1900": {
    F: 28
  },
  "1901": {
    F: 19
  },
  "1902": {
    F: 21
  },
  "1903": {
    F: 15
  },
  "1904": {
    F: 22
  },
  "1905": {
    F: 17
  },
  "1906": {
    F: 14
  },
  "1907": {
    F: 23
  },
  "1908": {
    F: 19
  },
  "1909": {
    F: 18
  },
  "1910": {
    F: 15
  },
  "1912": {
    F: 16
  },
  "1915": {
    F: 15
  },
  "1921": {
    F: 10
  },
  "1922": {
    F: 10
  },
  "1969": {
    F: 10
  },
  "1982": {
    F: 10
  },
  "1987": {
    F: 12
  },
  "1990": {
    F: 11
  },
  "1995": {
    F: 13
  },
  "1996": {
    F: 13
  },
  "1997": {
    F: 17
  },
  "1998": {
    F: 18
  },
  "1999": {
    F: 23
  },
  "2002": {
    F: 19
  },
  "2003": {
    F: 20
  },
  "2004": {
    F: 18
  },
  "2005": {
    F: 19
  },
  "2006": {
    F: 14
  },
  "2007": {
    F: 27
  },
  "2008": {
    F: 32
  },
  "2009": {
    F: 28
  },
  "2010": {
    F: 26
  },
  "2011": {
    F: 30
  },
  "2012": {
    F: 25
  },
  "2013": {
    F: 24
  },
  "2014": {
    F: 21
  },
  "2015": {
    F: 19
  },
  "2016": {
    F: 29
  },
  "2017": {
    F: 37
  },
  "2018": {
    F: 46
  },
  "2019": {
    F: 38
  },
  "2020": {
    F: 44
  },
  "2021": {
    F: 55
  }
};
const Elizabeth = {
  "1900": {
    F: 186
  },
  "1901": {
    F: 198
  },
  "1902": {
    F: 195
  },
  "1903": {
    F: 173
  },
  "1904": {
    F: 186
  },
  "1905": {
    F: 194
  },
  "1906": {
    F: 173
  },
  "1907": {
    F: 206
  },
  "1908": {
    F: 177
  },
  "1909": {
    F: 184
  },
  "1910": {
    F: 194
  },
  "1911": {
    F: 176
  },
  "1912": {
    F: 178
  },
  "1913": {
    F: 183
  },
  "1914": {
    F: 183
  },
  "1915": {
    F: 165
  },
  "1916": {
    F: 198
  },
  "1917": {
    F: 149
  },
  "1918": {
    F: 156
  },
  "1919": {
    F: 127
  },
  "1920": {
    F: 178
  },
  "1921": {
    F: 164
  },
  "1922": {
    F: 152
  },
  "1923": {
    F: 141
  },
  "1924": {
    F: 173
  },
  "1925": {
    F: 151
  },
  "1926": {
    F: 182
  },
  "1927": {
    F: 230
  },
  "1928": {
    F: 245
  },
  "1929": {
    F: 206
  },
  "1930": {
    F: 220
  },
  "1931": {
    F: 222
  },
  "1932": {
    F: 204
  },
  "1933": {
    F: 221
  },
  "1934": {
    F: 216
  },
  "1935": {
    F: 175
  },
  "1936": {
    F: 212
  },
  "1937": {
    F: 256
  },
  "1938": {
    F: 208
  },
  "1939": {
    F: 239
  },
  "1940": {
    F: 282
  },
  "1941": {
    F: 314
  },
  "1942": {
    F: 290
  },
  "1943": {
    F: 219
  },
  "1944": {
    F: 266
  },
  "1945": {
    F: 334
  },
  "1946": {
    F: 387
  },
  "1947": {
    F: 416
  },
  "1948": {
    F: 353
  },
  "1949": {
    F: 382
  },
  "1950": {
    F: 387
  },
  "1951": {
    F: 413
  },
  "1952": {
    F: 446
  },
  "1953": {
    F: 374
  },
  "1954": {
    F: 420
  },
  "1955": {
    F: 362
  },
  "1956": {
    F: 394
  },
  "1957": {
    F: 371
  },
  "1958": {
    F: 398
  },
  "1959": {
    F: 380
  },
  "1960": {
    F: 401
  },
  "1961": {
    F: 363
  },
  "1962": {
    F: 358
  },
  "1963": {
    F: 287
  },
  "1964": {
    F: 330
  },
  "1965": {
    F: 293
  },
  "1966": {
    F: 275
  },
  "1967": {
    F: 257
  },
  "1968": {
    F: 239
  },
  "1969": {
    F: 244
  },
  "1970": {
    F: 196
  },
  "1971": {
    F: 208
  },
  "1972": {
    F: 192
  },
  "1973": {
    F: 181
  },
  "1974": {
    F: 202
  },
  "1975": {
    F: 183
  },
  "1976": {
    F: 200
  },
  "1977": {
    F: 185
  },
  "1978": {
    F: 182
  },
  "1979": {
    F: 187
  },
  "1980": {
    F: 185
  },
  "1981": {
    F: 166
  },
  "1982": {
    F: 198
  },
  "1983": {
    F: 173
  },
  "1984": {
    F: 212
  },
  "1985": {
    F: 175
  },
  "1986": {
    F: 183
  },
  "1987": {
    F: 177
  },
  "1988": {
    F: 173
  },
  "1989": {
    F: 192
  },
  "1990": {
    F: 178
  },
  "1991": {
    F: 163
  },
  "1992": {
    F: 150
  },
  "1993": {
    F: 130
  },
  "1994": {
    F: 122
  },
  "1995": {
    F: 117
  },
  "1996": {
    F: 116
  },
  "1997": {
    F: 102
  },
  "1998": {
    F: 82
  },
  "1999": {
    F: 93
  },
  "2000": {
    F: 82
  },
  "2001": {
    F: 76
  },
  "2002": {
    F: 95
  },
  "2003": {
    F: 89
  },
  "2004": {
    F: 87
  },
  "2005": {
    F: 94
  },
  "2006": {
    F: 84
  },
  "2007": {
    F: 77
  },
  "2008": {
    F: 94
  },
  "2009": {
    F: 100
  },
  "2010": {
    F: 88
  },
  "2011": {
    F: 89
  },
  "2012": {
    F: 74
  },
  "2013": {
    F: 88
  },
  "2014": {
    F: 84
  },
  "2015": {
    F: 94
  },
  "2016": {
    F: 62
  },
  "2017": {
    F: 51
  },
  "2018": {
    F: 59
  },
  "2019": {
    F: 68
  },
  "2020": {
    F: 53
  },
  "2021": {
    F: 62
  }
};
const Ella = {
  "1900": {
    F: 40
  },
  "1901": {
    F: 37
  },
  "1902": {
    F: 35
  },
  "1903": {
    F: 35
  },
  "1904": {
    F: 41
  },
  "1905": {
    F: 35
  },
  "1906": {
    F: 29
  },
  "1907": {
    F: 32
  },
  "1908": {
    F: 45
  },
  "1909": {
    F: 34
  },
  "1910": {
    F: 30
  },
  "1911": {
    F: 32
  },
  "1912": {
    F: 30
  },
  "1913": {
    F: 30
  },
  "1914": {
    F: 32
  },
  "1915": {
    F: 21
  },
  "1916": {
    F: 28
  },
  "1917": {
    F: 31
  },
  "1918": {
    F: 29
  },
  "1919": {
    F: 30
  },
  "1920": {
    F: 26
  },
  "1921": {
    F: 28
  },
  "1922": {
    F: 15
  },
  "1923": {
    F: 15
  },
  "1924": {
    F: 14
  },
  "1925": {
    F: 17
  },
  "1926": {
    F: 13
  },
  "1927": {
    F: 14
  },
  "1930": {
    F: 14
  },
  "1937": {
    F: 10
  },
  "1978": {
    F: 10
  },
  "1982": {
    F: 15
  },
  "1983": {
    F: 12
  },
  "1984": {
    F: 15
  },
  "1985": {
    F: 13
  },
  "1986": {
    F: 15
  },
  "1987": {
    F: 12
  },
  "1988": {
    F: 18
  },
  "1989": {
    F: 25
  },
  "1990": {
    F: 35
  },
  "1991": {
    F: 39
  },
  "1992": {
    F: 47
  },
  "1993": {
    F: 50
  },
  "1994": {
    F: 46
  },
  "1995": {
    F: 60
  },
  "1996": {
    F: 97
  },
  "1997": {
    F: 114
  },
  "1998": {
    F: 157
  },
  "1999": {
    F: 180
  },
  "2000": {
    F: 165
  },
  "2001": {
    F: 194
  },
  "2002": {
    F: 255
  },
  "2003": {
    F: 291
  },
  "2004": {
    F: 309
  },
  "2005": {
    F: 322
  },
  "2006": {
    F: 323
  },
  "2007": {
    F: 418
  },
  "2008": {
    F: 298
  },
  "2009": {
    F: 285
  },
  "2010": {
    F: 277
  },
  "2011": {
    F: 243
  },
  "2012": {
    F: 229
  },
  "2013": {
    F: 208
  },
  "2014": {
    F: 228
  },
  "2015": {
    F: 233
  },
  "2016": {
    F: 220
  },
  "2017": {
    F: 185
  },
  "2018": {
    F: 192
  },
  "2019": {
    F: 179
  },
  "2020": {
    F: 163
  },
  "2021": {
    F: 165
  }
};
const Elle = {
  "1990": {
    F: 12
  },
  "1991": {
    F: 16
  },
  "1992": {
    F: 22
  },
  "1993": {
    F: 11
  },
  "2000": {
    F: 10
  },
  "2004": {
    F: 13
  },
  "2005": {
    F: 10
  },
  "2006": {
    F: 13
  },
  "2007": {
    F: 14
  },
  "2008": {
    F: 10
  },
  "2010": {
    F: 14
  },
  "2013": {
    F: 10
  },
  "2015": {
    F: 14
  },
  "2016": {
    F: 10
  },
  "2019": {
    F: 13
  },
  "2020": {
    F: 10
  },
  "2021": {
    F: 14
  }
};
const Ellen = {
  "1900": {
    F: 135
  },
  "1901": {
    F: 140
  },
  "1902": {
    F: 130
  },
  "1903": {
    F: 131
  },
  "1904": {
    F: 140
  },
  "1905": {
    F: 146
  },
  "1906": {
    F: 116
  },
  "1907": {
    F: 146
  },
  "1908": {
    F: 109
  },
  "1909": {
    F: 167
  },
  "1910": {
    F: 147
  },
  "1911": {
    F: 135
  },
  "1912": {
    F: 119
  },
  "1913": {
    F: 148
  },
  "1914": {
    F: 114
  },
  "1915": {
    F: 127
  },
  "1916": {
    F: 124
  },
  "1917": {
    F: 129
  },
  "1918": {
    F: 84
  },
  "1919": {
    F: 79
  },
  "1920": {
    F: 83
  },
  "1921": {
    F: 91
  },
  "1922": {
    F: 79
  },
  "1923": {
    F: 82
  },
  "1924": {
    F: 57
  },
  "1925": {
    F: 64
  },
  "1926": {
    F: 77
  },
  "1927": {
    F: 62
  },
  "1928": {
    F: 63
  },
  "1929": {
    F: 55
  },
  "1930": {
    F: 47
  },
  "1931": {
    F: 40
  },
  "1932": {
    F: 48
  },
  "1933": {
    F: 35
  },
  "1934": {
    F: 37
  },
  "1935": {
    F: 39
  },
  "1936": {
    F: 38
  },
  "1937": {
    F: 35
  },
  "1938": {
    F: 36
  },
  "1939": {
    F: 33
  },
  "1940": {
    F: 37
  },
  "1941": {
    F: 50
  },
  "1942": {
    F: 28
  },
  "1943": {
    F: 35
  },
  "1944": {
    F: 32
  },
  "1945": {
    F: 41
  },
  "1946": {
    F: 35
  },
  "1947": {
    F: 37
  },
  "1948": {
    F: 38
  },
  "1949": {
    F: 24
  },
  "1950": {
    F: 34
  },
  "1951": {
    F: 33
  },
  "1952": {
    F: 33
  },
  "1953": {
    F: 30
  },
  "1954": {
    F: 34
  },
  "1955": {
    F: 26
  },
  "1956": {
    F: 36
  },
  "1957": {
    F: 34
  },
  "1958": {
    F: 34
  },
  "1959": {
    F: 32
  },
  "1960": {
    F: 36
  },
  "1961": {
    F: 25
  },
  "1962": {
    F: 30
  },
  "1963": {
    F: 27
  },
  "1964": {
    F: 26
  },
  "1965": {
    F: 19
  },
  "1966": {
    F: 19
  },
  "1967": {
    F: 17
  },
  "1968": {
    F: 16
  },
  "1969": {
    F: 15
  },
  "1970": {
    F: 19
  },
  "1971": {
    F: 27
  },
  "1972": {
    F: 16
  },
  "1973": {
    F: 10
  },
  "1974": {
    F: 14
  },
  "1975": {
    F: 13
  },
  "1976": {
    F: 14
  },
  "1977": {
    F: 16
  },
  "1978": {
    F: 16
  },
  "1979": {
    F: 14
  },
  "1980": {
    F: 15
  },
  "1981": {
    F: 22
  },
  "1982": {
    F: 19
  },
  "1983": {
    F: 23
  },
  "1984": {
    F: 33
  },
  "1985": {
    F: 19
  },
  "1986": {
    F: 18
  },
  "1987": {
    F: 24
  },
  "1988": {
    F: 31
  },
  "1989": {
    F: 28
  },
  "1990": {
    F: 34
  },
  "1991": {
    F: 63
  },
  "1992": {
    F: 48
  },
  "1993": {
    F: 34
  },
  "1994": {
    F: 39
  },
  "1995": {
    F: 43
  },
  "1996": {
    F: 61
  },
  "1997": {
    F: 35
  },
  "1998": {
    F: 31
  },
  "1999": {
    F: 20
  },
  "2000": {
    F: 25
  },
  "2001": {
    F: 13
  },
  "2002": {
    F: 17
  },
  "2003": {
    F: 18
  },
  "2004": {
    F: 16
  },
  "2005": {
    F: 10
  },
  "2007": {
    F: 10
  }
};
const Elliana = {
  "2020": {
    F: 12
  }
};
const Ellie = {
  "1991": {
    F: 13
  },
  "1992": {
    F: 19
  },
  "1993": {
    F: 12
  },
  "1994": {
    F: 15
  },
  "1995": {
    F: 27
  },
  "1996": {
    F: 14
  },
  "1997": {
    F: 25
  },
  "1998": {
    F: 13
  },
  "1999": {
    F: 22
  },
  "2000": {
    F: 29
  },
  "2001": {
    F: 21
  },
  "2002": {
    F: 23
  },
  "2003": {
    F: 30
  },
  "2004": {
    F: 27
  },
  "2005": {
    F: 37
  },
  "2006": {
    F: 35
  },
  "2007": {
    F: 37
  },
  "2008": {
    F: 33
  },
  "2009": {
    F: 40
  },
  "2010": {
    F: 41
  },
  "2011": {
    F: 49
  },
  "2012": {
    F: 57
  },
  "2013": {
    F: 51
  },
  "2014": {
    F: 65
  },
  "2015": {
    F: 92
  },
  "2016": {
    F: 69
  },
  "2017": {
    F: 66
  },
  "2018": {
    F: 69
  },
  "2019": {
    F: 85
  },
  "2020": {
    F: 83
  },
  "2021": {
    F: 99
  }
};
const Elliot = {
  "1966": {
    M: 12
  },
  "1972": {
    M: 10
  },
  "1978": {
    M: 13
  },
  "1979": {
    M: 11
  },
  "1980": {
    M: 11
  },
  "1981": {
    M: 15
  },
  "1983": {
    M: 18
  },
  "1984": {
    M: 24
  },
  "1985": {
    M: 23
  },
  "1986": {
    M: 26
  },
  "1987": {
    M: 27
  },
  "1988": {
    M: 22
  },
  "1989": {
    M: 29
  },
  "1990": {
    M: 34
  },
  "1991": {
    M: 26
  },
  "1992": {
    M: 48
  },
  "1993": {
    M: 41
  },
  "1994": {
    M: 30
  },
  "1995": {
    M: 54
  },
  "1996": {
    M: 35
  },
  "1997": {
    M: 27
  },
  "1998": {
    M: 25
  },
  "1999": {
    M: 24
  },
  "2000": {
    M: 29
  },
  "2001": {
    M: 21
  },
  "2002": {
    M: 21
  },
  "2003": {
    M: 20
  },
  "2004": {
    M: 25
  },
  "2005": {
    M: 18
  },
  "2006": {
    M: 32
  },
  "2007": {
    M: 20
  },
  "2008": {
    M: 29
  },
  "2009": {
    M: 27
  },
  "2010": {
    M: 24
  },
  "2011": {
    M: 29
  },
  "2012": {
    M: 28
  },
  "2013": {
    M: 30
  },
  "2014": {
    M: 40
  },
  "2015": {
    M: 39
  },
  "2016": {
    M: 43
  },
  "2017": {
    M: 41
  },
  "2018": {
    M: 47
  },
  "2019": {
    M: 49
  },
  "2020": {
    M: 36
  },
  "2021": {
    M: 48
  }
};
const Elliott = {
  "1990": {
    M: 10
  },
  "1991": {
    M: 12
  },
  "1992": {
    M: 10
  },
  "1993": {
    M: 18
  },
  "1994": {
    M: 15
  },
  "1995": {
    M: 12
  },
  "1996": {
    M: 14
  },
  "1997": {
    M: 15
  },
  "1998": {
    M: 12
  },
  "2004": {
    M: 16
  },
  "2005": {
    M: 12
  },
  "2006": {
    M: 14
  },
  "2007": {
    M: 12
  },
  "2009": {
    M: 17
  },
  "2011": {
    M: 13
  },
  "2013": {
    M: 16
  },
  "2014": {
    M: 16
  },
  "2015": {
    M: 29
  },
  "2016": {
    M: 17
  },
  "2017": {
    M: 19
  },
  "2018": {
    M: 13
  },
  "2019": {
    M: 26
  },
  "2020": {
    M: 15
  },
  "2021": {
    M: 18
  }
};
const Elma = {
  "1901": {
    F: 10
  },
  "1905": {
    F: 10
  },
  "1906": {
    F: 11
  },
  "1909": {
    F: 11
  },
  "1912": {
    F: 11
  },
  "1913": {
    F: 10
  },
  "1916": {
    F: 21
  },
  "1920": {
    F: 17
  },
  "1921": {
    F: 12
  },
  "1926": {
    F: 18
  },
  "1927": {
    F: 13
  }
};
const Elodie = {
  "2015": {
    F: 12
  },
  "2016": {
    F: 14
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 15
  },
  "2021": {
    F: 12
  }
};
const Eloise = {
  "1983": {
    F: 14
  },
  "1991": {
    F: 10
  },
  "1992": {
    F: 12
  },
  "1993": {
    F: 11
  },
  "1995": {
    F: 11
  },
  "1996": {
    F: 11
  },
  "1997": {
    F: 11
  },
  "1999": {
    F: 12
  },
  "2001": {
    F: 12
  },
  "2002": {
    F: 10
  },
  "2004": {
    F: 19
  },
  "2005": {
    F: 19
  },
  "2006": {
    F: 17
  },
  "2007": {
    F: 11
  },
  "2008": {
    F: 13
  },
  "2009": {
    F: 19
  },
  "2010": {
    F: 21
  },
  "2011": {
    F: 24
  },
  "2012": {
    F: 19
  },
  "2013": {
    F: 17
  },
  "2014": {
    F: 22
  },
  "2015": {
    F: 27
  },
  "2016": {
    F: 22
  },
  "2017": {
    F: 31
  },
  "2018": {
    F: 33
  },
  "2019": {
    F: 37
  },
  "2020": {
    F: 35
  },
  "2021": {
    F: 47
  }
};
const Elora = {
  "2018": {
    F: 10
  }
};
const Elsa = {
  "1913": {
    F: 10
  },
  "1916": {
    F: 12
  },
  "1917": {
    F: 12
  },
  "1925": {
    F: 10
  },
  "1931": {
    F: 10
  },
  "2012": {
    F: 10
  },
  "2013": {
    F: 17
  },
  "2014": {
    F: 24
  },
  "2015": {
    F: 19
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 10
  },
  "2018": {
    F: 11
  }
};
const Elsie = {
  "1900": {
    F: 166
  },
  "1901": {
    F: 188
  },
  "1902": {
    F: 176
  },
  "1903": {
    F: 191
  },
  "1904": {
    F: 165
  },
  "1905": {
    F: 180
  },
  "1906": {
    F: 184
  },
  "1907": {
    F: 173
  },
  "1908": {
    F: 157
  },
  "1909": {
    F: 190
  },
  "1910": {
    F: 143
  },
  "1911": {
    F: 164
  },
  "1912": {
    F: 172
  },
  "1913": {
    F: 144
  },
  "1914": {
    F: 158
  },
  "1915": {
    F: 149
  },
  "1916": {
    F: 158
  },
  "1917": {
    F: 140
  },
  "1918": {
    F: 120
  },
  "1919": {
    F: 107
  },
  "1920": {
    F: 128
  },
  "1921": {
    F: 109
  },
  "1922": {
    F: 136
  },
  "1923": {
    F: 79
  },
  "1924": {
    F: 96
  },
  "1925": {
    F: 96
  },
  "1926": {
    F: 81
  },
  "1927": {
    F: 73
  },
  "1928": {
    F: 66
  },
  "1929": {
    F: 74
  },
  "1930": {
    F: 53
  },
  "1931": {
    F: 49
  },
  "1932": {
    F: 47
  },
  "1933": {
    F: 38
  },
  "1934": {
    F: 32
  },
  "1935": {
    F: 41
  },
  "1936": {
    F: 34
  },
  "1937": {
    F: 24
  },
  "1938": {
    F: 19
  },
  "1939": {
    F: 28
  },
  "1940": {
    F: 24
  },
  "1941": {
    F: 30
  },
  "1942": {
    F: 29
  },
  "1943": {
    F: 17
  },
  "1944": {
    F: 18
  },
  "1945": {
    F: 13
  },
  "1946": {
    F: 16
  },
  "1947": {
    F: 17
  },
  "1948": {
    F: 16
  },
  "1950": {
    F: 12
  },
  "1952": {
    F: 10
  },
  "1954": {
    F: 10
  },
  "1956": {
    F: 11
  },
  "1963": {
    F: 11
  },
  "1972": {
    F: 10
  },
  "1983": {
    F: 13
  },
  "1984": {
    F: 13
  },
  "1999": {
    F: 10
  },
  "2003": {
    F: 10
  },
  "2005": {
    F: 11
  },
  "2006": {
    F: 18
  },
  "2007": {
    F: 12
  },
  "2008": {
    F: 13
  },
  "2009": {
    F: 17
  },
  "2010": {
    F: 22
  },
  "2011": {
    F: 33
  },
  "2012": {
    F: 33
  },
  "2013": {
    F: 35
  },
  "2014": {
    F: 37
  },
  "2015": {
    F: 51
  },
  "2016": {
    F: 46
  },
  "2017": {
    F: 34
  },
  "2018": {
    F: 43
  },
  "2019": {
    F: 50
  },
  "2020": {
    F: 51
  },
  "2021": {
    F: 64
  }
};
const Elton = {
  "1972": {
    M: 13
  },
  "1973": {
    M: 14
  },
  "1974": {
    M: 30
  },
  "1975": {
    M: 22
  },
  "1976": {
    M: 15
  }
};
const Elva = {
  "1905": {
    F: 11
  },
  "1906": {
    F: 11
  },
  "1908": {
    F: 17
  },
  "1909": {
    F: 17
  },
  "1910": {
    F: 12
  },
  "1911": {
    F: 18
  },
  "1912": {
    F: 17
  },
  "1913": {
    F: 26
  },
  "1914": {
    F: 15
  },
  "1915": {
    F: 19
  },
  "1916": {
    F: 29
  },
  "1917": {
    F: 21
  },
  "1918": {
    F: 20
  },
  "1919": {
    F: 27
  },
  "1920": {
    F: 25
  },
  "1921": {
    F: 32
  },
  "1922": {
    F: 33
  },
  "1923": {
    F: 29
  },
  "1924": {
    F: 41
  },
  "1925": {
    F: 34
  },
  "1926": {
    F: 51
  },
  "1927": {
    F: 34
  },
  "1928": {
    F: 30
  },
  "1929": {
    F: 35
  },
  "1930": {
    F: 26
  },
  "1931": {
    F: 22
  },
  "1932": {
    F: 20
  },
  "1933": {
    F: 12
  },
  "1934": {
    F: 23
  },
  "1935": {
    F: 19
  },
  "1936": {
    F: 11
  },
  "1937": {
    F: 19
  },
  "1938": {
    F: 17
  },
  "1939": {
    F: 17
  },
  "1940": {
    F: 14
  },
  "1941": {
    F: 15
  },
  "1942": {
    F: 13
  },
  "1943": {
    F: 12
  },
  "1946": {
    F: 12
  },
  "1953": {
    F: 10
  }
};
const Elyse = {
  "1985": {
    F: 11
  },
  "1986": {
    F: 21
  },
  "1987": {
    F: 33
  },
  "1988": {
    F: 35
  },
  "1989": {
    F: 24
  },
  "1990": {
    F: 19
  },
  "1991": {
    F: 13
  },
  "1992": {
    F: 11
  },
  "2004": {
    F: 11
  },
  "2011": {
    F: 11
  }
};
const Ember = {
  "2016": {
    F: 10
  },
  "2019": {
    F: 10
  },
  "2021": {
    F: 12
  }
};
const Emelia = {
  "2009": {
    F: 10
  },
  "2012": {
    F: 13
  },
  "2013": {
    F: 19
  },
  "2014": {
    F: 10
  },
  "2015": {
    F: 17
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 18
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 20
  },
  "2020": {
    F: 21
  },
  "2021": {
    F: 14
  }
};
const Emerson = {
  "2006": {
    F: 12
  },
  "2013": {
    F: 10,
    M: 16
  },
  "2014": {
    F: 16
  },
  "2015": {
    F: 12,
    M: 12
  },
  "2016": {
    F: 20,
    M: 20
  },
  "2017": {
    F: 15,
    M: 25
  },
  "2018": {
    M: 19,
    F: 11
  },
  "2019": {
    M: 16,
    F: 20
  },
  "2020": {
    M: 10,
    F: 17
  },
  "2021": {
    F: 17,
    M: 15
  }
};
const Emilia = {
  "1999": {
    F: 13
  },
  "2006": {
    F: 11
  },
  "2008": {
    F: 12
  },
  "2009": {
    F: 10
  },
  "2010": {
    F: 20
  },
  "2012": {
    F: 16
  },
  "2013": {
    F: 18
  },
  "2014": {
    F: 30
  },
  "2015": {
    F: 50
  },
  "2016": {
    F: 44
  },
  "2017": {
    F: 51
  },
  "2018": {
    F: 53
  },
  "2019": {
    F: 68
  },
  "2020": {
    F: 60
  },
  "2021": {
    F: 69
  }
};
const Emilie = {
  "2002": {
    F: 14
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 12
  },
  "2006": {
    F: 13
  },
  "2007": {
    F: 13
  },
  "2013": {
    F: 11
  },
  "2014": {
    F: 11
  },
  "2017": {
    F: 11
  }
};
const Emily = {
  "1900": {
    F: 52
  },
  "1901": {
    F: 76
  },
  "1902": {
    F: 72
  },
  "1903": {
    F: 84
  },
  "1904": {
    F: 79
  },
  "1905": {
    F: 66
  },
  "1906": {
    F: 81
  },
  "1907": {
    F: 65
  },
  "1908": {
    F: 70
  },
  "1909": {
    F: 64
  },
  "1910": {
    F: 57
  },
  "1911": {
    F: 66
  },
  "1912": {
    F: 58
  },
  "1913": {
    F: 46
  },
  "1914": {
    F: 55
  },
  "1915": {
    F: 62
  },
  "1916": {
    F: 45
  },
  "1917": {
    F: 46
  },
  "1918": {
    F: 46
  },
  "1919": {
    F: 26
  },
  "1920": {
    F: 46
  },
  "1921": {
    F: 37
  },
  "1922": {
    F: 32
  },
  "1923": {
    F: 30
  },
  "1924": {
    F: 25
  },
  "1925": {
    F: 19
  },
  "1926": {
    F: 20
  },
  "1927": {
    F: 16
  },
  "1928": {
    F: 22
  },
  "1930": {
    F: 12
  },
  "1931": {
    F: 12
  },
  "1934": {
    F: 14
  },
  "1936": {
    F: 10
  },
  "1940": {
    F: 18
  },
  "1942": {
    F: 12
  },
  "1946": {
    F: 12
  },
  "1948": {
    F: 11
  },
  "1950": {
    F: 12
  },
  "1951": {
    F: 13
  },
  "1956": {
    F: 16
  },
  "1957": {
    F: 15
  },
  "1958": {
    F: 15
  },
  "1961": {
    F: 11
  },
  "1963": {
    F: 13
  },
  "1966": {
    F: 13
  },
  "1967": {
    F: 21
  },
  "1968": {
    F: 20
  },
  "1969": {
    F: 16
  },
  "1970": {
    F: 25
  },
  "1971": {
    F: 30
  },
  "1972": {
    F: 41
  },
  "1973": {
    F: 24
  },
  "1974": {
    F: 59
  },
  "1975": {
    F: 59
  },
  "1976": {
    F: 78
  },
  "1977": {
    F: 65
  },
  "1978": {
    F: 67
  },
  "1979": {
    F: 71
  },
  "1980": {
    F: 63
  },
  "1981": {
    F: 73
  },
  "1982": {
    F: 73
  },
  "1983": {
    F: 97
  },
  "1984": {
    F: 82
  },
  "1985": {
    F: 104
  },
  "1986": {
    F: 111
  },
  "1987": {
    F: 123
  },
  "1988": {
    F: 113
  },
  "1989": {
    F: 125
  },
  "1990": {
    F: 170
  },
  "1991": {
    F: 152
  },
  "1992": {
    F: 208
  },
  "1993": {
    F: 191
  },
  "1994": {
    F: 186
  },
  "1995": {
    F: 231
  },
  "1996": {
    F: 194
  },
  "1997": {
    F: 215
  },
  "1998": {
    F: 204
  },
  "1999": {
    F: 239
  },
  "2000": {
    F: 258
  },
  "2001": {
    F: 237
  },
  "2002": {
    F: 256
  },
  "2003": {
    F: 290
  },
  "2004": {
    F: 284
  },
  "2005": {
    F: 239
  },
  "2006": {
    F: 277
  },
  "2007": {
    F: 261
  },
  "2008": {
    F: 247
  },
  "2009": {
    F: 269
  },
  "2010": {
    F: 234
  },
  "2011": {
    F: 230
  },
  "2012": {
    F: 290
  },
  "2013": {
    F: 282
  },
  "2014": {
    F: 241
  },
  "2015": {
    F: 247
  },
  "2016": {
    F: 203
  },
  "2017": {
    F: 190
  },
  "2018": {
    F: 186
  },
  "2019": {
    F: 174
  },
  "2020": {
    F: 148
  },
  "2021": {
    F: 153
  }
};
const Emma = {
  "1900": {
    F: 40
  },
  "1901": {
    F: 35
  },
  "1902": {
    F: 32
  },
  "1903": {
    F: 40
  },
  "1904": {
    F: 30
  },
  "1905": {
    F: 41
  },
  "1906": {
    F: 31
  },
  "1907": {
    F: 37
  },
  "1908": {
    F: 36
  },
  "1909": {
    F: 33
  },
  "1910": {
    F: 31
  },
  "1911": {
    F: 25
  },
  "1912": {
    F: 15
  },
  "1913": {
    F: 23
  },
  "1914": {
    F: 26
  },
  "1915": {
    F: 21
  },
  "1916": {
    F: 13
  },
  "1917": {
    F: 21
  },
  "1918": {
    F: 16
  },
  "1919": {
    F: 16
  },
  "1920": {
    F: 12
  },
  "1922": {
    F: 11
  },
  "1923": {
    F: 14
  },
  "1924": {
    F: 11
  },
  "1925": {
    F: 12
  },
  "1926": {
    F: 10
  },
  "1927": {
    F: 13
  },
  "1929": {
    F: 10
  },
  "1934": {
    F: 11
  },
  "1938": {
    F: 10
  },
  "1949": {
    F: 10
  },
  "1955": {
    F: 12
  },
  "1958": {
    F: 18
  },
  "1959": {
    F: 16
  },
  "1961": {
    F: 14
  },
  "1962": {
    F: 16
  },
  "1963": {
    F: 19
  },
  "1964": {
    F: 19
  },
  "1965": {
    F: 20
  },
  "1966": {
    F: 34
  },
  "1967": {
    F: 43
  },
  "1968": {
    F: 51
  },
  "1969": {
    F: 67
  },
  "1970": {
    F: 78
  },
  "1971": {
    F: 91
  },
  "1972": {
    F: 113
  },
  "1973": {
    F: 123
  },
  "1974": {
    F: 169
  },
  "1975": {
    F: 199
  },
  "1976": {
    F: 212
  },
  "1977": {
    F: 210
  },
  "1978": {
    F: 202
  },
  "1979": {
    F: 285
  },
  "1980": {
    F: 292
  },
  "1981": {
    F: 305
  },
  "1982": {
    F: 361
  },
  "1983": {
    F: 364
  },
  "1984": {
    F: 320
  },
  "1985": {
    F: 313
  },
  "1986": {
    F: 394
  },
  "1987": {
    F: 372
  },
  "1988": {
    F: 495
  },
  "1989": {
    F: 462
  },
  "1990": {
    F: 434
  },
  "1991": {
    F: 428
  },
  "1992": {
    F: 362
  },
  "1993": {
    F: 351
  },
  "1994": {
    F: 278
  },
  "1995": {
    F: 291
  },
  "1996": {
    F: 285
  },
  "1997": {
    F: 351
  },
  "1998": {
    F: 307
  },
  "1999": {
    F: 335
  },
  "2000": {
    F: 268
  },
  "2001": {
    F: 295
  },
  "2002": {
    F: 309
  },
  "2003": {
    F: 372
  },
  "2004": {
    F: 351
  },
  "2005": {
    F: 343
  },
  "2006": {
    F: 284
  },
  "2007": {
    F: 282
  },
  "2008": {
    F: 257
  },
  "2009": {
    F: 233
  },
  "2010": {
    F: 229
  },
  "2011": {
    F: 191
  },
  "2012": {
    F: 196
  },
  "2013": {
    F: 177
  },
  "2014": {
    F: 157
  },
  "2015": {
    F: 188
  },
  "2016": {
    F: 121
  },
  "2017": {
    F: 156
  },
  "2018": {
    F: 122
  },
  "2019": {
    F: 110
  },
  "2020": {
    F: 76
  },
  "2021": {
    F: 85
  }
};
const Emmanuel = {
  "1998": {
    M: 10
  },
  "2002": {
    M: 10
  },
  "2003": {
    M: 12
  },
  "2006": {
    M: 12
  },
  "2007": {
    M: 10
  },
  "2008": {
    M: 19
  },
  "2010": {
    M: 16
  },
  "2011": {
    M: 14
  },
  "2012": {
    M: 10
  },
  "2013": {
    M: 18
  },
  "2014": {
    M: 21
  },
  "2015": {
    M: 19
  },
  "2016": {
    M: 20
  },
  "2017": {
    M: 16
  },
  "2018": {
    M: 14
  },
  "2019": {
    M: 14
  },
  "2020": {
    M: 16
  },
  "2021": {
    M: 17
  }
};
const Emme = {
  "2019": {
    F: 10
  }
};
const Emmeline = {
  "2018": {
    F: 12
  },
  "2020": {
    F: 10
  }
};
const Emmerson = {
  "2019": {
    F: 14
  }
};
const Emmett = {
  "2011": {
    M: 13
  },
  "2014": {
    M: 15
  },
  "2015": {
    M: 21
  },
  "2016": {
    M: 28
  },
  "2017": {
    M: 25
  },
  "2018": {
    M: 26
  },
  "2019": {
    M: 19
  },
  "2020": {
    M: 32
  },
  "2021": {
    M: 23
  }
};
const Emmie = {
  "2019": {
    F: 14
  },
  "2021": {
    F: 10
  }
};
const Emmy = {
  "2021": {
    F: 10
  }
};
const Ena = {
  "1906": {
    F: 51
  },
  "1907": {
    F: 49
  },
  "1908": {
    F: 32
  },
  "1909": {
    F: 27
  },
  "1910": {
    F: 30
  },
  "1911": {
    F: 13
  },
  "1912": {
    F: 16
  },
  "1913": {
    F: 22
  },
  "1914": {
    F: 19
  },
  "1915": {
    F: 10
  },
  "1916": {
    F: 10
  },
  "1917": {
    F: 16
  },
  "1920": {
    F: 14
  },
  "1922": {
    F: 15
  },
  "1923": {
    F: 10
  },
  "1926": {
    F: 16
  }
};
const Enid = {
  "1900": {
    F: 12
  },
  "1901": {
    F: 22
  },
  "1902": {
    F: 18
  },
  "1903": {
    F: 13
  },
  "1904": {
    F: 14
  },
  "1905": {
    F: 20
  },
  "1906": {
    F: 29
  },
  "1907": {
    F: 23
  },
  "1908": {
    F: 23
  },
  "1909": {
    F: 15
  },
  "1910": {
    F: 25
  },
  "1911": {
    F: 31
  },
  "1912": {
    F: 28
  },
  "1913": {
    F: 26
  },
  "1914": {
    F: 40
  },
  "1915": {
    F: 38
  },
  "1916": {
    F: 44
  },
  "1917": {
    F: 41
  },
  "1918": {
    F: 45
  },
  "1919": {
    F: 34
  },
  "1920": {
    F: 57
  },
  "1921": {
    F: 47
  },
  "1922": {
    F: 42
  },
  "1923": {
    F: 30
  },
  "1924": {
    F: 47
  },
  "1925": {
    F: 41
  },
  "1926": {
    F: 48
  },
  "1927": {
    F: 36
  },
  "1928": {
    F: 23
  },
  "1929": {
    F: 23
  },
  "1930": {
    F: 24
  },
  "1931": {
    F: 20
  },
  "1932": {
    F: 19
  },
  "1933": {
    F: 23
  },
  "1934": {
    F: 20
  },
  "1935": {
    F: 10
  },
  "1936": {
    F: 16
  },
  "1937": {
    F: 10
  },
  "1938": {
    F: 13
  },
  "1939": {
    F: 13
  },
  "1940": {
    F: 11
  },
  "1941": {
    F: 11
  },
  "1943": {
    F: 10
  }
};
const Enoch = {
  "2016": {
    M: 10
  },
  "2017": {
    M: 10
  }
};
const Enzo = {
  "2007": {
    M: 13
  },
  "2008": {
    M: 12
  },
  "2011": {
    M: 16
  },
  "2012": {
    M: 13
  },
  "2014": {
    M: 13
  },
  "2015": {
    M: 16
  },
  "2016": {
    M: 18
  },
  "2017": {
    M: 24
  },
  "2018": {
    M: 20
  },
  "2019": {
    M: 25
  },
  "2020": {
    M: 32
  },
  "2021": {
    M: 30
  }
};
const Erana = {
  "1974": {
    F: 15
  },
  "1975": {
    F: 18
  },
  "1979": {
    F: 10
  },
  "1982": {
    F: 17
  },
  "1983": {
    F: 12
  },
  "1985": {
    F: 10
  },
  "1987": {
    F: 13
  },
  "1988": {
    F: 11
  },
  "1992": {
    F: 11
  },
  "1994": {
    F: 13
  },
  "2001": {
    F: 11
  }
};
const Erena = {
  "1977": {
    F: 12
  },
  "1984": {
    F: 10
  }
};
const Eric = {
  "1900": {
    M: 105
  },
  "1901": {
    M: 145
  },
  "1902": {
    M: 132
  },
  "1903": {
    M: 164
  },
  "1904": {
    M: 184
  },
  "1905": {
    M: 184
  },
  "1906": {
    M: 180
  },
  "1907": {
    M: 187
  },
  "1908": {
    M: 215
  },
  "1909": {
    M: 199
  },
  "1910": {
    M: 224
  },
  "1911": {
    M: 197
  },
  "1912": {
    M: 199
  },
  "1913": {
    M: 205
  },
  "1914": {
    M: 196
  },
  "1915": {
    M: 206
  },
  "1916": {
    M: 194
  },
  "1917": {
    M: 205
  },
  "1918": {
    M: 160
  },
  "1919": {
    M: 167
  },
  "1920": {
    M: 214
  },
  "1921": {
    M: 186
  },
  "1922": {
    M: 210
  },
  "1923": {
    M: 198
  },
  "1924": {
    M: 181
  },
  "1925": {
    M: 169
  },
  "1926": {
    M: 184
  },
  "1927": {
    M: 180
  },
  "1928": {
    M: 165
  },
  "1929": {
    M: 148
  },
  "1930": {
    M: 122
  },
  "1931": {
    M: 131
  },
  "1932": {
    M: 101
  },
  "1933": {
    M: 107
  },
  "1934": {
    M: 79
  },
  "1935": {
    M: 88
  },
  "1936": {
    M: 75
  },
  "1937": {
    M: 64
  },
  "1938": {
    M: 90
  },
  "1939": {
    M: 69
  },
  "1940": {
    M: 81
  },
  "1941": {
    M: 98
  },
  "1942": {
    M: 103
  },
  "1943": {
    M: 98
  },
  "1944": {
    M: 96
  },
  "1945": {
    M: 88
  },
  "1946": {
    M: 86
  },
  "1947": {
    M: 85
  },
  "1948": {
    M: 109
  },
  "1949": {
    M: 88
  },
  "1950": {
    M: 74
  },
  "1951": {
    M: 72
  },
  "1952": {
    M: 85
  },
  "1953": {
    M: 74
  },
  "1954": {
    M: 71
  },
  "1955": {
    M: 63
  },
  "1956": {
    M: 71
  },
  "1957": {
    M: 82
  },
  "1958": {
    M: 83
  },
  "1959": {
    M: 72
  },
  "1960": {
    M: 93
  },
  "1961": {
    M: 71
  },
  "1962": {
    M: 71
  },
  "1963": {
    M: 70
  },
  "1964": {
    M: 57
  },
  "1965": {
    M: 60
  },
  "1966": {
    M: 40
  },
  "1967": {
    M: 45
  },
  "1968": {
    M: 52
  },
  "1969": {
    M: 43
  },
  "1970": {
    M: 56
  },
  "1971": {
    M: 25
  },
  "1972": {
    M: 31
  },
  "1973": {
    M: 20
  },
  "1974": {
    M: 24
  },
  "1975": {
    M: 24
  },
  "1976": {
    M: 22
  },
  "1977": {
    M: 25
  },
  "1978": {
    M: 22
  },
  "1979": {
    M: 24
  },
  "1980": {
    M: 24
  },
  "1981": {
    M: 25
  },
  "1982": {
    M: 26
  },
  "1983": {
    M: 17
  },
  "1984": {
    M: 23
  },
  "1985": {
    M: 19
  },
  "1986": {
    M: 23
  },
  "1987": {
    M: 15
  },
  "1988": {
    M: 27
  },
  "1989": {
    M: 23
  },
  "1990": {
    M: 26
  },
  "1991": {
    M: 31
  },
  "1992": {
    M: 28
  },
  "1993": {
    M: 22
  },
  "1994": {
    M: 32
  },
  "1995": {
    M: 25
  },
  "1996": {
    M: 23
  },
  "1997": {
    M: 31
  },
  "1998": {
    M: 26
  },
  "1999": {
    M: 23
  },
  "2000": {
    M: 20
  },
  "2001": {
    M: 29
  },
  "2002": {
    M: 28
  },
  "2003": {
    M: 36
  },
  "2004": {
    M: 34
  },
  "2005": {
    M: 30
  },
  "2006": {
    M: 29
  },
  "2007": {
    M: 37
  },
  "2008": {
    M: 26
  },
  "2009": {
    M: 28
  },
  "2010": {
    M: 27
  },
  "2011": {
    M: 31
  },
  "2012": {
    M: 30
  },
  "2013": {
    M: 34
  },
  "2014": {
    M: 30
  },
  "2015": {
    M: 28
  },
  "2016": {
    M: 25
  },
  "2017": {
    M: 27
  },
  "2018": {
    M: 28
  },
  "2019": {
    M: 18
  },
  "2020": {
    M: 32
  },
  "2021": {
    M: 18
  }
};
const Erica = {
  "1928": {
    F: 10
  },
  "1931": {
    F: 10
  },
  "1941": {
    F: 12
  },
  "1942": {
    F: 13
  },
  "1944": {
    F: 16
  },
  "1947": {
    F: 14
  },
  "1948": {
    F: 14
  },
  "1950": {
    F: 16
  },
  "1951": {
    F: 11
  },
  "1952": {
    F: 15
  },
  "1953": {
    F: 12
  },
  "1954": {
    F: 14
  },
  "1955": {
    F: 12
  },
  "1956": {
    F: 11
  },
  "1957": {
    F: 18
  },
  "1958": {
    F: 15
  },
  "1959": {
    F: 15
  },
  "1960": {
    F: 20
  },
  "1961": {
    F: 23
  },
  "1963": {
    F: 25
  },
  "1964": {
    F: 24
  },
  "1965": {
    F: 15
  },
  "1966": {
    F: 18
  },
  "1967": {
    F: 13
  },
  "1968": {
    F: 16
  },
  "1969": {
    F: 19
  },
  "1970": {
    F: 27
  },
  "1971": {
    F: 14
  },
  "1972": {
    F: 17
  },
  "1973": {
    F: 23
  },
  "1974": {
    F: 20
  },
  "1975": {
    F: 19
  },
  "1976": {
    F: 21
  },
  "1977": {
    F: 11
  },
  "1978": {
    F: 14
  },
  "1979": {
    F: 44
  },
  "1980": {
    F: 34
  },
  "1981": {
    F: 28
  },
  "1982": {
    F: 31
  },
  "1983": {
    F: 32
  },
  "1984": {
    F: 25
  },
  "1985": {
    F: 30
  },
  "1986": {
    F: 19
  },
  "1987": {
    F: 13
  },
  "1988": {
    F: 25
  },
  "1989": {
    F: 28
  },
  "1990": {
    F: 22
  },
  "1991": {
    F: 21
  },
  "1992": {
    F: 32
  },
  "1993": {
    F: 19
  },
  "1994": {
    F: 30
  },
  "1995": {
    F: 28
  },
  "1996": {
    F: 30
  },
  "1997": {
    F: 19
  },
  "1998": {
    F: 20
  },
  "1999": {
    F: 32
  },
  "2000": {
    F: 22
  },
  "2001": {
    F: 11
  },
  "2002": {
    F: 13
  },
  "2005": {
    F: 16
  },
  "2006": {
    F: 17
  },
  "2007": {
    F: 13
  },
  "2008": {
    F: 15
  },
  "2009": {
    F: 12
  },
  "2010": {
    F: 14
  },
  "2012": {
    F: 14
  },
  "2015": {
    F: 13
  },
  "2020": {
    F: 11
  }
};
const Erika = {
  "1977": {
    F: 11
  },
  "1980": {
    F: 11
  },
  "1981": {
    F: 15
  },
  "1992": {
    F: 14
  },
  "1993": {
    F: 11
  },
  "1994": {
    F: 14
  },
  "1995": {
    F: 19
  },
  "1998": {
    F: 13
  },
  "1999": {
    F: 14
  },
  "2000": {
    F: 20
  },
  "2001": {
    F: 17
  },
  "2002": {
    F: 11
  },
  "2003": {
    F: 17
  },
  "2004": {
    F: 17
  },
  "2006": {
    F: 10
  },
  "2007": {
    F: 13
  },
  "2008": {
    F: 14
  },
  "2009": {
    F: 14
  }
};
const Erin = {
  "1939": {
    F: 11
  },
  "1940": {
    F: 11
  },
  "1941": {
    F: 11
  },
  "1942": {
    F: 13
  },
  "1944": {
    F: 11
  },
  "1945": {
    F: 16
  },
  "1946": {
    F: 21
  },
  "1947": {
    F: 33
  },
  "1948": {
    F: 27
  },
  "1949": {
    F: 19
  },
  "1950": {
    F: 25
  },
  "1951": {
    F: 21
  },
  "1952": {
    F: 25
  },
  "1953": {
    F: 20
  },
  "1954": {
    F: 18
  },
  "1955": {
    F: 18
  },
  "1956": {
    F: 22
  },
  "1957": {
    F: 25
  },
  "1958": {
    F: 30
  },
  "1959": {
    F: 30
  },
  "1960": {
    F: 37
  },
  "1961": {
    F: 48
  },
  "1962": {
    F: 29
  },
  "1963": {
    F: 30
  },
  "1964": {
    F: 45
  },
  "1965": {
    F: 36,
    M: 10
  },
  "1966": {
    F: 37,
    M: 16
  },
  "1967": {
    F: 37,
    M: 13
  },
  "1968": {
    F: 33
  },
  "1969": {
    F: 41
  },
  "1970": {
    F: 41
  },
  "1971": {
    F: 65,
    M: 11
  },
  "1972": {
    F: 44,
    M: 12
  },
  "1973": {
    F: 36
  },
  "1974": {
    F: 48
  },
  "1975": {
    F: 62
  },
  "1976": {
    F: 53
  },
  "1977": {
    F: 57
  },
  "1978": {
    F: 52
  },
  "1979": {
    F: 78
  },
  "1980": {
    F: 79
  },
  "1981": {
    F: 81
  },
  "1982": {
    F: 99
  },
  "1983": {
    F: 112
  },
  "1984": {
    F: 118
  },
  "1985": {
    F: 111
  },
  "1986": {
    F: 95
  },
  "1987": {
    F: 100
  },
  "1988": {
    F: 107
  },
  "1989": {
    F: 69
  },
  "1990": {
    F: 79
  },
  "1991": {
    F: 66
  },
  "1992": {
    F: 57
  },
  "1993": {
    F: 51
  },
  "1994": {
    F: 55
  },
  "1995": {
    F: 48
  },
  "1996": {
    F: 40
  },
  "1997": {
    F: 41
  },
  "1998": {
    F: 31
  },
  "1999": {
    F: 31
  },
  "2000": {
    F: 41
  },
  "2001": {
    F: 38
  },
  "2002": {
    F: 27
  },
  "2003": {
    F: 39
  },
  "2004": {
    F: 45
  },
  "2005": {
    F: 31
  },
  "2006": {
    F: 25
  },
  "2007": {
    F: 30
  },
  "2008": {
    F: 38
  },
  "2009": {
    F: 24
  },
  "2010": {
    F: 27
  },
  "2011": {
    F: 20
  },
  "2012": {
    F: 26
  },
  "2013": {
    F: 15
  },
  "2014": {
    F: 21
  },
  "2015": {
    F: 19
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 14
  },
  "2018": {
    F: 10
  }
};
const Erina = {
  "1941": {
    F: 13
  },
  "1961": {
    F: 10
  },
  "1974": {
    F: 11
  },
  "1975": {
    F: 14
  },
  "1976": {
    F: 10
  },
  "1977": {
    F: 10
  },
  "1981": {
    F: 11
  },
  "1982": {
    F: 10
  },
  "1983": {
    F: 11
  },
  "1990": {
    F: 15
  },
  "1995": {
    F: 11
  }
};
const Ernest = {
  "1900": {
    M: 152
  },
  "1901": {
    M: 159
  },
  "1902": {
    M: 123
  },
  "1903": {
    M: 158
  },
  "1904": {
    M: 150
  },
  "1905": {
    M: 135
  },
  "1906": {
    M: 164
  },
  "1907": {
    M: 174
  },
  "1908": {
    M: 187
  },
  "1909": {
    M: 184
  },
  "1910": {
    M: 177
  },
  "1911": {
    M: 161
  },
  "1912": {
    M: 162
  },
  "1913": {
    M: 155
  },
  "1914": {
    M: 161
  },
  "1915": {
    M: 154
  },
  "1916": {
    M: 178
  },
  "1917": {
    M: 172
  },
  "1918": {
    M: 142
  },
  "1919": {
    M: 117
  },
  "1920": {
    M: 139
  },
  "1921": {
    M: 141
  },
  "1922": {
    M: 119
  },
  "1923": {
    M: 110
  },
  "1924": {
    M: 105
  },
  "1925": {
    M: 83
  },
  "1926": {
    M: 107
  },
  "1927": {
    M: 97
  },
  "1928": {
    M: 88
  },
  "1929": {
    M: 66
  },
  "1930": {
    M: 78
  },
  "1931": {
    M: 58
  },
  "1932": {
    M: 66
  },
  "1933": {
    M: 51
  },
  "1934": {
    M: 46
  },
  "1935": {
    M: 62
  },
  "1936": {
    M: 38
  },
  "1937": {
    M: 52
  },
  "1938": {
    M: 50
  },
  "1939": {
    M: 42
  },
  "1940": {
    M: 48
  },
  "1941": {
    M: 53
  },
  "1942": {
    M: 47
  },
  "1943": {
    M: 53
  },
  "1944": {
    M: 41
  },
  "1945": {
    M: 43
  },
  "1946": {
    M: 35
  },
  "1947": {
    M: 39
  },
  "1948": {
    M: 42
  },
  "1949": {
    M: 38
  },
  "1950": {
    M: 31
  },
  "1951": {
    M: 26
  },
  "1952": {
    M: 29
  },
  "1953": {
    M: 19
  },
  "1954": {
    M: 22
  },
  "1955": {
    M: 29
  },
  "1956": {
    M: 27
  },
  "1957": {
    M: 21
  },
  "1958": {
    M: 17
  },
  "1959": {
    M: 21
  },
  "1960": {
    M: 18
  },
  "1961": {
    M: 14
  },
  "1962": {
    M: 19
  },
  "1963": {
    M: 23
  },
  "1964": {
    M: 17
  },
  "1965": {
    M: 15
  },
  "1967": {
    M: 10
  },
  "1970": {
    M: 13
  },
  "1972": {
    M: 18
  },
  "1984": {
    M: 12
  },
  "2020": {
    M: 10
  }
};
const Errol = {
  "1916": {
    M: 11
  },
  "1918": {
    M: 15
  },
  "1920": {
    M: 13
  },
  "1922": {
    M: 10
  },
  "1923": {
    M: 13
  },
  "1924": {
    M: 11
  },
  "1925": {
    M: 12
  },
  "1926": {
    M: 17
  },
  "1927": {
    M: 14
  },
  "1929": {
    M: 18
  },
  "1930": {
    M: 14
  },
  "1931": {
    M: 11
  },
  "1937": {
    M: 26
  },
  "1938": {
    M: 28
  },
  "1939": {
    M: 49
  },
  "1940": {
    M: 58
  },
  "1941": {
    M: 64
  },
  "1942": {
    M: 60
  },
  "1943": {
    M: 31
  },
  "1944": {
    M: 34
  },
  "1945": {
    M: 40
  },
  "1946": {
    M: 44
  },
  "1947": {
    M: 34
  },
  "1948": {
    M: 40
  },
  "1949": {
    M: 32
  },
  "1950": {
    M: 29
  },
  "1951": {
    M: 27
  },
  "1952": {
    M: 16
  },
  "1953": {
    M: 23
  },
  "1954": {
    M: 22
  },
  "1955": {
    M: 18
  },
  "1956": {
    M: 16
  },
  "1957": {
    M: 23
  },
  "1958": {
    M: 17
  },
  "1959": {
    M: 19
  },
  "1960": {
    M: 20
  },
  "1962": {
    M: 18
  },
  "1963": {
    M: 17
  },
  "1964": {
    M: 11
  },
  "1965": {
    M: 14
  },
  "1966": {
    M: 19
  },
  "1967": {
    M: 20
  },
  "1968": {
    M: 24
  },
  "1969": {
    M: 13
  },
  "1970": {
    M: 21
  },
  "1971": {
    M: 16
  }
};
const Eruera = {
  "1946": {
    M: 10
  },
  "1982": {
    M: 10
  },
  "1989": {
    M: 13
  },
  "1991": {
    M: 12
  },
  "1992": {
    M: 10
  },
  "1994": {
    M: 13
  },
  "1997": {
    M: 11
  },
  "2000": {
    M: 10
  },
  "2001": {
    M: 10
  },
  "2003": {
    M: 10
  },
  "2009": {
    M: 12
  }
};
const Eseta = {
  "1988": {
    F: 10
  }
};
const Esha = {
  "2009": {
    F: 11
  }
};
const Esma = {
  "1904": {
    F: 10
  },
  "1906": {
    F: 12
  },
  "1907": {
    F: 14
  },
  "1908": {
    F: 11
  },
  "1909": {
    F: 12
  },
  "1910": {
    F: 11
  },
  "1911": {
    F: 16
  },
  "1912": {
    F: 20
  },
  "1913": {
    F: 15
  },
  "1914": {
    F: 16
  },
  "1915": {
    F: 21
  },
  "1916": {
    F: 18
  },
  "1917": {
    F: 12
  },
  "1918": {
    F: 12
  },
  "1919": {
    F: 16
  },
  "1920": {
    F: 27
  },
  "1921": {
    F: 13
  },
  "1922": {
    F: 21
  },
  "1924": {
    F: 15
  },
  "1925": {
    F: 12
  },
  "1926": {
    F: 14
  },
  "1927": {
    F: 16
  },
  "1928": {
    F: 15
  },
  "1931": {
    F: 12
  }
};
const Esme = {
  "1907": {
    F: 14
  },
  "1908": {
    F: 10
  },
  "1910": {
    F: 13
  },
  "1911": {
    F: 10
  },
  "1912": {
    F: 12
  },
  "1913": {
    F: 17
  },
  "1914": {
    F: 15
  },
  "1915": {
    F: 11
  },
  "1916": {
    F: 20
  },
  "1917": {
    F: 14
  },
  "1918": {
    F: 12
  },
  "1919": {
    F: 12
  },
  "1920": {
    F: 17
  },
  "1921": {
    F: 26
  },
  "1922": {
    F: 21
  },
  "1923": {
    F: 14
  },
  "1924": {
    F: 23
  },
  "1925": {
    F: 21
  },
  "1926": {
    F: 18
  },
  "1927": {
    F: 14
  },
  "1928": {
    F: 15
  },
  "1929": {
    F: 18
  },
  "1930": {
    F: 15
  },
  "1931": {
    F: 12
  },
  "1933": {
    F: 11
  },
  "1935": {
    F: 12
  },
  "2011": {
    F: 10
  },
  "2012": {
    F: 19
  },
  "2013": {
    F: 12
  },
  "2014": {
    F: 16
  },
  "2015": {
    F: 23
  },
  "2016": {
    F: 36
  },
  "2017": {
    F: 28
  },
  "2018": {
    F: 29
  },
  "2019": {
    F: 25
  },
  "2020": {
    F: 22
  },
  "2021": {
    F: 34
  }
};
const Estella = {
  "2008": {
    F: 11
  }
};
const Estelle = {
  "1912": {
    F: 11
  },
  "1917": {
    F: 10
  },
  "1927": {
    F: 11
  },
  "1929": {
    F: 10
  },
  "1931": {
    F: 10
  },
  "1969": {
    F: 10
  },
  "1980": {
    F: 10
  },
  "1990": {
    F: 10
  },
  "1997": {
    F: 10
  },
  "1999": {
    F: 11
  },
  "2006": {
    F: 15
  },
  "2007": {
    F: 15
  },
  "2010": {
    F: 10
  },
  "2011": {
    F: 10
  },
  "2012": {
    F: 14
  },
  "2013": {
    F: 18
  },
  "2014": {
    F: 11
  },
  "2015": {
    F: 16
  },
  "2017": {
    F: 14
  },
  "2018": {
    F: 13
  },
  "2021": {
    F: 11
  }
};
const Esther = {
  "1900": {
    F: 32
  },
  "1901": {
    F: 28
  },
  "1902": {
    F: 31
  },
  "1903": {
    F: 32
  },
  "1904": {
    F: 39
  },
  "1905": {
    F: 39
  },
  "1906": {
    F: 27
  },
  "1907": {
    F: 33
  },
  "1908": {
    F: 35
  },
  "1909": {
    F: 28
  },
  "1910": {
    F: 29
  },
  "1911": {
    F: 33
  },
  "1912": {
    F: 31
  },
  "1913": {
    F: 34
  },
  "1914": {
    F: 38
  },
  "1915": {
    F: 33
  },
  "1916": {
    F: 31
  },
  "1917": {
    F: 26
  },
  "1918": {
    F: 27
  },
  "1919": {
    F: 30
  },
  "1920": {
    F: 33
  },
  "1921": {
    F: 28
  },
  "1922": {
    F: 33
  },
  "1923": {
    F: 21
  },
  "1924": {
    F: 26
  },
  "1925": {
    F: 17
  },
  "1926": {
    F: 13
  },
  "1927": {
    F: 24
  },
  "1928": {
    F: 27
  },
  "1929": {
    F: 16
  },
  "1930": {
    F: 17
  },
  "1931": {
    F: 21
  },
  "1932": {
    F: 18
  },
  "1933": {
    F: 12
  },
  "1934": {
    F: 13
  },
  "1935": {
    F: 14
  },
  "1936": {
    F: 13
  },
  "1937": {
    F: 16
  },
  "1938": {
    F: 14
  },
  "1939": {
    F: 11
  },
  "1942": {
    F: 10
  },
  "1943": {
    F: 13
  },
  "1944": {
    F: 11
  },
  "1945": {
    F: 15
  },
  "1946": {
    F: 19
  },
  "1947": {
    F: 12
  },
  "1948": {
    F: 18
  },
  "1949": {
    F: 11
  },
  "1950": {
    F: 18
  },
  "1951": {
    F: 14
  },
  "1953": {
    F: 15
  },
  "1954": {
    F: 16
  },
  "1955": {
    F: 17
  },
  "1956": {
    F: 12
  },
  "1957": {
    F: 19
  },
  "1958": {
    F: 12
  },
  "1959": {
    F: 14
  },
  "1960": {
    F: 16
  },
  "1961": {
    F: 19
  },
  "1962": {
    F: 19
  },
  "1963": {
    F: 28
  },
  "1964": {
    F: 20
  },
  "1965": {
    F: 24
  },
  "1966": {
    F: 19
  },
  "1967": {
    F: 11
  },
  "1968": {
    F: 14
  },
  "1969": {
    F: 20
  },
  "1970": {
    F: 14
  },
  "1971": {
    F: 14
  },
  "1972": {
    F: 22
  },
  "1973": {
    F: 19
  },
  "1974": {
    F: 12
  },
  "1975": {
    F: 17
  },
  "1976": {
    F: 23
  },
  "1977": {
    F: 28
  },
  "1978": {
    F: 30
  },
  "1979": {
    F: 21
  },
  "1980": {
    F: 32
  },
  "1981": {
    F: 31
  },
  "1982": {
    F: 23
  },
  "1983": {
    F: 39
  },
  "1984": {
    F: 45
  },
  "1985": {
    F: 34
  },
  "1986": {
    F: 33
  },
  "1987": {
    F: 34
  },
  "1988": {
    F: 42
  },
  "1989": {
    F: 36
  },
  "1990": {
    F: 32
  },
  "1991": {
    F: 29
  },
  "1992": {
    F: 37
  },
  "1993": {
    F: 32
  },
  "1994": {
    F: 43
  },
  "1995": {
    F: 26
  },
  "1996": {
    F: 36
  },
  "1997": {
    F: 30
  },
  "1998": {
    F: 32
  },
  "1999": {
    F: 22
  },
  "2000": {
    F: 26
  },
  "2001": {
    F: 19
  },
  "2002": {
    F: 29
  },
  "2003": {
    F: 17
  },
  "2004": {
    F: 34
  },
  "2005": {
    F: 33
  },
  "2006": {
    F: 29
  },
  "2007": {
    F: 28
  },
  "2008": {
    F: 31
  },
  "2009": {
    F: 42
  },
  "2010": {
    F: 36
  },
  "2011": {
    F: 38
  },
  "2012": {
    F: 42
  },
  "2013": {
    F: 45
  },
  "2014": {
    F: 34
  },
  "2015": {
    F: 44
  },
  "2016": {
    F: 43
  },
  "2017": {
    F: 40
  },
  "2018": {
    F: 35
  },
  "2019": {
    F: 43
  },
  "2020": {
    F: 42
  },
  "2021": {
    F: 43
  }
};
const Ethan = {
  "1989": {
    M: 49
  },
  "1990": {
    M: 132
  },
  "1991": {
    M: 215
  },
  "1992": {
    M: 249
  },
  "1993": {
    M: 234
  },
  "1994": {
    M: 177
  },
  "1995": {
    M: 180
  },
  "1996": {
    M: 173
  },
  "1997": {
    M: 185
  },
  "1998": {
    M: 218
  },
  "1999": {
    M: 231
  },
  "2000": {
    M: 302
  },
  "2001": {
    M: 290
  },
  "2002": {
    M: 351
  },
  "2003": {
    M: 338
  },
  "2004": {
    M: 354
  },
  "2005": {
    M: 301
  },
  "2006": {
    M: 260
  },
  "2007": {
    M: 299
  },
  "2008": {
    M: 250
  },
  "2009": {
    M: 246
  },
  "2010": {
    M: 259
  },
  "2011": {
    M: 217
  },
  "2012": {
    M: 253
  },
  "2013": {
    M: 207
  },
  "2014": {
    M: 211
  },
  "2015": {
    M: 183
  },
  "2016": {
    M: 171
  },
  "2017": {
    M: 148
  },
  "2018": {
    M: 189
  },
  "2019": {
    M: 162
  },
  "2020": {
    M: 124
  },
  "2021": {
    M: 124
  }
};
const Ethel = {
  "1900": {
    F: 127
  },
  "1901": {
    F: 128
  },
  "1902": {
    F: 141
  },
  "1903": {
    F: 161
  },
  "1904": {
    F: 161
  },
  "1905": {
    F: 150
  },
  "1906": {
    F: 155
  },
  "1907": {
    F: 144
  },
  "1908": {
    F: 162
  },
  "1909": {
    F: 155
  },
  "1910": {
    F: 155
  },
  "1911": {
    F: 146
  },
  "1912": {
    F: 146
  },
  "1913": {
    F: 161
  },
  "1914": {
    F: 120
  },
  "1915": {
    F: 126
  },
  "1916": {
    F: 101
  },
  "1917": {
    F: 114
  },
  "1918": {
    F: 112
  },
  "1919": {
    F: 94
  },
  "1920": {
    F: 91
  },
  "1921": {
    F: 95
  },
  "1922": {
    F: 91
  },
  "1923": {
    F: 60
  },
  "1924": {
    F: 57
  },
  "1925": {
    F: 60
  },
  "1926": {
    F: 47
  },
  "1927": {
    F: 53
  },
  "1928": {
    F: 30
  },
  "1929": {
    F: 48
  },
  "1930": {
    F: 33
  },
  "1931": {
    F: 32
  },
  "1932": {
    F: 32
  },
  "1933": {
    F: 28
  },
  "1934": {
    F: 22
  },
  "1935": {
    F: 24
  },
  "1936": {
    F: 32
  },
  "1937": {
    F: 20
  },
  "1938": {
    F: 25
  },
  "1939": {
    F: 27
  },
  "1940": {
    F: 26
  },
  "1941": {
    F: 20
  },
  "1942": {
    F: 16
  },
  "1943": {
    F: 10
  },
  "1945": {
    F: 14
  },
  "1946": {
    F: 15
  },
  "1947": {
    F: 10
  },
  "1951": {
    F: 13
  },
  "1984": {
    F: 19
  }
};
const Euan = {
  "1920": {
    M: 16
  },
  "1944": {
    M: 11
  },
  "1955": {
    M: 11
  },
  "1958": {
    M: 10
  },
  "1960": {
    M: 11
  },
  "1961": {
    M: 12
  },
  "1962": {
    M: 13
  },
  "1963": {
    M: 11
  },
  "1964": {
    M: 10
  },
  "1979": {
    M: 11
  },
  "1980": {
    M: 10
  },
  "1981": {
    M: 11
  },
  "1982": {
    M: 12
  },
  "2007": {
    M: 12
  }
};
const Eugene = {
  "1912": {
    M: 11
  },
  "1922": {
    M: 11
  },
  "1923": {
    M: 11
  },
  "1928": {
    M: 11
  },
  "1929": {
    M: 13
  },
  "1945": {
    M: 12
  },
  "1958": {
    M: 12
  },
  "1960": {
    M: 11
  },
  "1961": {
    M: 12
  },
  "1962": {
    M: 18
  },
  "1963": {
    M: 18
  },
  "1964": {
    M: 13
  },
  "1965": {
    M: 18
  },
  "1966": {
    M: 34
  },
  "1967": {
    M: 38
  },
  "1968": {
    M: 27
  },
  "1969": {
    M: 40
  },
  "1970": {
    M: 27
  },
  "1971": {
    M: 36
  },
  "1972": {
    M: 38
  },
  "1973": {
    M: 30
  },
  "1974": {
    M: 45
  },
  "1975": {
    M: 23
  },
  "1976": {
    M: 22
  },
  "1977": {
    M: 19
  },
  "1978": {
    M: 27
  },
  "1979": {
    M: 24
  },
  "1980": {
    M: 21
  },
  "1981": {
    M: 16
  },
  "1982": {
    M: 17
  },
  "1983": {
    M: 16
  },
  "1984": {
    M: 13
  },
  "1985": {
    M: 16
  },
  "1986": {
    M: 25
  },
  "1987": {
    M: 15
  },
  "1988": {
    M: 17
  },
  "1989": {
    M: 12
  },
  "1990": {
    M: 12
  },
  "1991": {
    M: 16
  },
  "1992": {
    M: 10
  },
  "1993": {
    M: 12
  },
  "1994": {
    M: 12
  },
  "1997": {
    M: 15
  },
  "1998": {
    M: 10
  },
  "2002": {
    M: 11
  }
};
const Eunice = {
  "1901": {
    F: 14
  },
  "1902": {
    F: 18
  },
  "1903": {
    F: 24
  },
  "1904": {
    F: 16
  },
  "1905": {
    F: 20
  },
  "1906": {
    F: 21
  },
  "1907": {
    F: 36
  },
  "1908": {
    F: 25
  },
  "1909": {
    F: 22
  },
  "1910": {
    F: 38
  },
  "1911": {
    F: 42
  },
  "1912": {
    F: 34
  },
  "1913": {
    F: 53
  },
  "1914": {
    F: 45
  },
  "1915": {
    F: 46
  },
  "1916": {
    F: 51
  },
  "1917": {
    F: 41
  },
  "1918": {
    F: 36
  },
  "1919": {
    F: 53
  },
  "1920": {
    F: 43
  },
  "1921": {
    F: 37
  },
  "1922": {
    F: 38
  },
  "1923": {
    F: 49
  },
  "1924": {
    F: 45
  },
  "1925": {
    F: 38
  },
  "1926": {
    F: 45
  },
  "1927": {
    F: 42
  },
  "1928": {
    F: 42
  },
  "1929": {
    F: 40
  },
  "1930": {
    F: 33
  },
  "1931": {
    F: 30
  },
  "1932": {
    F: 23
  },
  "1933": {
    F: 29
  },
  "1934": {
    F: 29
  },
  "1935": {
    F: 18
  },
  "1936": {
    F: 21
  },
  "1937": {
    F: 21
  },
  "1938": {
    F: 25
  },
  "1939": {
    F: 23
  },
  "1940": {
    F: 23
  },
  "1941": {
    F: 19
  },
  "1942": {
    F: 12
  },
  "1943": {
    F: 15
  },
  "1944": {
    F: 12
  },
  "1945": {
    F: 14
  },
  "1946": {
    F: 13
  },
  "1947": {
    F: 15
  },
  "1948": {
    F: 16
  },
  "1949": {
    F: 10
  },
  "1950": {
    F: 10
  },
  "1960": {
    F: 10
  }
};
const Euphemia = {
  "1901": {
    F: 10
  },
  "1905": {
    F: 13
  },
  "1907": {
    F: 12
  },
  "1908": {
    F: 13
  },
  "1909": {
    F: 10
  }
};
const Eva = {
  "1900": {
    F: 96
  },
  "1901": {
    F: 72
  },
  "1902": {
    F: 78
  },
  "1903": {
    F: 83
  },
  "1904": {
    F: 68
  },
  "1905": {
    F: 74
  },
  "1906": {
    F: 87
  },
  "1907": {
    F: 84
  },
  "1908": {
    F: 91
  },
  "1909": {
    F: 78
  },
  "1910": {
    F: 78
  },
  "1911": {
    F: 72
  },
  "1912": {
    F: 85
  },
  "1913": {
    F: 62
  },
  "1914": {
    F: 76
  },
  "1915": {
    F: 76
  },
  "1916": {
    F: 61
  },
  "1917": {
    F: 61
  },
  "1918": {
    F: 39
  },
  "1919": {
    F: 39
  },
  "1920": {
    F: 50
  },
  "1921": {
    F: 38
  },
  "1922": {
    F: 41
  },
  "1923": {
    F: 47
  },
  "1924": {
    F: 38
  },
  "1925": {
    F: 34
  },
  "1926": {
    F: 31
  },
  "1927": {
    F: 32
  },
  "1928": {
    F: 29
  },
  "1929": {
    F: 26
  },
  "1930": {
    F: 24
  },
  "1931": {
    F: 23
  },
  "1932": {
    F: 19
  },
  "1933": {
    F: 16
  },
  "1934": {
    F: 12
  },
  "1935": {
    F: 16
  },
  "1936": {
    F: 17
  },
  "1937": {
    F: 10
  },
  "1938": {
    F: 15
  },
  "1939": {
    F: 11
  },
  "1940": {
    F: 10
  },
  "1941": {
    F: 16
  },
  "1942": {
    F: 12
  },
  "1943": {
    F: 14
  },
  "1945": {
    F: 13
  },
  "1946": {
    F: 11
  },
  "1947": {
    F: 10
  },
  "1951": {
    F: 12
  },
  "1952": {
    F: 11
  },
  "1955": {
    F: 12
  },
  "1956": {
    F: 14
  },
  "1957": {
    F: 12
  },
  "1958": {
    F: 13
  },
  "1959": {
    F: 12
  },
  "1960": {
    F: 11
  },
  "1963": {
    F: 14
  },
  "1971": {
    F: 10
  },
  "1972": {
    F: 13
  },
  "1975": {
    F: 14
  },
  "1977": {
    F: 12
  },
  "1980": {
    F: 14
  },
  "1981": {
    F: 15
  },
  "1982": {
    F: 12
  },
  "1983": {
    F: 14
  },
  "1984": {
    F: 12
  },
  "1985": {
    F: 16
  },
  "1988": {
    F: 13
  },
  "1989": {
    F: 12
  },
  "1990": {
    F: 10
  },
  "1991": {
    F: 12
  },
  "1992": {
    F: 11
  },
  "1994": {
    F: 15
  },
  "1995": {
    F: 11
  },
  "1997": {
    F: 10
  },
  "1998": {
    F: 37
  },
  "1999": {
    F: 38
  },
  "2000": {
    F: 31
  },
  "2001": {
    F: 41
  },
  "2002": {
    F: 48
  },
  "2003": {
    F: 54
  },
  "2004": {
    F: 59
  },
  "2005": {
    F: 64
  },
  "2006": {
    F: 102
  },
  "2007": {
    F: 101
  },
  "2008": {
    F: 99
  },
  "2009": {
    F: 101
  },
  "2010": {
    F: 144
  },
  "2011": {
    F: 123
  },
  "2012": {
    F: 160
  },
  "2013": {
    F: 109
  },
  "2014": {
    F: 120
  },
  "2015": {
    F: 122
  },
  "2016": {
    F: 127
  },
  "2017": {
    F: 117
  },
  "2018": {
    F: 92
  },
  "2019": {
    F: 84
  },
  "2020": {
    F: 62
  },
  "2021": {
    F: 66
  }
};
const Evan = {
  "1912": {
    M: 13
  },
  "1914": {
    M: 10
  },
  "1917": {
    M: 12
  },
  "1921": {
    M: 14
  },
  "1923": {
    M: 12
  },
  "1924": {
    M: 14
  },
  "1925": {
    M: 12
  },
  "1927": {
    M: 10
  },
  "1928": {
    M: 10
  },
  "1929": {
    M: 14
  },
  "1930": {
    M: 14
  },
  "1931": {
    M: 11
  },
  "1932": {
    M: 12
  },
  "1933": {
    M: 10
  },
  "1934": {
    M: 15
  },
  "1935": {
    M: 15
  },
  "1936": {
    M: 13
  },
  "1937": {
    M: 10
  },
  "1939": {
    M: 13
  },
  "1940": {
    M: 16
  },
  "1941": {
    M: 20
  },
  "1942": {
    M: 25
  },
  "1943": {
    M: 24
  },
  "1944": {
    M: 19
  },
  "1945": {
    M: 25
  },
  "1946": {
    M: 26
  },
  "1947": {
    M: 32
  },
  "1948": {
    M: 32
  },
  "1949": {
    M: 31
  },
  "1950": {
    M: 30
  },
  "1951": {
    M: 38
  },
  "1952": {
    M: 32
  },
  "1953": {
    M: 32
  },
  "1954": {
    M: 35
  },
  "1955": {
    M: 28
  },
  "1956": {
    M: 20
  },
  "1957": {
    M: 20
  },
  "1958": {
    M: 26
  },
  "1959": {
    M: 29
  },
  "1960": {
    M: 37
  },
  "1961": {
    M: 41
  },
  "1962": {
    M: 37
  },
  "1963": {
    M: 32
  },
  "1964": {
    M: 34
  },
  "1965": {
    M: 38
  },
  "1966": {
    M: 40
  },
  "1967": {
    M: 33
  },
  "1968": {
    M: 32
  },
  "1969": {
    M: 30
  },
  "1970": {
    M: 31
  },
  "1971": {
    M: 40
  },
  "1972": {
    M: 30
  },
  "1973": {
    M: 36
  },
  "1974": {
    M: 18
  },
  "1975": {
    M: 35
  },
  "1976": {
    M: 30
  },
  "1977": {
    M: 22
  },
  "1978": {
    M: 22
  },
  "1979": {
    M: 31
  },
  "1980": {
    M: 16
  },
  "1981": {
    M: 23
  },
  "1982": {
    M: 23
  },
  "1983": {
    M: 12
  },
  "1984": {
    M: 18
  },
  "1985": {
    M: 43
  },
  "1986": {
    M: 37
  },
  "1987": {
    M: 38
  },
  "1988": {
    M: 29
  },
  "1989": {
    M: 31
  },
  "1990": {
    M: 24
  },
  "1991": {
    M: 13
  },
  "1992": {
    M: 24
  },
  "1993": {
    M: 17
  },
  "1994": {
    M: 22
  },
  "1995": {
    M: 15
  },
  "1996": {
    M: 17
  },
  "1997": {
    M: 11
  },
  "1998": {
    M: 13
  },
  "1999": {
    M: 11
  },
  "2003": {
    M: 18
  },
  "2004": {
    M: 17
  },
  "2005": {
    M: 18
  },
  "2006": {
    M: 13
  },
  "2007": {
    M: 22
  },
  "2008": {
    M: 18
  },
  "2009": {
    M: 25
  },
  "2010": {
    M: 39
  },
  "2011": {
    M: 22
  },
  "2012": {
    M: 28
  },
  "2013": {
    M: 28
  },
  "2014": {
    M: 29
  },
  "2015": {
    M: 38
  },
  "2016": {
    M: 42
  },
  "2017": {
    M: 28
  },
  "2018": {
    M: 20
  },
  "2019": {
    M: 31
  },
  "2020": {
    M: 29
  },
  "2021": {
    M: 20
  }
};
const Evander = {
  "1997": {
    M: 15
  }
};
const Evangeline = {
  "1994": {
    F: 11
  },
  "1995": {
    F: 10
  },
  "2007": {
    F: 12
  },
  "2008": {
    F: 13
  },
  "2009": {
    F: 13
  },
  "2010": {
    F: 10
  },
  "2011": {
    F: 12
  },
  "2012": {
    F: 15
  },
  "2013": {
    F: 15
  },
  "2014": {
    F: 24
  },
  "2015": {
    F: 16
  },
  "2016": {
    F: 15
  },
  "2017": {
    F: 10
  },
  "2018": {
    F: 13
  },
  "2019": {
    F: 10
  }
};
const Eve = {
  "1978": {
    F: 14
  },
  "1981": {
    F: 10
  },
  "1982": {
    F: 18
  },
  "1983": {
    F: 11
  },
  "1984": {
    F: 10
  },
  "1985": {
    F: 13
  },
  "1986": {
    F: 14
  },
  "1989": {
    F: 14
  },
  "1991": {
    F: 11
  },
  "1992": {
    F: 13
  },
  "1993": {
    F: 11
  },
  "1994": {
    F: 15
  },
  "1998": {
    F: 10
  },
  "1999": {
    F: 13
  },
  "2000": {
    F: 12
  },
  "2001": {
    F: 28
  },
  "2002": {
    F: 24
  },
  "2003": {
    F: 14
  },
  "2004": {
    F: 28
  },
  "2005": {
    F: 35
  },
  "2006": {
    F: 18
  },
  "2007": {
    F: 25
  },
  "2008": {
    F: 26
  },
  "2009": {
    F: 36
  },
  "2010": {
    F: 35
  },
  "2011": {
    F: 29
  },
  "2012": {
    F: 30
  },
  "2013": {
    F: 25
  },
  "2014": {
    F: 25
  },
  "2015": {
    F: 29
  },
  "2016": {
    F: 27
  },
  "2017": {
    F: 26
  },
  "2018": {
    F: 25
  },
  "2019": {
    F: 29
  },
  "2020": {
    F: 18
  },
  "2021": {
    F: 25
  }
};
const Eveline = {
  "1900": {
    F: 28
  },
  "1901": {
    F: 16
  },
  "1902": {
    F: 19
  },
  "1903": {
    F: 17
  },
  "1904": {
    F: 18
  },
  "1905": {
    F: 10
  },
  "1906": {
    F: 18
  },
  "1907": {
    F: 26
  },
  "1908": {
    F: 11
  },
  "1909": {
    F: 12
  },
  "1911": {
    F: 13
  },
  "1912": {
    F: 10
  },
  "1917": {
    F: 12
  },
  "1920": {
    F: 10
  }
};
const Evelyn = {
  "1900": {
    F: 83
  },
  "1901": {
    F: 91
  },
  "1902": {
    F: 85
  },
  "1903": {
    F: 104
  },
  "1904": {
    F: 78
  },
  "1905": {
    F: 92
  },
  "1906": {
    F: 85
  },
  "1907": {
    F: 110
  },
  "1908": {
    F: 102
  },
  "1909": {
    F: 118
  },
  "1910": {
    F: 113
  },
  "1911": {
    F: 108
  },
  "1912": {
    F: 91
  },
  "1913": {
    F: 75
  },
  "1914": {
    F: 105
  },
  "1915": {
    F: 90
  },
  "1916": {
    F: 122
  },
  "1917": {
    F: 109
  },
  "1918": {
    F: 82
  },
  "1919": {
    F: 81
  },
  "1920": {
    F: 94
  },
  "1921": {
    F: 93
  },
  "1922": {
    F: 97
  },
  "1923": {
    F: 77
  },
  "1924": {
    F: 81
  },
  "1925": {
    F: 79
  },
  "1926": {
    F: 70
  },
  "1927": {
    F: 75
  },
  "1928": {
    F: 61
  },
  "1929": {
    F: 59
  },
  "1930": {
    F: 52
  },
  "1931": {
    F: 63
  },
  "1932": {
    F: 57
  },
  "1933": {
    F: 52
  },
  "1934": {
    F: 52
  },
  "1935": {
    F: 50
  },
  "1936": {
    F: 64
  },
  "1937": {
    F: 66
  },
  "1938": {
    F: 56
  },
  "1939": {
    F: 60
  },
  "1940": {
    F: 52
  },
  "1941": {
    F: 50
  },
  "1942": {
    F: 45
  },
  "1943": {
    F: 40
  },
  "1944": {
    F: 48
  },
  "1945": {
    F: 48
  },
  "1946": {
    F: 50
  },
  "1947": {
    F: 60
  },
  "1948": {
    F: 54
  },
  "1949": {
    F: 46
  },
  "1950": {
    F: 43
  },
  "1951": {
    F: 46
  },
  "1952": {
    F: 39
  },
  "1953": {
    F: 43
  },
  "1954": {
    F: 48
  },
  "1955": {
    F: 38
  },
  "1956": {
    F: 45
  },
  "1957": {
    F: 45
  },
  "1958": {
    F: 42
  },
  "1959": {
    F: 33
  },
  "1960": {
    F: 27
  },
  "1961": {
    F: 31
  },
  "1962": {
    F: 24
  },
  "1963": {
    F: 26
  },
  "1964": {
    F: 25
  },
  "1965": {
    F: 22
  },
  "1966": {
    F: 24
  },
  "1967": {
    F: 16
  },
  "1968": {
    F: 13
  },
  "1969": {
    F: 21
  },
  "1970": {
    F: 17
  },
  "1971": {
    F: 15
  },
  "1972": {
    F: 11
  },
  "1973": {
    F: 21
  },
  "1974": {
    F: 14
  },
  "1976": {
    F: 16
  },
  "1977": {
    F: 13
  },
  "1978": {
    F: 15
  },
  "1979": {
    F: 19
  },
  "1980": {
    F: 21
  },
  "1982": {
    F: 12
  },
  "1983": {
    F: 14
  },
  "1984": {
    F: 21
  },
  "1985": {
    F: 12
  },
  "1986": {
    F: 17
  },
  "1987": {
    F: 13
  },
  "1988": {
    F: 14
  },
  "1989": {
    F: 10
  },
  "1990": {
    F: 10
  },
  "1991": {
    F: 11
  },
  "1992": {
    F: 11
  },
  "1993": {
    F: 12
  },
  "1994": {
    F: 10
  },
  "1995": {
    F: 16
  },
  "1997": {
    F: 15
  },
  "1998": {
    F: 12
  },
  "2000": {
    F: 12
  },
  "2001": {
    F: 12
  },
  "2002": {
    F: 13
  },
  "2003": {
    F: 16
  },
  "2004": {
    F: 15
  },
  "2005": {
    F: 26
  },
  "2006": {
    F: 18
  },
  "2007": {
    F: 22
  },
  "2008": {
    F: 32
  },
  "2009": {
    F: 23
  },
  "2010": {
    F: 38
  },
  "2011": {
    F: 51
  },
  "2012": {
    F: 51
  },
  "2013": {
    F: 55
  },
  "2014": {
    F: 94
  },
  "2015": {
    F: 119
  },
  "2016": {
    F: 141
  },
  "2017": {
    F: 129
  },
  "2018": {
    F: 146
  },
  "2019": {
    F: 132
  },
  "2020": {
    F: 92
  },
  "2021": {
    F: 109
  }
};
const Everett = {
  "2019": {
    M: 11
  }
};
const Everleigh = {
  "2019": {
    F: 13
  },
  "2020": {
    F: 21
  },
  "2021": {
    F: 13
  }
};
const Everly = {
  "2015": {
    F: 18
  },
  "2016": {
    F: 12
  },
  "2017": {
    F: 21
  },
  "2018": {
    F: 27
  },
  "2019": {
    F: 15
  },
  "2020": {
    F: 18
  },
  "2021": {
    F: 22
  }
};
const Evie = {
  "2003": {
    F: 10
  },
  "2005": {
    F: 25
  },
  "2006": {
    F: 28
  },
  "2007": {
    F: 22
  },
  "2008": {
    F: 30
  },
  "2009": {
    F: 31
  },
  "2010": {
    F: 41
  },
  "2011": {
    F: 42
  },
  "2012": {
    F: 53
  },
  "2013": {
    F: 39
  },
  "2014": {
    F: 74
  },
  "2015": {
    F: 98
  },
  "2016": {
    F: 104
  },
  "2017": {
    F: 94
  },
  "2018": {
    F: 96
  },
  "2019": {
    F: 105
  },
  "2020": {
    F: 88
  },
  "2021": {
    F: 94
  }
};
const Ewan = {
  "1957": {
    M: 14
  },
  "1960": {
    M: 12
  },
  "1961": {
    M: 10
  },
  "1962": {
    M: 14
  },
  "1980": {
    M: 11
  },
  "2005": {
    M: 16
  },
  "2009": {
    M: 12
  },
  "2013": {
    M: 10
  }
};
const Ewen = {
  "1929": {
    M: 11
  },
  "1944": {
    M: 10
  },
  "1946": {
    M: 10
  },
  "1947": {
    M: 10
  },
  "1949": {
    M: 15
  },
  "1950": {
    M: 11
  }
};
const Ezekiel = {
  "1996": {
    M: 10
  },
  "1999": {
    M: 12
  },
  "2000": {
    M: 20
  },
  "2001": {
    M: 21
  },
  "2002": {
    M: 24
  },
  "2003": {
    M: 30
  },
  "2004": {
    M: 19
  },
  "2005": {
    M: 25
  },
  "2006": {
    M: 31
  },
  "2007": {
    M: 38
  },
  "2008": {
    M: 33
  },
  "2009": {
    M: 39
  },
  "2010": {
    M: 37
  },
  "2011": {
    M: 23
  },
  "2012": {
    M: 41
  },
  "2013": {
    M: 27
  },
  "2014": {
    M: 35
  },
  "2015": {
    M: 41
  },
  "2016": {
    M: 35
  },
  "2017": {
    M: 51
  },
  "2018": {
    M: 47
  },
  "2019": {
    M: 59
  },
  "2020": {
    M: 59
  },
  "2021": {
    M: 53
  }
};
const Ezra = {
  "1982": {
    M: 11
  },
  "1985": {
    M: 11
  },
  "1986": {
    M: 16
  },
  "1987": {
    M: 11
  },
  "1988": {
    M: 16
  },
  "1989": {
    M: 15
  },
  "1990": {
    M: 16
  },
  "1991": {
    M: 20
  },
  "1992": {
    M: 17
  },
  "1993": {
    M: 16
  },
  "1994": {
    M: 27
  },
  "1995": {
    M: 17
  },
  "1996": {
    M: 20
  },
  "1997": {
    M: 32
  },
  "1998": {
    M: 23
  },
  "1999": {
    M: 37
  },
  "2000": {
    M: 31
  },
  "2001": {
    M: 20
  },
  "2002": {
    M: 37
  },
  "2003": {
    M: 29
  },
  "2004": {
    M: 27
  },
  "2005": {
    M: 33
  },
  "2006": {
    M: 32
  },
  "2007": {
    M: 45
  },
  "2008": {
    M: 34
  },
  "2009": {
    M: 35
  },
  "2010": {
    M: 49
  },
  "2011": {
    M: 39
  },
  "2012": {
    M: 40
  },
  "2013": {
    M: 45
  },
  "2014": {
    M: 54
  },
  "2015": {
    M: 89
  },
  "2016": {
    M: 82
  },
  "2017": {
    M: 88
  },
  "2018": {
    M: 82
  },
  "2019": {
    M: 92
  },
  "2020": {
    M: 88
  },
  "2021": {
    M: 110
  }
};
const Fabian = {
  "1978": {
    M: 10
  },
  "1980": {
    M: 10
  },
  "1983": {
    M: 13
  },
  "1985": {
    M: 18
  },
  "1986": {
    M: 15
  },
  "1987": {
    M: 19
  },
  "1988": {
    M: 12
  },
  "1989": {
    M: 15
  },
  "1990": {
    M: 10
  },
  "1991": {
    M: 14
  },
  "1992": {
    M: 14
  },
  "1995": {
    M: 11
  },
  "2000": {
    M: 12
  },
  "2001": {
    M: 10
  },
  "2003": {
    M: 13
  },
  "2004": {
    M: 13
  },
  "2005": {
    M: 11
  },
  "2007": {
    M: 11
  },
  "2008": {
    M: 11
  },
  "2010": {
    M: 11
  },
  "2011": {
    M: 11
  }
};
const Faith = {
  "1921": {
    F: 10
  },
  "1928": {
    F: 11
  },
  "1934": {
    F: 12
  },
  "1939": {
    F: 10
  },
  "1943": {
    F: 12
  },
  "1954": {
    F: 13
  },
  "1956": {
    F: 10
  },
  "1959": {
    F: 15
  },
  "1960": {
    F: 18
  },
  "1961": {
    F: 15
  },
  "1962": {
    F: 10
  },
  "1963": {
    F: 11
  },
  "1964": {
    F: 14
  },
  "1965": {
    F: 15
  },
  "1966": {
    F: 10
  },
  "1971": {
    F: 11
  },
  "1974": {
    F: 10
  },
  "1976": {
    F: 12
  },
  "1978": {
    F: 12
  },
  "1979": {
    F: 10
  },
  "1982": {
    F: 12
  },
  "1983": {
    F: 10
  },
  "1986": {
    F: 11
  },
  "1989": {
    F: 12
  },
  "1991": {
    F: 10
  },
  "1992": {
    F: 10
  },
  "1994": {
    F: 21
  },
  "1995": {
    F: 15
  },
  "1996": {
    F: 25
  },
  "1997": {
    F: 29
  },
  "1998": {
    F: 32
  },
  "1999": {
    F: 36
  },
  "2000": {
    F: 51
  },
  "2001": {
    F: 49
  },
  "2002": {
    F: 49
  },
  "2003": {
    F: 56
  },
  "2004": {
    F: 51
  },
  "2005": {
    F: 50
  },
  "2006": {
    F: 46
  },
  "2007": {
    F: 63
  },
  "2008": {
    F: 41
  },
  "2009": {
    F: 44
  },
  "2010": {
    F: 46
  },
  "2011": {
    F: 58
  },
  "2012": {
    F: 45
  },
  "2013": {
    F: 43
  },
  "2014": {
    F: 41
  },
  "2015": {
    F: 41
  },
  "2016": {
    F: 46
  },
  "2017": {
    F: 41
  },
  "2018": {
    F: 28
  },
  "2019": {
    F: 25
  },
  "2020": {
    F: 30
  },
  "2021": {
    F: 31
  }
};
const Fanny = {
  "1900": {
    F: 18
  },
  "1901": {
    F: 14
  },
  "1902": {
    F: 21
  },
  "1903": {
    F: 17
  },
  "1904": {
    F: 20
  },
  "1905": {
    F: 13
  },
  "1906": {
    F: 19
  },
  "1907": {
    F: 15
  },
  "1908": {
    F: 14
  },
  "1909": {
    F: 17
  },
  "1910": {
    F: 16
  },
  "1911": {
    F: 10
  },
  "1913": {
    F: 13
  },
  "1916": {
    F: 12
  }
};
const Farrah = {
  "1977": {
    F: 12
  },
  "2012": {
    F: 10
  }
};
const Fateh = {
  "2017": {
    M: 10
  },
  "2018": {
    M: 10
  },
  "2019": {
    M: 17
  },
  "2020": {
    M: 11
  },
  "2021": {
    M: 11
  }
};
const Fatima = {
  "2010": {
    F: 11
  },
  "2014": {
    F: 12
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 14
  },
  "2020": {
    F: 12
  },
  "2021": {
    F: 11
  }
};
const Fay = {
  "1920": {
    F: 14
  },
  "1922": {
    F: 14
  },
  "1923": {
    F: 19
  },
  "1924": {
    F: 17
  },
  "1925": {
    F: 35
  },
  "1926": {
    F: 49
  },
  "1927": {
    F: 49
  },
  "1928": {
    F: 58
  },
  "1929": {
    F: 66
  },
  "1930": {
    F: 74
  },
  "1931": {
    F: 75
  },
  "1932": {
    F: 71
  },
  "1933": {
    F: 75
  },
  "1934": {
    F: 65
  },
  "1935": {
    F: 52
  },
  "1936": {
    F: 67
  },
  "1937": {
    F: 57
  },
  "1938": {
    F: 80
  },
  "1939": {
    F: 79
  },
  "1940": {
    F: 76
  },
  "1941": {
    F: 70
  },
  "1942": {
    F: 72
  },
  "1943": {
    F: 41
  },
  "1944": {
    F: 53
  },
  "1945": {
    F: 52
  },
  "1946": {
    F: 54
  },
  "1947": {
    F: 48
  },
  "1948": {
    F: 52
  },
  "1949": {
    F: 38
  },
  "1950": {
    F: 45
  },
  "1951": {
    F: 47
  },
  "1952": {
    F: 45
  },
  "1953": {
    F: 33
  },
  "1954": {
    F: 30
  },
  "1955": {
    F: 39
  },
  "1956": {
    F: 33
  },
  "1957": {
    F: 26
  },
  "1958": {
    F: 28
  },
  "1959": {
    F: 20
  },
  "1960": {
    F: 17
  },
  "1961": {
    F: 23
  },
  "1962": {
    F: 18
  },
  "1963": {
    F: 14
  },
  "1964": {
    F: 11
  },
  "1965": {
    F: 12
  },
  "1966": {
    F: 11
  },
  "1968": {
    F: 15
  },
  "1973": {
    F: 13
  }
};
const Faye = {
  "1936": {
    F: 12
  },
  "1937": {
    F: 14
  },
  "1938": {
    F: 41
  },
  "1939": {
    F: 33
  },
  "1940": {
    F: 24
  },
  "1941": {
    F: 29
  },
  "1942": {
    F: 29
  },
  "1943": {
    F: 24
  },
  "1944": {
    F: 39
  },
  "1945": {
    F: 41
  },
  "1946": {
    F: 48
  },
  "1947": {
    F: 54
  },
  "1948": {
    F: 62
  },
  "1949": {
    F: 49
  },
  "1950": {
    F: 46
  },
  "1951": {
    F: 39
  },
  "1952": {
    F: 39
  },
  "1953": {
    F: 52
  },
  "1954": {
    F: 38
  },
  "1955": {
    F: 31
  },
  "1956": {
    F: 33
  },
  "1957": {
    F: 32
  },
  "1958": {
    F: 28
  },
  "1959": {
    F: 24
  },
  "1960": {
    F: 21
  },
  "1961": {
    F: 34
  },
  "1962": {
    F: 27
  },
  "1963": {
    F: 20
  },
  "1964": {
    F: 22
  },
  "1965": {
    F: 16
  },
  "1966": {
    F: 17
  },
  "1967": {
    F: 12
  },
  "1968": {
    F: 14
  },
  "1969": {
    F: 10
  },
  "1970": {
    F: 10
  },
  "1971": {
    F: 10
  },
  "1972": {
    F: 14
  },
  "1974": {
    F: 10
  },
  "1975": {
    F: 10
  },
  "2015": {
    F: 12
  }
};
const Felicia = {
  "1994": {
    F: 11
  }
};
const Felicity = {
  "1949": {
    F: 15
  },
  "1950": {
    F: 12
  },
  "1951": {
    F: 16
  },
  "1952": {
    F: 23
  },
  "1953": {
    F: 25
  },
  "1954": {
    F: 19
  },
  "1955": {
    F: 33
  },
  "1956": {
    F: 18
  },
  "1957": {
    F: 21
  },
  "1958": {
    F: 23
  },
  "1959": {
    F: 19
  },
  "1960": {
    F: 21
  },
  "1961": {
    F: 14
  },
  "1962": {
    F: 14
  },
  "1963": {
    F: 28
  },
  "1964": {
    F: 23
  },
  "1965": {
    F: 19
  },
  "1966": {
    F: 14
  },
  "1967": {
    F: 21
  },
  "1968": {
    F: 23
  },
  "1969": {
    F: 16
  },
  "1970": {
    F: 17
  },
  "1971": {
    F: 21
  },
  "1972": {
    F: 13
  },
  "1973": {
    F: 25
  },
  "1974": {
    F: 16
  },
  "1975": {
    F: 18
  },
  "1976": {
    F: 33
  },
  "1977": {
    F: 30
  },
  "1978": {
    F: 28
  },
  "1979": {
    F: 29
  },
  "1980": {
    F: 28
  },
  "1981": {
    F: 19
  },
  "1982": {
    F: 33
  },
  "1983": {
    F: 36
  },
  "1984": {
    F: 35
  },
  "1985": {
    F: 43
  },
  "1986": {
    F: 23
  },
  "1987": {
    F: 27
  },
  "1988": {
    F: 21
  },
  "1989": {
    F: 25
  },
  "1990": {
    F: 26
  },
  "1991": {
    F: 24
  },
  "1992": {
    F: 20
  },
  "1993": {
    F: 19
  },
  "1994": {
    F: 14
  },
  "1995": {
    F: 19
  },
  "1997": {
    F: 10
  },
  "1998": {
    F: 13
  },
  "1999": {
    F: 12
  },
  "2000": {
    F: 13
  },
  "2001": {
    F: 16
  },
  "2003": {
    F: 12
  },
  "2005": {
    F: 15
  },
  "2007": {
    F: 15
  },
  "2008": {
    F: 13
  },
  "2009": {
    F: 13
  },
  "2010": {
    F: 10
  },
  "2011": {
    F: 10
  },
  "2012": {
    F: 15
  },
  "2013": {
    F: 20
  },
  "2014": {
    F: 20
  },
  "2015": {
    F: 18
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 15
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 14
  },
  "2021": {
    F: 12
  }
};
const Felix = {
  "1914": {
    M: 11
  },
  "1992": {
    M: 12
  },
  "1994": {
    M: 10
  },
  "1995": {
    M: 23
  },
  "1996": {
    M: 12
  },
  "1997": {
    M: 17
  },
  "1998": {
    M: 22
  },
  "1999": {
    M: 29
  },
  "2000": {
    M: 37
  },
  "2001": {
    M: 34
  },
  "2002": {
    M: 29
  },
  "2003": {
    M: 27
  },
  "2004": {
    M: 39
  },
  "2005": {
    M: 35
  },
  "2006": {
    M: 51
  },
  "2007": {
    M: 45
  },
  "2008": {
    M: 59
  },
  "2009": {
    M: 64
  },
  "2010": {
    M: 56
  },
  "2011": {
    M: 79
  },
  "2012": {
    M: 78
  },
  "2013": {
    M: 65
  },
  "2014": {
    M: 72
  },
  "2015": {
    M: 75
  },
  "2016": {
    M: 97
  },
  "2017": {
    M: 79
  },
  "2018": {
    M: 70
  },
  "2019": {
    M: 99
  },
  "2020": {
    M: 89
  },
  "2021": {
    M: 106
  }
};
const Fergus = {
  "1912": {
    M: 10
  },
  "1994": {
    M: 10
  },
  "1995": {
    M: 17
  },
  "1996": {
    M: 14
  },
  "1997": {
    M: 22
  },
  "1998": {
    M: 26
  },
  "1999": {
    M: 29
  },
  "2000": {
    M: 33
  },
  "2001": {
    M: 28
  },
  "2002": {
    M: 20
  },
  "2003": {
    M: 31
  },
  "2004": {
    M: 25
  },
  "2005": {
    M: 28
  },
  "2006": {
    M: 23
  },
  "2007": {
    M: 30
  },
  "2008": {
    M: 19
  },
  "2009": {
    M: 25
  },
  "2010": {
    M: 25
  },
  "2011": {
    M: 23
  },
  "2012": {
    M: 21
  },
  "2013": {
    M: 29
  },
  "2014": {
    M: 33
  },
  "2015": {
    M: 32
  },
  "2016": {
    M: 33
  },
  "2017": {
    M: 25
  },
  "2018": {
    M: 26
  },
  "2019": {
    M: 47
  },
  "2020": {
    M: 37
  },
  "2021": {
    M: 40
  }
};
const Fern = {
  "2004": {
    F: 11
  },
  "2007": {
    F: 16
  },
  "2008": {
    F: 11
  },
  "2011": {
    F: 16
  },
  "2013": {
    F: 15
  },
  "2014": {
    F: 10
  },
  "2015": {
    F: 14
  },
  "2016": {
    F: 21
  },
  "2017": {
    F: 12
  },
  "2018": {
    F: 26
  },
  "2019": {
    F: 19
  },
  "2020": {
    F: 19
  },
  "2021": {
    F: 29
  }
};
const Finlay = {
  "1996": {
    M: 10
  },
  "1999": {
    M: 20
  },
  "2000": {
    M: 19
  },
  "2001": {
    M: 26
  },
  "2002": {
    M: 21
  },
  "2003": {
    M: 20
  },
  "2004": {
    M: 23
  },
  "2005": {
    M: 21
  },
  "2006": {
    M: 34
  },
  "2007": {
    M: 34
  },
  "2008": {
    M: 25
  },
  "2009": {
    M: 29
  },
  "2010": {
    M: 30
  },
  "2011": {
    M: 22
  },
  "2012": {
    M: 18
  },
  "2013": {
    M: 15
  },
  "2014": {
    M: 24
  },
  "2015": {
    M: 19
  },
  "2016": {
    M: 29
  },
  "2017": {
    M: 27
  },
  "2018": {
    M: 17
  },
  "2019": {
    M: 15
  },
  "2020": {
    M: 15
  },
  "2021": {
    M: 32
  }
};
const Finley = {
  "1998": {
    M: 14
  },
  "1999": {
    M: 18
  },
  "2000": {
    M: 14
  },
  "2002": {
    M: 17
  },
  "2003": {
    M: 16
  },
  "2004": {
    M: 11
  },
  "2006": {
    M: 12
  },
  "2007": {
    M: 20
  },
  "2008": {
    M: 21
  },
  "2009": {
    M: 25
  },
  "2010": {
    M: 29
  },
  "2011": {
    M: 13
  },
  "2012": {
    M: 16
  },
  "2013": {
    M: 17
  },
  "2014": {
    M: 16
  },
  "2015": {
    M: 20
  },
  "2016": {
    F: 13,
    M: 27
  },
  "2017": {
    M: 41
  },
  "2018": {
    M: 32
  },
  "2019": {
    M: 32
  },
  "2020": {
    M: 40
  },
  "2021": {
    M: 46
  }
};
const Finn = {
  "1990": {
    M: 14
  },
  "1991": {
    M: 17
  },
  "1992": {
    M: 11
  },
  "1993": {
    M: 18
  },
  "1994": {
    M: 16
  },
  "1995": {
    M: 28
  },
  "1996": {
    M: 38
  },
  "1997": {
    M: 51
  },
  "1998": {
    M: 64
  },
  "1999": {
    M: 83
  },
  "2000": {
    M: 90
  },
  "2001": {
    M: 113
  },
  "2002": {
    M: 76
  },
  "2003": {
    M: 95
  },
  "2004": {
    M: 99
  },
  "2005": {
    M: 113
  },
  "2006": {
    M: 123
  },
  "2007": {
    M: 142
  },
  "2008": {
    M: 107
  },
  "2009": {
    M: 93
  },
  "2010": {
    M: 116
  },
  "2011": {
    M: 121
  },
  "2012": {
    M: 109
  },
  "2013": {
    M: 104
  },
  "2014": {
    M: 82
  },
  "2015": {
    M: 123
  },
  "2016": {
    M: 117
  },
  "2017": {
    M: 134
  },
  "2018": {
    M: 121
  },
  "2019": {
    M: 121
  },
  "2020": {
    M: 126
  },
  "2021": {
    M: 128
  }
};
const Finnley = {
  "2020": {
    M: 12
  },
  "2021": {
    M: 11
  }
};
const Fiona = {
  "1940": {
    F: 14
  },
  "1941": {
    F: 11
  },
  "1944": {
    F: 10
  },
  "1946": {
    F: 12
  },
  "1947": {
    F: 18
  },
  "1948": {
    F: 18
  },
  "1949": {
    F: 23
  },
  "1950": {
    F: 26
  },
  "1951": {
    F: 22
  },
  "1952": {
    F: 26
  },
  "1953": {
    F: 39
  },
  "1954": {
    F: 45
  },
  "1955": {
    F: 71
  },
  "1956": {
    F: 44
  },
  "1957": {
    F: 117
  },
  "1958": {
    F: 128
  },
  "1959": {
    F: 163
  },
  "1960": {
    F: 200
  },
  "1961": {
    F: 274
  },
  "1962": {
    F: 316
  },
  "1963": {
    F: 292
  },
  "1964": {
    F: 311
  },
  "1965": {
    F: 268
  },
  "1966": {
    F: 292
  },
  "1967": {
    F: 306
  },
  "1968": {
    F: 252
  },
  "1969": {
    F: 311
  },
  "1970": {
    F: 281
  },
  "1971": {
    F: 272
  },
  "1972": {
    F: 256
  },
  "1973": {
    F: 249
  },
  "1974": {
    F: 239
  },
  "1975": {
    F: 191
  },
  "1976": {
    F: 182
  },
  "1977": {
    F: 159
  },
  "1978": {
    F: 121
  },
  "1979": {
    F: 134
  },
  "1980": {
    F: 115
  },
  "1981": {
    F: 113
  },
  "1982": {
    F: 90
  },
  "1983": {
    F: 77
  },
  "1984": {
    F: 58
  },
  "1985": {
    F: 70
  },
  "1986": {
    F: 76
  },
  "1987": {
    F: 51
  },
  "1988": {
    F: 41
  },
  "1989": {
    F: 38
  },
  "1990": {
    F: 40
  },
  "1991": {
    F: 24
  },
  "1992": {
    F: 26
  },
  "1993": {
    F: 18
  },
  "1994": {
    F: 25
  },
  "1995": {
    F: 24
  },
  "1996": {
    F: 16
  },
  "1997": {
    F: 19
  },
  "1998": {
    F: 14
  },
  "1999": {
    F: 15
  },
  "2000": {
    F: 18
  },
  "2001": {
    F: 10
  },
  "2002": {
    F: 18
  },
  "2004": {
    F: 17
  },
  "2006": {
    F: 15
  },
  "2007": {
    F: 17
  },
  "2008": {
    F: 12
  },
  "2009": {
    F: 10
  },
  "2010": {
    F: 10
  },
  "2014": {
    F: 11
  },
  "2016": {
    F: 11
  },
  "2017": {
    F: 10
  }
};
const Fletcher = {
  "1995": {
    M: 10
  },
  "1997": {
    M: 14
  },
  "1998": {
    M: 12
  },
  "1999": {
    M: 23
  },
  "2000": {
    M: 21
  },
  "2001": {
    M: 22
  },
  "2002": {
    M: 22
  },
  "2003": {
    M: 32
  },
  "2004": {
    M: 38
  },
  "2005": {
    M: 37
  },
  "2006": {
    M: 39
  },
  "2007": {
    M: 44
  },
  "2008": {
    M: 44
  },
  "2009": {
    M: 43
  },
  "2010": {
    M: 61
  },
  "2011": {
    M: 56
  },
  "2012": {
    M: 56
  },
  "2013": {
    M: 71
  },
  "2014": {
    M: 73
  },
  "2015": {
    M: 78
  },
  "2016": {
    M: 56
  },
  "2017": {
    M: 50
  },
  "2018": {
    M: 53
  },
  "2019": {
    M: 35
  },
  "2020": {
    M: 39
  },
  "2021": {
    M: 43
  }
};
const Fleur = {
  "1964": {
    F: 10
  },
  "1968": {
    F: 42
  },
  "1969": {
    F: 55
  },
  "1970": {
    F: 37
  },
  "1971": {
    F: 28
  },
  "1972": {
    F: 51
  },
  "1973": {
    F: 47
  },
  "1974": {
    F: 53
  },
  "1975": {
    F: 40
  },
  "1976": {
    F: 31
  },
  "1977": {
    F: 34
  },
  "1978": {
    F: 48
  },
  "1979": {
    F: 31
  },
  "1980": {
    F: 28
  },
  "1981": {
    F: 25
  },
  "1982": {
    F: 22
  },
  "1983": {
    F: 23
  },
  "1984": {
    F: 20
  },
  "1985": {
    F: 16
  },
  "1986": {
    F: 15
  },
  "1987": {
    F: 12
  },
  "1992": {
    F: 11
  },
  "2009": {
    F: 13
  },
  "2010": {
    F: 14
  },
  "2013": {
    F: 10
  },
  "2017": {
    F: 18
  },
  "2018": {
    F: 17
  },
  "2019": {
    F: 16
  },
  "2020": {
    F: 15
  },
  "2021": {
    F: 20
  }
};
const Flora = {
  "1900": {
    F: 34
  },
  "1901": {
    F: 39
  },
  "1902": {
    F: 32
  },
  "1903": {
    F: 26
  },
  "1904": {
    F: 33
  },
  "1905": {
    F: 34
  },
  "1906": {
    F: 31
  },
  "1907": {
    F: 43
  },
  "1908": {
    F: 33
  },
  "1909": {
    F: 30
  },
  "1910": {
    F: 33
  },
  "1911": {
    F: 33
  },
  "1912": {
    F: 22
  },
  "1913": {
    F: 41
  },
  "1914": {
    F: 41
  },
  "1915": {
    F: 25
  },
  "1916": {
    F: 24
  },
  "1917": {
    F: 27
  },
  "1918": {
    F: 24
  },
  "1919": {
    F: 16
  },
  "1920": {
    F: 16
  },
  "1921": {
    F: 27
  },
  "1922": {
    F: 20
  },
  "1923": {
    F: 26
  },
  "1924": {
    F: 17
  },
  "1925": {
    F: 18
  },
  "1926": {
    F: 18
  },
  "1927": {
    F: 18
  },
  "1929": {
    F: 16
  },
  "1930": {
    F: 11
  },
  "1933": {
    F: 11
  },
  "1934": {
    F: 12
  },
  "1935": {
    F: 12
  },
  "1937": {
    F: 11
  },
  "1939": {
    F: 10
  },
  "1941": {
    F: 10
  },
  "2017": {
    F: 13
  },
  "2018": {
    F: 14
  },
  "2020": {
    F: 11
  },
  "2021": {
    F: 17
  }
};
const Florence = {
  "1900": {
    F: 192
  },
  "1901": {
    F: 165
  },
  "1902": {
    F: 194
  },
  "1903": {
    F: 193
  },
  "1904": {
    F: 205
  },
  "1905": {
    F: 194
  },
  "1906": {
    F: 179
  },
  "1907": {
    F: 168
  },
  "1908": {
    F: 184
  },
  "1909": {
    F: 181
  },
  "1910": {
    F: 200
  },
  "1911": {
    F: 169
  },
  "1912": {
    F: 147
  },
  "1913": {
    F: 159
  },
  "1914": {
    F: 160
  },
  "1915": {
    F: 168
  },
  "1916": {
    F: 180
  },
  "1917": {
    F: 164
  },
  "1918": {
    F: 148
  },
  "1919": {
    F: 106
  },
  "1920": {
    F: 138
  },
  "1921": {
    F: 115
  },
  "1922": {
    F: 120
  },
  "1923": {
    F: 103
  },
  "1924": {
    F: 100
  },
  "1925": {
    F: 80
  },
  "1926": {
    F: 75
  },
  "1927": {
    F: 99
  },
  "1928": {
    F: 68
  },
  "1929": {
    F: 70
  },
  "1930": {
    F: 61
  },
  "1931": {
    F: 56
  },
  "1932": {
    F: 53
  },
  "1933": {
    F: 56
  },
  "1934": {
    F: 39
  },
  "1935": {
    F: 45
  },
  "1936": {
    F: 39
  },
  "1937": {
    F: 49
  },
  "1938": {
    F: 34
  },
  "1939": {
    F: 32
  },
  "1940": {
    F: 36
  },
  "1941": {
    F: 46
  },
  "1942": {
    F: 39
  },
  "1943": {
    F: 26
  },
  "1944": {
    F: 28
  },
  "1945": {
    F: 35
  },
  "1946": {
    F: 27
  },
  "1947": {
    F: 24
  },
  "1948": {
    F: 23
  },
  "1949": {
    F: 30
  },
  "1950": {
    F: 18
  },
  "1951": {
    F: 13
  },
  "1952": {
    F: 24
  },
  "1953": {
    F: 14
  },
  "1954": {
    F: 18
  },
  "1955": {
    F: 19
  },
  "1957": {
    F: 17
  },
  "1958": {
    F: 10
  },
  "1959": {
    F: 10
  },
  "1961": {
    F: 12
  },
  "1962": {
    F: 11
  },
  "1964": {
    F: 14
  },
  "1969": {
    F: 11
  },
  "1975": {
    F: 12
  },
  "1983": {
    F: 12
  },
  "1984": {
    F: 12
  },
  "1986": {
    F: 10
  },
  "1988": {
    F: 10
  },
  "1989": {
    F: 11
  },
  "1990": {
    F: 11
  },
  "1992": {
    F: 14
  },
  "1993": {
    F: 12
  },
  "1994": {
    F: 14
  },
  "1995": {
    F: 11
  },
  "1996": {
    F: 13
  },
  "1997": {
    F: 17
  },
  "1998": {
    F: 11
  },
  "1999": {
    F: 15
  },
  "2001": {
    F: 10
  },
  "2002": {
    F: 11
  },
  "2004": {
    F: 13
  },
  "2005": {
    F: 11
  },
  "2007": {
    F: 16
  },
  "2008": {
    F: 14
  },
  "2009": {
    F: 11
  },
  "2010": {
    F: 19
  },
  "2011": {
    F: 32
  },
  "2012": {
    F: 33
  },
  "2013": {
    F: 47
  },
  "2014": {
    F: 44
  },
  "2015": {
    F: 65
  },
  "2016": {
    F: 61
  },
  "2017": {
    F: 75
  },
  "2018": {
    F: 78
  },
  "2019": {
    F: 72
  },
  "2020": {
    F: 89
  },
  "2021": {
    F: 98
  }
};
const Floyd = {
  "1988": {
    M: 13
  },
  "1990": {
    M: 10
  },
  "1993": {
    M: 10
  },
  "1995": {
    M: 11
  },
  "2018": {
    M: 10
  }
};
const Flynn = {
  "1996": {
    M: 10
  },
  "1998": {
    M: 27
  },
  "1999": {
    M: 58
  },
  "2000": {
    M: 64
  },
  "2001": {
    M: 61
  },
  "2002": {
    M: 75
  },
  "2003": {
    M: 76
  },
  "2004": {
    M: 102
  },
  "2005": {
    M: 99
  },
  "2006": {
    M: 99
  },
  "2007": {
    M: 107
  },
  "2008": {
    M: 91
  },
  "2009": {
    M: 77
  },
  "2010": {
    M: 74
  },
  "2011": {
    M: 87
  },
  "2012": {
    M: 84
  },
  "2013": {
    M: 100
  },
  "2014": {
    M: 97
  },
  "2015": {
    M: 98
  },
  "2016": {
    M: 75
  },
  "2017": {
    M: 75
  },
  "2018": {
    M: 62
  },
  "2019": {
    M: 51
  },
  "2020": {
    M: 63
  },
  "2021": {
    M: 49
  }
};
const Ford = {
  "2006": {
    M: 13
  }
};
const Forrest = {
  "2017": {
    M: 11
  },
  "2018": {
    M: 11
  }
};
const Fox = {
  "2016": {
    M: 15
  },
  "2017": {
    M: 16
  },
  "2019": {
    M: 17
  },
  "2020": {
    M: 20
  },
  "2021": {
    M: 25
  }
};
const Frances = {
  "1900": {
    F: 78
  },
  "1901": {
    F: 74
  },
  "1902": {
    F: 74
  },
  "1903": {
    F: 79
  },
  "1904": {
    F: 81,
    M: 10
  },
  "1905": {
    F: 91
  },
  "1906": {
    F: 83
  },
  "1907": {
    F: 106
  },
  "1908": {
    F: 93
  },
  "1909": {
    F: 86
  },
  "1910": {
    F: 74
  },
  "1911": {
    F: 92
  },
  "1912": {
    F: 99
  },
  "1913": {
    F: 107
  },
  "1914": {
    F: 114
  },
  "1915": {
    F: 115
  },
  "1916": {
    F: 145
  },
  "1917": {
    F: 127
  },
  "1918": {
    F: 102
  },
  "1919": {
    F: 93
  },
  "1920": {
    F: 87
  },
  "1921": {
    F: 96
  },
  "1922": {
    F: 91
  },
  "1923": {
    F: 97
  },
  "1924": {
    F: 92
  },
  "1925": {
    F: 75
  },
  "1926": {
    F: 78
  },
  "1927": {
    F: 94
  },
  "1928": {
    F: 88
  },
  "1929": {
    F: 67
  },
  "1930": {
    F: 69
  },
  "1931": {
    F: 72
  },
  "1932": {
    F: 70
  },
  "1933": {
    F: 62
  },
  "1934": {
    F: 71
  },
  "1935": {
    F: 84
  },
  "1936": {
    F: 84
  },
  "1937": {
    F: 78
  },
  "1938": {
    F: 60
  },
  "1939": {
    F: 96
  },
  "1940": {
    F: 88
  },
  "1941": {
    F: 135
  },
  "1942": {
    F: 115
  },
  "1943": {
    F: 96
  },
  "1944": {
    F: 123
  },
  "1945": {
    F: 141
  },
  "1946": {
    F: 118
  },
  "1947": {
    F: 130
  },
  "1948": {
    F: 133
  },
  "1949": {
    F: 111
  },
  "1950": {
    F: 150
  },
  "1951": {
    F: 107
  },
  "1952": {
    F: 108
  },
  "1953": {
    F: 110
  },
  "1954": {
    F: 121
  },
  "1955": {
    F: 90
  },
  "1956": {
    F: 91
  },
  "1957": {
    F: 91
  },
  "1958": {
    F: 75
  },
  "1959": {
    F: 102
  },
  "1960": {
    F: 100
  },
  "1961": {
    F: 96
  },
  "1962": {
    F: 89
  },
  "1963": {
    F: 65
  },
  "1964": {
    F: 69
  },
  "1965": {
    F: 63
  },
  "1966": {
    F: 55
  },
  "1967": {
    F: 49
  },
  "1968": {
    F: 47
  },
  "1969": {
    F: 45
  },
  "1970": {
    F: 44
  },
  "1971": {
    F: 42
  },
  "1972": {
    F: 47
  },
  "1973": {
    F: 35
  },
  "1974": {
    F: 39
  },
  "1975": {
    F: 37
  },
  "1976": {
    F: 36
  },
  "1977": {
    F: 44
  },
  "1978": {
    F: 28
  },
  "1979": {
    F: 28
  },
  "1980": {
    F: 28
  },
  "1981": {
    F: 43
  },
  "1982": {
    F: 56
  },
  "1983": {
    F: 57
  },
  "1984": {
    F: 55
  },
  "1985": {
    F: 57
  },
  "1986": {
    F: 44
  },
  "1987": {
    F: 38
  },
  "1988": {
    F: 41
  },
  "1989": {
    F: 40
  },
  "1990": {
    F: 40
  },
  "1991": {
    F: 37
  },
  "1992": {
    F: 36
  },
  "1993": {
    F: 37
  },
  "1994": {
    F: 28
  },
  "1995": {
    F: 22
  },
  "1996": {
    F: 22
  },
  "1997": {
    F: 23
  },
  "1998": {
    F: 23
  },
  "1999": {
    F: 17
  },
  "2000": {
    F: 20
  },
  "2001": {
    F: 14
  },
  "2002": {
    F: 26
  },
  "2004": {
    F: 18
  },
  "2006": {
    F: 17
  },
  "2007": {
    F: 12
  },
  "2008": {
    F: 14
  },
  "2009": {
    F: 16
  },
  "2011": {
    F: 17
  },
  "2012": {
    F: 12
  },
  "2013": {
    F: 12
  },
  "2015": {
    F: 16
  },
  "2016": {
    F: 16
  },
  "2017": {
    F: 17
  },
  "2019": {
    F: 14
  },
  "2020": {
    F: 17
  }
};
const Francesca = {
  "1979": {
    F: 17
  },
  "1982": {
    F: 14
  },
  "1983": {
    F: 12
  },
  "1984": {
    F: 13
  },
  "1985": {
    F: 17
  },
  "1987": {
    F: 14
  },
  "1988": {
    F: 14
  },
  "1989": {
    F: 13
  },
  "1990": {
    F: 22
  },
  "1991": {
    F: 21
  },
  "1992": {
    F: 11
  },
  "1993": {
    F: 18
  },
  "1994": {
    F: 22
  },
  "1995": {
    F: 16
  },
  "1996": {
    F: 26
  },
  "1997": {
    F: 28
  },
  "1998": {
    F: 16
  },
  "1999": {
    F: 29
  },
  "2000": {
    F: 22
  },
  "2001": {
    F: 28
  },
  "2002": {
    F: 23
  },
  "2003": {
    F: 21
  },
  "2004": {
    F: 23
  },
  "2005": {
    F: 12
  },
  "2006": {
    F: 15
  },
  "2007": {
    F: 28
  },
  "2008": {
    F: 20
  },
  "2009": {
    F: 28
  },
  "2010": {
    F: 18
  },
  "2011": {
    F: 20
  },
  "2012": {
    F: 12
  },
  "2013": {
    F: 24
  },
  "2014": {
    F: 33
  },
  "2015": {
    F: 33
  },
  "2016": {
    F: 32
  },
  "2017": {
    F: 28
  },
  "2018": {
    F: 28
  },
  "2019": {
    F: 14
  },
  "2020": {
    F: 17
  },
  "2021": {
    F: 28
  }
};
const Francine = {
  "1967": {
    F: 12
  },
  "1968": {
    F: 13
  },
  "1971": {
    F: 11
  },
  "1972": {
    F: 16
  },
  "1973": {
    F: 12
  },
  "1983": {
    F: 12
  }
};
const Francis = {
  "1900": {
    M: 149
  },
  "1901": {
    M: 147
  },
  "1902": {
    M: 158
  },
  "1903": {
    M: 157
  },
  "1904": {
    M: 147
  },
  "1905": {
    M: 175
  },
  "1906": {
    M: 191
  },
  "1907": {
    M: 163
  },
  "1908": {
    M: 195
  },
  "1909": {
    F: 10,
    M: 145
  },
  "1910": {
    M: 196
  },
  "1911": {
    M: 176
  },
  "1912": {
    M: 186
  },
  "1913": {
    M: 211
  },
  "1914": {
    M: 175
  },
  "1915": {
    M: 151
  },
  "1916": {
    M: 178
  },
  "1917": {
    M: 191
  },
  "1918": {
    M: 163
  },
  "1919": {
    M: 157
  },
  "1920": {
    M: 200
  },
  "1921": {
    M: 192
  },
  "1922": {
    M: 146
  },
  "1923": {
    M: 131
  },
  "1924": {
    M: 149
  },
  "1925": {
    M: 146
  },
  "1926": {
    M: 150
  },
  "1927": {
    M: 146
  },
  "1928": {
    M: 117
  },
  "1929": {
    M: 125
  },
  "1930": {
    M: 115
  },
  "1931": {
    M: 97
  },
  "1932": {
    M: 86
  },
  "1933": {
    M: 84
  },
  "1934": {
    M: 96
  },
  "1935": {
    M: 75
  },
  "1936": {
    M: 76
  },
  "1937": {
    M: 77
  },
  "1938": {
    M: 74
  },
  "1939": {
    M: 68
  },
  "1940": {
    M: 89
  },
  "1941": {
    M: 88
  },
  "1942": {
    F: 11,
    M: 93
  },
  "1943": {
    M: 79
  },
  "1944": {
    M: 71
  },
  "1945": {
    M: 66
  },
  "1946": {
    M: 86
  },
  "1947": {
    M: 91
  },
  "1948": {
    M: 83
  },
  "1949": {
    M: 79
  },
  "1950": {
    M: 68
  },
  "1951": {
    M: 73
  },
  "1952": {
    M: 67
  },
  "1953": {
    M: 61
  },
  "1954": {
    M: 62
  },
  "1955": {
    M: 62
  },
  "1956": {
    M: 52
  },
  "1957": {
    M: 56
  },
  "1958": {
    M: 51
  },
  "1959": {
    M: 65
  },
  "1960": {
    M: 58
  },
  "1961": {
    M: 39
  },
  "1962": {
    M: 40
  },
  "1963": {
    M: 51
  },
  "1964": {
    F: 12,
    M: 65
  },
  "1965": {
    M: 36
  },
  "1966": {
    M: 31
  },
  "1967": {
    M: 34
  },
  "1968": {
    M: 40
  },
  "1969": {
    F: 11,
    M: 37
  },
  "1970": {
    M: 28
  },
  "1971": {
    M: 26
  },
  "1972": {
    M: 35
  },
  "1973": {
    M: 47
  },
  "1974": {
    F: 12,
    M: 33
  },
  "1975": {
    M: 24
  },
  "1976": {
    M: 33
  },
  "1977": {
    M: 30
  },
  "1978": {
    M: 31
  },
  "1979": {
    M: 43
  },
  "1980": {
    M: 29
  },
  "1981": {
    M: 31
  },
  "1982": {
    M: 28
  },
  "1983": {
    M: 33
  },
  "1984": {
    M: 33
  },
  "1985": {
    M: 35
  },
  "1986": {
    M: 24
  },
  "1987": {
    M: 24
  },
  "1988": {
    M: 24
  },
  "1989": {
    M: 29
  },
  "1990": {
    M: 26
  },
  "1991": {
    M: 28
  },
  "1992": {
    M: 24
  },
  "1993": {
    M: 31
  },
  "1994": {
    M: 30
  },
  "1995": {
    M: 17
  },
  "1996": {
    M: 16
  },
  "1997": {
    M: 21
  },
  "1998": {
    M: 19
  },
  "1999": {
    M: 27
  },
  "2000": {
    M: 13
  },
  "2001": {
    M: 10
  },
  "2002": {
    M: 15
  },
  "2003": {
    M: 16
  },
  "2004": {
    M: 16
  },
  "2005": {
    M: 12
  },
  "2006": {
    M: 16
  },
  "2007": {
    M: 12
  },
  "2008": {
    M: 20
  },
  "2009": {
    M: 14
  },
  "2010": {
    M: 23
  },
  "2011": {
    M: 15
  },
  "2012": {
    M: 16
  },
  "2013": {
    M: 22
  },
  "2014": {
    M: 25
  },
  "2015": {
    M: 19
  },
  "2016": {
    M: 26
  },
  "2017": {
    M: 17
  },
  "2018": {
    M: 20
  },
  "2019": {
    M: 22
  },
  "2020": {
    M: 25
  },
  "2021": {
    M: 17
  }
};
const Franciscus = {
  "1960": {
    M: 10
  }
};
const Frank = {
  "1900": {
    M: 102
  },
  "1901": {
    M: 114
  },
  "1902": {
    M: 96
  },
  "1903": {
    M: 110
  },
  "1904": {
    M: 86
  },
  "1905": {
    M: 114
  },
  "1906": {
    M: 140
  },
  "1907": {
    M: 120
  },
  "1908": {
    M: 141
  },
  "1909": {
    M: 129
  },
  "1910": {
    M: 136
  },
  "1911": {
    M: 115
  },
  "1912": {
    M: 122
  },
  "1913": {
    M: 123
  },
  "1914": {
    M: 133
  },
  "1915": {
    M: 142
  },
  "1916": {
    M: 144
  },
  "1917": {
    M: 121
  },
  "1918": {
    M: 117
  },
  "1919": {
    M: 115
  },
  "1920": {
    M: 114
  },
  "1921": {
    M: 123
  },
  "1922": {
    M: 148
  },
  "1923": {
    M: 108
  },
  "1924": {
    M: 115
  },
  "1925": {
    M: 82
  },
  "1926": {
    M: 93
  },
  "1927": {
    M: 115
  },
  "1928": {
    M: 73
  },
  "1929": {
    M: 71
  },
  "1930": {
    M: 64
  },
  "1931": {
    M: 61
  },
  "1932": {
    M: 36
  },
  "1933": {
    M: 40
  },
  "1934": {
    M: 55
  },
  "1935": {
    M: 39
  },
  "1936": {
    M: 47
  },
  "1937": {
    M: 41
  },
  "1938": {
    M: 42
  },
  "1939": {
    M: 56
  },
  "1940": {
    M: 40
  },
  "1941": {
    M: 50
  },
  "1942": {
    M: 42
  },
  "1943": {
    M: 43
  },
  "1944": {
    M: 36
  },
  "1945": {
    M: 44
  },
  "1946": {
    M: 40
  },
  "1947": {
    M: 37
  },
  "1948": {
    M: 49
  },
  "1949": {
    M: 34
  },
  "1950": {
    M: 34
  },
  "1951": {
    M: 42
  },
  "1952": {
    M: 36
  },
  "1953": {
    M: 50
  },
  "1954": {
    M: 42
  },
  "1955": {
    M: 48
  },
  "1956": {
    M: 41
  },
  "1957": {
    M: 38
  },
  "1958": {
    M: 37
  },
  "1959": {
    M: 39
  },
  "1960": {
    M: 39
  },
  "1961": {
    M: 28
  },
  "1962": {
    M: 43
  },
  "1963": {
    M: 34
  },
  "1964": {
    M: 30
  },
  "1965": {
    M: 26
  },
  "1966": {
    M: 28
  },
  "1967": {
    M: 33
  },
  "1968": {
    M: 24
  },
  "1969": {
    M: 25
  },
  "1970": {
    M: 20
  },
  "1971": {
    M: 25
  },
  "1972": {
    M: 26
  },
  "1973": {
    M: 16
  },
  "1974": {
    M: 11
  },
  "1975": {
    M: 17
  },
  "1976": {
    M: 26
  },
  "1977": {
    M: 16
  },
  "1978": {
    M: 16
  },
  "1979": {
    M: 12
  },
  "1981": {
    M: 11
  },
  "1983": {
    M: 15
  },
  "1984": {
    M: 24
  },
  "1985": {
    M: 12
  },
  "1987": {
    M: 19
  },
  "1988": {
    M: 16
  },
  "1989": {
    M: 12
  },
  "1990": {
    M: 19
  },
  "1991": {
    M: 12
  },
  "1992": {
    M: 11
  },
  "1993": {
    M: 15
  },
  "1994": {
    M: 10
  },
  "1995": {
    M: 10
  },
  "1996": {
    M: 14
  },
  "1997": {
    M: 18
  },
  "1998": {
    M: 15
  },
  "1999": {
    M: 11
  },
  "2000": {
    M: 13
  },
  "2001": {
    M: 12
  },
  "2002": {
    M: 12
  },
  "2004": {
    M: 14
  },
  "2005": {
    M: 17
  },
  "2006": {
    M: 14
  },
  "2007": {
    M: 18
  },
  "2009": {
    M: 17
  },
  "2011": {
    M: 10
  },
  "2012": {
    M: 15
  },
  "2013": {
    M: 24
  },
  "2014": {
    M: 18
  },
  "2015": {
    M: 15
  },
  "2016": {
    M: 21
  },
  "2017": {
    M: 29
  },
  "2018": {
    M: 26
  },
  "2019": {
    M: 36
  },
  "2020": {
    M: 32
  },
  "2021": {
    M: 29
  }
};
const Frankie = {
  "2007": {
    F: 13
  },
  "2008": {
    F: 11
  },
  "2010": {
    F: 18
  },
  "2011": {
    F: 20
  },
  "2012": {
    F: 21
  },
  "2013": {
    F: 28
  },
  "2014": {
    F: 37
  },
  "2015": {
    F: 60
  },
  "2016": {
    F: 59
  },
  "2017": {
    F: 76
  },
  "2018": {
    F: 80,
    M: 13
  },
  "2019": {
    F: 83
  },
  "2020": {
    F: 90,
    M: 13
  },
  "2021": {
    F: 94,
    M: 11
  }
};
const Franklin = {
  "2013": {
    M: 10
  },
  "2014": {
    M: 14
  },
  "2016": {
    M: 16
  },
  "2017": {
    M: 13
  },
  "2018": {
    M: 15
  },
  "2019": {
    M: 17
  },
  "2020": {
    M: 19
  },
  "2021": {
    M: 23
  }
};
const Fraser = {
  "1950": {
    M: 13
  },
  "1951": {
    M: 14
  },
  "1952": {
    M: 11
  },
  "1954": {
    M: 11
  },
  "1957": {
    M: 14
  },
  "1960": {
    M: 11
  },
  "1961": {
    M: 13
  },
  "1963": {
    M: 10
  },
  "1964": {
    M: 16
  },
  "1965": {
    M: 20
  },
  "1966": {
    M: 15
  },
  "1967": {
    M: 20
  },
  "1968": {
    M: 28
  },
  "1969": {
    M: 19
  },
  "1970": {
    M: 23
  },
  "1971": {
    M: 22
  },
  "1972": {
    M: 35
  },
  "1973": {
    M: 35
  },
  "1974": {
    M: 33
  },
  "1975": {
    M: 33
  },
  "1976": {
    M: 17
  },
  "1977": {
    M: 36
  },
  "1978": {
    M: 34
  },
  "1979": {
    M: 33
  },
  "1980": {
    M: 27
  },
  "1981": {
    M: 30
  },
  "1982": {
    M: 51
  },
  "1983": {
    M: 25
  },
  "1984": {
    M: 42
  },
  "1985": {
    M: 32
  },
  "1986": {
    M: 32
  },
  "1987": {
    M: 39
  },
  "1988": {
    M: 45
  },
  "1989": {
    M: 41
  },
  "1990": {
    M: 31
  },
  "1991": {
    M: 46
  },
  "1992": {
    M: 34
  },
  "1993": {
    M: 39
  },
  "1994": {
    M: 42
  },
  "1995": {
    M: 38
  },
  "1996": {
    M: 33
  },
  "1997": {
    M: 27
  },
  "1998": {
    M: 17
  },
  "1999": {
    M: 27
  },
  "2000": {
    M: 18
  },
  "2001": {
    M: 29
  },
  "2002": {
    M: 17
  },
  "2003": {
    M: 23
  },
  "2004": {
    M: 17
  },
  "2005": {
    M: 11
  },
  "2006": {
    M: 15
  },
  "2007": {
    M: 23
  },
  "2008": {
    M: 16
  },
  "2009": {
    M: 10
  },
  "2010": {
    M: 11
  },
  "2011": {
    M: 11
  },
  "2012": {
    M: 17
  },
  "2013": {
    M: 12
  },
  "2015": {
    M: 10
  },
  "2016": {
    M: 10
  },
  "2017": {
    M: 12
  },
  "2018": {
    M: 12
  },
  "2021": {
    M: 12
  }
};
const Frazer = {
  "1986": {
    M: 12
  }
};
const Fred = {
  "1900": {
    M: 13
  },
  "1902": {
    M: 10
  },
  "1903": {
    M: 14
  },
  "1905": {
    M: 10
  },
  "1907": {
    M: 12
  },
  "1912": {
    M: 10
  },
  "1913": {
    M: 14
  },
  "1914": {
    M: 13
  },
  "1917": {
    M: 10
  },
  "1919": {
    M: 12
  },
  "1921": {
    M: 10
  },
  "1922": {
    M: 10
  },
  "1923": {
    M: 10
  },
  "1973": {
    M: 10
  },
  "2011": {
    M: 10
  },
  "2019": {
    M: 10
  },
  "2020": {
    M: 11
  }
};
const Freda = {
  "1900": {
    F: 24
  },
  "1901": {
    F: 31
  },
  "1902": {
    F: 19
  },
  "1903": {
    F: 28
  },
  "1904": {
    F: 25
  },
  "1905": {
    F: 43
  },
  "1906": {
    F: 50
  },
  "1907": {
    F: 50
  },
  "1908": {
    F: 63
  },
  "1909": {
    F: 40
  },
  "1910": {
    F: 44
  },
  "1911": {
    F: 50
  },
  "1912": {
    F: 46
  },
  "1913": {
    F: 48
  },
  "1914": {
    F: 57
  },
  "1915": {
    F: 39
  },
  "1916": {
    F: 45
  },
  "1917": {
    F: 48
  },
  "1918": {
    F: 50
  },
  "1919": {
    F: 31
  },
  "1920": {
    F: 52
  },
  "1921": {
    F: 39
  },
  "1922": {
    F: 31
  },
  "1923": {
    F: 35
  },
  "1924": {
    F: 30
  },
  "1925": {
    F: 26
  },
  "1926": {
    F: 27
  },
  "1927": {
    F: 32
  },
  "1928": {
    F: 16
  },
  "1929": {
    F: 31
  },
  "1930": {
    F: 13
  },
  "1931": {
    F: 21
  },
  "1932": {
    F: 16
  },
  "1933": {
    F: 12
  },
  "1934": {
    F: 15
  },
  "1935": {
    F: 14
  },
  "1936": {
    F: 17
  },
  "1937": {
    F: 10
  },
  "1938": {
    F: 10
  },
  "1939": {
    F: 10
  },
  "1940": {
    F: 10
  },
  "1944": {
    F: 11
  },
  "1946": {
    F: 13
  },
  "1956": {
    F: 12
  }
};
const Freddie = {
  "2015": {
    M: 13
  },
  "2016": {
    M: 14
  },
  "2017": {
    M: 20
  },
  "2018": {
    M: 23
  },
  "2019": {
    M: 35
  },
  "2020": {
    M: 33
  },
  "2021": {
    M: 58
  }
};
const Frederic = {
  "1900": {
    M: 10
  },
  "1911": {
    M: 10
  }
};
const Frederick = {
  "1900": {
    M: 211
  },
  "1901": {
    M: 216
  },
  "1902": {
    M: 218
  },
  "1903": {
    M: 185
  },
  "1904": {
    M: 256
  },
  "1905": {
    M: 252
  },
  "1906": {
    M: 222
  },
  "1907": {
    M: 254
  },
  "1908": {
    M: 264
  },
  "1909": {
    M: 259
  },
  "1910": {
    M: 232
  },
  "1911": {
    M: 217
  },
  "1912": {
    M: 229
  },
  "1913": {
    M: 228
  },
  "1914": {
    M: 220
  },
  "1915": {
    M: 203
  },
  "1916": {
    M: 224
  },
  "1917": {
    M: 209
  },
  "1918": {
    M: 196
  },
  "1919": {
    M: 157
  },
  "1920": {
    M: 197
  },
  "1921": {
    M: 181
  },
  "1922": {
    M: 176
  },
  "1923": {
    M: 162
  },
  "1924": {
    M: 123
  },
  "1925": {
    M: 143
  },
  "1926": {
    M: 98
  },
  "1927": {
    M: 118
  },
  "1928": {
    M: 105
  },
  "1929": {
    M: 100
  },
  "1930": {
    M: 87
  },
  "1931": {
    M: 86
  },
  "1932": {
    M: 78
  },
  "1933": {
    M: 80
  },
  "1934": {
    M: 75
  },
  "1935": {
    M: 75
  },
  "1936": {
    M: 86
  },
  "1937": {
    M: 83
  },
  "1938": {
    M: 73
  },
  "1939": {
    M: 83
  },
  "1940": {
    M: 85
  },
  "1941": {
    M: 77
  },
  "1942": {
    M: 84
  },
  "1943": {
    M: 67
  },
  "1944": {
    M: 57
  },
  "1945": {
    M: 57
  },
  "1946": {
    M: 55
  },
  "1947": {
    M: 66
  },
  "1948": {
    M: 80
  },
  "1949": {
    M: 57
  },
  "1950": {
    M: 53
  },
  "1951": {
    M: 46
  },
  "1952": {
    M: 57
  },
  "1953": {
    M: 45
  },
  "1954": {
    M: 49
  },
  "1955": {
    M: 44
  },
  "1956": {
    M: 40
  },
  "1957": {
    M: 45
  },
  "1958": {
    M: 48
  },
  "1959": {
    M: 39
  },
  "1960": {
    M: 35
  },
  "1961": {
    M: 35
  },
  "1962": {
    M: 29
  },
  "1963": {
    M: 29
  },
  "1964": {
    M: 33
  },
  "1965": {
    M: 23
  },
  "1966": {
    M: 25
  },
  "1967": {
    M: 29
  },
  "1968": {
    M: 21
  },
  "1969": {
    M: 11
  },
  "1970": {
    M: 22
  },
  "1971": {
    M: 15
  },
  "1972": {
    M: 19
  },
  "1973": {
    M: 14
  },
  "1974": {
    M: 12
  },
  "1975": {
    M: 14
  },
  "1976": {
    M: 12
  },
  "1977": {
    M: 18
  },
  "1978": {
    M: 13
  },
  "1979": {
    M: 11
  },
  "1980": {
    M: 15
  },
  "1981": {
    M: 15
  },
  "1982": {
    M: 16
  },
  "1983": {
    M: 14
  },
  "1984": {
    M: 16
  },
  "1985": {
    M: 12
  },
  "1989": {
    M: 10
  },
  "1990": {
    M: 16
  },
  "1992": {
    M: 14
  },
  "1993": {
    M: 11
  },
  "1994": {
    M: 15
  },
  "1995": {
    M: 10
  },
  "1996": {
    M: 10
  },
  "1998": {
    M: 17
  },
  "2004": {
    M: 11
  },
  "2005": {
    M: 12
  },
  "2006": {
    M: 17
  },
  "2007": {
    M: 12
  },
  "2008": {
    M: 16
  },
  "2009": {
    M: 17
  },
  "2010": {
    M: 27
  },
  "2011": {
    M: 10
  },
  "2012": {
    M: 20
  },
  "2013": {
    M: 21
  },
  "2014": {
    M: 27
  },
  "2015": {
    M: 36
  },
  "2016": {
    M: 41
  },
  "2017": {
    M: 28
  },
  "2018": {
    M: 41
  },
  "2019": {
    M: 48
  },
  "2020": {
    M: 37
  },
  "2021": {
    M: 32
  }
};
const Fredrick = {
  "1904": {
    M: 15
  },
  "1906": {
    M: 18
  },
  "1908": {
    M: 13
  },
  "1909": {
    M: 11
  },
  "1911": {
    M: 11
  },
  "1912": {
    M: 13
  },
  "1913": {
    M: 17
  },
  "1914": {
    M: 17
  },
  "1915": {
    M: 22
  },
  "1916": {
    M: 13
  },
  "1917": {
    M: 27
  },
  "1918": {
    M: 25
  },
  "1919": {
    M: 17
  },
  "1920": {
    M: 28
  },
  "1921": {
    M: 23
  },
  "1922": {
    M: 19
  },
  "1923": {
    M: 18
  },
  "1924": {
    M: 11
  },
  "1925": {
    M: 23
  },
  "1926": {
    M: 24
  },
  "1927": {
    M: 20
  },
  "1928": {
    M: 20
  },
  "1929": {
    M: 12
  },
  "1930": {
    M: 23
  },
  "1931": {
    M: 17
  },
  "1932": {
    M: 21
  },
  "1933": {
    M: 15
  },
  "1934": {
    M: 18
  },
  "1935": {
    M: 12
  },
  "1936": {
    M: 20
  },
  "1937": {
    M: 18
  },
  "1938": {
    M: 10
  },
  "1939": {
    M: 14
  },
  "1940": {
    M: 25
  },
  "1941": {
    M: 20
  },
  "1942": {
    M: 19
  },
  "1943": {
    M: 16
  },
  "1944": {
    M: 10
  },
  "1945": {
    M: 19
  },
  "1946": {
    M: 20
  },
  "1947": {
    M: 15
  },
  "1949": {
    M: 11
  },
  "1950": {
    M: 18
  },
  "1951": {
    M: 14
  },
  "1952": {
    M: 17
  },
  "1954": {
    M: 13
  },
  "1956": {
    M: 12
  },
  "1957": {
    M: 12
  },
  "1959": {
    M: 13
  },
  "1961": {
    M: 15
  },
  "1963": {
    M: 12
  },
  "1965": {
    M: 21
  },
  "1966": {
    M: 10
  },
  "1968": {
    M: 10
  },
  "1971": {
    M: 11
  }
};
const Freedom = {
  "1998": {
    M: 10
  }
};
const Freya = {
  "1988": {
    F: 15
  },
  "1989": {
    F: 14
  },
  "1990": {
    F: 11
  },
  "1994": {
    F: 12
  },
  "1995": {
    F: 12
  },
  "1996": {
    F: 14
  },
  "2002": {
    F: 15
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 11
  },
  "2006": {
    F: 19
  },
  "2007": {
    F: 22
  },
  "2008": {
    F: 23
  },
  "2009": {
    F: 31
  },
  "2010": {
    F: 29
  },
  "2011": {
    F: 21
  },
  "2012": {
    F: 41
  },
  "2013": {
    F: 38
  },
  "2014": {
    F: 41
  },
  "2015": {
    F: 48
  },
  "2016": {
    F: 63
  },
  "2017": {
    F: 68
  },
  "2018": {
    F: 102
  },
  "2019": {
    F: 100
  },
  "2020": {
    F: 85
  },
  "2021": {
    F: 123
  }
};
const Freyja = {
  "2015": {
    F: 10
  },
  "2018": {
    F: 14
  },
  "2019": {
    F: 17
  },
  "2020": {
    F: 12
  },
  "2021": {
    F: 15
  }
};
const Frida = {
  "2016": {
    F: 10
  },
  "2017": {
    F: 10
  },
  "2018": {
    F: 10
  },
  "2019": {
    F: 11
  }
};
const Fynn = {
  "1999": {
    M: 11
  },
  "2001": {
    M: 15
  },
  "2002": {
    M: 14
  },
  "2003": {
    M: 12
  },
  "2004": {
    M: 18
  },
  "2005": {
    M: 11
  },
  "2006": {
    M: 14
  },
  "2007": {
    M: 21
  },
  "2008": {
    M: 17
  },
  "2009": {
    M: 21
  },
  "2010": {
    M: 12
  },
  "2011": {
    M: 14
  },
  "2012": {
    M: 12
  },
  "2014": {
    M: 10
  },
  "2018": {
    M: 10
  }
};
const Gabriel = {
  "1973": {
    M: 11
  },
  "1977": {
    M: 11
  },
  "1978": {
    M: 18
  },
  "1979": {
    M: 10
  },
  "1982": {
    M: 13
  },
  "1983": {
    M: 10
  },
  "1984": {
    M: 13
  },
  "1985": {
    M: 12
  },
  "1986": {
    M: 14
  },
  "1987": {
    M: 15
  },
  "1989": {
    M: 15
  },
  "1990": {
    M: 20
  },
  "1991": {
    M: 18
  },
  "1992": {
    M: 12
  },
  "1993": {
    M: 12
  },
  "1994": {
    M: 20
  },
  "1995": {
    M: 25
  },
  "1996": {
    M: 24
  },
  "1997": {
    M: 32
  },
  "1998": {
    M: 34
  },
  "1999": {
    M: 33
  },
  "2000": {
    M: 36
  },
  "2001": {
    M: 35
  },
  "2002": {
    M: 49
  },
  "2003": {
    M: 59
  },
  "2004": {
    M: 56
  },
  "2005": {
    M: 61
  },
  "2006": {
    M: 55
  },
  "2007": {
    M: 61
  },
  "2008": {
    M: 55
  },
  "2009": {
    M: 67
  },
  "2010": {
    M: 56
  },
  "2011": {
    M: 48
  },
  "2012": {
    M: 37
  },
  "2013": {
    M: 51
  },
  "2014": {
    M: 42
  },
  "2015": {
    M: 54
  },
  "2016": {
    M: 60
  },
  "2017": {
    M: 64
  },
  "2018": {
    M: 61
  },
  "2019": {
    M: 49
  },
  "2020": {
    M: 46
  },
  "2021": {
    M: 55
  }
};
const Gabriella = {
  "1993": {
    F: 15
  },
  "1994": {
    F: 20
  },
  "1995": {
    F: 12
  },
  "1996": {
    F: 15
  },
  "1997": {
    F: 20
  },
  "1998": {
    F: 20
  },
  "1999": {
    F: 16
  },
  "2000": {
    F: 23
  },
  "2001": {
    F: 21
  },
  "2002": {
    F: 21
  },
  "2003": {
    F: 27
  },
  "2004": {
    F: 24
  },
  "2005": {
    F: 23
  },
  "2006": {
    F: 31
  },
  "2007": {
    F: 50
  },
  "2008": {
    F: 46
  },
  "2009": {
    F: 38
  },
  "2010": {
    F: 31
  },
  "2011": {
    F: 28
  },
  "2012": {
    F: 24
  },
  "2013": {
    F: 22
  },
  "2014": {
    F: 32
  },
  "2015": {
    F: 23
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 23
  },
  "2018": {
    F: 24
  },
  "2019": {
    F: 29
  },
  "2020": {
    F: 30
  },
  "2021": {
    F: 26
  }
};
const Gabrielle = {
  "1935": {
    F: 11
  },
  "1937": {
    F: 14
  },
  "1938": {
    F: 11
  },
  "1939": {
    F: 16
  },
  "1940": {
    F: 11
  },
  "1941": {
    F: 18
  },
  "1942": {
    F: 15
  },
  "1943": {
    F: 18
  },
  "1944": {
    F: 18
  },
  "1945": {
    F: 18
  },
  "1946": {
    F: 10
  },
  "1947": {
    F: 18
  },
  "1948": {
    F: 23
  },
  "1949": {
    F: 20
  },
  "1950": {
    F: 15
  },
  "1951": {
    F: 16
  },
  "1952": {
    F: 20
  },
  "1953": {
    F: 15
  },
  "1954": {
    F: 23
  },
  "1955": {
    F: 15
  },
  "1956": {
    F: 21
  },
  "1957": {
    F: 15
  },
  "1958": {
    F: 11
  },
  "1959": {
    F: 34
  },
  "1960": {
    F: 19
  },
  "1961": {
    F: 20
  },
  "1962": {
    F: 23
  },
  "1963": {
    F: 15
  },
  "1964": {
    F: 22
  },
  "1965": {
    F: 19
  },
  "1966": {
    F: 24
  },
  "1967": {
    F: 23
  },
  "1968": {
    F: 25
  },
  "1969": {
    F: 21
  },
  "1970": {
    F: 10
  },
  "1971": {
    F: 14
  },
  "1972": {
    F: 16
  },
  "1973": {
    F: 24
  },
  "1974": {
    F: 17
  },
  "1975": {
    F: 10
  },
  "1976": {
    F: 22
  },
  "1977": {
    F: 23
  },
  "1978": {
    F: 19
  },
  "1979": {
    F: 30
  },
  "1980": {
    F: 20
  },
  "1981": {
    F: 30
  },
  "1982": {
    F: 29
  },
  "1983": {
    F: 23
  },
  "1984": {
    F: 32
  },
  "1985": {
    F: 30
  },
  "1986": {
    F: 33
  },
  "1987": {
    F: 37
  },
  "1988": {
    F: 36
  },
  "1989": {
    F: 39
  },
  "1990": {
    F: 27
  },
  "1991": {
    F: 43
  },
  "1992": {
    F: 62
  },
  "1993": {
    F: 72
  },
  "1994": {
    F: 60
  },
  "1995": {
    F: 68
  },
  "1996": {
    F: 62
  },
  "1997": {
    F: 57
  },
  "1998": {
    F: 64
  },
  "1999": {
    F: 59
  },
  "2000": {
    F: 67
  },
  "2001": {
    F: 51
  },
  "2002": {
    F: 39
  },
  "2003": {
    F: 57
  },
  "2004": {
    F: 45
  },
  "2005": {
    F: 30
  },
  "2006": {
    F: 52
  },
  "2007": {
    F: 37
  },
  "2008": {
    F: 47
  },
  "2009": {
    F: 35
  },
  "2010": {
    F: 34
  },
  "2011": {
    F: 23
  },
  "2012": {
    F: 25
  },
  "2013": {
    F: 23
  },
  "2014": {
    F: 25
  },
  "2015": {
    F: 23
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 11
  },
  "2018": {
    F: 18
  },
  "2019": {
    F: 17
  },
  "2020": {
    F: 19
  },
  "2021": {
    F: 19
  }
};
const Gael = {
  "1941": {
    F: 19
  },
  "1942": {
    F: 13
  },
  "1943": {
    F: 20
  },
  "1944": {
    F: 11
  },
  "1945": {
    F: 16
  },
  "1946": {
    F: 21
  },
  "1947": {
    F: 14
  },
  "1948": {
    F: 14
  },
  "1949": {
    F: 24
  },
  "1950": {
    F: 23
  },
  "1951": {
    F: 18
  },
  "1952": {
    F: 10
  },
  "1953": {
    F: 17
  },
  "1954": {
    F: 17
  },
  "1955": {
    F: 21
  },
  "1956": {
    F: 32
  },
  "1957": {
    F: 26
  },
  "1958": {
    F: 14
  },
  "1960": {
    F: 14
  },
  "1961": {
    F: 12
  },
  "1962": {
    F: 14
  },
  "1964": {
    F: 10
  }
};
const Gail = {
  "1936": {
    F: 11
  },
  "1937": {
    F: 11
  },
  "1938": {
    F: 20
  },
  "1939": {
    F: 27
  },
  "1940": {
    F: 53
  },
  "1941": {
    F: 55
  },
  "1942": {
    F: 70
  },
  "1943": {
    F: 63
  },
  "1944": {
    F: 70
  },
  "1945": {
    F: 97
  },
  "1946": {
    F: 130
  },
  "1947": {
    F: 120
  },
  "1948": {
    F: 124
  },
  "1949": {
    F: 181
  },
  "1950": {
    F: 187
  },
  "1951": {
    F: 133
  },
  "1952": {
    F: 170
  },
  "1953": {
    F: 178
  },
  "1954": {
    F: 181
  },
  "1955": {
    F: 126
  },
  "1956": {
    F: 133
  },
  "1957": {
    F: 172
  },
  "1958": {
    F: 129
  },
  "1959": {
    F: 107
  },
  "1960": {
    F: 95
  },
  "1961": {
    F: 92
  },
  "1962": {
    F: 77
  },
  "1963": {
    F: 70
  },
  "1964": {
    F: 51
  },
  "1965": {
    F: 46
  },
  "1966": {
    F: 71
  },
  "1967": {
    F: 46
  },
  "1968": {
    F: 46
  },
  "1969": {
    F: 39
  },
  "1970": {
    F: 22
  },
  "1971": {
    F: 25
  },
  "1972": {
    F: 15
  },
  "1973": {
    F: 17
  },
  "1974": {
    F: 13
  },
  "1975": {
    F: 14
  },
  "1976": {
    F: 13
  },
  "1977": {
    F: 15
  }
};
const Gale = {
  "1952": {
    F: 11
  }
};
const Gareth = {
  "1964": {
    M: 13
  },
  "1966": {
    M: 11
  },
  "1967": {
    M: 11
  },
  "1968": {
    M: 14
  },
  "1969": {
    M: 27
  },
  "1970": {
    M: 49
  },
  "1971": {
    M: 85
  },
  "1972": {
    M: 90
  },
  "1973": {
    M: 117
  },
  "1974": {
    M: 88
  },
  "1975": {
    M: 108
  },
  "1976": {
    M: 76
  },
  "1977": {
    M: 97
  },
  "1978": {
    M: 102
  },
  "1979": {
    M: 180
  },
  "1980": {
    M: 182
  },
  "1981": {
    M: 138
  },
  "1982": {
    M: 208
  },
  "1983": {
    M: 145
  },
  "1984": {
    M: 105
  },
  "1985": {
    M: 101
  },
  "1986": {
    M: 78
  },
  "1987": {
    M: 61
  },
  "1988": {
    M: 65
  },
  "1989": {
    M: 61
  },
  "1990": {
    M: 46
  },
  "1991": {
    M: 34
  },
  "1992": {
    M: 40
  },
  "1993": {
    M: 34
  },
  "1994": {
    M: 23
  },
  "1995": {
    M: 22
  },
  "1996": {
    M: 16
  },
  "1997": {
    M: 17
  },
  "1998": {
    M: 18
  },
  "1999": {
    M: 11
  },
  "2000": {
    M: 13
  },
  "2001": {
    M: 10
  },
  "2002": {
    M: 11
  }
};
const Garry = {
  "1933": {
    M: 11
  },
  "1934": {
    M: 19
  },
  "1935": {
    M: 24
  },
  "1936": {
    M: 33
  },
  "1937": {
    M: 31
  },
  "1938": {
    M: 59
  },
  "1939": {
    M: 52
  },
  "1940": {
    M: 62
  },
  "1941": {
    M: 69
  },
  "1942": {
    M: 59
  },
  "1943": {
    M: 48
  },
  "1944": {
    M: 65
  },
  "1945": {
    M: 64
  },
  "1946": {
    M: 93
  },
  "1947": {
    M: 110
  },
  "1948": {
    M: 104
  },
  "1949": {
    M: 106
  },
  "1950": {
    M: 138
  },
  "1951": {
    M: 162
  },
  "1952": {
    M: 150
  },
  "1953": {
    M: 160
  },
  "1954": {
    M: 173
  },
  "1955": {
    M: 200
  },
  "1956": {
    M: 166
  },
  "1957": {
    M: 199
  },
  "1958": {
    M: 185
  },
  "1959": {
    M: 157
  },
  "1960": {
    M: 157
  },
  "1961": {
    M: 128
  },
  "1962": {
    M: 106
  },
  "1963": {
    M: 104
  },
  "1964": {
    M: 117
  },
  "1965": {
    M: 85
  },
  "1966": {
    M: 66
  },
  "1967": {
    M: 44
  },
  "1968": {
    M: 56
  },
  "1969": {
    M: 28
  },
  "1970": {
    M: 43
  },
  "1971": {
    M: 23
  },
  "1972": {
    M: 29
  },
  "1973": {
    M: 17
  },
  "1974": {
    M: 20
  },
  "1975": {
    M: 11
  },
  "1977": {
    M: 18
  },
  "1980": {
    M: 16
  },
  "1982": {
    M: 11
  },
  "1985": {
    M: 10
  },
  "1986": {
    M: 10
  }
};
const Garth = {
  "1925": {
    M: 12
  },
  "1928": {
    M: 15
  },
  "1929": {
    M: 13
  },
  "1930": {
    M: 12
  },
  "1932": {
    M: 13
  },
  "1934": {
    M: 17
  },
  "1936": {
    M: 12
  },
  "1937": {
    M: 13
  },
  "1938": {
    M: 13
  },
  "1939": {
    M: 14
  },
  "1941": {
    M: 24
  },
  "1943": {
    M: 16
  },
  "1944": {
    M: 18
  },
  "1945": {
    M: 23
  },
  "1946": {
    M: 26
  },
  "1947": {
    M: 26
  },
  "1948": {
    M: 19
  },
  "1949": {
    M: 30
  },
  "1950": {
    M: 36
  },
  "1951": {
    M: 37
  },
  "1952": {
    M: 29
  },
  "1953": {
    M: 21
  },
  "1954": {
    M: 27
  },
  "1955": {
    M: 26
  },
  "1956": {
    M: 34
  },
  "1957": {
    M: 32
  },
  "1958": {
    M: 35
  },
  "1959": {
    M: 48
  },
  "1960": {
    M: 35
  },
  "1961": {
    M: 40
  },
  "1962": {
    M: 45
  },
  "1963": {
    M: 37
  },
  "1964": {
    M: 43
  },
  "1965": {
    M: 29
  },
  "1966": {
    M: 20
  },
  "1967": {
    M: 18
  },
  "1968": {
    M: 26
  },
  "1969": {
    M: 35
  },
  "1970": {
    M: 23
  },
  "1971": {
    M: 31
  },
  "1972": {
    M: 30
  },
  "1973": {
    M: 17
  },
  "1974": {
    M: 25
  },
  "1975": {
    M: 12
  },
  "1976": {
    M: 19
  },
  "1977": {
    M: 18
  },
  "1978": {
    M: 18
  },
  "1979": {
    M: 20
  },
  "1980": {
    M: 22
  },
  "1981": {
    M: 23
  },
  "1982": {
    M: 16
  },
  "1983": {
    M: 17
  },
  "1984": {
    M: 20
  },
  "1985": {
    M: 12
  },
  "1986": {
    M: 11
  }
};
const Gary = {
  "1933": {
    M: 22
  },
  "1934": {
    M: 22
  },
  "1935": {
    M: 43
  },
  "1936": {
    M: 66
  },
  "1937": {
    M: 90
  },
  "1938": {
    M: 137
  },
  "1939": {
    M: 157
  },
  "1940": {
    M: 168
  },
  "1941": {
    M: 185
  },
  "1942": {
    M: 180
  },
  "1943": {
    M: 157
  },
  "1944": {
    M: 171
  },
  "1945": {
    M: 214
  },
  "1946": {
    M: 220
  },
  "1947": {
    M: 253
  },
  "1948": {
    M: 205
  },
  "1949": {
    M: 216
  },
  "1950": {
    M: 218
  },
  "1951": {
    M: 257
  },
  "1952": {
    M: 337
  },
  "1953": {
    M: 278
  },
  "1954": {
    M: 324
  },
  "1955": {
    M: 337
  },
  "1956": {
    M: 348
  },
  "1957": {
    M: 363
  },
  "1958": {
    M: 357
  },
  "1959": {
    M: 344
  },
  "1960": {
    M: 271
  },
  "1961": {
    M: 329
  },
  "1962": {
    M: 317
  },
  "1963": {
    M: 297
  },
  "1964": {
    M: 237
  },
  "1965": {
    M: 239
  },
  "1966": {
    M: 255
  },
  "1967": {
    M: 236
  },
  "1968": {
    M: 208
  },
  "1969": {
    M: 209
  },
  "1970": {
    M: 152
  },
  "1971": {
    M: 139
  },
  "1972": {
    M: 104
  },
  "1973": {
    M: 84
  },
  "1974": {
    M: 92
  },
  "1975": {
    M: 81
  },
  "1976": {
    M: 84
  },
  "1977": {
    M: 47
  },
  "1978": {
    M: 53
  },
  "1979": {
    M: 42
  },
  "1980": {
    M: 56
  },
  "1981": {
    M: 55
  },
  "1982": {
    M: 35
  },
  "1983": {
    M: 44
  },
  "1984": {
    M: 44
  },
  "1985": {
    M: 45
  },
  "1986": {
    M: 35
  },
  "1987": {
    M: 30
  },
  "1988": {
    M: 34
  },
  "1989": {
    M: 26
  },
  "1990": {
    M: 28
  },
  "1991": {
    M: 27
  },
  "1992": {
    M: 19
  },
  "1993": {
    M: 18
  },
  "1994": {
    M: 22
  },
  "1995": {
    M: 13
  },
  "1996": {
    M: 15
  },
  "1997": {
    M: 13
  }
};
const Gavin = {
  "1920": {
    M: 11
  },
  "1921": {
    M: 10
  },
  "1924": {
    M: 21
  },
  "1925": {
    M: 10
  },
  "1927": {
    M: 15
  },
  "1929": {
    M: 10
  },
  "1930": {
    M: 18
  },
  "1931": {
    M: 13
  },
  "1932": {
    M: 16
  },
  "1933": {
    M: 12
  },
  "1934": {
    M: 19
  },
  "1935": {
    M: 13
  },
  "1936": {
    M: 22
  },
  "1937": {
    M: 28
  },
  "1938": {
    M: 33
  },
  "1939": {
    M: 32
  },
  "1940": {
    M: 44
  },
  "1941": {
    M: 46
  },
  "1942": {
    M: 52
  },
  "1943": {
    M: 37
  },
  "1944": {
    M: 43
  },
  "1945": {
    M: 38
  },
  "1946": {
    M: 46
  },
  "1947": {
    M: 86
  },
  "1948": {
    M: 67
  },
  "1949": {
    M: 70
  },
  "1950": {
    M: 83
  },
  "1951": {
    M: 79
  },
  "1952": {
    M: 101
  },
  "1953": {
    M: 87
  },
  "1954": {
    M: 95
  },
  "1955": {
    M: 123
  },
  "1956": {
    M: 115
  },
  "1957": {
    M: 112
  },
  "1958": {
    M: 118
  },
  "1959": {
    M: 132
  },
  "1960": {
    M: 137
  },
  "1961": {
    M: 131
  },
  "1962": {
    M: 125
  },
  "1963": {
    M: 128
  },
  "1964": {
    M: 132
  },
  "1965": {
    M: 118
  },
  "1966": {
    M: 134
  },
  "1967": {
    M: 130
  },
  "1968": {
    M: 147
  },
  "1969": {
    M: 124
  },
  "1970": {
    M: 103
  },
  "1971": {
    M: 140
  },
  "1972": {
    M: 157
  },
  "1973": {
    M: 149
  },
  "1974": {
    M: 112
  },
  "1975": {
    M: 124
  },
  "1976": {
    M: 97
  },
  "1977": {
    M: 111
  },
  "1978": {
    M: 69
  },
  "1979": {
    M: 83
  },
  "1980": {
    M: 50
  },
  "1981": {
    M: 46
  },
  "1982": {
    M: 42
  },
  "1983": {
    M: 39
  },
  "1984": {
    M: 28
  },
  "1985": {
    M: 35
  },
  "1986": {
    M: 31
  },
  "1987": {
    M: 28
  },
  "1988": {
    M: 25
  },
  "1989": {
    M: 29
  },
  "1990": {
    M: 29
  },
  "1991": {
    M: 22
  },
  "1992": {
    M: 15
  },
  "1993": {
    M: 18
  },
  "1994": {
    M: 18
  },
  "1995": {
    M: 25
  },
  "1996": {
    M: 10
  },
  "1997": {
    M: 10
  },
  "2003": {
    M: 10
  },
  "2016": {
    M: 11
  },
  "2019": {
    M: 14
  },
  "2021": {
    M: 15
  }
};
const Gay = {
  "1937": {
    F: 17
  },
  "1940": {
    F: 16
  },
  "1941": {
    F: 10
  },
  "1942": {
    F: 22
  },
  "1943": {
    F: 20
  },
  "1944": {
    F: 30
  },
  "1945": {
    F: 23
  },
  "1946": {
    F: 32
  },
  "1947": {
    F: 21
  },
  "1948": {
    F: 31
  },
  "1949": {
    F: 26
  },
  "1950": {
    F: 23
  },
  "1951": {
    F: 16
  },
  "1952": {
    F: 18
  },
  "1953": {
    F: 20
  },
  "1954": {
    F: 20
  },
  "1955": {
    F: 22
  },
  "1956": {
    F: 21
  },
  "1957": {
    F: 15
  },
  "1958": {
    F: 22
  },
  "1959": {
    F: 19
  },
  "1960": {
    F: 14
  },
  "1962": {
    F: 10
  }
};
const Gaye = {
  "1940": {
    F: 10
  },
  "1944": {
    F: 12
  },
  "1945": {
    F: 14
  },
  "1946": {
    F: 20
  },
  "1947": {
    F: 11
  },
  "1948": {
    F: 24
  },
  "1949": {
    F: 15
  },
  "1950": {
    F: 26
  },
  "1951": {
    F: 27
  },
  "1952": {
    F: 19
  },
  "1953": {
    F: 21
  },
  "1954": {
    F: 21
  },
  "1955": {
    F: 24
  },
  "1956": {
    F: 30
  },
  "1957": {
    F: 28
  },
  "1958": {
    F: 23
  },
  "1959": {
    F: 23
  },
  "1960": {
    F: 15
  },
  "1961": {
    F: 16
  },
  "1962": {
    F: 11
  },
  "1963": {
    F: 18
  },
  "1964": {
    F: 20
  },
  "1965": {
    F: 14
  },
  "1968": {
    F: 11
  },
  "1969": {
    F: 14
  },
  "1970": {
    F: 10
  }
};
const Gayle = {
  "1943": {
    F: 11
  },
  "1945": {
    F: 12
  },
  "1946": {
    F: 10
  },
  "1947": {
    F: 11
  },
  "1948": {
    F: 37
  },
  "1949": {
    F: 31
  },
  "1950": {
    F: 34
  },
  "1951": {
    F: 31
  },
  "1952": {
    F: 15
  },
  "1953": {
    F: 32
  },
  "1954": {
    F: 30
  },
  "1955": {
    F: 41
  },
  "1956": {
    F: 28
  },
  "1957": {
    F: 44
  },
  "1958": {
    F: 47
  },
  "1959": {
    F: 32
  },
  "1960": {
    F: 25
  },
  "1961": {
    F: 28
  },
  "1962": {
    F: 25
  },
  "1963": {
    F: 21
  },
  "1964": {
    F: 20
  },
  "1965": {
    F: 21
  },
  "1966": {
    F: 22
  },
  "1967": {
    F: 16
  },
  "1968": {
    F: 12
  },
  "1971": {
    F: 10
  }
};
const Gayleen = {
  "1959": {
    F: 11
  },
  "1960": {
    F: 10
  },
  "1961": {
    F: 17
  },
  "1962": {
    F: 18
  },
  "1963": {
    F: 12
  },
  "1967": {
    F: 11
  },
  "1970": {
    F: 10
  }
};
const Gaylene = {
  "1944": {
    F: 13
  },
  "1945": {
    F: 12
  },
  "1946": {
    F: 26
  },
  "1947": {
    F: 28
  },
  "1948": {
    F: 32
  },
  "1949": {
    F: 39
  },
  "1950": {
    F: 33
  },
  "1951": {
    F: 32
  },
  "1952": {
    F: 35
  },
  "1953": {
    F: 24
  },
  "1954": {
    F: 44
  },
  "1955": {
    F: 44
  },
  "1956": {
    F: 45
  },
  "1957": {
    F: 49
  },
  "1958": {
    F: 50
  },
  "1959": {
    F: 55
  },
  "1960": {
    F: 57
  },
  "1961": {
    F: 60
  },
  "1962": {
    F: 43
  },
  "1963": {
    F: 82
  },
  "1964": {
    F: 59
  },
  "1965": {
    F: 53
  },
  "1966": {
    F: 37
  },
  "1967": {
    F: 29
  },
  "1968": {
    F: 28
  },
  "1969": {
    F: 33
  },
  "1970": {
    F: 19
  },
  "1971": {
    F: 20
  },
  "1972": {
    F: 29
  },
  "1973": {
    F: 23
  },
  "1974": {
    F: 18
  }
};
const Gaynor = {
  "1932": {
    F: 14
  },
  "1933": {
    F: 19
  },
  "1934": {
    F: 13
  },
  "1936": {
    F: 16
  },
  "1937": {
    F: 17
  },
  "1938": {
    F: 18
  },
  "1939": {
    F: 18
  },
  "1940": {
    F: 29
  },
  "1941": {
    F: 26
  },
  "1942": {
    F: 27
  },
  "1943": {
    F: 24
  },
  "1944": {
    F: 21
  },
  "1945": {
    F: 39
  },
  "1946": {
    F: 32
  },
  "1947": {
    F: 36
  },
  "1948": {
    F: 22
  },
  "1949": {
    F: 32
  },
  "1950": {
    F: 19
  },
  "1951": {
    F: 20
  },
  "1952": {
    F: 24
  },
  "1953": {
    F: 23
  },
  "1954": {
    F: 30
  },
  "1955": {
    F: 18
  },
  "1956": {
    F: 18
  },
  "1957": {
    F: 16
  },
  "1958": {
    F: 15
  },
  "1959": {
    F: 14
  },
  "1960": {
    F: 12
  },
  "1961": {
    F: 13
  },
  "1963": {
    F: 12
  }
};
const Gemma = {
  "1979": {
    F: 16
  },
  "1980": {
    F: 24
  },
  "1981": {
    F: 39
  },
  "1982": {
    F: 79
  },
  "1983": {
    F: 114
  },
  "1984": {
    F: 195
  },
  "1985": {
    F: 184
  },
  "1986": {
    F: 155
  },
  "1987": {
    F: 141
  },
  "1988": {
    F: 111
  },
  "1989": {
    F: 107
  },
  "1990": {
    F: 93
  },
  "1991": {
    F: 71
  },
  "1992": {
    F: 98
  },
  "1993": {
    F: 77
  },
  "1994": {
    F: 72
  },
  "1995": {
    F: 54
  },
  "1996": {
    F: 70
  },
  "1997": {
    F: 41
  },
  "1998": {
    F: 49
  },
  "1999": {
    F: 33
  },
  "2000": {
    F: 51
  },
  "2001": {
    F: 59
  },
  "2002": {
    F: 66
  },
  "2003": {
    F: 56
  },
  "2004": {
    F: 52
  },
  "2005": {
    F: 49
  },
  "2006": {
    F: 40
  },
  "2007": {
    F: 52
  },
  "2008": {
    F: 67
  },
  "2009": {
    F: 37
  },
  "2010": {
    F: 43
  },
  "2011": {
    F: 31
  },
  "2012": {
    F: 33
  },
  "2013": {
    F: 33
  },
  "2014": {
    F: 14
  },
  "2015": {
    F: 21
  },
  "2016": {
    F: 18
  },
  "2017": {
    F: 10
  },
  "2018": {
    F: 20
  },
  "2019": {
    F: 14
  },
  "2020": {
    F: 15
  },
  "2021": {
    F: 17
  }
};
const Gene = {
  "1963": {
    M: 10
  },
  "1965": {
    M: 14
  },
  "1966": {
    M: 16
  },
  "1967": {
    M: 18
  },
  "1968": {
    M: 14
  },
  "1969": {
    M: 17
  },
  "1970": {
    M: 22
  },
  "1971": {
    M: 34
  },
  "1972": {
    M: 27
  },
  "1973": {
    M: 22
  },
  "1974": {
    M: 21
  },
  "1975": {
    M: 22
  },
  "1976": {
    M: 20
  },
  "1977": {
    M: 15
  },
  "1979": {
    M: 13
  },
  "1980": {
    M: 20
  },
  "1981": {
    M: 12
  },
  "1982": {
    M: 13
  },
  "1986": {
    M: 10
  },
  "1988": {
    M: 13
  },
  "1989": {
    M: 11
  },
  "1990": {
    M: 15
  },
  "1991": {
    M: 17
  },
  "1992": {
    M: 10
  },
  "1993": {
    M: 14
  },
  "1994": {
    M: 14
  },
  "1996": {
    M: 17
  },
  "1997": {
    M: 12
  }
};
const Genesis = {
  "1999": {
    F: 10
  },
  "2000": {
    M: 10
  }
};
const Genevieve = {
  "1954": {
    F: 13
  },
  "1972": {
    F: 13
  },
  "1973": {
    F: 12
  },
  "1974": {
    F: 11
  },
  "1977": {
    F: 12
  },
  "1978": {
    F: 15
  },
  "1980": {
    F: 13
  },
  "1983": {
    F: 11
  },
  "1984": {
    F: 11
  },
  "1985": {
    F: 20
  },
  "1986": {
    F: 26
  },
  "1987": {
    F: 15
  },
  "1988": {
    F: 35
  },
  "1989": {
    F: 23
  },
  "1990": {
    F: 28
  },
  "1991": {
    F: 16
  },
  "1992": {
    F: 22
  },
  "1993": {
    F: 18
  },
  "1994": {
    F: 18
  },
  "1995": {
    F: 17
  },
  "1996": {
    F: 13
  },
  "1997": {
    F: 13
  },
  "1998": {
    F: 13
  },
  "1999": {
    F: 11
  },
  "2000": {
    F: 16
  },
  "2001": {
    F: 11
  },
  "2002": {
    F: 11
  },
  "2003": {
    F: 15
  },
  "2004": {
    F: 13
  },
  "2005": {
    F: 17
  },
  "2006": {
    F: 15
  },
  "2007": {
    F: 13
  },
  "2008": {
    F: 13
  },
  "2009": {
    F: 13
  },
  "2010": {
    F: 24
  },
  "2011": {
    F: 15
  },
  "2012": {
    F: 12
  },
  "2013": {
    F: 17
  },
  "2014": {
    F: 10
  },
  "2015": {
    F: 23
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 17
  },
  "2018": {
    F: 12
  },
  "2019": {
    F: 16
  },
  "2020": {
    F: 20
  },
  "2021": {
    F: 10
  }
};
const Genna = {
  "1985": {
    F: 18
  },
  "1987": {
    F: 15
  }
};
const Geoffery = {
  "1947": {
    M: 10
  },
  "1949": {
    M: 12
  },
  "1958": {
    M: 12
  },
  "1968": {
    M: 11
  }
};
const Geoffrey = {
  "1900": {
    M: 25
  },
  "1901": {
    M: 23
  },
  "1902": {
    M: 18
  },
  "1903": {
    M: 24
  },
  "1904": {
    M: 29
  },
  "1905": {
    M: 27
  },
  "1906": {
    M: 27
  },
  "1907": {
    M: 36
  },
  "1908": {
    M: 38
  },
  "1909": {
    M: 31
  },
  "1910": {
    M: 59
  },
  "1911": {
    M: 35
  },
  "1912": {
    M: 37
  },
  "1913": {
    M: 41
  },
  "1914": {
    M: 46
  },
  "1915": {
    M: 43
  },
  "1916": {
    M: 51
  },
  "1917": {
    M: 31
  },
  "1918": {
    M: 47
  },
  "1919": {
    M: 47
  },
  "1920": {
    M: 54
  },
  "1921": {
    M: 53
  },
  "1922": {
    M: 58
  },
  "1923": {
    M: 57
  },
  "1924": {
    M: 40
  },
  "1925": {
    M: 57
  },
  "1926": {
    M: 61
  },
  "1927": {
    M: 54
  },
  "1928": {
    M: 64
  },
  "1929": {
    M: 53
  },
  "1930": {
    M: 55
  },
  "1931": {
    M: 59
  },
  "1932": {
    M: 52
  },
  "1933": {
    M: 41
  },
  "1934": {
    M: 36
  },
  "1935": {
    M: 46
  },
  "1936": {
    M: 53
  },
  "1937": {
    M: 48
  },
  "1938": {
    M: 56
  },
  "1939": {
    M: 56
  },
  "1940": {
    M: 85
  },
  "1941": {
    M: 90
  },
  "1942": {
    M: 106
  },
  "1943": {
    M: 73
  },
  "1944": {
    M: 117
  },
  "1945": {
    M: 129
  },
  "1946": {
    M: 155
  },
  "1947": {
    M: 173
  },
  "1948": {
    M: 217
  },
  "1949": {
    M: 203
  },
  "1950": {
    M: 214
  },
  "1951": {
    M: 213
  },
  "1952": {
    M: 228
  },
  "1953": {
    M: 234
  },
  "1954": {
    M: 221
  },
  "1955": {
    M: 266
  },
  "1956": {
    M: 245
  },
  "1957": {
    M: 271
  },
  "1958": {
    M: 253
  },
  "1959": {
    M: 262
  },
  "1960": {
    M: 223
  },
  "1961": {
    M: 245
  },
  "1962": {
    M: 220
  },
  "1963": {
    M: 200
  },
  "1964": {
    M: 158
  },
  "1965": {
    M: 140
  },
  "1966": {
    M: 148
  },
  "1967": {
    M: 152
  },
  "1968": {
    M: 155
  },
  "1969": {
    M: 145
  },
  "1970": {
    M: 143
  },
  "1971": {
    M: 142
  },
  "1972": {
    M: 128
  },
  "1973": {
    M: 110
  },
  "1974": {
    M: 79
  },
  "1975": {
    M: 87
  },
  "1976": {
    M: 81
  },
  "1977": {
    M: 65
  },
  "1978": {
    M: 73
  },
  "1979": {
    M: 58
  },
  "1980": {
    M: 45
  },
  "1981": {
    M: 50
  },
  "1982": {
    M: 60
  },
  "1983": {
    M: 58
  },
  "1984": {
    M: 47
  },
  "1985": {
    M: 51
  },
  "1986": {
    M: 39
  },
  "1987": {
    M: 40
  },
  "1988": {
    M: 28
  },
  "1989": {
    M: 25
  },
  "1990": {
    M: 28
  },
  "1991": {
    M: 15
  },
  "1992": {
    M: 25
  },
  "1993": {
    M: 16
  },
  "1994": {
    M: 18
  },
  "1995": {
    M: 12
  },
  "1996": {
    M: 10
  },
  "1997": {
    M: 13
  },
  "1998": {
    M: 10
  },
  "1999": {
    M: 10
  }
};
const George = {
  "1900": {
    M: 387
  },
  "1901": {
    M: 437
  },
  "1902": {
    M: 423
  },
  "1903": {
    M: 404
  },
  "1904": {
    M: 441
  },
  "1905": {
    M: 416
  },
  "1906": {
    M: 425
  },
  "1907": {
    M: 485
  },
  "1908": {
    M: 422
  },
  "1909": {
    M: 427
  },
  "1910": {
    M: 498
  },
  "1911": {
    M: 486
  },
  "1912": {
    M: 429
  },
  "1913": {
    M: 470
  },
  "1914": {
    M: 454
  },
  "1915": {
    M: 448
  },
  "1916": {
    M: 485
  },
  "1917": {
    M: 410
  },
  "1918": {
    M: 382
  },
  "1919": {
    M: 329
  },
  "1920": {
    M: 385
  },
  "1921": {
    M: 358
  },
  "1922": {
    M: 376
  },
  "1923": {
    M: 370
  },
  "1924": {
    M: 323
  },
  "1925": {
    M: 345
  },
  "1926": {
    M: 314
  },
  "1927": {
    M: 331
  },
  "1928": {
    M: 292
  },
  "1929": {
    M: 255
  },
  "1930": {
    M: 236
  },
  "1931": {
    M: 210
  },
  "1932": {
    M: 226
  },
  "1933": {
    M: 220
  },
  "1934": {
    M: 205
  },
  "1935": {
    M: 184
  },
  "1936": {
    M: 187
  },
  "1937": {
    M: 202
  },
  "1938": {
    M: 179
  },
  "1939": {
    M: 194
  },
  "1940": {
    M: 174
  },
  "1941": {
    M: 189
  },
  "1942": {
    M: 162
  },
  "1943": {
    M: 147
  },
  "1944": {
    M: 131
  },
  "1945": {
    M: 144
  },
  "1946": {
    M: 153
  },
  "1947": {
    M: 157
  },
  "1948": {
    M: 144
  },
  "1949": {
    M: 152
  },
  "1950": {
    M: 132
  },
  "1951": {
    M: 127
  },
  "1952": {
    M: 130
  },
  "1953": {
    M: 119
  },
  "1954": {
    M: 148
  },
  "1955": {
    M: 113
  },
  "1956": {
    M: 134
  },
  "1957": {
    M: 113
  },
  "1958": {
    M: 107
  },
  "1959": {
    M: 125
  },
  "1960": {
    M: 118
  },
  "1961": {
    M: 119
  },
  "1962": {
    M: 123
  },
  "1963": {
    M: 100
  },
  "1964": {
    M: 93
  },
  "1965": {
    M: 109
  },
  "1966": {
    M: 94
  },
  "1967": {
    M: 85
  },
  "1968": {
    M: 77
  },
  "1969": {
    M: 103
  },
  "1970": {
    M: 80
  },
  "1971": {
    M: 84
  },
  "1972": {
    M: 81
  },
  "1973": {
    M: 79
  },
  "1974": {
    M: 83
  },
  "1975": {
    M: 66
  },
  "1976": {
    M: 67
  },
  "1977": {
    M: 62
  },
  "1978": {
    M: 91
  },
  "1979": {
    M: 56
  },
  "1980": {
    M: 62
  },
  "1981": {
    M: 70
  },
  "1982": {
    M: 66
  },
  "1983": {
    M: 75
  },
  "1984": {
    M: 92
  },
  "1985": {
    M: 78
  },
  "1986": {
    M: 75
  },
  "1987": {
    M: 80
  },
  "1988": {
    M: 78
  },
  "1989": {
    M: 90
  },
  "1990": {
    M: 115
  },
  "1991": {
    M: 118
  },
  "1992": {
    M: 138
  },
  "1993": {
    M: 128
  },
  "1994": {
    M: 107
  },
  "1995": {
    M: 115
  },
  "1996": {
    M: 139
  },
  "1997": {
    M: 127
  },
  "1998": {
    M: 142
  },
  "1999": {
    M: 126
  },
  "2000": {
    M: 150
  },
  "2001": {
    M: 125
  },
  "2002": {
    M: 149
  },
  "2003": {
    M: 128
  },
  "2004": {
    M: 136
  },
  "2005": {
    M: 152
  },
  "2006": {
    M: 155
  },
  "2007": {
    M: 162
  },
  "2008": {
    M: 156
  },
  "2009": {
    M: 147
  },
  "2010": {
    M: 141
  },
  "2011": {
    M: 158
  },
  "2012": {
    M: 169
  },
  "2013": {
    M: 138
  },
  "2014": {
    M: 161
  },
  "2015": {
    M: 196
  },
  "2016": {
    M: 193
  },
  "2017": {
    M: 234
  },
  "2018": {
    M: 207
  },
  "2019": {
    M: 232
  },
  "2020": {
    M: 197
  },
  "2021": {
    M: 222
  }
};
const Georgia = {
  "1983": {
    F: 10
  },
  "1985": {
    F: 18
  },
  "1986": {
    F: 17
  },
  "1987": {
    F: 17
  },
  "1988": {
    F: 31
  },
  "1989": {
    F: 36
  },
  "1990": {
    F: 57
  },
  "1991": {
    F: 93
  },
  "1992": {
    F: 156
  },
  "1993": {
    F: 234
  },
  "1994": {
    F: 274
  },
  "1995": {
    F: 260
  },
  "1996": {
    F: 313
  },
  "1997": {
    F: 367
  },
  "1998": {
    F: 330
  },
  "1999": {
    F: 349
  },
  "2000": {
    F: 344
  },
  "2001": {
    F: 286
  },
  "2002": {
    F: 223
  },
  "2003": {
    F: 219
  },
  "2004": {
    F: 201
  },
  "2005": {
    F: 178
  },
  "2006": {
    F: 168
  },
  "2007": {
    F: 143
  },
  "2008": {
    F: 144
  },
  "2009": {
    F: 147
  },
  "2010": {
    F: 150
  },
  "2011": {
    F: 145
  },
  "2012": {
    F: 135
  },
  "2013": {
    F: 145
  },
  "2014": {
    F: 130
  },
  "2015": {
    F: 147
  },
  "2016": {
    F: 154
  },
  "2017": {
    F: 134
  },
  "2018": {
    F: 152
  },
  "2019": {
    F: 120
  },
  "2020": {
    F: 93
  },
  "2021": {
    F: 109
  }
};
const Georgie = {
  "2004": {
    F: 12
  },
  "2008": {
    F: 13
  },
  "2011": {
    F: 19
  },
  "2012": {
    F: 11
  },
  "2014": {
    F: 10
  },
  "2015": {
    F: 14
  },
  "2016": {
    F: 11
  },
  "2017": {
    F: 17
  },
  "2018": {
    F: 25
  },
  "2019": {
    F: 19
  },
  "2020": {
    F: 20
  },
  "2021": {
    F: 32
  }
};
const Georgina = {
  "1902": {
    F: 14
  },
  "1903": {
    F: 13
  },
  "1904": {
    F: 14
  },
  "1905": {
    F: 10
  },
  "1906": {
    F: 15
  },
  "1907": {
    F: 13
  },
  "1908": {
    F: 21
  },
  "1909": {
    F: 15
  },
  "1910": {
    F: 14
  },
  "1911": {
    F: 13
  },
  "1912": {
    F: 15
  },
  "1913": {
    F: 16
  },
  "1914": {
    F: 15
  },
  "1915": {
    F: 17
  },
  "1916": {
    F: 14
  },
  "1917": {
    F: 25
  },
  "1918": {
    F: 17
  },
  "1919": {
    F: 14
  },
  "1921": {
    F: 14
  },
  "1922": {
    F: 16
  },
  "1924": {
    F: 16
  },
  "1925": {
    F: 11
  },
  "1928": {
    F: 12
  },
  "1929": {
    F: 14
  },
  "1930": {
    F: 12
  },
  "1933": {
    F: 19
  },
  "1934": {
    F: 10
  },
  "1936": {
    F: 10
  },
  "1938": {
    F: 13
  },
  "1939": {
    F: 11
  },
  "1940": {
    F: 20
  },
  "1941": {
    F: 30
  },
  "1942": {
    F: 10
  },
  "1943": {
    F: 22
  },
  "1944": {
    F: 32
  },
  "1945": {
    F: 29
  },
  "1946": {
    F: 22
  },
  "1947": {
    F: 25
  },
  "1948": {
    F: 27
  },
  "1949": {
    F: 39
  },
  "1950": {
    F: 36
  },
  "1951": {
    F: 30
  },
  "1952": {
    F: 29
  },
  "1953": {
    F: 31
  },
  "1954": {
    F: 27
  },
  "1955": {
    F: 32
  },
  "1956": {
    F: 43
  },
  "1957": {
    F: 30
  },
  "1958": {
    F: 45
  },
  "1959": {
    F: 42
  },
  "1960": {
    F: 45
  },
  "1961": {
    F: 33
  },
  "1962": {
    F: 46
  },
  "1963": {
    F: 41
  },
  "1964": {
    F: 34
  },
  "1965": {
    F: 37
  },
  "1966": {
    F: 43
  },
  "1967": {
    F: 50
  },
  "1968": {
    F: 53
  },
  "1969": {
    F: 37
  },
  "1970": {
    F: 36
  },
  "1971": {
    F: 39
  },
  "1972": {
    F: 48
  },
  "1973": {
    F: 61
  },
  "1974": {
    F: 46
  },
  "1975": {
    F: 45
  },
  "1976": {
    F: 57
  },
  "1977": {
    F: 49
  },
  "1978": {
    F: 57
  },
  "1979": {
    F: 41
  },
  "1980": {
    F: 40
  },
  "1981": {
    F: 30
  },
  "1982": {
    F: 38
  },
  "1983": {
    F: 53
  },
  "1984": {
    F: 46
  },
  "1985": {
    F: 42
  },
  "1986": {
    F: 58
  },
  "1987": {
    F: 46
  },
  "1988": {
    F: 53
  },
  "1989": {
    F: 48
  },
  "1990": {
    F: 52
  },
  "1991": {
    F: 67
  },
  "1992": {
    F: 58
  },
  "1993": {
    F: 65
  },
  "1994": {
    F: 60
  },
  "1995": {
    F: 48
  },
  "1996": {
    F: 54
  },
  "1997": {
    F: 46
  },
  "1998": {
    F: 44
  },
  "1999": {
    F: 30
  },
  "2000": {
    F: 25
  },
  "2001": {
    F: 29
  },
  "2002": {
    F: 27
  },
  "2003": {
    F: 19
  },
  "2004": {
    F: 26
  },
  "2005": {
    F: 20
  },
  "2006": {
    F: 15
  },
  "2007": {
    F: 16
  },
  "2008": {
    F: 15
  },
  "2009": {
    F: 16
  },
  "2010": {
    F: 12
  },
  "2011": {
    F: 13
  },
  "2014": {
    F: 18
  },
  "2015": {
    F: 15
  },
  "2017": {
    F: 19
  },
  "2018": {
    F: 13
  },
  "2019": {
    F: 11
  },
  "2020": {
    F: 11
  }
};
const Gerald = {
  "1900": {
    M: 18
  },
  "1901": {
    M: 11
  },
  "1902": {
    M: 22
  },
  "1904": {
    M: 18
  },
  "1905": {
    M: 20
  },
  "1906": {
    M: 15
  },
  "1907": {
    M: 19
  },
  "1908": {
    M: 17
  },
  "1909": {
    M: 21
  },
  "1910": {
    M: 18
  },
  "1911": {
    M: 22
  },
  "1912": {
    M: 25
  },
  "1913": {
    M: 28
  },
  "1914": {
    M: 26
  },
  "1915": {
    M: 24
  },
  "1916": {
    M: 24
  },
  "1917": {
    M: 20
  },
  "1918": {
    M: 23
  },
  "1919": {
    M: 18
  },
  "1920": {
    M: 30
  },
  "1921": {
    M: 49
  },
  "1922": {
    M: 22
  },
  "1923": {
    M: 39
  },
  "1924": {
    M: 32
  },
  "1925": {
    M: 41
  },
  "1926": {
    M: 41
  },
  "1927": {
    M: 43
  },
  "1928": {
    M: 36
  },
  "1929": {
    M: 36
  },
  "1930": {
    M: 39
  },
  "1931": {
    M: 34
  },
  "1932": {
    M: 49
  },
  "1933": {
    M: 44
  },
  "1934": {
    M: 45
  },
  "1935": {
    M: 43
  },
  "1936": {
    M: 41
  },
  "1937": {
    M: 38
  },
  "1938": {
    M: 32
  },
  "1939": {
    M: 45
  },
  "1940": {
    M: 42
  },
  "1941": {
    M: 44
  },
  "1942": {
    M: 36
  },
  "1943": {
    M: 36
  },
  "1944": {
    M: 44
  },
  "1945": {
    M: 50
  },
  "1946": {
    M: 62
  },
  "1947": {
    M: 48
  },
  "1948": {
    M: 57
  },
  "1949": {
    M: 53
  },
  "1950": {
    M: 32
  },
  "1951": {
    M: 43
  },
  "1952": {
    M: 49
  },
  "1953": {
    M: 60
  },
  "1954": {
    M: 45
  },
  "1955": {
    M: 52
  },
  "1956": {
    M: 43
  },
  "1957": {
    M: 52
  },
  "1958": {
    M: 52
  },
  "1959": {
    M: 49
  },
  "1960": {
    M: 49
  },
  "1961": {
    M: 41
  },
  "1962": {
    M: 35
  },
  "1963": {
    M: 33
  },
  "1964": {
    M: 33
  },
  "1965": {
    M: 23
  },
  "1966": {
    M: 37
  },
  "1967": {
    M: 20
  },
  "1968": {
    M: 14
  },
  "1969": {
    M: 22
  },
  "1970": {
    M: 24
  },
  "1971": {
    M: 23
  },
  "1972": {
    M: 19
  },
  "1973": {
    M: 20
  },
  "1974": {
    M: 18
  },
  "1975": {
    M: 17
  },
  "1976": {
    M: 17
  },
  "1977": {
    M: 12
  },
  "1980": {
    M: 11
  },
  "1981": {
    M: 10
  }
};
const Geraldine = {
  "1920": {
    F: 12
  },
  "1925": {
    F: 10
  },
  "1931": {
    F: 10
  },
  "1938": {
    F: 14
  },
  "1939": {
    F: 16
  },
  "1940": {
    F: 12
  },
  "1941": {
    F: 16
  },
  "1942": {
    F: 10
  },
  "1943": {
    F: 22
  },
  "1944": {
    F: 14
  },
  "1945": {
    F: 17
  },
  "1946": {
    F: 29
  },
  "1947": {
    F: 22
  },
  "1948": {
    F: 23
  },
  "1949": {
    F: 23
  },
  "1950": {
    F: 24
  },
  "1951": {
    F: 24
  },
  "1952": {
    F: 24
  },
  "1953": {
    F: 17
  },
  "1954": {
    F: 26
  },
  "1955": {
    F: 22
  },
  "1956": {
    F: 20
  },
  "1957": {
    F: 20
  },
  "1958": {
    F: 28
  },
  "1959": {
    F: 22
  },
  "1960": {
    F: 15
  },
  "1961": {
    F: 22
  },
  "1962": {
    F: 15
  },
  "1963": {
    F: 19
  },
  "1964": {
    F: 20
  },
  "1965": {
    F: 23
  },
  "1966": {
    F: 23
  },
  "1967": {
    F: 19
  },
  "1968": {
    F: 15
  },
  "1969": {
    F: 24
  },
  "1970": {
    F: 30
  },
  "1971": {
    F: 28
  },
  "1972": {
    F: 18
  },
  "1973": {
    F: 16
  },
  "1974": {
    F: 21
  },
  "1975": {
    F: 19
  },
  "1976": {
    F: 14
  },
  "1977": {
    F: 21
  },
  "1978": {
    F: 16
  },
  "1979": {
    F: 24
  },
  "1980": {
    F: 18
  },
  "1982": {
    F: 11
  }
};
const Gerard = {
  "1931": {
    M: 13
  },
  "1932": {
    M: 11
  },
  "1940": {
    M: 12
  },
  "1941": {
    M: 12
  },
  "1942": {
    M: 14
  },
  "1944": {
    M: 16
  },
  "1945": {
    M: 14
  },
  "1946": {
    M: 13
  },
  "1947": {
    M: 26
  },
  "1948": {
    M: 15
  },
  "1949": {
    M: 24
  },
  "1950": {
    M: 21
  },
  "1951": {
    M: 35
  },
  "1952": {
    M: 35
  },
  "1953": {
    M: 41
  },
  "1954": {
    M: 60
  },
  "1955": {
    M: 56
  },
  "1956": {
    M: 60
  },
  "1957": {
    M: 63
  },
  "1958": {
    M: 61
  },
  "1959": {
    M: 61
  },
  "1960": {
    M: 64
  },
  "1961": {
    M: 57
  },
  "1962": {
    M: 74
  },
  "1963": {
    M: 54
  },
  "1964": {
    M: 56
  },
  "1965": {
    M: 60
  },
  "1966": {
    M: 53
  },
  "1967": {
    M: 44
  },
  "1968": {
    M: 48
  },
  "1969": {
    M: 29
  },
  "1970": {
    M: 31
  },
  "1971": {
    M: 26
  },
  "1972": {
    M: 21
  },
  "1973": {
    M: 29
  },
  "1974": {
    M: 34
  },
  "1975": {
    M: 30
  },
  "1976": {
    M: 24
  },
  "1977": {
    M: 24
  },
  "1978": {
    M: 23
  },
  "1979": {
    M: 14
  },
  "1980": {
    M: 16
  },
  "1982": {
    M: 13
  },
  "1983": {
    M: 14
  },
  "1984": {
    M: 23
  },
  "1985": {
    M: 16
  },
  "1986": {
    M: 11
  },
  "1987": {
    M: 12
  },
  "1988": {
    M: 12
  },
  "1992": {
    M: 14
  },
  "1995": {
    M: 10
  }
};
const Gerardus = {
  "1958": {
    M: 11
  }
};
const Gertrude = {
  "1900": {
    F: 51
  },
  "1901": {
    F: 51
  },
  "1902": {
    F: 45
  },
  "1903": {
    F: 54
  },
  "1904": {
    F: 49
  },
  "1905": {
    F: 49
  },
  "1906": {
    F: 56
  },
  "1907": {
    F: 47
  },
  "1908": {
    F: 45
  },
  "1909": {
    F: 48
  },
  "1910": {
    F: 50
  },
  "1911": {
    F: 37
  },
  "1912": {
    F: 41
  },
  "1913": {
    F: 32
  },
  "1914": {
    F: 53
  },
  "1915": {
    F: 34
  },
  "1916": {
    F: 39
  },
  "1917": {
    F: 38
  },
  "1918": {
    F: 22
  },
  "1919": {
    F: 34
  },
  "1920": {
    F: 30
  },
  "1921": {
    F: 23
  },
  "1922": {
    F: 30
  },
  "1923": {
    F: 19
  },
  "1924": {
    F: 11
  },
  "1925": {
    F: 17
  },
  "1927": {
    F: 11
  },
  "1928": {
    F: 14
  },
  "1929": {
    F: 11
  },
  "1930": {
    F: 10
  },
  "1932": {
    F: 11
  }
};
const Gia = {
  "2014": {
    F: 12
  },
  "2015": {
    F: 10
  },
  "2020": {
    F: 20
  },
  "2021": {
    F: 16
  }
};
const Gianna = {
  "2018": {
    F: 13
  },
  "2020": {
    F: 24
  },
  "2021": {
    F: 24
  }
};
const Gianni = {
  "2007": {
    M: 11
  }
};
const Gideon = {
  "2017": {
    M: 11
  },
  "2021": {
    M: 11
  }
};
const Gilbert = {
  "1900": {
    M: 28
  },
  "1901": {
    M: 29
  },
  "1902": {
    M: 28
  },
  "1903": {
    M: 27
  },
  "1904": {
    M: 26
  },
  "1905": {
    M: 28
  },
  "1906": {
    M: 38
  },
  "1907": {
    M: 37
  },
  "1908": {
    M: 42
  },
  "1909": {
    M: 36
  },
  "1910": {
    M: 33
  },
  "1911": {
    M: 27
  },
  "1912": {
    M: 33
  },
  "1913": {
    M: 31
  },
  "1914": {
    M: 28
  },
  "1915": {
    M: 29
  },
  "1916": {
    M: 34
  },
  "1917": {
    M: 28
  },
  "1918": {
    M: 26
  },
  "1919": {
    M: 32
  },
  "1920": {
    M: 33
  },
  "1921": {
    M: 27
  },
  "1922": {
    M: 34
  },
  "1923": {
    M: 31
  },
  "1924": {
    M: 27
  },
  "1925": {
    M: 18
  },
  "1926": {
    M: 17
  },
  "1927": {
    M: 26
  },
  "1928": {
    M: 24
  },
  "1929": {
    M: 19
  },
  "1930": {
    M: 26
  },
  "1931": {
    M: 16
  },
  "1932": {
    M: 19
  },
  "1933": {
    M: 23
  },
  "1934": {
    M: 15
  },
  "1935": {
    M: 22
  },
  "1936": {
    M: 22
  },
  "1937": {
    M: 16
  },
  "1938": {
    M: 16
  },
  "1940": {
    M: 13
  },
  "1941": {
    M: 25
  },
  "1942": {
    M: 15
  },
  "1943": {
    M: 15
  },
  "1944": {
    M: 17
  },
  "1945": {
    M: 10
  },
  "1947": {
    M: 12
  },
  "1948": {
    M: 28
  },
  "1949": {
    M: 20
  },
  "1950": {
    M: 21
  },
  "1951": {
    M: 15
  },
  "1952": {
    M: 15
  },
  "1953": {
    M: 10
  },
  "1954": {
    M: 18
  },
  "1955": {
    M: 14
  },
  "1956": {
    M: 15
  },
  "1957": {
    M: 11
  },
  "1958": {
    M: 12
  },
  "1959": {
    M: 11
  },
  "1960": {
    M: 12
  },
  "1961": {
    M: 12
  },
  "1963": {
    M: 17
  }
};
const Gillian = {
  "1932": {
    F: 12
  },
  "1934": {
    F: 16
  },
  "1935": {
    F: 27
  },
  "1936": {
    F: 28
  },
  "1937": {
    F: 37
  },
  "1938": {
    F: 28
  },
  "1939": {
    F: 60
  },
  "1940": {
    F: 62
  },
  "1941": {
    F: 79
  },
  "1942": {
    F: 82
  },
  "1943": {
    F: 61
  },
  "1944": {
    F: 57
  },
  "1945": {
    F: 90
  },
  "1946": {
    F: 94
  },
  "1947": {
    F: 93
  },
  "1948": {
    F: 79
  },
  "1949": {
    F: 103
  },
  "1950": {
    F: 91
  },
  "1951": {
    F: 76
  },
  "1952": {
    F: 95
  },
  "1953": {
    F: 70
  },
  "1954": {
    F: 91
  },
  "1955": {
    F: 99
  },
  "1956": {
    F: 105
  },
  "1957": {
    F: 101
  },
  "1958": {
    F: 118
  },
  "1959": {
    F: 120
  },
  "1960": {
    F: 114
  },
  "1961": {
    F: 122
  },
  "1962": {
    F: 127
  },
  "1963": {
    F: 98
  },
  "1964": {
    F: 75
  },
  "1965": {
    F: 68
  },
  "1966": {
    F: 70
  },
  "1967": {
    F: 78
  },
  "1968": {
    F: 46
  },
  "1969": {
    F: 63
  },
  "1970": {
    F: 45
  },
  "1971": {
    F: 46
  },
  "1972": {
    F: 39
  },
  "1973": {
    F: 36
  },
  "1974": {
    F: 30
  },
  "1975": {
    F: 30
  },
  "1976": {
    F: 24
  },
  "1977": {
    F: 11
  },
  "1978": {
    F: 10
  },
  "1980": {
    F: 12
  },
  "1981": {
    F: 16
  }
};
const Gina = {
  "1957": {
    F: 11
  },
  "1959": {
    F: 17
  },
  "1960": {
    F: 14
  },
  "1961": {
    F: 10
  },
  "1962": {
    F: 23
  },
  "1963": {
    F: 27
  },
  "1964": {
    F: 27
  },
  "1965": {
    F: 30
  },
  "1966": {
    F: 33
  },
  "1967": {
    F: 49
  },
  "1968": {
    F: 55
  },
  "1969": {
    F: 53
  },
  "1970": {
    F: 60
  },
  "1971": {
    F: 65
  },
  "1972": {
    F: 68
  },
  "1973": {
    F: 82
  },
  "1974": {
    F: 57
  },
  "1975": {
    F: 54
  },
  "1976": {
    F: 41
  },
  "1977": {
    F: 29
  },
  "1978": {
    F: 33
  },
  "1979": {
    F: 29
  },
  "1980": {
    F: 38
  },
  "1981": {
    F: 44
  },
  "1982": {
    F: 29
  },
  "1983": {
    F: 28
  },
  "1984": {
    F: 29
  },
  "1985": {
    F: 53
  },
  "1986": {
    F: 47
  },
  "1987": {
    F: 51
  },
  "1988": {
    F: 38
  },
  "1989": {
    F: 35
  },
  "1990": {
    F: 41
  },
  "1991": {
    F: 28
  },
  "1992": {
    F: 32
  },
  "1993": {
    F: 19
  },
  "1995": {
    F: 24
  },
  "1996": {
    F: 19
  },
  "1998": {
    F: 13
  },
  "1999": {
    F: 12
  },
  "2000": {
    F: 18
  },
  "2005": {
    F: 12
  }
};
const Giovanni = {
  "1998": {
    M: 10
  },
  "2002": {
    M: 12
  },
  "2006": {
    M: 13
  },
  "2007": {
    M: 14
  },
  "2021": {
    M: 10
  }
};
const Giselle = {
  "2007": {
    F: 12
  },
  "2008": {
    F: 14
  }
};
const Gladys = {
  "1900": {
    F: 180
  },
  "1901": {
    F: 194
  },
  "1902": {
    F: 203
  },
  "1903": {
    F: 163
  },
  "1904": {
    F: 193
  },
  "1905": {
    F: 211
  },
  "1906": {
    F: 227
  },
  "1907": {
    F: 211
  },
  "1908": {
    F: 238
  },
  "1909": {
    F: 198
  },
  "1910": {
    F: 217
  },
  "1911": {
    F: 191
  },
  "1912": {
    F: 201
  },
  "1913": {
    F: 174
  },
  "1914": {
    F: 171
  },
  "1915": {
    F: 161
  },
  "1916": {
    F: 173
  },
  "1917": {
    F: 172
  },
  "1918": {
    F: 143
  },
  "1919": {
    F: 134
  },
  "1920": {
    F: 149
  },
  "1921": {
    F: 151
  },
  "1922": {
    F: 148
  },
  "1923": {
    F: 130
  },
  "1924": {
    F: 97
  },
  "1925": {
    F: 89
  },
  "1926": {
    F: 104
  },
  "1927": {
    F: 75
  },
  "1928": {
    F: 71
  },
  "1929": {
    F: 73
  },
  "1930": {
    F: 63
  },
  "1931": {
    F: 54
  },
  "1932": {
    F: 58
  },
  "1933": {
    F: 46
  },
  "1934": {
    F: 45
  },
  "1935": {
    F: 35
  },
  "1936": {
    F: 39
  },
  "1937": {
    F: 24
  },
  "1938": {
    F: 22
  },
  "1939": {
    F: 25
  },
  "1940": {
    F: 28
  },
  "1941": {
    F: 19
  },
  "1942": {
    F: 21
  },
  "1943": {
    F: 12
  },
  "1944": {
    F: 15
  },
  "1946": {
    F: 21
  },
  "1947": {
    F: 20
  },
  "1949": {
    F: 12
  },
  "1950": {
    F: 12
  },
  "1952": {
    F: 11
  },
  "1953": {
    F: 15
  },
  "1957": {
    F: 10
  },
  "1984": {
    F: 17
  }
};
const Glen = {
  "1942": {
    M: 10
  },
  "1944": {
    M: 13
  },
  "1945": {
    M: 12
  },
  "1946": {
    M: 15
  },
  "1947": {
    M: 13
  },
  "1948": {
    M: 11
  },
  "1949": {
    M: 19
  },
  "1950": {
    M: 16
  },
  "1951": {
    M: 23
  },
  "1952": {
    M: 12
  },
  "1953": {
    M: 19
  },
  "1954": {
    M: 18
  },
  "1955": {
    M: 37
  },
  "1956": {
    M: 37
  },
  "1957": {
    M: 36
  },
  "1958": {
    M: 42
  },
  "1959": {
    M: 48
  },
  "1960": {
    M: 42
  },
  "1961": {
    M: 56
  },
  "1962": {
    M: 40
  },
  "1963": {
    M: 68
  },
  "1964": {
    M: 97
  },
  "1965": {
    M: 82
  },
  "1966": {
    M: 68
  },
  "1967": {
    M: 105
  },
  "1968": {
    M: 119
  },
  "1969": {
    M: 126
  },
  "1970": {
    M: 178
  },
  "1971": {
    M: 168
  },
  "1972": {
    M: 209
  },
  "1973": {
    M: 136
  },
  "1974": {
    M: 191
  },
  "1975": {
    M: 203
  },
  "1976": {
    M: 194
  },
  "1977": {
    M: 145
  },
  "1978": {
    M: 117
  },
  "1979": {
    M: 92
  },
  "1980": {
    M: 72
  },
  "1981": {
    M: 78
  },
  "1982": {
    M: 71
  },
  "1983": {
    M: 64
  },
  "1984": {
    M: 68
  },
  "1985": {
    M: 57
  },
  "1986": {
    M: 43
  },
  "1987": {
    M: 42
  },
  "1988": {
    M: 31
  },
  "1989": {
    M: 31
  },
  "1990": {
    M: 51
  },
  "1991": {
    M: 34
  },
  "1992": {
    M: 16
  },
  "1993": {
    M: 15
  },
  "1994": {
    M: 12
  },
  "1995": {
    M: 11
  },
  "1996": {
    M: 17
  },
  "1997": {
    M: 19
  }
};
const Glenda = {
  "1935": {
    F: 10
  },
  "1938": {
    F: 15
  },
  "1939": {
    F: 33
  },
  "1940": {
    F: 34
  },
  "1941": {
    F: 31
  },
  "1942": {
    F: 28
  },
  "1943": {
    F: 21
  },
  "1944": {
    F: 34
  },
  "1945": {
    F: 34
  },
  "1946": {
    F: 34
  },
  "1947": {
    F: 28
  },
  "1948": {
    F: 32
  },
  "1949": {
    F: 44
  },
  "1950": {
    F: 64
  },
  "1951": {
    F: 77
  },
  "1952": {
    F: 93
  },
  "1953": {
    F: 101
  },
  "1954": {
    F: 105
  },
  "1955": {
    F: 130
  },
  "1956": {
    F: 139
  },
  "1957": {
    F: 107
  },
  "1958": {
    F: 101
  },
  "1959": {
    F: 112
  },
  "1960": {
    F: 86
  },
  "1961": {
    F: 80
  },
  "1962": {
    F: 61
  },
  "1963": {
    F: 58
  },
  "1964": {
    F: 50
  },
  "1965": {
    F: 40
  },
  "1966": {
    F: 45
  },
  "1967": {
    F: 37
  },
  "1968": {
    F: 24
  },
  "1969": {
    F: 33
  },
  "1970": {
    F: 34
  },
  "1971": {
    F: 14
  },
  "1972": {
    F: 16
  },
  "1973": {
    F: 24
  },
  "1974": {
    F: 18
  },
  "1975": {
    F: 16
  }
};
const Glenice = {
  "1938": {
    F: 10
  },
  "1941": {
    F: 12
  },
  "1942": {
    F: 14
  },
  "1944": {
    F: 13
  },
  "1947": {
    F: 12
  },
  "1951": {
    F: 11
  },
  "1952": {
    F: 13
  },
  "1953": {
    F: 14
  },
  "1954": {
    F: 12
  },
  "1957": {
    F: 11
  }
};
const Glenis = {
  "1937": {
    F: 11
  },
  "1938": {
    F: 16
  },
  "1939": {
    F: 17
  },
  "1940": {
    F: 19
  },
  "1941": {
    F: 32
  },
  "1942": {
    F: 29
  },
  "1943": {
    F: 29
  },
  "1944": {
    F: 28
  },
  "1945": {
    F: 29
  },
  "1946": {
    F: 29
  },
  "1947": {
    F: 31
  },
  "1948": {
    F: 46
  },
  "1949": {
    F: 31
  },
  "1950": {
    F: 27
  },
  "1951": {
    F: 36
  },
  "1952": {
    F: 42
  },
  "1953": {
    F: 38
  },
  "1954": {
    F: 37
  },
  "1955": {
    F: 37
  },
  "1956": {
    F: 23
  },
  "1957": {
    F: 25
  },
  "1958": {
    F: 12
  },
  "1959": {
    F: 17
  },
  "1960": {
    F: 13
  },
  "1961": {
    F: 16
  },
  "1962": {
    F: 11
  },
  "1963": {
    F: 13
  }
};
const Glenise = {
  "1941": {
    F: 10
  },
  "1943": {
    F: 10
  }
};
const Glenn = {
  "1942": {
    M: 10
  },
  "1944": {
    M: 11
  },
  "1945": {
    M: 18
  },
  "1946": {
    M: 26
  },
  "1947": {
    M: 25
  },
  "1948": {
    M: 37
  },
  "1949": {
    M: 47
  },
  "1950": {
    M: 43
  },
  "1951": {
    M: 54
  },
  "1952": {
    M: 47
  },
  "1953": {
    M: 39
  },
  "1954": {
    M: 71
  },
  "1955": {
    M: 95
  },
  "1956": {
    M: 86
  },
  "1957": {
    M: 96
  },
  "1958": {
    M: 79
  },
  "1959": {
    M: 80
  },
  "1960": {
    M: 78
  },
  "1961": {
    M: 101
  },
  "1962": {
    M: 147
  },
  "1963": {
    M: 209
  },
  "1964": {
    M: 186
  },
  "1965": {
    M: 164
  },
  "1966": {
    M: 154
  },
  "1967": {
    M: 160
  },
  "1968": {
    M: 211
  },
  "1969": {
    M: 204
  },
  "1970": {
    M: 221
  },
  "1971": {
    M: 241
  },
  "1972": {
    M: 210
  },
  "1973": {
    M: 205
  },
  "1974": {
    M: 230
  },
  "1975": {
    M: 167
  },
  "1976": {
    M: 148
  },
  "1977": {
    M: 112
  },
  "1978": {
    M: 83
  },
  "1979": {
    M: 71
  },
  "1980": {
    M: 65
  },
  "1981": {
    M: 59
  },
  "1982": {
    M: 42
  },
  "1983": {
    M: 51
  },
  "1984": {
    M: 46
  },
  "1985": {
    M: 37
  },
  "1986": {
    M: 26
  },
  "1987": {
    M: 35
  },
  "1988": {
    M: 30
  },
  "1989": {
    M: 28
  },
  "1990": {
    M: 21
  },
  "1991": {
    M: 20
  },
  "1992": {
    M: 23
  },
  "1993": {
    M: 13
  },
  "1994": {
    M: 12
  },
  "1995": {
    M: 12
  },
  "1999": {
    M: 10
  }
};
const Glennis = {
  "1939": {
    F: 12
  },
  "1940": {
    F: 24
  },
  "1941": {
    F: 18
  },
  "1942": {
    F: 18
  },
  "1943": {
    F: 35
  },
  "1944": {
    F: 25
  },
  "1945": {
    F: 23
  },
  "1946": {
    F: 43
  },
  "1947": {
    F: 42
  },
  "1948": {
    F: 21
  },
  "1949": {
    F: 25
  },
  "1950": {
    F: 24
  },
  "1951": {
    F: 21
  },
  "1952": {
    F: 20
  },
  "1953": {
    F: 21
  },
  "1954": {
    F: 17
  },
  "1955": {
    F: 17
  },
  "1956": {
    F: 15
  },
  "1957": {
    F: 11
  },
  "1958": {
    F: 10
  },
  "1959": {
    F: 12
  },
  "1960": {
    F: 10
  },
  "1961": {
    F: 10
  },
  "1964": {
    F: 14
  }
};
const Glennys = {
  "1944": {
    F: 11
  },
  "1945": {
    F: 12
  },
  "1948": {
    F: 14
  }
};
const Glenys = {
  "1935": {
    F: 13
  },
  "1936": {
    F: 14
  },
  "1937": {
    F: 16
  },
  "1938": {
    F: 18
  },
  "1939": {
    F: 24
  },
  "1940": {
    F: 30
  },
  "1941": {
    F: 65
  },
  "1942": {
    F: 69
  },
  "1943": {
    F: 66
  },
  "1944": {
    F: 100
  },
  "1945": {
    F: 88
  },
  "1946": {
    F: 83
  },
  "1947": {
    F: 82
  },
  "1948": {
    F: 102
  },
  "1949": {
    F: 91
  },
  "1950": {
    F: 81
  },
  "1951": {
    F: 99
  },
  "1952": {
    F: 78
  },
  "1953": {
    F: 86
  },
  "1954": {
    F: 91
  },
  "1955": {
    F: 81
  },
  "1956": {
    F: 67
  },
  "1957": {
    F: 87
  },
  "1958": {
    F: 84
  },
  "1959": {
    F: 66
  },
  "1960": {
    F: 65
  },
  "1961": {
    F: 44
  },
  "1962": {
    F: 39
  },
  "1963": {
    F: 33
  },
  "1964": {
    F: 32
  },
  "1965": {
    F: 18
  },
  "1966": {
    F: 27
  },
  "1967": {
    F: 17
  },
  "1968": {
    F: 15
  },
  "1969": {
    F: 10
  },
  "1972": {
    F: 18
  }
};
const Gloria = {
  "1917": {
    F: 12
  },
  "1918": {
    F: 14
  },
  "1919": {
    F: 24
  },
  "1920": {
    F: 17
  },
  "1921": {
    F: 30
  },
  "1922": {
    F: 31
  },
  "1923": {
    F: 39
  },
  "1924": {
    F: 35
  },
  "1925": {
    F: 52
  },
  "1926": {
    F: 42
  },
  "1927": {
    F: 47
  },
  "1928": {
    F: 43
  },
  "1929": {
    F: 25
  },
  "1930": {
    F: 39
  },
  "1931": {
    F: 36
  },
  "1932": {
    F: 37
  },
  "1933": {
    F: 31
  },
  "1934": {
    F: 32
  },
  "1935": {
    F: 39
  },
  "1936": {
    F: 28
  },
  "1937": {
    F: 46
  },
  "1938": {
    F: 48
  },
  "1939": {
    F: 43
  },
  "1940": {
    F: 89
  },
  "1941": {
    F: 85
  },
  "1942": {
    F: 92
  },
  "1943": {
    F: 70
  },
  "1944": {
    F: 87
  },
  "1945": {
    F: 67
  },
  "1946": {
    F: 95
  },
  "1947": {
    F: 95
  },
  "1948": {
    F: 79
  },
  "1949": {
    F: 86
  },
  "1950": {
    F: 107
  },
  "1951": {
    F: 77
  },
  "1952": {
    F: 60
  },
  "1953": {
    F: 52
  },
  "1954": {
    F: 67
  },
  "1955": {
    F: 60
  },
  "1956": {
    F: 48
  },
  "1957": {
    F: 50
  },
  "1958": {
    F: 42
  },
  "1959": {
    F: 37
  },
  "1960": {
    F: 35
  },
  "1961": {
    F: 31
  },
  "1962": {
    F: 18
  },
  "1963": {
    F: 27
  },
  "1964": {
    F: 21
  },
  "1965": {
    F: 21
  },
  "1966": {
    F: 15
  },
  "1967": {
    F: 11
  },
  "1968": {
    F: 11
  },
  "1969": {
    F: 19
  },
  "1971": {
    F: 12
  },
  "1972": {
    F: 10
  },
  "1973": {
    F: 14
  },
  "1974": {
    F: 11
  },
  "1975": {
    F: 14
  },
  "1977": {
    F: 13
  },
  "1984": {
    F: 10
  },
  "1985": {
    F: 12
  },
  "1988": {
    F: 11
  },
  "1990": {
    F: 17
  },
  "1991": {
    F: 10
  },
  "1992": {
    F: 12
  },
  "1994": {
    F: 16
  },
  "1996": {
    F: 10
  },
  "1997": {
    F: 12
  },
  "1998": {
    F: 15
  },
  "1999": {
    F: 10
  },
  "2000": {
    F: 11
  },
  "2002": {
    F: 13
  },
  "2003": {
    F: 12
  },
  "2004": {
    F: 12
  },
  "2005": {
    F: 10
  },
  "2006": {
    F: 10
  },
  "2007": {
    F: 15
  },
  "2008": {
    F: 10
  },
  "2009": {
    F: 11
  },
  "2010": {
    F: 20
  },
  "2012": {
    F: 14
  },
  "2013": {
    F: 11
  },
  "2014": {
    F: 10
  },
  "2015": {
    F: 11
  },
  "2017": {
    F: 14
  },
  "2018": {
    F: 12
  },
  "2019": {
    F: 11
  },
  "2020": {
    F: 11
  }
};
const Glynis = {
  "1948": {
    F: 10
  },
  "1951": {
    F: 19
  },
  "1952": {
    F: 13
  },
  "1953": {
    F: 21
  },
  "1954": {
    F: 22
  },
  "1955": {
    F: 10
  },
  "1956": {
    F: 22
  },
  "1957": {
    F: 11
  },
  "1958": {
    F: 12
  }
};
const Godfrey = {
  "1907": {
    M: 13
  },
  "1912": {
    M: 15
  },
  "1917": {
    M: 11
  },
  "1919": {
    M: 12
  },
  "1928": {
    M: 10
  },
  "1948": {
    M: 11
  }
};
const Goldie = {
  "2019": {
    F: 10
  },
  "2020": {
    F: 12
  },
  "2021": {
    F: 26
  }
};
const Gordon = {
  "1900": {
    M: 97
  },
  "1901": {
    M: 106
  },
  "1902": {
    M: 86
  },
  "1903": {
    M: 104
  },
  "1904": {
    M: 106
  },
  "1905": {
    M: 116
  },
  "1906": {
    M: 125
  },
  "1907": {
    M: 115
  },
  "1908": {
    M: 133
  },
  "1909": {
    M: 169
  },
  "1910": {
    M: 153
  },
  "1911": {
    M: 143
  },
  "1912": {
    M: 185
  },
  "1913": {
    M: 170
  },
  "1914": {
    M: 196
  },
  "1915": {
    M: 177
  },
  "1916": {
    M: 175
  },
  "1917": {
    M: 155
  },
  "1918": {
    M: 176
  },
  "1919": {
    M: 174
  },
  "1920": {
    M: 213
  },
  "1921": {
    M: 218
  },
  "1922": {
    M: 210
  },
  "1923": {
    M: 198
  },
  "1924": {
    M: 185
  },
  "1925": {
    M: 242
  },
  "1926": {
    M: 254
  },
  "1927": {
    M: 205
  },
  "1928": {
    M: 213
  },
  "1929": {
    M: 165
  },
  "1930": {
    M: 173
  },
  "1931": {
    M: 157
  },
  "1932": {
    M: 139
  },
  "1933": {
    M: 120
  },
  "1934": {
    M: 130
  },
  "1935": {
    M: 121
  },
  "1936": {
    M: 122
  },
  "1937": {
    M: 116
  },
  "1938": {
    M: 127
  },
  "1939": {
    M: 118
  },
  "1940": {
    M: 113
  },
  "1941": {
    M: 134
  },
  "1942": {
    M: 131
  },
  "1943": {
    M: 124
  },
  "1944": {
    M: 118
  },
  "1945": {
    M: 123
  },
  "1946": {
    M: 134
  },
  "1947": {
    M: 133
  },
  "1948": {
    M: 121
  },
  "1949": {
    M: 137
  },
  "1950": {
    M: 124
  },
  "1951": {
    M: 120
  },
  "1952": {
    M: 118
  },
  "1953": {
    M: 125
  },
  "1954": {
    M: 133
  },
  "1955": {
    M: 118
  },
  "1956": {
    M: 135
  },
  "1957": {
    M: 119
  },
  "1958": {
    M: 110
  },
  "1959": {
    M: 117
  },
  "1960": {
    M: 98
  },
  "1961": {
    M: 118
  },
  "1962": {
    M: 116
  },
  "1963": {
    M: 92
  },
  "1964": {
    M: 73
  },
  "1965": {
    M: 79
  },
  "1966": {
    M: 70
  },
  "1967": {
    M: 63
  },
  "1968": {
    M: 52
  },
  "1969": {
    M: 38
  },
  "1970": {
    M: 48
  },
  "1971": {
    M: 46
  },
  "1972": {
    M: 42
  },
  "1973": {
    M: 36
  },
  "1974": {
    M: 28
  },
  "1975": {
    M: 26
  },
  "1976": {
    M: 20
  },
  "1977": {
    M: 27
  },
  "1978": {
    M: 20
  },
  "1979": {
    M: 31
  },
  "1980": {
    M: 25
  },
  "1981": {
    M: 17
  },
  "1982": {
    M: 25
  },
  "1983": {
    M: 23
  },
  "1984": {
    M: 11
  },
  "1985": {
    M: 16
  },
  "1986": {
    M: 15
  },
  "1987": {
    M: 11
  },
  "1988": {
    M: 17
  },
  "1989": {
    M: 11
  },
  "1990": {
    M: 13
  },
  "1991": {
    M: 13
  },
  "1992": {
    M: 12
  },
  "1995": {
    M: 13
  },
  "1996": {
    M: 12
  },
  "1997": {
    M: 11
  },
  "2000": {
    M: 11
  },
  "2008": {
    M: 14
  }
};
const Grace = {
  "1900": {
    F: 77
  },
  "1901": {
    F: 99
  },
  "1902": {
    F: 91
  },
  "1903": {
    F: 84
  },
  "1904": {
    F: 76
  },
  "1905": {
    F: 96
  },
  "1906": {
    F: 112
  },
  "1907": {
    F: 101
  },
  "1908": {
    F: 99
  },
  "1909": {
    F: 97
  },
  "1910": {
    F: 94
  },
  "1911": {
    F: 80
  },
  "1912": {
    F: 102
  },
  "1913": {
    F: 89
  },
  "1914": {
    F: 91
  },
  "1915": {
    F: 99
  },
  "1916": {
    F: 87
  },
  "1917": {
    F: 78
  },
  "1918": {
    F: 91
  },
  "1919": {
    F: 70
  },
  "1920": {
    F: 66
  },
  "1921": {
    F: 68
  },
  "1922": {
    F: 60
  },
  "1923": {
    F: 63
  },
  "1924": {
    F: 47
  },
  "1925": {
    F: 58
  },
  "1926": {
    F: 61
  },
  "1927": {
    F: 33
  },
  "1928": {
    F: 28
  },
  "1929": {
    F: 32
  },
  "1930": {
    F: 36
  },
  "1931": {
    F: 29
  },
  "1932": {
    F: 42
  },
  "1933": {
    F: 25
  },
  "1934": {
    F: 23
  },
  "1935": {
    F: 31
  },
  "1936": {
    F: 28
  },
  "1937": {
    F: 34
  },
  "1938": {
    F: 21
  },
  "1939": {
    F: 21
  },
  "1940": {
    F: 24
  },
  "1941": {
    F: 26
  },
  "1942": {
    F: 12
  },
  "1943": {
    F: 21
  },
  "1944": {
    F: 12
  },
  "1945": {
    F: 12
  },
  "1946": {
    F: 23
  },
  "1947": {
    F: 17
  },
  "1948": {
    F: 14
  },
  "1949": {
    F: 14
  },
  "1950": {
    F: 15
  },
  "1951": {
    F: 14
  },
  "1953": {
    F: 15
  },
  "1955": {
    F: 11
  },
  "1956": {
    F: 24
  },
  "1957": {
    F: 13
  },
  "1958": {
    F: 22
  },
  "1959": {
    F: 24
  },
  "1960": {
    F: 20
  },
  "1961": {
    F: 24
  },
  "1962": {
    F: 19
  },
  "1963": {
    F: 12
  },
  "1964": {
    F: 10
  },
  "1965": {
    F: 13
  },
  "1967": {
    F: 12
  },
  "1968": {
    F: 12
  },
  "1971": {
    F: 11
  },
  "1972": {
    F: 13
  },
  "1974": {
    F: 11
  },
  "1975": {
    F: 17
  },
  "1977": {
    F: 11
  },
  "1978": {
    F: 11
  },
  "1979": {
    F: 15
  },
  "1980": {
    F: 13
  },
  "1981": {
    F: 10
  },
  "1982": {
    F: 21
  },
  "1983": {
    F: 25
  },
  "1984": {
    F: 32
  },
  "1985": {
    F: 28
  },
  "1986": {
    F: 30
  },
  "1987": {
    F: 76
  },
  "1988": {
    F: 65
  },
  "1989": {
    F: 80
  },
  "1990": {
    F: 79
  },
  "1991": {
    F: 119
  },
  "1992": {
    F: 162
  },
  "1993": {
    F: 135
  },
  "1994": {
    F: 160
  },
  "1995": {
    F: 178
  },
  "1996": {
    F: 178
  },
  "1997": {
    F: 193
  },
  "1998": {
    F: 248
  },
  "1999": {
    F: 293
  },
  "2000": {
    F: 298
  },
  "2001": {
    F: 302
  },
  "2002": {
    F: 284
  },
  "2003": {
    F: 249
  },
  "2004": {
    F: 261
  },
  "2005": {
    F: 272
  },
  "2006": {
    F: 261
  },
  "2007": {
    F: 254
  },
  "2008": {
    F: 236
  },
  "2009": {
    F: 214
  },
  "2010": {
    F: 192
  },
  "2011": {
    F: 247
  },
  "2012": {
    F: 186
  },
  "2013": {
    F: 192
  },
  "2014": {
    F: 182
  },
  "2015": {
    F: 194
  },
  "2016": {
    F: 159
  },
  "2017": {
    F: 152
  },
  "2018": {
    F: 164
  },
  "2019": {
    F: 181
  },
  "2020": {
    F: 146
  },
  "2021": {
    F: 144
  }
};
const Gracie = {
  "2003": {
    F: 13
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 13
  },
  "2006": {
    F: 11
  },
  "2007": {
    F: 21
  },
  "2008": {
    F: 17
  },
  "2009": {
    F: 21
  },
  "2010": {
    F: 13
  },
  "2011": {
    F: 13
  },
  "2012": {
    F: 21
  },
  "2013": {
    F: 12
  },
  "2014": {
    F: 19
  },
  "2015": {
    F: 18
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 16
  },
  "2018": {
    F: 25
  },
  "2019": {
    F: 14
  },
  "2020": {
    F: 28
  },
  "2021": {
    F: 35
  }
};
const Graeme = {
  "1921": {
    M: 12
  },
  "1922": {
    M: 12
  },
  "1923": {
    M: 14
  },
  "1924": {
    M: 19
  },
  "1925": {
    M: 16
  },
  "1926": {
    M: 28
  },
  "1927": {
    M: 24
  },
  "1928": {
    M: 39
  },
  "1929": {
    M: 47
  },
  "1930": {
    M: 63
  },
  "1931": {
    M: 69
  },
  "1932": {
    M: 93
  },
  "1933": {
    M: 96
  },
  "1934": {
    M: 102
  },
  "1935": {
    M: 123
  },
  "1936": {
    M: 151
  },
  "1937": {
    M: 162
  },
  "1938": {
    M: 192
  },
  "1939": {
    M: 194
  },
  "1940": {
    M: 245
  },
  "1941": {
    M: 275
  },
  "1942": {
    M: 276
  },
  "1943": {
    M: 257
  },
  "1944": {
    M: 262
  },
  "1945": {
    M: 296
  },
  "1946": {
    M: 376
  },
  "1947": {
    M: 374
  },
  "1948": {
    M: 404
  },
  "1949": {
    M: 399
  },
  "1950": {
    M: 401
  },
  "1951": {
    M: 405
  },
  "1952": {
    M: 395
  },
  "1953": {
    M: 344
  },
  "1954": {
    M: 365
  },
  "1955": {
    M: 350
  },
  "1956": {
    M: 337
  },
  "1957": {
    M: 321
  },
  "1958": {
    M: 349
  },
  "1959": {
    M: 311
  },
  "1960": {
    M: 317
  },
  "1961": {
    M: 323
  },
  "1962": {
    M: 307
  },
  "1963": {
    M: 255
  },
  "1964": {
    M: 240
  },
  "1965": {
    M: 182
  },
  "1966": {
    M: 136
  },
  "1967": {
    M: 158
  },
  "1968": {
    M: 162
  },
  "1969": {
    M: 127
  },
  "1970": {
    M: 116
  },
  "1971": {
    M: 107
  },
  "1972": {
    M: 92
  },
  "1973": {
    M: 78
  },
  "1974": {
    M: 65
  },
  "1975": {
    M: 71
  },
  "1976": {
    M: 48
  },
  "1977": {
    M: 52
  },
  "1978": {
    M: 46
  },
  "1979": {
    M: 39
  },
  "1980": {
    M: 25
  },
  "1981": {
    M: 34
  },
  "1982": {
    M: 38
  },
  "1983": {
    M: 24
  },
  "1984": {
    M: 32
  },
  "1985": {
    M: 22
  },
  "1986": {
    M: 25
  },
  "1987": {
    M: 18
  },
  "1988": {
    M: 17
  },
  "1989": {
    M: 16
  },
  "1990": {
    M: 12
  },
  "1991": {
    M: 18
  },
  "1992": {
    M: 15
  }
};
const Graham = {
  "1907": {
    M: 12
  },
  "1908": {
    M: 12
  },
  "1910": {
    M: 15
  },
  "1911": {
    M: 12
  },
  "1912": {
    M: 19
  },
  "1913": {
    M: 18
  },
  "1914": {
    M: 28
  },
  "1915": {
    M: 27
  },
  "1916": {
    M: 30
  },
  "1917": {
    M: 21
  },
  "1918": {
    M: 26
  },
  "1919": {
    M: 25
  },
  "1920": {
    M: 38
  },
  "1921": {
    M: 40
  },
  "1922": {
    M: 58
  },
  "1923": {
    M: 67
  },
  "1924": {
    M: 51
  },
  "1925": {
    M: 82
  },
  "1926": {
    M: 78
  },
  "1927": {
    M: 77
  },
  "1928": {
    M: 85
  },
  "1929": {
    M: 121
  },
  "1930": {
    M: 124
  },
  "1931": {
    M: 148
  },
  "1932": {
    M: 135
  },
  "1933": {
    M: 141
  },
  "1934": {
    M: 169
  },
  "1935": {
    M: 205
  },
  "1936": {
    M: 253
  },
  "1937": {
    M: 229
  },
  "1938": {
    M: 224
  },
  "1939": {
    M: 276
  },
  "1940": {
    M: 330
  },
  "1941": {
    M: 299
  },
  "1942": {
    M: 262
  },
  "1943": {
    M: 238
  },
  "1944": {
    M: 264
  },
  "1945": {
    M: 287
  },
  "1946": {
    M: 349
  },
  "1947": {
    M: 398
  },
  "1948": {
    M: 371
  },
  "1949": {
    M: 325
  },
  "1950": {
    M: 319
  },
  "1951": {
    M: 330
  },
  "1952": {
    M: 312
  },
  "1953": {
    M: 307
  },
  "1954": {
    M: 298
  },
  "1955": {
    M: 320
  },
  "1956": {
    M: 293
  },
  "1957": {
    M: 273
  },
  "1958": {
    M: 266
  },
  "1959": {
    M: 238
  },
  "1960": {
    M: 239
  },
  "1961": {
    M: 262
  },
  "1962": {
    M: 215
  },
  "1963": {
    M: 209
  },
  "1964": {
    M: 196
  },
  "1965": {
    M: 158
  },
  "1966": {
    M: 135
  },
  "1967": {
    M: 133
  },
  "1968": {
    M: 106
  },
  "1969": {
    M: 115
  },
  "1970": {
    M: 100
  },
  "1971": {
    M: 96
  },
  "1972": {
    M: 94
  },
  "1973": {
    M: 62
  },
  "1974": {
    M: 56
  },
  "1975": {
    M: 36
  },
  "1976": {
    M: 51
  },
  "1977": {
    M: 48
  },
  "1978": {
    M: 42
  },
  "1979": {
    M: 39
  },
  "1980": {
    M: 45
  },
  "1981": {
    M: 44
  },
  "1982": {
    M: 42
  },
  "1983": {
    M: 24
  },
  "1984": {
    M: 39
  },
  "1985": {
    M: 25
  },
  "1986": {
    M: 16
  },
  "1987": {
    M: 26
  },
  "1988": {
    M: 16
  },
  "1989": {
    M: 30
  },
  "1990": {
    M: 19
  },
  "1991": {
    M: 16
  },
  "1992": {
    M: 21
  },
  "1993": {
    M: 15
  },
  "1994": {
    M: 15
  },
  "1995": {
    M: 11
  }
};
const Grahame = {
  "1929": {
    M: 13
  },
  "1931": {
    M: 11
  },
  "1934": {
    M: 12
  },
  "1935": {
    M: 21
  },
  "1936": {
    M: 17
  },
  "1937": {
    M: 23
  },
  "1938": {
    M: 14
  },
  "1939": {
    M: 25
  },
  "1940": {
    M: 20
  },
  "1941": {
    M: 26
  },
  "1942": {
    M: 22
  },
  "1943": {
    M: 23
  },
  "1944": {
    M: 12
  },
  "1945": {
    M: 23
  },
  "1946": {
    M: 18
  },
  "1947": {
    M: 15
  },
  "1948": {
    M: 17
  },
  "1949": {
    M: 15
  },
  "1950": {
    M: 10
  },
  "1951": {
    M: 13
  },
  "1954": {
    M: 17
  },
  "1955": {
    M: 12
  },
  "1956": {
    M: 13
  },
  "1957": {
    M: 11
  },
  "1958": {
    M: 16
  },
  "1959": {
    M: 11
  },
  "1961": {
    M: 13
  }
};
const Grant = {
  "1938": {
    M: 13
  },
  "1939": {
    M: 10
  },
  "1940": {
    M: 13
  },
  "1941": {
    M: 12
  },
  "1942": {
    M: 22
  },
  "1943": {
    M: 29
  },
  "1944": {
    M: 19
  },
  "1945": {
    M: 50
  },
  "1946": {
    M: 72
  },
  "1947": {
    M: 65
  },
  "1948": {
    M: 77
  },
  "1949": {
    M: 161
  },
  "1950": {
    M: 184
  },
  "1951": {
    M: 200
  },
  "1952": {
    M: 207
  },
  "1953": {
    M: 200
  },
  "1954": {
    M: 234
  },
  "1955": {
    M: 220
  },
  "1956": {
    M: 259
  },
  "1957": {
    M: 290
  },
  "1958": {
    M: 392
  },
  "1959": {
    M: 376
  },
  "1960": {
    M: 390
  },
  "1961": {
    M: 373
  },
  "1962": {
    M: 471
  },
  "1963": {
    M: 405
  },
  "1964": {
    M: 448
  },
  "1965": {
    M: 366
  },
  "1966": {
    M: 364
  },
  "1967": {
    M: 387
  },
  "1968": {
    M: 380
  },
  "1969": {
    M: 358
  },
  "1970": {
    M: 344
  },
  "1971": {
    M: 321
  },
  "1972": {
    M: 291
  },
  "1973": {
    M: 247
  },
  "1974": {
    M: 255
  },
  "1975": {
    M: 162
  },
  "1976": {
    M: 123
  },
  "1977": {
    M: 140
  },
  "1978": {
    M: 104
  },
  "1979": {
    M: 111
  },
  "1980": {
    M: 81
  },
  "1981": {
    M: 82
  },
  "1982": {
    M: 83
  },
  "1983": {
    M: 64
  },
  "1984": {
    M: 72
  },
  "1985": {
    M: 58
  },
  "1986": {
    M: 59
  },
  "1987": {
    M: 49
  },
  "1988": {
    M: 47
  },
  "1989": {
    M: 27
  },
  "1990": {
    M: 38
  },
  "1991": {
    M: 28
  },
  "1992": {
    M: 24
  },
  "1993": {
    M: 14
  },
  "1994": {
    M: 24
  },
  "1995": {
    M: 22
  },
  "1996": {
    M: 12
  },
  "1997": {
    M: 16
  },
  "1998": {
    M: 14
  },
  "2001": {
    M: 13
  },
  "2003": {
    M: 10
  }
};
const Grayson = {
  "1990": {
    M: 25
  },
  "1991": {
    M: 13
  },
  "1992": {
    M: 16
  },
  "1993": {
    M: 14
  },
  "1995": {
    M: 22
  },
  "1996": {
    M: 26
  },
  "1997": {
    M: 25
  },
  "1998": {
    M: 30
  },
  "1999": {
    M: 19
  },
  "2000": {
    M: 20
  },
  "2001": {
    M: 18
  },
  "2002": {
    M: 14
  },
  "2003": {
    M: 13
  },
  "2004": {
    M: 15
  },
  "2005": {
    M: 10
  },
  "2006": {
    M: 13
  },
  "2007": {
    M: 15
  },
  "2008": {
    M: 13
  },
  "2009": {
    M: 13
  },
  "2010": {
    M: 17
  },
  "2011": {
    M: 43
  },
  "2012": {
    M: 40
  },
  "2013": {
    M: 45
  },
  "2014": {
    M: 62
  },
  "2015": {
    M: 74
  },
  "2016": {
    M: 57
  },
  "2017": {
    M: 69
  },
  "2018": {
    M: 50
  },
  "2019": {
    M: 85
  },
  "2020": {
    M: 70
  },
  "2021": {
    M: 81
  }
};
const Greer = {
  "1984": {
    F: 11
  },
  "1985": {
    F: 13
  },
  "1987": {
    F: 12
  },
  "1988": {
    F: 14
  },
  "1989": {
    F: 12
  },
  "1991": {
    F: 10
  },
  "1993": {
    F: 14
  },
  "1994": {
    F: 11
  },
  "1995": {
    F: 13
  },
  "1996": {
    F: 19
  },
  "1997": {
    F: 19
  },
  "1998": {
    F: 15
  },
  "1999": {
    F: 23
  },
  "2000": {
    F: 10
  },
  "2001": {
    F: 14
  },
  "2002": {
    F: 15
  },
  "2003": {
    F: 11
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 25
  },
  "2006": {
    F: 27
  },
  "2007": {
    F: 27
  },
  "2008": {
    F: 32
  },
  "2009": {
    F: 16
  },
  "2010": {
    F: 24
  },
  "2011": {
    F: 13
  },
  "2012": {
    F: 16
  },
  "2013": {
    F: 10
  },
  "2015": {
    F: 10
  },
  "2016": {
    F: 11
  },
  "2017": {
    F: 12
  },
  "2018": {
    F: 13
  },
  "2019": {
    F: 13
  }
};
const Greg = {
  "1966": {
    M: 11
  },
  "1967": {
    M: 11
  },
  "1968": {
    M: 11
  },
  "1969": {
    M: 20
  },
  "1970": {
    M: 16
  },
  "1971": {
    M: 20
  },
  "1972": {
    M: 13
  },
  "1973": {
    M: 13
  },
  "1974": {
    M: 19
  },
  "1975": {
    M: 22
  },
  "1976": {
    M: 22
  },
  "1977": {
    M: 26
  },
  "1978": {
    M: 19
  },
  "1979": {
    M: 26
  },
  "1980": {
    M: 17
  },
  "1981": {
    M: 22
  },
  "1982": {
    M: 18
  },
  "1983": {
    M: 23
  },
  "1984": {
    M: 18
  },
  "1985": {
    M: 11
  },
  "1986": {
    M: 12
  },
  "1987": {
    M: 10
  },
  "1988": {
    M: 12
  },
  "1989": {
    M: 10
  }
};
const Gregor = {
  "1965": {
    M: 12
  }
};
const Gregory = {
  "1940": {
    M: 11
  },
  "1942": {
    M: 18
  },
  "1943": {
    M: 11
  },
  "1944": {
    M: 12
  },
  "1945": {
    M: 12
  },
  "1946": {
    M: 40
  },
  "1947": {
    M: 72
  },
  "1948": {
    M: 89
  },
  "1949": {
    M: 103
  },
  "1950": {
    M: 131
  },
  "1951": {
    M: 168
  },
  "1952": {
    M: 166
  },
  "1953": {
    M: 176
  },
  "1954": {
    M: 190
  },
  "1955": {
    M: 208
  },
  "1956": {
    M: 236
  },
  "1957": {
    M: 254
  },
  "1958": {
    M: 330
  },
  "1959": {
    M: 362
  },
  "1960": {
    M: 419
  },
  "1961": {
    M: 403
  },
  "1962": {
    M: 404
  },
  "1963": {
    M: 410
  },
  "1964": {
    M: 394
  },
  "1965": {
    M: 329
  },
  "1966": {
    M: 343
  },
  "1967": {
    M: 260
  },
  "1968": {
    M: 314
  },
  "1969": {
    M: 313
  },
  "1970": {
    M: 250
  },
  "1971": {
    M: 288
  },
  "1972": {
    M: 257
  },
  "1973": {
    M: 210
  },
  "1974": {
    M: 202
  },
  "1975": {
    M: 171
  },
  "1976": {
    M: 184
  },
  "1977": {
    M: 129
  },
  "1978": {
    M: 138
  },
  "1979": {
    M: 132
  },
  "1980": {
    M: 107
  },
  "1981": {
    M: 113
  },
  "1982": {
    M: 101
  },
  "1983": {
    M: 93
  },
  "1984": {
    M: 93
  },
  "1985": {
    M: 71
  },
  "1986": {
    M: 73
  },
  "1987": {
    M: 70
  },
  "1988": {
    M: 69
  },
  "1989": {
    M: 55
  },
  "1990": {
    M: 47
  },
  "1991": {
    M: 44
  },
  "1992": {
    M: 33
  },
  "1993": {
    M: 29
  },
  "1994": {
    M: 26
  },
  "1995": {
    M: 37
  },
  "1996": {
    M: 23
  },
  "1997": {
    M: 12
  },
  "1998": {
    M: 22
  },
  "1999": {
    M: 12
  },
  "2005": {
    M: 12
  }
};
const Greig = {
  "1962": {
    M: 12
  },
  "1975": {
    M: 10
  },
  "1977": {
    M: 11
  },
  "1979": {
    M: 11
  }
};
const Greta = {
  "1929": {
    F: 13
  },
  "1931": {
    F: 12
  },
  "1934": {
    F: 11
  },
  "1935": {
    F: 12
  },
  "1975": {
    F: 10
  },
  "1982": {
    F: 11
  },
  "1993": {
    F: 10
  },
  "1994": {
    F: 10
  },
  "1995": {
    F: 11
  },
  "1996": {
    F: 10
  },
  "1997": {
    F: 10
  },
  "2003": {
    F: 12
  },
  "2004": {
    F: 14
  },
  "2005": {
    F: 11
  },
  "2006": {
    F: 10
  },
  "2007": {
    F: 22
  },
  "2008": {
    F: 10
  },
  "2009": {
    F: 15
  },
  "2010": {
    F: 27
  },
  "2011": {
    F: 13
  },
  "2012": {
    F: 23
  },
  "2013": {
    F: 24
  },
  "2014": {
    F: 17
  },
  "2015": {
    F: 15
  },
  "2016": {
    F: 17
  },
  "2017": {
    F: 12
  },
  "2018": {
    F: 21
  },
  "2019": {
    F: 12
  },
  "2020": {
    F: 12
  }
};
const Gretchen = {
  "1966": {
    F: 10
  },
  "1971": {
    F: 12
  },
  "1972": {
    F: 14
  },
  "1973": {
    F: 10
  },
  "1974": {
    F: 19
  },
  "1975": {
    F: 11
  },
  "1976": {
    F: 18
  },
  "1978": {
    F: 16
  },
  "1979": {
    F: 10
  },
  "1980": {
    F: 10
  }
};
const Greyson = {
  "2017": {
    M: 13
  },
  "2018": {
    M: 16
  },
  "2019": {
    M: 10
  },
  "2020": {
    M: 12
  },
  "2021": {
    M: 16
  }
};
const Griffin = {
  "1999": {
    M: 10
  },
  "2000": {
    M: 11
  },
  "2005": {
    M: 14
  },
  "2008": {
    M: 11
  },
  "2013": {
    M: 10
  },
  "2015": {
    M: 11
  },
  "2018": {
    M: 15
  }
};
const Gurbaaz = {
  "2021": {
    M: 18
  }
};
const Gurfateh = {
  "2017": {
    M: 10
  },
  "2019": {
    M: 13
  }
};
const Gurnaaz = {
  "2021": {
    F: 13
  }
};
const Gus = {
  "2005": {
    M: 10
  },
  "2008": {
    M: 10
  },
  "2009": {
    M: 11
  },
  "2011": {
    M: 18
  },
  "2012": {
    M: 13
  },
  "2013": {
    M: 16
  },
  "2014": {
    M: 13
  },
  "2015": {
    M: 24
  },
  "2016": {
    M: 13
  },
  "2017": {
    M: 19
  },
  "2018": {
    M: 17
  },
  "2019": {
    M: 14
  },
  "2020": {
    M: 16
  },
  "2021": {
    M: 24
  }
};
const Guy = {
  "1902": {
    M: 15
  },
  "1903": {
    M: 12
  },
  "1906": {
    M: 12
  },
  "1917": {
    M: 11
  },
  "1946": {
    M: 12
  },
  "1947": {
    M: 12
  },
  "1950": {
    M: 10
  },
  "1951": {
    M: 11
  },
  "1952": {
    M: 13
  },
  "1953": {
    M: 23
  },
  "1954": {
    M: 22
  },
  "1955": {
    M: 24
  },
  "1956": {
    M: 19
  },
  "1957": {
    M: 37
  },
  "1958": {
    M: 44
  },
  "1959": {
    M: 37
  },
  "1960": {
    M: 32
  },
  "1961": {
    M: 37
  },
  "1962": {
    M: 33
  },
  "1963": {
    M: 39
  },
  "1964": {
    M: 41
  },
  "1965": {
    M: 36
  },
  "1966": {
    M: 41
  },
  "1967": {
    M: 33
  },
  "1968": {
    M: 42
  },
  "1969": {
    M: 42
  },
  "1970": {
    M: 37
  },
  "1971": {
    M: 41
  },
  "1972": {
    M: 24
  },
  "1973": {
    M: 28
  },
  "1974": {
    M: 31
  },
  "1975": {
    M: 29
  },
  "1976": {
    M: 20
  },
  "1977": {
    M: 27
  },
  "1978": {
    M: 15
  },
  "1979": {
    M: 23
  },
  "1980": {
    M: 16
  },
  "1981": {
    M: 22
  },
  "1982": {
    M: 13
  },
  "1983": {
    M: 20
  },
  "1984": {
    M: 20
  },
  "1985": {
    M: 22
  },
  "1986": {
    M: 18
  },
  "1987": {
    M: 32
  },
  "1988": {
    M: 27
  },
  "1989": {
    M: 17
  },
  "1990": {
    M: 27
  },
  "1991": {
    M: 24
  },
  "1992": {
    M: 23
  },
  "1993": {
    M: 23
  },
  "1994": {
    M: 20
  },
  "1995": {
    M: 22
  },
  "1996": {
    M: 21
  },
  "1997": {
    M: 15
  },
  "1998": {
    M: 15
  },
  "2000": {
    M: 13
  },
  "2001": {
    M: 10
  },
  "2002": {
    M: 11
  },
  "2003": {
    M: 15
  },
  "2004": {
    M: 15
  },
  "2008": {
    M: 10
  },
  "2009": {
    M: 11
  },
  "2010": {
    M: 11
  }
};
const Gwen = {
  "1915": {
    F: 11
  },
  "1918": {
    F: 18
  },
  "1919": {
    F: 16
  },
  "1920": {
    F: 16
  },
  "1921": {
    F: 14
  },
  "1922": {
    F: 14
  },
  "1923": {
    F: 13
  },
  "1924": {
    F: 14
  },
  "1926": {
    F: 13
  },
  "1927": {
    F: 12
  },
  "1928": {
    F: 15
  },
  "1930": {
    F: 10
  },
  "1941": {
    F: 11
  },
  "1944": {
    F: 11
  }
};
const Gwenda = {
  "1912": {
    F: 12
  },
  "1917": {
    F: 11
  },
  "1920": {
    F: 14
  },
  "1921": {
    F: 19
  },
  "1922": {
    F: 21
  },
  "1923": {
    F: 11
  },
  "1924": {
    F: 25
  },
  "1925": {
    F: 14
  },
  "1926": {
    F: 14
  },
  "1927": {
    F: 16
  },
  "1928": {
    F: 19
  },
  "1929": {
    F: 19
  },
  "1930": {
    F: 13
  },
  "1931": {
    F: 20
  },
  "1932": {
    F: 18
  },
  "1933": {
    F: 13
  },
  "1934": {
    F: 11
  },
  "1935": {
    F: 10
  },
  "1937": {
    F: 13
  },
  "1939": {
    F: 14
  },
  "1940": {
    F: 10
  },
  "1941": {
    F: 10
  },
  "1942": {
    F: 14
  },
  "1943": {
    F: 14
  },
  "1945": {
    F: 12
  },
  "1946": {
    F: 18
  },
  "1947": {
    F: 16
  },
  "1948": {
    F: 16
  },
  "1949": {
    F: 13
  },
  "1950": {
    F: 18
  },
  "1951": {
    F: 22
  },
  "1952": {
    F: 14
  },
  "1953": {
    F: 14
  },
  "1954": {
    F: 15
  },
  "1955": {
    F: 17
  },
  "1956": {
    F: 11
  },
  "1957": {
    F: 20
  },
  "1958": {
    F: 15
  },
  "1959": {
    F: 11
  }
};
const Gwendolen = {
  "1912": {
    F: 10
  },
  "1914": {
    F: 10
  },
  "1916": {
    F: 10
  },
  "1917": {
    F: 10
  }
};
const Gwendoline = {
  "1900": {
    F: 25
  },
  "1901": {
    F: 28
  },
  "1902": {
    F: 37
  },
  "1903": {
    F: 46
  },
  "1904": {
    F: 42
  },
  "1905": {
    F: 43
  },
  "1906": {
    F: 53
  },
  "1907": {
    F: 47
  },
  "1908": {
    F: 54
  },
  "1909": {
    F: 74
  },
  "1910": {
    F: 66
  },
  "1911": {
    F: 67
  },
  "1912": {
    F: 67
  },
  "1913": {
    F: 58
  },
  "1914": {
    F: 65
  },
  "1915": {
    F: 73
  },
  "1916": {
    F: 76
  },
  "1917": {
    F: 68
  },
  "1918": {
    F: 75
  },
  "1919": {
    F: 72
  },
  "1920": {
    F: 59
  },
  "1921": {
    F: 57
  },
  "1922": {
    F: 55
  },
  "1923": {
    F: 56
  },
  "1924": {
    F: 64
  },
  "1925": {
    F: 58
  },
  "1926": {
    F: 50
  },
  "1927": {
    F: 38
  },
  "1928": {
    F: 32
  },
  "1929": {
    F: 48
  },
  "1930": {
    F: 40
  },
  "1931": {
    F: 39
  },
  "1932": {
    F: 29
  },
  "1933": {
    F: 23
  },
  "1934": {
    F: 32
  },
  "1935": {
    F: 25
  },
  "1936": {
    F: 13
  },
  "1937": {
    F: 22
  },
  "1938": {
    F: 16
  },
  "1939": {
    F: 23
  },
  "1940": {
    F: 23
  },
  "1941": {
    F: 17
  },
  "1942": {
    F: 11
  },
  "1944": {
    F: 13
  },
  "1946": {
    F: 12
  },
  "1947": {
    F: 17
  },
  "1948": {
    F: 12
  },
  "1950": {
    F: 10
  },
  "1951": {
    F: 14
  }
};
const Gwendolyn = {
  "1907": {
    F: 10
  },
  "1910": {
    F: 12
  },
  "1912": {
    F: 16
  },
  "1919": {
    F: 11
  },
  "1920": {
    F: 16
  },
  "1921": {
    F: 14
  },
  "1922": {
    F: 13
  },
  "1924": {
    F: 12
  },
  "1925": {
    F: 13
  },
  "1926": {
    F: 10
  }
};
const Gweneth = {
  "1912": {
    F: 10
  },
  "1913": {
    F: 11
  },
  "1914": {
    F: 13
  },
  "1915": {
    F: 17
  },
  "1916": {
    F: 12
  },
  "1917": {
    F: 12
  },
  "1918": {
    F: 13
  },
  "1919": {
    F: 12
  },
  "1920": {
    F: 12
  },
  "1921": {
    F: 10
  },
  "1922": {
    F: 14
  },
  "1923": {
    F: 10
  },
  "1924": {
    F: 10
  },
  "1926": {
    F: 15
  },
  "1927": {
    F: 11
  },
  "1928": {
    F: 12
  },
  "1929": {
    F: 10
  },
  "1930": {
    F: 10
  },
  "1938": {
    F: 10
  },
  "1945": {
    F: 10
  }
};
const Gwenyth = {
  "1913": {
    F: 13
  },
  "1915": {
    F: 13
  },
  "1916": {
    F: 18
  },
  "1918": {
    F: 10
  },
  "1920": {
    F: 14
  },
  "1923": {
    F: 10
  },
  "1924": {
    F: 14
  },
  "1925": {
    F: 13
  },
  "1926": {
    F: 14
  },
  "1928": {
    F: 14
  },
  "1929": {
    F: 11
  },
  "1930": {
    F: 12
  },
  "1937": {
    F: 11
  },
  "1938": {
    F: 10
  },
  "1939": {
    F: 11
  },
  "1942": {
    F: 11
  },
  "1943": {
    F: 10
  },
  "1945": {
    F: 10
  }
};
const Gwyneth = {
  "1925": {
    F: 10
  }
};
const Hadassah = {
  "2012": {
    F: 10
  }
};
const Hadley = {
  "2009": {
    M: 13
  },
  "2011": {
    M: 10
  },
  "2012": {
    M: 14
  },
  "2013": {
    M: 11
  },
  "2015": {
    M: 10
  },
  "2016": {
    M: 13
  },
  "2017": {
    M: 13
  },
  "2018": {
    M: 19
  },
  "2019": {
    M: 15
  },
  "2020": {
    M: 10
  },
  "2021": {
    F: 11,
    M: 18
  }
};
const Haidee = {
  "1980": {
    F: 10
  }
};
const Hailey = {
  "1986": {
    F: 12
  },
  "1989": {
    F: 13
  },
  "1990": {
    F: 10
  },
  "1991": {
    F: 14
  },
  "2003": {
    F: 10
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 10
  },
  "2006": {
    F: 13
  },
  "2007": {
    F: 19
  },
  "2008": {
    F: 16
  },
  "2009": {
    F: 14
  },
  "2010": {
    F: 16
  },
  "2011": {
    F: 18
  },
  "2012": {
    F: 22
  },
  "2013": {
    F: 15
  },
  "2014": {
    F: 15
  },
  "2015": {
    F: 13
  },
  "2016": {
    F: 13
  },
  "2017": {
    F: 24
  },
  "2018": {
    F: 13
  },
  "2019": {
    F: 19
  },
  "2020": {
    F: 19
  },
  "2021": {
    F: 25
  }
};
const Haley = {
  "1972": {
    F: 14
  },
  "1975": {
    F: 11
  },
  "1976": {
    F: 20
  },
  "1977": {
    F: 11
  },
  "1978": {
    F: 19
  },
  "1979": {
    F: 23
  },
  "1980": {
    F: 34
  },
  "1981": {
    F: 20
  },
  "1982": {
    F: 47
  },
  "1983": {
    F: 53
  },
  "1984": {
    F: 49
  },
  "1985": {
    F: 63
  },
  "1986": {
    F: 57
  },
  "1987": {
    F: 36
  },
  "1988": {
    F: 38
  },
  "1989": {
    F: 34
  },
  "1990": {
    F: 40
  },
  "1991": {
    F: 40
  },
  "1992": {
    F: 25
  },
  "1993": {
    F: 26
  },
  "1994": {
    F: 16
  },
  "1995": {
    F: 18
  },
  "2002": {
    F: 10
  }
};
const Halle = {
  "2003": {
    F: 12
  }
};
const Halo = {
  "2010": {
    F: 15
  },
  "2013": {
    F: 10
  },
  "2015": {
    F: 10
  },
  "2017": {
    F: 13
  },
  "2019": {
    F: 12
  },
  "2021": {
    F: 10
  }
};
const Halsey = {
  "1913": {
    M: 10
  }
};
const Hamiora = {
  "1987": {
    M: 10
  },
  "1993": {
    M: 10
  },
  "1994": {
    M: 14
  },
  "2005": {
    M: 12
  },
  "2007": {
    M: 12
  },
  "2009": {
    M: 10
  },
  "2010": {
    M: 10
  },
  "2011": {
    M: 11
  },
  "2013": {
    M: 14
  }
};
const Hamish = {
  "1944": {
    M: 10
  },
  "1947": {
    M: 11
  },
  "1948": {
    M: 15
  },
  "1949": {
    M: 10
  },
  "1950": {
    M: 11
  },
  "1951": {
    M: 20
  },
  "1952": {
    M: 20
  },
  "1953": {
    M: 12
  },
  "1954": {
    M: 14
  },
  "1955": {
    M: 14
  },
  "1956": {
    M: 24
  },
  "1957": {
    M: 21
  },
  "1958": {
    M: 29
  },
  "1959": {
    M: 38
  },
  "1960": {
    M: 54
  },
  "1961": {
    M: 42
  },
  "1962": {
    M: 41
  },
  "1963": {
    M: 48
  },
  "1964": {
    M: 61
  },
  "1965": {
    M: 51
  },
  "1966": {
    M: 76
  },
  "1967": {
    M: 76
  },
  "1968": {
    M: 86
  },
  "1969": {
    M: 97
  },
  "1970": {
    M: 120
  },
  "1971": {
    M: 144
  },
  "1972": {
    M: 135
  },
  "1973": {
    M: 173
  },
  "1974": {
    M: 145
  },
  "1975": {
    M: 155
  },
  "1976": {
    M: 185
  },
  "1977": {
    M: 142
  },
  "1978": {
    M: 146
  },
  "1979": {
    M: 158
  },
  "1980": {
    M: 121
  },
  "1981": {
    M: 118
  },
  "1982": {
    M: 128
  },
  "1983": {
    M: 118
  },
  "1984": {
    M: 118
  },
  "1985": {
    M: 124
  },
  "1986": {
    M: 133
  },
  "1987": {
    M: 173
  },
  "1988": {
    M: 167
  },
  "1989": {
    M: 167
  },
  "1990": {
    M: 194
  },
  "1991": {
    M: 160
  },
  "1992": {
    M: 155
  },
  "1993": {
    M: 148
  },
  "1994": {
    M: 124
  },
  "1995": {
    M: 135
  },
  "1996": {
    M: 165
  },
  "1997": {
    M: 142
  },
  "1998": {
    M: 158
  },
  "1999": {
    M: 162
  },
  "2000": {
    M: 148
  },
  "2001": {
    M: 112
  },
  "2002": {
    M: 110
  },
  "2003": {
    M: 106
  },
  "2004": {
    M: 108
  },
  "2005": {
    M: 90
  },
  "2006": {
    M: 80
  },
  "2007": {
    M: 77
  },
  "2008": {
    M: 68
  },
  "2009": {
    M: 71
  },
  "2010": {
    M: 53
  },
  "2011": {
    M: 33
  },
  "2012": {
    M: 32
  },
  "2013": {
    M: 36
  },
  "2014": {
    M: 36
  },
  "2015": {
    M: 31
  },
  "2016": {
    M: 26
  },
  "2017": {
    M: 20
  },
  "2018": {
    M: 25
  },
  "2019": {
    M: 20
  },
  "2020": {
    M: 12
  }
};
const Hana = {
  "1979": {
    F: 12
  },
  "1981": {
    F: 10
  },
  "1986": {
    F: 14
  },
  "1987": {
    F: 10
  },
  "1988": {
    F: 12
  },
  "1989": {
    F: 18
  },
  "1990": {
    F: 16
  },
  "1991": {
    F: 14
  },
  "1992": {
    F: 12
  },
  "1993": {
    F: 10
  },
  "1994": {
    F: 18
  },
  "1995": {
    F: 14
  },
  "1996": {
    F: 20
  },
  "1997": {
    F: 18
  },
  "1998": {
    F: 11
  },
  "1999": {
    F: 20
  },
  "2000": {
    F: 15
  },
  "2001": {
    F: 11
  },
  "2002": {
    F: 16
  },
  "2003": {
    F: 15
  },
  "2004": {
    F: 22
  },
  "2005": {
    F: 17
  },
  "2006": {
    F: 17
  },
  "2007": {
    F: 16
  },
  "2008": {
    F: 25
  },
  "2009": {
    F: 11
  },
  "2010": {
    F: 20
  },
  "2011": {
    F: 20
  },
  "2012": {
    F: 19
  },
  "2013": {
    F: 19
  },
  "2014": {
    F: 17
  },
  "2015": {
    F: 22
  },
  "2016": {
    F: 25
  },
  "2017": {
    F: 15
  },
  "2018": {
    F: 17
  },
  "2019": {
    F: 15
  },
  "2020": {
    F: 16
  },
  "2021": {
    F: 25
  }
};
const Hanna = {
  "1981": {
    F: 15
  },
  "1983": {
    F: 11
  },
  "1987": {
    F: 10
  },
  "1988": {
    F: 28
  },
  "1990": {
    F: 13
  },
  "1992": {
    F: 19
  },
  "1995": {
    F: 14
  },
  "1996": {
    F: 10
  },
  "1997": {
    F: 16
  },
  "1998": {
    F: 11
  },
  "1999": {
    F: 14
  },
  "2000": {
    F: 14
  },
  "2001": {
    F: 10
  },
  "2002": {
    F: 10
  },
  "2004": {
    F: 13
  },
  "2005": {
    F: 11
  }
};
const Hannah = {
  "1900": {
    F: 24
  },
  "1901": {
    F: 16
  },
  "1902": {
    F: 22
  },
  "1903": {
    F: 21
  },
  "1904": {
    F: 19
  },
  "1905": {
    F: 23
  },
  "1906": {
    F: 15
  },
  "1907": {
    F: 14
  },
  "1908": {
    F: 14
  },
  "1909": {
    F: 20
  },
  "1910": {
    F: 18
  },
  "1911": {
    F: 19
  },
  "1912": {
    F: 13
  },
  "1913": {
    F: 21
  },
  "1914": {
    F: 16
  },
  "1915": {
    F: 15
  },
  "1916": {
    F: 13
  },
  "1918": {
    F: 11
  },
  "1919": {
    F: 12
  },
  "1923": {
    F: 11
  },
  "1953": {
    F: 10
  },
  "1966": {
    F: 11
  },
  "1969": {
    F: 10
  },
  "1971": {
    F: 10
  },
  "1972": {
    F: 15
  },
  "1973": {
    F: 12
  },
  "1974": {
    F: 20
  },
  "1975": {
    F: 28
  },
  "1976": {
    F: 37
  },
  "1977": {
    F: 56
  },
  "1978": {
    F: 61
  },
  "1979": {
    F: 75
  },
  "1980": {
    F: 82
  },
  "1981": {
    F: 104
  },
  "1982": {
    F: 131
  },
  "1983": {
    F: 137
  },
  "1984": {
    F: 175
  },
  "1985": {
    F: 170
  },
  "1986": {
    F: 176
  },
  "1987": {
    F: 223
  },
  "1988": {
    F: 251
  },
  "1989": {
    F: 286
  },
  "1990": {
    F: 340
  },
  "1991": {
    F: 349
  },
  "1992": {
    F: 398
  },
  "1993": {
    F: 363
  },
  "1994": {
    F: 333
  },
  "1995": {
    F: 377
  },
  "1996": {
    F: 332
  },
  "1997": {
    F: 365
  },
  "1998": {
    F: 324
  },
  "1999": {
    F: 328
  },
  "2000": {
    F: 359
  },
  "2001": {
    F: 317
  },
  "2002": {
    F: 314
  },
  "2003": {
    F: 279
  },
  "2004": {
    F: 286
  },
  "2005": {
    F: 239
  },
  "2006": {
    F: 255
  },
  "2007": {
    F: 242
  },
  "2008": {
    F: 232
  },
  "2009": {
    F: 171
  },
  "2010": {
    F: 176
  },
  "2011": {
    F: 137
  },
  "2012": {
    F: 146
  },
  "2013": {
    F: 125
  },
  "2014": {
    F: 126
  },
  "2015": {
    F: 111
  },
  "2016": {
    F: 120
  },
  "2017": {
    F: 92
  },
  "2018": {
    F: 85
  },
  "2019": {
    F: 75
  },
  "2020": {
    F: 51
  },
  "2021": {
    F: 57
  }
};
const Hans = {
  "1958": {
    M: 10
  },
  "1967": {
    M: 11
  }
};
const Hao = {
  "2011": {
    M: 12
  }
};
const Hare = {
  "1937": {
    M: 10
  },
  "1939": {
    M: 11
  }
};
const Hariata = {
  "1940": {
    F: 13
  },
  "1956": {
    F: 10
  }
};
const Harlan = {
  "2013": {
    M: 11
  },
  "2016": {
    M: 15
  },
  "2017": {
    M: 11
  },
  "2020": {
    M: 14
  }
};
const Harlee = {
  "2020": {
    F: 10
  }
};
const Harleen = {
  "2007": {
    F: 12
  }
};
const Harlem = {
  "1997": {
    M: 10
  },
  "1998": {
    M: 12
  },
  "1999": {
    M: 11
  },
  "2000": {
    M: 13
  },
  "2001": {
    M: 14
  },
  "2004": {
    M: 16
  },
  "2005": {
    M: 18
  },
  "2006": {
    M: 26
  },
  "2007": {
    M: 29
  },
  "2008": {
    M: 43
  },
  "2009": {
    M: 30
  },
  "2010": {
    M: 31
  },
  "2011": {
    M: 33
  },
  "2012": {
    M: 28
  },
  "2013": {
    M: 18
  },
  "2014": {
    M: 22
  },
  "2015": {
    M: 18
  },
  "2016": {
    M: 17
  },
  "2017": {
    M: 10
  },
  "2018": {
    M: 32
  },
  "2019": {
    M: 12
  },
  "2020": {
    M: 15
  },
  "2021": {
    M: 11
  }
};
const Harlen = {
  "2013": {
    M: 11
  },
  "2018": {
    M: 10
  }
};
const Harley = {
  "1969": {
    M: 10
  },
  "1970": {
    M: 10
  },
  "1972": {
    M: 12
  },
  "1973": {
    M: 10
  },
  "1974": {
    M: 10
  },
  "1977": {
    M: 11
  },
  "1978": {
    M: 17
  },
  "1979": {
    M: 12
  },
  "1980": {
    M: 23
  },
  "1981": {
    M: 16
  },
  "1982": {
    M: 23
  },
  "1983": {
    M: 31
  },
  "1984": {
    M: 45
  },
  "1985": {
    M: 40
  },
  "1986": {
    M: 54
  },
  "1987": {
    M: 39
  },
  "1988": {
    M: 55
  },
  "1989": {
    M: 71
  },
  "1990": {
    M: 49
  },
  "1991": {
    M: 66
  },
  "1992": {
    M: 42
  },
  "1993": {
    M: 40
  },
  "1994": {
    M: 36
  },
  "1995": {
    M: 49
  },
  "1996": {
    M: 37
  },
  "1997": {
    M: 28
  },
  "1998": {
    M: 31
  },
  "1999": {
    M: 18
  },
  "2000": {
    M: 20
  },
  "2001": {
    M: 21
  },
  "2002": {
    M: 20
  },
  "2003": {
    M: 13
  },
  "2004": {
    M: 22
  },
  "2005": {
    M: 20
  },
  "2006": {
    M: 21
  },
  "2007": {
    M: 31
  },
  "2008": {
    M: 33
  },
  "2009": {
    M: 34
  },
  "2010": {
    M: 33
  },
  "2011": {
    M: 37
  },
  "2012": {
    M: 42
  },
  "2013": {
    M: 38
  },
  "2014": {
    M: 51
  },
  "2015": {
    M: 58
  },
  "2016": {
    M: 51
  },
  "2017": {
    F: 21,
    M: 47
  },
  "2018": {
    M: 54,
    F: 18
  },
  "2019": {
    F: 19,
    M: 51
  },
  "2020": {
    M: 55,
    F: 19
  },
  "2021": {
    M: 52,
    F: 26
  }
};
const Harlow = {
  "2010": {
    F: 17
  },
  "2011": {
    F: 12
  },
  "2012": {
    F: 18
  },
  "2013": {
    F: 22
  },
  "2015": {
    F: 33
  },
  "2016": {
    F: 21
  },
  "2017": {
    F: 30
  },
  "2018": {
    F: 36
  },
  "2019": {
    F: 44
  },
  "2020": {
    F: 56
  },
  "2021": {
    F: 58
  }
};
const Harlyn = {
  "2017": {
    M: 13
  }
};
const Harmony = {
  "1990": {
    F: 12
  },
  "1991": {
    F: 14
  },
  "1992": {
    F: 15
  },
  "1993": {
    F: 14
  },
  "1994": {
    F: 25
  },
  "1995": {
    F: 26
  },
  "1996": {
    F: 27
  },
  "1997": {
    F: 27
  },
  "1998": {
    F: 30
  },
  "1999": {
    F: 25
  },
  "2000": {
    F: 27
  },
  "2001": {
    F: 30
  },
  "2002": {
    F: 26
  },
  "2003": {
    F: 42
  },
  "2004": {
    F: 40
  },
  "2005": {
    F: 46
  },
  "2006": {
    F: 53
  },
  "2007": {
    F: 49
  },
  "2008": {
    F: 59
  },
  "2009": {
    F: 41
  },
  "2010": {
    F: 53
  },
  "2011": {
    F: 37
  },
  "2012": {
    F: 37
  },
  "2013": {
    F: 28
  },
  "2014": {
    F: 32
  },
  "2015": {
    F: 22
  },
  "2016": {
    F: 35
  },
  "2017": {
    F: 19
  },
  "2018": {
    F: 19
  },
  "2019": {
    F: 19
  },
  "2020": {
    F: 15
  },
  "2021": {
    F: 15
  }
};
const Harold = {
  "1900": {
    M: 169
  },
  "1901": {
    M: 146
  },
  "1902": {
    M: 129
  },
  "1903": {
    M: 161
  },
  "1904": {
    M: 206
  },
  "1905": {
    M: 175
  },
  "1906": {
    M: 184
  },
  "1907": {
    M: 190
  },
  "1908": {
    M: 173
  },
  "1909": {
    M: 189
  },
  "1910": {
    M: 161
  },
  "1911": {
    M: 168
  },
  "1912": {
    M: 177
  },
  "1913": {
    M: 180
  },
  "1914": {
    M: 184
  },
  "1915": {
    M: 178
  },
  "1916": {
    M: 177
  },
  "1917": {
    M: 166
  },
  "1918": {
    M: 153
  },
  "1919": {
    M: 148
  },
  "1920": {
    M: 186
  },
  "1921": {
    M: 173
  },
  "1922": {
    M: 133
  },
  "1923": {
    M: 122
  },
  "1924": {
    M: 122
  },
  "1925": {
    M: 141
  },
  "1926": {
    M: 117
  },
  "1927": {
    M: 117
  },
  "1928": {
    M: 96
  },
  "1929": {
    M: 74
  },
  "1930": {
    M: 83
  },
  "1931": {
    M: 72
  },
  "1932": {
    M: 58
  },
  "1933": {
    M: 55
  },
  "1934": {
    M: 63
  },
  "1935": {
    M: 65
  },
  "1936": {
    M: 52
  },
  "1937": {
    M: 27
  },
  "1938": {
    M: 50
  },
  "1939": {
    M: 49
  },
  "1940": {
    M: 49
  },
  "1941": {
    M: 53
  },
  "1942": {
    M: 53
  },
  "1943": {
    M: 37
  },
  "1944": {
    M: 37
  },
  "1945": {
    M: 51
  },
  "1946": {
    M: 56
  },
  "1947": {
    M: 60
  },
  "1948": {
    M: 41
  },
  "1949": {
    M: 33
  },
  "1950": {
    M: 37
  },
  "1951": {
    M: 41
  },
  "1952": {
    M: 34
  },
  "1953": {
    M: 27
  },
  "1954": {
    M: 32
  },
  "1955": {
    M: 31
  },
  "1956": {
    M: 27
  },
  "1957": {
    M: 24
  },
  "1958": {
    M: 23
  },
  "1959": {
    M: 19
  },
  "1960": {
    M: 25
  },
  "1961": {
    M: 22
  },
  "1962": {
    M: 17
  },
  "1963": {
    M: 15
  },
  "1964": {
    M: 26
  },
  "1965": {
    M: 10
  },
  "1966": {
    M: 17
  },
  "1967": {
    M: 13
  },
  "1968": {
    M: 12
  },
  "1970": {
    M: 12
  },
  "1971": {
    M: 10
  },
  "1972": {
    M: 10
  },
  "1983": {
    M: 11
  },
  "1984": {
    M: 15
  }
};
const Harper = {
  "2006": {
    M: 11
  },
  "2007": {
    M: 10
  },
  "2008": {
    F: 11,
    M: 23
  },
  "2009": {
    F: 15,
    M: 30
  },
  "2010": {
    F: 36,
    M: 30
  },
  "2011": {
    F: 38,
    M: 28
  },
  "2012": {
    F: 94,
    M: 19
  },
  "2013": {
    F: 157,
    M: 18
  },
  "2014": {
    F: 216,
    M: 14
  },
  "2015": {
    F: 259
  },
  "2016": {
    F: 236
  },
  "2017": {
    F: 236
  },
  "2018": {
    F: 193
  },
  "2019": {
    F: 188
  },
  "2020": {
    F: 177
  },
  "2021": {
    F: 156
  }
};
const Harriet = {
  "1900": {
    F: 16
  },
  "1901": {
    F: 25
  },
  "1902": {
    F: 14
  },
  "1903": {
    F: 16
  },
  "1904": {
    F: 11
  },
  "1905": {
    F: 17
  },
  "1906": {
    F: 11
  },
  "1907": {
    F: 17
  },
  "1908": {
    F: 14
  },
  "1909": {
    F: 12
  },
  "1910": {
    F: 13
  },
  "1911": {
    F: 14
  },
  "1912": {
    F: 11
  },
  "1913": {
    F: 11
  },
  "1914": {
    F: 19
  },
  "1916": {
    F: 16
  },
  "1959": {
    F: 10
  },
  "1975": {
    F: 11
  },
  "1981": {
    F: 12
  },
  "1985": {
    F: 19
  },
  "1986": {
    F: 18
  },
  "1987": {
    F: 20
  },
  "1988": {
    F: 17
  },
  "1989": {
    F: 21
  },
  "1990": {
    F: 31
  },
  "1991": {
    F: 40
  },
  "1992": {
    F: 22
  },
  "1993": {
    F: 31
  },
  "1994": {
    F: 43
  },
  "1995": {
    F: 42
  },
  "1996": {
    F: 39
  },
  "1997": {
    F: 31
  },
  "1998": {
    F: 32
  },
  "1999": {
    F: 31
  },
  "2000": {
    F: 20
  },
  "2001": {
    F: 31
  },
  "2002": {
    F: 28
  },
  "2003": {
    F: 29
  },
  "2004": {
    F: 31
  },
  "2005": {
    F: 25
  },
  "2006": {
    F: 22
  },
  "2007": {
    F: 27
  },
  "2008": {
    F: 23
  },
  "2009": {
    F: 27
  },
  "2010": {
    F: 28
  },
  "2011": {
    F: 33
  },
  "2012": {
    F: 45
  },
  "2013": {
    F: 36
  },
  "2014": {
    F: 44
  },
  "2015": {
    F: 56
  },
  "2016": {
    F: 62
  },
  "2017": {
    F: 51
  },
  "2018": {
    F: 59
  },
  "2019": {
    F: 52
  },
  "2020": {
    F: 70
  },
  "2021": {
    F: 64
  }
};
const Harris = {
  "1999": {
    M: 10
  },
  "2005": {
    M: 10
  },
  "2007": {
    M: 13
  },
  "2012": {
    M: 11
  }
};
const Harrison = {
  "1987": {
    M: 10
  },
  "1988": {
    M: 11
  },
  "1989": {
    M: 14
  },
  "1990": {
    M: 22
  },
  "1991": {
    M: 24
  },
  "1992": {
    M: 42
  },
  "1993": {
    M: 50
  },
  "1994": {
    M: 70
  },
  "1995": {
    M: 82
  },
  "1996": {
    M: 100
  },
  "1997": {
    M: 118
  },
  "1998": {
    M: 128
  },
  "1999": {
    M: 118
  },
  "2000": {
    M: 127
  },
  "2001": {
    M: 128
  },
  "2002": {
    M: 129
  },
  "2003": {
    M: 131
  },
  "2004": {
    M: 110
  },
  "2005": {
    M: 137
  },
  "2006": {
    M: 148
  },
  "2007": {
    M: 136
  },
  "2008": {
    M: 131
  },
  "2009": {
    M: 119
  },
  "2010": {
    M: 115
  },
  "2011": {
    M: 105
  },
  "2012": {
    M: 106
  },
  "2013": {
    M: 115
  },
  "2014": {
    M: 122
  },
  "2015": {
    M: 117
  },
  "2016": {
    M: 111
  },
  "2017": {
    M: 118
  },
  "2018": {
    M: 128
  },
  "2019": {
    M: 121
  },
  "2020": {
    M: 110
  },
  "2021": {
    M: 105
  }
};
const Harry = {
  "1900": {
    M: 58
  },
  "1901": {
    M: 72
  },
  "1902": {
    M: 58
  },
  "1903": {
    M: 73
  },
  "1904": {
    M: 61
  },
  "1905": {
    M: 81
  },
  "1906": {
    M: 64
  },
  "1907": {
    M: 75
  },
  "1908": {
    M: 71
  },
  "1909": {
    M: 77
  },
  "1910": {
    M: 87
  },
  "1911": {
    M: 71
  },
  "1912": {
    M: 74
  },
  "1913": {
    M: 74
  },
  "1914": {
    M: 71
  },
  "1915": {
    M: 80
  },
  "1916": {
    M: 86
  },
  "1917": {
    M: 76
  },
  "1918": {
    M: 69
  },
  "1919": {
    M: 76
  },
  "1920": {
    M: 74
  },
  "1921": {
    M: 66
  },
  "1922": {
    M: 71
  },
  "1923": {
    M: 58
  },
  "1924": {
    M: 65
  },
  "1925": {
    M: 57
  },
  "1926": {
    M: 55
  },
  "1927": {
    M: 50
  },
  "1928": {
    M: 50
  },
  "1929": {
    M: 41
  },
  "1930": {
    M: 34
  },
  "1931": {
    M: 39
  },
  "1932": {
    M: 36
  },
  "1933": {
    M: 27
  },
  "1934": {
    M: 27
  },
  "1935": {
    M: 26
  },
  "1936": {
    M: 28
  },
  "1937": {
    M: 28
  },
  "1938": {
    M: 23
  },
  "1939": {
    M: 26
  },
  "1940": {
    M: 31
  },
  "1941": {
    M: 36
  },
  "1942": {
    M: 24
  },
  "1943": {
    M: 25
  },
  "1944": {
    M: 28
  },
  "1945": {
    M: 18
  },
  "1946": {
    M: 40
  },
  "1947": {
    M: 37
  },
  "1948": {
    M: 31
  },
  "1949": {
    M: 38
  },
  "1950": {
    M: 33
  },
  "1951": {
    M: 29
  },
  "1952": {
    M: 37
  },
  "1953": {
    M: 26
  },
  "1954": {
    M: 33
  },
  "1955": {
    M: 36
  },
  "1956": {
    M: 31
  },
  "1957": {
    M: 36
  },
  "1958": {
    M: 29
  },
  "1959": {
    M: 34
  },
  "1960": {
    M: 32
  },
  "1961": {
    M: 35
  },
  "1962": {
    M: 30
  },
  "1963": {
    M: 21
  },
  "1964": {
    M: 21
  },
  "1965": {
    M: 23
  },
  "1966": {
    M: 24
  },
  "1967": {
    M: 21
  },
  "1968": {
    M: 16
  },
  "1969": {
    M: 15
  },
  "1970": {
    M: 22
  },
  "1971": {
    M: 28
  },
  "1972": {
    M: 15
  },
  "1974": {
    M: 18
  },
  "1975": {
    M: 16
  },
  "1976": {
    M: 11
  },
  "1977": {
    M: 11
  },
  "1979": {
    M: 14
  },
  "1980": {
    M: 12
  },
  "1981": {
    M: 20
  },
  "1983": {
    M: 10
  },
  "1984": {
    M: 20
  },
  "1986": {
    M: 26
  },
  "1987": {
    M: 22
  },
  "1988": {
    M: 31
  },
  "1989": {
    M: 41
  },
  "1990": {
    M: 38
  },
  "1991": {
    M: 31
  },
  "1992": {
    M: 36
  },
  "1993": {
    M: 52
  },
  "1994": {
    M: 58
  },
  "1995": {
    M: 68
  },
  "1996": {
    M: 71
  },
  "1997": {
    M: 62
  },
  "1998": {
    M: 84
  },
  "1999": {
    M: 88
  },
  "2000": {
    M: 85
  },
  "2001": {
    M: 105
  },
  "2002": {
    M: 83
  },
  "2003": {
    M: 101
  },
  "2004": {
    M: 126
  },
  "2005": {
    M: 110
  },
  "2006": {
    M: 103
  },
  "2007": {
    M: 130
  },
  "2008": {
    M: 116
  },
  "2009": {
    M: 119
  },
  "2010": {
    M: 124
  },
  "2011": {
    M: 128
  },
  "2012": {
    M: 135
  },
  "2013": {
    M: 123
  },
  "2014": {
    M: 127
  },
  "2015": {
    M: 118
  },
  "2016": {
    M: 102
  },
  "2017": {
    M: 116
  },
  "2018": {
    M: 140
  },
  "2019": {
    M: 115
  },
  "2020": {
    M: 97
  },
  "2021": {
    M: 77
  }
};
const Harvey = {
  "1919": {
    M: 10
  },
  "1921": {
    M: 11
  },
  "1922": {
    M: 11
  },
  "1924": {
    M: 10
  },
  "1938": {
    M: 10
  },
  "1939": {
    M: 14
  },
  "1940": {
    M: 11
  },
  "1941": {
    M: 15
  },
  "1943": {
    M: 13
  },
  "1944": {
    M: 25
  },
  "1945": {
    M: 18
  },
  "1946": {
    M: 14
  },
  "1947": {
    M: 22
  },
  "1948": {
    M: 18
  },
  "1949": {
    M: 12
  },
  "1950": {
    M: 13
  },
  "1951": {
    M: 14
  },
  "1953": {
    M: 10
  },
  "1956": {
    M: 12
  },
  "2003": {
    M: 10
  },
  "2004": {
    M: 13
  },
  "2005": {
    M: 18
  },
  "2006": {
    M: 12
  },
  "2007": {
    M: 20
  },
  "2008": {
    M: 17
  },
  "2009": {
    M: 25
  },
  "2010": {
    M: 22
  },
  "2011": {
    M: 30
  },
  "2012": {
    M: 29
  },
  "2013": {
    M: 19
  },
  "2014": {
    M: 34
  },
  "2015": {
    M: 52
  },
  "2016": {
    M: 61
  },
  "2017": {
    M: 79
  },
  "2018": {
    M: 74
  },
  "2019": {
    M: 86
  },
  "2020": {
    M: 73
  },
  "2021": {
    M: 77
  }
};
const Havana = {
  "2009": {
    F: 11
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 10
  }
};
const Haven = {
  "2014": {
    F: 10
  },
  "2017": {
    F: 15
  }
};
const Hawaiki = {
  "2015": {
    M: 10
  },
  "2018": {
    M: 11
  }
};
const Hayden = {
  "1969": {
    M: 12
  },
  "1970": {
    M: 18
  },
  "1971": {
    M: 31
  },
  "1972": {
    M: 39
  },
  "1973": {
    M: 61
  },
  "1974": {
    M: 97
  },
  "1975": {
    M: 134
  },
  "1976": {
    M: 153
  },
  "1977": {
    M: 180
  },
  "1978": {
    M: 146
  },
  "1979": {
    M: 162
  },
  "1980": {
    M: 167
  },
  "1981": {
    M: 184
  },
  "1982": {
    M: 173
  },
  "1983": {
    M: 166
  },
  "1984": {
    M: 197
  },
  "1985": {
    M: 210
  },
  "1986": {
    M: 171
  },
  "1987": {
    M: 208
  },
  "1988": {
    M: 223
  },
  "1989": {
    M: 175
  },
  "1990": {
    M: 184
  },
  "1991": {
    M: 176
  },
  "1992": {
    M: 183
  },
  "1993": {
    M: 197
  },
  "1994": {
    M: 198
  },
  "1995": {
    M: 177
  },
  "1996": {
    M: 143
  },
  "1997": {
    M: 167
  },
  "1998": {
    M: 115
  },
  "1999": {
    M: 108
  },
  "2000": {
    M: 107
  },
  "2001": {
    M: 101
  },
  "2002": {
    M: 92
  },
  "2003": {
    M: 77
  },
  "2004": {
    M: 61
  },
  "2005": {
    M: 72
  },
  "2006": {
    M: 76
  },
  "2007": {
    M: 67
  },
  "2008": {
    M: 60
  },
  "2009": {
    M: 64
  },
  "2010": {
    M: 51
  },
  "2011": {
    M: 41
  },
  "2012": {
    M: 56
  },
  "2013": {
    M: 39
  },
  "2014": {
    M: 29
  },
  "2015": {
    M: 33
  },
  "2016": {
    M: 26
  },
  "2017": {
    M: 31
  },
  "2018": {
    M: 16
  },
  "2019": {
    M: 21
  },
  "2020": {
    M: 28
  }
};
const Haydn = {
  "1974": {
    M: 10
  },
  "1975": {
    M: 16
  },
  "1976": {
    M: 12
  },
  "1984": {
    M: 11
  },
  "1995": {
    M: 10
  },
  "1996": {
    M: 10
  }
};
const Hayes = {
  "2020": {
    M: 12
  }
};
const Haylee = {
  "1982": {
    F: 17
  },
  "1984": {
    F: 17
  },
  "1985": {
    F: 24
  },
  "1986": {
    F: 30
  },
  "1987": {
    F: 14
  },
  "1988": {
    F: 18
  },
  "1990": {
    F: 21
  },
  "1991": {
    F: 15
  },
  "1992": {
    F: 18
  },
  "1994": {
    F: 16
  },
  "1995": {
    F: 22
  },
  "1996": {
    F: 17
  },
  "1997": {
    F: 15
  },
  "1998": {
    F: 13
  },
  "1999": {
    F: 12
  },
  "2000": {
    F: 18
  },
  "2001": {
    F: 13
  },
  "2002": {
    F: 15
  },
  "2003": {
    F: 19
  },
  "2004": {
    F: 22
  },
  "2005": {
    F: 25
  },
  "2006": {
    F: 21
  },
  "2007": {
    F: 23
  },
  "2008": {
    F: 19
  },
  "2009": {
    F: 23
  },
  "2010": {
    F: 14
  },
  "2011": {
    F: 13
  },
  "2012": {
    F: 20
  },
  "2015": {
    F: 16
  },
  "2016": {
    F: 11
  }
};
const Hayley = {
  "1962": {
    F: 15
  },
  "1963": {
    F: 18
  },
  "1964": {
    F: 19
  },
  "1965": {
    F: 17
  },
  "1966": {
    F: 17
  },
  "1967": {
    F: 15
  },
  "1968": {
    F: 23
  },
  "1969": {
    F: 30
  },
  "1970": {
    F: 35
  },
  "1971": {
    F: 52
  },
  "1972": {
    F: 57
  },
  "1973": {
    F: 71
  },
  "1974": {
    F: 78
  },
  "1975": {
    F: 69
  },
  "1976": {
    F: 80
  },
  "1977": {
    F: 94
  },
  "1978": {
    F: 93
  },
  "1979": {
    F: 137
  },
  "1980": {
    F: 123
  },
  "1981": {
    F: 139
  },
  "1982": {
    F: 183
  },
  "1983": {
    F: 181
  },
  "1984": {
    F: 188
  },
  "1985": {
    F: 197
  },
  "1986": {
    F: 183
  },
  "1987": {
    F: 141
  },
  "1988": {
    F: 143
  },
  "1989": {
    F: 152
  },
  "1990": {
    F: 234
  },
  "1991": {
    F: 199
  },
  "1992": {
    F: 161
  },
  "1993": {
    F: 160
  },
  "1994": {
    F: 129
  },
  "1995": {
    F: 114
  },
  "1996": {
    F: 110
  },
  "1997": {
    F: 91
  },
  "1998": {
    F: 94
  },
  "1999": {
    F: 95
  },
  "2000": {
    F: 80
  },
  "2001": {
    F: 79
  },
  "2002": {
    F: 71
  },
  "2003": {
    F: 106
  },
  "2004": {
    F: 103
  },
  "2005": {
    F: 128
  },
  "2006": {
    F: 122
  },
  "2007": {
    F: 112
  },
  "2008": {
    F: 97
  },
  "2009": {
    F: 95
  },
  "2010": {
    F: 84
  },
  "2011": {
    F: 56
  },
  "2012": {
    F: 65
  },
  "2013": {
    F: 47
  },
  "2014": {
    F: 44
  },
  "2015": {
    F: 42
  },
  "2016": {
    F: 43
  },
  "2017": {
    F: 33
  },
  "2018": {
    F: 33
  },
  "2019": {
    F: 29
  },
  "2020": {
    F: 33
  },
  "2021": {
    F: 22
  }
};
const Haze = {
  "2019": {
    M: 10
  }
};
const Hazel = {
  "1900": {
    F: 48
  },
  "1901": {
    F: 62
  },
  "1902": {
    F: 55
  },
  "1903": {
    F: 73
  },
  "1904": {
    F: 88
  },
  "1905": {
    F: 86
  },
  "1906": {
    F: 92
  },
  "1907": {
    F: 109
  },
  "1908": {
    F: 107
  },
  "1909": {
    F: 131
  },
  "1910": {
    F: 114
  },
  "1911": {
    F: 108
  },
  "1912": {
    F: 127
  },
  "1913": {
    F: 129
  },
  "1914": {
    F: 99
  },
  "1915": {
    F: 96
  },
  "1916": {
    F: 120
  },
  "1917": {
    F: 118
  },
  "1918": {
    F: 102
  },
  "1919": {
    F: 95
  },
  "1920": {
    F: 110
  },
  "1921": {
    F: 123
  },
  "1922": {
    F: 111
  },
  "1923": {
    F: 106
  },
  "1924": {
    F: 95
  },
  "1925": {
    F: 78
  },
  "1926": {
    F: 71
  },
  "1927": {
    F: 72
  },
  "1928": {
    F: 77
  },
  "1929": {
    F: 57
  },
  "1930": {
    F: 67
  },
  "1931": {
    F: 48
  },
  "1932": {
    F: 55
  },
  "1933": {
    F: 61
  },
  "1934": {
    F: 43
  },
  "1935": {
    F: 28
  },
  "1936": {
    F: 36
  },
  "1937": {
    F: 36
  },
  "1938": {
    F: 27
  },
  "1939": {
    F: 40
  },
  "1940": {
    F: 43
  },
  "1941": {
    F: 30
  },
  "1942": {
    F: 29
  },
  "1943": {
    F: 19
  },
  "1944": {
    F: 30
  },
  "1945": {
    F: 23
  },
  "1946": {
    F: 18
  },
  "1947": {
    F: 20
  },
  "1948": {
    F: 26
  },
  "1949": {
    F: 19
  },
  "1950": {
    F: 21
  },
  "1951": {
    F: 19
  },
  "1952": {
    F: 16
  },
  "1953": {
    F: 22
  },
  "1955": {
    F: 17
  },
  "1956": {
    F: 19
  },
  "1957": {
    F: 17
  },
  "1958": {
    F: 13
  },
  "1959": {
    F: 13
  },
  "1960": {
    F: 10
  },
  "1961": {
    F: 14
  },
  "1963": {
    F: 14
  },
  "1972": {
    F: 10
  },
  "1983": {
    F: 13
  },
  "1984": {
    F: 16
  },
  "1985": {
    F: 13
  },
  "1986": {
    F: 12
  },
  "1987": {
    F: 10
  },
  "1988": {
    F: 19
  },
  "1989": {
    F: 23
  },
  "1990": {
    F: 15
  },
  "1991": {
    F: 23
  },
  "1992": {
    F: 21
  },
  "1993": {
    F: 31
  },
  "1994": {
    F: 17
  },
  "1995": {
    F: 16
  },
  "1996": {
    F: 19
  },
  "1997": {
    F: 14
  },
  "1998": {
    F: 18
  },
  "1999": {
    F: 15
  },
  "2000": {
    F: 23
  },
  "2001": {
    F: 17
  },
  "2002": {
    F: 19
  },
  "2003": {
    F: 18
  },
  "2004": {
    F: 29
  },
  "2005": {
    F: 37
  },
  "2006": {
    F: 29
  },
  "2007": {
    F: 43
  },
  "2008": {
    F: 52
  },
  "2009": {
    F: 50
  },
  "2010": {
    F: 51
  },
  "2011": {
    F: 71
  },
  "2012": {
    F: 70
  },
  "2013": {
    F: 80
  },
  "2014": {
    F: 90
  },
  "2015": {
    F: 114
  },
  "2016": {
    F: 115
  },
  "2017": {
    F: 125
  },
  "2018": {
    F: 125
  },
  "2019": {
    F: 151
  },
  "2020": {
    F: 130
  },
  "2021": {
    F: 160
  }
};
const Heath = {
  "1967": {
    M: 13
  },
  "1968": {
    M: 42
  },
  "1969": {
    M: 19
  },
  "1970": {
    M: 28
  },
  "1971": {
    M: 22
  },
  "1972": {
    M: 26
  },
  "1973": {
    M: 25
  },
  "1974": {
    M: 31
  },
  "1975": {
    M: 26
  },
  "1976": {
    M: 27
  },
  "1977": {
    M: 38
  },
  "1978": {
    M: 30
  },
  "1979": {
    M: 27
  },
  "1980": {
    M: 21
  },
  "1981": {
    M: 29
  },
  "1982": {
    M: 23
  },
  "1983": {
    M: 13
  },
  "1984": {
    M: 15
  },
  "1985": {
    M: 12
  },
  "1987": {
    M: 11
  },
  "1991": {
    M: 11
  },
  "1993": {
    M: 11
  },
  "1994": {
    M: 11
  },
  "1999": {
    M: 10
  },
  "2002": {
    M: 17
  },
  "2003": {
    M: 15
  },
  "2004": {
    M: 25
  },
  "2005": {
    M: 15
  },
  "2006": {
    M: 16
  },
  "2007": {
    M: 18
  },
  "2008": {
    M: 14
  },
  "2009": {
    M: 18
  },
  "2010": {
    M: 16
  },
  "2011": {
    M: 19
  },
  "2012": {
    M: 22
  },
  "2013": {
    M: 22
  },
  "2014": {
    M: 24
  },
  "2015": {
    M: 31
  },
  "2016": {
    M: 30
  },
  "2017": {
    M: 25
  },
  "2018": {
    M: 20
  },
  "2019": {
    M: 17
  },
  "2020": {
    M: 15
  },
  "2021": {
    M: 26
  }
};
const Heather = {
  "1909": {
    F: 10
  },
  "1915": {
    F: 13
  },
  "1916": {
    F: 16
  },
  "1917": {
    F: 12
  },
  "1918": {
    F: 10
  },
  "1919": {
    F: 12
  },
  "1921": {
    F: 16
  },
  "1922": {
    F: 26
  },
  "1923": {
    F: 28
  },
  "1924": {
    F: 33
  },
  "1925": {
    F: 48
  },
  "1926": {
    F: 46
  },
  "1927": {
    F: 43
  },
  "1928": {
    F: 39
  },
  "1929": {
    F: 59
  },
  "1930": {
    F: 67
  },
  "1931": {
    F: 60
  },
  "1932": {
    F: 65
  },
  "1933": {
    F: 84
  },
  "1934": {
    F: 96
  },
  "1935": {
    F: 90
  },
  "1936": {
    F: 117
  },
  "1937": {
    F: 133
  },
  "1938": {
    F: 130
  },
  "1939": {
    F: 130
  },
  "1940": {
    F: 176
  },
  "1941": {
    F: 218
  },
  "1942": {
    F: 231
  },
  "1943": {
    F: 174
  },
  "1944": {
    F: 251
  },
  "1945": {
    F: 262
  },
  "1946": {
    F: 274
  },
  "1947": {
    F: 266
  },
  "1948": {
    F: 283
  },
  "1949": {
    F: 301
  },
  "1950": {
    F: 256
  },
  "1951": {
    F: 278
  },
  "1952": {
    F: 289
  },
  "1953": {
    F: 295
  },
  "1954": {
    F: 271
  },
  "1955": {
    F: 331
  },
  "1956": {
    F: 317
  },
  "1957": {
    F: 297
  },
  "1958": {
    F: 236
  },
  "1959": {
    F: 267
  },
  "1960": {
    F: 253
  },
  "1961": {
    F: 235
  },
  "1962": {
    F: 232
  },
  "1963": {
    F: 219
  },
  "1964": {
    F: 168
  },
  "1965": {
    F: 192
  },
  "1966": {
    F: 165
  },
  "1967": {
    F: 138
  },
  "1968": {
    F: 125
  },
  "1969": {
    F: 140
  },
  "1970": {
    F: 89
  },
  "1971": {
    F: 94
  },
  "1972": {
    F: 79
  },
  "1973": {
    F: 82
  },
  "1974": {
    F: 72
  },
  "1975": {
    F: 60
  },
  "1976": {
    F: 64
  },
  "1977": {
    F: 57
  },
  "1978": {
    F: 61
  },
  "1979": {
    F: 56
  },
  "1980": {
    F: 37
  },
  "1981": {
    F: 36
  },
  "1982": {
    F: 48
  },
  "1983": {
    F: 54
  },
  "1984": {
    F: 49
  },
  "1985": {
    F: 42
  },
  "1986": {
    F: 31
  },
  "1987": {
    F: 40
  },
  "1988": {
    F: 42
  },
  "1989": {
    F: 32
  },
  "1990": {
    F: 24
  },
  "1991": {
    F: 21
  },
  "1992": {
    F: 29
  },
  "1993": {
    F: 23
  },
  "1994": {
    F: 30
  },
  "1995": {
    F: 23
  },
  "1996": {
    F: 22
  },
  "1997": {
    F: 16
  },
  "1998": {
    F: 11
  },
  "1999": {
    F: 12
  },
  "2001": {
    F: 12
  },
  "2003": {
    F: 17
  },
  "2004": {
    F: 11
  },
  "2008": {
    F: 10
  }
};
const Hector = {
  "1900": {
    M: 90
  },
  "1901": {
    M: 82
  },
  "1902": {
    M: 101
  },
  "1903": {
    M: 72
  },
  "1904": {
    M: 63
  },
  "1905": {
    M: 65
  },
  "1906": {
    M: 51
  },
  "1907": {
    M: 71
  },
  "1908": {
    M: 47
  },
  "1909": {
    M: 50
  },
  "1910": {
    M: 55
  },
  "1911": {
    M: 59
  },
  "1912": {
    M: 52
  },
  "1913": {
    M: 40
  },
  "1914": {
    M: 64
  },
  "1915": {
    M: 45
  },
  "1916": {
    M: 43
  },
  "1917": {
    M: 56
  },
  "1918": {
    M: 35
  },
  "1919": {
    M: 33
  },
  "1920": {
    M: 33
  },
  "1921": {
    M: 39
  },
  "1922": {
    M: 25
  },
  "1923": {
    M: 33
  },
  "1924": {
    M: 23
  },
  "1925": {
    M: 21
  },
  "1926": {
    M: 28
  },
  "1927": {
    M: 20
  },
  "1928": {
    M: 20
  },
  "1929": {
    M: 20
  },
  "1930": {
    M: 10
  },
  "1931": {
    M: 11
  },
  "1932": {
    M: 10
  },
  "1933": {
    M: 11
  },
  "1934": {
    M: 10
  },
  "1938": {
    M: 13
  },
  "1939": {
    M: 11
  },
  "1940": {
    M: 13
  },
  "1943": {
    M: 10
  },
  "1946": {
    M: 11
  },
  "1947": {
    M: 14
  },
  "1948": {
    M: 10
  }
};
const Heidi = {
  "1963": {
    F: 11
  },
  "1968": {
    F: 24
  },
  "1969": {
    F: 11
  },
  "1970": {
    F: 27
  },
  "1971": {
    F: 38
  },
  "1972": {
    F: 38
  },
  "1973": {
    F: 51
  },
  "1974": {
    F: 43
  },
  "1975": {
    F: 70
  },
  "1976": {
    F: 66
  },
  "1977": {
    F: 71
  },
  "1978": {
    F: 47
  },
  "1979": {
    F: 40
  },
  "1980": {
    F: 53
  },
  "1981": {
    F: 41
  },
  "1982": {
    F: 32
  },
  "1983": {
    F: 34
  },
  "1984": {
    F: 21
  },
  "1985": {
    F: 24
  },
  "1986": {
    F: 21
  },
  "1987": {
    F: 17
  },
  "1988": {
    F: 23
  },
  "1989": {
    F: 15
  },
  "1990": {
    F: 14
  },
  "1991": {
    F: 10
  },
  "1992": {
    F: 14
  },
  "1993": {
    F: 16
  },
  "1994": {
    F: 21
  },
  "1995": {
    F: 12
  },
  "1996": {
    F: 10
  },
  "1997": {
    F: 13
  },
  "1998": {
    F: 11
  },
  "1999": {
    F: 17
  },
  "2000": {
    F: 13
  },
  "2001": {
    F: 12
  },
  "2002": {
    F: 12
  },
  "2003": {
    F: 17
  },
  "2004": {
    F: 19
  },
  "2005": {
    F: 18
  },
  "2006": {
    F: 24
  },
  "2007": {
    F: 22
  },
  "2008": {
    F: 42
  },
  "2009": {
    F: 28
  },
  "2010": {
    F: 33
  },
  "2011": {
    F: 40
  },
  "2012": {
    F: 42
  },
  "2013": {
    F: 28
  },
  "2014": {
    F: 39
  },
  "2015": {
    F: 45
  },
  "2016": {
    F: 47
  },
  "2017": {
    F: 46
  },
  "2018": {
    F: 47
  },
  "2019": {
    F: 44
  },
  "2020": {
    F: 46
  },
  "2021": {
    F: 42
  }
};
const Helen = {
  "1900": {
    F: 61
  },
  "1901": {
    F: 59
  },
  "1902": {
    F: 72
  },
  "1903": {
    F: 68
  },
  "1904": {
    F: 67
  },
  "1905": {
    F: 82
  },
  "1906": {
    F: 71
  },
  "1907": {
    F: 77
  },
  "1908": {
    F: 63
  },
  "1909": {
    F: 77
  },
  "1910": {
    F: 79
  },
  "1911": {
    F: 101
  },
  "1912": {
    F: 93
  },
  "1913": {
    F: 89
  },
  "1914": {
    F: 88
  },
  "1915": {
    F: 97
  },
  "1916": {
    F: 121
  },
  "1917": {
    F: 107
  },
  "1918": {
    F: 98
  },
  "1919": {
    F: 81
  },
  "1920": {
    F: 120
  },
  "1921": {
    F: 108
  },
  "1922": {
    F: 97
  },
  "1923": {
    F: 98
  },
  "1924": {
    F: 118
  },
  "1925": {
    F: 104
  },
  "1926": {
    F: 117
  },
  "1927": {
    F: 117
  },
  "1928": {
    F: 106
  },
  "1929": {
    F: 110
  },
  "1930": {
    F: 122
  },
  "1931": {
    F: 137
  },
  "1932": {
    F: 129
  },
  "1933": {
    F: 127
  },
  "1934": {
    F: 142
  },
  "1935": {
    F: 135
  },
  "1936": {
    F: 141
  },
  "1937": {
    F: 147
  },
  "1938": {
    F: 178
  },
  "1939": {
    F: 174
  },
  "1940": {
    F: 212
  },
  "1941": {
    F: 265
  },
  "1942": {
    F: 271
  },
  "1943": {
    F: 232
  },
  "1944": {
    F: 287
  },
  "1945": {
    F: 307
  },
  "1946": {
    F: 306
  },
  "1947": {
    F: 350
  },
  "1948": {
    F: 322
  },
  "1949": {
    F: 318
  },
  "1950": {
    F: 335
  },
  "1951": {
    F: 306
  },
  "1952": {
    F: 295
  },
  "1953": {
    F: 344
  },
  "1954": {
    F: 323
  },
  "1955": {
    F: 334
  },
  "1956": {
    F: 326
  },
  "1957": {
    F: 334
  },
  "1958": {
    F: 352
  },
  "1959": {
    F: 319
  },
  "1960": {
    F: 333
  },
  "1961": {
    F: 387
  },
  "1962": {
    F: 335
  },
  "1963": {
    F: 336
  },
  "1964": {
    F: 333
  },
  "1965": {
    F: 312
  },
  "1966": {
    F: 296
  },
  "1967": {
    F: 351
  },
  "1968": {
    F: 310
  },
  "1969": {
    F: 254
  },
  "1970": {
    F: 226
  },
  "1971": {
    F: 195
  },
  "1972": {
    F: 181
  },
  "1973": {
    F: 183
  },
  "1974": {
    F: 162
  },
  "1975": {
    F: 155
  },
  "1976": {
    F: 139
  },
  "1977": {
    F: 141
  },
  "1978": {
    F: 117
  },
  "1979": {
    F: 108
  },
  "1980": {
    F: 127
  },
  "1981": {
    F: 111
  },
  "1982": {
    F: 85
  },
  "1983": {
    F: 92
  },
  "1984": {
    F: 90
  },
  "1985": {
    F: 93
  },
  "1986": {
    F: 74
  },
  "1987": {
    F: 62
  },
  "1988": {
    F: 70
  },
  "1989": {
    F: 61
  },
  "1990": {
    F: 60
  },
  "1991": {
    F: 44
  },
  "1992": {
    F: 47
  },
  "1993": {
    F: 38
  },
  "1994": {
    F: 30
  },
  "1995": {
    F: 24
  },
  "1996": {
    F: 33
  },
  "1997": {
    F: 22
  },
  "1998": {
    F: 35
  },
  "1999": {
    F: 20
  },
  "2000": {
    F: 23
  },
  "2001": {
    F: 17
  },
  "2002": {
    F: 13
  },
  "2003": {
    F: 26
  },
  "2004": {
    F: 15
  },
  "2005": {
    F: 13
  },
  "2007": {
    F: 15
  },
  "2008": {
    F: 11
  },
  "2011": {
    F: 12
  }
};
const Helena = {
  "1902": {
    F: 14
  },
  "1903": {
    F: 11
  },
  "1905": {
    F: 13
  },
  "1908": {
    F: 11
  },
  "1910": {
    F: 14
  },
  "1911": {
    F: 12
  },
  "1912": {
    F: 16
  },
  "1915": {
    F: 10
  },
  "1917": {
    F: 13
  },
  "1918": {
    F: 10
  },
  "1953": {
    F: 14
  },
  "1954": {
    F: 11
  },
  "1955": {
    F: 14
  },
  "1956": {
    F: 15
  },
  "1957": {
    F: 17
  },
  "1958": {
    F: 23
  },
  "1959": {
    F: 17
  },
  "1960": {
    F: 15
  },
  "1961": {
    F: 12
  },
  "1962": {
    F: 15
  },
  "1963": {
    F: 18
  },
  "1964": {
    F: 18
  },
  "1965": {
    F: 25
  },
  "1966": {
    F: 16
  },
  "1967": {
    F: 20
  },
  "1968": {
    F: 25
  },
  "1969": {
    F: 11
  },
  "1970": {
    F: 16
  },
  "1971": {
    F: 19
  },
  "1972": {
    F: 18
  },
  "1973": {
    F: 25
  },
  "1974": {
    F: 22
  },
  "1975": {
    F: 17
  },
  "1976": {
    F: 33
  },
  "1977": {
    F: 16
  },
  "1978": {
    F: 24
  },
  "1979": {
    F: 19
  },
  "1980": {
    F: 14
  },
  "1981": {
    F: 16
  },
  "1982": {
    F: 16
  },
  "1983": {
    F: 15
  },
  "1984": {
    F: 14
  },
  "1985": {
    F: 17
  },
  "1986": {
    F: 16
  },
  "1987": {
    F: 21
  },
  "1988": {
    F: 14
  },
  "1989": {
    F: 17
  },
  "1990": {
    F: 17
  },
  "1991": {
    F: 18
  },
  "1992": {
    F: 18
  },
  "1993": {
    F: 18
  },
  "1994": {
    F: 20
  },
  "1995": {
    F: 32
  },
  "1996": {
    F: 28
  },
  "1997": {
    F: 28
  },
  "1998": {
    F: 26
  },
  "1999": {
    F: 27
  },
  "2000": {
    F: 25
  },
  "2001": {
    F: 26
  },
  "2002": {
    F: 16
  },
  "2003": {
    F: 17
  },
  "2004": {
    F: 24
  },
  "2005": {
    F: 15
  },
  "2006": {
    F: 14
  },
  "2007": {
    F: 20
  },
  "2008": {
    F: 26
  },
  "2009": {
    F: 12
  },
  "2010": {
    F: 13
  },
  "2011": {
    F: 12
  },
  "2012": {
    F: 14
  },
  "2013": {
    F: 25
  },
  "2014": {
    F: 11
  },
  "2015": {
    F: 12
  },
  "2016": {
    F: 13
  },
  "2018": {
    F: 11
  },
  "2019": {
    F: 11
  },
  "2021": {
    F: 10
  }
};
const Helene = {
  "1964": {
    F: 10
  },
  "1966": {
    F: 13
  }
};
const Hemi = {
  "1935": {
    M: 11
  },
  "1939": {
    M: 10
  },
  "1940": {
    M: 10
  },
  "1943": {
    M: 13
  },
  "1946": {
    M: 10
  },
  "1948": {
    M: 18
  },
  "1949": {
    M: 12
  },
  "1960": {
    M: 10
  },
  "1961": {
    M: 11
  },
  "1962": {
    M: 12
  },
  "1963": {
    M: 12
  },
  "1967": {
    M: 10
  },
  "1971": {
    M: 13
  },
  "1973": {
    M: 13
  },
  "1974": {
    M: 12
  },
  "1976": {
    M: 12
  },
  "1977": {
    M: 16
  },
  "1978": {
    M: 19
  },
  "1979": {
    M: 18
  },
  "1980": {
    M: 16
  },
  "1981": {
    M: 23
  },
  "1982": {
    M: 25
  },
  "1983": {
    M: 23
  },
  "1984": {
    M: 23
  },
  "1985": {
    M: 17
  },
  "1986": {
    M: 29
  },
  "1987": {
    M: 18
  },
  "1988": {
    M: 26
  },
  "1989": {
    M: 26
  },
  "1990": {
    M: 17
  },
  "1991": {
    M: 18
  },
  "1992": {
    M: 25
  },
  "1993": {
    M: 25
  },
  "1994": {
    M: 30
  },
  "1995": {
    M: 14
  },
  "1996": {
    M: 20
  },
  "1997": {
    M: 26
  },
  "1998": {
    M: 18
  },
  "1999": {
    M: 17
  },
  "2000": {
    M: 15
  },
  "2002": {
    M: 11
  },
  "2003": {
    M: 13
  },
  "2004": {
    M: 10
  },
  "2005": {
    M: 12
  },
  "2006": {
    M: 15
  },
  "2007": {
    M: 16
  },
  "2008": {
    M: 10
  },
  "2009": {
    M: 14
  },
  "2010": {
    M: 17
  },
  "2011": {
    M: 25
  },
  "2012": {
    M: 10
  },
  "2013": {
    M: 20
  },
  "2015": {
    M: 11
  },
  "2016": {
    M: 17
  },
  "2017": {
    M: 14
  },
  "2018": {
    M: 15
  },
  "2020": {
    M: 13
  },
  "2021": {
    M: 19
  }
};
const Henare = {
  "1926": {
    M: 10
  },
  "1928": {
    M: 14
  },
  "1932": {
    M: 15
  },
  "1933": {
    M: 13
  },
  "1934": {
    M: 14
  },
  "1935": {
    M: 16
  },
  "1936": {
    M: 12
  },
  "1937": {
    M: 11
  },
  "1938": {
    M: 14
  },
  "1939": {
    M: 21
  },
  "1940": {
    M: 15
  },
  "1941": {
    M: 16
  },
  "1943": {
    M: 12
  },
  "1944": {
    M: 10
  },
  "1945": {
    M: 19
  },
  "1946": {
    M: 25
  },
  "1947": {
    M: 16
  },
  "1948": {
    M: 14
  },
  "1949": {
    M: 15
  },
  "1950": {
    M: 17
  },
  "1951": {
    M: 10
  },
  "1952": {
    M: 11
  },
  "1953": {
    M: 11
  },
  "1954": {
    M: 14
  },
  "1958": {
    M: 10
  },
  "1960": {
    M: 15
  },
  "1963": {
    M: 15
  },
  "1964": {
    M: 11
  },
  "1965": {
    M: 13
  },
  "1970": {
    M: 12
  },
  "1976": {
    M: 10
  },
  "1977": {
    M: 11
  },
  "1980": {
    M: 11
  },
  "1982": {
    M: 11
  },
  "1983": {
    M: 13
  },
  "1984": {
    M: 15
  },
  "1986": {
    M: 20
  },
  "1987": {
    M: 17
  },
  "1988": {
    M: 13
  },
  "1989": {
    M: 13
  },
  "1990": {
    M: 18
  },
  "1991": {
    M: 21
  },
  "1992": {
    M: 10
  },
  "1993": {
    M: 15
  },
  "1994": {
    M: 18
  },
  "1995": {
    M: 13
  },
  "1996": {
    M: 24
  },
  "1998": {
    M: 13
  },
  "1999": {
    M: 12
  },
  "2001": {
    M: 12
  },
  "2003": {
    M: 13
  },
  "2005": {
    M: 10
  },
  "2007": {
    M: 13
  },
  "2008": {
    M: 12
  },
  "2009": {
    M: 11
  },
  "2015": {
    M: 10
  },
  "2017": {
    M: 11
  }
};
const Hendrix = {
  "2008": {
    M: 10
  },
  "2009": {
    M: 11
  },
  "2010": {
    M: 11
  },
  "2012": {
    M: 13
  },
  "2013": {
    M: 12
  },
  "2014": {
    M: 15
  },
  "2015": {
    M: 17
  },
  "2016": {
    M: 17
  },
  "2017": {
    M: 19
  },
  "2018": {
    M: 25
  },
  "2019": {
    M: 23
  },
  "2020": {
    M: 25
  },
  "2021": {
    M: 25
  }
};
const Heni = {
  "1938": {
    F: 13
  },
  "1947": {
    F: 11
  },
  "1948": {
    F: 12
  },
  "1959": {
    F: 11
  }
};
const Henrietta = {
  "1900": {
    F: 15
  },
  "1901": {
    F: 17
  },
  "1902": {
    F: 21
  },
  "1904": {
    F: 18
  },
  "1905": {
    F: 11
  },
  "1906": {
    F: 14
  },
  "1907": {
    F: 21
  },
  "1908": {
    F: 12
  },
  "1909": {
    F: 14
  },
  "1910": {
    F: 16
  },
  "1911": {
    F: 11
  },
  "1912": {
    F: 12
  },
  "1913": {
    F: 11
  },
  "1914": {
    F: 11
  },
  "1916": {
    F: 10
  },
  "1917": {
    F: 13
  },
  "1918": {
    F: 12
  },
  "1995": {
    F: 10
  }
};
const Henry = {
  "1900": {
    M: 206
  },
  "1901": {
    M: 188
  },
  "1902": {
    M: 183
  },
  "1903": {
    M: 201
  },
  "1904": {
    M: 219
  },
  "1905": {
    M: 184
  },
  "1906": {
    M: 203
  },
  "1907": {
    M: 223
  },
  "1908": {
    M: 200
  },
  "1909": {
    M: 197
  },
  "1910": {
    M: 199
  },
  "1911": {
    M: 206
  },
  "1912": {
    M: 223
  },
  "1913": {
    M: 228
  },
  "1914": {
    M: 197
  },
  "1915": {
    M: 189
  },
  "1916": {
    M: 190
  },
  "1917": {
    M: 200
  },
  "1918": {
    M: 149
  },
  "1919": {
    M: 145
  },
  "1920": {
    M: 167
  },
  "1921": {
    M: 165
  },
  "1922": {
    M: 165
  },
  "1923": {
    M: 121
  },
  "1924": {
    M: 110
  },
  "1925": {
    M: 124
  },
  "1926": {
    M: 114
  },
  "1927": {
    M: 113
  },
  "1928": {
    M: 84
  },
  "1929": {
    M: 92
  },
  "1930": {
    M: 75
  },
  "1931": {
    M: 76
  },
  "1932": {
    M: 76
  },
  "1933": {
    M: 56
  },
  "1934": {
    M: 78
  },
  "1935": {
    M: 63
  },
  "1936": {
    M: 63
  },
  "1937": {
    M: 54
  },
  "1938": {
    M: 63
  },
  "1939": {
    M: 49
  },
  "1940": {
    M: 56
  },
  "1941": {
    M: 54
  },
  "1942": {
    M: 67
  },
  "1943": {
    M: 54
  },
  "1944": {
    M: 57
  },
  "1945": {
    M: 44
  },
  "1946": {
    M: 49
  },
  "1947": {
    M: 51
  },
  "1948": {
    M: 58
  },
  "1949": {
    M: 59
  },
  "1950": {
    M: 37
  },
  "1951": {
    M: 61
  },
  "1952": {
    M: 44
  },
  "1953": {
    M: 54
  },
  "1954": {
    M: 61
  },
  "1955": {
    M: 44
  },
  "1956": {
    M: 42
  },
  "1957": {
    M: 50
  },
  "1958": {
    M: 53
  },
  "1959": {
    M: 46
  },
  "1960": {
    M: 55
  },
  "1961": {
    M: 61
  },
  "1962": {
    M: 57
  },
  "1963": {
    M: 59
  },
  "1964": {
    M: 42
  },
  "1965": {
    M: 43
  },
  "1966": {
    M: 37
  },
  "1967": {
    M: 36
  },
  "1968": {
    M: 30
  },
  "1969": {
    M: 44
  },
  "1970": {
    M: 46
  },
  "1971": {
    M: 46
  },
  "1972": {
    M: 34
  },
  "1973": {
    M: 39
  },
  "1974": {
    M: 41
  },
  "1975": {
    M: 33
  },
  "1976": {
    M: 34
  },
  "1977": {
    M: 32
  },
  "1978": {
    M: 32
  },
  "1979": {
    M: 28
  },
  "1980": {
    M: 33
  },
  "1981": {
    M: 24
  },
  "1982": {
    M: 35
  },
  "1983": {
    M: 43
  },
  "1984": {
    M: 49
  },
  "1985": {
    M: 42
  },
  "1986": {
    M: 51
  },
  "1987": {
    M: 54
  },
  "1988": {
    M: 55
  },
  "1989": {
    M: 56
  },
  "1990": {
    M: 60
  },
  "1991": {
    M: 68
  },
  "1992": {
    M: 74
  },
  "1993": {
    M: 81
  },
  "1994": {
    M: 75
  },
  "1995": {
    M: 86
  },
  "1996": {
    M: 98
  },
  "1997": {
    M: 97
  },
  "1998": {
    M: 81
  },
  "1999": {
    M: 93
  },
  "2000": {
    M: 88
  },
  "2001": {
    M: 88
  },
  "2002": {
    M: 99
  },
  "2003": {
    M: 77
  },
  "2004": {
    M: 89
  },
  "2005": {
    M: 89
  },
  "2006": {
    M: 88
  },
  "2007": {
    M: 109
  },
  "2008": {
    M: 92
  },
  "2009": {
    M: 81
  },
  "2010": {
    M: 88
  },
  "2011": {
    M: 104
  },
  "2012": {
    M: 107
  },
  "2013": {
    M: 129
  },
  "2014": {
    M: 147
  },
  "2015": {
    M: 153
  },
  "2016": {
    M: 147
  },
  "2017": {
    M: 154
  },
  "2018": {
    M: 143
  },
  "2019": {
    M: 149
  },
  "2020": {
    M: 123
  },
  "2021": {
    M: 118
  }
};
const Hera = {
  "1932": {
    F: 10
  },
  "1935": {
    F: 12
  },
  "1936": {
    F: 14
  },
  "1946": {
    F: 11
  },
  "1947": {
    F: 10
  },
  "1949": {
    F: 10
  },
  "1950": {
    F: 11
  },
  "1951": {
    F: 11
  },
  "1958": {
    F: 10
  }
};
const Herbert = {
  "1900": {
    M: 127
  },
  "1901": {
    M: 120
  },
  "1902": {
    M: 125
  },
  "1903": {
    M: 126
  },
  "1904": {
    M: 122
  },
  "1905": {
    M: 126
  },
  "1906": {
    M: 149
  },
  "1907": {
    M: 144
  },
  "1908": {
    M: 137
  },
  "1909": {
    M: 142
  },
  "1910": {
    M: 147
  },
  "1911": {
    M: 119
  },
  "1912": {
    M: 118
  },
  "1913": {
    M: 125
  },
  "1914": {
    M: 116
  },
  "1915": {
    M: 139
  },
  "1916": {
    M: 160
  },
  "1917": {
    M: 160
  },
  "1918": {
    M: 127
  },
  "1919": {
    M: 106
  },
  "1920": {
    M: 122
  },
  "1921": {
    M: 104
  },
  "1922": {
    M: 87
  },
  "1923": {
    M: 85
  },
  "1924": {
    M: 75
  },
  "1925": {
    M: 84
  },
  "1926": {
    M: 58
  },
  "1927": {
    M: 62
  },
  "1928": {
    M: 63
  },
  "1929": {
    M: 47
  },
  "1930": {
    M: 54
  },
  "1931": {
    M: 50
  },
  "1932": {
    M: 26
  },
  "1933": {
    M: 32
  },
  "1934": {
    M: 25
  },
  "1935": {
    M: 30
  },
  "1936": {
    M: 29
  },
  "1937": {
    M: 31
  },
  "1938": {
    M: 32
  },
  "1939": {
    M: 23
  },
  "1940": {
    M: 30
  },
  "1941": {
    M: 37
  },
  "1942": {
    M: 29
  },
  "1943": {
    M: 20
  },
  "1944": {
    M: 30
  },
  "1945": {
    M: 24
  },
  "1946": {
    M: 22
  },
  "1947": {
    M: 29
  },
  "1948": {
    M: 12
  },
  "1949": {
    M: 21
  },
  "1950": {
    M: 14
  },
  "1951": {
    M: 14
  },
  "1952": {
    M: 13
  },
  "1953": {
    M: 19
  },
  "1954": {
    M: 13
  },
  "1955": {
    M: 15
  },
  "1956": {
    M: 13
  },
  "1957": {
    M: 11
  },
  "1958": {
    M: 10
  },
  "1962": {
    M: 10
  },
  "1964": {
    M: 14
  },
  "1965": {
    M: 17
  },
  "1966": {
    M: 10
  },
  "1984": {
    M: 12
  }
};
const Herman = {
  "1912": {
    M: 14
  }
};
const Hezekiah = {
  "2011": {
    M: 11
  },
  "2013": {
    M: 12
  },
  "2015": {
    M: 14
  },
  "2016": {
    M: 12
  },
  "2017": {
    M: 13
  },
  "2018": {
    M: 13
  },
  "2019": {
    M: 11
  },
  "2020": {
    M: 19
  },
  "2021": {
    M: 11
  }
};
const Hilary = {
  "1927": {
    F: 10
  },
  "1929": {
    F: 13
  },
  "1932": {
    F: 11
  },
  "1938": {
    F: 14
  },
  "1939": {
    F: 23
  },
  "1940": {
    F: 14
  },
  "1941": {
    F: 29
  },
  "1942": {
    F: 23
  },
  "1943": {
    F: 23
  },
  "1944": {
    F: 22
  },
  "1945": {
    F: 22
  },
  "1946": {
    F: 32
  },
  "1947": {
    F: 29
  },
  "1948": {
    F: 25
  },
  "1949": {
    F: 32
  },
  "1950": {
    F: 27
  },
  "1951": {
    F: 31
  },
  "1952": {
    F: 20
  },
  "1953": {
    F: 16
  },
  "1954": {
    F: 10
  },
  "1955": {
    F: 16
  },
  "1956": {
    F: 18
  },
  "1957": {
    F: 13
  },
  "1958": {
    F: 12
  },
  "1959": {
    F: 17
  },
  "1960": {
    F: 19
  },
  "1961": {
    F: 24
  },
  "1962": {
    F: 33
  },
  "1963": {
    F: 20
  },
  "1964": {
    F: 19
  },
  "1965": {
    F: 31
  },
  "1966": {
    F: 20
  },
  "1967": {
    F: 32
  },
  "1968": {
    F: 20
  },
  "1969": {
    F: 24
  },
  "1970": {
    F: 16
  },
  "1971": {
    F: 19
  },
  "1972": {
    F: 22
  },
  "1973": {
    F: 21
  },
  "1974": {
    F: 16
  },
  "1975": {
    F: 25
  },
  "1976": {
    F: 11
  },
  "1977": {
    F: 17
  },
  "1978": {
    F: 16
  },
  "1979": {
    F: 19
  },
  "1980": {
    F: 18
  },
  "1981": {
    F: 18
  },
  "1982": {
    F: 12
  },
  "1983": {
    F: 10
  },
  "1984": {
    F: 10
  },
  "1985": {
    F: 21
  },
  "1987": {
    F: 20
  },
  "1988": {
    F: 17
  },
  "1989": {
    F: 11
  },
  "1990": {
    F: 17
  },
  "1991": {
    F: 12
  },
  "1992": {
    F: 14
  },
  "1993": {
    F: 21
  }
};
const Hilda = {
  "1900": {
    F: 63
  },
  "1901": {
    F: 78
  },
  "1902": {
    F: 81
  },
  "1903": {
    F: 86
  },
  "1904": {
    F: 74
  },
  "1905": {
    F: 84
  },
  "1906": {
    F: 75
  },
  "1907": {
    F: 73
  },
  "1908": {
    F: 83
  },
  "1909": {
    F: 78
  },
  "1910": {
    F: 70
  },
  "1911": {
    F: 71
  },
  "1912": {
    F: 95
  },
  "1913": {
    F: 88
  },
  "1914": {
    F: 81
  },
  "1915": {
    F: 81
  },
  "1916": {
    F: 67
  },
  "1917": {
    F: 73
  },
  "1918": {
    F: 55
  },
  "1919": {
    F: 49
  },
  "1920": {
    F: 55
  },
  "1921": {
    F: 65
  },
  "1922": {
    F: 52
  },
  "1923": {
    F: 41
  },
  "1924": {
    F: 40
  },
  "1925": {
    F: 53
  },
  "1926": {
    F: 37
  },
  "1927": {
    F: 36
  },
  "1928": {
    F: 26
  },
  "1929": {
    F: 24
  },
  "1930": {
    F: 21
  },
  "1931": {
    F: 24
  },
  "1932": {
    F: 18
  },
  "1933": {
    F: 26
  },
  "1934": {
    F: 18
  },
  "1935": {
    F: 14
  },
  "1936": {
    F: 12
  },
  "1937": {
    F: 23
  },
  "1938": {
    F: 16
  },
  "1939": {
    F: 14
  },
  "1940": {
    F: 12
  },
  "1941": {
    F: 20
  },
  "1942": {
    F: 12
  },
  "1944": {
    F: 13
  },
  "1945": {
    F: 16
  },
  "1946": {
    F: 10
  },
  "1947": {
    F: 11
  },
  "1950": {
    F: 17
  },
  "1953": {
    F: 12
  },
  "1954": {
    F: 13
  },
  "1956": {
    F: 10
  },
  "1959": {
    F: 10
  },
  "1961": {
    F: 11
  },
  "1962": {
    F: 10
  },
  "1964": {
    F: 16
  }
};
const Hine = {
  "1928": {
    F: 10
  },
  "1932": {
    F: 10
  },
  "1934": {
    F: 13
  },
  "1936": {
    F: 10
  },
  "1937": {
    F: 10
  },
  "1938": {
    F: 14
  },
  "1939": {
    F: 17
  },
  "1940": {
    F: 14
  },
  "1942": {
    F: 11
  },
  "1943": {
    F: 11
  },
  "1944": {
    F: 11
  },
  "1945": {
    F: 12
  },
  "1947": {
    F: 15
  },
  "1948": {
    F: 10
  },
  "1950": {
    F: 12
  },
  "1951": {
    F: 11
  },
  "1952": {
    F: 10
  },
  "1953": {
    F: 14
  },
  "1954": {
    F: 15
  },
  "1955": {
    F: 12
  },
  "1956": {
    F: 16
  },
  "1957": {
    F: 12
  },
  "1959": {
    F: 11
  },
  "1961": {
    F: 12
  },
  "1962": {
    F: 11
  },
  "1965": {
    F: 18
  },
  "1967": {
    F: 11
  },
  "1968": {
    F: 10
  },
  "1969": {
    F: 11
  },
  "1974": {
    F: 10
  },
  "1975": {
    F: 11
  },
  "1976": {
    F: 13
  },
  "1980": {
    F: 11
  },
  "1981": {
    F: 12
  },
  "1982": {
    F: 10
  },
  "1985": {
    F: 10
  },
  "1986": {
    F: 11
  },
  "1989": {
    F: 11
  },
  "1993": {
    F: 11
  },
  "2000": {
    F: 10
  }
};
const Hinemoa = {
  "1957": {
    F: 10
  },
  "1960": {
    F: 10
  },
  "1962": {
    F: 11
  },
  "1965": {
    F: 16
  },
  "1990": {
    F: 10
  },
  "1992": {
    F: 10
  },
  "1993": {
    F: 13
  },
  "1996": {
    F: 11
  },
  "1999": {
    F: 11
  },
  "2000": {
    F: 10
  }
};
const Hinerangi = {
  "1992": {
    F: 10
  }
};
const Hoani = {
  "1934": {
    M: 10
  },
  "1937": {
    M: 14
  },
  "1938": {
    M: 14
  },
  "1940": {
    M: 11
  },
  "1941": {
    M: 20
  },
  "1943": {
    M: 10
  },
  "1944": {
    M: 18
  },
  "1946": {
    M: 19
  },
  "1948": {
    M: 13
  },
  "1955": {
    M: 10
  },
  "1968": {
    M: 10
  },
  "1976": {
    M: 10
  },
  "1978": {
    M: 10
  },
  "1983": {
    M: 10
  },
  "1984": {
    M: 10
  },
  "1987": {
    M: 11
  },
  "1989": {
    M: 14
  },
  "1990": {
    M: 12
  },
  "1991": {
    M: 11
  },
  "1993": {
    M: 18
  },
  "1994": {
    M: 16
  },
  "1995": {
    M: 13
  },
  "1996": {
    M: 13
  },
  "1997": {
    M: 18
  },
  "1999": {
    M: 14
  },
  "2000": {
    M: 12
  },
  "2001": {
    M: 12
  },
  "2002": {
    M: 16
  },
  "2004": {
    M: 14
  },
  "2005": {
    M: 11
  },
  "2007": {
    M: 16
  },
  "2008": {
    M: 10
  },
  "2009": {
    M: 11
  },
  "2011": {
    M: 11
  },
  "2012": {
    M: 10
  }
};
const Hohepa = {
  "1933": {
    M: 10
  },
  "1934": {
    M: 10
  },
  "1936": {
    M: 13
  },
  "1937": {
    M: 16
  },
  "1938": {
    M: 14
  },
  "1939": {
    M: 22
  },
  "1940": {
    M: 19
  },
  "1943": {
    M: 13
  },
  "1944": {
    M: 13
  },
  "1945": {
    M: 18
  },
  "1946": {
    M: 12
  },
  "1947": {
    M: 13
  },
  "1948": {
    M: 10
  },
  "1949": {
    M: 10
  },
  "1951": {
    M: 13
  },
  "1952": {
    M: 10
  },
  "1953": {
    M: 11
  },
  "1955": {
    M: 10
  },
  "1957": {
    M: 10
  },
  "1958": {
    M: 10
  },
  "1980": {
    M: 12
  },
  "1984": {
    M: 10
  },
  "1985": {
    M: 15
  },
  "1987": {
    M: 17
  },
  "1988": {
    M: 11
  },
  "1991": {
    M: 14
  },
  "1992": {
    M: 10
  },
  "1995": {
    M: 17
  },
  "1996": {
    M: 11
  },
  "1997": {
    M: 16
  },
  "2006": {
    M: 11
  },
  "2008": {
    M: 13
  }
};
const Holden = {
  "2003": {
    M: 10
  },
  "2004": {
    M: 10
  }
};
const Hollie = {
  "1982": {
    F: 10
  },
  "1983": {
    F: 11
  },
  "1984": {
    F: 28
  },
  "1985": {
    F: 33
  },
  "1986": {
    F: 26
  },
  "1987": {
    F: 28
  },
  "1988": {
    F: 18
  },
  "1989": {
    F: 15
  },
  "1990": {
    F: 15
  },
  "1994": {
    F: 12
  },
  "1997": {
    F: 13
  },
  "1999": {
    F: 13
  },
  "2000": {
    F: 17
  },
  "2002": {
    F: 11
  },
  "2003": {
    F: 17
  },
  "2004": {
    F: 16
  },
  "2005": {
    F: 16
  },
  "2006": {
    F: 17
  },
  "2007": {
    F: 16
  },
  "2008": {
    F: 41
  },
  "2009": {
    F: 26
  },
  "2010": {
    F: 17
  },
  "2011": {
    F: 34
  },
  "2012": {
    F: 21
  },
  "2013": {
    F: 18
  },
  "2014": {
    F: 17
  },
  "2015": {
    F: 13
  },
  "2016": {
    F: 10
  },
  "2017": {
    F: 11
  }
};
const Holly = {
  "1974": {
    F: 22
  },
  "1975": {
    F: 19
  },
  "1976": {
    F: 30
  },
  "1977": {
    F: 29
  },
  "1978": {
    F: 26
  },
  "1979": {
    F: 30
  },
  "1980": {
    F: 32
  },
  "1981": {
    F: 37
  },
  "1982": {
    F: 48
  },
  "1983": {
    F: 70
  },
  "1984": {
    F: 118
  },
  "1985": {
    F: 135
  },
  "1986": {
    F: 122
  },
  "1987": {
    F: 117
  },
  "1988": {
    F: 121
  },
  "1989": {
    F: 122
  },
  "1990": {
    F: 147
  },
  "1991": {
    F: 109
  },
  "1992": {
    F: 101
  },
  "1993": {
    F: 132
  },
  "1994": {
    F: 195
  },
  "1995": {
    F: 146
  },
  "1996": {
    F: 155
  },
  "1997": {
    F: 164
  },
  "1998": {
    F: 159
  },
  "1999": {
    F: 123
  },
  "2000": {
    F: 137
  },
  "2001": {
    F: 141
  },
  "2002": {
    F: 150
  },
  "2003": {
    F: 165
  },
  "2004": {
    F: 159
  },
  "2005": {
    F: 171
  },
  "2006": {
    F: 151
  },
  "2007": {
    F: 152
  },
  "2008": {
    F: 161
  },
  "2009": {
    F: 134
  },
  "2010": {
    F: 124
  },
  "2011": {
    F: 108
  },
  "2012": {
    F: 100
  },
  "2013": {
    F: 73
  },
  "2014": {
    F: 77
  },
  "2015": {
    F: 75
  },
  "2016": {
    F: 61
  },
  "2017": {
    F: 41
  },
  "2018": {
    F: 38
  },
  "2019": {
    F: 51
  },
  "2020": {
    F: 48
  },
  "2021": {
    F: 25
  }
};
const Hone = {
  "1914": {
    M: 10
  },
  "1915": {
    M: 10
  },
  "1916": {
    M: 13
  },
  "1918": {
    M: 10
  },
  "1920": {
    M: 10
  },
  "1921": {
    M: 16
  },
  "1922": {
    M: 11
  },
  "1923": {
    M: 15
  },
  "1926": {
    M: 12
  },
  "1928": {
    M: 14
  },
  "1929": {
    M: 13
  },
  "1930": {
    M: 10
  },
  "1931": {
    M: 11
  },
  "1932": {
    M: 12
  },
  "1933": {
    M: 15
  },
  "1934": {
    M: 10
  },
  "1935": {
    M: 14
  },
  "1936": {
    M: 18
  },
  "1937": {
    M: 17
  },
  "1938": {
    M: 16
  },
  "1939": {
    M: 22
  },
  "1940": {
    M: 20
  },
  "1941": {
    M: 13
  },
  "1942": {
    M: 13
  },
  "1943": {
    M: 13
  },
  "1944": {
    M: 10
  },
  "1945": {
    M: 18
  },
  "1946": {
    M: 15
  },
  "1947": {
    M: 18
  },
  "1948": {
    M: 16
  },
  "1949": {
    M: 22
  },
  "1952": {
    M: 12
  },
  "1955": {
    M: 10
  },
  "1957": {
    M: 10
  },
  "1960": {
    M: 12
  },
  "1983": {
    M: 11
  },
  "1989": {
    M: 11
  },
  "1991": {
    M: 11
  },
  "1992": {
    M: 11
  },
  "1993": {
    M: 13
  },
  "1994": {
    M: 13
  },
  "1996": {
    M: 12
  },
  "1997": {
    M: 11
  },
  "1998": {
    M: 11
  },
  "1999": {
    M: 11
  },
  "2009": {
    M: 13
  }
};
const Honey = {
  "2005": {
    F: 27
  },
  "2006": {
    F: 15
  },
  "2007": {
    F: 12
  },
  "2010": {
    F: 16
  },
  "2013": {
    F: 13
  },
  "2014": {
    F: 16
  },
  "2017": {
    F: 10
  },
  "2019": {
    F: 12
  },
  "2021": {
    F: 15
  }
};
const Honor = {
  "2009": {
    F: 17
  },
  "2010": {
    F: 13
  },
  "2011": {
    F: 18
  },
  "2012": {
    F: 36
  },
  "2013": {
    F: 29
  },
  "2014": {
    F: 31
  },
  "2015": {
    F: 17
  },
  "2016": {
    F: 20
  },
  "2017": {
    F: 16
  },
  "2018": {
    F: 14
  },
  "2019": {
    F: 15
  },
  "2020": {
    F: 10
  }
};
const Honour = {
  "2014": {
    F: 11
  }
};
const Hope = {
  "1977": {
    F: 12
  },
  "1979": {
    F: 16
  },
  "1984": {
    F: 14
  },
  "1987": {
    F: 16
  },
  "1988": {
    F: 16
  },
  "1989": {
    F: 30
  },
  "1990": {
    F: 36
  },
  "1991": {
    F: 34
  },
  "1992": {
    F: 29
  },
  "1993": {
    F: 29
  },
  "1994": {
    F: 26
  },
  "1995": {
    F: 45
  },
  "1996": {
    F: 35
  },
  "1997": {
    F: 37
  },
  "1998": {
    F: 47
  },
  "1999": {
    F: 38
  },
  "2000": {
    F: 51
  },
  "2001": {
    F: 40
  },
  "2002": {
    F: 36
  },
  "2003": {
    F: 44
  },
  "2004": {
    F: 29
  },
  "2005": {
    F: 33
  },
  "2006": {
    F: 24
  },
  "2007": {
    F: 43
  },
  "2008": {
    F: 30
  },
  "2009": {
    F: 29
  },
  "2010": {
    F: 28
  },
  "2011": {
    F: 34
  },
  "2012": {
    F: 42
  },
  "2013": {
    F: 34
  },
  "2014": {
    F: 18
  },
  "2015": {
    F: 35
  },
  "2016": {
    F: 24
  },
  "2017": {
    F: 33
  },
  "2018": {
    F: 27
  },
  "2019": {
    F: 33
  },
  "2020": {
    F: 31
  },
  "2021": {
    F: 16
  }
};
const Horace = {
  "1900": {
    M: 37
  },
  "1901": {
    M: 41
  },
  "1902": {
    M: 39
  },
  "1903": {
    M: 41
  },
  "1904": {
    M: 42
  },
  "1905": {
    M: 60
  },
  "1906": {
    M: 47
  },
  "1907": {
    M: 42
  },
  "1908": {
    M: 40
  },
  "1909": {
    M: 29
  },
  "1910": {
    M: 37
  },
  "1911": {
    M: 40
  },
  "1912": {
    M: 38
  },
  "1913": {
    M: 31
  },
  "1914": {
    M: 44
  },
  "1915": {
    M: 32
  },
  "1916": {
    M: 40
  },
  "1917": {
    M: 36
  },
  "1918": {
    M: 22
  },
  "1919": {
    M: 22
  },
  "1920": {
    M: 21
  },
  "1921": {
    M: 29
  },
  "1922": {
    M: 17
  },
  "1923": {
    M: 27
  },
  "1924": {
    M: 10
  },
  "1925": {
    M: 10
  },
  "1926": {
    M: 14
  },
  "1927": {
    M: 11
  },
  "1930": {
    M: 11
  },
  "1932": {
    M: 10
  }
};
const Hori = {
  "1915": {
    M: 10
  },
  "1918": {
    M: 11
  },
  "1919": {
    M: 10
  },
  "1929": {
    M: 12
  },
  "1932": {
    M: 13
  },
  "1934": {
    M: 13
  },
  "1935": {
    M: 10
  },
  "1936": {
    M: 15
  },
  "1937": {
    M: 15
  },
  "1938": {
    M: 14
  },
  "1939": {
    M: 15
  },
  "1940": {
    M: 20
  },
  "1941": {
    M: 14
  },
  "1942": {
    M: 19
  },
  "1943": {
    M: 22
  },
  "1944": {
    M: 20
  },
  "1945": {
    M: 17
  },
  "1946": {
    M: 18
  },
  "1947": {
    M: 16
  },
  "1948": {
    M: 12
  },
  "1949": {
    M: 15
  },
  "1951": {
    M: 11
  },
  "1992": {
    M: 10
  }
};
const Hosea = {
  "2011": {
    M: 10
  },
  "2012": {
    M: 11
  },
  "2013": {
    M: 10
  },
  "2015": {
    M: 12
  },
  "2020": {
    M: 11
  }
};
const Howard = {
  "1900": {
    M: 10
  },
  "1901": {
    M: 18
  },
  "1902": {
    M: 22
  },
  "1903": {
    M: 18
  },
  "1904": {
    M: 15
  },
  "1905": {
    M: 17
  },
  "1906": {
    M: 20
  },
  "1907": {
    M: 24
  },
  "1908": {
    M: 19
  },
  "1909": {
    M: 33
  },
  "1910": {
    M: 24
  },
  "1911": {
    M: 24
  },
  "1912": {
    M: 18
  },
  "1913": {
    M: 34
  },
  "1914": {
    M: 22
  },
  "1915": {
    M: 23
  },
  "1916": {
    M: 29
  },
  "1917": {
    M: 27
  },
  "1918": {
    M: 29
  },
  "1919": {
    M: 28
  },
  "1920": {
    M: 30
  },
  "1921": {
    M: 27
  },
  "1922": {
    M: 32
  },
  "1923": {
    M: 19
  },
  "1924": {
    M: 30
  },
  "1925": {
    M: 33
  },
  "1926": {
    M: 22
  },
  "1927": {
    M: 16
  },
  "1928": {
    M: 18
  },
  "1929": {
    M: 21
  },
  "1930": {
    M: 13
  },
  "1931": {
    M: 20
  },
  "1932": {
    M: 18
  },
  "1933": {
    M: 12
  },
  "1934": {
    M: 17
  },
  "1935": {
    M: 23
  },
  "1936": {
    M: 19
  },
  "1937": {
    M: 16
  },
  "1938": {
    M: 22
  },
  "1939": {
    M: 13
  },
  "1940": {
    M: 14
  },
  "1941": {
    M: 26
  },
  "1942": {
    M: 30
  },
  "1943": {
    M: 19
  },
  "1944": {
    M: 32
  },
  "1945": {
    M: 31
  },
  "1946": {
    M: 33
  },
  "1947": {
    M: 35
  },
  "1948": {
    M: 36
  },
  "1949": {
    M: 40
  },
  "1950": {
    M: 37
  },
  "1951": {
    M: 34
  },
  "1952": {
    M: 44
  },
  "1953": {
    M: 43
  },
  "1954": {
    M: 45
  },
  "1955": {
    M: 33
  },
  "1956": {
    M: 40
  },
  "1957": {
    M: 38
  },
  "1958": {
    M: 36
  },
  "1959": {
    M: 30
  },
  "1960": {
    M: 35
  },
  "1961": {
    M: 28
  },
  "1962": {
    M: 32
  },
  "1963": {
    M: 33
  },
  "1964": {
    M: 25
  },
  "1965": {
    M: 23
  },
  "1966": {
    M: 20
  },
  "1967": {
    M: 18
  },
  "1968": {
    M: 20
  },
  "1970": {
    M: 17
  },
  "1971": {
    M: 16
  },
  "1972": {
    M: 14
  },
  "1973": {
    M: 14
  },
  "1974": {
    M: 10
  },
  "1976": {
    M: 11
  }
};
const Hubert = {
  "1900": {
    M: 14
  },
  "1901": {
    M: 17
  },
  "1903": {
    M: 11
  },
  "1904": {
    M: 14
  },
  "1905": {
    M: 17
  },
  "1906": {
    M: 10
  },
  "1907": {
    M: 13
  },
  "1908": {
    M: 14
  },
  "1909": {
    M: 17
  },
  "1910": {
    M: 13
  },
  "1911": {
    M: 12
  },
  "1912": {
    M: 14
  },
  "1913": {
    M: 12
  },
  "1914": {
    M: 15
  },
  "1915": {
    M: 10
  },
  "1916": {
    M: 18
  },
  "1917": {
    M: 13
  },
  "1918": {
    M: 14
  },
  "1919": {
    M: 11
  },
  "1923": {
    M: 10
  },
  "1924": {
    M: 10
  },
  "1925": {
    M: 11
  }
};
const Hudson = {
  "2006": {
    M: 10
  },
  "2009": {
    M: 11
  },
  "2010": {
    M: 16
  },
  "2011": {
    M: 20
  },
  "2012": {
    M: 38
  },
  "2013": {
    M: 37
  },
  "2014": {
    M: 57
  },
  "2015": {
    M: 72
  },
  "2016": {
    M: 74
  },
  "2017": {
    M: 84
  },
  "2018": {
    M: 118
  },
  "2019": {
    M: 144
  },
  "2020": {
    M: 140
  },
  "2021": {
    M: 160
  }
};
const Hugh = {
  "1900": {
    M: 45
  },
  "1901": {
    M: 57
  },
  "1902": {
    M: 63
  },
  "1903": {
    M: 59
  },
  "1904": {
    M: 58
  },
  "1905": {
    M: 65
  },
  "1906": {
    M: 56
  },
  "1907": {
    M: 59
  },
  "1908": {
    M: 64
  },
  "1909": {
    M: 63
  },
  "1910": {
    M: 45
  },
  "1911": {
    M: 63
  },
  "1912": {
    M: 78
  },
  "1913": {
    M: 82
  },
  "1914": {
    M: 66
  },
  "1915": {
    M: 73
  },
  "1916": {
    M: 56
  },
  "1917": {
    M: 65
  },
  "1918": {
    M: 51
  },
  "1919": {
    M: 46
  },
  "1920": {
    M: 48
  },
  "1921": {
    M: 67
  },
  "1922": {
    M: 55
  },
  "1923": {
    M: 46
  },
  "1924": {
    M: 62
  },
  "1925": {
    M: 48
  },
  "1926": {
    M: 50
  },
  "1927": {
    M: 58
  },
  "1928": {
    M: 30
  },
  "1929": {
    M: 41
  },
  "1930": {
    M: 49
  },
  "1931": {
    M: 48
  },
  "1932": {
    M: 43
  },
  "1933": {
    M: 33
  },
  "1934": {
    M: 35
  },
  "1935": {
    M: 32
  },
  "1936": {
    M: 35
  },
  "1937": {
    M: 38
  },
  "1938": {
    M: 36
  },
  "1939": {
    M: 30
  },
  "1940": {
    M: 33
  },
  "1941": {
    M: 48
  },
  "1942": {
    M: 44
  },
  "1943": {
    M: 38
  },
  "1944": {
    M: 45
  },
  "1945": {
    M: 42
  },
  "1946": {
    M: 38
  },
  "1947": {
    M: 55
  },
  "1948": {
    M: 59
  },
  "1949": {
    M: 43
  },
  "1950": {
    M: 34
  },
  "1951": {
    M: 39
  },
  "1952": {
    M: 53
  },
  "1953": {
    M: 37
  },
  "1954": {
    M: 27
  },
  "1955": {
    M: 51
  },
  "1956": {
    M: 45
  },
  "1957": {
    M: 51
  },
  "1958": {
    M: 44
  },
  "1959": {
    M: 46
  },
  "1960": {
    M: 51
  },
  "1961": {
    M: 44
  },
  "1962": {
    M: 46
  },
  "1963": {
    M: 41
  },
  "1964": {
    M: 37
  },
  "1965": {
    M: 21
  },
  "1966": {
    M: 23
  },
  "1967": {
    M: 28
  },
  "1968": {
    M: 21
  },
  "1969": {
    M: 22
  },
  "1970": {
    M: 17
  },
  "1971": {
    M: 19
  },
  "1973": {
    M: 10
  },
  "1974": {
    M: 14
  },
  "1975": {
    M: 10
  },
  "1977": {
    M: 14
  },
  "1979": {
    M: 12
  },
  "1981": {
    M: 10
  },
  "1982": {
    M: 11
  },
  "1984": {
    M: 11
  },
  "1985": {
    M: 17
  },
  "1987": {
    M: 17
  },
  "1988": {
    M: 21
  },
  "1989": {
    M: 11
  },
  "1990": {
    M: 19
  },
  "1991": {
    M: 19
  },
  "1992": {
    M: 22
  },
  "1993": {
    M: 14
  },
  "1994": {
    M: 23
  },
  "1995": {
    M: 25
  },
  "1996": {
    M: 28
  },
  "1997": {
    M: 24
  },
  "1998": {
    M: 14
  },
  "1999": {
    M: 18
  },
  "2000": {
    M: 11
  },
  "2001": {
    M: 20
  },
  "2002": {
    M: 10
  },
  "2003": {
    M: 14
  },
  "2004": {
    M: 21
  },
  "2005": {
    M: 20
  },
  "2006": {
    M: 17
  },
  "2007": {
    M: 15
  },
  "2009": {
    M: 12
  },
  "2010": {
    M: 23
  },
  "2011": {
    M: 15
  },
  "2012": {
    M: 16
  },
  "2013": {
    M: 13
  },
  "2014": {
    M: 18
  },
  "2015": {
    M: 27
  },
  "2016": {
    M: 16
  },
  "2017": {
    M: 17
  },
  "2018": {
    M: 21
  },
  "2019": {
    M: 27
  },
  "2020": {
    M: 16
  },
  "2021": {
    M: 16
  }
};
const Hugo = {
  "1992": {
    M: 19
  },
  "1995": {
    M: 19
  },
  "1996": {
    M: 13
  },
  "1997": {
    M: 18
  },
  "1998": {
    M: 16
  },
  "1999": {
    M: 23
  },
  "2000": {
    M: 15
  },
  "2001": {
    M: 17
  },
  "2002": {
    M: 22
  },
  "2003": {
    M: 22
  },
  "2004": {
    M: 32
  },
  "2005": {
    M: 33
  },
  "2006": {
    M: 49
  },
  "2007": {
    M: 42
  },
  "2008": {
    M: 37
  },
  "2009": {
    M: 53
  },
  "2010": {
    M: 54
  },
  "2011": {
    M: 40
  },
  "2012": {
    M: 74
  },
  "2013": {
    M: 71
  },
  "2014": {
    M: 68
  },
  "2015": {
    M: 94
  },
  "2016": {
    M: 95
  },
  "2017": {
    M: 96
  },
  "2018": {
    M: 111
  },
  "2019": {
    M: 110
  },
  "2020": {
    M: 126
  },
  "2021": {
    M: 127
  }
};
const Huia = {
  "1905": {
    M: 16
  },
  "1906": {
    M: 11
  },
  "1943": {
    F: 10
  },
  "1948": {
    F: 11
  },
  "1952": {
    F: 14
  },
  "1955": {
    F: 11
  },
  "1957": {
    F: 12
  },
  "1958": {
    F: 10
  },
  "1959": {
    F: 15
  },
  "1960": {
    F: 15
  },
  "1961": {
    F: 15
  },
  "1962": {
    F: 13
  },
  "1963": {
    F: 11
  },
  "1967": {
    F: 10
  },
  "1972": {
    F: 11
  },
  "1975": {
    F: 10
  },
  "1977": {
    F: 10
  },
  "1992": {
    F: 10
  }
};
const Hunter = {
  "1994": {
    M: 14
  },
  "1995": {
    M: 13
  },
  "1996": {
    M: 16
  },
  "1997": {
    M: 17
  },
  "1998": {
    M: 40
  },
  "1999": {
    F: 10,
    M: 58
  },
  "2000": {
    M: 56
  },
  "2001": {
    M: 56
  },
  "2002": {
    F: 13,
    M: 76
  },
  "2003": {
    F: 12,
    M: 108
  },
  "2004": {
    F: 11,
    M: 97
  },
  "2005": {
    M: 114
  },
  "2006": {
    M: 108
  },
  "2007": {
    F: 16,
    M: 206
  },
  "2008": {
    M: 225
  },
  "2009": {
    M: 220
  },
  "2010": {
    M: 188
  },
  "2011": {
    M: 225
  },
  "2012": {
    M: 183
  },
  "2013": {
    M: 215
  },
  "2014": {
    M: 210
  },
  "2015": {
    M: 236
  },
  "2016": {
    M: 244
  },
  "2017": {
    M: 245
  },
  "2018": {
    M: 207
  },
  "2019": {
    M: 178
  },
  "2020": {
    M: 174
  },
  "2021": {
    M: 144
  }
};
const Huxley = {
  "2015": {
    M: 10
  },
  "2016": {
    M: 11
  },
  "2018": {
    M: 15
  },
  "2019": {
    M: 19
  },
  "2020": {
    M: 20
  },
  "2021": {
    M: 22
  }
};
const Iain = {
  "1949": {
    M: 10
  },
  "1952": {
    M: 10
  },
  "1953": {
    M: 11
  },
  "1954": {
    M: 16
  },
  "1955": {
    M: 12
  },
  "1956": {
    M: 15
  },
  "1957": {
    M: 20
  },
  "1958": {
    M: 15
  },
  "1959": {
    M: 18
  },
  "1960": {
    M: 22
  },
  "1961": {
    M: 17
  },
  "1962": {
    M: 19
  },
  "1963": {
    M: 24
  },
  "1964": {
    M: 33
  },
  "1965": {
    M: 20
  },
  "1966": {
    M: 34
  },
  "1967": {
    M: 21
  },
  "1968": {
    M: 23
  },
  "1969": {
    M: 26
  },
  "1970": {
    M: 22
  },
  "1971": {
    M: 22
  },
  "1972": {
    M: 19
  },
  "1973": {
    M: 21
  },
  "1974": {
    M: 24
  },
  "1975": {
    M: 20
  },
  "1976": {
    M: 28
  },
  "1977": {
    M: 19
  },
  "1978": {
    M: 23
  },
  "1979": {
    M: 13
  },
  "1980": {
    M: 24
  },
  "1981": {
    M: 17
  },
  "1982": {
    M: 19
  },
  "1983": {
    M: 17
  },
  "1985": {
    M: 11
  },
  "1986": {
    M: 12
  },
  "1988": {
    M: 10
  },
  "1992": {
    M: 10
  }
};
const Ian = {
  "1900": {
    M: 26
  },
  "1901": {
    M: 27
  },
  "1902": {
    M: 30
  },
  "1903": {
    M: 30
  },
  "1904": {
    M: 27
  },
  "1905": {
    M: 53
  },
  "1906": {
    M: 33
  },
  "1907": {
    M: 50
  },
  "1908": {
    M: 57
  },
  "1909": {
    M: 76
  },
  "1910": {
    M: 58
  },
  "1911": {
    M: 45
  },
  "1912": {
    M: 67
  },
  "1913": {
    M: 79
  },
  "1914": {
    M: 147
  },
  "1915": {
    M: 200
  },
  "1916": {
    M: 148
  },
  "1917": {
    M: 107
  },
  "1918": {
    M: 107
  },
  "1919": {
    M: 119
  },
  "1920": {
    M: 146
  },
  "1921": {
    M: 172
  },
  "1922": {
    M: 193
  },
  "1923": {
    M: 186
  },
  "1924": {
    M: 188
  },
  "1925": {
    M: 191
  },
  "1926": {
    M: 225
  },
  "1927": {
    M: 273
  },
  "1928": {
    M: 248
  },
  "1929": {
    M: 256
  },
  "1930": {
    M: 271
  },
  "1931": {
    M: 300
  },
  "1932": {
    M: 271
  },
  "1933": {
    M: 258
  },
  "1934": {
    M: 282
  },
  "1935": {
    M: 245
  },
  "1936": {
    M: 247
  },
  "1937": {
    M: 295
  },
  "1938": {
    M: 300
  },
  "1939": {
    M: 310
  },
  "1940": {
    M: 357
  },
  "1941": {
    M: 385
  },
  "1942": {
    M: 345
  },
  "1943": {
    M: 346
  },
  "1944": {
    M: 375
  },
  "1945": {
    M: 412
  },
  "1946": {
    M: 503
  },
  "1947": {
    M: 477
  },
  "1948": {
    M: 406
  },
  "1949": {
    M: 440
  },
  "1950": {
    M: 421
  },
  "1951": {
    M: 474
  },
  "1952": {
    M: 472
  },
  "1953": {
    M: 467
  },
  "1954": {
    M: 438
  },
  "1955": {
    M: 496
  },
  "1956": {
    M: 451
  },
  "1957": {
    M: 465
  },
  "1958": {
    M: 432
  },
  "1959": {
    M: 431
  },
  "1960": {
    M: 452
  },
  "1961": {
    M: 453
  },
  "1962": {
    M: 394
  },
  "1963": {
    M: 389
  },
  "1964": {
    M: 365
  },
  "1965": {
    M: 303
  },
  "1966": {
    M: 303
  },
  "1967": {
    M: 257
  },
  "1968": {
    M: 262
  },
  "1969": {
    M: 213
  },
  "1970": {
    M: 182
  },
  "1971": {
    M: 176
  },
  "1972": {
    M: 127
  },
  "1973": {
    M: 108
  },
  "1974": {
    M: 112
  },
  "1975": {
    M: 91
  },
  "1976": {
    M: 95
  },
  "1977": {
    M: 73
  },
  "1978": {
    M: 78
  },
  "1979": {
    M: 59
  },
  "1980": {
    M: 72
  },
  "1981": {
    M: 53
  },
  "1982": {
    M: 73
  },
  "1983": {
    M: 56
  },
  "1984": {
    M: 70
  },
  "1985": {
    M: 63
  },
  "1986": {
    M: 43
  },
  "1987": {
    M: 40
  },
  "1988": {
    M: 50
  },
  "1989": {
    M: 33
  },
  "1990": {
    M: 47
  },
  "1991": {
    M: 29
  },
  "1992": {
    M: 36
  },
  "1993": {
    M: 36
  },
  "1994": {
    M: 17
  },
  "1995": {
    M: 19
  },
  "1996": {
    M: 10
  },
  "1997": {
    M: 15
  },
  "1998": {
    M: 12
  },
  "1999": {
    M: 10
  },
  "2000": {
    M: 12
  },
  "2001": {
    M: 14
  },
  "2003": {
    M: 11
  },
  "2004": {
    M: 12
  },
  "2006": {
    M: 16
  },
  "2007": {
    M: 14
  },
  "2008": {
    M: 14
  },
  "2010": {
    M: 12
  },
  "2011": {
    M: 11
  },
  "2012": {
    M: 15
  },
  "2013": {
    M: 14
  },
  "2014": {
    M: 17
  },
  "2015": {
    M: 13
  },
  "2016": {
    M: 21
  },
  "2017": {
    M: 22
  },
  "2018": {
    M: 22
  },
  "2019": {
    M: 27
  },
  "2020": {
    M: 21
  },
  "2021": {
    M: 18
  }
};
const Ibrahim = {
  "2014": {
    M: 14
  },
  "2015": {
    M: 12
  },
  "2018": {
    M: 12
  },
  "2019": {
    M: 13
  },
  "2020": {
    M: 10
  },
  "2021": {
    M: 11
  }
};
const Ida = {
  "1900": {
    F: 74
  },
  "1901": {
    F: 73
  },
  "1902": {
    F: 51
  },
  "1903": {
    F: 64
  },
  "1904": {
    F: 64
  },
  "1905": {
    F: 62
  },
  "1906": {
    F: 60
  },
  "1907": {
    F: 62
  },
  "1908": {
    F: 49
  },
  "1909": {
    F: 56
  },
  "1910": {
    F: 43
  },
  "1911": {
    F: 50
  },
  "1912": {
    F: 43
  },
  "1913": {
    F: 50
  },
  "1914": {
    F: 47
  },
  "1915": {
    F: 50
  },
  "1916": {
    F: 39
  },
  "1917": {
    F: 32
  },
  "1918": {
    F: 34
  },
  "1919": {
    F: 33
  },
  "1920": {
    F: 35
  },
  "1921": {
    F: 34
  },
  "1922": {
    F: 21
  },
  "1923": {
    F: 29
  },
  "1924": {
    F: 26
  },
  "1925": {
    F: 22
  },
  "1926": {
    F: 18
  },
  "1927": {
    F: 11
  },
  "1928": {
    F: 17
  },
  "1929": {
    F: 17
  },
  "1930": {
    F: 12
  },
  "1932": {
    F: 15
  },
  "1934": {
    F: 13
  },
  "2013": {
    F: 10
  },
  "2015": {
    F: 11
  },
  "2016": {
    F: 10
  },
  "2017": {
    F: 13
  },
  "2019": {
    F: 15
  },
  "2020": {
    F: 18
  },
  "2021": {
    F: 20
  }
};
const Ihaia = {
  "2001": {
    M: 12
  },
  "2013": {
    M: 12
  },
  "2014": {
    M: 16
  },
  "2015": {
    M: 19
  },
  "2016": {
    M: 19
  },
  "2017": {
    M: 18
  },
  "2018": {
    M: 27
  },
  "2019": {
    M: 16
  },
  "2020": {
    M: 29
  },
  "2021": {
    M: 22
  }
};
const Ihaka = {
  "1992": {
    M: 10
  },
  "1993": {
    M: 10
  },
  "1994": {
    M: 11
  },
  "1997": {
    M: 10
  },
  "2007": {
    M: 11
  },
  "2009": {
    M: 10
  },
  "2010": {
    M: 15
  },
  "2013": {
    M: 10
  },
  "2017": {
    M: 10
  }
};
const Ilaisaane = {
  "2015": {
    F: 11
  }
};
const Imogen = {
  "1988": {
    F: 13
  },
  "1990": {
    F: 11
  },
  "1991": {
    F: 16
  },
  "1992": {
    F: 20
  },
  "1993": {
    F: 17
  },
  "1994": {
    F: 11
  },
  "1995": {
    F: 13
  },
  "1996": {
    F: 16
  },
  "1997": {
    F: 22
  },
  "1998": {
    F: 15
  },
  "1999": {
    F: 23
  },
  "2000": {
    F: 31
  },
  "2001": {
    F: 29
  },
  "2002": {
    F: 26
  },
  "2003": {
    F: 37
  },
  "2004": {
    F: 35
  },
  "2005": {
    F: 40
  },
  "2006": {
    F: 29
  },
  "2007": {
    F: 33
  },
  "2008": {
    F: 31
  },
  "2009": {
    F: 69
  },
  "2010": {
    F: 44
  },
  "2011": {
    F: 36
  },
  "2012": {
    F: 44
  },
  "2013": {
    F: 47
  },
  "2014": {
    F: 55
  },
  "2015": {
    F: 46
  },
  "2016": {
    F: 38
  },
  "2017": {
    F: 35
  },
  "2018": {
    F: 48
  },
  "2019": {
    F: 51
  },
  "2020": {
    F: 38
  },
  "2021": {
    F: 35
  }
};
const Ina = {
  "1900": {
    F: 12
  },
  "1901": {
    F: 15
  },
  "1902": {
    F: 12
  },
  "1903": {
    F: 16
  },
  "1904": {
    F: 12
  },
  "1905": {
    F: 22
  },
  "1906": {
    F: 35
  },
  "1907": {
    F: 20
  },
  "1908": {
    F: 20
  },
  "1909": {
    F: 22
  },
  "1910": {
    F: 20
  },
  "1911": {
    F: 17
  },
  "1912": {
    F: 23
  },
  "1913": {
    F: 25
  },
  "1914": {
    F: 27
  },
  "1915": {
    F: 21
  },
  "1916": {
    F: 33
  },
  "1917": {
    F: 21
  },
  "1918": {
    F: 21
  },
  "1919": {
    F: 19
  },
  "1920": {
    F: 19
  },
  "1921": {
    F: 18
  },
  "1922": {
    F: 12
  },
  "1923": {
    F: 17
  },
  "1924": {
    F: 19
  },
  "1925": {
    F: 20
  },
  "1926": {
    F: 10
  },
  "1927": {
    F: 19
  },
  "1928": {
    F: 13
  },
  "1929": {
    F: 13
  },
  "1930": {
    F: 16
  },
  "1931": {
    F: 10
  },
  "1932": {
    F: 11
  },
  "1934": {
    F: 12
  },
  "1935": {
    F: 13
  }
};
const Inaaya = {
  "2018": {
    F: 12
  }
};
const Inaya = {
  "2020": {
    F: 12
  }
};
const Indi = {
  "2011": {
    F: 17
  },
  "2012": {
    F: 17
  },
  "2013": {
    F: 42
  },
  "2014": {
    F: 40
  },
  "2015": {
    F: 38
  },
  "2016": {
    F: 35
  },
  "2017": {
    F: 28
  },
  "2018": {
    F: 27
  },
  "2019": {
    F: 21
  },
  "2020": {
    F: 18
  },
  "2021": {
    F: 18
  }
};
const India = {
  "1993": {
    F: 17
  },
  "1994": {
    F: 24
  },
  "1995": {
    F: 17
  },
  "1996": {
    F: 19
  },
  "1997": {
    F: 16
  },
  "1998": {
    F: 22
  },
  "1999": {
    F: 28
  },
  "2000": {
    F: 19
  },
  "2001": {
    F: 24
  },
  "2002": {
    F: 27
  },
  "2003": {
    F: 23
  },
  "2004": {
    F: 23
  },
  "2005": {
    F: 17
  },
  "2006": {
    F: 27
  },
  "2007": {
    F: 19
  },
  "2008": {
    F: 27
  },
  "2009": {
    F: 20
  },
  "2010": {
    F: 34
  },
  "2011": {
    F: 26
  },
  "2012": {
    F: 21
  },
  "2013": {
    F: 30
  },
  "2014": {
    F: 12
  },
  "2015": {
    F: 20
  },
  "2016": {
    F: 15
  },
  "2017": {
    F: 15
  },
  "2018": {
    F: 12
  },
  "2019": {
    F: 13
  },
  "2020": {
    F: 11
  }
};
const Indiana = {
  "2006": {
    F: 15
  },
  "2008": {
    F: 21
  },
  "2009": {
    F: 10
  },
  "2010": {
    F: 19
  },
  "2011": {
    F: 20
  },
  "2012": {
    F: 32
  },
  "2013": {
    F: 38
  },
  "2014": {
    F: 20
  },
  "2015": {
    F: 24
  },
  "2016": {
    F: 34
  },
  "2017": {
    F: 22
  },
  "2018": {
    F: 33
  },
  "2019": {
    F: 25
  },
  "2020": {
    F: 17
  }
};
const Indianna = {
  "2016": {
    F: 14
  }
};
const Indie = {
  "2010": {
    F: 23
  },
  "2011": {
    F: 31
  },
  "2012": {
    F: 64
  },
  "2013": {
    F: 68
  },
  "2014": {
    F: 95
  },
  "2015": {
    F: 91
  },
  "2016": {
    F: 80
  },
  "2017": {
    F: 99
  },
  "2018": {
    F: 79
  },
  "2019": {
    F: 85
  },
  "2020": {
    F: 73
  },
  "2021": {
    F: 72
  }
};
const Indigo = {
  "2010": {
    F: 16
  },
  "2011": {
    F: 10
  },
  "2012": {
    F: 31
  },
  "2013": {
    F: 22
  },
  "2014": {
    F: 24
  },
  "2015": {
    F: 19
  },
  "2016": {
    F: 19
  },
  "2017": {
    F: 22
  },
  "2018": {
    F: 18
  },
  "2019": {
    F: 13
  },
  "2020": {
    F: 15
  },
  "2021": {
    F: 11
  }
};
const Indy = {
  "2011": {
    F: 17
  },
  "2012": {
    F: 29
  },
  "2013": {
    F: 30
  },
  "2014": {
    F: 27
  },
  "2015": {
    F: 29
  },
  "2016": {
    F: 17
  },
  "2017": {
    F: 21
  },
  "2018": {
    F: 16
  },
  "2019": {
    F: 26
  },
  "2020": {
    F: 12
  },
  "2021": {
    F: 20
  }
};
const Inez = {
  "1900": {
    F: 10
  },
  "1903": {
    F: 13
  },
  "1904": {
    F: 11
  },
  "1906": {
    F: 21
  },
  "1907": {
    F: 13
  },
  "1908": {
    F: 16
  },
  "1909": {
    F: 19
  },
  "1910": {
    F: 14
  },
  "1911": {
    F: 12
  },
  "1912": {
    F: 14
  },
  "1913": {
    F: 14
  },
  "1914": {
    F: 15
  },
  "1915": {
    F: 15
  },
  "1917": {
    F: 12
  },
  "1918": {
    F: 15
  },
  "1920": {
    F: 11
  },
  "1921": {
    F: 14
  },
  "1922": {
    F: 14
  },
  "1923": {
    F: 11
  },
  "1924": {
    F: 10
  },
  "1925": {
    F: 12
  },
  "1926": {
    F: 13
  }
};
const Ingrid = {
  "1955": {
    F: 15
  },
  "1956": {
    F: 14
  },
  "1957": {
    F: 32
  },
  "1958": {
    F: 17
  },
  "1959": {
    F: 18
  },
  "1960": {
    F: 25
  },
  "1961": {
    F: 31
  },
  "1962": {
    F: 28
  },
  "1963": {
    F: 29
  },
  "1964": {
    F: 29
  },
  "1965": {
    F: 21
  },
  "1966": {
    F: 21
  },
  "1967": {
    F: 21
  },
  "1968": {
    F: 23
  },
  "1969": {
    F: 17
  },
  "1970": {
    F: 18
  },
  "1971": {
    F: 33
  },
  "1972": {
    F: 28
  },
  "1973": {
    F: 26
  },
  "1974": {
    F: 29
  },
  "1975": {
    F: 26
  },
  "1976": {
    F: 21
  },
  "1977": {
    F: 21
  },
  "1979": {
    F: 14
  },
  "1981": {
    F: 11
  },
  "1982": {
    F: 11
  },
  "1983": {
    F: 12
  },
  "1984": {
    F: 12
  },
  "1985": {
    F: 10
  },
  "1986": {
    F: 12
  },
  "1988": {
    F: 10
  }
};
const Ioane = {
  "1995": {
    M: 10
  },
  "2010": {
    M: 11
  }
};
const Iona = {
  "1961": {
    F: 14
  }
};
const Ira = {
  "2019": {
    F: 11
  }
};
const Iraia = {
  "2020": {
    M: 10
  }
};
const Irene = {
  "1900": {
    F: 94
  },
  "1901": {
    F: 117
  },
  "1902": {
    F: 113
  },
  "1903": {
    F: 116
  },
  "1904": {
    F: 154
  },
  "1905": {
    F: 137
  },
  "1906": {
    F: 154
  },
  "1907": {
    F: 141
  },
  "1908": {
    F: 143
  },
  "1909": {
    F: 147
  },
  "1910": {
    F: 144
  },
  "1911": {
    F: 116
  },
  "1912": {
    F: 121
  },
  "1913": {
    F: 114
  },
  "1914": {
    F: 96
  },
  "1915": {
    F: 96
  },
  "1916": {
    F: 96
  },
  "1917": {
    F: 105
  },
  "1918": {
    F: 85
  },
  "1919": {
    F: 89
  },
  "1920": {
    F: 106
  },
  "1921": {
    F: 128
  },
  "1922": {
    F: 90
  },
  "1923": {
    F: 98
  },
  "1924": {
    F: 110
  },
  "1925": {
    F: 92
  },
  "1926": {
    F: 101
  },
  "1927": {
    F: 81
  },
  "1928": {
    F: 101
  },
  "1929": {
    F: 81
  },
  "1930": {
    F: 82
  },
  "1931": {
    F: 72
  },
  "1932": {
    F: 52
  },
  "1933": {
    F: 56
  },
  "1934": {
    F: 50
  },
  "1935": {
    F: 53
  },
  "1936": {
    F: 53
  },
  "1937": {
    F: 57
  },
  "1938": {
    F: 64
  },
  "1939": {
    F: 62
  },
  "1940": {
    F: 83
  },
  "1941": {
    F: 86
  },
  "1942": {
    F: 71
  },
  "1943": {
    F: 63
  },
  "1944": {
    F: 96
  },
  "1945": {
    F: 89
  },
  "1946": {
    F: 91
  },
  "1947": {
    F: 71
  },
  "1948": {
    F: 83
  },
  "1949": {
    F: 78
  },
  "1950": {
    F: 71
  },
  "1951": {
    F: 230
  },
  "1952": {
    F: 119
  },
  "1953": {
    F: 95
  },
  "1954": {
    F: 87
  },
  "1955": {
    F: 79
  },
  "1956": {
    F: 44
  },
  "1957": {
    F: 67
  },
  "1958": {
    F: 63
  },
  "1959": {
    F: 40
  },
  "1960": {
    F: 53
  },
  "1961": {
    F: 40
  },
  "1962": {
    F: 52
  },
  "1963": {
    F: 42
  },
  "1964": {
    F: 38
  },
  "1965": {
    F: 31
  },
  "1966": {
    F: 33
  },
  "1967": {
    F: 26
  },
  "1968": {
    F: 35
  },
  "1969": {
    F: 27
  },
  "1970": {
    F: 32
  },
  "1971": {
    F: 24
  },
  "1972": {
    F: 25
  },
  "1973": {
    F: 11
  },
  "1974": {
    F: 17
  },
  "1975": {
    F: 15
  },
  "1976": {
    F: 17
  },
  "1977": {
    F: 13
  },
  "1978": {
    F: 17
  },
  "1979": {
    F: 13
  },
  "1981": {
    F: 12
  },
  "1983": {
    F: 14
  },
  "1984": {
    F: 19
  },
  "1985": {
    F: 15
  },
  "1986": {
    F: 10
  },
  "1987": {
    F: 11
  },
  "1988": {
    F: 11
  },
  "1990": {
    F: 17
  },
  "1991": {
    F: 13
  },
  "1993": {
    F: 10
  },
  "2014": {
    F: 11
  },
  "2015": {
    F: 17
  },
  "2016": {
    F: 11
  }
};
const Iris = {
  "1900": {
    F: 28
  },
  "1901": {
    F: 35
  },
  "1902": {
    F: 38
  },
  "1903": {
    F: 40
  },
  "1904": {
    F: 51
  },
  "1905": {
    F: 52
  },
  "1906": {
    F: 65
  },
  "1907": {
    F: 60
  },
  "1908": {
    F: 75
  },
  "1909": {
    F: 86
  },
  "1910": {
    F: 91
  },
  "1911": {
    F: 83
  },
  "1912": {
    F: 70
  },
  "1913": {
    F: 106
  },
  "1914": {
    F: 84
  },
  "1915": {
    F: 102
  },
  "1916": {
    F: 119
  },
  "1917": {
    F: 108
  },
  "1918": {
    F: 93
  },
  "1919": {
    F: 63
  },
  "1920": {
    F: 94
  },
  "1921": {
    F: 73
  },
  "1922": {
    F: 97
  },
  "1923": {
    F: 73
  },
  "1924": {
    F: 61
  },
  "1925": {
    F: 72
  },
  "1926": {
    F: 78
  },
  "1927": {
    F: 74
  },
  "1928": {
    F: 51
  },
  "1929": {
    F: 53
  },
  "1930": {
    F: 50
  },
  "1931": {
    F: 41
  },
  "1932": {
    F: 45
  },
  "1933": {
    F: 34
  },
  "1934": {
    F: 30
  },
  "1935": {
    F: 26
  },
  "1936": {
    F: 21
  },
  "1937": {
    F: 30
  },
  "1938": {
    F: 21
  },
  "1939": {
    F: 18
  },
  "1940": {
    F: 16
  },
  "1941": {
    F: 29
  },
  "1942": {
    F: 12
  },
  "1943": {
    F: 11
  },
  "1944": {
    F: 13
  },
  "1945": {
    F: 22
  },
  "1946": {
    F: 20
  },
  "1947": {
    F: 12
  },
  "1949": {
    F: 10
  },
  "1950": {
    F: 17
  },
  "1951": {
    F: 12
  },
  "1954": {
    F: 12
  },
  "1955": {
    F: 16
  },
  "1958": {
    F: 11
  },
  "2003": {
    F: 13
  },
  "2004": {
    F: 11
  },
  "2006": {
    F: 14
  },
  "2007": {
    F: 19
  },
  "2008": {
    F: 16
  },
  "2009": {
    F: 23
  },
  "2010": {
    F: 14
  },
  "2011": {
    F: 21
  },
  "2012": {
    F: 22
  },
  "2013": {
    F: 25
  },
  "2014": {
    F: 30
  },
  "2015": {
    F: 27
  },
  "2016": {
    F: 28
  },
  "2017": {
    F: 35
  },
  "2018": {
    F: 36
  },
  "2019": {
    F: 29
  },
  "2020": {
    F: 40
  },
  "2021": {
    F: 42
  }
};
const Irvine = {
  "1915": {
    M: 10
  }
};
const Isaac = {
  "1966": {
    M: 11
  },
  "1970": {
    M: 10
  },
  "1971": {
    M: 10
  },
  "1973": {
    M: 17
  },
  "1974": {
    M: 22
  },
  "1975": {
    M: 19
  },
  "1976": {
    M: 21
  },
  "1977": {
    M: 23
  },
  "1978": {
    M: 26
  },
  "1979": {
    M: 28
  },
  "1980": {
    M: 43
  },
  "1981": {
    M: 57
  },
  "1982": {
    M: 51
  },
  "1983": {
    M: 43
  },
  "1984": {
    M: 55
  },
  "1985": {
    M: 64
  },
  "1986": {
    M: 59
  },
  "1987": {
    M: 71
  },
  "1988": {
    M: 59
  },
  "1989": {
    M: 75
  },
  "1990": {
    M: 83
  },
  "1991": {
    M: 80
  },
  "1992": {
    M: 103
  },
  "1993": {
    M: 112
  },
  "1994": {
    M: 117
  },
  "1995": {
    M: 101
  },
  "1996": {
    M: 128
  },
  "1997": {
    M: 133
  },
  "1998": {
    M: 142
  },
  "1999": {
    M: 135
  },
  "2000": {
    M: 148
  },
  "2001": {
    M: 136
  },
  "2002": {
    M: 105
  },
  "2003": {
    M: 131
  },
  "2004": {
    M: 145
  },
  "2005": {
    M: 129
  },
  "2006": {
    M: 135
  },
  "2007": {
    M: 138
  },
  "2008": {
    M: 122
  },
  "2009": {
    M: 177
  },
  "2010": {
    M: 233
  },
  "2011": {
    M: 186
  },
  "2012": {
    M: 157
  },
  "2013": {
    M: 145
  },
  "2014": {
    M: 150
  },
  "2015": {
    M: 148
  },
  "2016": {
    M: 116
  },
  "2017": {
    M: 128
  },
  "2018": {
    M: 121
  },
  "2019": {
    M: 117
  },
  "2020": {
    M: 82
  },
  "2021": {
    M: 87
  }
};
const Isabel = {
  "1900": {
    F: 26
  },
  "1901": {
    F: 40
  },
  "1902": {
    F: 34
  },
  "1903": {
    F: 28
  },
  "1904": {
    F: 38
  },
  "1905": {
    F: 43
  },
  "1906": {
    F: 40
  },
  "1907": {
    F: 47
  },
  "1908": {
    F: 51
  },
  "1909": {
    F: 53
  },
  "1910": {
    F: 45
  },
  "1911": {
    F: 49
  },
  "1912": {
    F: 47
  },
  "1913": {
    F: 54
  },
  "1914": {
    F: 36
  },
  "1915": {
    F: 38
  },
  "1916": {
    F: 45
  },
  "1917": {
    F: 54
  },
  "1918": {
    F: 46
  },
  "1919": {
    F: 36
  },
  "1920": {
    F: 42
  },
  "1921": {
    F: 54
  },
  "1922": {
    F: 50
  },
  "1923": {
    F: 38
  },
  "1924": {
    F: 44
  },
  "1925": {
    F: 29
  },
  "1926": {
    F: 37
  },
  "1927": {
    F: 40
  },
  "1928": {
    F: 38
  },
  "1929": {
    F: 22
  },
  "1930": {
    F: 14
  },
  "1931": {
    F: 29
  },
  "1932": {
    F: 36
  },
  "1933": {
    F: 28
  },
  "1934": {
    F: 21
  },
  "1935": {
    F: 28
  },
  "1936": {
    F: 14
  },
  "1937": {
    F: 23
  },
  "1938": {
    F: 21
  },
  "1939": {
    F: 25
  },
  "1940": {
    F: 22
  },
  "1941": {
    F: 28
  },
  "1942": {
    F: 26
  },
  "1943": {
    F: 27
  },
  "1945": {
    F: 17
  },
  "1946": {
    F: 15
  },
  "1947": {
    F: 21
  },
  "1948": {
    F: 13
  },
  "1949": {
    F: 20
  },
  "1950": {
    F: 15
  },
  "1951": {
    F: 15
  },
  "1952": {
    F: 14
  },
  "1953": {
    F: 12
  },
  "1954": {
    F: 16
  },
  "1955": {
    F: 16
  },
  "1956": {
    F: 14
  },
  "1959": {
    F: 10
  },
  "1960": {
    F: 12
  },
  "1961": {
    F: 11
  },
  "1991": {
    F: 10
  },
  "1997": {
    F: 10
  },
  "1998": {
    F: 25
  },
  "1999": {
    F: 20
  },
  "2000": {
    F: 20
  },
  "2001": {
    F: 34
  },
  "2002": {
    F: 36
  },
  "2003": {
    F: 33
  },
  "2004": {
    F: 43
  },
  "2005": {
    F: 32
  },
  "2006": {
    F: 46
  },
  "2007": {
    F: 49
  },
  "2008": {
    F: 41
  },
  "2009": {
    F: 59
  },
  "2010": {
    F: 58
  },
  "2011": {
    F: 56
  },
  "2012": {
    F: 49
  },
  "2013": {
    F: 48
  },
  "2014": {
    F: 46
  },
  "2015": {
    F: 45
  },
  "2016": {
    F: 50
  },
  "2017": {
    F: 40
  },
  "2018": {
    F: 36
  },
  "2019": {
    F: 38
  },
  "2020": {
    F: 44
  },
  "2021": {
    F: 38
  }
};
const Isabella = {
  "1900": {
    F: 53
  },
  "1901": {
    F: 73
  },
  "1902": {
    F: 80
  },
  "1903": {
    F: 61
  },
  "1904": {
    F: 58
  },
  "1905": {
    F: 60
  },
  "1906": {
    F: 63
  },
  "1907": {
    F: 57
  },
  "1908": {
    F: 59
  },
  "1909": {
    F: 64
  },
  "1910": {
    F: 52
  },
  "1911": {
    F: 64
  },
  "1912": {
    F: 50
  },
  "1913": {
    F: 57
  },
  "1914": {
    F: 64
  },
  "1915": {
    F: 51
  },
  "1916": {
    F: 50
  },
  "1917": {
    F: 40
  },
  "1918": {
    F: 43
  },
  "1919": {
    F: 37
  },
  "1920": {
    F: 32
  },
  "1921": {
    F: 27
  },
  "1922": {
    F: 31
  },
  "1923": {
    F: 25
  },
  "1924": {
    F: 21
  },
  "1925": {
    F: 28
  },
  "1926": {
    F: 26
  },
  "1927": {
    F: 18
  },
  "1928": {
    F: 23
  },
  "1929": {
    F: 18
  },
  "1930": {
    F: 17
  },
  "1931": {
    F: 17
  },
  "1932": {
    F: 10
  },
  "1933": {
    F: 12
  },
  "1934": {
    F: 11
  },
  "1991": {
    F: 21
  },
  "1992": {
    F: 19
  },
  "1993": {
    F: 20
  },
  "1994": {
    F: 33
  },
  "1995": {
    F: 51
  },
  "1996": {
    F: 73
  },
  "1997": {
    F: 79
  },
  "1998": {
    F: 103
  },
  "1999": {
    F: 128
  },
  "2000": {
    F: 125
  },
  "2001": {
    F: 163
  },
  "2002": {
    F: 158
  },
  "2003": {
    F: 189
  },
  "2004": {
    F: 205
  },
  "2005": {
    F: 193
  },
  "2006": {
    F: 225
  },
  "2007": {
    F: 239
  },
  "2008": {
    F: 289
  },
  "2009": {
    F: 289
  },
  "2010": {
    F: 286
  },
  "2011": {
    F: 276
  },
  "2012": {
    F: 266
  },
  "2013": {
    F: 210
  },
  "2014": {
    F: 183
  },
  "2015": {
    F: 201
  },
  "2016": {
    F: 182
  },
  "2017": {
    F: 185
  },
  "2018": {
    F: 191
  },
  "2019": {
    F: 171
  },
  "2020": {
    F: 160
  },
  "2021": {
    F: 171
  }
};
const Isabelle = {
  "1910": {
    F: 12
  },
  "1991": {
    F: 11
  },
  "1993": {
    F: 18
  },
  "1994": {
    F: 11
  },
  "1995": {
    F: 18
  },
  "1996": {
    F: 20
  },
  "1997": {
    F: 25
  },
  "1998": {
    F: 16
  },
  "1999": {
    F: 21
  },
  "2000": {
    F: 27
  },
  "2001": {
    F: 42
  },
  "2002": {
    F: 44
  },
  "2003": {
    F: 44
  },
  "2004": {
    F: 52
  },
  "2005": {
    F: 56
  },
  "2006": {
    F: 56
  },
  "2007": {
    F: 88
  },
  "2008": {
    F: 86
  },
  "2009": {
    F: 89
  },
  "2010": {
    F: 74
  },
  "2011": {
    F: 84
  },
  "2012": {
    F: 75
  },
  "2013": {
    F: 77
  },
  "2014": {
    F: 82
  },
  "2015": {
    F: 114
  },
  "2016": {
    F: 79
  },
  "2017": {
    F: 97
  },
  "2018": {
    F: 100
  },
  "2019": {
    F: 75
  },
  "2020": {
    F: 73
  },
  "2021": {
    F: 87
  }
};
const Isaiah = {
  "1992": {
    M: 16
  },
  "1994": {
    M: 29
  },
  "1995": {
    M: 23
  },
  "1996": {
    M: 24
  },
  "1997": {
    M: 48
  },
  "1998": {
    M: 44
  },
  "1999": {
    M: 32
  },
  "2000": {
    M: 52
  },
  "2001": {
    M: 62
  },
  "2002": {
    M: 41
  },
  "2003": {
    M: 41
  },
  "2004": {
    M: 50
  },
  "2005": {
    M: 44
  },
  "2006": {
    M: 49
  },
  "2007": {
    M: 63
  },
  "2008": {
    M: 64
  },
  "2009": {
    M: 50
  },
  "2010": {
    M: 50
  },
  "2011": {
    M: 42
  },
  "2012": {
    M: 42
  },
  "2013": {
    M: 53
  },
  "2014": {
    M: 45
  },
  "2015": {
    M: 56
  },
  "2016": {
    M: 36
  },
  "2017": {
    M: 37
  },
  "2018": {
    M: 47
  },
  "2019": {
    M: 59
  },
  "2020": {
    M: 46
  },
  "2021": {
    M: 55
  }
};
const Ishaan = {
  "2008": {
    M: 16
  },
  "2012": {
    M: 10
  },
  "2015": {
    M: 10
  },
  "2016": {
    M: 11
  },
  "2019": {
    M: 10
  },
  "2020": {
    M: 13
  },
  "2021": {
    M: 10
  }
};
const Isla = {
  "1930": {
    F: 11
  },
  "1998": {
    F: 15
  },
  "1999": {
    F: 12
  },
  "2000": {
    F: 15
  },
  "2002": {
    F: 23
  },
  "2003": {
    F: 23
  },
  "2004": {
    F: 47
  },
  "2005": {
    F: 48
  },
  "2006": {
    F: 83
  },
  "2007": {
    F: 82
  },
  "2008": {
    F: 111
  },
  "2009": {
    F: 169
  },
  "2010": {
    F: 167
  },
  "2011": {
    F: 198
  },
  "2012": {
    F: 195
  },
  "2013": {
    F: 229
  },
  "2014": {
    F: 250
  },
  "2015": {
    F: 230
  },
  "2016": {
    F: 239
  },
  "2017": {
    F: 232
  },
  "2018": {
    F: 229
  },
  "2019": {
    F: 232
  },
  "2020": {
    F: 243
  },
  "2021": {
    F: 214
  }
};
const Isobel = {
  "1907": {
    F: 12
  },
  "1910": {
    F: 13
  },
  "1912": {
    F: 11
  },
  "1913": {
    F: 13
  },
  "1914": {
    F: 17
  },
  "1915": {
    F: 18
  },
  "1916": {
    F: 15
  },
  "1917": {
    F: 26
  },
  "1918": {
    F: 12
  },
  "1919": {
    F: 10
  },
  "1920": {
    F: 24
  },
  "1921": {
    F: 26
  },
  "1922": {
    F: 28
  },
  "1923": {
    F: 33
  },
  "1924": {
    F: 25
  },
  "1925": {
    F: 30
  },
  "1926": {
    F: 31
  },
  "1927": {
    F: 43
  },
  "1928": {
    F: 35
  },
  "1929": {
    F: 32
  },
  "1930": {
    F: 33
  },
  "1931": {
    F: 26
  },
  "1932": {
    F: 30
  },
  "1933": {
    F: 32
  },
  "1934": {
    F: 34
  },
  "1935": {
    F: 28
  },
  "1936": {
    F: 11
  },
  "1937": {
    F: 22
  },
  "1938": {
    F: 14
  },
  "1939": {
    F: 16
  },
  "1940": {
    F: 17
  },
  "1941": {
    F: 20
  },
  "1942": {
    F: 28
  },
  "1943": {
    F: 14
  },
  "1944": {
    F: 21
  },
  "1945": {
    F: 15
  },
  "1946": {
    F: 22
  },
  "1947": {
    F: 19
  },
  "1948": {
    F: 17
  },
  "1949": {
    F: 24
  },
  "1950": {
    F: 24
  },
  "1951": {
    F: 13
  },
  "1952": {
    F: 16
  },
  "1954": {
    F: 18
  },
  "1955": {
    F: 17
  },
  "1957": {
    F: 12
  },
  "1959": {
    F: 16
  },
  "1960": {
    F: 15
  },
  "1961": {
    F: 15
  },
  "1992": {
    F: 13
  },
  "1993": {
    F: 12
  },
  "1996": {
    F: 11
  },
  "1997": {
    F: 13
  },
  "1998": {
    F: 13
  },
  "2000": {
    F: 22
  },
  "2001": {
    F: 20
  },
  "2002": {
    F: 21
  },
  "2003": {
    F: 26
  },
  "2004": {
    F: 14
  },
  "2005": {
    F: 18
  },
  "2006": {
    F: 27
  },
  "2007": {
    F: 27
  },
  "2008": {
    F: 31
  },
  "2009": {
    F: 42
  },
  "2010": {
    F: 24
  },
  "2011": {
    F: 43
  },
  "2012": {
    F: 29
  },
  "2013": {
    F: 29
  },
  "2014": {
    F: 46
  },
  "2015": {
    F: 36
  },
  "2016": {
    F: 30
  },
  "2017": {
    F: 32
  },
  "2018": {
    F: 37
  },
  "2019": {
    F: 28
  },
  "2020": {
    F: 27
  },
  "2021": {
    F: 34
  }
};
const Isobella = {
  "2008": {
    F: 12
  },
  "2009": {
    F: 11
  },
  "2011": {
    F: 13
  }
};
const Israel = {
  "1973": {
    M: 10
  },
  "1986": {
    M: 10
  },
  "1987": {
    M: 13
  },
  "1989": {
    M: 11
  },
  "1992": {
    M: 10
  },
  "1993": {
    M: 20
  },
  "1994": {
    M: 15
  },
  "1995": {
    M: 16
  },
  "1997": {
    M: 10
  },
  "1998": {
    M: 19
  },
  "1999": {
    M: 12
  },
  "2000": {
    M: 19
  },
  "2001": {
    M: 11
  },
  "2002": {
    M: 18
  },
  "2003": {
    M: 11
  },
  "2004": {
    M: 11
  },
  "2005": {
    M: 18
  },
  "2006": {
    M: 16
  },
  "2007": {
    M: 22
  },
  "2008": {
    M: 25
  },
  "2009": {
    M: 29
  },
  "2010": {
    M: 34
  },
  "2011": {
    M: 34
  },
  "2012": {
    M: 52
  },
  "2013": {
    M: 38
  },
  "2014": {
    M: 45
  },
  "2015": {
    M: 42
  },
  "2016": {
    M: 32
  },
  "2017": {
    M: 31
  },
  "2018": {
    M: 32
  },
  "2019": {
    M: 37
  },
  "2020": {
    M: 35
  },
  "2021": {
    M: 30
  }
};
const Issac = {
  "2004": {
    M: 10
  },
  "2009": {
    M: 15
  },
  "2010": {
    M: 10
  },
  "2011": {
    M: 13
  },
  "2012": {
    M: 11
  },
  "2014": {
    M: 12
  },
  "2016": {
    M: 10
  }
};
const Ivaan = {
  "2020": {
    M: 22
  },
  "2021": {
    M: 18
  }
};
const Ivan = {
  "1900": {
    M: 15
  },
  "1901": {
    M: 30
  },
  "1902": {
    M: 25
  },
  "1903": {
    M: 36
  },
  "1904": {
    M: 24
  },
  "1905": {
    M: 35
  },
  "1906": {
    M: 42
  },
  "1907": {
    M: 41
  },
  "1908": {
    M: 44
  },
  "1909": {
    M: 49
  },
  "1910": {
    M: 76
  },
  "1911": {
    M: 73
  },
  "1912": {
    M: 62
  },
  "1913": {
    M: 58
  },
  "1914": {
    M: 107
  },
  "1915": {
    M: 83
  },
  "1916": {
    M: 113
  },
  "1917": {
    M: 85
  },
  "1918": {
    M: 84
  },
  "1919": {
    M: 71
  },
  "1920": {
    M: 76
  },
  "1921": {
    M: 100
  },
  "1922": {
    M: 108
  },
  "1923": {
    M: 120
  },
  "1924": {
    M: 104
  },
  "1925": {
    M: 94
  },
  "1926": {
    M: 122
  },
  "1927": {
    M: 86
  },
  "1928": {
    M: 131
  },
  "1929": {
    M: 98
  },
  "1930": {
    M: 85
  },
  "1931": {
    M: 113
  },
  "1932": {
    M: 98
  },
  "1933": {
    M: 69
  },
  "1934": {
    M: 99
  },
  "1935": {
    M: 57
  },
  "1936": {
    M: 60
  },
  "1937": {
    M: 56
  },
  "1938": {
    M: 73
  },
  "1939": {
    M: 49
  },
  "1940": {
    M: 72
  },
  "1941": {
    M: 60
  },
  "1942": {
    M: 72
  },
  "1943": {
    M: 65
  },
  "1944": {
    M: 72
  },
  "1945": {
    M: 62
  },
  "1946": {
    M: 59
  },
  "1947": {
    M: 75
  },
  "1948": {
    M: 70
  },
  "1949": {
    M: 55
  },
  "1950": {
    M: 51
  },
  "1951": {
    M: 58
  },
  "1952": {
    M: 50
  },
  "1953": {
    M: 54
  },
  "1954": {
    M: 66
  },
  "1955": {
    M: 36
  },
  "1956": {
    M: 55
  },
  "1957": {
    M: 43
  },
  "1958": {
    M: 62
  },
  "1959": {
    M: 55
  },
  "1960": {
    M: 52
  },
  "1961": {
    M: 45
  },
  "1962": {
    M: 41
  },
  "1963": {
    M: 36
  },
  "1964": {
    M: 42
  },
  "1965": {
    M: 37
  },
  "1966": {
    M: 34
  },
  "1967": {
    M: 47
  },
  "1968": {
    M: 42
  },
  "1969": {
    M: 29
  },
  "1970": {
    M: 27
  },
  "1971": {
    M: 51
  },
  "1972": {
    M: 29
  },
  "1973": {
    M: 34
  },
  "1974": {
    M: 37
  },
  "1975": {
    M: 11
  },
  "1976": {
    M: 31
  },
  "1977": {
    M: 17
  },
  "1978": {
    M: 17
  },
  "1979": {
    M: 26
  },
  "1980": {
    M: 13
  },
  "1981": {
    M: 15
  },
  "1982": {
    M: 10
  },
  "1983": {
    M: 16
  },
  "1984": {
    M: 14
  },
  "1985": {
    M: 16
  },
  "1986": {
    M: 12
  },
  "1987": {
    M: 14
  },
  "1988": {
    M: 13
  },
  "1989": {
    M: 15
  },
  "1990": {
    M: 15
  },
  "1991": {
    M: 11
  },
  "1995": {
    M: 11
  },
  "1996": {
    M: 10
  },
  "1997": {
    M: 16
  },
  "1998": {
    M: 14
  },
  "1999": {
    M: 10
  },
  "2000": {
    M: 14
  },
  "2002": {
    M: 16
  },
  "2003": {
    M: 11
  },
  "2004": {
    M: 20
  },
  "2005": {
    M: 14
  },
  "2006": {
    M: 15
  },
  "2007": {
    M: 16
  },
  "2008": {
    M: 15
  },
  "2009": {
    M: 17
  },
  "2010": {
    M: 11
  },
  "2011": {
    M: 18
  },
  "2012": {
    M: 10
  },
  "2013": {
    M: 18
  },
  "2014": {
    M: 17
  },
  "2015": {
    M: 21
  },
  "2017": {
    M: 25
  },
  "2018": {
    M: 22
  },
  "2019": {
    M: 21
  },
  "2020": {
    M: 14
  },
  "2021": {
    M: 16
  }
};
const Ivar = {
  "2017": {
    M: 13
  },
  "2018": {
    M: 18
  },
  "2019": {
    M: 16
  },
  "2020": {
    M: 19
  },
  "2021": {
    M: 21
  }
};
const Ivor = {
  "1906": {
    M: 12
  },
  "1912": {
    M: 12
  },
  "1914": {
    M: 13
  },
  "1916": {
    M: 10
  },
  "1930": {
    M: 12
  }
};
const Ivory = {
  "2019": {
    F: 10
  }
};
const Ivy = {
  "1900": {
    F: 159
  },
  "1901": {
    F: 145
  },
  "1902": {
    F: 135
  },
  "1903": {
    F: 178
  },
  "1904": {
    F: 172
  },
  "1905": {
    F: 161
  },
  "1906": {
    F: 145
  },
  "1907": {
    F: 154
  },
  "1908": {
    F: 151
  },
  "1909": {
    F: 144
  },
  "1910": {
    F: 129
  },
  "1911": {
    F: 122
  },
  "1912": {
    F: 137
  },
  "1913": {
    F: 115
  },
  "1914": {
    F: 112
  },
  "1915": {
    F: 104
  },
  "1916": {
    F: 94
  },
  "1917": {
    F: 81
  },
  "1918": {
    F: 79
  },
  "1919": {
    F: 74
  },
  "1920": {
    F: 85
  },
  "1921": {
    F: 74
  },
  "1922": {
    F: 59
  },
  "1923": {
    F: 47
  },
  "1924": {
    F: 55
  },
  "1925": {
    F: 42
  },
  "1926": {
    F: 48
  },
  "1927": {
    F: 38
  },
  "1928": {
    F: 43
  },
  "1929": {
    F: 38
  },
  "1930": {
    F: 43
  },
  "1931": {
    F: 32
  },
  "1932": {
    F: 29
  },
  "1933": {
    F: 23
  },
  "1934": {
    F: 22
  },
  "1935": {
    F: 26
  },
  "1936": {
    F: 21
  },
  "1937": {
    F: 11
  },
  "1938": {
    F: 17
  },
  "1939": {
    F: 21
  },
  "1940": {
    F: 21
  },
  "1941": {
    F: 13
  },
  "1942": {
    F: 12
  },
  "1943": {
    F: 14
  },
  "1944": {
    F: 10
  },
  "1953": {
    F: 11
  },
  "1956": {
    F: 10
  },
  "1961": {
    F: 11
  },
  "1963": {
    F: 10
  },
  "1965": {
    F: 10
  },
  "1984": {
    F: 18
  },
  "2000": {
    F: 11
  },
  "2001": {
    F: 10
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 20
  },
  "2006": {
    F: 17
  },
  "2007": {
    F: 24
  },
  "2008": {
    F: 17
  },
  "2009": {
    F: 26
  },
  "2010": {
    F: 43
  },
  "2011": {
    F: 39
  },
  "2012": {
    F: 70
  },
  "2013": {
    F: 86
  },
  "2014": {
    F: 83
  },
  "2015": {
    F: 99
  },
  "2016": {
    F: 102
  },
  "2017": {
    F: 104
  },
  "2018": {
    F: 125
  },
  "2019": {
    F: 123
  },
  "2020": {
    F: 121
  },
  "2021": {
    F: 114
  }
};
const Iyla = {
  "2014": {
    F: 10
  },
  "2017": {
    F: 11
  },
  "2018": {
    F: 11
  },
  "2020": {
    F: 16
  },
  "2021": {
    F: 15
  }
};
const Izaac = {
  "2009": {
    M: 11
  }
};
const Izabella = {
  "2005": {
    F: 13
  },
  "2007": {
    F: 18
  },
  "2008": {
    F: 14
  },
  "2009": {
    F: 21
  },
  "2010": {
    F: 21
  },
  "2011": {
    F: 26
  },
  "2012": {
    F: 21
  },
  "2013": {
    F: 19
  },
  "2014": {
    F: 15
  },
  "2015": {
    F: 13
  },
  "2016": {
    F: 20
  },
  "2018": {
    F: 11
  }
};
const Izaiah = {
  "2000": {
    M: 10
  },
  "2004": {
    M: 11
  },
  "2007": {
    M: 16
  },
  "2008": {
    M: 16
  },
  "2011": {
    M: 12
  },
  "2013": {
    M: 11
  },
  "2014": {
    M: 11
  },
  "2015": {
    M: 12
  },
  "2017": {
    M: 12
  },
  "2018": {
    M: 12
  },
  "2019": {
    M: 12
  },
  "2020": {
    M: 12
  }
};
const Izayah = {
  "2006": {
    M: 12
  }
};
const Iziah = {
  "2010": {
    M: 10
  }
};
const Jace = {
  "2016": {
    M: 10
  },
  "2019": {
    M: 10
  },
  "2020": {
    M: 11
  }
};
const Jacinda = {
  "1968": {
    F: 10
  },
  "1969": {
    F: 14
  },
  "1970": {
    F: 10
  },
  "1972": {
    F: 11
  },
  "1973": {
    F: 20
  },
  "1974": {
    F: 26
  },
  "1975": {
    F: 10
  },
  "1976": {
    F: 19
  },
  "1977": {
    F: 12
  },
  "1978": {
    F: 13
  },
  "1979": {
    F: 15
  },
  "1980": {
    F: 14
  },
  "1981": {
    F: 11
  },
  "1982": {
    F: 17
  },
  "1984": {
    F: 13
  },
  "1985": {
    F: 17
  },
  "1986": {
    F: 23
  },
  "1987": {
    F: 19
  },
  "1988": {
    F: 20
  },
  "1989": {
    F: 17
  },
  "1990": {
    F: 21
  },
  "1991": {
    F: 12
  },
  "1992": {
    F: 19
  },
  "1993": {
    F: 16
  },
  "1994": {
    F: 11
  },
  "1995": {
    F: 19
  },
  "1996": {
    F: 14
  },
  "1997": {
    F: 10
  }
};
const Jacinta = {
  "1964": {
    F: 12
  },
  "1969": {
    F: 13
  },
  "1970": {
    F: 12
  },
  "1971": {
    F: 14
  },
  "1973": {
    F: 14
  },
  "1974": {
    F: 22
  },
  "1976": {
    F: 10
  },
  "1977": {
    F: 10
  },
  "1978": {
    F: 10
  },
  "1979": {
    F: 13
  },
  "1980": {
    F: 16
  },
  "1981": {
    F: 10
  },
  "1982": {
    F: 14
  },
  "1983": {
    F: 18
  },
  "1984": {
    F: 15
  },
  "1985": {
    F: 17
  },
  "1986": {
    F: 19
  },
  "1987": {
    F: 21
  },
  "1988": {
    F: 22
  },
  "1989": {
    F: 22
  },
  "1990": {
    F: 23
  },
  "1991": {
    F: 21
  },
  "1992": {
    F: 28
  },
  "1993": {
    F: 25
  },
  "1994": {
    F: 20
  },
  "1995": {
    F: 26
  },
  "1996": {
    F: 24
  },
  "1997": {
    F: 14
  },
  "1998": {
    F: 18
  },
  "1999": {
    F: 19
  },
  "2000": {
    F: 28
  },
  "2001": {
    F: 14
  },
  "2003": {
    F: 14
  },
  "2004": {
    F: 11
  },
  "2005": {
    F: 12
  },
  "2007": {
    F: 10
  },
  "2008": {
    F: 13
  }
};
const Jack = {
  "1900": {
    M: 32
  },
  "1901": {
    M: 47
  },
  "1902": {
    M: 52
  },
  "1903": {
    M: 54
  },
  "1904": {
    M: 68
  },
  "1905": {
    M: 82
  },
  "1906": {
    M: 90
  },
  "1907": {
    M: 106
  },
  "1908": {
    M: 114
  },
  "1909": {
    M: 106
  },
  "1910": {
    M: 126
  },
  "1911": {
    M: 126
  },
  "1912": {
    M: 161
  },
  "1913": {
    M: 152
  },
  "1914": {
    M: 176
  },
  "1915": {
    M: 147
  },
  "1916": {
    M: 187
  },
  "1917": {
    M: 158
  },
  "1918": {
    M: 145
  },
  "1919": {
    M: 155
  },
  "1920": {
    M: 188
  },
  "1921": {
    M: 164
  },
  "1922": {
    M: 192
  },
  "1923": {
    M: 176
  },
  "1924": {
    M: 151
  },
  "1925": {
    M: 127
  },
  "1926": {
    M: 158
  },
  "1927": {
    M: 120
  },
  "1928": {
    M: 112
  },
  "1929": {
    M: 101
  },
  "1930": {
    M: 104
  },
  "1931": {
    M: 84
  },
  "1932": {
    M: 69
  },
  "1933": {
    M: 64
  },
  "1934": {
    M: 61
  },
  "1935": {
    M: 56
  },
  "1936": {
    M: 57
  },
  "1937": {
    M: 59
  },
  "1938": {
    M: 48
  },
  "1939": {
    M: 45
  },
  "1940": {
    M: 41
  },
  "1941": {
    M: 48
  },
  "1942": {
    M: 59
  },
  "1943": {
    M: 49
  },
  "1944": {
    M: 33
  },
  "1945": {
    M: 37
  },
  "1946": {
    M: 45
  },
  "1947": {
    M: 46
  },
  "1948": {
    M: 33
  },
  "1949": {
    M: 40
  },
  "1950": {
    M: 31
  },
  "1951": {
    M: 22
  },
  "1952": {
    M: 34
  },
  "1953": {
    M: 35
  },
  "1954": {
    M: 44
  },
  "1955": {
    M: 29
  },
  "1956": {
    M: 36
  },
  "1957": {
    M: 30
  },
  "1958": {
    M: 25
  },
  "1959": {
    M: 26
  },
  "1960": {
    M: 23
  },
  "1961": {
    M: 30
  },
  "1962": {
    M: 27
  },
  "1963": {
    M: 30
  },
  "1964": {
    M: 29
  },
  "1965": {
    M: 29
  },
  "1966": {
    M: 17
  },
  "1967": {
    M: 20
  },
  "1968": {
    M: 20
  },
  "1969": {
    M: 16
  },
  "1970": {
    M: 15
  },
  "1971": {
    M: 21
  },
  "1972": {
    M: 28
  },
  "1973": {
    M: 14
  },
  "1974": {
    M: 18
  },
  "1975": {
    M: 21
  },
  "1976": {
    M: 22
  },
  "1977": {
    M: 16
  },
  "1978": {
    M: 19
  },
  "1979": {
    M: 19
  },
  "1980": {
    M: 16
  },
  "1981": {
    M: 20
  },
  "1982": {
    M: 16
  },
  "1983": {
    M: 20
  },
  "1984": {
    M: 26
  },
  "1985": {
    M: 22
  },
  "1986": {
    M: 44
  },
  "1987": {
    M: 39
  },
  "1988": {
    M: 68
  },
  "1989": {
    M: 65
  },
  "1990": {
    M: 77
  },
  "1991": {
    M: 81
  },
  "1992": {
    M: 137
  },
  "1993": {
    M: 164
  },
  "1994": {
    M: 199
  },
  "1995": {
    M: 241
  },
  "1996": {
    M: 273
  },
  "1997": {
    M: 307
  },
  "1998": {
    M: 379
  },
  "1999": {
    M: 438
  },
  "2000": {
    M: 477
  },
  "2001": {
    M: 443
  },
  "2002": {
    M: 477
  },
  "2003": {
    M: 474
  },
  "2004": {
    M: 493
  },
  "2005": {
    M: 541
  },
  "2006": {
    M: 536
  },
  "2007": {
    M: 502
  },
  "2008": {
    M: 449
  },
  "2009": {
    M: 344
  },
  "2010": {
    M: 326
  },
  "2011": {
    M: 246
  },
  "2012": {
    M: 373
  },
  "2013": {
    M: 302
  },
  "2014": {
    M: 286
  },
  "2015": {
    M: 308
  },
  "2016": {
    M: 286
  },
  "2017": {
    M: 284
  },
  "2018": {
    M: 273
  },
  "2019": {
    M: 251
  },
  "2020": {
    M: 261
  },
  "2021": {
    M: 235
  }
};
const Jackie = {
  "1967": {
    F: 10
  },
  "1968": {
    F: 16
  },
  "1969": {
    F: 19
  },
  "1970": {
    F: 10
  },
  "1971": {
    F: 23
  },
  "1972": {
    F: 22
  },
  "1973": {
    F: 19
  },
  "1974": {
    F: 28
  },
  "1975": {
    F: 22
  },
  "1976": {
    F: 21
  },
  "1977": {
    F: 25
  },
  "1978": {
    F: 16
  },
  "1980": {
    F: 20
  },
  "1981": {
    F: 14
  },
  "1982": {
    F: 21
  },
  "1983": {
    F: 14
  },
  "1984": {
    F: 18
  },
  "1985": {
    F: 16
  },
  "1986": {
    F: 20
  },
  "1987": {
    F: 23
  },
  "1988": {
    F: 17
  },
  "1989": {
    F: 13
  },
  "1990": {
    F: 13
  },
  "1991": {
    F: 15
  },
  "1992": {
    F: 15
  },
  "1993": {
    F: 18
  },
  "1994": {
    F: 11
  },
  "1995": {
    F: 12
  },
  "1997": {
    F: 10
  },
  "2000": {
    M: 10
  }
};
const Jackson = {
  "1974": {
    M: 10
  },
  "1976": {
    M: 10
  },
  "1980": {
    M: 15
  },
  "1981": {
    M: 12
  },
  "1982": {
    M: 15
  },
  "1983": {
    M: 16
  },
  "1984": {
    M: 12
  },
  "1985": {
    M: 18
  },
  "1986": {
    M: 21
  },
  "1987": {
    M: 28
  },
  "1988": {
    M: 31
  },
  "1989": {
    M: 28
  },
  "1990": {
    M: 33
  },
  "1991": {
    M: 35
  },
  "1992": {
    M: 51
  },
  "1993": {
    M: 59
  },
  "1994": {
    M: 84
  },
  "1995": {
    M: 94
  },
  "1996": {
    M: 95
  },
  "1997": {
    M: 71
  },
  "1998": {
    M: 78
  },
  "1999": {
    M: 115
  },
  "2000": {
    M: 137
  },
  "2001": {
    M: 162
  },
  "2002": {
    M: 143
  },
  "2003": {
    M: 112
  },
  "2004": {
    M: 128
  },
  "2005": {
    M: 107
  },
  "2006": {
    M: 118
  },
  "2007": {
    M: 119
  },
  "2008": {
    M: 120
  },
  "2009": {
    M: 138
  },
  "2010": {
    M: 120
  },
  "2011": {
    M: 151
  },
  "2012": {
    M: 168
  },
  "2013": {
    M: 156
  },
  "2014": {
    M: 167
  },
  "2015": {
    M: 175
  },
  "2016": {
    M: 157
  },
  "2017": {
    M: 139
  },
  "2018": {
    M: 131
  },
  "2019": {
    M: 134
  },
  "2020": {
    M: 89
  },
  "2021": {
    M: 104
  }
};
const Jacky = {
  "1996": {
    M: 10
  }
};
const Jaclyn = {
  "1978": {
    F: 10
  },
  "1979": {
    F: 11
  }
};
const Jacob = {
  "1968": {
    M: 11
  },
  "1971": {
    M: 20
  },
  "1972": {
    M: 23
  },
  "1973": {
    M: 35
  },
  "1974": {
    M: 48
  },
  "1975": {
    M: 45
  },
  "1976": {
    M: 53
  },
  "1977": {
    M: 58
  },
  "1978": {
    M: 48
  },
  "1979": {
    M: 49
  },
  "1980": {
    M: 67
  },
  "1981": {
    M: 72
  },
  "1982": {
    M: 52
  },
  "1983": {
    M: 86
  },
  "1984": {
    M: 83
  },
  "1985": {
    M: 98
  },
  "1986": {
    M: 87
  },
  "1987": {
    M: 123
  },
  "1988": {
    M: 148
  },
  "1989": {
    M: 198
  },
  "1990": {
    M: 178
  },
  "1991": {
    M: 192
  },
  "1992": {
    M: 196
  },
  "1993": {
    M: 269
  },
  "1994": {
    M: 282
  },
  "1995": {
    M: 313
  },
  "1996": {
    M: 311
  },
  "1997": {
    M: 328
  },
  "1998": {
    M: 363
  },
  "1999": {
    M: 326
  },
  "2000": {
    M: 370
  },
  "2001": {
    M: 355
  },
  "2002": {
    M: 308
  },
  "2003": {
    M: 335
  },
  "2004": {
    M: 331
  },
  "2005": {
    M: 303
  },
  "2006": {
    M: 308
  },
  "2007": {
    M: 295
  },
  "2008": {
    M: 265
  },
  "2009": {
    M: 244
  },
  "2010": {
    M: 288
  },
  "2011": {
    M: 238
  },
  "2012": {
    M: 256
  },
  "2013": {
    M: 208
  },
  "2014": {
    M: 214
  },
  "2015": {
    M: 219
  },
  "2016": {
    M: 155
  },
  "2017": {
    M: 143
  },
  "2018": {
    M: 126
  },
  "2019": {
    M: 131
  },
  "2020": {
    M: 100
  },
  "2021": {
    M: 78
  }
};
const Jacqualine = {
  "1964": {
    F: 13
  },
  "1968": {
    F: 11
  }
};
const Jacqueline = {
  "1924": {
    F: 12
  },
  "1926": {
    F: 11
  },
  "1927": {
    F: 15
  },
  "1928": {
    F: 18
  },
  "1929": {
    F: 16
  },
  "1930": {
    F: 14
  },
  "1931": {
    F: 31
  },
  "1932": {
    F: 25
  },
  "1933": {
    F: 29
  },
  "1934": {
    F: 21
  },
  "1935": {
    F: 28
  },
  "1936": {
    F: 36
  },
  "1937": {
    F: 37
  },
  "1938": {
    F: 32
  },
  "1939": {
    F: 45
  },
  "1940": {
    F: 61
  },
  "1941": {
    F: 53
  },
  "1942": {
    F: 63
  },
  "1943": {
    F: 53
  },
  "1944": {
    F: 56
  },
  "1945": {
    F: 63
  },
  "1946": {
    F: 88
  },
  "1947": {
    F: 96
  },
  "1948": {
    F: 101
  },
  "1949": {
    F: 76
  },
  "1950": {
    F: 85
  },
  "1951": {
    F: 86
  },
  "1952": {
    F: 97
  },
  "1953": {
    F: 103
  },
  "1954": {
    F: 111
  },
  "1955": {
    F: 120
  },
  "1956": {
    F: 134
  },
  "1957": {
    F: 143
  },
  "1958": {
    F: 132
  },
  "1959": {
    F: 132
  },
  "1960": {
    F: 170
  },
  "1961": {
    F: 300
  },
  "1962": {
    F: 309
  },
  "1963": {
    F: 276
  },
  "1964": {
    F: 365
  },
  "1965": {
    F: 326
  },
  "1966": {
    F: 317
  },
  "1967": {
    F: 300
  },
  "1968": {
    F: 299
  },
  "1969": {
    F: 256
  },
  "1970": {
    F: 254
  },
  "1971": {
    F: 231
  },
  "1972": {
    F: 199
  },
  "1973": {
    F: 168
  },
  "1974": {
    F: 140
  },
  "1975": {
    F: 112
  },
  "1976": {
    F: 110
  },
  "1977": {
    F: 78
  },
  "1978": {
    F: 72
  },
  "1979": {
    F: 72
  },
  "1980": {
    F: 67
  },
  "1981": {
    F: 64
  },
  "1982": {
    F: 60
  },
  "1983": {
    F: 62
  },
  "1984": {
    F: 76
  },
  "1985": {
    F: 53
  },
  "1986": {
    F: 49
  },
  "1987": {
    F: 37
  },
  "1988": {
    F: 48
  },
  "1989": {
    F: 33
  },
  "1990": {
    F: 29
  },
  "1991": {
    F: 45
  },
  "1992": {
    F: 31
  },
  "1993": {
    F: 23
  },
  "1994": {
    F: 16
  },
  "1995": {
    F: 19
  },
  "1996": {
    F: 33
  },
  "1997": {
    F: 23
  },
  "1998": {
    F: 24
  },
  "1999": {
    F: 19
  },
  "2000": {
    F: 25
  },
  "2001": {
    F: 11
  },
  "2002": {
    F: 14
  },
  "2004": {
    F: 13
  },
  "2005": {
    F: 12
  },
  "2007": {
    F: 10
  },
  "2015": {
    F: 13
  }
};
const Jacquelyn = {
  "1957": {
    F: 11
  },
  "1961": {
    F: 12
  },
  "1963": {
    F: 10
  },
  "1964": {
    F: 11
  },
  "1966": {
    F: 10
  },
  "1967": {
    F: 11
  },
  "1968": {
    F: 12
  }
};
const Jacqui = {
  "1972": {
    F: 11
  },
  "1975": {
    F: 12
  },
  "1980": {
    F: 11
  },
  "1981": {
    F: 10
  },
  "1982": {
    F: 16
  },
  "1983": {
    F: 12
  },
  "1984": {
    F: 15
  },
  "1985": {
    F: 10
  },
  "1986": {
    F: 13
  },
  "1988": {
    F: 15
  },
  "1989": {
    F: 10
  }
};
const Jada = {
  "1998": {
    F: 10
  },
  "2000": {
    F: 13
  },
  "2001": {
    F: 10
  },
  "2002": {
    F: 13
  },
  "2003": {
    F: 17
  },
  "2005": {
    F: 16
  },
  "2006": {
    F: 20
  },
  "2007": {
    F: 19
  },
  "2008": {
    F: 13
  },
  "2009": {
    F: 13
  }
};
const Jade = {
  "1973": {
    F: 10
  },
  "1974": {
    F: 17
  },
  "1975": {
    F: 11,
    M: 22
  },
  "1976": {
    F: 25,
    M: 24
  },
  "1977": {
    F: 39,
    M: 34
  },
  "1978": {
    F: 44,
    M: 37
  },
  "1979": {
    F: 61,
    M: 25
  },
  "1980": {
    F: 48,
    M: 41
  },
  "1981": {
    F: 59,
    M: 35
  },
  "1982": {
    F: 74,
    M: 37
  },
  "1983": {
    F: 57,
    M: 37
  },
  "1984": {
    F: 36,
    M: 43
  },
  "1985": {
    F: 59,
    M: 32
  },
  "1986": {
    F: 50,
    M: 33
  },
  "1987": {
    F: 67,
    M: 39
  },
  "1988": {
    F: 90,
    M: 38
  },
  "1989": {
    F: 106,
    M: 38
  },
  "1990": {
    F: 107,
    M: 42
  },
  "1991": {
    F: 85,
    M: 46
  },
  "1992": {
    F: 97,
    M: 31
  },
  "1993": {
    F: 89,
    M: 31
  },
  "1994": {
    F: 92,
    M: 45
  },
  "1995": {
    F: 72,
    M: 38
  },
  "1996": {
    F: 101,
    M: 39
  },
  "1997": {
    F: 110,
    M: 33
  },
  "1998": {
    F: 107,
    M: 18
  },
  "1999": {
    F: 133,
    M: 30
  },
  "2000": {
    F: 132,
    M: 20
  },
  "2001": {
    F: 139,
    M: 23
  },
  "2002": {
    F: 125,
    M: 16
  },
  "2003": {
    F: 133,
    M: 15
  },
  "2004": {
    F: 119,
    M: 12
  },
  "2005": {
    F: 147
  },
  "2006": {
    F: 114,
    M: 12
  },
  "2007": {
    F: 127,
    M: 14
  },
  "2008": {
    F: 108,
    M: 13
  },
  "2009": {
    F: 88
  },
  "2010": {
    F: 88
  },
  "2011": {
    F: 76
  },
  "2012": {
    F: 75,
    M: 12
  },
  "2013": {
    F: 47
  },
  "2014": {
    F: 37
  },
  "2015": {
    F: 54
  },
  "2016": {
    F: 41
  },
  "2017": {
    F: 40
  },
  "2018": {
    F: 29
  },
  "2019": {
    F: 28
  },
  "2020": {
    F: 27
  },
  "2021": {
    F: 26
  }
};
const Jaden = {
  "1992": {
    M: 16
  },
  "1993": {
    M: 26
  },
  "1994": {
    M: 19
  },
  "1995": {
    M: 16
  },
  "1996": {
    M: 18
  },
  "1997": {
    M: 10
  },
  "1998": {
    M: 17
  },
  "1999": {
    M: 20
  },
  "2000": {
    M: 27
  },
  "2001": {
    M: 22
  },
  "2002": {
    M: 39
  },
  "2003": {
    M: 40
  },
  "2004": {
    M: 25
  },
  "2005": {
    M: 31
  },
  "2006": {
    M: 19
  },
  "2007": {
    M: 18
  },
  "2008": {
    M: 13
  },
  "2009": {
    M: 14
  },
  "2010": {
    M: 33
  },
  "2011": {
    M: 23
  },
  "2012": {
    M: 12
  },
  "2013": {
    M: 11
  },
  "2014": {
    M: 16
  },
  "2015": {
    M: 17
  },
  "2016": {
    M: 12
  },
  "2017": {
    M: 14
  },
  "2018": {
    M: 14
  },
  "2019": {
    M: 11
  },
  "2020": {
    M: 12
  }
};
const Jaeda = {
  "2007": {
    F: 10
  }
};
const Jaedyn = {
  "2001": {
    M: 13
  },
  "2004": {
    M: 10
  },
  "2005": {
    M: 10
  },
  "2007": {
    M: 12
  }
};
const Jagger = {
  "2020": {
    M: 13
  },
  "2021": {
    M: 12
  }
};
const Jahziah = {
  "2010": {
    M: 10
  }
};
const Jai = {
  "2003": {
    M: 13
  },
  "2004": {
    M: 11
  },
  "2005": {
    M: 17
  },
  "2007": {
    M: 14
  },
  "2008": {
    M: 20
  },
  "2009": {
    M: 34
  },
  "2010": {
    M: 29
  },
  "2011": {
    M: 34
  },
  "2012": {
    M: 17
  },
  "2013": {
    M: 17
  },
  "2014": {
    M: 22
  },
  "2015": {
    M: 19
  },
  "2016": {
    M: 16
  },
  "2017": {
    M: 13
  },
  "2018": {
    M: 15
  },
  "2019": {
    M: 24
  },
  "2020": {
    M: 25
  },
  "2021": {
    M: 45
  }
};
const Jaiden = {
  "1999": {
    M: 10
  },
  "2002": {
    M: 14
  },
  "2007": {
    M: 13
  }
};
const Jaime = {
  "1980": {
    F: 44
  },
  "1981": {
    F: 61
  },
  "1982": {
    F: 25
  },
  "1983": {
    F: 20
  },
  "1984": {
    F: 16
  },
  "1985": {
    F: 32
  },
  "1986": {
    F: 28
  },
  "1987": {
    F: 20
  },
  "1988": {
    F: 13
  },
  "1989": {
    F: 17
  },
  "1990": {
    F: 21
  },
  "1991": {
    F: 20
  },
  "1992": {
    F: 16
  },
  "1993": {
    F: 11
  },
  "1994": {
    F: 15
  },
  "1995": {
    F: 13
  },
  "1996": {
    F: 14
  },
  "1997": {
    F: 27
  },
  "1998": {
    F: 19
  },
  "1999": {
    F: 19
  },
  "2000": {
    F: 25
  },
  "2001": {
    F: 21
  },
  "2002": {
    F: 22
  },
  "2003": {
    F: 34
  },
  "2004": {
    F: 22
  },
  "2005": {
    F: 18
  },
  "2006": {
    F: 20
  },
  "2007": {
    F: 16
  },
  "2008": {
    F: 22
  },
  "2009": {
    F: 10
  },
  "2010": {
    F: 12
  },
  "2011": {
    F: 10
  },
  "2012": {
    F: 10
  },
  "2013": {
    F: 12
  }
};
const Jaimee = {
  "1980": {
    F: 13
  },
  "1981": {
    F: 25
  },
  "1982": {
    F: 15
  },
  "1983": {
    F: 35
  },
  "1984": {
    F: 25
  },
  "1985": {
    F: 35
  },
  "1986": {
    F: 21
  },
  "1987": {
    F: 42
  },
  "1988": {
    F: 30
  },
  "1989": {
    F: 33
  },
  "1990": {
    F: 39
  },
  "1991": {
    F: 40
  },
  "1992": {
    F: 41
  },
  "1993": {
    F: 27
  },
  "1994": {
    F: 31
  },
  "1995": {
    F: 25
  },
  "1996": {
    F: 25
  },
  "1997": {
    F: 19
  },
  "1998": {
    F: 17
  },
  "1999": {
    F: 15
  },
  "2000": {
    F: 23
  },
  "2001": {
    F: 14
  },
  "2002": {
    F: 15
  },
  "2003": {
    F: 23
  },
  "2004": {
    F: 10
  },
  "2005": {
    F: 17
  },
  "2006": {
    F: 10
  },
  "2008": {
    F: 17
  }
};
const Jairus = {
  "2018": {
    M: 14
  },
  "2019": {
    M: 14
  }
};
const Jak = {
  "2002": {
    M: 10
  }
};
const Jake = {
  "1985": {
    M: 11
  },
  "1986": {
    M: 12
  },
  "1987": {
    M: 18
  },
  "1988": {
    M: 27
  },
  "1989": {
    M: 30
  },
  "1990": {
    M: 44
  },
  "1991": {
    M: 52
  },
  "1992": {
    M: 39
  },
  "1993": {
    M: 70
  },
  "1994": {
    M: 99
  },
  "1995": {
    M: 119
  },
  "1996": {
    M: 113
  },
  "1997": {
    M: 117
  },
  "1998": {
    M: 100
  },
  "1999": {
    M: 95
  },
  "2000": {
    M: 81
  },
  "2001": {
    M: 79
  },
  "2002": {
    M: 99
  },
  "2003": {
    M: 94
  },
  "2004": {
    M: 95
  },
  "2005": {
    M: 109
  },
  "2006": {
    M: 96
  },
  "2007": {
    M: 119
  },
  "2008": {
    M: 112
  },
  "2009": {
    M: 103
  },
  "2010": {
    M: 113
  },
  "2011": {
    M: 120
  },
  "2012": {
    M: 104
  },
  "2013": {
    M: 89
  },
  "2014": {
    M: 68
  },
  "2015": {
    M: 78
  },
  "2016": {
    M: 67
  },
  "2017": {
    M: 53
  },
  "2018": {
    M: 43
  },
  "2019": {
    M: 41
  },
  "2020": {
    M: 32
  },
  "2021": {
    M: 35
  }
};
const Jakob = {
  "1993": {
    M: 12
  },
  "1994": {
    M: 17
  },
  "1995": {
    M: 12
  },
  "1996": {
    M: 19
  },
  "1997": {
    M: 20
  },
  "1998": {
    M: 32
  },
  "1999": {
    M: 35
  },
  "2000": {
    M: 52
  },
  "2001": {
    M: 39
  },
  "2002": {
    M: 47
  },
  "2003": {
    M: 44
  },
  "2004": {
    M: 34
  },
  "2005": {
    M: 26
  },
  "2006": {
    M: 29
  },
  "2007": {
    M: 26
  },
  "2008": {
    M: 24
  },
  "2009": {
    M: 22
  },
  "2010": {
    M: 34
  },
  "2011": {
    M: 26
  },
  "2012": {
    M: 20
  },
  "2013": {
    M: 23
  },
  "2014": {
    M: 15
  },
  "2015": {
    M: 19
  },
  "2016": {
    M: 13
  },
  "2017": {
    M: 14
  },
  "2018": {
    M: 10
  },
  "2020": {
    M: 10
  }
};
const Jamal = {
  "1993": {
    M: 11
  },
  "1996": {
    M: 11
  }
};
const James = {
  "1900": {
    M: 437
  },
  "1901": {
    M: 418
  },
  "1902": {
    M: 447
  },
  "1903": {
    M: 464
  },
  "1904": {
    M: 464
  },
  "1905": {
    M: 467
  },
  "1906": {
    M: 489
  },
  "1907": {
    M: 478
  },
  "1908": {
    M: 538
  },
  "1909": {
    M: 527
  },
  "1910": {
    M: 506
  },
  "1911": {
    M: 465
  },
  "1912": {
    M: 570
  },
  "1913": {
    M: 586
  },
  "1914": {
    M: 536
  },
  "1915": {
    M: 546
  },
  "1916": {
    M: 518
  },
  "1917": {
    M: 562
  },
  "1918": {
    M: 469
  },
  "1919": {
    M: 447
  },
  "1920": {
    M: 591
  },
  "1921": {
    M: 544
  },
  "1922": {
    M: 531
  },
  "1923": {
    M: 505
  },
  "1924": {
    M: 493
  },
  "1925": {
    M: 522
  },
  "1926": {
    M: 479
  },
  "1927": {
    M: 479
  },
  "1928": {
    M: 458
  },
  "1929": {
    M: 436
  },
  "1930": {
    M: 480
  },
  "1931": {
    M: 428
  },
  "1932": {
    M: 416
  },
  "1933": {
    M: 388
  },
  "1934": {
    M: 373
  },
  "1935": {
    M: 372
  },
  "1936": {
    M: 343
  },
  "1937": {
    M: 352
  },
  "1938": {
    M: 368
  },
  "1939": {
    M: 394
  },
  "1940": {
    M: 418
  },
  "1941": {
    M: 404
  },
  "1942": {
    M: 377
  },
  "1943": {
    M: 353
  },
  "1944": {
    M: 345
  },
  "1945": {
    M: 345
  },
  "1946": {
    M: 434
  },
  "1947": {
    M: 452
  },
  "1948": {
    M: 432
  },
  "1949": {
    M: 403
  },
  "1950": {
    M: 406
  },
  "1951": {
    M: 346
  },
  "1952": {
    M: 378
  },
  "1953": {
    M: 342
  },
  "1954": {
    M: 322
  },
  "1955": {
    M: 352
  },
  "1956": {
    M: 354
  },
  "1957": {
    M: 356
  },
  "1958": {
    M: 348
  },
  "1959": {
    M: 358
  },
  "1960": {
    M: 374
  },
  "1961": {
    M: 352
  },
  "1962": {
    M: 323
  },
  "1963": {
    M: 381
  },
  "1964": {
    M: 358
  },
  "1965": {
    M: 385
  },
  "1966": {
    M: 358
  },
  "1967": {
    M: 373
  },
  "1968": {
    M: 388
  },
  "1969": {
    M: 368
  },
  "1970": {
    M: 383
  },
  "1971": {
    M: 381
  },
  "1972": {
    M: 374
  },
  "1973": {
    M: 394
  },
  "1974": {
    M: 440
  },
  "1975": {
    M: 471
  },
  "1976": {
    M: 469
  },
  "1977": {
    M: 491
  },
  "1978": {
    M: 485
  },
  "1979": {
    M: 539
  },
  "1980": {
    M: 586
  },
  "1981": {
    M: 516
  },
  "1982": {
    M: 605
  },
  "1983": {
    M: 641
  },
  "1984": {
    M: 589
  },
  "1985": {
    M: 658
  },
  "1986": {
    M: 586
  },
  "1987": {
    M: 639
  },
  "1988": {
    M: 632
  },
  "1989": {
    M: 612
  },
  "1990": {
    M: 678
  },
  "1991": {
    M: 644
  },
  "1992": {
    M: 617
  },
  "1993": {
    M: 605
  },
  "1994": {
    M: 544
  },
  "1995": {
    M: 502
  },
  "1996": {
    M: 506
  },
  "1997": {
    M: 459
  },
  "1998": {
    M: 387
  },
  "1999": {
    M: 384
  },
  "2000": {
    M: 423
  },
  "2001": {
    M: 371
  },
  "2002": {
    M: 355
  },
  "2003": {
    M: 334
  },
  "2004": {
    M: 327
  },
  "2005": {
    M: 349
  },
  "2006": {
    M: 361
  },
  "2007": {
    M: 370
  },
  "2008": {
    M: 382
  },
  "2009": {
    M: 336
  },
  "2010": {
    M: 334
  },
  "2011": {
    M: 267
  },
  "2012": {
    M: 253
  },
  "2013": {
    M: 281
  },
  "2014": {
    M: 269
  },
  "2015": {
    M: 251
  },
  "2016": {
    M: 253
  },
  "2017": {
    M: 242
  },
  "2018": {
    M: 198
  },
  "2019": {
    M: 210
  },
  "2020": {
    M: 157
  },
  "2021": {
    M: 166
  }
};
const Jameson = {
  "2019": {
    M: 15
  },
  "2020": {
    M: 12
  }
};
const Jamie = {
  "1965": {
    M: 15
  },
  "1966": {
    M: 13
  },
  "1967": {
    M: 20
  },
  "1968": {
    M: 33
  },
  "1969": {
    M: 25
  },
  "1970": {
    M: 32
  },
  "1971": {
    M: 62
  },
  "1972": {
    M: 78
  },
  "1973": {
    M: 91
  },
  "1974": {
    M: 99
  },
  "1975": {
    M: 112
  },
  "1976": {
    M: 174
  },
  "1977": {
    M: 181
  },
  "1978": {
    F: 10,
    M: 179
  },
  "1979": {
    F: 20,
    M: 168
  },
  "1980": {
    F: 30,
    M: 199
  },
  "1981": {
    F: 46,
    M: 194
  },
  "1982": {
    F: 49,
    M: 152
  },
  "1983": {
    F: 70,
    M: 139
  },
  "1984": {
    F: 42,
    M: 145
  },
  "1985": {
    F: 85,
    M: 174
  },
  "1986": {
    F: 81,
    M: 128
  },
  "1987": {
    F: 61,
    M: 158
  },
  "1988": {
    F: 51,
    M: 136
  },
  "1989": {
    F: 76,
    M: 148
  },
  "1990": {
    F: 77,
    M: 234
  },
  "1991": {
    F: 76,
    M: 197
  },
  "1992": {
    F: 68,
    M: 159
  },
  "1993": {
    F: 66,
    M: 154
  },
  "1994": {
    F: 41,
    M: 170
  },
  "1995": {
    F: 53,
    M: 149
  },
  "1996": {
    F: 58,
    M: 123
  },
  "1997": {
    F: 69,
    M: 98
  },
  "1998": {
    F: 55,
    M: 99
  },
  "1999": {
    F: 55,
    M: 92
  },
  "2000": {
    F: 31,
    M: 106
  },
  "2001": {
    F: 30,
    M: 84
  },
  "2002": {
    F: 51,
    M: 88
  },
  "2003": {
    F: 33,
    M: 92
  },
  "2004": {
    F: 27,
    M: 90
  },
  "2005": {
    F: 18,
    M: 88
  },
  "2006": {
    F: 29,
    M: 87
  },
  "2007": {
    F: 30,
    M: 97
  },
  "2008": {
    F: 24,
    M: 90
  },
  "2009": {
    F: 11,
    M: 85
  },
  "2010": {
    F: 21,
    M: 52
  },
  "2011": {
    F: 15,
    M: 52
  },
  "2012": {
    F: 11,
    M: 31
  },
  "2013": {
    F: 13,
    M: 47
  },
  "2014": {
    M: 35
  },
  "2015": {
    F: 15,
    M: 37
  },
  "2016": {
    M: 36
  },
  "2017": {
    M: 36
  },
  "2018": {
    M: 28
  },
  "2019": {
    M: 30
  },
  "2020": {
    M: 24
  },
  "2021": {
    M: 22
  }
};
const Jan = {
  "1939": {
    F: 11
  },
  "1941": {
    F: 10
  },
  "1942": {
    F: 16
  },
  "1943": {
    F: 10
  },
  "1944": {
    F: 16
  },
  "1945": {
    F: 19
  },
  "1946": {
    F: 25
  },
  "1947": {
    F: 32
  },
    F: 36