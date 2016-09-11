$(function () {

    $(document).ready(function () {

        // Build the chart
    	url="/GitMining/repository/createtime"
			$.ajax(url, {
				type : 'GET',
				success : function(data, textStatus) {
					// Build the chart
					var displaydata = [];
					for(var key in data){
						displaydata.push([key,data[key]]);
					}
					var chart = new Highcharts.Chart({
						chart : {					
							type : 'pie',

							renderTo: 'createtime',
							marginTop: 0,
							plotBackgroundColor : null,
							plotBorderWidth : null,
							backgroundColor: 'rgba(255, 255, 255, 0)',
							plotBorderColor : null,
							plotBackgroundImage:null,
							plotShadow : false
						},
						title : {
							text : 'The Distribution of Create Time'
						},
						colors:[
							'#83AF9B',
							'#C8C8A9',//第二个颜色
							'#F9CDAD',//第三个颜色
							'#FC9D9A', //。。。。
							'#FE4365'

						],
						tooltip : {
							pointFormat : '{series.name}: <b>{point.percentage:.1f}%</b>'
						},
						legend: {
							align: 'right',
							verticalAlign: 'right',
							layout: 'vertical',
							x: 20,
							y: 20
						},
						plotOptions : {
							pie : {
								allowPointSelect : true,
								cursor : 'pointer',
								dataLabels : {
									enabled : false
								},
								showInLegend : true
							}
						},
						series : [ {
							name : 'Count',
							data : displaydata
						} ]
					});
				}
			});
    	
    	
      	url="/GitMining/repository/createseason"
			$.ajax(url, {
				type : 'GET',
				success : function(data, textStatus) {
					// Build the chart
					var displaydata = [];
					for(var key in data){
						displaydata.push([key,data[key]]);
					}
					var chart = new Highcharts.Chart({
						chart : {					
							type : 'pie',
							renderTo: 'createseason',
							marginTop: 0,
							plotBackgroundColor : null,
							plotBorderWidth : null,
							backgroundColor: 'rgba(255, 255, 255, 0)',
							plotBorderColor : null,
							plotBackgroundImage:null,
							plotShadow : false
						},
						title:{
							text:''
						},
						colors:[
							'#83AF9B',
							'#C8C8A9',//第二个颜色
							'#F9CDAD',//第三个颜色
							'#FC9D9A', //。。。。
							'#FE4365'

						],
						colors:[
							'#83AF9B',
							'#C8C8A9',//第二个颜色
							'#F9CDAD',//第三个颜色
							'#FC9D9A', //。。。。
							'#FE4365'

						],

						tooltip : {
							pointFormat : '{series.name}: <b>{point.percentage:.1f}%</b>'
						},
						legend: {
							align: 'right',
							verticalAlign: 'right',
							layout: 'vertical',
							x: 20,
							y: 20
						},
						plotOptions : {
							pie : {
								allowPointSelect : true,
								cursor : 'pointer',
								dataLabels : {
									enabled : false
								},
								showInLegend : true
							}
						},
						series : [ {
							name : 'Count',
							data : displaydata
						} ]
					});
				}
			});
      	
      	url="/GitMining/repository/languagetime"
			$.ajax(url, {
				type : 'GET',
				success : function(data, textStatus) {
					// Build the chart

					var chart = new Highcharts.Chart({
							chart : {
							renderTo: 'languagetime',

								marginTop: 0,
								plotBackgroundColor : null,
								plotBorderWidth : null,
								backgroundColor: 'rgba(255, 255, 255, 0)',
								plotBorderColor : null,
								plotBackgroundImage:null,
								plotShadow : false

								},
					        title: {
					            text: 'Create Time in Language View',
					            x: -20 //center
					        },

					        xAxis: {
					            categories: ['2008','2009','2010']
					        },
					        yAxis: {
					            title: {
					                text: 'Count'
					            },
					            plotLines: [{
					                value: 0,
					                width: 1,
					                color: '#808080'
					            }]
					        },

					        legend: {
					            layout: 'vertical',
					            align: 'right',
					            verticalAlign: 'middle',
					            borderWidth: 0
					        },
					        series: [{
					            name: 'c',
					            data: data.count1
					        }, {
					            name: 'java',
					            data: data.count2
					        }, {
					            name: 'jsp',
					            data: data.count3
					        }, {
					            name: 'php',
					            data: data.count4
					        }, {
					            name: 'python',
					            data: data.count5
					        }, {
					        	  name: 'ruby',
						           data: data.count6
					        }]
					    });
				}
			});
    	
      	
      	url="/GitMining/repository/actiontime"
			$.ajax(url, {
				type : 'GET',
				success : function(data, textStatus) {
					// Build the chart					
					var chart = new Highcharts.Chart({
						chart : {
							renderTo: 'actiontime',
							marginTop: 0,
							plotBackgroundColor : null,
							plotBorderWidth : null,
							backgroundColor: 'rgba(255, 255, 255, 0)',
							plotBorderColor : null,
							plotBackgroundImage:null,
							plotShadow : false
							
								},
						 title: {
					            text: ''
					        },
					        xAxis: {
					            categories: ['Morning', 'Afternoon', 'Evening', 'Beforedawn']
					        },
					        labels: {
					            items: [{
					                style: {
					                    left: '50px',
					                    top: '18px',
					                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
					                }
					            }]
					        },
					        series: [{
					            type: 'column',
								color:'#C8C8A9',
					            name: 'fork',
					            data: data.count2
					        },{
					            type: 'column',
					            name: 'watch',
								color:'#FC9D9A',
					            data: data.count3
					        },   {
					            type: 'spline',
					            name: 'Average',
					            data: data.count4,
					            marker: {
					                lineWidth: 2,
					                lineColor: Highcharts.getOptions().colors[3],
					                fillColor: 'white'
					            }
					        }, {
					            type: 'pie',
					            name: 'action',
					            data: [{
					                name: 'added',
					                y: 218,
					                color: Highcharts.getOptions().colors[2] // Jane's color
					            }, {
					                name: 'fork',
					                y: 9282,
					                color: '#C8C8A9' // John's color
					            }, {
					                name: 'watch',
					                y: 16783,
					                color: '#FC9D9A' // Joe's color
					            }],
					            center: [170, 50],
					            size: 100,
					            showInLegend: false,
					            dataLabels: {
					                enabled: false
					            }
					        }]
					    });
						}
					});



		url="/GitMining/repository/actiontime"
		$.ajax(url, {
			type : 'GET',
			success : function(data, textStatus) {
				// Build the chart
				var chart = new Highcharts.Chart({
					chart : {
						renderTo: 'added',
						marginTop: 0,
						plotBackgroundColor : null,
						plotBorderWidth : null,
						backgroundColor: 'rgba(255, 255, 255, 0)',
						plotBorderColor : null,
						plotBackgroundImage:null,
						plotShadow : false
					},
					title: {
						text: ''
					},
					xAxis: {
						categories: ['Morning', 'Afternoon', 'Evening', 'Beforedawn']
					},
					labels: {
						items: [{
							style: {
								left: '50px',
								top: '18px',
								color: (Highcharts.theme && Highcharts.theme.textColor) || 'black'
							}
						}]
					},
					series: [{
						type: 'column',
						name: 'added',
						color:'#FC9D9A',
						data: data.count1
					},{
						type: 'spline',
						name: 'Average',
						data: data.count1,
						marker: {
							lineWidth: 2,
							lineColor: Highcharts.getOptions().colors[3],
							fillColor: 'white'
						}

					}]
				});
			}
		});


		url="/GitMining/repository/duration"
		$.ajax(url, {
			type : 'GET',
			success : function(data, textStatus) {
				// Build the chart
				var displaydata = [];
				for(var key in data){
					displaydata.push([key+" year",data[key]]);
				}
				var chart = new Highcharts.Chart({
					chart : {
						type : 'pie',
						renderTo: 'duration',
						marginTop: 0,
						plotBackgroundColor : null,
						plotBorderWidth : null,
						backgroundColor: 'rgba(255, 255, 255, 0)',
						plotBorderColor : null,
						plotBackgroundImage:null,
						plotShadow : false
					},
					title : {
						text : ''
					},
					colors:[
						'#83AF9B',
						'#C8C8A9',//第二个颜色
						'#F9CDAD',//第三个颜色
						'#FC9D9A', //。。。。
						'#FE4365'

					],
					tooltip : {
						pointFormat : '{series.name} : <b>{point.percentage:.1f}%</b>'
					},
					legend: {
						align: 'right',
						verticalAlign: 'right',
						layout: 'vertical',
						x: 20,
						y: 20
					},
					plotOptions : {
						pie : {
							allowPointSelect : true,
							cursor : 'pointer',
							dataLabels : {
								enabled : false
							},
							showInLegend : true
						}
					},
					series : [ {
						name : 'Count',
						data : displaydata
					} ]
				});
			}
		});


		url="/GitMining/repository/languagecontri"
		$.ajax(url, {
			type : 'GET',
			success : function(data, textStatus) {
				// Build the chart
				var chart = new Highcharts.Chart({

					chart: {
						type: 'boxplot',
						renderTo: 'languagecontri',
						marginTop: 0,
						plotBackgroundColor : null,
						plotBorderWidth : null,
						backgroundColor: 'rgba(255, 255, 255, 0)',
						plotBorderColor : null,
						plotBackgroundImage:null,
						plotShadow : false
					},

					title: {
						text: ''
					},
					colors:[
						'#83AF9B',
						'#C8C8A9',//第二个颜色
						'#F9CDAD',//第三个颜色
						'#FC9D9A', //。。。。
						'#FE4365'

					],

					legend: {
						enabled: false
					},

					xAxis: {
						categories: ['c', 'c++', 'java', 'jsp', 'objective-c','python','ruby'],
						
					},

					yAxis: {
						title: {
							text: 'Contributor Count'
						},
						
					},

					series: [{
						name: 'count',
						data: [
							data.count1,
							data.count2,
							data.count3,
							data.count4,
							data.count5,
							data.count6,
							data.count7
						],
						tooltip: {
							headerFormat: '<em>Language: {point.key}</em><br/>'
						}
					}, {
						name: 'Outlier',
						color: Highcharts.getOptions().colors[2],
						type: 'scatter',
						data: [ // x, y positions where 0 is the first category
							[0, 178],
							[0, 168],
							[1, 219],
							[1, 192],
							[4, 166],
							[5, 398],
							[5, 330],
							[6, 420],
							[6, 427],
							[6, 430],
							[6, 437]
						],
						marker: {
							fillColor: 'white',
							lineWidth: 1,
							lineColor: Highcharts.getOptions().colors[2]
						},
						tooltip: {
							pointFormat: 'Count: {point.y}'
						}
					}]

				});
			}
		});

		url="/GitMining/repository/languagecount"
		$.ajax(url, {
			type : 'GET',
			success : function(data, textStatus) {
				// Build the chart

				var chart = new Highcharts.Chart({
					chart: {
                        renderTo: 'languagefir',
						type: 'bar',
						marginTop: 0,
						plotBackgroundColor : null,
						plotBorderWidth : null,
						backgroundColor: 'rgba(255, 255, 255, 0)',
						plotBorderColor : null,
						plotBackgroundImage:null,
						plotShadow : false

					},
					title: {
						text: ''
					},
					colors:[
						'#83AF9B',
						'#C8C8A9',//第二个颜色
						'#F9CDAD',//第三个颜色
						'#FC9D9A', //。。。。
						'#FE4365'

					],
					xAxis: {
						categories: ['c', 'java', 'jsp', 'php', 'python','ruby'],
						title: {
							text: null
						}
					},
					yAxis: {
						min: 0,
						title: {
							text: 'count',
							align: 'high'
						},
						labels: {
							overflow: 'justify'
						}
					},
					plotOptions: {
						bar: {
							dataLabels: {
								enabled: true
							}
						}
					},
					legend: {
						layout: 'vertical',
						align: 'right',
						verticalAlign: 'top',
						x: -40,
						y: 80,
						floating: true,
						borderWidth: 1,
						backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
						shadow: true
					},
					credits: {
						enabled: false
					},
					series: [{
						name: '2008',
						data: data.count1

					}]
				});
			}
		});

        url="/GitMining/repository/languagecount"
        $.ajax(url, {
            type : 'GET',
            success : function(data, textStatus) {
                // Build the chart

                var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'languagesec',
                        type: 'bar',
						marginTop: 0,
						plotBackgroundColor : null,
						plotBorderWidth : null,
						backgroundColor: 'rgba(255, 255, 255, 0)',
						plotBorderColor : null,
						plotBackgroundImage:null,
						plotShadow : false
                    },
                    title: {
                        text: ''
                    },
					colors:[
						'#83AF9B',
						'#C8C8A9',//第二个颜色
						'#F9CDAD',//第三个颜色
						'#FC9D9A', //。。。。
						'#FE4365'

					],
                    xAxis: {
                        categories: ['c', 'java', 'jsp', 'php', 'python','ruby'],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'count',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 80,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        shadow: true
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: '2009',
                        data: data.count2

                    }]
                });
            }
        });

        url="/GitMining/repository/languagecount"
        $.ajax(url, {
            type : 'GET',
            success : function(data, textStatus) {
                // Build the chart

                var chart = new Highcharts.Chart({
                    chart: {
                        renderTo: 'languagethd',
                        type: 'bar',
						marginTop: 0,
						plotBackgroundColor : null,
						plotBorderWidth : null,
						backgroundColor: 'rgba(255, 255, 255, 0)',
						plotBorderColor : null,
						plotBackgroundImage:null,
						plotShadow : false
                    },
                    title: {
                        text: ''
                    },
					colors:[
						'#83AF9B',
						'#C8C8A9',//第二个颜色
						'#F9CDAD',//第三个颜色
						'#FC9D9A', //。。。。
						'#FE4365'

					],
                    xAxis: {
                        categories: ['c', 'java', 'jsp', 'php', 'python','ruby'],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        min: 0,
                        title: {
                            text: 'count',
                            align: 'high'
                        },
                        labels: {
                            overflow: 'justify'
                        }
                    },
                    plotOptions: {
                        bar: {
                            dataLabels: {
                                enabled: true
                            }
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: -40,
                        y: 80,
                        floating: true,
                        borderWidth: 1,
                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                        shadow: true
                    },
                    credits: {
                        enabled: false
                    },
                    series: [{
                        name: '2010',
                        data: data.count3

                    }]
                });
            }
        });

        url="/GitMining/repository/languagetime"
        $.ajax(url, {
            type : 'GET',
            success : function(data, textStatus) {
                // Build the chart


				var chart = new Highcharts.Chart({
					chart: {
						renderTo: 'languagecon',
						type: 'area',
						marginTop: 0,
						plotBackgroundColor : null,
						plotBorderWidth : null,
						backgroundColor: 'rgba(255, 255, 255, 0)',
						plotBorderColor : null,
						plotBackgroundImage:null,
						plotShadow : false
					},
					title: {
						text: ''
					},
					colors:[
						'#83AF9B',
						'#C8C8A9',//第二个颜色
						'#F9CDAD',//第三个颜色
						'#FC9D9A', //。。。。
						'#FE4365'

					],

					xAxis: {
						categories: ['2008', '2009', '2010'],
						tickmarkPlacement: 'on',
						title: {
							enabled: false
						}
					},
					yAxis: {
						title: {
							text: 'Percent'
						}
					},
					tooltip: {
						pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
						shared: true
					},
					plotOptions: {
						area: {
							stacking: 'percent',
							lineColor: '#ffffff',
							lineWidth: 1,
							marker: {
								lineWidth: 1,
								lineColor: '#ffffff'
							}
						}
					},
					series: [{
						name: 'c',
						data: data.count1
					}, {
						name: 'java',
						data: data.count2
					}, {
						name: 'jsp',
						data: data.count3
					}, {
						name: 'php',
						data: data.count4
					}, {
						name: 'python',
						data: data.count5
					}, {
						name: 'ruby',
						data: data.count6
					}]
				});

            }
        });

		$(function () {

			var chart = new Highcharts.Chart({
				chart: {
					renderTo: 'issue',
					type: 'scatter',
					zoomType: 'xy',
					marginTop: 0,
					plotBackgroundColor : null,
					plotBorderWidth : null,
					backgroundColor: 'rgba(255, 255, 255, 0)',
					plotBorderColor : null,
					plotBackgroundImage:null,
					plotShadow : false
				},
				title: {
					text: ''
				},

				xAxis: {
					title: {
						enabled: true,
						text: 'Issue'
					},
					startOnTick: true,
					endOnTick: true,
					showLastLabel: true
				},
				yAxis: {
					title: {
						text: 'Fork'
					}
				},
				legend: {
					layout: 'vertical',
					align: 'left',
					verticalAlign: 'top',
					x: 100,
					y: 70,
					floating: true,
					backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
					borderWidth: 1
				},
				plotOptions: {
					scatter: {
						marker: {
							radius: 5,
							states: {
								hover: {
									enabled: true,
									lineColor: 'rgb(100,100,100)'
								}
							}
						},
						states: {
							hover: {
								marker: {
									enabled: false
								}
							}
						},
						tooltip: {
							headerFormat: '<b>{series.name}</b><br>',
							pointFormat: '{point.x} cm, {point.y} kg'
						}
					}
				},
				series: [{
					name: '',
					color: 'rgba(223, 83, 83, .5)',
					data: [[385, 2544], [345, 2520], [342, 2355], [321, 2313],
						[315, 2236], [314, 2044], [307, 2006], [297, 1993],
						[285, 1872], [283, 1815], [282, 1786], [280, 1750],
						[274, 1742], [265, 1710], [262, 1710], [259, 1709],
						[250, 1699], [249, 1645], [243, 1602], [239, 1567],
						[239, 1555], [238, 1528], [232, 1497], [231, 1472],
						[222, 1463], [221, 1458], [220, 1456], [220, 1426],
						[220, 1421], [216, 1376], [215, 1331], [215, 1307],
						[214, 1298], [213, 1292], [211, 1288], [210, 1287],
						[210, 1275], [207, 1244], [204, 1227], [204, 1219],
						[201, 1190], [198, 1187], [193, 1184], [192, 1182],
						[191, 1174], [189, 1162], [188, 1144], [188, 1142],
						[188, 1120], [184, 1120], [180, 1101], [177, 1094],
						[175, 1088], [175, 1087], [173, 1078], [171, 1064],
						[171, 1062], [170, 1030], [168, 1015], [168, 1005],
						[168, 1003], [166, 1002], [165, 988], [164, 958],
						[163, 958], [162, 958], [161, 955], [159, 952],
						[158, 952], [157, 937], [157, 932], [155, 927],
						[152, 922], [151, 922], [151, 914], [149, 913],
						[148, 882], [147, 879], [147, 873], [143, 861],
						[143, 855], [143, 851], [141, 851], [140, 836],
						[139, 831], [138, 830], [137, 829], [137, 825],
						[137, 810], [137, 803], [136, 794], [136, 791],
						[135, 788], [135, 774], [133, 765], [133, 761],
						[133, 760], [131, 760], [130, 758], [130, 758]]
				}]
			});
		});


	});
});