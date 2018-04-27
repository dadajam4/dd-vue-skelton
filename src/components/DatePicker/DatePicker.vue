<template>
<div class="vc@date-picker">
  <div class="vc@date-picker__stack vc@date-picker__stack--base vc@date-picker__stack--date">
    <div class="vc@date-picker__header">
      <vt@btn class="vc@date-picker__header__action" icon="angle-left" />
      <strong class="vc@date-picker__header__values">
        <span class="vc@date-picker__header__value vc@date-picker__header__month" @click.stop="monthActive = true">April</span>
        <span class="vc@date-picker__header__value vc@date-picker__header__year" @click.stop="yearActive = true">2018</span>
      </strong>
      <vt@btn class="vc@date-picker__header__action" icon="angle-right" />
    </div>
    <div class="vc@date-picker__body">
      <table class="vc@date-picker__table">
        <thead>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <vt@btn flat icon grey>30</vt@btn>
            </td>
            <td>
              <vt@btn flat icon grey>31</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>1</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>2</vt@btn>
            </td>
            <td>
              <vt@btn flat icon disabled>3</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>4</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>5</vt@btn>
            </td>
          </tr>
          <tr>
            <td>
              <vt@btn flat icon>6</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>7</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>8</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>9</vt@btn>
            </td>
            <td>
              <vt@btn flat icon disabled>10</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>11</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>12</vt@btn>
            </td>
          </tr>
          <tr>
            <td>
              <vt@btn flat icon>13</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>14</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>15</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>16</vt@btn>
            </td>
            <td>
              <vt@btn icon primary outline>17</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>18</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>19</vt@btn>
            </td>
          </tr>
          <tr>
            <td>
              <vt@btn flat icon>20</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>21</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>22</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>23</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>24</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>25</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>26</vt@btn>
            </td>
          </tr>
          <tr>
            <td>
              <vt@btn flat icon>27</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>28</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>29</vt@btn>
            </td>
            <td>
              <vt@btn flat icon>30</vt@btn>
            </td>
            <td>
              <vt@btn flat icon grey>1</vt@btn>
            </td>
            <td>
              <vt@btn flat icon grey>2</vt@btn>
            </td>
            <td>
              <vt@btn flat icon grey>3</vt@btn>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="vc@date-picker__stack vc@date-picker__stack--month" :class="monthActive && 'vc@date-picker__stack--active'">
    <div class="vc@date-picker__header">
      <vt@btn class="vc@date-picker__header__action" icon="angle-left" />
      <strong class="vc@date-picker__header__values">
        <span class="vc@date-picker__header__value vc@date-picker__header__year">2018</span>
      </strong>
      <vt@btn class="vc@date-picker__header__action" icon="angle-right" />
    </div>
    <div class="vc@date-picker__body">
      <ol class="vc@date-picker__month-list">
        <li><vt@btn flat @click.stop="monthActive = false">JAN</vt@btn></li>
        <li><vt@btn flat @click.stop="monthActive = false">FEB</vt@btn></li>
        <li><vt@btn flat @click.stop="monthActive = false">MAR</vt@btn></li>
        <li><vt@btn flat @click.stop="monthActive = false">APR</vt@btn></li>
        <li><vt@btn outline primary @click.stop="monthActive = false">MAY</vt@btn></li>
        <li><vt@btn flat @click.stop="monthActive = false">JUN</vt@btn></li>
        <li><vt@btn flat @click.stop="monthActive = false">JUL</vt@btn></li>
        <li><vt@btn flat @click.stop="monthActive = false">AUG</vt@btn></li>
        <li><vt@btn flat @click.stop="monthActive = false">SEP</vt@btn></li>
        <li><vt@btn flat @click.stop="monthActive = false">OCT</vt@btn></li>
        <li><vt@btn flat @click.stop="monthActive = false">NOV</vt@btn></li>
        <li><vt@btn flat @click.stop="monthActive = false">DEC</vt@btn></li>
      </ol>
    </div>
    <vt@btn class="vc@date-picker__stack__close" icon="close" @click.stop="monthActive = false" />
  </div>

  <div class="vc@date-picker__stack vc@date-picker__stack--year" :class="yearActive && 'vc@date-picker__stack--active'">
    <vt@scroller
      class="vc@date-picker__year-scroller"
      content-tag="ul"
    >
      <li
        v-for="n in $util.createRange(200, 1900)"
        :key="n"
        :class="n === 1903 && 'vc@date-picker__year--active'"
         @click.stop="yearActive = false"
      >{{n}}</li>
    </vt@scroller>
    <vt@btn class="vc@date-picker__stack__close" icon="close" @click.stop="yearActive = false" />
  </div>
</div>
</template>

<script>
export default {
  name: 'vt@date-picker',

  data() {
    return {
      monthActive: false,
      yearActive: false,
    }
  },
}
</script>
