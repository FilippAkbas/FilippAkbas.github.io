<template>
  <div id="chart">
    <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: 'StrokedGauge',
  components: {},
  data() {
    return {
      series: [67],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar',
          offsetY: -10,
        },
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            dataLabels: {
              name: {
                fontSize: '16px',
                color: undefined,
                offsetY: 120,
              },
              value: {
                offsetY: 76,
                fontSize: '22px',
                color: undefined,
                formatter: function(val) {
                  return val + '%';
                },
              },
            },
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 0.15,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 50, 65, 91],
          },
        },
        stroke: {
          dashArray: 4,
        },
        labels: ['Median Ratio'],
      },
    };
  },
};
</script>
