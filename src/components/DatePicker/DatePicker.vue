<template>
<div class="vc@date-picker">
  <div class="vc@date-picker__header vc@context-color--primary">
    <vt@btn class="vc@date-picker__header__action" icon="angle-left" />
    <strong class="vc@date-picker__header__values">
      <span class="vc@date-picker__header__value vc@date-picker__header__month">April</span>
      <span class="vc@date-picker__header__value vc@date-picker__header__year">2018</span>
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
</template>

<script>
export default {
  name: 'vt@date-picker',
}
</script>
