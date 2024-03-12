import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as Aos from 'aos';
import { Chart, ChartConfiguration, ChartOptions } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private title: Title) {
    this.title.setTitle('Dashboard');
  }

  // Data Chart
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['2018', '2019', '2020', '2021', '2022'],
    datasets: [
      {
        data: [20, 55, 75, 35, 78],
        fill: false,
        borderColor: '#48A846',
        borderWidth: 2,
        tension: 0.4,
        pointBorderWidth: 1,
        pointBorderColor: '#48A846',
        pointRadius: 4,
        pointBackgroundColor: '#48A846',
        pointStyle: 'circle',
      },
      {
        data: [77, 19, 65, 85, 65],
        fill: false,
        borderColor: '#2B9EB3',
        borderWidth: 2,
        tension: 0.4,
        pointBackgroundColor: '#2B9EB3',
        pointBorderWidth: 1,
        pointBorderColor: '#2B9EB3',
        pointStyle: 'circle',
        pointRadius: 4,
      },
    ],
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: '#333333',
        yAlign: 'bottom',
        xAlign: 'center',
        displayColors: false,
        cornerRadius: 18,
        titleMarginBottom: 0,
        titleSpacing: 0,
        caretSize: 6,
        caretPadding: 5,
        titleFont: {
          size: 0,
          lineHeight: 0,
        },
        padding: {
          top: 6,
          bottom: 6,
          left: 14,
          right: 14,
        },
        bodyFont: {
          size: 12,
          lineHeight: '20px',
          weight: '500',
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#666666',
          font: {
            size: 12,
            lineHeight: '18px',
          },
          padding: 8,
        },
        grid: {
          drawTicks: false,
        },
        border: {
          color: '#E6E6E6',
        },
      },
      y: {
        ticks: {
          color: '#666666',
          font: {
            size: 12,
            lineHeight: '18px',
          },
          padding: 8,
          stepSize: 20,
        },
        grid: {
          drawTicks: false,
        },
        beginAtZero: true,
        max: 100,
        border: {
          color: '#E6E6E6',
        },
      },
    },
    animation: {
      duration: 2500,
      easing: 'easeOutSine',
    },
  };

  // AOS Initialization
  ngOnInit(): void {
    Aos.init({
      duration: 600,
      easing: 'ease-in-sine',
      once: true,
    });

    // Device Chart
    new Chart('devicesChart', {
      type: 'doughnut',
      data: {
        labels: ['Mobile', 'Tablet', 'Desktop'],
        datasets: [
          {
            data: [35, 15, 50],
            backgroundColor: ['#0D4FFA', '#48A846', '#F03C3D'],
            borderWidth: 0,
            offset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        cutout: '83%',
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
}
