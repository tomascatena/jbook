(this['webpackJsonp@notas/local-client'] =
  this['webpackJsonp@notas/local-client'] || []).push([
  [0],
  {
    278: function (e, t) {},
    322: function (e, t, n) {},
    328: function (e, t, n) {},
    640: function (e, t, n) {},
    641: function (e, t, n) {
      'use strict';
      n.r(t);
      var r,
        a = n(0),
        i = n(56),
        o = n.n(i),
        c = n(686),
        p = n(215),
        l = Object(p.a)({
          breakpoints: {
            keys: ['xs', 'sm', 'md', 'lg', 'xl'],
            values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
            unit: 'px',
          },
          direction: 'ltr',
          components: {},
          palette: {
            mode: 'dark',
            common: { black: '#000', white: '#fff' },
            primary: {
              main: '#90caf9',
              light: '#e3f2fd',
              dark: '#42a5f5',
              contrastText: 'rgba(0, 0, 0, 0.87)',
            },
            secondary: {
              main: '#ce93d8',
              light: '#f3e5f5',
              dark: '#ab47bc',
              contrastText: 'rgba(0, 0, 0, 0.87)',
            },
            error: {
              main: '#f44336',
              light: '#e57373',
              dark: '#d32f2f',
              contrastText: '#fff',
            },
            warning: {
              main: '#ffa726',
              light: '#ffb74d',
              dark: '#f57c00',
              contrastText: 'rgba(0, 0, 0, 0.87)',
            },
            info: {
              main: '#29b6f6',
              light: '#4fc3f7',
              dark: '#0288d1',
              contrastText: 'rgba(0, 0, 0, 0.87)',
            },
            success: {
              main: '#66bb6a',
              light: '#81c784',
              dark: '#388e3c',
              contrastText: 'rgba(0, 0, 0, 0.87)',
            },
            grey: {
              50: '#fafafa',
              100: '#f5f5f5',
              200: '#eeeeee',
              300: '#e0e0e0',
              400: '#bdbdbd',
              500: '#9e9e9e',
              600: '#757575',
              700: '#616161',
              800: '#424242',
              900: '#212121',
              A100: '#f5f5f5',
              A200: '#eeeeee',
              A400: '#bdbdbd',
              A700: '#616161',
            },
            contrastThreshold: 3,
            tonalOffset: 0.2,
            text: {
              primary: '#fff',
              secondary: 'rgba(255, 255, 255, 0.7)',
              disabled: 'rgba(255, 255, 255, 0.5)',
            },
            divider: 'rgba(255, 255, 255, 0.12)',
            background: { paper: '#121212', default: '#121212' },
            action: {
              active: '#fff',
              hover: 'rgba(255, 255, 255, 0.08)',
              hoverOpacity: 0.08,
              selected: 'rgba(255, 255, 255, 0.16)',
              selectedOpacity: 0.16,
              disabled: 'rgba(255, 255, 255, 0.3)',
              disabledBackground: 'rgba(255, 255, 255, 0.12)',
              disabledOpacity: 0.38,
              focus: 'rgba(255, 255, 255, 0.12)',
              focusOpacity: 0.12,
              activatedOpacity: 0.24,
            },
          },
          shape: { borderRadius: 4 },
          mixins: {
            toolbar: {
              minHeight: 56,
              '@media (min-width:0px) and (orientation: landscape)': {
                minHeight: 48,
              },
              '@media (min-width:600px)': { minHeight: 64 },
            },
          },
          shadows: [
            'none',
            '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
            '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
            '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
            '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
            '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
            '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
            '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
            '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
            '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
            '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
            '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
            '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
            '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
            '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
            '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
            '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
            '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
            '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
            '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
            '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
            '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
            '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
            '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
          ],
          typography: {
            htmlFontSize: 16,
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: 14,
            fontWeightLight: 300,
            fontWeightRegular: 400,
            fontWeightMedium: 500,
            fontWeightBold: 700,
            h1: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 300,
              fontSize: '6rem',
              lineHeight: 1.167,
              letterSpacing: '-0.01562em',
            },
            h2: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 300,
              fontSize: '3.75rem',
              lineHeight: 1.2,
              letterSpacing: '-0.00833em',
            },
            h3: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '3rem',
              lineHeight: 1.167,
              letterSpacing: '0em',
            },
            h4: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '2.125rem',
              lineHeight: 1.235,
              letterSpacing: '0.00735em',
            },
            h5: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '1.5rem',
              lineHeight: 1.334,
              letterSpacing: '0em',
            },
            h6: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 500,
              fontSize: '1.25rem',
              lineHeight: 1.6,
              letterSpacing: '0.0075em',
            },
            subtitle1: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.75,
              letterSpacing: '0.00938em',
            },
            subtitle2: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 500,
              fontSize: '0.875rem',
              lineHeight: 1.57,
              letterSpacing: '0.00714em',
            },
            body1: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '1rem',
              lineHeight: 1.5,
              letterSpacing: '0.00938em',
            },
            body2: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '0.875rem',
              lineHeight: 1.43,
              letterSpacing: '0.01071em',
            },
            button: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 500,
              fontSize: '0.875rem',
              lineHeight: 1.75,
              letterSpacing: '0.02857em',
              textTransform: 'uppercase',
            },
            caption: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '0.75rem',
              lineHeight: 1.66,
              letterSpacing: '0.03333em',
            },
            overline: {
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: 400,
              fontSize: '0.75rem',
              lineHeight: 2.66,
              letterSpacing: '0.08333em',
              textTransform: 'uppercase',
            },
          },
          transitions: {
            easing: {
              easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
              easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
              easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
              sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
            },
            duration: {
              shortest: 150,
              shorter: 200,
              short: 250,
              standard: 300,
              complex: 375,
              enteringScreen: 225,
              leavingScreen: 195,
            },
          },
          zIndex: {
            mobileStepper: 1e3,
            speedDial: 1050,
            appBar: 1100,
            drawer: 1200,
            modal: 1300,
            snackbar: 1400,
            tooltip: 1500,
          },
        }),
        s = n(674),
        u = n(687),
        d = n(688),
        x = n(31),
        f = n(683),
        b = n(26),
        g = n(14),
        h = n.n(g),
        m = n(60),
        j = n.n(m),
        v = Object(x.b)(
          'cells/fetchCells',
          (function () {
            var e = Object(b.a)(
              h.a.mark(function e(t, n) {
                var r, a, i, o, c, p, l;
                return h.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = n.getState),
                          (a = n.requestId),
                          (i = r().cells),
                          (o = i.loading),
                          (c = i.currentRequestId),
                          o && a === c)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt('return');
                      case 4:
                        return (e.next = 6), j.a.get('/cells');
                      case 6:
                        return (
                          (p = e.sent), (l = p.data), e.abrupt('return', l)
                        );
                      case 9:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()
        ),
        O = Object(x.b)(
          'cells/saveCells',
          (function () {
            var e = Object(b.a)(
              h.a.mark(function e(t, n) {
                var r, a, i, o, c, p, l, s;
                return h.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          ((r = n.getState),
                          (a = n.requestId),
                          (i = r().cells),
                          (o = i.loading),
                          (c = i.currentRequestId),
                          (p = i.data),
                          (l = i.order),
                          o && a === c)
                        ) {
                          e.next = 4;
                          break;
                        }
                        return e.abrupt('return');
                      case 4:
                        return (
                          (s = l.map(function (e) {
                            return p[e];
                          })),
                          (e.next = 7),
                          j.a.post('/cells', { cells: s })
                        );
                      case 7:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()
        ),
        y = {
          data: {},
          loading: !1,
          error: null,
          order: [],
          currentRequestId: void 0,
          saveError: null,
        },
        w = Object(x.c)({
          name: 'cell',
          initialState: y,
          reducers: {
            moveCell: function (e, t) {
              var n = t.payload.direction,
                r = e.order.findIndex(function (e) {
                  return e === t.payload.id;
                }),
                a = 'up' === n ? r - 1 : r + 1;
              if (!(a < 0 || a > e.order.length - 1)) {
                var i = [e.order[a], e.order[r]];
                (e.order[r] = i[0]), (e.order[a] = i[1]);
              }
            },
            deleteCell: function (e, t) {
              delete e.data[t.payload],
                (e.order = e.order.filter(function (e) {
                  return e !== t.payload;
                }));
            },
            insertCell: function (e, t) {
              var n = t.payload.type,
                r = { id: Object(f.a)(), type: n, content: '' };
              e.data[r.id] = r;
              var a = e.order.findIndex(function (e) {
                return e === t.payload.id;
              });
              a < 0 ? e.order.unshift(r.id) : e.order.splice(a + 1, 0, r.id);
            },
            updateCell: function (e, t) {
              var n = t.payload,
                r = n.id,
                a = n.content;
              e.data[r].content = a;
            },
          },
          extraReducers: function (e) {
            e.addCase(v.pending, function (e, t) {
              !1 === e.loading &&
                ((e.loading = !0),
                (e.error = null),
                (e.currentRequestId = t.meta.requestId));
            })
              .addCase(v.fulfilled, function (e, t) {
                var n = t.meta.requestId;
                !0 === e.loading &&
                  e.currentRequestId === n &&
                  ((e.loading = !1),
                  (e.currentRequestId = void 0),
                  (e.order = t.payload.map(function (e) {
                    return e.id;
                  })),
                  (e.data = t.payload.reduce(function (e, t) {
                    return (e[t.id] = t), e;
                  }, {})));
              })
              .addCase(v.rejected, function (e, t) {
                var n = t.meta.requestId;
                !0 === e.loading &&
                  e.currentRequestId === n &&
                  ((e.loading = !1),
                  (e.error = t.error),
                  (e.currentRequestId = void 0));
              })
              .addCase(O.pending, function (e, t) {
                !1 === e.loading &&
                  ((e.loading = !0),
                  (e.saveError = null),
                  (e.currentRequestId = t.meta.requestId));
              })
              .addCase(O.fulfilled, function (e, t) {
                var n = t.meta.requestId;
                !0 === e.loading &&
                  e.currentRequestId === n &&
                  ((e.loading = !1), (e.currentRequestId = void 0));
              })
              .addCase(O.rejected, function (e, t) {
                var n = t.meta.requestId;
                !0 === e.loading &&
                  e.currentRequestId === n &&
                  ((e.loading = !1),
                  (e.saveError = t.error),
                  (e.currentRequestId = void 0));
              });
          },
        }),
        C = w.actions,
        k = w.reducer,
        R = Object(x.c)({
          name: 'bundles',
          initialState: { currentCellId: null, cellBundles: {} },
          reducers: {
            setCurrentCellId: function (e, t) {
              (e.currentCellId = t.payload),
                e.cellBundles[t.payload] ||
                  (e.cellBundles[t.payload] = {
                    code: '',
                    err: null,
                    isBundling: !1,
                  });
            },
            removeBundle: function (e, t) {
              delete e.cellBundles[t.payload];
            },
            startBundling: function (e, t) {
              e.cellBundles[t.payload] = {
                code: '',
                err: null,
                isBundling: !1,
              };
            },
            completeBundling: function (e, t) {
              var n = t.payload,
                r = n.cellId,
                a = n.bundle;
              e.cellBundles[r] = { code: a.code, err: a.err, isBundling: !1 };
            },
          },
        }),
        I = R.actions,
        S = R.reducer,
        z = function (e) {
          var t;
          return function (n) {
            return function (r) {
              n(r),
                [
                  'cell/moveCell',
                  'cell/updateCell',
                  'cell/deleteCell',
                  'cell/insertCell',
                ].includes(r.type) &&
                  (t && clearTimeout(t),
                  (t = setTimeout(function () {
                    e.dispatch(O());
                  }, 1e3)));
            };
          };
        },
        H = Object(x.a)({
          reducer: { cells: k, bundles: S },
          devTools: !1,
          middleware: function (e) {
            return e().concat(z);
          },
        }),
        B = n(46),
        E = n(10),
        q = n(35),
        F = Object(E.a)(Object(E.a)({}, C), I),
        T = function () {
          var e = Object(B.b)();
          return Object(a.useMemo)(
            function () {
              return Object(q.b)(F, e);
            },
            [e]
          );
        },
        L = function () {
          return Object(B.b)();
        },
        M = B.c,
        W = n(199),
        A = n(204),
        D = n.n(A),
        _ = n(202),
        V = n.n(_),
        N = n(203),
        U = n.n(N),
        $ = n(689),
        J = n(682),
        P = Object(s.a)('div')({
          position: 'absolute',
          top: 0,
          right: 0,
          zIndex: 1,
          opacity: 0.3,
          transition: 'opacity 0.3s',
          '.MuiButton-startIcon': { margin: 0 },
          '.MuiButtonGroup-root .MuiButton-root': { borderRadius: 0 },
          '&:hover': { opacity: 1 },
        }),
        G = n(1),
        K = function (e) {
          var t = e.cellId,
            n = T(),
            r = n.deleteCell,
            a = n.moveCell,
            i = n.removeBundle;
          return Object(G.jsx)(P, {
            children: Object(G.jsxs)($.a, {
              size: 'small',
              disableElevation: !0,
              variant: 'contained',
              children: [
                Object(G.jsx)(J.a, {
                  startIcon: Object(G.jsx)(V.a, {}),
                  onClick: function () {
                    return a({ id: t, direction: 'up' });
                  },
                }),
                Object(G.jsx)(J.a, {
                  startIcon: Object(G.jsx)(U.a, {}),
                  onClick: function () {
                    return a({ id: t, direction: 'down' });
                  },
                }),
                Object(G.jsx)(J.a, {
                  startIcon: Object(G.jsx)(D.a, {}),
                  onClick: function () {
                    r(t), i(t);
                  },
                }),
              ],
            }),
          });
        },
        Q = n(129),
        X = n.n(Q),
        Y = n(205),
        Z = n.n(Y),
        ee = n(206),
        te = n.n(ee),
        ne =
          (n(322),
          Object(s.a)(J.a)(function (e) {
            return {
              position: 'absolute',
              zIndex: 1,
              right: '.5rem',
              top: '.5rem',
              opacity: 0,
              transition: 'opacity 0.3s',
              marginRight: e.theme.spacing(2),
            };
          })),
        re = Object(s.a)('div')({
          position: 'relative',
          width: 'calc(100% - 10px)',
          height: '100%',
          '&:hover > .MuiButton-root': { opacity: 1 },
        }),
        ae = function (e) {
          var t = e.initialValue,
            n = e.onChange,
            r = Object(a.useRef)(),
            i = Object(a.useRef)();
          Object(a.useEffect)(function () {
            i.current = window.__PRETTIER_FORMATTER__;
          }, []);
          return Object(G.jsxs)(re, {
            children: [
              Object(G.jsx)(ne, {
                size: 'small',
                variant: 'outlined',
                onClick: function () {
                  var e,
                    t = r.current.getModel().getValue();
                  (e = i.current ? i.current(t).replace(/\n$/, '') : t),
                    r.current.setValue(e);
                },
                children: 'Format',
              }),
              Object(G.jsx)(X.a, {
                editorDidMount: function (e, t) {
                  var a;
                  (r.current = t),
                    t.onDidChangeModelContent(function () {
                      n(e());
                    }),
                    null === (a = t.getModel()) ||
                      void 0 === a ||
                      a.updateOptions({ tabSize: 2 }),
                    new te.a(
                      window.monaco,
                      Z.a,
                      t
                    ).highLightOnDidChangeModelContent(
                      function () {},
                      function () {},
                      void 0,
                      function () {}
                    );
                },
                value: t,
                language: 'javascript',
                theme: 'dark',
                options: {
                  wordWrap: 'on',
                  minimap: { enabled: !1 },
                  showUnused: !0,
                  folding: !1,
                  lineNumbersMinChars: 3,
                  fontSize: 16,
                  scrollBeyondLastLine: !1,
                  automaticLayout: !0,
                },
              }),
            ],
          });
        },
        ie = n(690),
        oe = n(691),
        ce = Object(s.a)('div')(function (e) {
          e.theme;
          return {
            position: 'relative',
            height: '100%',
            flex: 1,
            '.react-draggable-transparent-selection &:after': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: 'transparent',
            },
            iframe: { height: '100%', backgroundColor: '#fff', width: '100%' },
          };
        }),
        pe = Object(s.a)('div')(function (e) {
          return {
            position: 'absolute',
            top: 0,
            left: 0,
            color: 'red',
            backgroundColor: '#fff',
            height: '100%',
            width: '100%',
            padding: e.theme.spacing(1),
          };
        }),
        le =
          "\n<html>\n  <head>\n    <style>\n      html {\n        background-color: '#fff'\n      }\n    </style>\n  </head>\n  \n  <body>\n    <div id=\"root\"></div>\n\n    <script>\n      const handleError = (err) => {\n        const root = document.querySelector('#root');\n        root.innerHTML = '<div style=\"color: red;\"><h4>Runtime Error</h4>' + err + '</div>';\n\n        console.error(err);\n      };\n\n      window.addEventListener('error', (event) => {\n        event.preventDefault(); // for the browser not to print out the error in the console\n        handleError(event.error);\n      })\n\n      window.addEventListener(\"message\", (event) => {\n        try {\n          eval(event.data);\n        } catch (err) {\n          handleError(err)\n        }\n      }, false);\n    </script>\n  </body>\n</html>\n",
        se = function (e) {
          var t = e.code,
            n = e.bundlingStatus,
            r = Object(a.useRef)();
          return (
            Object(a.useEffect)(
              function () {
                (r.current.srcdoc = le),
                  r.current &&
                    setTimeout(function () {
                      r.current.contentWindow.postMessage(t, '*');
                    }, 50);
              },
              [t]
            ),
            Object(G.jsxs)(ce, {
              children: [
                Object(G.jsx)('iframe', {
                  title: 'preview',
                  sandbox: 'allow-scripts',
                  srcDoc: le,
                  ref: r,
                }),
                n && Object(G.jsx)(pe, { children: n }),
              ],
            })
          );
        },
        ue = n(18),
        de = n(207),
        xe =
          (n(328),
          function (e) {
            var t,
              n = e.direction,
              r = e.children,
              i = 0.65 * window.innerWidth,
              o = Object(a.useState)(window.innerHeight),
              c = Object(ue.a)(o, 2),
              p = c[0],
              l = c[1],
              s = Object(a.useState)(window.innerWidth),
              u = Object(ue.a)(s, 2),
              d = u[0],
              x = u[1],
              f = Object(a.useState)(i),
              b = Object(ue.a)(f, 2),
              g = b[0],
              h = b[1];
            return (
              Object(a.useEffect)(
                function () {
                  var e,
                    t = function () {
                      e && clearTimeout(e),
                        (e = setTimeout(function () {
                          l(window.innerHeight),
                            x(window.innerWidth),
                            i < g && h(i);
                        }, 100));
                    };
                  return (
                    window.addEventListener('resize', t),
                    function () {
                      window.removeEventListener('resize', t);
                    }
                  );
                },
                [g]
              ),
              (t =
                'horizontal' === n
                  ? {
                      className: 'resize-horizontal',
                      height: 1 / 0,
                      width: g,
                      maxConstraints: [0.75 * d, 1 / 0],
                      minConstraints: [0.2 * d, 1 / 0],
                      resizeHandles: ['e'],
                      onResizeStop: function (e, t) {
                        h(t.size.width);
                      },
                    }
                  : {
                      className: 'resize-vertical',
                      height: 300,
                      width: 1 / 0,
                      maxConstraints: [1 / 0, 0.9 * p],
                      minConstraints: [1 / 0, 100],
                      resizeHandles: ['s'],
                    }),
              Object(G.jsx)(
                de.ResizableBox,
                Object(E.a)(Object(E.a)({}, t), {}, { children: r })
              )
            );
          }),
        fe = Object(s.a)(u.a)({
          display: 'flex',
          height: '100%',
          flexDirection: 'row',
        }),
        be = Object(s.a)(u.a)({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          flexDirection: 'column',
          gap: '1rem',
        }),
        ge = n(208),
        he = n(209),
        me = n.n(he).a.createInstance({ name: 'filecache' }),
        je = function (e) {
          return {
            name: 'fetch-plugin',
            setup: function (t) {
              t.onLoad(
                { filter: /(^index\.js$)/ },
                (function () {
                  var t = Object(b.a)(
                    h.a.mark(function t(n) {
                      return h.a.wrap(function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return t.abrupt('return', {
                                loader: 'jsx',
                                contents: e,
                              });
                            case 1:
                            case 'end':
                              return t.stop();
                          }
                      }, t);
                    })
                  );
                  return function (e) {
                    return t.apply(this, arguments);
                  };
                })()
              ),
                t.onLoad(
                  { filter: /.*/ },
                  (function () {
                    var e = Object(b.a)(
                      h.a.mark(function e(t) {
                        var n;
                        return h.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), me.getItem(t.path);
                              case 2:
                                if (!(n = e.sent)) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt('return', n);
                              case 5:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                ),
                t.onLoad(
                  { filter: /.css$/ },
                  (function () {
                    var e = Object(b.a)(
                      h.a.mark(function e(t) {
                        var n, r, a, i, o, c;
                        return h.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), j.a.get(t.path);
                              case 2:
                                return (
                                  (n = e.sent),
                                  (r = n.data),
                                  (a = n.request),
                                  (i = r
                                    .replace(/\n/g, '')
                                    .replace(/"/g, '\\"')
                                    .replace(/'/g, "\\'")),
                                  (o = "\n        const style = document.createElement('style');\n        style.innerText = '".concat(
                                    i,
                                    "';\n        document.head.appendChild(style);\n        "
                                  )),
                                  (c = {
                                    loader: 'jsx',
                                    contents: o,
                                    resolveDir: new URL('./', a.responseURL)
                                      .pathname,
                                  }),
                                  (e.next = 10),
                                  me.setItem(t.path, c)
                                );
                              case 10:
                                return e.abrupt('return', c);
                              case 11:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                ),
                t.onLoad(
                  { filter: /.*/ },
                  (function () {
                    var e = Object(b.a)(
                      h.a.mark(function e(t) {
                        var n, r, a, i;
                        return h.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), j.a.get(t.path);
                              case 2:
                                return (
                                  (n = e.sent),
                                  (r = n.data),
                                  (a = n.request),
                                  (i = {
                                    loader: 'jsx',
                                    contents: r,
                                    resolveDir: new URL('./', a.responseURL)
                                      .pathname,
                                  }),
                                  (e.next = 8),
                                  me.setItem(t.path, i)
                                );
                              case 8:
                                return e.abrupt('return', i);
                              case 9:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      })
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })()
                );
            },
          };
        },
        ve = (function () {
          var e = Object(b.a)(
            h.a.mark(function e(t) {
              return h.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (r) {
                        e.next = 4;
                        break;
                      }
                      return (
                        (e.next = 3),
                        ge.startService({
                          worker: !0,
                          wasmURL:
                            'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm',
                        })
                      );
                    case 3:
                      r = e.sent;
                    case 4:
                      return e.abrupt(
                        'return',
                        r.build({
                          entryPoints: ['index.js'],
                          bundle: !0,
                          write: !1,
                          plugins: [
                            {
                              name: 'unpkg-path-plugin',
                              setup: function (e) {
                                e.onResolve(
                                  { filter: /(^index\.js$)/ },
                                  function (e) {
                                    return { path: e.path, namespace: 'a' };
                                  }
                                ),
                                  e.onResolve({ filter: /^\.+\// }, function (
                                    e
                                  ) {
                                    return {
                                      namespace: 'a',
                                      path: new URL(
                                        e.path,
                                        'https://unpkg.com'.concat(
                                          e.resolveDir,
                                          '/'
                                        )
                                      ).href,
                                    };
                                  }),
                                  e.onResolve(
                                    { filter: /.*/ },
                                    (function () {
                                      var e = Object(b.a)(
                                        h.a.mark(function e(t) {
                                          return h.a.wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt('return', {
                                                    namespace: 'a',
                                                    path: 'https://unpkg.com/'.concat(
                                                      t.path
                                                    ),
                                                  });
                                                case 1:
                                                case 'end':
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()
                                  );
                              },
                            },
                            je(t),
                          ],
                          define: {
                            'process.env.NODE_ENV': '"production"',
                            global: 'window',
                          },
                          jsxFactory: '_React.createElement',
                          jsxFragment: '_React.Fragment',
                        })
                      );
                    case 5:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        Oe = ve,
        ye = Object(x.b)(
          'bundles/createBundle',
          (function () {
            var e = Object(b.a)(
              h.a.mark(function e(t, n) {
                var r, a, i, o, c, p, l, s;
                return h.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            ((a = t.cellId),
                            (i = t.rawCode),
                            (o = n.dispatch),
                            (c = n.getState),
                            o(I.setCurrentCellId(a)),
                            (p = c().bundles.cellBundles)[a] &&
                              (null === (r = p[a]) ||
                                void 0 === r ||
                                !r.isBundling))
                          ) {
                            e.next = 6;
                            break;
                          }
                          return e.abrupt('return');
                        case 6:
                          return (
                            o(I.startBundling(a)),
                            (l = { code: '', err: '' }),
                            (e.prev = 8),
                            (e.next = 11),
                            Oe(i)
                          );
                        case 11:
                          (s = e.sent),
                            (l = { code: s.outputFiles[0].text, err: null }),
                            (e.next = 18);
                          break;
                        case 15:
                          (e.prev = 15),
                            (e.t0 = e.catch(8)),
                            e.t0 instanceof Error &&
                              (l = { code: '', err: e.t0.message });
                        case 18:
                          return (
                            (e.prev = 18),
                            o(I.completeBundling({ cellId: a, bundle: l })),
                            e.abrupt('return', l)
                          );
                        case 22:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[8, 15, 18, 22]]
                );
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })()
        ),
        we = function (e) {
          var t,
            n = e.cell,
            r = T().updateCell,
            i = L(),
            o = M(function (e) {
              return e.bundles.cellBundles[n.id];
            }),
            c =
              ((t = n.id),
              M(function (e) {
                var n,
                  r = e.cells,
                  a = r.data,
                  i = r.order.map(function (e) {
                    return a[e];
                  }),
                  o = [],
                  c = Object(W.a)(i);
                try {
                  for (c.s(); !(n = c.n()).done; ) {
                    var p = n.value;
                    if (
                      ('code' === p.type &&
                        (p.id === t
                          ? o.push(
                              "\n    import _React from 'react';\n    import _ReactDOM from 'react-dom';\n\n    var show = (value) => {\n      const rootElement =  document.querySelector('#root');\n\n      if(typeof value === 'object'){\n        if(value.$$typeof && value.props){\n          _ReactDOM.render(value, rootElement)\n        } else {\n          rootElement.innerHTML = JSON.stringify(value);\n        }\n      } else {\n        rootElement.innerHTML = value\n      }\n    };\n    "
                            )
                          : o.push('var show = () => {}'),
                        o.push(p.content)),
                      p.id === t)
                    )
                      break;
                  }
                } catch (l) {
                  c.e(l);
                } finally {
                  c.f();
                }
                return o;
              }).join('\n'));
          return (
            Object(a.useEffect)(
              function () {
                o || i(ye({ cellId: n.id, rawCode: c }));
                var e = setTimeout(
                  Object(b.a)(
                    h.a.mark(function e() {
                      return h.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              i(ye({ cellId: n.id, rawCode: c }));
                            case 1:
                            case 'end':
                              return e.stop();
                          }
                      }, e);
                    })
                  ),
                  800
                );
                return function () {
                  e && clearTimeout(e);
                };
              },
              [n.content, n.id, i]
            ),
            Object(G.jsx)(u.a, {
              sx: { marginBottom: '21px' },
              children: Object(G.jsx)(xe, {
                direction: 'vertical',
                children: Object(G.jsxs)(fe, {
                  children: [
                    Object(G.jsx)(xe, {
                      direction: 'horizontal',
                      children: Object(G.jsx)(ae, {
                        initialValue: n.content,
                        onChange: function (e) {
                          return r({ id: n.id, content: e });
                        },
                      }),
                    }),
                    !o || (null !== o && void 0 !== o && o.isBundling)
                      ? Object(G.jsxs)(be, {
                          children: [
                            Object(G.jsx)(ie.a, {}),
                            Object(G.jsxs)(oe.a, {
                              variant: 'h6',
                              component: 'div',
                              children: [
                                o ? 'Bundling code' : 'Loading',
                                '...',
                              ],
                            }),
                          ],
                        })
                      : Object(G.jsx)(se, {
                          code: o.code,
                          bundlingStatus: o.err,
                        }),
                  ],
                }),
              }),
            })
          );
        },
        Ce = n(133),
        ke = n(692),
        Re = n(685),
        Ie =
          (n(640),
          function (e) {
            var t = e.cell,
              n = Object(a.useState)(!1),
              r = Object(ue.a)(n, 2),
              i = r[0],
              o = r[1],
              c = T().updateCell,
              p = Object(a.useRef)(null);
            return (
              Object(a.useEffect)(function () {
                var e = function (e) {
                  p.current && e.target && p.current.contains(e.target)
                    ? o(!0)
                    : o(!1);
                };
                return (
                  document.addEventListener('click', e, { capture: !0 }),
                  function () {
                    document.removeEventListener('click', e, { capture: !0 });
                  }
                );
              }, []),
              i
                ? Object(G.jsx)('div', {
                    className: 'text-editor',
                    ref: p,
                    children: Object(G.jsx)(Ce.a, {
                      value: t.content,
                      onChange: function (e) {
                        return c({ id: t.id, content: e || '' });
                      },
                    }),
                  })
                : Object(G.jsx)('div', {
                    className: 'text-editor',
                    onClick: function () {
                      return o(!0);
                    },
                    children: Object(G.jsx)(Re.a, {
                      variant: 'outlined',
                      children: Object(G.jsx)(ke.a, {
                        children: Object(G.jsx)(Ce.a.Markdown, {
                          source: t.content || '## Click to edit',
                        }),
                      }),
                    }),
                  })
            );
          }),
        Se = Object(s.a)('div')(function (e) {
          e.theme;
          return { position: 'relative' };
        }),
        ze = Object(s.a)('div')(function (e) {
          return {
            width: '100%',
            height: e.theme.spacing(3),
            backgroundColor: '#37414b',
          };
        }),
        He = function (e) {
          var t = e.cell,
            n = Object(G.jsx)(G.Fragment, {});
          return (
            'code' === t.type
              ? (n = Object(G.jsxs)(G.Fragment, {
                  children: [
                    Object(G.jsx)(ze, {
                      children: Object(G.jsx)(K, { cellId: t.id }),
                    }),
                    Object(G.jsx)(we, { cell: t }),
                  ],
                }))
              : 'text' === t.type &&
                (n = Object(G.jsxs)(G.Fragment, {
                  children: [
                    Object(G.jsx)(K, { cellId: t.id }),
                    Object(G.jsx)(Ie, { cell: t }),
                  ],
                })),
            Object(G.jsx)(Se, { children: n })
          );
        },
        Be = n(132),
        Ee = n.n(Be),
        qe = Object(s.a)('div', {
          shouldForwardProp: function (e) {
            return 'forceVisible' !== e && 'opacity' !== e;
          },
        })(function (e) {
          var t = e.theme,
            n = e.forceVisible,
            r = e.opacity;
          return {
            position: 'relative',
            marginBlock: t.spacing(2),
            display: 'flex',
            gap: t.spacing(20),
            justifyContent: 'center',
            opacity: n ? r : 0,
            transition: 'opacity 0.3s ease-in .1s',
            '&:hover': { opacity: 1 },
            '&:active': { opacity: 1, transition: 'opacity 0s' },
            '& > .MuiButton-root': {
              zIndex: 2,
              backgroundColor: t.palette.background.paper,
              borderRadius: '100rem',
              '&:hover': { backgroundColor: t.palette.background.paper },
            },
          };
        }),
        Fe = Object(s.a)('div')({
          position: 'absolute',
          top: '50%',
          bottom: '50%',
          borderBottom: '1px solid',
          width: '80%',
          zIndex: 1,
        }),
        Te = function (e) {
          var t = e.previousCellId,
            n = e.forceVisible,
            r = void 0 !== n && n,
            i = e.opacity,
            o = void 0 === i ? 1 : i,
            c = T().insertCell,
            p = M(function (e) {
              return e.cells;
            }).order;
          return (
            Object(a.useEffect)(function () {
              t === p[p.length - 1] &&
                window.scrollTo({
                  top: window.document.body.scrollHeight,
                  behavior: 'smooth',
                });
            }, []),
            Object(G.jsxs)(qe, {
              forceVisible: r,
              opacity: o,
              children: [
                Object(G.jsx)(J.a, {
                  startIcon: Object(G.jsx)(Ee.a, {}),
                  size: 'small',
                  variant: 'outlined',
                  onClick: function () {
                    return c({ id: t, type: 'code' });
                  },
                  children: 'Code',
                }),
                Object(G.jsx)(J.a, {
                  startIcon: Object(G.jsx)(Ee.a, {}),
                  size: 'small',
                  variant: 'outlined',
                  onClick: function () {
                    return c({ id: t, type: 'text' });
                  },
                  children: 'MarkDown',
                }),
                Object(G.jsx)(Fe, {}),
              ],
            })
          );
        },
        Le = Object(s.a)(u.a)(function (e) {
          var t = e.theme;
          return {
            margin: '0 '.concat(t.spacing(3)),
            '.react-draggable-transparent-selection &': {
              marginBottom: '100vh',
            },
          };
        }),
        Me = function (e) {
          var t = L();
          Object(a.useEffect)(function () {
            t(v());
          }, []);
          var n = M(function (e) {
              return e.cells;
            }),
            r = n.data,
            i = n.order.map(function (e) {
              return r[e];
            }),
            o = i.map(function (e) {
              return Object(G.jsxs)(
                a.Fragment,
                {
                  children: [
                    Object(G.jsx)(He, { cell: e }),
                    Object(G.jsx)(Te, { previousCellId: e.id }),
                  ],
                },
                e.id
              );
            });
          return (
            o.push(),
            Object(G.jsxs)(Le, {
              children: [
                Object(G.jsx)(Te, {
                  forceVisible: !0,
                  opacity: 0 === i.length ? 1 : 0,
                  previousCellId: null,
                }),
                o,
              ],
            })
          );
        },
        We = Object(s.a)(u.a)(function (e) {
          var t = e.theme;
          return {
            color: t.palette.primary.main,
            backgroundColor: t.palette.background.paper,
          };
        }),
        Ae = function () {
          return Object(G.jsxs)(c.a, {
            theme: l,
            children: [
              Object(G.jsx)(d.a, {}),
              Object(G.jsx)(B.a, {
                store: H,
                children: Object(G.jsx)(We, {
                  children: Object(G.jsx)(Me, {}),
                }),
              }),
            ],
          });
        };
      o.a.render(Object(G.jsx)(Ae, {}), document.querySelector('#root'));
    },
  },
  [[641, 1, 2]],
]);
//# sourceMappingURL=main.eaff3ed2.chunk.js.map
